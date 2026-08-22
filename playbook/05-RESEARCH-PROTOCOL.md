# The Research Protocol

**Use this when you have a brand and no design direction yet.**

`00-CREATIVE-PROCESS.md` shows one worked example. This file is the procedure
that produces such an example for a brand it has never seen — the research
phase, the decision instruments, and how to convert findings into a build
brief.

Run it in order. Each phase has a **deliverable** and an **exit test**. Do not
advance until the exit test passes.

Total time: 3–6 hours of agent work before any pixel is designed.

---

## Phase 0 — Extract the claim

**Goal:** find the one sentence the brand is trying to prove.

### Where to look, in priority order

1. **FAQ and objection-handling pages** — highest yield. Brands state their real
   differentiator where they defend themselves. Look for **denials**: "we do
   NOT", "unlike", "without", "never".
2. **Policy and legal pages** — unglamorous and therefore honest.
3. **Pricing page structure** — *what a company charges for is what it believes
   it sells.* A per-seat price says collaboration; per-usage says volume; a flat
   fee says simplicity.
4. **Support docs and error messages** — written for real users, so free of
   marketing gloss.
5. **The landing page hero** — read last. It is the most focus-grouped and least
   truthful surface.

### Extraction commands

```bash
grep -rin "we do not\|we don't\|unlike\|without\|never\|not a\|isn't" <src>
grep -rin "unlike\|instead of\|rather than\|as opposed to" <src>
```

### Deliverable

```
THE CLAIM:      <one sentence, in the brand's own words where possible>
SOURCE:         <file / URL it came from>
THE DOUBT:      <what a sceptical buyer assumes that this denies>
THE STAKES:     <what the buyer loses if the doubt is true>
```

Worked example:

```
THE CLAIM:   "designed for targeted, context-driven personal broadcast emails,
              not mass blasting or automated DMs"
SOURCE:      product FAQ, Homepage.jsx
THE DOUBT:   "this is a spam tool that will get my account banned"
THE STAKES:  their Instagram account, their sender reputation, their name
```

### Exit test

Can you name what the buyer **fears**, not just what the product does? If your
doubt line reads like a feature gap ("it might be slow") rather than a fear
("this will damage me"), dig further. Fear is what design has to answer.

---

## Phase 1 — Map the category (the negative brief)

**Goal:** know precisely what you must not look like.

Do this **before** collecting anything you like. Otherwise you will
unconsciously reproduce the category average and call it taste.

### Method

Gather **8–12 direct competitors**. For each, record only:

| Field | Options |
|---|---|
| Ground | dark / light / gradient / photographic |
| Accent | neon / muted / mono / rainbow |
| Type | grotesk / geometric / serif / mono-heavy |
| Hero object | screenshot / 3D abstract / illustration / photo / none |
| Texture | flat / glassmorphic / noise / grid |
| Register | technical / friendly / luxury / brutalist |

Then tally. Anything appearing in **more than 60%** is the cliché.

### Deliverable

```
CATEGORY CLICHE (n = __ competitors surveyed)
  Ground        __% dark
  Accent        __% neon green/cyan
  Type          __% geometric sans
  Hero          __% product screenshot
  Register      __% technical

THE EXCLUSION LIST (forbidden without explicit justification):
  1. ...
  2. ...
```

### Exit test

Does your exclusion list contain at least one thing you *instinctively wanted
to do*? If not, you surveyed too shallowly. The list should hurt slightly.

---

## Phase 2 — Choose the material

**Goal:** pick a physical material whose meaning already matches the claim.

Materials beat palettes because meaning comes pre-installed. Nobody argues about
what paper means.

### The candidate generator

Answer these four questions; each yields candidates:

1. **What physical object is the product's output?** (a letter, a map, a
   receipt, a key, a recording)
2. **What craft did this job before software?** (letterpress, cartography,
   bookkeeping, locksmithing, studio engineering)
3. **What material does the *opposite* of the category cliché?**
4. **What would the most trusted version of this product be made of?**

Generate at least **five** candidates. Fewer means you stopped at the obvious.

### The scoring rubric

Score each 1–5. **Weight column 1 double** — it is the whole point.

| Criterion | What you are asking |
|---|---|
| **Answers the doubt** ×2 | Does this material pre-empt the buyer's fear on sight? |
| Not the cliché | Is it absent from the exclusion list? |
| Output match | Is this literally what the product produces? |
| Buildable | Can it be rendered in CSS/canvas/WebGL at reasonable cost? |
| Extensible | Does it still work for an app UI, a legal page, an error state? |

Worked example:

| Material | Doubt ×2 | Not cliché | Output | Build | Extend | **Total** |
|---|---|---|---|---|---|---|
| Dark terminal | 1 ×2 = 2 | 1 | 2 | 5 | 4 | **14** |
| Clinical SaaS white | 3 ×2 = 6 | 2 | 2 | 5 | 5 | **20** |
| Brutalist concrete | 3 ×2 = 6 | 4 | 1 | 4 | 2 | **17** |
| **Warm stationery** | **5 ×2 = 10** | **5** | **5** | **4** | **4** | **28** |
| Blueprint / drafting | 4 ×2 = 8 | 4 | 2 | 4 | 3 | **21** |

### Deliverable

```
MATERIAL:     <chosen>
SCORE:        __ / 30
RUNNER-UP:    <name> (__) — rejected because ...
WORLD NAME:   <two or three words>
```

### Exit test

Complete this sentence out loud:

> "This world argues that the product is ______, which is exactly what the
> buyer doubts."

If it does not complete cleanly, you have a mood board. Return to Phase 2.

---

## Phase 3 — Reference research

**Goal:** collect *structure*, never surface.

### Where to search

**Never search your software category.** It returns the cliché you just
excluded. Search the material instead.

| Source | Query shape | Yields |
|---|---|---|
| Design galleries (Awwwards, Godly, Land-book) | `<material> + editorial`, `<craft> website` | Structural moves |
| Physical craft archives | `<craft> specimen`, `letterpress catalogue`, `1950s <craft> manual` | Texture, colour, type authenticity |
| Type foundries | `<mood> grotesk specimen` | Type pairing done by professionals |
| Museum / archive collections | `<craft> collection` | Historical material free of trend |
| Packaging and print | `<material> packaging design` | Colour used with real constraint |

**Rule: at least half your references must be non-digital.** Digital-only
references reproduce the current trend cycle. Physical sources are where
non-generic vocabulary lives.

### The capture format

For each reference, record **only this** — never save it as a mood board:

```
REF-##
  SOURCE:        <url or file>
  TYPE SIZES:    <how many distinct sizes on the page>
  AIR:           <rough % empty space>
  FIRST FIXATION:<what the eye hits first, and what forced it>
  HERO OBJECT:   <what it is / its relationship to the type>
  MICROTYPE:     <is small text doing information work or texture work>
  COLOUR COUNT:  <how many, and does each MEAN something>
  STEAL:         <1-3 structural principles>
  REJECT:        <what is surface, usually palette + subject>
```

Then **close the images.** Work only from the notes. If the images stay open,
you copy surfaces.

### Handling a reference that conflicts with the brand

1. Name what it does well.
2. Ask what *caused* that effect — nearly always structural (evenness, contrast
   ratio, density, scale jump), not chromatic.
3. Reproduce the cause with brand-correct material.

### Deliverable

```
REFERENCES: __ collected, __ physical / __ digital
PRINCIPLES EXTRACTED (deduped):
  1. ...
  2. ...  (aim for 5-8; more means you are collecting surface)
FULLY REJECTED: <refs kept for the record and why>
```

### Exit test

Could you hand the principle list to another designer, with **no images**, and
have them produce something recognisably in the same world? If not, your notes
are still describing pictures rather than rules.

---

## Phase 4 — Build the token system

**Goal:** convert the world into a decision machine.

### Colour: build a mapping, not a palette

Identify the **stages of the product's actual process** and assign a hue to
each. The page then changes temperature as the process advances, and every
future colour question answers itself with "which stage is this?"

```
STAGE 1  <name>  -> <hue>  <why>
STAGE 2  <name>  -> <hue>  <why>
STAGE 3  <name>  -> <hue>  <why>
ACCENT   live/now -> <hue>  used sparingly
```

If the product has no natural stages, map to **states** instead (safe /
pending / failed / archived). Never map to "primary / secondary / tertiary" —
that is a palette with extra steps and it means nothing.

### Everything else

```
GROUND      base / lifted / sunken / edge          (4 steps minimum)
INK         primary / body / soft / faint / ghost  (5 steps)
TYPE        display / body / mono / accent         (4 families max)
SCALE       3 display sizes, 1 body, 1 mono. Resist more
MOTION      one house curve + entrance/exit/ambient. Never linear
RADIUS      2 values
SHADOW      4 steps, tinted to the ground, never neutral grey
```

### Contrast gate

Compute every text-on-background pair **before** building. Small uppercase mono
is the worst case and needs more contrast than it appears to. Target ≥ 4.5:1.

See `03-VERIFICATION.md` for the function.

### Deliverable

A `tokens.css` where **every** value lives, and nothing else holds a literal.

### Exit test

Pick three arbitrary UI decisions you have not made yet (a disabled state, an
error toast, a chart gridline). Can each be answered by pointing at a token
rather than inventing a value? If not, the system has holes.

---

## Phase 5 — The hero object

**Goal:** find a metaphor that argues, rather than an illustration that depicts.

### Ranking, minimum four candidates

Reject on sight anything that is:
- **the category cliché** (a network mesh for a data product)
- **merely literal** (an envelope for email — that is a logo, not a metaphor)
- **accidentally arguing the opposite** (a funnel implies volume — fatal if the
  claim is "not about volume")

Score against: semantic fit, literal truth to the claim, material potential,
and buildability.

### Then build it *out of* the palette

Do not place the object on the palette — construct it from it. If your colour
mapping is warm-vs-cool, paint the environment map warm-above-cool so the
object reflects the same dialogue the colours use.

Nobody notices consciously. Everybody feels it belongs.

### For AI features specifically

Choose the **pre-industrial object**. A quill performs the same function as a
robot or a spark and carries none of the category's baggage.

### Exit test

State what the object argues in one sentence. If the sentence is "it looks like
the product", start again.

---

## Phase 6 — Brief and build

### Deliverable

```
BRIEF
  Claim:        ...
  Doubt:        ...
  World:        <name>
  Material:     ...
  Exclusions:   ...
  Principles:   1-8, from Phase 3
  Tokens:       -> tokens.css
  Hero object:  <what, and what it argues>
  Assets needed: <filename, dimensions, spec — see 01-METHOD>
```

Then follow `01-METHOD.md` for sequencing, `02-BUILD.md` for architecture, and
`03-VERIFICATION.md` before every commit.

---

## Working with an EXISTING brand

The original build had no visual identity, which made it easy. Most brands come
with a logo, colours and maybe a deck. Sort what you inherit into three tiers:

| Tier | Contains | Treatment |
|---|---|---|
| **Fixed** | Logo, legal name, trademarked colour, required disclaimers | Never change. Design around them |
| **Negotiable** | Existing palette beyond the trademark, type choices, iconography | Change with a written reason |
| **Absent** | Motion, texture, layout, microtype, hero treatment | Yours to define |

**Most brand guidelines only cover Fixed.** The Absent tier is usually where all
the differentiation lives, and it is usually empty because nobody specified it.

### When the existing brand contradicts the research

Do not silently override. Write it up:

```
CONFLICT:    Brand palette is <X>. Research says the category cliché is <X>.
RISK:        Following the brand argues against the product's own claim.
OPTIONS:
  A  Keep <X> as an accent only, change the ground        <- usually correct
  B  Keep <X> everywhere, differentiate on type + texture
  C  Propose a palette revision with evidence
RECOMMEND:   A, because <reason>
```

Option A is right most of the time: a trademarked colour survives as an accent,
while the *ground* — which does most of the arguing — is almost never in the
guidelines.

### When there is no research budget

Minimum viable version, roughly one hour:

1. Phase 0 on the FAQ and pricing page only (15 min)
2. Phase 1 on 5 competitors, tally only Ground and Accent (20 min)
3. Phase 2 with three candidates (10 min)
4. Phase 3 with four references, three of them physical (15 min)

Skipping Phase 1 is the one that actually costs you. Everything else degrades
gracefully; without the exclusion list you will produce the category average.

---

## The instrument summary

| Phase | Deliverable | Exit test |
|---|---|---|
| 0 Claim | Claim / doubt / stakes | Names a *fear*, not a feature gap |
| 1 Category | Exclusion list | Contains something you wanted to do |
| 2 Material | Scored table + world name | The "argues that..." sentence completes |
| 3 References | 5–8 principles, images closed | Another designer could work from notes alone |
| 4 Tokens | tokens.css | Three unmade decisions answerable from it |
| 5 Hero | Ranked table + object | You can state what it argues |
| 6 Brief | Full brief | Build can begin without further decisions |
