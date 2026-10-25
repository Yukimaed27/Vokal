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

export function createCloud(config, {fetcher = globalThis.fetch, storage = globalThis.localStorage} = {}) {
  const settings = validateConfig(config);
  if (!settings) return null;
  const storageKey = `vokal.auth:${settings.url}`;
  let session = null;
  let refreshing = null;
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
    if (!value?.access_token || !value.refresh_token || !value.user?.id) throw new Error('La nube devolvió una sesión incompleta.');
    session = {...value,expires_at:value.expires_at ?? Math.floor(Date.now()/1000) + value.expires_in};
    try { storage.setItem(storageKey,JSON.stringify(session)); }
    catch { /* The session remains usable until this tab is closed. */ }
    return session.user;
  }
  async function token() {
    if (!session) throw new Error('Inicia sesión para sincronizar.');
    if (session.expires_at * 1000 <= Date.now() + 60000) {
      refreshing ??= request('/auth/v1/token?grant_type=refresh_token',{body:{refresh_token:session.refresh_token}})
        .then(storeSession).finally(() => {refreshing = null;});
      await refreshing;
    }
    return session.access_token;
  }
  return {
    get user() { return session?.user ?? null; },
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
      try { if (session) await request('/auth/v1/logout?scope=local',{token:await token()}); }
      catch (error) { logoutError = error; }
      finally { session = null; try {storage.removeItem(storageKey);} catch { /* Session is still cleared in memory. */ } }
      if (logoutError) throw new Error('Se cerró la sesión aquí, pero no se pudo confirmar su revocación en la nube.');
    },
  };
}
