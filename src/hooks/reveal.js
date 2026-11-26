/**
 * reveal(delay?) — React replacement for the Vue `v-reveal` directive.
 * Returns a callback ref: adds `.reveal`, then `.is-visible` once the element
 * scrolls into view. Usage: <div ref={reveal(120)}>…</div>
 * Safe to call on every render — each element is only bound once.
 */
export function reveal(delay) {
  return (el) => {
    if (!el || el.dataset.revealBound) return;
    el.dataset.revealBound = '1';
    el.classList.add('reveal');
    if (typeof delay === 'number') el.style.transitionDelay = `${delay}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
  };
}
