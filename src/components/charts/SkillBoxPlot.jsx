/** SkillBoxPlot — spread (min/median/max) of skill levels *within* each category —
 *  complements the radar's per-category averages with variance. */
import { useMemo } from 'react';
import { skillGroups } from '@/data/skills';
import s from './SkillBoxPlot.module.css';

function quantile(sorted, q) {
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  return sorted[base + 1] !== undefined ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) : sorted[base];
}

export default function SkillBoxPlot() {
  const boxes = useMemo(
    () =>
      skillGroups
        .map((g) => {
          const sorted = g.skills.map((sk) => sk.level).sort((a, b) => a - b);
          return {
            title: g.title,
            min: sorted[0],
            q1: quantile(sorted, 0.25),
            median: quantile(sorted, 0.5),
            q3: quantile(sorted, 0.75),
            max: sorted[sorted.length - 1],
          };
        })
        .sort((a, b) => b.median - a.median),
    [],
  );

  return (
    <div className={s.boxplot} role="img" aria-label="Box plot of skill-level spread within each category">
      {boxes.map((b) => (
        <div key={b.title} className={s.boxRow}>
          <span className={s.boxLabel}>{b.title}</span>
          <div className={s.boxAxis}>
            <div className={s.whisker} style={{ left: `${b.min}%`, width: `${b.max - b.min}%` }} />
            <div className={s.box} style={{ left: `${b.q1}%`, width: `${b.q3 - b.q1}%` }} />
            <div className={s.median} style={{ left: `${b.median}%` }} />
          </div>
          <span className={s.boxRange}>
            {Math.round(b.min)}–{Math.round(b.max)}%
          </span>
        </div>
      ))}
    </div>
  );
}
