# Creating a brand identity from nothing

**Use this when the brand has no visual identity** — no logo system, no palette,
no type spec. This is the common case for early products, and it is what
happened on MyMailGram.

Runs between Phase 2 (material chosen) and Phase 4 (tokens) of
`05-RESEARCH-PROTOCOL.md`. You cannot design an identity before you know the
material, and you cannot build tokens before the identity exists.

Deliverable: a `BRAND.md` the whole company can work from — not just a website.

---

## The order that matters

Most identity work starts with a logo. That is backwards. A logo designed
before the world exists has nothing to be consistent with, so everything after
it becomes an argument.

Correct order:

```
1. VOICE      how it speaks           <- cheapest to change, decides the rest
2. NAME LOGIC what the name means      <- determines what the mark can depict
3. MARK       the logo                 <- now heavily constrained, so easy
4. PALETTE    colour with meaning
5. TYPE       the voice made visible
6. RULES      what it never does       <- the part that keeps it alive
```

Each step constrains the next. By the time you reach the logo, there are only a
few defensible options left — which is exactly the point. **Constraint is what
makes identity work fast.**

---

## Step 1 — Voice

Voice is decided before anything visual because it is the cheapest thing to
change and the most expensive thing to get wrong.

Write three lines:

```
WE SOUND LIKE:     <a specific person or role, not an adjective>
WE NEVER SOUND:    <the nearest wrong neighbour>
BECAUSE:           <ties back to THE DOUBT from Phase 0>
```

Adjectives ("friendly, professional, bold") are useless — every brand claims
them. A **person** is testable: you can ask "would they say this?"

MyMailGram:

```
WE SOUND LIKE:   a careful studio owner writing to someone whose work they
                 actually admire
WE NEVER SOUND:  a growth-hacking tool bragging about volume
BECAUSE:         the doubt is "this is spam software" — so the voice itself
                 has to be the opposite of a mass mailer
```

**The test that makes this real:** the voice must be able to say something
against its own commercial interest. MyMailGram's pricing calculator tells you
when a competitor is cheaper. A voice that can only sell is a marketing tone,
not a brand voice.

---

## Step 2 — Name logic

Before drawing anything, decide what the name *means*, because the mark can
only depict what the name supports.

```
NAME:            MyMailGram
LITERAL PARTS:   "My" + "Mail" + "Gram"
WHAT IT PROMISES: personal ("my") + written correspondence ("mail") +
                  Instagram, but also *telegram* — a short, deliberate,
                  personally-addressed message
THE MARK MAY DEPICT: correspondence, personal address, a single message
THE MARK MUST NOT:   depict volume, automation, network graphs, robots
```

That last pair is doing the work. It rules out most of what an email tool would
normally use for a logo.

**The useful move here:** find the *second* reading of the name. "Gram" reads as
Instagram, which is the obvious one. But it also reads as **telegram** — brief,
deliberate, personally addressed. The second reading is almost always the more
distinctive one, and it is where the identity lives.

---

## Step 3 — The mark

Now constrained enough to be quick.

### Rules for a mark that survives

1. **Works at 16px.** If it fails as a favicon, it fails. Design it at 16px
   first and scale up, never the reverse.
2. **Works in one colour.** It will be embossed, faxed, watermarked, printed on
   an invoice.
3. **Depicts the claim, not the category.** An envelope says "email". An
   envelope *with one thing addressed to one person* says "personal email".
4. **One idea only.** Two ideas in a mark means neither reads.
5. **Geometric enough to reconstruct.** If you cannot rebuild it from a
   description, it will drift.

### MyMailGram's mark, and its reasoning

```svg
<svg viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#16161A"/>
  <path d="M8 21V11l8 6 8-6v10" fill="none" stroke="#F7F4ED"
        stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="24" cy="10" r="3.4" fill="#D08A2C"/>
</svg>
```

| Element | Why |
|---|---|
| Rounded ink square | A stamp. Correspondence, not an app tile. `rx="8"` on 32 — soft, not a pill |
| Open envelope stroke, not filled | An envelope being *written*, not a sealed mass mailing. Drawn as one continuous stroke — one line, one message |
| Single ochre dot, upper right | The one recipient. It is deliberately *one*, and it is the only warm element |
| Nothing else | No swoosh, no gradient, no network lines |

The dot is the whole identity in one element: everything else is monochrome
correspondence, and there is exactly **one** warm point of contact.

### Test it before committing

```bash
# Does it survive as a favicon?
# Does it survive in pure black on white?
# Can you describe it in one sentence to someone who then draws it correctly?
```

---

## Step 4 — Palette with meaning

Covered in `05-RESEARCH-PROTOCOL.md` Phase 4, but the identity layer adds
**hierarchy**: which colour is the brand, and which are the system.

```
BRAND COLOUR    the one in the logo, on business cards, in the favicon
SYSTEM COLOURS  the process mapping — meaningful, not decorative
ACCENT          one high-energy colour, used rarely
NEUTRALS        the ground and ink ramps
```

MyMailGram:

```
BRAND       Ink    #16161A   the stamp
            Ochre  #D08A2C   the recipient dot — the brand's warm signature
GROUND      Paper  #F7F4ED   warm stationery, the material
SYSTEM      Ochre  #D08A2C   discovery / the Instagram side (warm = them)
            Marine #2E4BC9   the product side (cool = you)
            Sage   #3E7355   verified / deliverable
            Plum   #6D4BC4   AI-composed
ACCENT      Lime   #C8F751   live right now. Also the selection colour and
                             every button hover — the one loud thing
```

**Why ochre carries double duty:** it is both the brand signature *and* the
first stage of the process. That is deliberate — the brand mark points at the
same thing the product starts with: finding one person worth writing to.

**Rule:** if you cannot say what a colour *means*, delete it. A palette of four
meaningful hues beats a palette of nine decorative ones.

---

## Step 5 — Type as voice made visible

Three roles, and a fourth used sparingly.

```
DISPLAY   carries the voice. Where the personality lives
BODY      disappears. If people notice it, it is wrong
MONO      technical texture. Signals precision without saying anything
ACCENT    used two or three times on an entire site, for one specific meaning
```

MyMailGram:

| Role | Face | Why |
|---|---|---|
| Display | **Archivo** 800/900, tracking −0.038em | Grotesk with real weight. Editorial, not techy. Reads as a printed headline |
| Body | **Inter** 400/500/600 | Invisible, excellent at small sizes |
| Mono | **JetBrains Mono** | Precision as texture, in labels and slugs |
| Accent | **Caveat** | The human hand. Used **twice**: the pricing aside and the onboarding annotations |

**The Caveat rule is the important one.** A handwriting face used everywhere
becomes decoration; used twice, it becomes a signature. The identity document
states the number, because that is what stops it spreading.

---

## Step 6 — The rules that keep it alive

An identity dies through a hundred small permissions. The rules section is the
only part that prevents that, and it should be written as **prohibitions**.

MyMailGram:

```
NEVER
  · dark ground on marketing surfaces      (it argues the product is a scraper)
  · neon or glowing accents                (category cliché)
  · more than one high-energy colour on screen at once
  · Caveat more than twice per page
  · linear or ease-in-out easing           (reads as unconsidered)
  · em-dashes in body copy                 (machine tell)
  · a colour without a stated meaning
  · a claim the product cannot demonstrate on the page

ALWAYS
  · warm paper as the ground, warm near-black as its night
  · exactly one dark section per marketing page, at the honest moment
  · numbers count up rather than sitting static, landing on the exact value
  · the unflattering truth where it is true
  · features that do not exist marked as not existing
```

**Why prohibitions beat permissions:** "use warm colours" is unenforceable.
"Never use a colour without a stated meaning" can be checked in review.

---

## The deliverable

Write `BRAND.md` at the repo root. It governs more than the website — the
product UI, system emails, invoices and decks all answer to it.

```
BRAND.md
  1. The claim and the doubt        (from Phase 0)
  2. Voice: sounds like / never / because
  3. Name logic and what the mark may depict
  4. The mark, as inline SVG, with the reasoning per element
  5. Palette with meanings, hex values, and hierarchy
  6. Type roles, faces, and usage limits
  7. NEVER / ALWAYS rules
  8. Application examples: favicon, invoice, email signature, error state
```

Section 8 matters more than it looks. An identity that has only been tested on
a landing page will break the first time it meets an invoice or a system email.
Draw those before declaring it finished.

---

## Exit test

Hand `BRAND.md` to someone who has not seen the website and ask them to design
**one screen you have not designed** — a billing receipt, a password-reset
email, a 500 error.

If what comes back is recognisably the same brand, the identity is real.

If they have to ask you questions, the answers to those questions are the
sections you still have to write.
