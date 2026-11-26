/**
 * useAutoCycle — steps an index 0..count-1 every `ms` until the user picks
 * one manually. Pauses while `paused` is true; off for reduced-motion users.
 * Returns { index, select, auto } — `auto` false once the user has clicked.
 */
import { useEffect, useState } from 'react';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useAutoCycle(count, ms, paused) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(() => !reducedMotion());

  useEffect(() => {
    if (!auto || paused || count < 2) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), ms);
    return () => clearTimeout(t);
  }, [auto, paused, count, ms, index]);

  const select = (i) => {
    setAuto(false);
    setIndex(i);
  };

  return { index, select, auto };
}
