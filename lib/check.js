// npm run check
// Renders every route (which runs the clean-link guard in render.js), then
// scans the sources for any internal link that would land on a ".html" URL.
// Exits non-zero on the first problem, so it can gate a commit or a CI run.
const fs = require('fs');
const path = require('path');
const { ROUTES, NOT_FOUND, render } = require('./render');

const ROOT = path.join(__dirname, '..');
let failed = false;
const fail = msg => { failed = true; console.error('  ✗ ' + msg); };

console.log('Rendering pages');
for (const name of [...Object.values(ROUTES), NOT_FOUND]) {
  try { render(name); console.log('  ✓ ' + name); } catch (e) { fail(e.message); }
}

console.log('Scanning sources for .html links');
const files = [
  ...fs.readdirSync(path.join(ROOT, 'src/pages')).map(f => 'src/pages/' + f),
  'lib/render.js', 'public/js/main.js',
];
const linkish = /(?:href|action|location(?:\.href)?\s*=|navigate\()\s*=?\s*["'`]([^"'`]+)["'`]/g;
for (const f of files) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  for (const m of src.matchAll(linkish)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(u)) continue;
    if (/\.html?(?:[?#]|$)/i.test(u)) fail(`${f}: links to "${u}". Use the clean route instead (e.g. "/kit").`);
  }
}

if (failed) { console.error('\nCheck failed.'); process.exit(1); }
console.log('\nAll pages render and every internal link is a clean route.');
