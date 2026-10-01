// npm run dev  (or: node build.js && node serve.js)  ->  http://localhost:4400
//
// A tiny static router over dist/ that behaves like Vercel with
// { "cleanUrls": true, "trailingSlash": false }, so what you see locally is
// what ships:
//   /kit          -> serves dist/kit.html
//   /kit.html     -> 308 redirect to /kit        (query string kept)
//   /kit/         -> 308 redirect to /kit
//   /index.html   -> 308 redirect to /
//   anything else -> dist/404.html with status 404
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 4400;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon',
};

if (!fs.existsSync(ROOT)) {
  console.error('dist/ not found. Run "node build.js" first (or "npm run dev").');
  process.exit(1);
}

const isFile = p => { try { return fs.statSync(p).isFile(); } catch { return false; } };

function send(res, file, status) {
  res.writeHead(status, {
    'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  fs.createReadStream(file).pipe(res);
}

function redirect(res, location) {
  res.writeHead(308, { Location: location });
  res.end();
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = '/'; }
  const query = url.search;

  // canonical URLs: no .html, no trailing slash
  if (pathname === '/index.html') return redirect(res, '/' + query);
  if (pathname.endsWith('.html')) return redirect(res, pathname.replace(/(\/index)?\.html$/, '') + query);
  if (pathname.length > 1 && pathname.endsWith('/')) return redirect(res, pathname.replace(/\/+$/, '') + query);

  const target = path.normalize(path.join(ROOT, pathname));
  if (!target.startsWith(ROOT)) { res.writeHead(403); return res.end(); }

  if (pathname === '/') return send(res, path.join(ROOT, 'index.html'), 200);
  if (isFile(target)) return send(res, target, 200);                       // css, js, images
  if (isFile(target + '.html')) return send(res, target + '.html', 200);  // clean route
  if (isFile(path.join(target, 'index.html'))) return send(res, path.join(target, 'index.html'), 200);
  return send(res, path.join(ROOT, '404.html'), 404);
}).listen(PORT, () => console.log(`UNHEARD redesign -> http://localhost:${PORT}`));
