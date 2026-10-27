export function validateConfig(config) {
  if (!config?.supabaseUrl && !config?.supabasePublishableKey) return null;
  const url = String(config.supabaseUrl ?? '').replace(/\/$/, '');
  const key = String(config.supabasePublishableKey ?? '');
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) throw new Error('La URL debe ser la de tu proyecto de Supabase con HTTPS.');
  let publicKey = key.startsWith('sb_publishable_') && key.length > 25;
  if (key.startsWith('eyJ')) {
    try { publicKey = JSON.parse(atob(key.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).role === 'anon'; } catch { publicKey = false; }
  }
  if (!publicKey) throw new Error('Usa únicamente una clave pública publishable o anon. Nunca una clave secreta.');
  return {url, key};
}

export function createCloud(config, {fetcher = globalThis.fetch, storage = globalThis.localStorage, oauthStorage = globalThis.sessionStorage, crypto = globalThis.crypto} = {}) {
  const settings = validateConfig(config);
  if (!settings) return null;
  const storageKey = `vokal.auth:${settings.url}`;
  const oauthKey = `${storageKey}:pkce`;
  let session = null;
  let refreshing = null;
  let sessionRevision = 0;
  try {
    const cached = JSON.parse(storage.getItem(storageKey));
    if (cached?.access_token && cached?.refresh_token && /^[0-9a-f-]{36}$/i.test(cached.user?.id) && Number.isFinite(cached.expires_at)) session = cached;
  } catch { /* An invalid local session must never stop guest learning. */ }
  async function request(path, {body, method = 'POST', token} = {}) {
    let response;
    try {
      response = await fetcher(`${settings.url}${path}`, {
        method, headers:{apikey:settings.key,'Content-Type':'application/json',...(token ? {Authorization:`Bearer ${token}`} : {})},
        ...(body === undefined ? {} : {body:JSON.stringify(body)}), signal:AbortSignal.timeout(15000),
      });
    } catch { throw new Error('No se pudo conectar con la nube. Tu progreso sigue guardado en este dispositivo.'); }
    if (!response.ok) {
      const error = new Error(response.status === 429 ? 'Demasiados intentos. Espera un momento y vuelve a intentarlo.' : response.status === 401 || response.status === 403 ? 'La sesión o el código no son válidos. Vuelve a iniciar sesión.' : 'No se pudo completar la operación. Comprueba la configuración o inténtalo de nuevo.');
      error.status = response.status; throw error;
    }
    return response.status === 204 ? null : response.json();
  }
  function storeSession(value) {
    if (!value?.access_token || !value.refresh_token || !/^[0-9a-f-]{36}$/i.test(value.user?.id ?? '') || !Number.isFinite(value.expires_at ?? value.expires_in)) throw new Error('La nube devolvió una sesión incompleta.');
    session = {access_token:value.access_token,refresh_token:value.refresh_token,user:{id:value.user.id,email:value.user.email},expires_at:value.expires_at ?? Math.floor(Date.now()/1000) + value.expires_in};
    try { storage.setItem(storageKey,JSON.stringify(session)); }
    catch { /* The session remains usable until this tab is closed. */ }
    return session.user;
  }
  async function token() {
    if (!session) throw new Error('Inicia sesión para sincronizar.');
    if (session.expires_at * 1000 <= Date.now() + 60000) {
      const revision = sessionRevision;
      refreshing ??= request('/auth/v1/token?grant_type=refresh_token',{body:{refresh_token:session.refresh_token}})
        .then(value => {if (revision !== sessionRevision) throw new Error('La sesi\u00f3n se cerr\u00f3. Vuelve a entrar.');return storeSession(value);}).finally(() => {refreshing = null;});
      await refreshing;
    }
    return session.access_token;
  }
  return {
    get user() { return session?.user ?? null; },
    async githubUrl(redirectTo) {
      const redirect = new URL(redirectTo);
      if (redirect.protocol !== 'https:' && !(redirect.protocol === 'http:' && ['localhost','127.0.0.1'].includes(redirect.hostname))) throw new Error('El acceso requiere HTTPS o localhost.');
      redirect.search = '';redirect.hash = '';
      const verifier = Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2,'0')).join('');
      const digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier));
      const challenge = btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
      try {oauthStorage.setItem(oauthKey,JSON.stringify({verifier,createdAt:Date.now()}));}
      catch {throw new Error('Permite el almacenamiento de esta pestaña para iniciar sesión.');}
      const url = new URL(`${settings.url}/auth/v1/authorize`);
      url.search = new URLSearchParams({provider:'github',redirect_to:redirect.href,code_challenge:challenge,code_challenge_method:'s256'});
      return url.href;
    },
    async completeOAuth(callbackUrl) {
      const url = new URL(callbackUrl);
      if (!url.searchParams.has('code') && !url.searchParams.has('error')) return null;
      let pending;
      try {pending = JSON.parse(oauthStorage.getItem(oauthKey));} catch { /* Reject callbacks without a valid local request. */ }
      if (url.searchParams.has('error')) {
        oauthStorage.removeItem(oauthKey);
        throw new Error('No se completó el acceso con GitHub. Puedes intentarlo de nuevo.');
      }
      if (!/^[a-f0-9]{64}$/.test(pending?.verifier ?? '') || !Number.isFinite(pending?.createdAt) || Date.now() - pending.createdAt > 10 * 60 * 1000 || pending.createdAt > Date.now()) throw new Error('Este acceso caducó o se abrió en otra pestaña. Vuelve a entrar con GitHub.');
      const data = await request('/auth/v1/token?grant_type=pkce',{body:{auth_code:url.searchParams.get('code'),code_verifier:pending.verifier}});
      const user = storeSession(data);
      oauthStorage.removeItem(oauthKey);
      return user;
    },
    async sendCode(email) {
      return request('/auth/v1/otp',{body:{email,create_user:true}});
    },
    async verifyCode(email, code) {
      const data = await request('/auth/v1/verify',{body:{email,token:code,type:'email'}});
      return storeSession(data);
    },
    async sync(progress) {
      return request('/rest/v1/rpc/sync_progress',{body:{incoming:progress},token:await token()});
    },
    async signOut() {
      let logoutError;
      const accessToken = session?.access_token;
      sessionRevision++;session = null;
      try { if (accessToken) await request('/auth/v1/logout?scope=local',{token:accessToken}); }
      catch (error) { logoutError = error; }
      finally { session = null; try {storage.removeItem(storageKey);} catch { /* Session is still cleared in memory. */ } }
      if (logoutError) throw new Error('Se cerró la sesión aquí, pero no se pudo confirmar su revocación en la nube.');
    },
  };
}
