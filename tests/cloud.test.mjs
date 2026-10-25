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
