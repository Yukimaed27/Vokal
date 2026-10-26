import test from 'node:test';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createAppServer} from '../scripts/serve.mjs';
test('sirve la aplicación y bloquea archivos privados, contexto y rutas arbitrarias', async t => {
  const server = createAppServer('export const cloudConfig = {};');
  server.listen(0,'127.0.0.1');await once(server,'listening');
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const home = await fetch(base);
  assert.equal(home.status,200);
  assert.match(home.headers.get('content-security-policy'),/script-src 'self'/);
  assert.match(await home.text(),/theme-toggle/);
  for (const file of ['src/curriculum.js','src/cloud.js','src/theme.css','src/config.js']) assert.equal((await fetch(`${base}/${file}`)).status,200);
  for (const file of ['.env','.git/config','AGENTS.md','src/config.local.js','package.json','supabase/migrations/001_progress.sql']) assert.equal((await fetch(`${base}/${file}`)).status,404);
  assert.equal((await fetch(`${base}/%`)).status,400);
});
