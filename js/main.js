// UNHEARD redesign — small, defensive enhancements. Page works without JS.
(function () {
  // sticky nav border + mobile menu
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // scroll reveals, lightly staggered within a group
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); });
      el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 80 + 'ms';
      el.classList.add('is-in');
      // drop the stagger once revealed so hover transitions are not delayed
      setTimeout(function () { el.style.transitionDelay = ''; }, 1400);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();

// Activity library: search + model + domain filters. Cards are already in the
// HTML, so without JS the full list simply shows.
(function () {
  var wrap = document.getElementById('acts');
  if (!wrap) return;
  var cards = Array.prototype.slice.call(wrap.querySelectorAll('.act'));
  var search = document.getElementById('libSearch');
  var count = document.getElementById('libCount');
  var empty = document.getElementById('libEmpty');
  var reset = document.getElementById('libReset');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var state = { model: 'all', domain: 'all', q: '' };

  function press(group, value) {
    chips.forEach(function (c) {
      if (c.dataset.filter === group) c.setAttribute('aria-pressed', String(c.dataset.value === value));
    });
  }

  function apply() {
    var q = state.q.trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (card) {
      var ok = (state.model === 'all' || card.dataset.model === state.model) &&
        (state.domain === 'all' || (' ' + card.dataset.domains + ' ').indexOf(' ' + state.domain + ' ') > -1) &&
        (!q || card.dataset.text.indexOf(q) > -1);
      card.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown === cards.length
      ? 'Showing all ' + cards.length + ' activities'
      : 'Showing ' + shown + ' of ' + cards.length + ' activities';
    empty.hidden = shown !== 0;
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      state[c.dataset.filter] = c.dataset.value;
      press(c.dataset.filter, c.dataset.value);
      apply();
    });
  });
  if (search) search.addEventListener('input', function () { state.q = search.value; apply(); });
  if (reset) reset.addEventListener('click', function () {
    state = { model: 'all', domain: 'all', q: '' };
    if (search) search.value = '';
    press('model', 'all'); press('domain', 'all');
    apply();
  });

  // deep links from the home and about pages: activities.html?model=japan
  var params = new URLSearchParams(location.search);
  ['model', 'domain'].forEach(function (g) {
    var v = params.get(g);
    if (v && chips.some(function (c) { return c.dataset.filter === g && c.dataset.value === v; })) {
      state[g] = v; press(g, v);
    }
  });
  apply();
})();

// Contact form. There is no backend: it validates, then hands the message to
// the visitor's own email app and says plainly that nothing was sent.
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var done = document.getElementById('formDone');
  var mail = document.getElementById('mailLink');
  var interest = form.elements.interest;

  var pre = new URLSearchParams(location.search).get('interest');
  if (pre && interest.querySelector('option[value="' + pre + '"]')) interest.value = pre;

  function check(name, ok) {
    var input = form.elements[name];
    var el = input instanceof RadioNodeList ? input[0] : input;
    el.closest('.field').classList.toggle('is-invalid', !ok);
    el.setAttribute('aria-invalid', String(!ok));
    el.setAttribute('aria-describedby', 'f-' + name + '-err');
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var results = [
      check('name', f.name.value.trim().length > 1),
      check('phone', /^[0-9+()\s-]{8,}$/.test(f.phone.value.trim())),
      check('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())),
      check('role', !!form.querySelector('input[name="role"]:checked')),
      check('interest', !!interest.value)
    ];
    if (results.indexOf(false) > -1) {
      var first = form.querySelector('.is-invalid input, .is-invalid select');
      if (first) first.focus();
      return;
    }
    var role = form.querySelector('input[name="role"]:checked').value;
    var topic = interest.options[interest.selectedIndex].text;
    var body = [
      'Name: ' + f.name.value.trim(),
      'Phone: ' + f.phone.value.trim(),
      'Email: ' + f.email.value.trim(),
      'I am a: ' + role,
      'Interested in: ' + topic,
      '',
      f.message.value.trim()
    ].join('\n');
    mail.href = 'mailto:unheard.corporation@gmail.com?subject=' +
      encodeURIComponent('UNHEARD: ' + topic) + '&body=' + encodeURIComponent(body);
    done.hidden = false;
    done.focus();
  });
})();
