// npm run dev  ->  http://localhost:4400
//
// Local twin of the Vercel setup: files in public/ are served as-is, and every
// other request goes through the same router the Vercel function uses
// (api/router.js). Pages re-render on each request, so edits show on refresh.
const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./api/router');

const PUBLIC = path.join(__dirname, 'public');
const PORT = process.env.PORT || 4400;
const TYPES = {
  '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { pathname = '/'; }
  const file = path.normalize(path.join(PUBLIC, pathname));
  const ext = path.extname(file).toLowerCase();

  // static assets only (never .html: pages always go through the router)
  if (file.startsWith(PUBLIC + path.sep) && ext && ext !== '.html' && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    return fs.createReadStream(file).pipe(res);
  }
  router(req, res);
}).listen(PORT, () => console.log(`UNHEARD redesign -> http://localhost:${PORT}`));
