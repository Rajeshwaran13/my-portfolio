/**
 * usePresence — keeps an element mounted through its leave transition
 * (React stand-in for Vue <transition>). `shown` flips one frame after
 * mount so CSS transitions run on enter, and before unmount on leave.
 */
import { useEffect, useState } from 'react';

export function usePresence(open, leaveMs = 300) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), leaveMs);
    return () => clearTimeout(t);
  }, [open, leaveMs]);

  return { mounted, shown };
}
