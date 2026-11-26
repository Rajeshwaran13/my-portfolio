/**
 * useActiveSection — scroll-spy for the home page. Returns the id of the last
 * section whose top has passed just below the menu bar ('' near the hero).
 */
import { useEffect, useState } from 'react';

const OFFSET = 140;

export function useActiveSection(ids, enabled) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActive('');
      return undefined;
    }
    let raf = 0;
    const measure = () => {
      raf = 0;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids, enabled]);

  return active;
}
