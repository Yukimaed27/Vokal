import test from 'node:test';
import assert from 'node:assert/strict';
import {createCloud,validateConfig} from '../src/cloud.js';
const config = {supabaseUrl:'https://vokal-test.supabase.co',supabasePublishableKey:'sb_publishable_public-test-key-for-vokal'};
const id = '12345678-1234-1234-1234-123456789abc';
const session = {access_token:'test-token',refresh_token:'test-refresh',expires_in:3600,user:{id,email:'test@example.com'}};
function memory() {const data = new Map();return {getItem:k => data.get(k) ?? null,setItem:(k,v) => data.set(k,v),removeItem:k => data.delete(k)};}
test('la nube desactivada funciona sin cuenta y rechaza claves secretas o destinos ajenos', () => {
  assert.equal(validateConfig({}),null);
  assert.throws(() => validateConfig({...config,supabaseUrl:'http://example.com'}));
  assert.throws(() => validateConfig({...config,supabasePublishableKey:'sb_secret_bad'}));
  const secret = `eyJhbGciOiJIUzI1NiJ9.${btoa(JSON.stringify({role:'service_role'}))}.signature`;
  assert.throws(() => validateConfig({...config,supabasePublishableKey:secret}));
});
test('OTP, sesión y sincronización envían identidad autenticada y nunca una clave administrativa', async () => {
  const calls = [];
  const storage = memory();
  const fetcher = async (url,options) => {
    calls.push({url,options});
    return Response.json(url.endsWith('/verify') ? session : url.includes('/sync_progress') ? {completed:['saludos'],reviews:{}} : {});
  };
  const cloud = createCloud(config,{fetcher,storage});
  await assert.rejects(cloud.sync({}),/Inicia sesión/);
  await cloud.sendCode('test@example.com');
  assert.equal(calls[0].options.headers.Authorization,undefined);
  await cloud.verifyCode('test@example.com','123456');
  assert.equal(cloud.user.id,id);
  await cloud.sync({completed:['saludos'],reviews:{}});
  assert.equal(calls.at(-1).options.headers.Authorization,'Bearer test-token');
  assert.equal(JSON.parse(calls.at(-1).options.body).incoming.completed[0],'saludos');
  assert.equal(createCloud(config,{fetcher,storage}).user.id,id);
  await cloud.signOut();
  assert.equal(cloud.user,null);
  assert.equal(createCloud(config,{fetcher,storage}).user,null);
});
test('una sesión caducada solo se renueva una vez ante sincronizaciones simultáneas', async () => {
  const storage = memory();let refreshes = 0;
  storage.setItem(`vokal.auth:${config.supabaseUrl}`,JSON.stringify({...session,expires_at:1}));
  const cloud = createCloud(config,{storage,fetcher:async url => {
    if (url.includes('refresh_token')) {refreshes++;return Response.json(session);}
    return Response.json({completed:[]});
  }});
  await Promise.all([cloud.sync({}),cloud.sync({})]);
  assert.equal(refreshes,1);
});
test('un error de red no borra la sesión y el cierre local funciona aunque falle la revocación', async () => {
  const storage = memory();
  storage.setItem(`vokal.auth:${config.supabaseUrl}`,JSON.stringify({...session,expires_at:Math.floor(Date.now()/1000)+3600}));
  const cloud = createCloud(config,{storage,fetcher:async () => {throw new Error('network failure');}});
  await assert.rejects(cloud.sync({}),/progreso sigue guardado/);
  assert.equal(cloud.user.id,id);
  await assert.rejects(cloud.signOut(),/no se pudo confirmar/);
  assert.equal(cloud.user,null);
});
test('fallos HTTP no se ocultan como una sincronización correcta', async () => {
  const cloud = createCloud(config,{storage:memory(),fetcher:async () => new Response('',{status:429})});
  await assert.rejects(cloud.sendCode('test@example.com'),/Demasiados intentos/);
});

test('GitHub usa PKCE S256 y conserva la ruta de Pages sin parametros privados', async () => {
  const storage = memory(), oauthStorage = memory();
  let exchanged;
  const cloud = createCloud(config,{storage,oauthStorage,fetcher:async (url,options) => {
    exchanged = {url,body:JSON.parse(options.body)};return Response.json(session);
  }});
  const url = new URL(await cloud.githubUrl('https://example.com/Vokal/?private=value#cuenta'));
  assert.equal(url.pathname,'/auth/v1/authorize');
  assert.equal(url.searchParams.get('provider'),'github');
  assert.equal(url.searchParams.get('redirect_to'),'https://example.com/Vokal/');
  assert.equal(url.searchParams.get('code_challenge_method'),'s256');
  const pending = JSON.parse(oauthStorage.getItem(`vokal.auth:${config.supabaseUrl}:pkce`));
  const digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pending.verifier));
  assert.equal(url.searchParams.get('code_challenge'),Buffer.from(digest).toString('base64url'));
  await cloud.completeOAuth('https://example.com/Vokal/?code=one-time-code');
  assert.equal(exchanged.url,`${config.supabaseUrl}/auth/v1/token?grant_type=pkce`);
  assert.deepEqual(exchanged.body,{auth_code:'one-time-code',code_verifier:pending.verifier});
  assert.equal(cloud.user.id,id);
  assert.equal(oauthStorage.getItem(`vokal.auth:${config.supabaseUrl}:pkce`),null);
  await assert.rejects(cloud.completeOAuth('https://example.com/Vokal/?code=replay'));
});

test('OAuth rechaza callbacks ajenos, vencidos, cancelados y almacenamiento bloqueado', async () => {
  const oauthStorage = memory();let calls = 0;
  const cloud = createCloud(config,{storage:memory(),oauthStorage,fetcher:async () => {calls++;return Response.json(session);}});
  assert.equal(await cloud.completeOAuth('http://localhost:3000/#cuenta'),null);
  await assert.rejects(cloud.githubUrl('http://example.com/'));
  await assert.rejects(cloud.completeOAuth('http://localhost:3000/?code=unexpected'));
  const url = new URL(await cloud.githubUrl('http://localhost:3000/#cuenta'));
  assert.equal(url.searchParams.get('redirect_to'),'http://localhost:3000/');
  const key = `vokal.auth:${config.supabaseUrl}:pkce`;
  const pending = JSON.parse(oauthStorage.getItem(key));
  oauthStorage.setItem(key,JSON.stringify({...pending,createdAt:Date.now()-601000}));
  await assert.rejects(cloud.completeOAuth('http://localhost:3000/?code=expired'));
  await assert.rejects(cloud.completeOAuth('http://localhost:3000/?error=access_denied'));
  assert.equal(oauthStorage.getItem(key),null);
  assert.equal(calls,0);
  const blocked = createCloud(config,{storage:memory(),oauthStorage:{setItem(){throw new Error('blocked');}}});
  await assert.rejects(blocked.githubUrl('http://localhost:3000/'),/almacenamiento/);
});

test('un fallo al intercambiar OAuth no inventa una sesion y permite reintentar', async () => {
  const oauthStorage = memory();let fail = true;
  const cloud = createCloud(config,{storage:memory(),oauthStorage,fetcher:async () => fail ? new Response('',{status:503}) : Response.json(session)});
  await cloud.githubUrl('http://localhost:3000/');
  await assert.rejects(cloud.completeOAuth('http://localhost:3000/?code=retry'));
  assert.equal(cloud.user,null);
  fail = false;
  await cloud.completeOAuth('http://localhost:3000/?code=retry');
  assert.equal(cloud.user.id,id);
});

test('cerrar sesion durante una renovacion no restaura la cuenta ni envia el progreso', async () => {
  const storage = memory();let resolveRefresh, syncs = 0;
  storage.setItem(`vokal.auth:${config.supabaseUrl}`,JSON.stringify({...session,expires_at:1}));
  const cloud = createCloud(config,{storage,fetcher:async url => {
    if (url.includes('refresh_token')) return new Promise(resolve => {resolveRefresh = resolve;});
    if (url.includes('sync_progress')) syncs++;
    return new Response(null,{status:204});
  }});
  const pending = cloud.sync({});
  await cloud.signOut();
  resolveRefresh(Response.json(session));
  await assert.rejects(pending);
  assert.equal(cloud.user,null);
  assert.equal(storage.getItem(`vokal.auth:${config.supabaseUrl}`),null);
  assert.equal(syncs,0);
});

test('no guarda tokens del proveedor GitHub ni acepta una sesion incompleta', async () => {
  const storage = memory();let value = {...session,provider_token:'must-not-persist',provider_refresh_token:'must-not-persist'};
  const cloud = createCloud(config,{storage,fetcher:async () => Response.json(value)});
  await cloud.verifyCode('test@example.com','123456');
  const cached = JSON.parse(storage.getItem(`vokal.auth:${config.supabaseUrl}`));
  assert.equal(cached.provider_token,undefined);
  assert.equal(cached.provider_refresh_token,undefined);
  value = {...session,user:{id:'bad'}};
  await assert.rejects(cloud.verifyCode('test@example.com','123456'));
  assert.equal(cloud.user.id,id);
});
