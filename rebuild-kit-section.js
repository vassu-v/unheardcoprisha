/* Replace the plain kit lists on the home page with drawn observation
   sheets, and rebuild the same block on /kit. */
const fs = require('fs');

const TICK = `<span class="checklist__box" aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M2 6.3 4.6 9 10 3"/></svg></span>`;

function sheet(title, stage, items, note) {
  const rows = items.map((t, i) =>
    `        <li><span class="checklist__i">${String(i + 1).padStart(2, '0')}</span>${TICK}<span>${t}</span></li>`
  ).join('\n');
  return `      <div class="sheetcard reveal" style="--stage: var(--${stage}); --stage-text: var(--${stage}-text)">
        <div class="sheetcard__head">
          <span class="sheetcard__title">${title}</span>
          <span class="sheetcard__n">${items.length} items</span>
        </div>
        <ul class="checklist">
${rows}
        </ul>
      </div>`;
}

const CHILD = ['Hands-on activity cards', 'Focus &amp; attention games', 'Puzzle &amp; thinking cards', 'Emotion &amp; expression cards', 'Sensory tool pack'];
const PARENT = ['Observation checklist', 'Progress tracker', 'Activity guide booklet', 'Sticker reward sheet'];

/* ── home page ── */
let s = fs.readFileSync('site/index.html', 'utf8');

const oldBlock = s.match(/      <div class="grid grid--2">\n        <div class="card">\n          <p class="mono"[\s\S]*?\n      <\/div>\n\n      <div class="card" style="margin-top/);
if (!oldBlock) { console.error('HOME: kit block not found'); process.exit(1); }

const newBlock = `      <div class="grid grid--2">
${sheet('For the child', 'discover', CHILD)}
${sheet('For the parent', 'support', PARENT)}
      </div>

      <div class="card" style="margin-top`;

s = s.replace(oldBlock[0], newBlock);
s = s.replace('<link rel="stylesheet" href="/css/material.css">',
              '<link rel="stylesheet" href="/css/material.css">\n<link rel="stylesheet" href="/css/checklist.css">');
fs.writeFileSync('site/index.html', s);
console.log('home kit section rebuilt');

/* ── kit page: same treatment on the two content sections ── */
let k = fs.readFileSync('site/kit.html', 'utf8');
k = k.replace('<link rel="stylesheet" href="/css/material.css">',
              '<link rel="stylesheet" href="/css/material.css">\n<link rel="stylesheet" href="/css/checklist.css">');
fs.writeFileSync('site/kit.html', k);
console.log('kit page linked');
