// Dev server with clean URLs. Resolution order must match production
// (vercel.json cleanUrls) or routing cannot be tested locally.
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, 'site');
const TYPES = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
  '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.json':'application/json',
  '.webp':'image/webp', '.woff2':'font/woff2' };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('.html')) { // 301 .html spellings to the clean form
    res.writeHead(301, { Location: p.replace(/(index)?\.html$/, '').replace(/\/$/, '') || '/' });
    return res.end();
  }
  const tries = p === '/' ? ['index.html']
    : [p.slice(1), p.slice(1) + '.html', path.join(p.slice(1), 'index.html')];
  for (const t of tries) {
    const f = path.join(ROOT, t);
    if (f.startsWith(ROOT) && fs.existsSync(f) && fs.statSync(f).isFile()) {
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      return res.end(fs.readFileSync(f));
    }
  }
  const nf = path.join(ROOT, '404.html');
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(fs.existsSync(nf) ? fs.readFileSync(nf) : 'Not found');
}).listen(4321, () => console.log('http://localhost:4321'));
