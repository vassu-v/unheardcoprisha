# 02 — Brand system

Values live in `../css/style.css` `:root`. This file explains how to use them.

## Colour

Colour comes from two families with separate jobs.

### 1. Ink and grounds (structure)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#3B3E62` | Headlines, strong text, footer ground. The deck's slate. |
| `--ink-soft` | `#565A7C` | Body and lead copy |
| `--ink-line` | `rgba(59,62,98,.14)` | Hairlines, dashed rules, card borders |
| `--paper` | `#FFFCF7` | Default page ground (warm white) |
| `--paper-2` | `#FBF2EA` | Final CTA band, warm panels |
| `--mist` | `#E4ECF1` | Alternate sections (deck slide-4 sky) |
| `--lilac` | `#F1EBFD` | Learners section, featured card |

### 2. Brand: Digital Lavender (trust and action)

| Token | Hex | Use |
|---|---|---|
| `--grape` | `#42326E` | Primary buttons, kit night section, ticker |
| `--grape-2` | `#6E5B9A` | Focus ring, headline shadow on dark |
| `--lav` | `#B29CE4` | Featured-card offset shadow, decor |
| `--lav-mid` | `#D7C8ED` | Stage 04 fill, text on grape |
| `--lav-soft` | `#E0D4FC` | Body text on grape |

### 3. Deck splashes (personality, **fills only**)

| Token | Hex | Use |
|---|---|---|
| `--blush` | `#F3C6B8` | Headline offset shadow, brush splashes, stage 01, workshop card |
| `--butter` | `#F8DB86` | Splash, stage 02, tape, highlighter mark |
| `--sage` | `#C3DEBB` | Splash, stage 03, school card, "UNHEARD" compare column |
| `--clay` | `#D9978A` | Blob splash, disclaimer border |
| `--teal` | `#9CBDC3` | Fifth kit-tool chip, learner avatar ring |
| `--sun` | `#F6C324` | Sparkles, price badge, VS sticker |
| `--zest` | `#E8573A` | Scribble, hand-drawn underline, tag diamond, strike-through |

### Rule: a fill is never text

The splash colours fail as text. White on blush measures 1.55:1, sun on paper
1.61:1, and zest on paper 3.50:1 (large text only). Where an accent has to carry
text, use its text twin:

| Fill | Text twin | Measured |
|---|---|---|
| `--zest` | `--zest-text` `#B53A1F` | 5.29:1 on `--paper-2` |
| `--sage` | `--sage-text` `#2F6A2A` | 4.50:1 *on* sage. This is AA exactly, so keep it to small labels and don't darken the sage. |

### Measured contrast (WCAG)

| Pair | Ratio |
|---|---|
| ink on paper | 10.00 |
| ink-soft on paper | 6.52 |
| ink-soft on mist | 5.58 |
| ink on blush / butter / sage / lav-mid | 6.62 / 7.54 / 7.06 / 6.52 |
| white on grape | 10.98 |
| lav-soft on grape | 7.84 |
| lav-mid on grape | 6.99 |

All text on pastel cards is `--ink`. Never put white on a pastel. That is the
bug that made the stage numbers 1.4:1 in the first draft.

## Typography

| Role | Font | Notes |
|---|---|---|
| Display | **Lilita One** | Always UPPERCASE. `line-height: .95`. Blush offset shadow at `.055em`. |
| Body | **Nunito Sans** 400–800 | Rounded, friendly, very legible. Bold (700–800) for emphasis in UI. |
| Micro-tags | **Space Mono** 700 | `.75rem`, uppercase, `letter-spacing: .14em`, with a zest diamond. Section eyebrows, labels, captions. |

Scale tokens: `--t-hero` (to 6.3rem), `--t-d1` (to 4.6rem), `--t-d2`,
`--t-lead`, `--t-body` (17px), `--t-small`, `--t-mono`.

**The signature:** `.display` = Lilita caps in `--ink` with
`text-shadow: .055em .055em 0 var(--blush)`. On dark grounds it becomes
`.display--onDark` (white with a `--grape-2` shadow). This is the deck's title
treatment and the single most recognisable brand element.

## Motifs

| Motif | Where it comes from | How it's built | Rules |
|---|---|---|---|
| **Dry-brush splashes** | Deck slide edges | Seeded SVG paths in `shapes.js` (`tall`, `tall2`, `splat`, `blob`, `blob2`), injected by `build.js` | Bleed off section edges, sit behind content (`z-index:0`), and sections clip them (`overflow-x: clip`). At most two per section. |
| **Sparkles** | Deck title and thank-you slides | `#sparkle` symbol, `--sun` | Usually in clusters of one big and one small. Decoration only. |
| **Scribble** | Deck's red squiggle | `#scribble` symbol, stroke `--zest` or `--blush` | One per section at most. Hidden on mobile where it could cover text. |
| **Hand-drawn underline** | Deck squiggle | `.squiggle-under`, draws itself in once | Use it once, on the hero's key word. |
| **Kid stickers** | Deck illustrations | `assets/kids/*` in white circular frames, pastel rings | With speech bubbles saying first-person learning needs ("I learn by doing!"). Never label a child. |
| **Tape and tilted photo** | Scrapbook / notebook | `.tape`, `.photo-card` at 2.5°, `.founder__card` at -2° | Tilts stay small, between 1° and 3°. |
| **Rotating seal** | Hobro.digital | SVG `textPath`, "OBSERVE • UNDERSTAND • SUPPORT • GROW", 28s spin | One on the page, on the founder card. |
| **Asterisk** | Deck's green asterisk | `#asterisk`, `--sage-deep` stroke | Occasional accent. |

## Components

- **Buttons.** Pill shape, minimum height 52px. The primary is grape, the ghost
  has an ink outline, the light variant is white (on grape). On hover the button
  lifts 2px and its arrow slides 4px. There is no press-down "tactile" effect.
- **Stage and bento cards.** 32px radius, pastel fill, ink text. Number in
  Lilita with a white offset. Hover lifts 6px with a slight tilt.
- **Way and pricing cards.** 2px ink border, colour-blocked (blush, lilac and
  sage). The featured card gets a solid lavender offset shadow, Klarna-style.
  The status pill says honestly what's ready: "Launching soon", "Start here",
  "Pilot".
- **Label cards (problem section).** The heard word in Lilita is struck through
  in zest. Below it, "↓ What was there" in sage-text mono, then the reframe in
  bold.
- **Compare.** Two columns, white versus sage, with a yellow "VS" sticker on the
  seam.
- **Price badge.** Sun circle with a dashed inner ring, rotated 10°.
- **Disclaimer.** Warm panel with a dashed clay border. It is always present
  wherever the method is described.

## Layout

- Max width 1200px, gutter `clamp(16px, 4vw, 40px)` (16px minimum on phones).
- Section padding `clamp(72px, 10vw, 128px)`.
- Section rhythm alternates grounds: paper → mist → paper → lilac → **grape** →
  paper → mist → paper → paper-2 → ink footer. The grape kit section is the one
  dark peak.
- Section header pattern: mono eyebrow, then Lilita headline on the left, lead
  paragraph aligned to the bottom-right.

## Motion

- One easing curve: `--ease: cubic-bezier(.2,.7,.2,1)`, an ease-out with **no
  overshoot**. The references suggested spring curves, which were deliberately
  rejected (see the process log).
- Scroll reveal: fade plus 22px rise, staggered 80ms by sibling index. The delay
  is cleared after reveal so hovers stay snappy.
- Ambient motion: floating stickers (6–8.5s), ticker (38s), seal (28s), and the
  underline draw-in (once).
- Card tilts and hovers use the individual `translate` and `rotate` properties,
  so they don't fight the reveal `transform`.
- `prefers-reduced-motion` switches off all animation and shows content
  immediately.

## Voice

- **Speak to the parent as an equal.** "You play, you watch, you write down
  what you notice."
- **Short, plain sentences.** Headlines are two short lines: "One box. Five
  tools." "Four stages. All at home."
- **Reframe, never diagnose.** Say "Different isn't difficult." Use "learns by
  moving", never "hyperactive".
- **Children speak in first person**, about needs, not deficits: "Can you show
  me?"
- **Honest about status and scope.** "This is not a diagnosis." "Orders are
  taken by email or phone for now."
- **Indian English and context:** ₹, "colour", *Taare Zameen Par*, and phone
  numbers in Indian grouping (99586 11717).

## DO

- Use `--ink` for every word on a pastel.
- Keep decoration behind content and clipped by its section.
- Give every label a reframe.
- Use the real kit photos and the founder's real words.
- Measure contrast after any colour change.

## NEVER

- **The jigsaw puzzle piece**, in any form.
- A splash colour (`blush`, `butter`, `sage`, `sun`, `zest` fill, `lav`) as a
  text colour.
- White text on a pastel.
- Spring or overshoot easing, or a press-down button.
- Clinical language ("disorder", "symptoms", "screening") or implying a
  diagnosis.
- Invented numbers, testimonials or "available now" on unlaunched offers.
- A fake checkout. Order buttons go to email or phone until a real one exists.
- Decoration over body text, or more than two splashes per section.
- `overflow` on `body` or on an ancestor of the sticky nav. Clip on sections
  instead.
