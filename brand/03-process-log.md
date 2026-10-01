# 03 — Process log

How the redesign was arrived at, so the next person can see why it looks the way
it does and which ideas were tried and dropped.

## Brief

> The current site looks bland. Use the founder's pitch deck and the design
> references. Build in a fresh, isolated scaffold rather than editing `site/`.
> Then visually QA it.

Inputs used:

- **The pitch deck:** *Prisha Dhawan_UNHEARD_2026* (11 slides). This was the
  primary visual and content source: problem, solution, market, business model,
  competition, traction, fieldwork, revenue, team.
- **`design-references/`:** the README, the design reference report, top-level
  screenshots (haoqi, revelatio, wireframe), and `assets/` (Duolingo, Scratch,
  Greenlight, Klarna, Step, Content Architecture).
- **`design-references/forwarded-references/`:** the playbook plus Loop agency,
  Astroline, the Digital Lavender palette, Empathy Experiment and the Hobro
  seal.
- **`site/assets/`:** the kit photos, the founder photo, and the `dbz/` avatar
  set (placeholder cartoon faces under neutral filenames).

The existing `site/` code, `BRAND.md` and `DESIGN-BRIEF.md` were deliberately
**not** read before designing, to avoid anchoring on the bland version. Only
facts (price, phone, email, kit contents) were checked against it.

## What came from each reference

| Reference | Taken | Left behind |
|---|---|---|
| **Pitch deck** | Slate caps with blush offset, dry-brush splashes, zest scribble, sparkles, illustrated kids, section order, all copy facts, founder quotes | Canva's stock layouts. The fieldwork photos were not used because they show identifiable children. |
| **Digital Lavender** | The whole brand/action ramp `#42326E`→`#E0D4FC` | — |
| **Empathy Experiment** | Confirmation that pastel purple reads as calm and well-being | Its steel blue (the deck's mist covers that role) |
| **Greenlight** | Rounded bento cards, family-product trust tone | Grey card grounds |
| **Klarna** | Huge confident headlines, pastel colour-block cards, solid-pill CTAs | Photography-led hero (there's no lifestyle photography yet) |
| **Duolingo** | A character system as brand: kid stickers with a voice | 3D tactile button press (rejected, see below) |
| **Scratch** | Colour-coded chunking: one pastel per stage and per kit tool | Its saturated purple chrome |
| **Loop / Haoqi / Content Architecture** | Uppercase monospace micro-labels as structure | Dark agency mood, grid-line chrome |
| **Hobro.digital** | Slowly rotating circular-text seal | — |
| **Astroline** | (Parked) the conversational, step-by-step observation wizard is a good future feature | Not built. It's out of scope for a landing page. |
| **Step / Synthesis / wireframe** | Nothing direct. Too dark and techy for anxious parents of 4–12s. | — |

## Key decisions

1. **The deck is the brand.** The founder's own artefact beats a borrowed
   "premium notebook" aesthetic. It's distinctive and it's hers.
2. **Two colour families with separate jobs.** The deck's pastels give
   personality, lavender gives trust and action. Splash colours never carry
   text.
3. **Lilita One for display.** It's the closest web font to the deck's chunky
   rounded caps, and it's friendly without looking babyish.
4. **Brush shapes are generated, not drawn per page.** `shapes.js` produces
   seeded SVG paths, so they are deterministic, tiny and editable in one place.
5. **The kit section is the one dark (grape) section.** It's the visual peak,
   right where the price appears.
6. **Avatars as stickers with first-person bubbles.** They give children a
   voice without labelling anyone.
7. **Labels get struck through.** The problem section crosses out "Lazy",
   "Can't sit still" and "Careless" and shows what was really there. This is the
   brand promise in one interaction.
8. **Honesty constraints treated as design.** Status pills on offers, an email
   or phone order path, a visible disclaimer, and real quotes only.

### Rejected from the references

- **Spring and overshoot easing** (`cubic-bezier(.34,1.56,.64,1)`), suggested
  by the reference README. Bouncy motion reads as "app for kids" and undercuts
  parent trust. Replaced with a single calm ease-out.
- **Tactile 3D button press** (Duolingo). Same reason, and it conflicts with
  the project's prior NEVER list.
- **Astroline-style "calculating your profile…" fake analysis.** It would imply
  an assessment the kit does not perform.

## Copy corrections made during the build

- I removed an invented "~20 min a session". The deck doesn't state session
  length.
- I removed "First batch of 50 kits" from the purchase area. That was a business
  plan target, not a stock fact.
- I replaced a paraphrased founder quote with her **exact** deck wording.
- "Available now" became "Start here" so ordering isn't overstated.

## QA

Method: Playwright with headless Chrome. I took section screenshots at
1440×900, 768×1024 and 390×844, measured horizontal overflow, and ran a
programmatic WCAG contrast scan. An independent subagent (a smaller model,
briefed with the full reference context) ran a second read-only pass.

| # | Finding | Evidence | Fix |
|---|---|---|---|
| 1 | Page scrolled sideways on phones | scrollX 90, scrollWidth 480 vs 390 | `overflow-x: clip` on `.hero` and `.sec` |
| 2 | Stage numbers almost invisible | White on pastel measured 1.32–1.51:1 | `--ink` with a white offset, now 6.52–7.54:1 |
| 3 | Card tilts disappeared after reveal | The `.reveal` transform overrode `rotate()` | Moved tilts and hovers to the `translate`/`rotate` properties |
| 4 | Stage cards had misaligned headings | `margin:auto` pushed h3s to different heights | Fixed top margin, `p { flex:1 }` |
| 5 | Price badge clipped "NO SUBSCRIPTION" at 390px | Screenshot | Smaller mono size and inner ring |
| 6 | Scribble covered the phone number on mobile | Screenshot | `.deco--sm-hide` under 600px |
| 7 | Footer email touched the screen edge | Right gutter 0 | `overflow-wrap:anywhere` |
| 8 | Mobile menu was translucent and had no CTA | Screenshot, 0×0 CTA | Solid nav ground, full-width "Get the kit" in the menu |
| 9 | "VS" sticker overlapped compare text | Screenshot | Extra left padding on the UNHEARD column |
| 10 | Hero headline too dominant at 1440px | Visual | `--t-hero` capped at 6.3rem |

Final state: no horizontal scroll at 390px or 1440px, no console errors or
404s, and all measured text pairs pass AA.

## Content migration from `site/` (round 2)

The original `site/` was mined for **information and site structure only**. Its
CSS, layout and visual components were not read, so the design stayed
unbiased. Text was extracted with tags and styles stripped.

**Structure adopted:** Home, Kit, Activities, About, Contact and 404, with nav
"The kit · Activities · About · Talk to us". This replaces the single page.

**Content brought over** and re-expressed in this design system:

| From `site/` | Where it lives now | How it was translated |
|---|---|---|
| 60+ surveys, NGO visits, professional conversations | Home proof strip, home "What we heard", About methods | Colour-blocked method cards with big Lilita numerals |
| Three findings ("built for one kind of learner"…) | Home | Numbered white cards beside the headline |
| Mission line ("…only misunderstood ones") | Home | Grape band, hand-drawn underline on *misunderstood* |
| Handwritten observation-note photo | Home "How it works", Kit "For you" | Taped polaroid, with "write what they did, not what it meant" |
| Four stages: 20 min, ruled sheet, 8-week tracker | Home stages | Same pastel stage cards, copy replaced with the specifics |
| Nine kit items (5 child + 4 parent) and their descriptions | Home kit section, Kit page | Night-section lists; icon cards; **ruled-paper cards** for the parent sheets |
| Pricing: ₹1,200, ₹499 webinar, workshops on request | Kit "One price. Said plainly." | The three-card pricing component |
| "What ₹1,200 does not buy" | Kit | Honest panel with struck-through pills |
| 45 activities, 5 models, 5 domains (`activities.json`) | Activities page | Build-time cards with a model colour tab, sticky filters, model bento |
| Founder bio, technical contributor | About | Founder card with the seal, plus a person strip |
| "What we have not done yet" (planned items) | About | Honest panel with dashed "Planned ·" pills |
| Contact form fields, reply time, conversation series, reassurances | Contact | Radio pills, mailto hand-off, three reassurance cards |
| 404 "We are not hearing that page." | 404 | Kid sticker with a speech bubble |
| Instagram @unheardco | Footer, Contact | — |

**Conflicts resolved, with `site/` taken as the more recent source:**

- "One box. Five tools." (deck) became **nine items** (five for the child, four
  for the parent).
- Session length: the site states **twenty minutes**, so it is now used. It had
  been removed in round 1 for lack of a source.
- Founder-section stats from the deck (5 frameworks audited, 10+ interviewed, 3
  modules) were replaced by the site's research base (60+ surveys, NGOs,
  professionals). The deck numbers were not contradicted. They were dropped so
  the page doesn't show two different sample sizes.
- Deck "3-day school camp, flat fee" became **workshops and boot camps, quoted
  on request**, as the site states.
- The order CTA now goes to the contact page (`?interest=kit`) instead of a raw
  mailto.

**Independence.** Every asset is copied into `redesign/`: the observation note,
the kit photos, the founder photo, a 320px recompression of the contributor
photo (380KB to 22KB), the kid stickers, the favicon and `data/activities.json`.
A reference check confirmed that all 154 local `src`/`href` targets resolve
inside the folder.

**QA (round 2).**
- **Crawl:** Playwright over all six pages at 1440px and 390px. No JS errors, no
  failed requests, no horizontal scroll.
- **Functional tests:** filter deep link (`?model=japan` showed 5 of 45), domain
  filter, search, empty state and reset. Contact validation focuses the first
  invalid field, `?interest=` prefill works, and the mailto body is complete.
- **Fixed:**
  - An invisible bubble on the Kit page (text colour inherited from `.item p`)
  - Ruled lines drifting off the text (moved the ruling onto `p`)
  - The featured pricing card picking up blush from an `nth-child` rule (now
    explicit `.way--blush` / `.way--sage`)
  - Dead space in the model grid (Singapore now stacks against the other four)
  - An empty bento cell (CTA card spans two columns)

## Known gaps and open questions

- **Conflicts with the project's existing `BRAND.md`.** This direction uses
  hand-drawn irregularity, several accents beyond violet, and more than three
  yellow elements per screen. Those were banned there. If this replaces
  `site/`, the old rules need revisiting or this needs toning down. That is a
  decision for the team.
- **Avatars are placeholders** from a free avatar set. Commissioned
  illustrations in the deck's flat style would be the biggest single upgrade.
- **Founder photo** is 100×100 and soft at display size.
- **Kit photos are representative.** The packaging shows placeholder text.
- **No checkout and no form backend.** Orders go through the contact page, which hands off to the visitor's email app.
- **Future idea:** an Astroline-style one-question-per-screen observation
  logger for parents. It would be honest, with no fake "analysis" step.
