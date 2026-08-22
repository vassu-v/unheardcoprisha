# The MyMailGram Playbook

How this site was designed and built, written so it can be repeated on a
different product by a different agent.

Everything here comes from one real build, including the mistakes. The mistakes
are deliberately kept — they are the most transferable part.

---

## Read in this order

### If you are starting a NEW brand, run these in order

| File | What it covers | Output |
|---|---|---|
| **[05-RESEARCH-PROTOCOL.md](05-RESEARCH-PROTOCOL.md)** | The 6-phase research procedure. Extract the claim, map the category, score a material, collect references, build tokens, choose a hero object. Each phase has a deliverable and an exit test | A design brief |
| **[06-WORKSHEET.md](06-WORKSHEET.md)** | Fillable version of the above. Copy into the new project as `DESIGN-BRIEF.md` | Filled artifacts |
| **[07-BRAND-IDENTITY.md](07-BRAND-IDENTITY.md)** | Creating an identity from nothing: voice, name logic, mark, palette, type, and the prohibitions that keep it alive | A `BRAND.md` |

### Then read these to understand and execute

| File | What it covers | Read it when |
|---|---|---|
| **[00-CREATIVE-PROCESS.md](00-CREATIVE-PROCESS.md)** | The reasoning, as a worked example on one real product. How the design was *arrived at* | To see the method applied |
| [01-METHOD.md](01-METHOD.md) | Sequence, colour mapping, asset requests, motion vocabulary | Before starting a build |
| [02-BUILD.md](02-BUILD.md) | Architecture: tokens, defensive modules, asset enhancement, theming, routing | While building |
| [03-VERIFICATION.md](03-VERIFICATION.md) | How to prove it works. Bug catalogue, CDP harness, what to measure | Before every commit |
| [04-AGENT-PROMPT.md](04-AGENT-PROMPT.md) | A ready-to-paste prompt for a fresh agent | To run this yourself |

**Worked example of the output:** [../../BRAND.md](../BRAND.md) is MyMailGram's
identity, produced by `07`. Use it to see what a finished brand document
contains.

---

## The one-paragraph version

Read the product until you find the sentence it is trying to prove. Look at its
category and identify what you must *not* look like. Choose a **material**
whose meaning already matches what the product produces — not a palette, a
material. Name that world, and use the name to filter every later decision.
From reference images take **structure** and leave **surface**. Rank at least
four options for anything important and write down why three lost. Build the
hero object *out of* the palette rather than on top of it. Give every visual
element a semantic job and cut what has none. Then measure everything, because
taste does not catch a 2.67:1 contrast failure.

---

## What was built

Nine routes, no framework, no build step:

```
/            landing — hero object, 4-step pipeline, live demo, results, FAQ
/features    5 shipped features, safety section, roadmap marked "Planned"
/pricing     3 tiers, live overage calculator, full comparison table
/legal       4 deep-linkable policies with per-panel index and scroll-spy
/login       auth with inline validation and in-place reset
/signup      account creation with password strength and terms gate
/onboarding  4-step flow with handwritten annotations and drawn arrows
/app         mocked dashboard with light + dark themes and a guided tour
/404         branded, with routes onward
```

Stack: vanilla HTML/CSS/JS, GSAP + ScrollTrigger, Three.js for the hero object,
anime.js for counters. ~5 CSS files, ~7 JS files, one token file.

---

## The three ideas that carried the whole build

**1. Invert the category.**
Every competitor looked like a dark scraper dashboard. The product claims it is
personal, not mass. So a dark dashboard would have argued *against* the product
before a word was read. Warm paper and editorial correspondence instead.

**2. Colour must mean something.**
Not a palette — a mapping. Warm ochre = the Instagram side, cool marine = the
product side, sage = verified, plum = AI-composed. The page changes temperature
as the pipeline advances, so colour does argumentative work rather than
decoration.

**3. Measure, never eyeball.**
A screenshot proves a page rendered, not that it is correct. Contrast failures,
scroll-trigger blind spots, counters landing short, and dead CSS are all
invisible in a PNG and obvious in a measurement.

---

## Reference images

`refs/` holds the originals used, plus the results they informed, so the
extraction reasoning in `00-CREATIVE-PROCESS.md` can be checked against the
actual source material.

---

## Honest scope note

This playbook covers **design and front-end craft**. It does not cover backend,
auth implementation, data modelling or infrastructure. `/app`, `/onboarding`,
`/login` and `/signup` in the original build are mocks — deliberately, and
labelled as such on screen.

For the production domain architecture decision (why auth belongs on
`app.domain.com` rather than handing a token across origins), see
[../DEPLOYMENT.md](../DEPLOYMENT.md).
