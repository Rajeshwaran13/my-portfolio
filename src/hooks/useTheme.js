/**
 * useTheme — light/dark theme controller (shared module-level store).
 * Default is light (green & white); persisted to localStorage.
 */
import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const listeners = new Set();

function readInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'light';
}

let theme = readInitial();
document.documentElement.setAttribute('data-theme', theme);

function setTheme(value) {
  theme = value;
  document.documentElement.setAttribute('data-theme', value);
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useTheme() {
  const current = useSyncExternalStore(subscribe, () => theme);
  const toggle = () => setTheme(current === 'dark' ? 'light' : 'dark');
  return { theme: current, toggle };
}
