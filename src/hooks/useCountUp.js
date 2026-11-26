/**
 * useCountUp — animates the numeric part of a label from 0 to its target,
 * preserving surrounding text (e.g. "70+", "CGPA 7.6").
 * Honors prefers-reduced-motion by rendering the final value immediately.
 */
import { useEffect, useState } from 'react';

export function useCountUp(target, durationMs = 1100) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const match = target.match(/\d+(?:\.\d+)?/);
    if (!match || typeof requestAnimationFrame === 'undefined') return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const full = match[0];
    const end = parseFloat(full);
    const decimals = full.includes('.') ? full.split('.')[1].length : 0;
    const before = target.slice(0, match.index);
    const after = target.slice((match.index ?? 0) + full.length);
    const frame = (val) => `${before}${val.toFixed(decimals)}${after}`;

    let startTs = null;
    let raf = 0;
    setDisplay(frame(0));
    const step = (ts) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(p < 1 ? frame(end * eased) : target);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return display;
}
