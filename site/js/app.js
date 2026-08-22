/* ══════════════════════════════════════════════════════════
   UNHEARD — behaviour
   Every module is an IIFE that returns early if its markup is
   absent, so one script serves every page with no branching.
   ══════════════════════════════════════════════════════════ */

(function navStick() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

(function navInvert() {
  const nav = document.getElementById('nav');
  const nights = document.querySelectorAll('.night');
  if (!nav || !nights.length) return;
  const check = () => {
    const line = nav.getBoundingClientRect().height * 0.6;
    let over = false;
    nights.forEach(s => {
      const r = s.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) over = true;
    });
    nav.classList.toggle('is-night', over);
  };
  check();
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
})();

(function navToggle() {
  const btn = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
  });
  links.addEventListener('click', e => {
    if (e.target.tagName !== 'A') return;
    links.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Menu';
  });
})();

(function reveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    // apply the FINAL state, never skip the element
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  const show = el => el.classList.add('is-in');

  if (!('IntersectionObserver' in window)) {
    items.forEach(show);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      show(entry.target);
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  items.forEach(el => {
    // Scroll-triggered animation has a blind spot at the top of the page:
    // anything already on screen at load never "enters" from below.
    // Pair every trigger with an in-viewport check. (03-VERIFICATION bug #2)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      show(el);
    } else {
      io.observe(el);
    }
  });

  // Safety net: IntersectionObserver delivers callbacks asynchronously, so a
  // very fast scroll (or a scripted one) can leave an element that IS on
  // screen still at opacity 0. Sweep on scroll-end and force anything visible.
  let sweepTimer;
  const sweep = () => {
    items.forEach(el => {
      if (el.classList.contains('is-in')) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) { show(el); io.unobserve(el); }
    });
  };
  window.addEventListener('scroll', () => {
    clearTimeout(sweepTimer);
    sweepTimer = setTimeout(sweep, 120);
  }, { passive: true });
})();

(function counters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const land = () => { el.textContent = prefix + target.toLocaleString('en-IN') + suffix; };

    if (reduce || !Number.isFinite(target)) { land(); return; }

    const dur = 1100;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      // expo.out
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = prefix + Math.round(target * e).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(tick);
      // Easing only APPROACHES its endpoint. Always write the exact
      // target on completion. (03-VERIFICATION bug #3)
      else land();
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  nums.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) run(el);
    else io.observe(el);
  });
})();

(function grain() {
  // Progressive: probe the real paper plate; if absent the page stays clean.
  const url = '/assets/paper-grain.png';
  const img = new Image();
  img.onload = () => {
    document.documentElement.style.setProperty('--grain', `url(${url})`);
    document.body.classList.add('has-grain');
  };
  img.src = url;
})();
