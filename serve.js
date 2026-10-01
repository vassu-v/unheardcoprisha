// node serve.js -> http://localhost:4400  (static, no dependencies)
// Clean URLs work too: /kit serves kit.html. Unknown paths get 404.html.
const http = require('http'), fs = require('fs'), path = require('path');
const PORT = process.env.PORT || 4400;
const T = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

function send(res, file, status) {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(status, { 'Content-Type': T[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}

http.createServer((req, res) => {
  let p = path.join(__dirname, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  if (p.endsWith(path.sep)) p += 'index.html';
  if (!path.extname(p) && fs.existsSync(p + '.html')) p += '.html';
  fs.stat(p, (err, st) => {
    if (err || !st.isFile()) return send(res, path.join(__dirname, '404.html'), 404);
    send(res, p, 200);
  });
}).listen(PORT, () => console.log('http://localhost:' + PORT));
