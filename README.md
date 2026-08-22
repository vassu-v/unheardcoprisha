# UNHEARD — website rebuild

A rebuild of [unheardnew.vercel.app](https://unheardnew.vercel.app/), designed
from scratch. The method notes and design references used to build it are kept
locally and are not part of this repository.

**Read first:** [`DESIGN-BRIEF.md`](DESIGN-BRIEF.md) is the research and the
reasoning. [`BRAND.md`](BRAND.md) is the identity it produced. Everything in
`site/` is downstream of those two files.

---

## Run it

```bash
node serve.js      # http://localhost:4321
```

No build step, no dependencies for the site itself. `serve.js` resolves clean
URLs the same way production does (`/kit`, never `/kit.html`), so routing can
actually be tested locally.

## Rebuild generated pages

Two pages are generated from data rather than hand-written, so edit the builder
and not the HTML:

```bash
node build-lib.js      # -> site/activities.html  (45 activities from JSON)
node build-pages.js    # -> site/kit.html, about.html, contact.html, 404.html
```

`site/index.html` is hand-written and is not generated.

## Deploy

`site/` is a static directory. `site/vercel.json` sets `cleanUrls` and
`trailingSlash: false` to match the dev server. Point any static host at
`site/`.

---

## What is here

```
site/
  index.html        landing
  kit.html          the ₹1,200 kit, what is in the box, what it does not do
  activities.html   45 sourced activities, filterable by domain and model
  about.html        research basis, the five models, founder, honest scope
  contact.html      enquiry form with inline validation
  404.html
  css/
    tokens.css      EVERY colour, size, easing and font. Nothing else holds a value
    app.css         primitives: paper, rules, type, buttons, cards
    parts.css       nav, hero, the notebook object, stages, footer
    material.css    grain, pressed edges, drawn marks — what makes paper feel like paper
    library.css     the activity library
    checklist.css   kit contents drawn as observation sheets
    kit.css         pricing box, founder plate
    form.css        contact form
  js/
    app.js          nav, reveals, counters. Defensive IIFEs, one file serves every page
    library.js      activity filtering, URL-synced
    form.js         inline validation
    activities.json 45 activities, 5 models, 86 skills mapped to 5 domains
  assets/favicon.svg
```

---

## The design in one paragraph

Every competitor in this category is a purple gradient with rounded type, emoji
icons and a jigsaw puzzle. The puzzle is the worst of it: it is the autism
awareness symbol, widely rejected because it depicts the child as an incomplete
thing to be solved, and the old site used it as its logo on a page whose own
mission sentence says the child is not the problem. So the world here is **an
observation notebook** — lavender paper with real grain, ruled lines, ink, and
one handwritten observation as the hero object. The material *is* the product's
actual output, because what UNHEARD sells is not a fix for a child but a
structured way for a parent to watch one. Colour is a mapping rather than a
palette: four hues for the four stages of the real process, one lavender for
emotion, one raspberry meaning "now". The single dark section on each page is
the disclaimer that this is not a diagnosis, which is the one moment the brand
tells you what it cannot do.

---

## Verification

The harness lives in the session scratchpad, not in the repo. What it checks,
on all 6 routes at 1440px and 430px:

| Check | Result |
|---|---|
| JS errors (`Runtime.exceptionThrown`) | 0 |
| Horizontal overflow | 0 |
| Contrast, computed in both themes | 0 failures |
| Broken links and dead in-page anchors | 0 |
| Counters landing on exact targets | pass |
| Scroll reveals firing | pass |
| Interactive states (forced pseudo-class, not synthetic pointer) | 78/78 |

Three real bugs were caught this way and would have been invisible in a
screenshot:

1. **Marigold measured 2.47:1** as text on paper and looked perfectly fine.
   Every system hue now splits into `fill` / `text` / `night`, because a fill
   value is not a text value.
2. **The nav CTA dropped to 1.65:1** — `.nav__links a` beat `.btn` on source
   order, not specificity.
3. **`ink-ghost` was being used as text** at 2.02:1, which BRAND.md explicitly
   prohibits.

---

## Assets still wanted

The site ships complete with procedural fallbacks for all of these, so nothing
is blocked. Each is an upgrade, not a rescue.

| Asset | Why it would help | Current fallback |
|---|---|---|
| **Photo of the REAL kit** | A generated representative image now ships on `/kit`. Its printed sheets carry placeholder wording, so the figure is framed wide enough that they are not readable, and the caption says it is representative. A photo of the actual box replaces it as a `src` change with no CSS change. | Generated representative photo; `assets/kit-contents.svg` is the drawn fallback |
| **Founder photo at ~400px** | Shipped, but the source is only 100x100, so it is soft on a retina screen. A larger version of the same photo is a drop-in replacement. | The 100px photo; `.founder__plate` is kept as the typographic fallback |
| ~~Photo of a filled observation sheet~~ | **Shipped.** `assets/hero-note.jpeg` is now the landing-page hero: real handwriting, ruled stock, ochre underline on "in Hindi". The notechip stays live text so the pattern it resolves into is selectable. | — |
| **A real logo** | If UNHEARD has or commissions one, it drops into `tokens.css` and the two SVG blocks. Until then the mark in `BRAND.md` is mine and is fully specified. | The two-rule mark |

---

## Known gaps

- **The contact form has no backend.** It validates, then says on screen that
  nothing is sent and gives the phone number and email instead. Wiring it to a
  form endpoint is a small change in `js/form.js`.
- **Workshop pricing is "on request"**, matching the original site, which never
  states a number.
- **Roadmap items are marked `Planned`** and styled quieter and dashed, so a
  feature list never implies something shippable.


## Visual QA pass

Measured rather than eyeballed: section heights, rendered type scale, grid
gaps, and card-height variance across all six routes. Three real problems came
out of it.

**1. The activity library was one 8,000px undifferentiated run.** 45 identical
cards, no landmarks, and the model changed silently mid-grid (Singapore alone
runs 25 in a row). A reader had no idea where they were. Each model now gets a
full-width group header carrying its name, a one-line note on what the model
actually is, and its count. `library.js` hides a header when a filter empties
its group, because a header with nothing under it is a lie about what is there.

**2. Card gaps were uniform at 16px while cards varied 96px in height.** Tall
and short neighbours ran together and the grid read as ragged rather than
composed. Row gap is now larger than column gap (`--s-6 / --s-4`), so the
variance reads as deliberate spacing.

**3. `/contact` ended with ~380px of dead ground under the form.** The page
stopped mid-thought, and a parent who has scrolled that far without filling
anything in is hesitating. That space now answers the hesitation: a stated
reply time in the sidebar, and a "Before you write" section saying the
activities are free, that we will name a professional if that is what they
need, and that nothing they write is shared.

## Images, and what each one claims

Three generated images ship. Each is framed by what it can honestly assert:

| File | Where | Claim it makes |
|---|---|---|
| `hero-note.jpeg` | `/` hero | The strongest asset. Real handwriting on ruled stock. It depicts an observation, not a product, so nothing is overclaimed. |
| `kit-contents.jpeg` | `/kit` | **Representative, and captioned as such.** The printed sheets in it carry placeholder wording, so the figure is deliberately shown whole and small rather than cropped in: at that scale the arrangement of nine items reads and the sheet text does not. Cropping closer was tried and rejected for exactly this reason. |
| `founder.jpg` | `/about` | A real photo of a real person. Only 100x100, so it is displayed at native size rather than upscaled. |

A fourth generated kit image was rejected outright: it was rainbow-primary with
cartoon animal stickers, which is exclusion #3 (multi-hue with no assigned
meaning) and #4 (emoji as an icon system) at once.

## The drawn kit figure

`/kit` carries an inlined SVG of the box contents (`site/assets/kit-contents.svg`,
coloured by `.kf-*` classes in `css/kit.css`). Three things about it are
deliberate:

1. **It is inlined, never `<img>`.** An SVG loaded through `<img>` is a separate
   document and cannot see the page's custom properties, so every token would
   fall back. Inlined, it inherits `--g-*`, `--ink-*` and the stage hues, and
   re-themes inside `.on-night` with no variant. `var()` is also invalid inside
   SVG *presentation attributes*, which is why colour lives in CSS classes
   rather than on the elements.
2. **It is illustrative on purpose.** A photoreal render of a product a buyer
   cannot yet see is a claim the page cannot demonstrate, which BRAND.md §7
   prohibits. The caption says "drawn, not photographed" in the same voice the
   rest of the site uses to state its limits.
3. **It performs the system.** The card edge-bands are the model legend from
   BRAND.md §8, the observation sheet is shown filled in rather than blank, and
   the tracker's unreached weeks stay drawn but empty, because an empty field is
   an invitation and not an error.

Replacing it with real photography is a two-line change: drop the `<figure>`
contents in `build-pages.js` for an `<img>`, and delete the caption note.

## Colour-system fix

Five kit-contents cards on `/kit`, three research cards on `/`, and three method
cards on `/about` were carrying the four stage hues plus Signal as top edge
bands. Those cards are **contents and findings, not process stages**, so the
colour was decoration wearing the system's clothes — which BRAND.md §7 forbids
("a colour without a stated stage or state"). The bands are gone. The stage hues
now appear only where a stage or a side is actually meant: the four-stage row on
`/`, and the For the child / For the parent sheets, which use Discover and
Support to carry the brief's warm-is-the-child, cool-is-the-parent argument.
