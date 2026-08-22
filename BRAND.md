# UNHEARD | Brand Identity

Produced with `playbook/07-BRAND-IDENTITY.md`. Governs the website, the printed
kit, system email, invoices and decks. If a decision is not answerable from
this document, the missing section is the thing to write.

Research and reasoning: [`DESIGN-BRIEF.md`](DESIGN-BRIEF.md).

---

## 1. The claim and the doubt

```
THE CLAIM:  "In a system that treats every child the same, we don't have bad
             students, only misunderstood ones."

THE DOUBT:  "Something is wrong with my child, and this product will confirm
             it, then sell me a fix that doesn't work."

THE STAKES: The parent's belief that their child is fine. A label that follows
            the child through school. Another cycle of hope and disappointment.
```

**What the brand actually sells:** not a fix for a child. A way for a parent to
**see** their child accurately. The observation is the product.

---

## 2. Voice

```
WE SOUND LIKE:   a experienced teacher sitting beside a parent after school,
                 saying "here is what I noticed about her today": specific,
                 unhurried, and not in a rush to conclude anything

WE NEVER SOUND:  a clinic report, or a cheerful edtech ad promising a
                 breakthrough in 30 days

BECAUSE:         the doubt is "you are going to tell me my child is broken."
                 A teacher describing what they saw is the opposite of a
                 verdict. Description, not diagnosis.
```

**The test that makes this real.** The voice must be able to say something
against its own commercial interest. UNHEARD's version:

> "This kit will not tell you what your child *has*. If you need that, you need
> a paediatrician or a child psychologist, and we will say so plainly rather
> than sell you a ₹1,200 box instead."

That sentence ships on the site, in the one dark section. A voice that can only
sell is a marketing tone, not a brand voice.

### Practical voice rules

- **Describe behaviour, never label the child.** "She rebuilds the tower after
  it falls", not "she is resilient", and never "she is a kinaesthetic learner".
- **Prefer the specific to the general.** "Twelve minutes on one puzzle" beats
  "improved focus".
- **The parent is competent.** Never explain their own child to them; give them
  a way to look.
- **Say what we do not know.** Sample sizes, limits, what is planned versus
  what ships.
- **No em-dashes in body copy.** Machine tell.
- **The word "struggling" is not ours.** It sides with the fear. Say what the
  child does, not what they fail at.

---

## 3. Name logic

```
NAME:             UNHEARD

LITERAL PARTS:    "un" + "heard", a negation of being listened to

FIRST READING:    the child who is not heard. Obvious, and the one the current
                  site uses.

SECOND READING:   the PARENT who is not heard. The parent who told the school
                  something was different and was waved away. The one who has
                  been saying it for two years to people who were not
                  listening.
                  ← This is the distinctive one, and it is where the identity
                  lives. The buyer is the parent. The brand's promise is that
                  somebody is finally listening to THEM.

THIRD READING:    the sound itself. What was said but not registered. Signal
                  present, reception absent.

THE MARK MAY DEPICT:
  listening, attention, a recorded observation, a mark being made, sound,
  a page, the act of noticing

THE MARK MUST NOT DEPICT:
  a puzzle or missing piece (the child is not incomplete), a brain, a
  lightbulb, a child's face, a key or lock, a heart, a ribbon, a mascot,
  anything medical, anything that implies a deficit
```

The prohibition on the puzzle is absolute and is the single most important line
in this document. See §7.

---

## 4. The mark

**One idea: a mark being made on a ruled line.**

The logo is the smallest possible act of observation: a single stroke entered
on a line that was empty. It is what a parent does when they notice something
and write it down.

```svg
<svg viewBox="0 0 32 32" role="img" aria-label="UNHEARD">
  <rect width="32" height="32" rx="7" fill="#17161B"/>
  <!-- two ruled lines: the notebook -->
  <path d="M7 14h18M7 20h18" stroke="#FAF9FC" stroke-width="1.5"
        stroke-linecap="round" opacity="0.4"/>
  <!-- the observation: one stroke that rises above its line -->
  <path d="M9.2 20c3.3 0 2.8-10.2 6.5-10.2s3.1 6.9 6.3 6.9"
        fill="none" stroke="#FAF9FC" stroke-width="2.8"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

| Element | Why |
|---|---|
| Ink square, `rx="7"` on 32 | A stamped block, not an app tile. Softened, not a pill. |
| **Two** faint ruled lines, at 40% | The notebook. Two rather than three so the stroke dominates rather than competing with its own substrate. They read as ground, not as content. |
| One stroke rising above the rules | The thing that did not fit the line. This is the child, drawn as *interesting*, never as broken. It is also a waveform: the second reading, sound that was there all along. |
| Nothing else | No gradient, no puzzle, no glow, no second colour. |

**Chosen by rendering, not by eye.** Four constructions were drawn and compared
at 16/20/24/32/48/96px, on ink, reversed on paper, and bare with no square. The
three-rule versions muddied below 24px because the rules competed with the
stroke; the four-rule version failed at 16px outright. This one holds at 16px
and is the only variant that also works with no square, which the printed kit
needs.

**Why this mark and not a wordmark alone:** it survives at 16px, it works in
one colour, and it says the whole thesis: *the line is the system, the stroke
is the child, and the point is that somebody drew it in.*

### Lockup

- **Full lockup:** mark + `UNHEARD` in Archivo 800, tracking `-0.018em`.
  Mark height = cap height × 1.45.
- **Wordmark alone:** permitted above 240px width.
- **Mark alone:** favicon, app icon, stamp on printed kit, social avatar.
- **Tagline lockup:** "Listening to children who learn differently" in Inter
  500 below the wordmark, never inside the mark.

### Tests

- **16px favicon:** verified by rendering at 16/20/24/32/48/96px. The stroke
  stays legible because it crosses both rules and rises above the top one. ✅
- **One colour:** the mark is already one colour on one ground. ✅
- **Reconstructible from description:** "a rounded ink square, two faint ruled
  lines, one stroke that rises above them." ✅
- **Reversed** (ink stroke on paper square): works, used on the printed kit.

---

## 5. Palette

Hierarchy first: which colour is the brand, and which are the system.

```
BRAND       Ink       #17161B    the mark, the wordmark, headlines
            Paper     #FAF9FC    near-white with a faint violet cast
            Violet    #6D3EE8    the hue that leads

SYSTEM      Emerald   #12A366    verified / confirmed / real
ACCENT      Amber     #FF8A2B    the lift. Splash only, never a system role.
```

**Three hues, three jobs, and the jobs do not overlap.**

| Hue | Fill | Text (light) | Night | Soft tint | Label on fill | Job |
|---|---|---|---|---|---|---|
| **Violet** | `#6D3EE8` | `#6D3EE8` | `#916DEE` | `#EDE7FE` | white (5.99) | Leads. Primary action, brand, focus rings. |
| **Emerald** | `#12A366` | `#0E7D4E` | `#12A366` | `#E0F6EC` | ink (5.53) | Confirms. Verified, recorded, done. |
| **Amber** | `#FF8A2B` | `#B35000` | `#FF8A2B` | `#FFF0E0` | ink (7.65) | Lifts. Free things, the child's own work, warmth. |

**Why the ground is near-white and not coloured.** Premium reads as air and
crisp surfaces, not as a tinted page. The violet cast in the paper is barely
perceptible and exists only so white cards separate from it cleanly.

**Why amber is a splash and never a system colour.** Violet and emerald carry
meaning that repeats on every page, so they can appear often. Amber marks the
warm human note: the moment something is free, generous, or the child's own.
Used everywhere it would become a fourth system hue and the page would go back
to being a rainbow. Rule: **at most three amber elements on one screen.**

Amber now appears on every page, always against that test. Where it landed,
and why each one qualifies:

| Page | Element | Why it is a warm human note |
|---|---|---|
| Landing | The `₹1,200` stat | One-time, no subscription. The generous fact. |
| Landing | "For the child" checklist panel | The child's own things. The parent's panel stays emerald: that one is the record. |
| Landing | Free-activities label and CTA | Free and ungated. |
| Kit | Numeral 05, sticker reward sheet | The sensory pack and the sticker sheet are for the child alone, with no score attached. |
| About | "Who is behind it" label, founder ring | The one human face on the site. |
| About | Method 01, Japan model card | The listening that started it. |
| Contact | "The activities are free" card | You need not write to us at all. |
| 404 | The activities button | The warm way out of a dead end. |

Emerald never moved to make room. Where a thing is *verified* rather than warm
("Nothing is shared", "Sourced activities", the parent's record sheets), it
stays green. The two hues answer different questions and are not swapped for
variety.

**A fill value is never text.** Emerald fill on white is 3.25:1 and amber fill
is worse. Every hue splits into fill / text / night and they are not
interchangeable. This is enforced by measurement, not by eye.

### Neutrals

```
GROUND   base   #FAF9FC    near-white, faint violet cast
         lifted #FFFFFF    cards are pure white: crisp, not tinted
         sunken #F1EFF7    a recessed field
         edge   #E4E0EE    the hairline. Depth comes from THIS, not shadow.

INK      primary #17161B   headlines            15.79:1 on sunken
         body    #3D3A47   body copy             9.73:1
         soft    #6A6578   secondary             4.92:1
         faint   #6A6578   labels and small mono 4.92:1
         ghost   #B6B1C4   RULES AND DISABLED ONLY. Never text.

NIGHT    base   #141318    16.64:1 for n-ink
         lifted #1E1C24
         ink    #F4F2F8
```

**Why Night is a warm plum-black:** it must read as the same stationery seen in
low light, not as a different material and certainly not as the category's
dark-app default.

---

## 6. Type

```
DISPLAY   Archivo         800/900, tracking -0.038em, line-height 0.94
          Large, tight and confident. Line-height BELOW 1 at the biggest
          size is the premium signal, not a typo. Measured from a reference
          build at 103px / -3.94px / 0.92, then scaled to fit a two-column
          hero rather than copied blind.

BODY      Inter           400/500/600
          Disappears. Excellent at small sizes for a scanning parent.

MONO      JetBrains Mono  400/500, uppercase, tracking +0.08em
          Instrument texture. Section slugs, skill tags, observation-field
          labels, stat keys, dates. Nobody reads it; everybody feels it.

```

**There is no handwriting face.** It was cut in the premium revision: a
handwriting font is the single least premium element a page can carry, and
the job it did (the human note) is now done by amber and by the copy itself.

```
SCALE   display   clamp(2.4rem, 6vw, 4.6rem)
                  clamp(1.6rem, 3vw, 2.4rem)
                  1.25rem
        body      1rem  (long-form 1.0625rem)
        mono      0.75rem
```

Three display sizes, one body, one mono. That is the whole system. Restraint in
the type scale reads as confidence.

---

## 7. NEVER / ALWAYS

Written as prohibitions, because "use warm colours" is unenforceable and
"never use a colour without a stated meaning" can be checked in review.

```
NEVER
  · the jigsaw puzzle piece, in any form, at any size, ever.
    It is the autism-awareness symbol, widely rejected by autistic people
    because it depicts the child as an incomplete thing to be solved. Our
    entire claim is that the child is not the problem. This is the one
    prohibition with no exception and no negotiation.
  · a full-bleed gradient as a ground                  (category cliché)
  · rainbow or multi-hue accents with no assigned meaning
  · emoji as an icon system                            (unstyleable, no brand)
  · a mascot, or stock photography of a child          (it is someone else's
                                                        child, which is the
                                                        opposite of the point)
  · gamification furniture: streaks, badges, confetti, progress rings
  · glow, neon, or "AI sparkle" of any kind
  · a fill value used as text                          (all fills fail WCAG)
  · more than three amber elements on one screen
  · a fourth accent hue
  · a handwriting face, anywhere
  · hand-drawn irregularity: wobbly rings, uneven radii, rotation, tape
  · spring or overshoot easing                         (reads playful)
  · a tactile press effect on a button
  · ink.ghost as text                                  (1.92:1)
  · a colour without a stated stage or state
  · linear or ease-in-out easing                       (reads as unconsidered)
  · em-dashes in body copy
  · the words "disorder", "deficit", "diagnose", or "fix" applied to a child
  · labelling a child as a type                        ("she is a visual
                                                        learner")
  · a claim the page cannot demonstrate on itself
  · implying a planned feature already ships

ALWAYS
  · ink on warm paper as the ground; warm near-black as its night
  · exactly one dark section per page, at the honest moment, and here the
    honest moment is the disclaimer that this is not a diagnosis
  · every hue used at its correct value: fill / text / night
  · describe the behaviour, not the child
  · state the limits: sample size, what is planned, what we cannot do
  · mono microtype for labels, so the page reads as measured
  · real numbers only (60+ surveys, 45 activities, 5 models, ₹1,200, ₹499)
  · sources cited and linked wherever research is claimed
  · a fallback rendered before any supplied asset arrives
```

---

## 8. Applications beyond the website

An identity tested only on a landing page breaks the first time it meets an
invoice. These are specified now.

### Favicon / app icon
The mark alone. Ink square, two rules, one stroke. No wordmark, because it is
illegible below 32px and the mark already carries the idea.

### The printed kit (the actual product)
- Cover: Paper stock, mark blind-embossed or single-colour ink. No hue.
- Card backs: `ground.sunken` with the three-rule motif at 8% as a substrate.
- Each of the five learning models takes one system hue as its legend colour,
  printed as a 4mm edge band so a parent can sort cards by feel and sight.
- The observation checklist is ruled in `ground.edge` with mono field labels.
  It is the hero object; it must be the best-made thing in the box.

### System email (order confirmation)
- Ground `#FBF9F4`, ink body, mark at 28px top-left, single Ink Blue rule
  under the header, in emerald.
- Subject line voice: "Your UNHEARD kit is on its way", not "Order
  confirmed!"
- Footer states the not-a-diagnosis line in one sentence. Every email carries
  it, because every email is a chance to be misread as clinical.

### Invoice
- Pure ink on paper. No system hue at all: an invoice is not a stage of the
  product.
- Mono for all numbers, amounts, dates, and the GST line. Archivo only for the
  word `INVOICE` and the total.
- The mark reversed (ink stroke on paper square) at the top.

### Error state (500 / offline)
- Ground base, mark centred, one line of Archivo: "We are not hearing the
  server."
- Never an apologetic mascot, never a broken-robot illustration.

### Empty state (no observations recorded yet)
- The empty field, with one amber prompt: "Start with what you noticed today."
- The rules stay visible. An empty notebook is not an error; it is an
  invitation, and the material already says so.

### Loading
- A single stroke drawing itself along a ruled line, looping on `sine.inOut`.
  It is the mark being made. No spinner.

---

## 9. Exit test

Hand this document to someone who has not seen the website and ask them to
design a screen not designed here: a refund receipt, a password reset, a
workshop ticket.

If what comes back is ink on warm paper, with mono labels, one system hue
chosen by stage, no puzzle, and a sentence that admits a limit, the identity is
real.
