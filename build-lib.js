const fs = require('fs');
const D = JSON.parse(fs.readFileSync('site/js/activities.json','utf8'));
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const DOM = D.domains;

const nav = (active) => `
<header class="nav" id="nav">
  <div class="shell nav__in">
    <a class="brand" href="/" aria-label="UNHEARD home">
      <svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="var(--ink)"/>
        <path d="M7 14h18M7 20h18" stroke="var(--g-base)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
        <path d="M9.2 20c3.3 0 2.8-10.2 6.5-10.2s3.1 6.9 6.3 6.9" fill="none" stroke="var(--g-base)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="brand__name">UNHEARD</span>
    </a>
    <button class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="navLinks">Menu</button>
    <nav class="nav__links" id="navLinks">
      <a href="/kit"${active==='kit'?' aria-current="page"':''}>The Kit</a>
      <a href="/activities"${active==='activities'?' aria-current="page"':''}>Activities</a>
      <a href="/about"${active==='about'?' aria-current="page"':''}>About</a>
      <a class="btn btn--signal" href="/contact">Talk to us</a>
    </nav>
  </div>
</header>
<div class="nav__scrim" id="navScrim" aria-hidden="true"></div>`;

const foot = `
<footer class="foot">
  <div class="shell">
    <div class="foot__grid">
      <div>
        <a class="brand" href="/" style="margin-bottom: var(--s-3);">
          <svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="var(--ink)"/>
            <path d="M7 14h18M7 20h18" stroke="var(--g-base)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
            <path d="M9.2 20c3.3 0 2.8-10.2 6.5-10.2s3.1 6.9 6.3 6.9" fill="none" stroke="var(--g-base)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="brand__name">UNHEARD</span>
        </a>
        <p class="foot__note" style="max-width: 30ch;">Listening to children who learn differently.</p>
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
          <li><a href="tel:9958611717">9958611717</a></li>
          <li><a href="mailto:unheard.corporation@gmail.com">unheard.corporation@gmail.com</a></li>
          <li><a href="https://instagram.com/unheardco" rel="noopener">@unheardco</a></li>
        </ul>
      </div>
    </div>
    <div class="foot__base">
      <p class="foot__note">&copy; 2025 UNHEARD</p>
      <p class="foot__note">Not a diagnostic tool. Not a substitute for professional advice.</p>
    </div>
  </div>
  <svg class="seal" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <path id="sealPath" d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0" fill="none"/>
    <circle class="seal__ring" cx="100" cy="100" r="92" fill="none"/>
    <text><textPath href="#sealPath" class="seal__text">OBSERVE &#8226; DISCOVER &#8226; SUPPORT &#8226; GROW &#8226; </textPath></text>
  </svg>
  </div>
</footer>`;

const head = (title, desc, extraCss) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/app.css">
<link rel="stylesheet" href="/css/parts.css">
<link rel="stylesheet" href="/css/material.css">
${(extraCss||[]).map(c=>`<link rel="stylesheet" href="/css/${c}">`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>`;

// ── activity card ──
const card = a => {
  const d0 = a.domains[0] || 'focus';
  return `<article class="act d-${d0}" data-domains="${a.domains.join(' ')}" data-model="${esc(a.mid)}" data-text="${esc((a.name+' '+a.desc+' '+a.skills.join(' ')).toLowerCase())}">
  <div class="act__top">
    <span class="act__model">${esc(a.country)} &middot; ${esc(a.sub || a.model)}</span>
  </div>
  <h3>${esc(a.name)}</h3>
  <p class="act__desc">${esc(a.desc)}</p>
  <div class="act__why"><b>Why it works</b>${esc(a.why)}</div>
  <div class="act__tags">${a.skills.slice(0,4).map(s=>`<span class="tag">${esc(s)}</span>`).join('')}</div>
  <p class="act__src">Source: <a href="${esc(a.source.link)}" rel="noopener nofollow" target="_blank">${esc(a.source.name)}</a></p>
</article>`;
};

const chips = Object.entries(DOM).map(([k,v]) =>
  `<button class="chip d-${k}" data-filter="domain" data-value="${k}" aria-pressed="false"><span class="chip__dot"></span>${esc(v.label)}</button>`
).join('\n        ');

// Name the MODEL, not the country: two entries are Italian, so country
// alone gives two identical chips that filter to different things.
const SHORT = { montessori: 'Montessori', reggio: 'Reggio Emilia', singapore: 'Singapore', finland: 'Finland', japan: 'Japan' };
const modelChips = D.models.map(m =>
  `<button class="chip" data-filter="model" data-value="${esc(m.id)}" aria-pressed="false">${esc(SHORT[m.id] || m.model)}</button>`
).join('\n        ');

// ── grouped output ─────────────────────────────
// 45 identical cards over 8000px gives a reader no landmarks, and the
// model changes silently mid-grid (Singapore alone runs 25 cards). A
// header per model turns one undifferentiated run into five readable
// stretches. Each header carries data-group so library.js can hide it
// when a filter empties its group.
const MODEL_NOTE = {
  montessori: 'Practical life, and the prepared environment.',
  reggio:     'The child as capable, and learning made visible.',
  singapore:  'Concrete, then pictorial, then abstract.',
  finland:    'Care, play and learning treated as one thing.',
  japan:      'Shared responsibility, and attention through routine.'
};
function groupedCards() {
  const byModel = new Map(D.models.map(m => [m.id, []]));
  D.activities.forEach(a => {
    if (!byModel.has(a.mid)) byModel.set(a.mid, []);
    byModel.get(a.mid).push(a);
  });
  const out = [];
  byModel.forEach((list, id) => {
    if (!list.length) return;
    const m = D.models.find(x => x.id === id) || {};
    out.push('<div class="actgroup" id="g-' + esc(id) + '" data-group="' + esc(id) + '">'
      + '<h2 class="actgroup__name">' + esc(SHORT[id] || m.model || id) + '</h2>'
      + '<p class="actgroup__note">' + esc(MODEL_NOTE[id] || '') + '</p>'
      + '<span class="actgroup__n">' + list.length + ' activities</span>'
      + '</div>');
    out.push(list.map(card).join(String.fromCharCode(10)));
  });
  return out.join(String.fromCharCode(10));
}

const page = head('Activity Library | UNHEARD','45 sourced early-childhood activities from five global teaching models, adapted for Indian homes. Free, with every source linked.',['library.css'])
+ nav('activities') + `
<main id="main">
  <section class="libhero aura aura--lift">
    <div class="shell libhero__grid">
      <div>
        <p class="slug slug--lift">Free &middot; no sign-up &middot; every source linked</p>
        <h1 class="d1" style="margin-bottom: var(--s-5); max-width: 11ch;">45 activities. Every source shown.</h1>
        <p class="lede">Drawn from Montessori, Reggio Emilia, Singapore&rsquo;s national frameworks, Finland&rsquo;s ECEC, and Japan&rsquo;s Tokkatsu. Adapted for Indian homes and everyday objects.</p>
        <p class="hero__proof" style="margin-top: var(--s-5)">
          You do not need the kit to use any of these.
        </p>
      </div>

      <!-- the five models as a live index, doubling as a legend -->
      <aside class="libindex">
        <div class="libindex__head">
          <span class="mono">The library</span>
          <span class="mono">45 total</span>
        </div>
        <ol class="libindex__list">
          <li><a href="#g-montessori"><span class="libindex__n">01</span><span class="libindex__name">Montessori</span><span class="libindex__c">5</span></a></li>
          <li><a href="#g-reggio"><span class="libindex__n">02</span><span class="libindex__name">Reggio Emilia</span><span class="libindex__c">5</span></a></li>
          <li><a href="#g-singapore"><span class="libindex__n">03</span><span class="libindex__name">Singapore</span><span class="libindex__c">25</span></a></li>
          <li><a href="#g-finland"><span class="libindex__n">04</span><span class="libindex__name">Finland</span><span class="libindex__c">5</span></a></li>
          <li><a href="#g-japan"><span class="libindex__n">05</span><span class="libindex__name">Japan</span><span class="libindex__c">5</span></a></li>
        </ol>
      </aside>
    </div>
  </section>

  <div class="lib__bar" id="libBar">
    <div class="shell">
      <div class="lib__row">
        <span class="lib__label">Watch for</span>
        ${chips}
      </div>
      <div class="lib__row">
        <span class="lib__label">Model</span>
        ${modelChips}
        <span class="lib__count" id="libCount">45 activities</span>
      </div>
    </div>
  </div>

  <section style="padding-bottom: var(--s-8);">
    <div class="shell">
      <div class="acts" id="acts">
${groupedCards()}
      </div>
      <p class="lib__empty" id="libEmpty" hidden>No activities match those filters. <button class="btn btn--quiet" id="libReset" style="margin-left:var(--s-2)">Clear filters</button></p>
    </div>
  </section>
</main>` + foot + `
<script src="/js/app.js"></script>
<script src="/js/library.js"></script>
</body>
</html>`;

fs.writeFileSync('site/activities.html', page);
console.log('activities.html written,', D.activities.length, 'cards');
