import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    // Only public application files are served; repository context and credentials stay private.
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (!['index.html','src/app.js','src/style.css','src/learning.js','src/content.js'].includes(relative)) {res.writeHead(404);res.end('No encontrado');return;}
    const body = await readFile(path.join(root,relative));
    res.writeHead(200,{'Content-Type':types[path.extname(relative)],'X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});res.end(body);
  } catch {res.writeHead(400);res.end('Solicitud no válida');}
}).listen(3000,'127.0.0.1',()=>console.log('Vokal: http://localhost:3000 (Ctrl+C para detener)'));
