# Design research worksheet

Copy this file into the new project as `DESIGN-BRIEF.md` and fill it in as you
run `05-RESEARCH-PROTOCOL.md`. It is the artifact the research produces — the
thing you hand to the build.

Do not skip fields. An empty field is a decision you have not made, and it will
resurface later as an inconsistency.

---

## Phase 0 — The claim

```
PRODUCT (one sentence):


THE CLAIM (in the brand's own words if possible):


SOURCE (file / URL):


THE DOUBT (what a sceptical buyer assumes):


THE STAKES (what they lose if the doubt is true):

```

**Exit test:** does THE DOUBT name a fear rather than a feature gap?  ☐

---

## Phase 1 — Category map

Competitors surveyed: `___`  (target 8–12)

| # | Name | Ground | Accent | Type | Hero | Register |
|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |
| 6 |  |  |  |  |  |  |
| 7 |  |  |  |  |  |  |
| 8 |  |  |  |  |  |  |

**Tally — anything over 60% is the cliché:**

```
Ground    ____% ________
Accent    ____% ________
Type      ____% ________
Hero      ____% ________
Register  ____% ________
```

**THE EXCLUSION LIST** (forbidden without written justification):

```
1.
2.
3.
4.
```

**Exit test:** does the list contain something you instinctively wanted?  ☐

---

## Phase 2 — Material

**Candidate generator** (answer all four, then list five candidates):

```
Physical object the product outputs:
Craft that did this job before software:
Material that opposes the cliché:
What the most trusted version would be made of:
```

| Material | Doubt ×2 | Not cliché | Output | Build | Extend | Total |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

```
MATERIAL:
SCORE:        __ / 30
RUNNER-UP:            rejected because:
WORLD NAME:
```

**Exit test — complete this sentence:**

> "This world argues that the product is ____________, which is exactly what
> the buyer doubts."   ☐

---

## Phase 3 — References

Collected: `___`   Physical: `___`   Digital: `___`  (at least half physical)

```
REF-01
  SOURCE:
  TYPE SIZES:          AIR:
  FIRST FIXATION:
  HERO OBJECT:
  MICROTYPE:           COLOUR COUNT:
  STEAL:
  REJECT:

REF-02
  SOURCE:
  TYPE SIZES:          AIR:
  FIRST FIXATION:
  HERO OBJECT:
  MICROTYPE:           COLOUR COUNT:
  STEAL:
  REJECT:

REF-03
  SOURCE:
  TYPE SIZES:          AIR:
  FIRST FIXATION:
  HERO OBJECT:
  MICROTYPE:           COLOUR COUNT:
  STEAL:
  REJECT:

REF-04
  SOURCE:
  TYPE SIZES:          AIR:
  FIRST FIXATION:
  HERO OBJECT:
  MICROTYPE:           COLOUR COUNT:
  STEAL:
  REJECT:
```

**PRINCIPLES EXTRACTED** (deduped, aim for 5–8):

```
1.
2.
3.
4.
5.
6.
```

**FULLY REJECTED REFS** (kept for the record):

```
        because:
```

**Exit test:** could another designer work from these notes with no images?  ☐

---

## Phase 4 — Tokens

**Colour mapping** — stages of the real product process, not primary/secondary:

```
STAGE 1  ________  ->  ________   because
STAGE 2  ________  ->  ________   because
STAGE 3  ________  ->  ________   because
STAGE 4  ________  ->  ________   because
ACCENT   live/now  ->  ________   used sparingly for
```

**Ground and ink:**

```
GROUND   base ______  lifted ______  sunken ______  edge ______
INK      primary ____  body ____  soft ____  faint ____  ghost ____
```

**Type:**

```
DISPLAY  ____________  weights ______  tracking ______
BODY     ____________
MONO     ____________
ACCENT   ____________  used ____ times on the whole site
```

**Motion:**

```
HOUSE CURVE   cubic-bezier(____, ____, ____, ____)
ENTRANCE      ________   EXIT ________   AMBIENT ________
FORBIDDEN     linear, ease-in-out
```

**Contrast gate — compute, do not judge (target ≥ 4.5:1):**

| Pair | Ratio | Pass |
|---|---|---|
| body on ground |  | ☐ |
| body on lifted |  | ☐ |
| faint/label on lifted |  | ☐ |
| mono microtype on sunken |  | ☐ |
| accent on ground |  | ☐ |

**Exit test:** can three unmade decisions be answered from tokens alone?  ☐

---

## Phase 5 — Hero object

| Candidate | Semantic | Literal truth | Material | Buildable | Verdict |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

```
CHOSEN:

WHAT IT ARGUES (one sentence):

HOW IT IS BUILT FROM THE PALETTE (not merely placed on it):

REJECTED, and why:
```

**Exit test:** is the argument sentence something other than "it looks like the
product"?  ☐

---

## Phase 6 — Assets to request

For each, specify enough that the result is usable on arrival:

```
ASSET 1
  Filename:
  Dimensions:            Background: transparent / solid ______
  Material & lighting:
  Palette (tie to tokens):
  Must NOT contain: text, letters, numbers, UI, logos, ______
  Procedural fallback until it arrives:

ASSET 2
  Filename:
  Dimensions:            Background:
  Material & lighting:
  Palette:
  Must NOT contain:
  Procedural fallback:
```

---

## Existing brand audit

Only if the brand already has an identity.

| Tier | Item | Treatment |
|---|---|---|
| Fixed |  | unchanged |
| Fixed |  | unchanged |
| Negotiable |  | change because: |
| Negotiable |  | change because: |
| Absent |  | define as: |
| Absent |  | define as: |

**Conflicts:**

```
CONFLICT:
RISK:
OPTIONS:   A
           B
           C
RECOMMEND:            because
```

---

## Sign-off

```
☐ Phase 0  claim extracted, doubt names a fear
☐ Phase 1  exclusion list written, contains something I wanted
☐ Phase 2  material scored, "argues that" sentence completes
☐ Phase 3  5-8 principles, images closed
☐ Phase 4  tokens.css complete, contrast computed
☐ Phase 5  hero object ranked and argued
☐ Phase 6  asset specs written, fallbacks in place

Build may begin.
```
