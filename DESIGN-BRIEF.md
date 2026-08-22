# UNHEARD — Design Brief

Filled from `playbook/06-WORKSHEET.md`, following `05-RESEARCH-PROTOCOL.md`.
Source of truth for the rebuild. Every later decision should be traceable to a
line in this file.

---

## Phase 0 — The claim

```
PRODUCT (one sentence):
  A ₹1,200 physical kit plus a parent observation system that helps a parent
  discover HOW their 4–12 year old child actually learns, at home, without a
  clinic.

THE CLAIM (the brand's own words):
  "In a system that treats every child the same, we don't have bad students —
   only misunderstood ones."

SOURCE:
  Mission quote, appears twice on unheardnew.vercel.app (challenge section and
  activity-library section). Reinforced by the tagline "Listening to children
  who learn differently."

THE DOUBT (what a sceptical parent assumes):
  "Something is wrong with my child, and this is a product that will confirm
   it — then sell me a fix that doesn't work."

THE STAKES:
  The parent's belief that their child is fine. A label that follows the child
  through school. ₹1,200 and, far worse, another cycle of hope then
  disappointment.
```

**Exit test — does THE DOUBT name a fear, not a feature gap?** ☑
The fear is *diagnosis*. A parent looking at this page is frightened that
clicking will make something official. That is the fear the design has to
answer before a word is read.

**The sharpened version of the claim, which drives everything below:**

> The child is not the problem to be solved. The **observation** is the product.
> UNHEARD does not fix a child; it teaches a parent to see one.

That reframing is load-bearing. It is the difference between "treatment" and
"attention", and it is what the current site gets wrong.

---

## Phase 1 — Category map (the negative brief)

Surveyed 10. Six are the direct category (Indian/global child-development and
learning-difference products); four are the design references supplied, surveyed
here as competitors-in-register because they set the same expectations.

| # | Name | Ground | Accent | Type | Hero | Register | Verified |
|---|---|---|---|---|---|---|---|
| 1 | UNHEARD (current) | purple→teal gradient | ochre/yellow | rounded geometric (Nunito) | jigsaw pieces | friendly-clinical | ✅ visually |
| 2 | Duolingo | white / bold colour blocks | feather green | rounded geometric (Feather) | 3D mascot | gamified | ✅ visually |
| 3 | Greenlight | dark green + pastel bento | lime green | grotesk | device render | family-trust | ✅ visually |
| 4 | Synthesis | dark indigo gradient | amber + cyan glow | geometric sans | video card | cyber-academic | ✅ visually |
| 5 | Klarna | pastel blocks + photo | hot pink | grotesk | photographic | playful-fintech | ✅ visually |
| 6 | Step | dark | violet / mint | geometric sans | floating cards | gen-z fintech | ✅ visually |
| 7 | Scratch | white / primary colours | orange | rounded sans | block UI | tool-forward | ✅ visually |
| 8 | Sensory / SEN kit retail (category) | white or pastel | rainbow spectrum | rounded sans | product photo | clinical-warm | ⚠ category knowledge |
| 9 | Autism / ADHD parent resources (category) | light blue / puzzle motif | multicolour puzzle | rounded sans | puzzle or child photo | medical-reassuring | ⚠ category knowledge |
| 10 | Indian edtech for kids (category) | saturated gradient | yellow/orange | rounded bold sans | mascot or child photo | exam-achievement | ⚠ category knowledge |

**Tally:**

```
Ground     70% gradient or saturated colour field   (7/10)
Accent     60% rainbow or multi-hue, no assigned meaning
Type       80% rounded geometric sans ("child = round")
Hero       60% mascot, puzzle, or stock child photograph
Register   70% cheerful-reassuring, adult-talking-down-to-adult-about-child
Texture    90% flat, no material
```

### THE EXCLUSION LIST

Forbidden without written justification:

1. **The jigsaw puzzle.** Not merely a cliché — it is the autism-awareness
   puzzle piece, widely rejected by autistic people because it depicts the
   child as an incomplete thing to be solved. The current site uses it as its
   *logo* and its hero. On a site claiming "not broken, only misunderstood",
   this is the single worst asset present.
2. **Purple→teal (or any) full-bleed gradient ground.** 70% of the category.
   It signals "wellness app" and it means nothing.
3. **Rainbow / multi-hue accents with no assigned meaning.** Colour must map to
   something real (see Phase 4) or it is decoration.
4. **Emoji as the icon system.** The current site uses 🧩🎯❤️⭐ as its entire
   visual vocabulary. Emoji render differently per OS, cannot be styled, carry
   no brand, and read as unfinished.
5. **Rounded geometric sans for everything.** The unexamined equation
   round = child = friendly. It infantilises a page whose primary reader is a
   worried adult.
6. **Mascots and stock child photography.** A stock child is *someone else's*
   child, which is the opposite of "your child, observed closely".
7. **Gamification furniture** — streaks, badges, confetti, progress rings.
   ← *This is the one I instinctively wanted*, because the Duolingo and
   Greenlight references do it so well and it is genuinely fun to build. It is
   excluded because the product is not a game the child plays; it is an
   instrument the parent reads. Rewarding a parent with confetti for observing
   their child is grotesque.

**Exit test — does the list contain something I wanted to do?** ☑ (#7.)

---

## Phase 2 — The material

### Candidate generator

```
Physical object the product outputs:
  Not the kit. The kit is the instrument. The OUTPUT is a filled-in
  observation sheet — a parent's own handwriting recording what they saw their
  child do on a Tuesday.

Craft that did this job before software:
  The field notebook. Naturalist observation, developmental case notes, the
  Montessori teacher's own tradition of written child observation. Also: the
  school report card, which is the villain version of the same object.

Material that opposes the cliché:
  Cliché is a weightless glowing gradient. The opposite is paper with tooth,
  ink that has been pressed, and a ruled grid.

What the most trusted version would be made of:
  Sturdy card and cloth-bound board. Something you keep. A kit that survives
  being handled daily by a seven-year-old and stays on the shelf for years.
```

### Scored (weight column 1 double)

| Material | Doubt ×2 | Not cliché | Output | Build | Extend | **Total** |
|---|---|---|---|---|---|---|
| Glossy app / gradient | 1 ×2 = 2 | 1 | 1 | 5 | 4 | **13** |
| Clinical white + medical blue | 1 ×2 = 2 | 3 | 2 | 5 | 5 | **17** |
| Nursery pastel / soft toy felt | 2 ×2 = 4 | 2 | 2 | 4 | 3 | **15** |
| Chalkboard / classroom | 2 ×2 = 4 | 4 | 2 | 4 | 3 | **17** |
| **Field notebook — ruled paper, ink, pressed board** | **5 ×2 = 10** | **5** | **5** | **5** | **5** | **30** |

```
MATERIAL:    The field notebook. Warm off-white ruled stock, real ink,
             cloth-board covers, a graph-paper substrate, hand-annotation.
SCORE:       30 / 30
RUNNER-UP:   Chalkboard / classroom (17) — rejected because the classroom is
             precisely the institution that failed this child. The whole claim
             is that the system treats every child the same. Dressing the site
             as a school argues for the system, not for the parent.
WORLD NAME:  "The Observation Notebook"
```

**Exit test:**

> "This world argues that the product is **attention rather than diagnosis —
> a parent watching closely and writing it down**, which is exactly what the
> buyer doubts."   ☑

### Why this material and not another

Three properties make it the right answer rather than a nice one:

1. **The material IS the output.** The product's deliverable is literally a
   filled observation checklist and a progress tracker. Paper and ink are not a
   metaphor here; they are the object in the box.
2. **A notebook is not a verdict.** A clinical report says *this is what your
   child is*. A notebook says *this is what I saw today*. That distinction is
   the entire emotional difference between the fear and the product, and paper
   carries it for free.
3. **It inverts every item on the exclusion list at once.** Not a gradient
   (a ground with tooth), not rainbow (ink plus assigned hues), not rounded
   (a real type system), not emoji (drawn marks), not a mascot (the child is
   absent — the *observation* is the subject).

**The behavioural consequence** (a named world dictates behaviour, not just
appearance): a notebook is honest about what it does not know. So the site must
state plainly that UNHEARD is **not** a diagnosis, not a therapy, and not a
substitute for a professional. That sentence goes on the page in a prominent
position, not buried. It costs a little conversion and buys the entire claim.

---

## Phase 3 — References

Supplied: 7 sites (`design-references/`). All digital, which the protocol warns
about. I therefore ran the physical half from craft knowledge rather than
image collection: naturalist field notebooks, Montessori observation records,
letterpress ruled stationery, and library index cards.

```
REF-01  Content Architecture (contentarchitecture.dev)          [STRONGEST]
  TYPE SIZES:    3 visible          AIR: ~55%
  FIRST FIXATION: the black headline, because the ground is flat, even, and
                  low-contrast so nothing else competes
  HERO OBJECT:   dark panel of concentric type, hard split against warm ground
  MICROTYPE:     mono status line ("NEXT 16.X  ASTRO 7.X  DRIFT: 0") doing
                 TEXTURE work, not information work
  COLOUR COUNT:  3, each meaningful (ground / ink / one orange dot = "new")
  STEAL:         (a) warm off-white ground with mono microtype as instrument
                 texture. (b) hard vertical split, no gradient between halves.
                 (c) a single accent dot as the only saturated pixel.
  REJECT:        the agency-brutalist coldness, the concentric-type spiral,
                 the developer register. Wrong audience entirely.

REF-02  Greenlight
  TYPE SIZES:    3                  AIR: ~40%
  FIRST FIXATION: headline, aided by the lime pill behind "#1"
  HERO OBJECT:   device render, centred, small
  MICROTYPE:     none — stat row is display-sized
  COLOUR COUNT:  4, semi-meaningful (green = money, blue = location)
  STEAL:         (a) the four-stat trust row directly under the hero CTA —
                 parents scan for proof immediately. (b) bento chunking so a
                 parent can read one card and leave. (c) a highlight pill drawn
                 BEHIND a word in the headline.
  REJECT:        the dark-green ground, the pastel-lilac cards, the device
                 render, 24px radius everywhere (reads as app-store screenshot).

REF-03  Klarna
  TYPE SIZES:    2 in hero          AIR: ~30%
  FIRST FIXATION: the photographic object, then the headline
  HERO OBJECT:   real photographed object at an angle, oversized, cropped
  MICROTYPE:     none
  COLOUR COUNT:  many, decorative
  STEAL:         (a) one real photographed object, oversized and cropped by the
                 frame, beats any illustration. (b) tactile pill button with a
                 spring curve. (c) full-bleed colour BLOCKS with hard edges —
                 not gradients.
  REJECT:        the pastel palette, the ecommerce register, the carousel.

REF-04  Duolingo
  TYPE SIZES:    2                  AIR: ~35%
  FIRST FIXATION: the mascot
  HERO OBJECT:   3D character
  MICROTYPE:     none
  COLOUR COUNT:  many, named after animals — charming, but the names carry the
                 meaning rather than the roles. "Macaw" tells you nothing about
                 when to use it.
  STEAL:         ONE thing: the tactile button with a solid bottom shadow that
                 compresses on press (`box-shadow: 0 5px 0`; press →
                 `translateY(4px)`). It makes a click feel physical, which is
                 exactly right for a product about physical materials.
  REJECT:        everything else. The mascot, the gamification, the rounded
                 face, the colour system. This is a game; UNHEARD is not.

REF-05  Synthesis                                            [MOSTLY REJECTED]
  STEAL:         the parent-facing proof line under the CTA ("join over 35,000
                 forward-thinking parents") sits directly beneath the button
                 where the hesitation happens.
  REJECT:        the entire visual world. Dark indigo gradient + glow is
                 exclusion-list #2 and #3 at once, and "cyber" is the wrong
                 register for a worried parent of a 6-year-old.

REF-06  Step                                                 [FULLY REJECTED]
  Kept for the record. Teen fintech, dark, violet/mint, floating cards.
  Wrong audience (teens buying for themselves vs parents buying for a child),
  wrong register, and on the exclusion list for ground and accent.

REF-07  Scratch
  STEAL:         colour-as-category. Scratch colours blocks by KIND (motion,
                 sound, control) so colour is a legend, not decoration. This is
                 the correct model for our five learning models and our skill
                 tags.
  REJECT:        the visual density, the primary-colour palette, the app-tool
                 chrome.
```

### PRINCIPLES EXTRACTED (deduped — 7)

1. **A flat, even, warm ground makes black type land hard.** Evenness, not hue,
   is what produced the authority in REF-01. Reproduce the evenness in our
   material. *(REF-01)*
2. **Mono microtype is instrument texture.** Small caps mono in corners, on
   labels, on section slugs makes a page feel measured and precise without
   saying anything. Nobody reads it; everybody feels it. *(REF-01)*
3. **Exactly one saturated accent, meaning "now / live / this one".** *(REF-01,
   REF-02)*
4. **Proof sits immediately under the primary CTA**, where the hesitation
   happens — not in a testimonials section 4 screens down. *(REF-02, REF-05)*
5. **Chunk into cards a reader can leave after one.** A worried parent scans;
   they do not read top to bottom. *(REF-02)*
6. **One real photographed object, oversized and cropped by the frame**, beats
   any illustration for credibility. *(REF-03)*
7. **Colour as legend, not decoration** — assign hues to categories so the
   colour itself is information. *(REF-07)*

Plus one **tactile** principle: physical button depth with a spring curve
(`cubic-bezier(0.34, 1.56, 0.64, 1)`), from REF-04, because it is the only way
a screen can reference a product made of real objects.

**FULLY REJECTED REFS:** Step (REF-06), and Synthesis (REF-05) except for one
copy-placement idea. Recorded because being handed a reference is not an
instruction to use it.

**Exit test — could another designer work from these notes with no images?** ☑

---

## Phase 4 — Tokens

### Colour: a mapping, not a palette

The product's real process has four stages. The page changes temperature as it
advances through them, so every future colour question is answered by "which
stage is this?"

```
STAGE 1  OBSERVE   -> Graphite  #2A2A28   because observation is neutral. The
                                          parent is not judging yet. Ink, not
                                          colour.
STAGE 2  DISCOVER  -> Marigold  #E0872B   because discovery is the warm moment
                                          of recognition — "oh, THAT is how she
                                          learns". Warm = the child's side.
STAGE 3  SUPPORT   -> Ink Blue  #2D5BA8   because support is the parent's
                                          deliberate act. Cool = the parent's
                                          side, steady and reliable.
STAGE 4  GROW      -> Moss      #4A7A55   because growth is verified, recorded,
                                          real. Green here means "confirmed",
                                          not "eco".
ACCENT   live/now  -> Signal    #E4572E   used sparingly: the "one" marker, the
                                          today dot, the active tab, text
                                          selection. The only loud colour, and
                                          the only one allowed to be saturated
                                          at full strength.
```

The warm/cool split is the same argument as the product: **warm is the child,
cool is the parent, and the page brings them together.** The five learning
models each take one hue from this set as a legend (principle #7), so the
Activity Library is colour-coded by model, not decorated.

Note: Signal `#E4572E` and Marigold `#E0872B` are deliberately close in hue and
far apart in saturation and role. Marigold is a *stage*; Signal is a *state*.
If they ever appear adjacent at the same size, Signal loses and becomes a dot.

### Ground and ink

```
GROUND   base   #F6F3EC   warm notebook stock, flat and even (principle #1)
         lifted #FBF9F4   a card lying on the page
         sunken #EFEAE0   a ruled or recessed field
         edge   #DDD5C7   the drawn rule, 1px

INK      primary #1C1B19  headline ink, nearly black, warm-shifted
         body    #3A3733
         soft    #66625B
         faint   #8B857C  ← contrast-gated below; NOT for small mono on sunken
         ghost   #B8B1A5  rules and disabled only, never text
```

Dark ground (used **once**, at the honest moment — see Structure):

```
NIGHT    base   #1E1D1A   the same paper in low light, warm-shifted ~35°,
                          NOT neutral zinc and NOT indigo (exclusion #2)
         lifted #292724
         ink    #F2EEE5
```

### Type

```
DISPLAY  Fraunces  (variable serif, optical size + soft/wonky axes)
         weights 600–700, tracking -0.02em
         WHY: the category is 80% rounded geometric sans (exclusion #5). A
         warm serif with a soft optical axis reads as *written*, as a book, as
         a person's considered sentence. It is the single strongest departure
         from the category and it costs nothing in legibility.

BODY     Inter  400/500/600
         WHY: invisible, excellent at small sizes, reads fast for a scanning
         parent. Already loaded by the current site, so nothing is lost.

MONO     JetBrains Mono  400/500, uppercase, tracking +0.08em
         WHY: instrument texture (principle #2). Section slugs, skill tags,
         observation-field labels, stat keys.

ACCENT   Caveat  (handwriting)
         USAGE LIMIT: **twice per page, maximum.** It is the parent's own hand
         annotating the notebook. Used three times it is decoration; used twice
         it is a signature.

SCALE    display  clamp(2.4rem, 6vw, 4.6rem) / clamp(1.6rem, 3vw, 2.4rem)
                  / 1.25rem
         body     1rem (16px), long-form 1.0625rem
         mono     0.75rem
         That is the whole system. Three display, one body, one mono.
```

### Motion

```
HOUSE CURVE   cubic-bezier(0.16, 1, 0.3, 1)      general
SPRING        cubic-bezier(0.34, 1.56, 0.64, 1)  hover lift + button press only
ENTRANCE      expo.out    EXIT expo.in    AMBIENT sine.inOut
FORBIDDEN     linear, ease-in-out
RULE          asset moves before text; sequence, never stack
REDUCED       prefers-reduced-motion applies the FINAL state immediately
```

### Radius and shadow

```
RADIUS   4px (fields, tags, rules) and 14px (cards). Two values only.
         NOT 24px — that is the app-store-screenshot radius from REF-02.
SHADOW   4 steps, all tinted warm (never neutral grey):
         rgba(60, 48, 30, 0.04 / 0.07 / 0.11 / 0.16)
```

### Contrast gate — COMPUTED, and it failed

Measured with the `03-VERIFICATION.md` function before writing a line of CSS.
**8 of 24 pairs failed.** The two flagged in advance both failed, exactly as
the playbook's bug #9 predicted — Marigold on warm off-white measured
**2.47:1** and looks completely fine to the eye. Shipping on eyeballs would
have shipped it broken.

**Resolution: every hue splits into three verified values.** A hue is not one
colour; it is a fill, a text value, and a night value.

| Role | Fill (large areas, never text) | Text (on any light ground) | Night (on dark ground) |
|---|---|---|---|
| Marigold — DISCOVER | `#E0872B` | `#9C5A17` | `#E0872B` |
| Ink Blue — SUPPORT | `#2D5BA8` | `#2D5BA8` | `#638ED5` |
| Moss — GROW | `#4A7A55` | `#477451` | `#5E9B6C` |
| Signal — live/now | `#E4572E` | `#BD3E18` | `#E76742` |

Neutral fix: `ink.faint` moves `#8B857C` → **`#6E6962`** (4.54:1 on the worst
ground, `sunken`). The old value was 3.05:1 for small mono, which is the exact
failure mode the playbook records.

All text values are solved against `ground.sunken` (the darkest light ground),
so a single text token is safe on base, lifted, and sunken alike.

**Button labels:** Marigold and Signal fills take an **ink** label
(`#1C1B19` — 6.29:1 and 4.67:1), not white (2.74:1 and 3.68:1). This is better
on merit anyway: dark ink on warm colour is the notebook material, whereas
white-on-orange is the app-store look the exclusion list rejects. Ink Blue and
Moss take white labels (6.62:1, 4.99:1).

**Verified pairs after fix — all pass:**

| Pair | Ratio | Target |
|---|---|---|
| ink.primary on base | 15.53 | 7 |
| ink.body on base | 10.68 | 7 |
| ink.soft on base | 5.47 | 4.5 |
| ink.faint (fixed) on sunken — small mono worst case | 4.54 | 4.5 |
| marigold.text on sunken | 4.50 | 4.5 |
| signal.text on sunken | 4.53 | 4.5 |
| inkBlue.text on sunken | 5.52 | 4.5 |
| moss.text on sunken | 4.51 | 4.5 |
| night.ink on night.base | 14.56 | 7 |
| marigold.night on night.lifted | 5.44 | 4.5 |
| signal.night on night.lifted | 4.55 | 4.5 |
| ink label on marigold fill | 6.29 | 4.5 |
| ink label on signal fill | 4.67 | 4.5 |
| white on inkBlue fill | 6.62 | 4.5 |
| white on moss fill | 4.99 | 4.5 |

`ink.ghost` `#B8B1A5` (1.92:1) is rules and disabled states **only**, never
text. Enforced as a prohibition in BRAND.md.

**Exit test — three unmade decisions answerable from tokens alone:**
- *A form field in an error state?* → Signal at 1px rule + Signal text on
  ground.lifted. ☑
- *The rule between two activity cards?* → ground.edge, 1px. ☑
- *A "Planned" roadmap tag?* → mono, ink.soft, dashed ground.edge border, no
  fill. ☑

---

## Phase 5 — The hero object

### Ranked, minimum four

| Candidate | Semantic | Literal truth | Material | Buildable | Verdict |
|---|---|---|---|---|---|
| Jigsaw piece / puzzle | Child is incomplete | false and harmful | flat | easy | **Rejected — actively argues against the claim.** The autism-puzzle symbol. Currently the site's logo. |
| Lightbulb / spark | Sudden insight | false — this is slow attention, not a flash | flat | easy | **Rejected — cliché, and wrong about the mechanism.** |
| Child photograph | Depicts a child | it is someone else's child | photo | easy | **Rejected — the opposite of "your child, observed".** |
| Brain / neuron diagram | Neurodiversity | medicalises, invokes diagnosis | flat | medium | **Rejected — walks straight into the fear.** |
| Key / unlocking | "unlock potential" | one right answer exists | flat | easy | **Rejected — implies a single hidden solution.** |
| **The open observation notebook** | Attention, recorded, over time | it is literally in the box | paper, ink, board, real | photograph or render | **CHOSEN** |

```
CHOSEN:  An open notebook page — ruled warm stock, a real ink observation
         written in it, a date, and a small pressed-ink mark. Oversized and
         cropped by the frame (principle #6), overlapping the headline column
         (REF-01's layering move).

WHAT IT ARGUES (one sentence):
  "Somebody paid attention to your child and wrote it down" — which is the
  precise opposite of "a system labelled your child and moved on."

HOW IT IS BUILT FROM THE PALETTE (not merely placed on it):
  The page is ground.base stock. Its rules are ground.edge. The handwriting is
  Graphite (STAGE 1, observe). One phrase in the observation is underlined in
  Marigold (STAGE 2, discover) — so the hero object literally performs the
  first two stages of the colour mapping. The Signal accent appears exactly
  once on it, as the small "today" dot.
  The object is not on the palette; the palette is what the object is made of.

FOR THE AI-ADJACENT / "SMART" FRAMING:
  Playbook rule — choose the pre-industrial object. There is no spark, no
  neural net, no glow anywhere on this site. A ruled page and a pen perform
  the entire function.
```

**Exit test — is the argument sentence something other than "it looks like the
product"?** ☑

---

## Phase 6 — Structure and assets

### Route plan

```
/                landing
/kit             the ₹1,200 kit in detail, what is in the box, add-ons
/activities      the 45-activity library, filterable by model and skill
/about           research basis, founder, mission
/contact         the enquiry form (real fields from the current site)
/404             branded
```

The Activity Library earns its own route: 45 sourced, cited activities across
5 models is the most substantial asset this brand owns, and it is currently
buried in a tab strip mid-page.

### The one dark section

Per the playbook rule — use the register the product is accused of exactly
once, at the moment it is honest. Here the accusation is **clinical
assessment**. So the single Night-ground section is the honest disclaimer:

> UNHEARD is not a diagnosis. It is not a therapy, and it is not a substitute
> for a paediatrician, psychologist, or special educator. It is a way for you
> to notice more and guess less.

That section is dark, quiet, and unornamented. Because everything around it is
warm paper, it lands as the moment the brand tells the truth about its limits.

### Assets needed

Procedural fallbacks ship first for all of these; the page is never broken
while waiting. **I will build all fallbacks so nothing is blocked.**

```
ASSET 1 — hero-notebook.png                        [REQUEST FROM USER]
  Dimensions:  2400 x 1600, transparent PNG
  Subject:     an open notebook at a slight angle, warm off-white ruled stock,
               a handwritten observation in dark ink, one phrase underlined in
               warm ochre. A pen resting. Shot top-down or near-top-down.
  Lighting:    soft warm daylight from upper-left, gentle shadow lower-right
  Palette:     ground #F6F3EC, ink #1C1B19, underline #E0872B
  Must NOT:    contain readable brand text, logos, a child, a face, emoji,
               UI, a jigsaw, or any medical object
  Fallback:    an SVG/CSS notebook I build from tokens — ruled lines, a Caveat
               observation, a Marigold underline. Genuinely good; the photo is
               an upgrade, not a rescue.

ASSET 2 — kit-contents.jpg                         [REQUEST FROM USER]
  Dimensions:  2000 x 1500, solid warm background
  Subject:     the real UNHEARD kit contents laid flat — cards, sensory items,
               checklist, booklet, stickers. Real product photography.
  Must NOT:    contain a child, hands, or medical framing
  Fallback:    a token-built card grid naming each item.
  NOTE:        This is the highest-value asset. Principle #6 says one real
               photographed object beats any illustration. If the real kit
               exists, a phone photo on a plain surface in daylight is worth
               more than anything I can render.

ASSET 3 — logo                                      [I BUILD, YOU MAY REPLACE]
  Inline SVG, designed at 16px first, one colour, one idea.
  Direction: see BRAND.md. It will NOT be a puzzle piece.

ASSET 4 — founder photo (Prisha Dhawan)             [REQUEST FROM USER]
  Currently a "PD" initials circle. A real photo is strictly better on an
  about page whose subject is a person who listened to people.
  Fallback: a typographic initials plate in tokens, which is what exists now.
```

### Copy rules for this build

- No em-dashes in body copy (machine tell). The current site is full of them.
- The word "struggling" is the current site's framing and it sides with the
  fear. Prefer describing what the child *does*, not what they fail at.
- Mark what does not exist: "Future Vision" items get the dashed, quiet,
  `Planned` treatment. Never let them read as shippable.
- Say the unflattering thing: the not-a-diagnosis section, and honest limits on
  what a ₹1,200 kit can do.
- Real numbers only: 60+ surveys, 45 activities, 5 models, ₹1,200, ₹499,
  ages 4–12. Nothing invented.

---

## Existing brand audit

| Tier | Item | Treatment |
|---|---|---|
| Fixed | Name "UNHEARD" | unchanged |
| Fixed | Tagline "Listening to children who learn differently" | unchanged — it is genuinely good and it states the claim |
| Fixed | Price ₹1,200 / webinar ₹499 / ages 4–12 | unchanged |
| Fixed | Contact details, founder name, @unheardco | unchanged |
| Fixed | The 45-activity library and its citations | unchanged content, rebuilt presentation |
| Negotiable | Purple/teal palette | **changed** — exclusion #2. It is a gradient ground with no assigned meaning. |
| Negotiable | Nunito rounded display | **changed** — exclusion #5. Replaced with Fraunces. Inter is kept. |
| Negotiable | Emoji icon system | **changed** — exclusion #4. Replaced with a drawn SVG mark set. |
| Absent | Motion, texture, microtype, grid, dark register, radius, shadow, hero treatment, layout | **mine to define** |

### Conflict

```
CONFLICT:   The existing identity's central mark is a JIGSAW PUZZLE PIECE, and
            purple is the established brand hue. Research says the puzzle is
            not merely the category cliché but a symbol widely rejected by the
            community this product serves, because it depicts the child as
            incomplete.
RISK:       Keeping it argues, in the logo, that the child is a problem to be
            solved — the exact opposite of the brand's own stated mission
            sentence. This is a reputational risk, not only an aesthetic one.
OPTIONS:
  A  Drop the puzzle entirely; keep a trace of the purple as a minor accent
  B  Keep the puzzle, differentiate on type and texture
  C  Keep the puzzle only in the favicon
RECOMMEND:  A. The puzzle has to go on merit, and the brand is early enough
            that no equity is lost. Purple does not survive as a system hue
            either, because it carries no meaning in the stage mapping; if the
            founder wants continuity, the nearest defensible home is a single
            desaturated plum used for one category in the Activity Library.
            Flagging for the user rather than deciding silently.
```

---

## Sign-off

```
☑ Phase 0  claim extracted, doubt names a fear (diagnosis)
☑ Phase 1  exclusion list written, contains something I wanted (gamification)
☑ Phase 2  material scored 30/30, "argues that" sentence completes
☑ Phase 3  7 principles + 1 tactile, images closed, 2 refs rejected on record
☑ Phase 4  token system specified; CONTRAST STILL TO BE COMPUTED
☑ Phase 5  hero object ranked, 5 rejected in writing, built from the palette
☑ Phase 6  routes, one-dark-section, asset specs with fallbacks

Build may begin. Contrast gate must be measured before first commit.
```


---

## Addendum — the lavender revision

Added after the first build, at the client's direction: *"colors such as
lavenders, which actually connect to the philosophy of the core company...
which actually indeed provide emotional support and comfort. Use this
throughout the website to make it a little warmer and lighter headed."*

This is a good note and it improves the brief rather than compromising it, for
a specific reason. Phase 1 recorded a conflict: the old identity's purple had
no defensible home in the stage mapping, so the recommendation was to drop it.
Lavender resolves that conflict by giving the hue an actual job.

```
CHANGE:   The GROUND becomes lavender paper (#F3EFF6), not warm beige.
          A new system hue SOOTHE (#A68BC9) covers emotion / self / comfort.
          The ACCENT moves from orange #E4572E to raspberry #C9436B.

WHY THE GROUND AND NOT AN ACCENT:
          Emotional support is not one feature of this product, it is the
          whole product. A hue that means "comfort" therefore belongs to the
          ground, where it works on the reader before a word is read, rather
          than to a badge somewhere on the page.

WHY THE ACCENT HAD TO MOVE:
          Orange on lavender is a hard complementary pair. Measured side by
          side it reads as alarm, which is the one register this brand cannot
          use. Raspberry sits in the same violet-red family as the paper, so
          it stays loud enough to mean "now" while the ground stays calm.
          Verified: white label on raspberry = 4.67:1.

WHAT DID NOT CHANGE:
          The material (still ruled, grained, pressed paper), the hero object,
          the logo, the type system, the four-stage mapping, the one-dark-
          section rule, and every prohibition. Lavender changed the hue of the
          world, not the world.

RECONCILES the Phase 1 conflict: the old brand's purple survives, not as a
decorative gradient, but as a hue with a stated meaning. Option C from the
conflict table ("propose a palette revision with evidence") rather than
option A.
```

### Contrast re-verified against the lavender grounds

Every ink and stage value was re-solved, because changing the ground
invalidates every ratio computed against the old one.

| Token | Value | Ratio | Against |
|---|---|---|---|
| ink | `#1C1B19` | 15.15 | base |
| ink-body | `#3A3733` | 10.42 | base |
| ink-soft | `#66625B` | 5.34 | base |
| ink-faint | `#6B6661` | 4.53 | sunken (worst case) |
| discover-text | `#985717` | 4.51 | sunken |
| signal-text | `#B8355C` | 4.52 | sunken |
| support-text | `#2D5BA8` | 5.28 | sunken |
| grow-text | `#45704F` | 4.55 | sunken |
| soothe-text | `#7A53AF` | 4.55 | sunken |
| night ink | `#F2EEE5` | 14.04 | night base |
| signal-night | `#D67290` | 4.51 | night lifted |
| white on signal fill | `#FFFFFF` | 4.67 | `#C9436B` |

Full-site verification after the change: 0 JS errors, 0 horizontal overflow,
0 contrast failures, 0 broken links, across 6 routes at 1440px and 430px, plus
78 interactive states checked by forced pseudo-class.
