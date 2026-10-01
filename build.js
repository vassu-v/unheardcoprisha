// node build.js  ->  index.html, kit.html, activities.html, about.html, contact.html, 404.html
//
// Each file in src/pages/ is a page body. Its first line is a meta comment:
//   <!--meta {"title": "...", "desc": "...", "nav": "kit"}-->
// The builder wraps it in the shared head, nav and footer, then substitutes
// {{token}}s: brush shapes from shapes.js, and generated activity markup.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const shapes = JSON.parse(execFileSync(process.execPath, [path.join(ROOT, 'shapes.js')], { encoding: 'utf8' }));
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/activities.json'), 'utf8'));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// one splash colour per teaching model, so a card's tab says where it is from
const MODEL_FILL = { montessori: 'blush', reggio: 'butter', singapore: 'sage', finland: 'lav-mid', japan: 'teal' };

const NAV = [
  ['kit', 'kit.html', 'The kit'],
  ['activities', 'activities.html', 'Activities'],
  ['about', 'about.html', 'About'],
  ['contact', 'contact.html', 'Talk to us'],
];

const head = meta => `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<script>document.documentElement.classList.add('js')</script>
</head>`;

const symbols = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="sparkle" viewBox="0 0 100 100"><path d="M50 0C53 36 64 47 100 50C64 53 53 64 50 100C47 64 36 53 0 50C36 47 47 36 50 0Z"/></symbol>
  <symbol id="asterisk" viewBox="0 0 100 100"><g stroke-width="15" stroke-linecap="round"><path d="M50 8V92M8 50H92M20 20L80 80M80 20L20 80"/></g></symbol>
  <symbol id="scribble" viewBox="0 0 100 100"><path d="M8 70C14 30 26 18 26 44S20 92 38 70 50 14 56 36 52 88 70 64 82 18 86 34 80 76 94 60" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</svg>`;

const nav = active => `<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="nav">
  <div class="wrap nav__in">
    <a class="logo" href="index.html" aria-label="UNHEARD home">Unheard</a>
    <ul class="nav__links" id="navLinks">
${NAV.map(([id, href, label]) => `      <li><a href="${href}"${id === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('\n')}
      <li class="nav__menu-cta"><a class="btn" href="kit.html">Get the kit · ₹1,200</a></li>
    </ul>
    <a class="btn btn--sm nav__cta" href="kit.html">Get the kit · ₹1,200</a>
    <button class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="navLinks">
      <span class="sr-only">Menu</span>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 6h16M2 14h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>`;

const foot = `<footer class="foot">
  <div class="wrap">
    <div class="foot__grid">
      <div>
        <a class="logo" href="index.html">Unheard</a>
        <p class="foot__line">Nobody knows your child better than you do. We give you somewhere to write it down.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="kit.html">The kit</a></li>
          <li><a href="activities.html">Activity library</a></li>
          <li><a href="about.html">About &amp; research</a></li>
          <li><a href="contact.html">Talk to us</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:9958611717">99586 11717</a></li>
          <li><a href="mailto:unheard.corporation@gmail.com">unheard.corporation@gmail.com</a></li>
          <li><a href="https://instagram.com/unheardco" rel="noopener">@unheardco on Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="foot__base">
      <span>© 2026 UNHEARD · Listening to children who learn differently</span>
      <span>Not a diagnostic tool. Not a substitute for professional advice.</span>
    </div>
  </div>
</footer>
<script src="js/main.js"></script>
</body>
</html>
`;

// ---------- generated blocks ----------
const modelById = Object.fromEntries(data.models.map(m => [m.id, m]));

function activityCard(a) {
  const text = [a.name, a.desc, a.why, a.model, a.country, a.sub || '', ...a.skills].join(' ').toLowerCase();
  const origin = a.sub ? `${esc(a.country)} · ${esc(a.sub)}` : `${esc(a.model)} · ${esc(a.country)}`;
  return `<article class="act" style="--fill:var(--${MODEL_FILL[a.mid]})" data-model="${a.mid}" data-domains="${a.domains.join(' ')}" data-text="${esc(text)}">
  <span class="act__origin">${origin}</span>
  <h3 class="act__name">${esc(a.name)}</h3>
  <p class="act__desc">${esc(a.desc)}</p>
  <ul class="act__skills" aria-label="Skills">${a.skills.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
  <details class="act__why"><summary>Why it works</summary><p>${esc(a.why)}</p></details>
  <p class="act__src">Source: <a href="${esc(a.source.link)}" target="_blank" rel="noopener">${esc(a.source.name)}<span class="sr-only"> (opens in a new tab)</span> ↗</a></p>
</article>`;
}

const chip = (group, value, label, pressed) =>
  `<button type="button" class="chip" data-filter="${group}" data-value="${value}" aria-pressed="${pressed}">${label}</button>`;

const tokens = {
  ...shapes,
  activityCount: String(data.activities.length),
  activities: data.activities.map(activityCard).join('\n'),
  modelChips: [chip('model', 'all', 'All models', true),
    ...data.models.map(m => chip('model', m.id, `${esc(m.model)} <small>${data.activities.filter(a => a.mid === m.id).length}</small>`, false))].join('\n'),
  domainChips: [chip('domain', 'all', 'Everything', true),
    ...Object.entries(data.domains).map(([id, d]) => chip('domain', id, esc(d.label), false))].join('\n'),
  domainKey: Object.values(data.domains).map(d => `<li><strong>${esc(d.label)}</strong><span>${esc(d.desc)}</span></li>`).join('\n'),
  modelCards: data.models.map(m => `<article class="model reveal" style="--fill:var(--${MODEL_FILL[m.id]})">
  <span class="model__country">${esc(m.country)}</span>
  <h3>${esc(m.model)}</h3>
  <p>${esc(m.focus)}</p>${m.subModels.length ? `
  <ul class="model__subs">${m.subModels.map(s => `<li><strong>${esc(s.name)}</strong> ${esc(s.focus)}</li>`).join('')}</ul>` : ''}
  <span class="model__count">${data.activities.filter(a => a.mid === m.id).length} activities</span>
</article>`).join('\n'),
};

// ---------- render ----------
const pagesDir = path.join(ROOT, 'src/pages');
for (const file of fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'))) {
  const src = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const m = src.match(/^<!--meta\s+([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`${file}: missing <!--meta {...}--> header`);
  const meta = JSON.parse(m[1]);
  const body = src.slice(m[0].length).replace(/\{\{(\w+)\}\}/g, (all, k) => {
    if (!(k in tokens)) throw new Error(`${file}: unknown token {{${k}}}`);
    return tokens[k];
  });
  const html = `${head(meta)}\n<body${meta.bodyClass ? ` class="${meta.bodyClass}"` : ''}>\n${symbols}\n${nav(meta.nav)}\n<main id="main">\n${body.trim()}\n</main>\n${foot}`;
  fs.writeFileSync(path.join(ROOT, file), html);
  console.log('built', file);
}
