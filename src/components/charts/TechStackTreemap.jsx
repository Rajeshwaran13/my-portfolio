/** TechStackTreemap — which technologies recur most across all projects, sized by frequency. */
import { useMemo } from 'react';
import { projects } from '@/data/projects';
import { buildTreemap } from './treemapLayout';
import s from './TechStackTreemap.module.css';

export default function TechStackTreemap({ limit = 10 }) {
  const rects = useMemo(() => buildTreemap(projects, limit), [limit]);

  return (
    <div>
      <div className={s.treemap} role="img" aria-label="Technology usage treemap, sized by how many projects use each">
        {rects.map((r) => (
          <div
            key={r.name}
            className={s.tile}
            style={{ left: `${r.x}%`, top: `${r.y}%`, width: `${r.w}%`, height: `${r.h}%` }}
            title={`${r.name} — used in ${r.value} project${r.value === 1 ? '' : 's'}`}
          >
            {r.showLabel && (
              <>
                <span className={s.tileName}>{r.name}</span>
                <span className={s.tileCount}>{r.value}× </span>
              </>
            )}
          </div>
        ))}
      </div>
      {/* Table-view twin: every tile's data stays reachable even where a tile is too small for its label. */}
      <ul className={s.treemapLegend}>
        {rects.map((r) => (
          <li key={`legend-${r.name}`}>
            {r.name} <b>{r.value}×</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
