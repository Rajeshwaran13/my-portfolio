/**
 * useHashScroll — after navigating to "/#section" from another route,
 * wait for the home view to mount, then smooth-scroll to the section.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash, pathname]);
}
