/** useTeaser — one-time nudge bubble beside the launcher (once per browser session). */
import { useCallback, useEffect, useState } from 'react';

const KEY = 'chat-teaser';

export function useTeaser(open) {
  const [teaser, setTeaser] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return undefined;
    } catch {
      /* storage blocked — still show it once */
    }
    const t = window.setTimeout(() => setTeaser(true), 6000);
    return () => window.clearTimeout(t);
  }, []);

  const dismissTeaser = useCallback(() => {
    setTeaser(false);
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  // Never shown while the panel is open.
  return { teaser: teaser && !open, dismissTeaser };
}
