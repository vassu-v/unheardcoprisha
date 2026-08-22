# Build architecture

The structural decisions that let one small codebase carry a marketing site, a
pricing page with live arithmetic, a legal document, auth screens, an app
dashboard and a guided onboarding — with no framework and no build step.

---

## File layout

```
css/
  tokens.css    every colour, size, easing, font. NOTHING else holds a value
  app.css       primitives — buttons, type, nav, cursor, layout
  pages.css     shared secondary-page components (headers, prose, auth, tabs)
  pricing.css   pricing-only
  dash.css      app-shell only (/app, /onboarding)
js/
  assets.js     asset detection, sets feature classes. Loads FIRST
  app.js        cursor, reveals, counters, sparklines, nav, FAQ, magnetics
  pages.js      secondary-page behaviour (tabs, scroll-spy, form validation)
  pricing.js    billing toggle, overage calculator
  dash.js       theme toggle, progress bars, guided tour, onboarding steps
  console.js    the live demo simulation
```

**Load order matters:** `assets.js` runs before everything so feature classes
(`.has-grain`, `.has-feat-icons`) are set before first paint decisions.

---

## The defensive-module pattern

Every JS module is an IIFE that returns immediately if its markup is absent:

```js
(function tabs() {
  const strip = document.querySelector('.tabs');
  if (!strip) return;
  ...
})();
```

**Result:** one `app.js` serves all nine pages with zero per-page branching. A
page that has no FAQ simply finds no FAQ. This is why adding pages stayed cheap
through the whole build.

**Corollary:** never `gsap.from(null, …)` — it throws. Guard every target:

```js
if (pill) tl.from(pill, { ... });
tl.from(lines, { ... }, pill ? '-=0.35' : 0);
```

That exact bug shipped once: a hero pill was removed from the markup, and the
timeline threw on every load of that page.

---

## Progressive enhancement for assets

Three layers, always in this order:

1. **Procedural stand-in** ships in CSS — an SVG-noise grain, a gradient sky, an
   inline SVG icon.
2. **Detection** in `assets.js` probes for the real file.
3. **Upgrade** sets a CSS custom property plus a body class.

```js
probe(A + 'feature-icons.png').then(ok => {
  if (!ok) return;
  document.documentElement.style.setProperty('--feat-sheet', 'url(...)');
  document.body.classList.add('has-feat-icons');
});
```

```css
.feat__ico { display: none; }
.has-feat-icons .feat__ico { display: block; background-image: var(--feat-sheet); }
```

**Why the class gate:** a missing asset leaves *no empty box*. The layout is
correct with or without art, so the page is never broken while waiting.

**Path trap:** a bare `assets/x.png` inside a CSS custom property resolves
against the **stylesheet** URL (`/css/`), not the document. Use root-relative
paths (`/assets/x.png`) everywhere.

---

## Sprite sheets

Supplied art arrives as one image with N quadrants. Two things to get right:

```css
.feat__ico {
  aspect-ratio: 646 / 609;      /* MEASURE it — do not assume square */
  background-size: 200% 200%;   /* 2x2 sheet */
}
.feat__ico.q0 { background-position: 0%   0%; }
.feat__ico.q1 { background-position: 100% 0%; }
.feat__ico.q2 { background-position: 0%   100%; }
.feat__ico.q3 { background-position: 100% 100%; }
```

**Measure the quadrant ratio from the actual file.** An earlier sheet was
768×512 per quadrant (3:2) and got forced into a square box, visibly squashing
the art. The later sheet was 646×609 — close to square, but not square. Verify
on screen: measured 1.061, matching 646/609.

---

## Theming via token remap

Dark mode required **no component rewrites**. One block re-points the same
variable names every component already reads:

```css
.dark {
  --paper:      var(--ember-000);
  --paper-lift: var(--ember-200);
  --ink:        var(--ember-text);
  --line:       var(--ember-line);
  /* hues lifted and desaturated for a dark ground */
}
```

Only four surfaces needed explicit overrides, and each was a **hard-coded
literal** rather than a token: a translucent `rgba()` topbar, a daylight
gradient, an ink-on-paper slab, and the grain overlay's `mix-blend-mode`
(`multiply` crushes a dark page to black; switch to `soft-light`).

**That count is the health metric.** If a theme switch needs dozens of
overrides, the tokens are not doing their job.

### Two dark palettes, deliberately

- `--slate-*` — neutral zinc, for **one dark section inside a light page**. It
  reads as a deliberate interruption.
- `--ember-*` — warm near-black (hue ~28–32°), for the **whole app ground**. It
  reads as the same stationery in low light rather than a different material.

Using neutral zinc as a full-app ground would have made the app look like every
other dashboard — the exact thing the marketing site was designed to avoid.

---

## Clean URLs without a router

Serve `/pricing`, never `/pricing.html`.

Local dev server resolves in order: exact path → `<path>.html` →
`<path>/index.html`, and 301s any `.html` spelling to the clean form. Production
gets the same from `vercel.json`:

```json
{ "cleanUrls": true, "trailingSlash": false }
```

**Keep local and production identical.** A routing behaviour that only exists
when deployed cannot be tested.

---

## Multi-step flows without a framework

Onboarding is four panels in one document. Advancing swaps which panel is
visible rather than navigating, so state survives with no router and no backend:

```js
panels.forEach((p, idx) => { p.hidden = idx !== i; });
```

Cross-page state uses `sessionStorage` for one-shot intent (`mmg-tour-done`) and
`localStorage` for durable preference (`mmg-theme`).

---

## Theme flash prevention

Applying a stored theme after stylesheets load paints the light ground for one
frame. A small **blocking** inline script in `<head>` prevents it:

```html
<script>
(function(){ try {
  if (localStorage.getItem('mmg-theme') === 'dark')
    document.documentElement.classList.add('dark');
} catch(e){} })();
</script>
```

This is one of very few places a blocking script is correct.

**Decision worth copying:** the OS preference is deliberately *not* consulted.
Warm paper is the brand's argument, so a first-time visitor always meets it;
dark is opt-in and then sticks.

---

## Spotlight overlay technique

The guided tour dims everything except one element, using a single ring with an
enormous shadow spread:

```css
.tour__ring {
  position: absolute;
  box-shadow: 0 0 0 9999px rgba(12, 12, 14, 0.62);
  outline: 2px solid var(--lime);
  pointer-events: none;
}
```

Cheaper than compositing four panels, and — because the ring has
`pointer-events: none` and never covers the target — the highlighted element
stays genuinely visible and interactive.

---

## Mocked-data honesty

When shipping mock UI:

1. **Say so on screen.** A "Preview" bar states every number is sample data.
2. **`noindex` it.** Both a meta tag *and* an `X-Robots-Tag` response header —
   the meta covers the page, the header is what de-indexes a URL already
   crawled.
3. **`Cache-Control: no-store`** on anything that will become authed.
4. **Do not fake success.** A disabled Google button that says "unavailable at
   this time" is better than a dead button that looks live.

The real risk is not SEO. It is a visitor reading "8,420 of 25,000" and
believing it is their account.
