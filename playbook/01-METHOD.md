# The Method

How this site got built, written so another agent can repeat it. Everything
here comes from one real build (MyMailGram), including the parts that went
wrong — those are the most transferable.

---

## 0. The single rule that governs everything

**Find the argument the product needs to make, then make the design make it
before a word is read.**

Not "make it look good." Not "follow the brand." Find the one thing a sceptical
visitor doubts, and build the visual world so the doubt is answered by the
medium itself.

Worked example from this build:

> MyMailGram scrapes Instagram and sends cold email. Every competitor in that
> category looks like a **dark cyber scraper dashboard**. The product's own FAQ
> insists it is "not mass blasting or automated DMs."
>
> A dark dashboard aesthetic would therefore have *argued against the product*
> on sight. So the world became **warm paper, editorial craft, correspondence**
> — cream stationery, a handwriting face, envelope logic. The design says
> "personal letter" before the copy gets a chance to.

That one decision produced every later decision: the palette, the type, why the
app is on paper instead of dark, why there is exactly one dark section.

**Test for it:** can you state in one sentence what a visitor would wrongly
assume, and how the design pre-empts it? If not, you are decorating.

---

## 1. Sequence — assets before layout, layout before copy

Do it in this order. It is not arbitrary.

```
1. STORY      what must a visitor believe? what do they doubt?
2. WORLD      what material world argues that? (paper / lab / press / terminal)
3. ASSETS     what has to exist on screen? request or build them FIRST
4. TOOLS      pick libraries to fit the assets, not the reverse
5. BUILD      structure, then motion, then copy
6. VERIFY     measure, do not eyeball
```

**Why assets first:** if you lay out first, you leave rectangular holes and then
commission art to fit holes. The art becomes filler. Decide the object first and
the layout forms around a real thing, so the page has a subject.

**Why copy last:** text written first gets protected. Text written into a
finished composition gets cut to fit. Hero copy that survives layout is always
tighter than hero copy that preceded it.

---

## 2. Deciding the visual world

Rank at least four candidate metaphors and write down why three lose. Never take
the first idea; the first idea is the category cliché.

Real example — choosing the hero object:

| Candidate | Verdict |
|---|---|
| Globe / network mesh | **Rejected** — the scraper-dashboard cliché, argues *against* the product |
| Envelope | **Rejected** — literal. Says "email", not "personal" |
| Funnel | **Rejected** — implies volume, the exact thing the FAQ denies |
| **Thread / knot** | **Chosen** — one continuous line weaving through itself and emerging single. Correspondence *is* a thread. It is also literally one line: handwritten, not industrial |

The chosen object then justified itself materially: rendered in liquid chrome so
it reflects both a warm sun and a cool sky — which is exactly the palette's
warm/cool dialogue. **The object and the palette argue the same thing.**

---

## 3. Colour that carries meaning

Do not pick a palette. Build a **mapping**: assign hues to stages of the real
product process, then let the page change temperature as the process advances.

```
OCHRE   #D08A2C   the Instagram side — discovery, social, human    (warm)
MARINE  #2E4BC9   the product side — action, trust                 (cool)
SAGE    #3E7355   verified / deliverable / confirmed
PLUM    #6D4BC4   AI-composed personalisation
LIME    #C8F751   live right now — used sparingly
```

Because warm = *their* side and cool = *your* side, the four pipeline steps
visibly warm-to-cool from left to right, and the live demo's log lines change
colour as data moves through. **The colour is doing work, not decoration.**

This also answers every future colour question with "which stage is this?"
rather than "what looks nice here?"

---

## 4. Reference images — how to actually use them

Given references, most agents copy the surface. Do not. Extract **principles**,
then apply them to your own world.

The strongest reference in this build was a hero shot with: light sky-blue
ground, blueprint grid, monospace microtype, a chrome object, heavy black
grotesk headline.

| Reference element | Extracted as principle | Applied as |
|---|---|---|
| Blueprint grid | *Structure made visible, faint* | `.grid-field` — 68px grid at ~4.5% opacity, radially masked |
| Mono microtype | *Small technical type as texture* | JetBrains Mono for slugs, labels, stat keys |
| Chrome object | *One hero object, physically rendered* | The torus-knot thread — **different object, same role** |
| Heavy grotesk | *Display face does the shouting* | Archivo 800/900, tracking −0.038em |
| Light sky-blue ground | **REJECTED** — a cool ground fights the correspondence story | Warm cream `#F7F4ED` instead |

**The rule: a reference gives you grammar, not vocabulary.** Take the structural
moves — how type is scaled, how much air, where the eye lands, how technical
detail is used as texture. Leave the palette and subject behind unless they
happen to serve your story.

### When the reference conflicts with the brand

This happened directly: the reference ground was cool blue, the story demanded
warm paper. Procedure:

1. **Name what the reference does well.** Here: the calm authority of a pale,
   even ground with faint structure over it.
2. **Ask what actually produced that effect.** It was *evenness and low
   contrast*, not *blueness*.
3. **Reproduce the effect with brand-correct material.** Warm cream ground, same
   evenness, same faint grid. The authority survives; the hue changes.

Nine times in ten the thing you admire in a reference is a *structural* property
separable from its colour. Separate it.

---

## 5. Asking for assets

Do not ask "do you want images?" Decide what must exist, then request it with
production specs so the result is usable on arrival.

**Template that worked:**

```
Filename to save as: feature-icons.png
Size: 1536 x 1024 px (2x2 grid, each quadrant 768 x 512)
Background: transparent PNG

<one paragraph: material, lighting, palette, mood, and what must NOT appear —
"no text, no letters, no numbers, no UI, no logos">

Top-left quadrant:     <subject, colours>
Top-right quadrant:    <subject, colours>
Bottom-left quadrant:  <subject, colours>
Bottom-right quadrant: <subject, colours>

All four at consistent scale, camera angle and lighting direction.
```

Rules learned the hard way:

- **State the filename and exact pixel size.** You will write CSS against it.
- **Say what must not appear.** Generators add text and logos unprompted.
- **Tie colours to your tokens** so the art lands inside the system.
- **Ask for sheets, not singles**, when you need a set. Consistency across four
  separate generations is far worse than four quadrants of one image.
- **Build the procedural fallback first.** Every asset here has a CSS/canvas
  stand-in plus a feature-detection class (`.has-feat-icons`, `.has-grain`).
  The page is never broken while waiting for art.

**Verify supplied art before wiring it** — see `03-VERIFICATION.md`. This is
where a real mistake happened.

---

## 6. Tokens are the whole architecture

One file (`tokens.css`) defines every colour, size, easing and font. Nothing
else hard-codes a value. That buys three things which are otherwise expensive:

1. **Dark mode is a token remap, not a rewrite.** The entire app dark theme is
   one `.dark { }` block re-pointing the *same* variable names. Only four
   surfaces needed overrides, and every one of them was a hard-coded literal.
2. **A context class flips a whole subtree.** `.on-slate` re-points tokens so
   any component dropped into the dark section adapts with no variant classes.
3. **Global changes are one line.** Making every button hover lime was a single
   `.btn:hover` rule, not thirty edits.

**Corollary:** when you catch yourself writing a hex value outside
`tokens.css`, stop. Either it belongs in tokens, or you are creating drift.

---

## 7. Motion vocabulary

Motion is a language. Pick a small one and never deviate.

```
ease         cubic-bezier(0.16, 1, 0.3, 1)   the house curve
expo.out     entrances — fast, then settling
expo.in      exits
sine.inOut   continuous ambient loops
back.out     small playful arrivals (badges, toggles)
elastic.out  release from a magnetic pull
NEVER        linear, ease-in-out — both read as "default", i.e. unconsidered
```

Rules that made a visible difference:

- **Asset moves before text.** The hero object animates in, *then* the headline.
  The visual event earns the reading.
- **Sequence, do not stack.** The highlighter stroke draws only *after* its line
  lands. Overlapping them looked like a rendering glitch.
- **Numbers are never static text.** Every figure counts up — but this contains
  a real trap; see `03-VERIFICATION.md`.
- **Honour `prefers-reduced-motion`**, applying the *final state* immediately
  rather than skipping the element.

---

## 8. Copy

- **Say the unflattering thing where it is true.** The pricing calculator tells
  you when a cheaper competitor wins at your volume, and when a different tier
  of ours would cost less. Credibility outlives a flattering number, and the
  page's whole claim is that it does not oversell.
- **Mark what does not exist.** Roadmap features are visually quieter, dashed,
  and tagged "Planned". Never let a feature list imply something shippable.
- **Show, do not assert.** Instead of claiming "personalised", the live demo
  colour-codes each borrowed phrase back to the field it came from.
- **No em-dashes in body copy.** They are a recognisable machine tell.

---

## 9. Research, when no references are given

1. **Name the category cliché first.** Search the product's own category and
   write down what everything looks like. That is your *negative brief* — the
   thing you are deliberately not doing.
2. **Search the adjacent physical craft, not the software category.** For an
   email tool: letterpress, stationery, editorial print, archival forms.
   Searching "SaaS landing page" returns the cliché you just decided to avoid.
3. **Collect for structure, not beauty.** For each image ask: how many type
   sizes? how much empty space? where does the eye land first? what is the one
   object? Write those down and discard the images.
4. **Find one anchor artefact** — a single object, texture or printing process
   the whole world hangs off. Here it was warm stationery.
5. **Sanity-check against the story.** If the world you assembled does not argue
   the product's central claim, you have a mood board, not a direction. Restart.
