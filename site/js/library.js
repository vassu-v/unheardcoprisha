/* Activity library filtering. Defensive: returns if markup is absent. */
(function library() {
  const grid = document.getElementById('acts');
  const bar = document.getElementById('libBar');
  if (!grid || !bar) return;

  const cards = Array.from(grid.querySelectorAll('.act'));
  const countEl = document.getElementById('libCount');
  const emptyEl = document.getElementById('libEmpty');
  const resetEl = document.getElementById('libReset');
  const chips = Array.from(bar.querySelectorAll('.chip'));
  const groups = Array.from(grid.querySelectorAll('.actgroup'));

  const active = { domain: new Set(), model: new Set() };

  function apply() {
    let shown = 0;
    cards.forEach(c => {
      const doms = (c.dataset.domains || '').split(' ').filter(Boolean);
      const okD = !active.domain.size || doms.some(d => active.domain.has(d));
      const okM = !active.model.size || active.model.has(c.dataset.model);
      const show = okD && okM;
      c.hidden = !show;
      if (show) shown++;
    });
    // A group header with nothing under it is a lie about what is there.
    groups.forEach(g => {
      const id = g.dataset.group;
      const any = cards.some(c => c.dataset.model === id && !c.hidden);
      g.hidden = !any;
    });

    if (countEl) countEl.textContent = shown + (shown === 1 ? ' activity' : ' activities');
    if (emptyEl) emptyEl.hidden = shown !== 0;

    // reflect state in the URL so a filtered view is shareable
    const p = new URLSearchParams();
    if (active.domain.size) p.set('watch', [...active.domain].join(','));
    if (active.model.size) p.set('model', [...active.model].join(','));
    const q = p.toString();
    history.replaceState(null, '', q ? '?' + q : location.pathname);
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const set = active[chip.dataset.filter];
      const v = chip.dataset.value;
      const on = !set.has(v);
      on ? set.add(v) : set.delete(v);
      chip.setAttribute('aria-pressed', String(on));
      apply();
    });
  });

  if (resetEl) {
    resetEl.addEventListener('click', () => {
      active.domain.clear();
      active.model.clear();
      chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
      apply();
    });
  }

  // restore from URL on load
  const params = new URLSearchParams(location.search);
  ['watch:domain', 'model:model'].forEach(pair => {
    const [key, field] = pair.split(':');
    const raw = params.get(key);
    if (!raw) return;
    raw.split(',').filter(Boolean).forEach(v => {
      active[field].add(v);
      const chip = chips.find(c => c.dataset.filter === field && c.dataset.value === v);
      if (chip) chip.setAttribute('aria-pressed', 'true');
    });
  });
  apply();
})();
