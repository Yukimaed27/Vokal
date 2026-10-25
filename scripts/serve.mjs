import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {publicFiles} from './public-files.mjs';
import {publicConfig} from './config.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
export function createAppServer(config) {return http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    // Only public application files are served; repository context and credentials stay private.
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (![...publicFiles,'src/config.js'].includes(relative)) {res.writeHead(404);res.end('No encontrado');return;}
    const body = relative === 'src/config.js' ? config : await readFile(path.join(root,relative));
    res.writeHead(200,{'Content-Type':types[path.extname(relative)],'X-Content-Type-Options':'nosniff','Cache-Control':'no-store','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self' https://*.supabase.co; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'"});res.end(body);
  } catch {res.writeHead(400);res.end('Solicitud no válida');}
});}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createAppServer(await publicConfig()).listen(3000,'127.0.0.1',()=>console.log('Vokal: http://localhost:3000 (Ctrl+C para detener)'));
}
