# Verification — measure, never eyeball

Every bug in this document was found by measuring, and several were *invisible*
in a screenshot. This is the highest-leverage file in the playbook: the design
method makes something good, this is what stops it silently breaking.

---

## The core principle

**A screenshot proves a page rendered. It does not prove the page is correct.**

Screenshots are captured at an arbitrary moment. Animations are mid-flight,
colours are mid-transition, scroll-triggered content has not fired. Reading a
value out of the DOM is deterministic; reading it out of a PNG is not.

So: screenshot to *judge design*, query the DOM to *verify behaviour*.

---

## The harness

Drive a real browser over the Chrome DevTools Protocol. No framework needed —
raw WebSocket to `chrome --remote-debugging-port=9222` is enough.

**Launch flags that matter:**

```
--headless=new
--remote-debugging-port=9222
--disable-backgrounding-occluded-windows
--disable-renderer-backgrounding
--disable-background-timer-throttling
```

Plus `Emulation.setFocusEmulationEnabled {enabled:true}` over the protocol.

**Why those four flags exist:** without them headless Chrome reports the page as
hidden, so `requestAnimationFrame` never fires, so GSAP's ticker never ticks, so
**every animated element stays at its start state — invisible**. That cost a
long debugging session chasing a site bug that was really a harness bug.

Symptom to recognise: `gsap.ticker.frame === 0` and `document.visibilityState`
is `"hidden"`.

Defensive counterpart added to the site itself: if the ticker has not advanced
within 1200ms, jump non-ScrollTrigger tweens to `progress(1)`. A real user on a
throttled tab should never see a permanently blank hero.

---

## Bug catalogue — real failures, each with its lesson

### 1. The false-positive asset guard (worst mistake in the build)

I wrote a "is this PNG truncated?" check that sampled alpha coverage in the
lower half of the image. It reported the hero render as damaged, so the site
silently fell back to WebGL, and I then *replaced the user's good art*.

The file was perfectly intact. **A transparent PNG legitimately has sparse alpha
wherever the subject does not reach.** Alpha coverage cannot distinguish art
from damage.

- **Lesson:** before writing a validator, ask what a *legitimate* input looks
  like. If a valid file can fail your check, the check is wrong.
- **Lesson:** when a guard suppresses user-supplied content, that must be loud,
  never silent.
- **Fix:** deleted the guard entirely rather than tuning it. The premise was
  unsound, so no threshold would have saved it.

### 2. ScrollTrigger `onEnter` never fires for content already on screen

`onEnter` fires when an element crosses the trigger line **from below**. Anything
already visible at load never crosses it.

Invisible on a marketing page (most content starts below the fold). Obvious on a
dashboard (most content starts *above* it). Permanent for a sticky sidebar,
which never scrolls at all — its usage counter sat at `0` forever.

```js
// Fire immediately for anything already in view; let ScrollTrigger handle
// the rest as they come up.
ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: run });
if (el.getBoundingClientRect().top < window.innerHeight * 0.95) run();
```

- **Lesson:** scroll-triggered animation has a blind spot at the top of the
  page. Always pair the trigger with an in-viewport check.

### 3. Counters landing short

`expo.out` asymptotically *approaches* its target. The final frame can land
short: invisible at `42`, but it rendered `29,967` instead of `30,000`.

Fix: always write the exact target in `onComplete`, never trust the last frame.

- **Lesson:** easing curves are approximations. Any tween whose endpoint is
  semantically meaningful (a price, a quota) needs an explicit landing.

### 4. Absolutely positioned pseudo-element resolves against the padding box

A 3px accent rail on a 16px-radius card overhung both top corners. Rounding the
rail's own corners did not help, because the problem was its *position*, not its
shape: `top/left/right: 0` on an absolutely positioned pseudo-element resolves
against the **padding box**, inboard of the border but spanning full width.

Fix: a child wrapper with `inset: 0`, `border-radius: inherit`,
`overflow: hidden`, so the card clips its own rail. It could not simply go on
the card, because the card must stay unclipped for a badge to hang above it.

- **Lesson:** when a decoration misaligns on a rounded box, check whether you
  are fighting geometry rather than shape.

### 5. Inline element ignoring vertical padding

A `<span>` badge stretched to full card width. Inline elements ignore vertical
padding and take whatever box absolute positioning gives them.

Fix: `display: inline-flex; width: max-content`. Measured result: 98px on a
416px card, instead of spanning the edge.

### 6. Source order beating specificity

A house `.btn:hover` rule was silently overridden by `.nav.is-dark .btn:hover`
declared later in the file. Equal-specificity rules resolve by source order.

- **Lesson:** state the general rule *after* the variants it should win over,
  and never rely on specificity alone when both are reachable.

### 7. Dead CSS that looks live

A `.dark .topbar` rule set a blue-cast navy. It never applied — a later rule set
the warm ground. Harmless in render, actively misleading to the next editor.

- **Lesson:** verify the *computed* value, not the rule you wrote. If a
  declaration never wins, delete it.

### 8. Relative asset paths under clean URLs

`href="css/app.css"` works at `/pricing.html` and breaks the moment a nested
route exists. Made all asset paths root-relative before it could bite.

### 9. Contrast failures that look fine

`--ink-faint` on small uppercase mono measured **2.67:1** — well under 4.5:1 —
and looked perfectly legible at a glance. Small uppercase mono is the worst case
for legibility, so it needs *more* contrast than it appears to.

- **Lesson:** never judge contrast by eye. Compute it.

---

## What to measure

### Contrast (compute, do not judge)

```js
function lum(c){
  const m = c.match(/\d+/g).map(Number);
  const f = m.slice(0,3).map(v => { v/=255;
    return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); });
  return 0.2126*f[0] + 0.7152*f[1] + 0.0722*f[2];
}
function ratio(a,b){
  const l1 = lum(a), l2 = lum(b);
  return (Math.max(l1,l2)+0.05) / (Math.min(l1,l2)+0.05);
}
```

Pull `getComputedStyle` for the text and its actual background, in **both**
themes. Target ≥ 4.5:1 for body text.

### Hover states — force the pseudo-class, do not move the mouse

Moving a synthetic pointer is unreliable: magnetic buttons drift away under the
cursor, and colour transitions are mid-flight when you sample. This produced
false failures reporting 16/28 buttons broken when all 28 were fine.

Deterministic instead:

```js
await cmd('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: ['hover'] });
const { computedStyle } = await cmd('CSS.getComputedStyleForNode', { nodeId });
```

Result: 30/30 buttons verified, no pointer involved.

### Geometry — assert relationships, not pixel values

Better than "is it 98px?" is "is it inside its parent?"

```js
leftOverhang:  parentRect.left  - childRect.left    // must be <= 0
rightOverhang: childRect.right  - parentRect.right  // must be <= 0
```

For table alignment, compare centres:

```js
Math.abs(headerCentre - valueCentre)   // target: 0.0
```

### Links — walk every one

Collect every `href`, fetch each target, and confirm in-page anchors exist:

```js
if (!body.includes('id="' + hash + '"')) broken.push(...)
```

Caught several dead anchors that no screenshot would ever show.

### Errors and overflow — cheapest checks available

```js
Runtime.exceptionThrown                                        // JS errors
document.documentElement.scrollWidth - clientWidth             // must be 0
```

Run both on every page, every time. They cost nothing and catch a lot.

### Multi-step flows — walk the whole journey

Do not verify screens in isolation. Drive the actual path:

```
signup → /onboarding → 4 steps → /app?tour=1 → tour opens → advances → closes
login  → /app                                → tour does NOT open
```

---

## Screenshot discipline

- **`captureScreenshot` clip coordinates are page-absolute**, not viewport
  relative. Add `scrollX`/`scrollY` or the crop lands on empty background.
- **Re-measure after scrolling and after hovering.** Layout shifts between the
  measurement and the capture, and a stale rect crops the wrong region.
- **Suppress overlays before judging colour.** A tour spotlight dims the page;
  a screenshot taken through it made a cream sidebar look near-black and
  triggered a bug hunt for a bug that did not exist.
- **Expect mid-animation values.** If a counter reads `24,975`, it is probably
  animating toward `25,000`. Confirm in the DOM before "fixing" it.

---

## Standing checklist

Run before every commit:

- [ ] 0 JS errors on every page
- [ ] 0 horizontal overflow on every page
- [ ] 0 broken links, including in-page anchors
- [ ] Contrast ≥ 4.5:1 for text, in every theme
- [ ] Interactive states verified via forced pseudo-class
- [ ] Multi-step flows walked end to end
- [ ] Mobile checked at ~430px, not just desktop
- [ ] Any numeric output compared against hand arithmetic
