/* Contact form validation. Inline, on blur, never on keystroke. */
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const ok = document.getElementById('formOk');
  const fields = Array.from(form.querySelectorAll('input, select, textarea'));

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[\d\s+()-]{7,}$/;

  function validate(el) {
    const wrap = el.closest('.field');
    const err = document.getElementById('err-' + el.id);
    if (!wrap) return true;

    let bad = false;
    const v = el.value.trim();
    if (el.required && !v) bad = true;
    else if (el.type === 'email' && v && !emailRe.test(v)) bad = true;
    else if (el.type === 'tel' && v && !phoneRe.test(v)) bad = true;

    wrap.classList.toggle('is-bad', bad);
    if (err) err.hidden = !bad;
    el.setAttribute('aria-invalid', String(bad));
    if (err) {
      if (bad) el.setAttribute('aria-describedby', err.id);
      else el.removeAttribute('aria-describedby');
    }
    return !bad;
  }

  fields.forEach(el => {
    el.addEventListener('blur', () => validate(el));
    // once a field is marked bad, correct it live so the error clears
    el.addEventListener('input', () => {
      if (el.closest('.field').classList.contains('is-bad')) validate(el);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let firstBad = null;
    fields.forEach(el => {
      if (!validate(el) && !firstBad) firstBad = el;
    });
    if (firstBad) { firstBad.focus(); return; }

    // No backend in this build. Say so rather than faking success.
    if (ok) {
      ok.hidden = false;
      ok.textContent = 'Thank you. Nothing is sent yet in this build, so please also reach us on 9958611717 or unheard.corporation@gmail.com.';
    }
  });
})();
