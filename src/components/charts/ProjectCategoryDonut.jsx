/** ProjectCategoryDonut — projects grouped by category, part-to-whole. */
import { useMemo } from 'react';
import { projects } from '@/data/projects';
import { CATEGORY_COLORS } from './categoryColors';
import s from './ProjectCategoryDonut.module.css';

const GAP = 3;

export default function ProjectCategoryDonut({ size = 220 }) {
  const total = projects.length;
  const radius = size * 0.38;
  const stroke = size * 0.16;
  const circ = 2 * Math.PI * radius;

  const segments = useMemo(() => {
    const counts = new Map();
    for (const p of projects) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    const ordered = Array.from(counts.entries())
      .map(([category, count]) => ({ category, count, color: CATEGORY_COLORS[category] ?? 'var(--accent)' }))
      .sort((a, b) => b.count - a.count);
    let offset = 0;
    return ordered.map((c) => {
      const length = (c.count / total) * circ;
      const seg = { ...c, offset, length, pct: Math.round((c.count / total) * 100) };
      offset += length;
      return seg;
    });
  }, [total, circ]);

  const half = size / 2;
  return (
    <div className={s.donutWrap}>
      <svg viewBox={`0 0 ${size} ${size}`} className={s.donutSvg} role="img" aria-label="Projects by category donut chart">
        <g transform={`rotate(-90 ${half} ${half})`}>
          {segments.map((seg) => {
            const len = Math.max(seg.length - GAP, 0);
            return (
              <circle
                key={seg.category}
                cx={half}
                cy={half}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={stroke}
                strokeDasharray={`${len} ${circ - len}`}
                strokeDashoffset={-(seg.offset + GAP / 2)}
              />
            );
          })}
        </g>
        <text x={half} y={half - 4} textAnchor="middle" className={s.donutTotal}>{total}</text>
        <text x={half} y={half + 16} textAnchor="middle" className={s.donutTotalLabel}>projects</text>
      </svg>
      <ul className={s.donutLegend}>
        {segments.map((seg) => (
          <li key={seg.category}>
            <span className={s.dot} style={{ background: seg.color }} />
            {seg.category} <b>{seg.count} · {seg.pct}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
