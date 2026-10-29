import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
const args=process.argv.slice(2), option=(name,fallback)=>args[args.indexOf(name)+1]||fallback;
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
  try {
    if(new URL(req.url,'http://local').pathname==='/__preview'){
      const width=Math.max(320,Math.min(1024,Number(new URL(req.url,'http://local').searchParams.get('width'))||432));
      res.writeHead(200,{'Content-Type':'text/html'}).end(`<html><body style="margin:0;background:#202620;display:flex;justify-content:center"><iframe title="App mobile preview" src="/" style="width:${width}px;height:${Math.max(600,Math.min(1000,Number(new URL(req.url,'http://local').searchParams.get('height'))||768))}px;border:0"></iframe></body></html>`);return;
    }
    const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://local').pathname));
    if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403).end();return;}
    const file=path===root?resolve(root,'index.html'):path;
    const data=await readFile(file);
    res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(data);
  }catch{res.writeHead(404).end('Not found');}
}).listen(Number(option('--port',4173)),option('--host','0.0.0.0'));
