/**
 * usePop — keeps an element mounted through its exit animation
 * (replaces Vue's <transition name="pop">). Returns { mounted, leaving }.
 */
import { useEffect, useState } from 'react';

export function usePop(show, ms = 250) {
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) {
      setMounted(true);
      return undefined;
    }
    const t = window.setTimeout(() => setMounted(false), ms);
    return () => window.clearTimeout(t);
  }, [show, ms]);

  return { mounted: show || mounted, leaving: !show && mounted };
}
