/** CommandPalette — macOS Spotlight-style ⌘K quick navigation. */
import { useEffect, useMemo, useRef, useState } from 'react';
import AppIcon from '@/components/ui/AppIcon';
import { useCommands } from './commandPalette/useCommands';
import s from './CommandPalette.module.css';

export default function CommandPalette({ open, onOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const fieldRef = useRef(null);
  const commands = useCommands(onClose);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => (c.label + ' ' + c.hint).toLowerCase().includes(q));
  }, [commands, query]);

  // Results only change with the query → reset the highlighted row.
  useEffect(() => setActive(0), [query]);

  // show(): reset + focus the field whenever the palette opens.
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    fieldRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        open ? onClose?.() : onOpen?.();
        return;
      }
      if (!open) return;
      const n = results.length;
      if (e.key === 'Escape') onClose?.();
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (n) setActive((a) => (a + 1) % n);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (n) setActive((a) => (a - 1 + n) % n);
      } else if (e.key === 'Enter') {
        results[active]?.run();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpen, onClose, results, active]);

  if (!open) return null;

  return (
    <div
      className={s.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className={`${s.palette} surface`} role="dialog" aria-label="Command palette">
        <div className={s.field}>
          <AppIcon name="search" size={18} />
          <input
            ref={fieldRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Jump to a section or project…"
            aria-label="Search commands"
          />
          <kbd>esc</kbd>
        </div>
        <ul className={s.list}>
          {results.map((c, i) => (
            <li
              key={c.label}
              className={`${s.row} ${i === active ? s.active : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => c.run()}
            >
              <span className={s.rIc}>
                <AppIcon name={c.icon} size={16} />
              </span>
              <span className={s.rLabel}>{c.label}</span>
              <span className={s.rHint}>{c.hint}</span>
            </li>
          ))}
          {!results.length && <li className={s.empty}>No matches</li>}
        </ul>
      </div>
    </div>
  );
}
