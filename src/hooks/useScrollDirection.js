/**
 * useScrollDirection — true while the page is actively being scrolled down.
 * Used to tuck away floating widgets (WhatsApp/chat FABs) on mobile.
 * Reveals again on scroll-up or ~500ms after scrolling settles.
 */
import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let settleTimer = null;

    function onScroll() {
      const y = window.scrollY;
      if (y > lastY + 4 && y > 80) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => setHidden(false), 500);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, []);

  return hidden;
}
