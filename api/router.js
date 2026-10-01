// The site's router. On Vercel this is a Node serverless function: vercel.json
// rewrites every non-static request here. Locally, serve.js calls the same
// handler, so both behave identically.
//
//   /, /kit, /activities, /about, /contact   -> rendered page (200)
//   /kit.html, /index.html, /about/          -> 308 to the clean URL (query kept)
//   /brand/swatches                          -> brand sheet
//   anything else                            -> 404 page (404)
const fs = require('fs');
const path = require('path');
const { ROUTES, NOT_FOUND, page } = require('../lib/render');

const SWATCHES = path.join(__dirname, '..', 'brand', 'swatches.html');

function redirect(res, location) {
  res.statusCode = 308;
  res.setHeader('Location', location);
  res.end();
}

function html(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // browsers revalidate; Vercel's edge may keep a copy for a minute
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300');
  res.end(body);
}

module.exports = function router(req, res) {
  const url = new URL(req.url, 'http://localhost');
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = '/'; }
  const query = url.search;

  // Canonical URLs: never .html, never a trailing slash.
  if (/\.html?$/i.test(pathname)) {
    const clean = pathname.replace(/\.html?$/i, '').replace(/\/index$/i, '') || '/';
    return redirect(res, clean + query);
  }
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return redirect(res, pathname.replace(/\/+$/, '') + query);
  }
  if (pathname !== pathname.toLowerCase() && ROUTES[pathname.toLowerCase()]) {
    return redirect(res, pathname.toLowerCase() + query);
  }

  try {
    if (ROUTES[pathname]) return html(res, 200, page(ROUTES[pathname]));
    if (pathname === '/brand/swatches') return html(res, 200, fs.readFileSync(SWATCHES, 'utf8'));
    return html(res, 404, page(NOT_FOUND));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Something went wrong rendering this page.');
  }
};
