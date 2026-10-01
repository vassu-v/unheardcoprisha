// Page renderer, shared by the Vercel function (api/router.js) and the local
// server (serve.js). There is no build step: pages are rendered on request.
//
// Each file in src/pages/ is a page body whose first line is a meta comment:
//   <!--meta {"title": "...", "desc": "...", "nav": "kit"}-->
// render() wraps it in the shared head, nav and footer and substitutes
// {{token}}s: brush shapes from shapes.js and markup generated from
// data/activities.json.
//
// ROUTES is the only place page URLs are defined. Links are clean ("/kit"), and
// render() refuses to return a page that links to an internal ".html" URL.
const fs = require('fs');
const path = require('path');
const shapes = require('./shapes');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');

// URL path -> page file in src/pages (without .html). Order = nav order.
const ROUTES = {
  '/': 'index',
  '/kit': 'kit',
  '/activities': 'activities',
  '/about': 'about',
  '/contact': 'contact',
};
const NOT_FOUND = '404';

const NAV = [
  ['kit', '/kit', 'The kit'],
  ['activities', '/activities', 'Activities'],
  ['about', '/about', 'About'],
  ['contact', '/contact', 'Talk to us'],
];

// one splash colour per teaching model, so a card's tab says where it is from
const MODEL_FILL = { montessori: 'blush', reggio: 'butter', singapore: 'sage', finland: 'lav-mid', japan: 'teal' };

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- shared chrome ----------
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
<link rel="stylesheet" href="/css/style.css">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
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
    <a class="logo" href="/" aria-label="UNHEARD home">Unheard</a>
    <ul class="nav__links" id="navLinks">
${NAV.map(([id, href, label]) => `      <li><a href="${href}"${id === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('\n')}
      <li class="nav__menu-cta"><a class="btn" href="/kit">Get the kit · ₹1,200</a></li>
    </ul>
    <a class="btn btn--sm nav__cta" href="/kit">Get the kit · ₹1,200</a>
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
        <a class="logo" href="/">Unheard</a>
        <p class="foot__line">Nobody knows your child better than you do. We give you somewhere to write it down.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="/kit">The kit</a></li>
          <li><a href="/activities">Activity library</a></li>
          <li><a href="/about">About &amp; research</a></li>
          <li><a href="/contact">Talk to us</a></li>
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
<script src="/js/main.js"></script>
</body>
</html>
`;

// ---------- blocks generated from data/activities.json ----------
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

function buildTokens() {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/activities.json'), 'utf8'));
  const countFor = id => data.activities.filter(a => a.mid === id).length;
  return {
    ...shapes,
    activityCount: String(data.activities.length),
    activities: data.activities.map(activityCard).join('\n'),
    modelChips: [chip('model', 'all', 'All models', true),
      ...data.models.map(m => chip('model', m.id, `${esc(m.model)} <small>${countFor(m.id)}</small>`, false))].join('\n'),
    domainChips: [chip('domain', 'all', 'Everything', true),
      ...Object.entries(data.domains).map(([id, d]) => chip('domain', id, esc(d.label), false))].join('\n'),
    domainKey: Object.values(data.domains).map(d => `<li><strong>${esc(d.label)}</strong><span>${esc(d.desc)}</span></li>`).join('\n'),
    modelCards: data.models.map(m => `<article class="model reveal" style="--fill:var(--${MODEL_FILL[m.id]})">
  <span class="model__country">${esc(m.country)}</span>
  <h3>${esc(m.model)}</h3>
  <p>${esc(m.focus)}</p>${m.subModels.length ? `
  <ul class="model__subs">${m.subModels.map(s => `<li><strong>${esc(s.name)}</strong> ${esc(s.focus)}</li>`).join('')}</ul>` : ''}
  <span class="model__count">${countFor(m.id)} activities</span>
</article>`).join('\n'),
  };
}

// ---------- guard: no internal link may point at a .html URL ----------
function assertCleanLinks(name, html) {
  const bad = [...html.matchAll(/\b(?:href|action)="([^"]*)"/g)]
    .map(m => m[1])
    .filter(u => !/^(https?:|mailto:|tel:|#|data:)/.test(u))
    .filter(u => /\.html?(?:[?#]|$)/i.test(u));
  if (bad.length) throw new Error(`${name}: internal links must be clean routes (e.g. "/kit"), found: ${[...new Set(bad)].join(', ')}`);
}

// ---------- render ----------
function render(name) {
  const file = path.join(PAGES_DIR, name + '.html');
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/^<!--meta\s+([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`${name}: missing <!--meta {...}--> header`);
  const meta = JSON.parse(m[1]);
  const tokens = buildTokens();
  const body = src.slice(m[0].length).replace(/\{\{(\w+)\}\}/g, (all, k) => {
    if (!(k in tokens)) throw new Error(`${name}: unknown token {{${k}}}`);
    return tokens[k];
  });
  const html = `${head(meta)}\n<body>\n${symbols}\n${nav(meta.nav)}\n<main id="main">\n${body.trim()}\n</main>\n${foot}`;
  assertCleanLinks(name, html);
  return html;
}

// In production each page is rendered once per server instance; locally every
// request re-renders, so edits to src/pages show up on refresh.
const cache = new Map();
const CACHE = process.env.NODE_ENV === 'production' || !!process.env.VERCEL;
function page(name) {
  if (!CACHE) return render(name);
  if (!cache.has(name)) cache.set(name, render(name));
  return cache.get(name);
}

module.exports = { ROUTES, NOT_FOUND, render, page };
