const fs = require('fs');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const MARK = `<svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="var(--ink)"/>
        <path d="M7 14h18M7 20h18" stroke="var(--g-base)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
        <path d="M9.2 20c3.3 0 2.8-10.2 6.5-10.2s3.1 6.9 6.3 6.9" fill="none" stroke="var(--g-base)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

const nav = a => `
<header class="nav" id="nav">
  <div class="shell nav__in">
    <a class="brand" href="/" aria-label="UNHEARD home">${MARK}<span class="brand__name">UNHEARD</span></a>
    <button class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="navLinks">Menu</button>
    <nav class="nav__links" id="navLinks">
      <a href="/kit"${a==='kit'?' aria-current="page"':''}>The Kit</a>
      <a href="/activities"${a==='activities'?' aria-current="page"':''}>Activities</a>
      <a href="/about"${a==='about'?' aria-current="page"':''}>About</a>
      <a class="btn btn--brand" href="/contact">Talk to us</a>
    </nav>
  </div>
</header>
<div class="nav__scrim" id="navScrim" aria-hidden="true"></div>`;

const foot = `
<footer class="foot">
  <div class="shell">
    <div class="foot__grid">
      <div>
        <a class="brand" href="/" style="margin-bottom: var(--s-3);">${MARK}<span class="brand__name">UNHEARD</span></a>
        <p class="foot__note" style="max-width: 30ch;">Listening to children who learn differently.</p>
      </div>
      <div><h4>Explore</h4><ul>
        <li><a href="/kit">The kit</a></li>
        <li><a href="/activities">Activity library</a></li>
        <li><a href="/about">About &amp; research</a></li>
        <li><a href="/contact">Talk to us</a></li>
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="tel:9958611717">9958611717</a></li>
        <li><a href="mailto:unheard.corporation@gmail.com">unheard.corporation@gmail.com</a></li>
        <li><a href="https://instagram.com/unheardco" rel="noopener">@unheardco</a></li>
      </ul></div>
    </div>
    <div class="foot__base">
      <p class="foot__note">&copy; 2025 UNHEARD</p>
      <p class="foot__note">Not a diagnostic tool. Not a substitute for professional advice.</p>
    </div>
  </div>
  <svg class="seal" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <path id="sealPath" d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0" fill="none"/>
    <circle class="seal__ring" cx="100" cy="100" r="92" fill="none"/>
    <text><textPath href="#sealPath" class="seal__text">OBSERVE &#8226; DISCOVER &#8226; SUPPORT &#8226; GROW &#8226; </textPath></text>
  </svg>
  </div>
</footer>`;

const head = (t,d,css) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(d)}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/app.css">
<link rel="stylesheet" href="/css/parts.css">
<link rel="stylesheet" href="/css/material.css">
${(css||[]).map(c=>`<link rel="stylesheet" href="/css/${c}">`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>`;

const tail = extra => foot + `\n<script src="/js/app.js"></script>${extra||''}\n</body>\n</html>`;

/* ══════════ THE KIT ══════════ */
const kit = head('The Kit | UNHEARD','What is inside the Rs 1,200 UNHEARD Learning Discovery Kit: activity cards, sensory tools, an observation checklist and a progress tracker. Ages 4 to 12.',['kit.css'])
+ nav('kit') + `
<main id="main">
  <section class="section--tight ruled">
    <div class="shell">
      <p class="slug">The kit &middot; ages 4&ndash;12 &middot; one-time ₹1,200</p>
      <div class="kit__hero">
        <div>
          <h1 class="d1" style="margin-bottom: var(--s-5);">Nine things in a box, and a way to use them.</h1>
          <p class="lede">Five for your child to do. Four for you to watch with. The kit is not a curriculum and it is not a test. It is a structured excuse to sit down together for twenty minutes and pay attention.</p>
          <div class="hero__actions">
            <a class="btn btn--brand" href="/contact">Order the kit &nbsp;₹1,200</a>
            <a class="btn btn--quiet" href="/activities">Try the free activities first</a>
          </div>
          <p class="hero__proof"><strong>One-time purchase.</strong>&nbsp;No subscription, no account, no app.</p>
        </div>
        <aside class="pricebox">
          <p class="mono" style="margin-bottom:var(--s-3)">What it costs</p>
          <p class="pricebox__n">₹1,200</p>
          <p class="pricebox__sub">The complete Learning Discovery Kit, delivered once.</p>
          <hr class="rule" style="margin-block: var(--s-4)">
          <div class="pricebox__row"><span>Parent webinar &middot; 60 min on Zoom</span><b>₹499</b></div>
          <div class="pricebox__row"><span>Workshops &amp; boot camps</span><b>On request</b></div>
          <p class="pricebox__note">Workshop pricing depends on venue and group size. We will quote it plainly rather than list a number we cannot hold to.</p>
        </aside>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="kitlay">
        <figure class="kitshot">
          <div class="kitshot__frame">
            <img class="kitshot__img" src="/assets/kit-contents.jpeg"
                 width="896" height="1200" loading="lazy" decoding="async"
                 alt="The kit laid out on a wooden table: a fanned deck of activity cards,
                      a printed observation checklist, a progress tracker sheet, a kraft
                      Learning Guide booklet, a turned wooden disc, a wooden cube, a coil
                      of cotton cord and a sheet of simple shape stickers.">
          </div>
          <figcaption class="kitshot__cap">
            <span>Nine items &middot; one box</span>
            <span class="kitshot__note">Representative image. The kit you receive is the
              same nine items; the printed sheets are the final ones.</span>
          </figcaption>
        </figure>

        <div class="kitlay__copy">
          <div class="head">
            <p class="slug slug--lift">For the child</p>
            <h2 class="d2">Five things to do.</h2>
            <p class="lede">Each one is a different way of working, so across a week you see your child meet the same task with a hand, an eye, a word and a feeling.</p>
          </div>
      <div class="grid grid--3">
        <article class="card card--lift reveal">
          <span class="num">01</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Hands-on activity cards</h3>
          <p style="margin:0;color:var(--ink-soft)">Short physical tasks using things already in the house. Pouring, sorting, folding, threading.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="num num--grow">02</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Focus &amp; attention games</h3>
          <p style="margin:0;color:var(--ink-soft)">Timed and untimed, so you can see the difference between cannot and will not.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="num">03</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Puzzle &amp; thinking cards</h3>
          <p style="margin:0;color:var(--ink-soft)">Sorting, comparing and sequencing, with more than one right answer on purpose.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="num num--grow">04</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Emotion &amp; expression cards</h3>
          <p style="margin:0;color:var(--ink-soft)">Naming what a feeling does in the body, which is where words for feelings start.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="num num--lift">05</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Sensory tool pack</h3>
          <p style="margin:0;color:var(--ink-soft)">Textures and weights to hold. Some children think better with something in their hands.</p>
        </article>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--g-sunken)">
    <div class="shell">
      <div class="head">
        <div>
          <p class="slug">For you</p>
          <h2 class="d2">Four things to write on.</h2>
        </div>
        <p class="lede">This is the part that makes it a method rather than a toy box. You are not marking your child. You are keeping a record.</p>
      </div>
      <div class="grid grid--2">
        <article class="card card--lift reveal"><h3 class="d3" style="margin-bottom:var(--s-2)">Observation checklist</h3><p style="margin:0;color:var(--ink-soft)">One ruled sheet per session. What they reached for first, what they avoided, when they stopped, and what they said while doing it.</p></article>
        <article class="card card--lift reveal"><h3 class="d3" style="margin-bottom:var(--s-2)">Progress tracker</h3><p style="margin:0;color:var(--ink-soft)">Eight weeks on a single page, so a change is visible rather than remembered. This is the sheet worth showing a teacher.</p></article>
        <article class="card card--lift reveal"><h3 class="d3" style="margin-bottom:var(--s-2)">Activity guide booklet</h3><p style="margin:0;color:var(--ink-soft)">What each activity is watching for, and what to try next depending on what you saw. Not what it means about your child.</p></article>
        <article class="card card--lift card--liftrail reveal"><h3 class="d3" style="margin-bottom:var(--s-2)">Sticker reward sheet</h3><p style="margin:0;color:var(--ink-soft)">For the child, and only for the child. There is no score, no streak and no level. Finishing is the whole achievement.</p></article>
      </div>
    </div>
  </section>

  <section class="night on-night">
    <div class="shell">
      <div class="head" style="margin-bottom:var(--s-5)">
        <p class="slug">Before you buy</p>
        <h2 class="d2">What ₹1,200 does not buy.</h2>
      </div>
      <div class="prose prose--wide">
        <p>It does not buy a diagnosis, a therapy plan, or a professional opinion. It does not buy an assessment you can submit anywhere. If your child needs a paediatrician, a psychologist or a special educator, this box is not a substitute for one, and we will not pretend otherwise.</p>
        <p>What it buys is a structure for looking, and a record of what you saw. Some parents find that is enough. Others find it is what finally makes the next conversation possible. Either is a reasonable outcome, and we would rather you expected the real one.</p>
        <p style="margin-bottom:0;color:var(--ink-soft)">If you want to see the method before paying for it, the <a href="/activities">45 activities</a> are free and always will be.</p>
      </div>
    </div>
  </section>
</main>` + tail();
fs.writeFileSync('site/kit.html', kit);

/* ══════════ ABOUT ══════════ */
const about = head('About and Research | UNHEARD','How UNHEARD was built: 60+ parent and child surveys, NGO visits, and conversations with doctors and child development professionals.',['kit.css'])
+ nav('about') + `
<main id="main">
  <section class="section--tight ruled">
    <div class="shell">
      <p class="slug">Why trust us</p>
      <h1 class="d1" style="max-width:20ch;margin-bottom:var(--s-5)">We asked first, and built second.</h1>
      <p class="lede">UNHEARD started as a question rather than a product. The kit exists because the same three answers kept coming back, from people who had no reason to agree with each other.</p>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="grid grid--3">
        <article class="card card--lift card--liftrail reveal">
          <span class="mono">Method 01</span>
          <h3 class="d3" style="margin:var(--s-2) 0">60+ surveys</h3>
          <p style="margin:0;color:var(--ink-soft)">In-depth surveys with parents and children about daily difficulty with learning, attention and expression. Sixty-plus responses is a real signal and a small sample. We treat it as the former without claiming the latter.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="mono">Method 02</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Time inside NGOs</h3>
          <p style="margin:0;color:var(--ink-soft)">We visited organisations working directly with children, to watch learning behaviour in a real room rather than read about it. Much of what shaped the observation sheet came from this.</p>
        </article>
        <article class="card card--lift reveal">
          <span class="mono">Method 03</span>
          <h3 class="d3" style="margin:var(--s-2) 0">Conversations with professionals</h3>
          <p style="margin:0;color:var(--ink-soft)">Doctors and child development professionals, on what developmental and learning differences look like day to day, and on where a home kit should stop.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--g-sunken)">
    <div class="shell">
      <div class="head">
        <div>
          <p class="slug">Where the activities come from</p>
          <h2 class="d2">Five models, and none of them ours.</h2>
        </div>
        <p class="lede">The 45 activities in the library are drawn from established early-childhood practice, adapted for Indian homes and everyday objects. Every one links to its source so you can read past us.</p>
      </div>
      <div class="grid grid--3">
        <article class="card card--lift reveal"><span class="mono">Italy</span><h3 class="d3" style="margin:var(--s-2) 0">Montessori</h3><p style="margin:0;color:var(--ink-soft);font-size:.9375rem">The prepared environment, and independent practical-life work.</p></article>
        <article class="card card--lift reveal"><span class="mono">Italy</span><h3 class="d3" style="margin:var(--s-2) 0">Reggio Emilia</h3><p style="margin:0;color:var(--ink-soft);font-size:.9375rem">The child as capable, and learning made visible through materials.</p></article>
        <article class="card card--lift reveal"><span class="mono">Singapore</span><h3 class="d3" style="margin:var(--s-2) 0">Five national frameworks</h3><p style="margin:0;color:var(--ink-soft);font-size:.9375rem">NEL, Concrete-Pictorial-Abstract, number bonds, bar modelling, and caregiver questioning.</p></article>
        <article class="card card--lift reveal"><span class="mono">Finland</span><h3 class="d3" style="margin:var(--s-2) 0">ECEC (Educare)</h3><p style="margin:0;color:var(--ink-soft);font-size:.9375rem">Care, play and learning treated as one thing rather than three.</p></article>
        <article class="card card--lift card--liftrail reveal"><span class="mono">Japan</span><h3 class="d3" style="margin:var(--s-2) 0">Tokkatsu &amp; Shokuiku</h3><p style="margin:0;color:var(--ink-soft);font-size:.9375rem">Daily shared responsibility, and food as a route into attention and routine.</p></article>
        <article class="card" style="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--s-3)">
          <p class="mono" style="margin:0">45 activities</p>
          <a class="btn btn--grow" href="/activities">Open the library</a>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="head"><p class="slug slug--lift">Who is behind it</p><h2 class="d2">The person who did the asking.</h2></div>
      <div class="founder">
        <img class="founder__photo" src="/assets/founder.jpg"
             width="100" height="100" loading="lazy" decoding="async"
             alt="Prisha Dhawan, founder of UNHEARD.">
        <div>
          <h3 class="d3" style="margin-bottom:var(--s-1)">Prisha Dhawan</h3>
          <p class="mono" style="margin-bottom:var(--s-4)">Founder</p>
          <p style="color:var(--ink-body);max-width:52ch">Prisha built UNHEARD after listening to parents, children, educators and experts who kept describing the same gap: children who learn differently are noticed late, if at all, and the people closest to them have no structured way to record what they are already seeing. The kit is her answer to that gap, and deliberately a modest one.</p>
          <p style="margin-bottom:0"><a href="/contact">Get in touch</a></p>
        </div>
      </div>

      <div class="team">
        <article class="teammate">
          <img class="teammate__photo" src="/assets/contributor-shorya.png"
               width="120" height="120" loading="lazy" decoding="async"
               alt="Shoryavardhaan Gupta, technical contributor to UNHEARD.">
          <div>
            <h3 class="d3" style="margin-bottom:var(--s-1)">Shoryavardhaan Gupta</h3>
            <p class="mono" style="margin-bottom:var(--s-3)">Technical Contributor</p>
            <div class="teammate__links">
              <a href="https://linkedin.com/in/shoryavardhaan" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://github.com/vassu-v" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="night on-night">
    <div class="shell">
      <div class="head" style="margin-bottom:var(--s-5)"><p class="slug">Honest scope</p><h2 class="d2">What we have not done yet.</h2></div>
      <div class="prose prose--wide">
        <p>UNHEARD is early. The research base is 60+ surveys, a set of NGO visits, and professional conversations. That is enough to build a first kit and not enough to claim outcomes, so we do not claim any.</p>
        <p>These are planned, and not shipping:</p>
        <div style="display:flex;flex-wrap:wrap;gap:var(--s-2);margin-bottom:var(--s-5)">
          <span class="tag tag--planned">Planned &middot; Subscription resources</span>
          <span class="tag tag--planned">Planned &middot; Educator frameworks</span>
          <span class="tag tag--planned">Planned &middot; Ongoing guidance</span>
          <span class="tag tag--planned">Planned &middot; School partnerships</span>
        </div>
        <p style="margin-bottom:0;color:var(--ink-soft)">If one of those is the thing you actually need, tell us and we will say honestly how far off it is.</p>
      </div>
    </div>
  </section>
</main>` + tail();
fs.writeFileSync('site/about.html', about);

/* ══════════ CONTACT ══════════ */
const contact = head('Talk to us | UNHEARD','Order the UNHEARD kit, ask about workshops, or join the conversation series. Phone 9958611717.',['form.css'])
+ nav('contact') + `
<main id="main">
  <section class="section--tight ruled">
    <div class="shell">
      <p class="slug">Get in touch</p>
      <h1 class="d1" style="max-width:16ch;margin-bottom:var(--s-5)">Tell us what you are seeing.</h1>
      <p class="lede">Whether you are a parent, an educator, a counsellor, or someone who works with children, we would rather have the conversation than the transaction.</p>
    </div>
  </section>

  <section style="padding-bottom:var(--s-8)">
    <div class="shell form__grid">
      <form class="form" id="contactForm" novalidate>
        <div class="field">
          <label for="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autocomplete="name" required>
          <p class="field__err" id="err-f-name" hidden>Please tell us your name.</p>
        </div>
        <div class="field">
          <label for="f-phone">Phone number</label>
          <input id="f-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required>
          <p class="field__err" id="err-f-phone" hidden>We need a number we can reach you on.</p>
        </div>
        <div class="field">
          <label for="f-email">Email address</label>
          <input id="f-email" name="email" type="email" autocomplete="email" required>
          <p class="field__err" id="err-f-email" hidden>That email does not look right.</p>
        </div>
        <div class="field">
          <label for="f-role">I am a</label>
          <select id="f-role" name="role" required>
            <option value="">Select one</option>
            <option>Parent</option>
            <option>Educator / teacher</option>
            <option>School / institution</option>
            <option>Counsellor / therapist</option>
            <option>Other</option>
          </select>
          <p class="field__err" id="err-f-role" hidden>Please pick one.</p>
        </div>
        <div class="field">
          <label for="f-interest">What are you interested in</label>
          <select id="f-interest" name="interest" required>
            <option value="">Choose an option</option>
            <option>Buying the UNHEARD kit (₹1,200)</option>
            <option>Parent webinar (₹499)</option>
            <option>Workshops and boot camps</option>
            <option>School partnership</option>
            <option>Being a guest on the conversation series</option>
            <option>Just exploring</option>
          </select>
          <p class="field__err" id="err-f-interest" hidden>Please pick one.</p>
        </div>
        <div class="field">
          <label for="f-msg">Message <span class="field__opt">optional</span></label>
          <textarea id="f-msg" name="message" rows="4" placeholder="If you want, tell us one thing you have noticed about your child."></textarea>
        </div>
        <button class="btn btn--brand" type="submit">Send message</button>
        <p class="form__ok" id="formOk" hidden role="status">Thank you. We will be in touch soon.</p>
        <p class="form__note">This form is not connected to a backend in this build, so nothing is sent yet. Until it is, please use the phone number or email beside it.</p>
      </form>

      <aside class="contactside">
        <h2 class="d3" style="margin-bottom:var(--s-4)">Reach us directly</h2>
        <dl class="contactlist">
          <dt>Phone</dt><dd><a href="tel:9958611717">9958611717</a></dd>
          <dt>Email</dt><dd><a href="mailto:unheard.corporation@gmail.com">unheard.corporation@gmail.com</a></dd>
          <dt>Instagram</dt><dd><a href="https://instagram.com/unheardco" rel="noopener">@unheardco</a></dd>
        </dl>
        <hr class="rule" style="margin-block:var(--s-5)">
        <h3 class="d3" style="margin-bottom:var(--s-3)">The conversation series</h3>
        <p style="color:var(--ink-soft);font-size:.9375rem;margin-bottom:0">If you are a parent, educator or counsellor with a story worth hearing, we record short conversations on Zoom and share them. Pick that option in the form and we will send details.</p>
        <hr class="rule" style="margin-block:var(--s-5)">
        <p class="contactside__reply">
          <span class="mono">Reply time</span>
          Usually within two working days. If it is urgent, phone rather than
          write: it is a small team and the phone is answered faster than the
          inbox.
        </p>
      </aside>
    </div>
  </section>

  <!-- The page previously ended under the form with ~380px of empty ground.
       A parent who has scrolled this far without filling it in is hesitating,
       so this is where the hesitation gets answered: what happens next, and
       that they need not write at all. -->
  <section class="section" style="background:var(--g-sunken)">
    <div class="shell">
      <div class="head">
        <p class="slug slug--lift">Before you write</p>
        <h2 class="d2">You do not have to talk to us to start.</h2>
      </div>
      <div class="grid grid--3">
        <article class="card card--liftrail">
          <h3 class="d3" style="margin-bottom:var(--s-2)">The activities are free</h3>
          <p style="margin:0;color:var(--ink-soft)">All 45, with every source linked. No sign-up and no email needed. If they are all you ever use, that is a good outcome.</p>
          <p style="margin:var(--s-4) 0 0"><a href="/activities">Open the library</a></p>
        </article>
        <article class="card">
          <h3 class="d3" style="margin-bottom:var(--s-2)">We will say if we are wrong for you</h3>
          <p style="margin:0;color:var(--ink-soft)">If what you describe needs a paediatrician, a psychologist or a special educator, we will tell you that rather than sell you a box.</p>
        </article>
        <article class="card card--growrail">
          <h3 class="d3" style="margin-bottom:var(--s-2)">Nothing is shared</h3>
          <p style="margin:0;color:var(--ink-soft)">What you write about your child stays between us. We do not publish it and we do not pass it on.</p>
        </article>
      </div>
    </div>
  </section>
</main>` + tail('\n<script src="/js/form.js"></script>');
fs.writeFileSync('site/contact.html', contact);

/* ══════════ 404 ══════════ */
const nf = head('Page not found | UNHEARD','That page does not exist.',[])
+ nav('') + `
<main id="main">
  <section class="section ruled" style="min-height:52vh;display:flex;align-items:center">
    <div class="shell">
      <p class="slug">404</p>
      <h1 class="d1" style="max-width:16ch;margin-bottom:var(--s-4)">We are not hearing that page.</h1>
      <p class="hand" style="margin-bottom:var(--s-6)">It moved, or it never existed.</p>
      <div class="hero__actions" style="margin-top:0">
        <a class="btn btn--brand" href="/">Back to the start</a>
        <a class="btn btn--lift" href="/activities">Browse the activities</a>
      </div>
    </div>
  </section>
</main>` + tail();
fs.writeFileSync('site/404.html', nf);

console.log('written: kit.html about.html contact.html 404.html');
