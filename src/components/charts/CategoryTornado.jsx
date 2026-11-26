/** CategoryTornado — each skill category's average vs. the overall average, diverging
 *  from a zero baseline. Relative performance, not absolute shape (cf. the radar). */
import { useMemo } from 'react';
import { skillGroups } from '@/data/skills';
import s from './CategoryTornado.module.css';

const avgOf = (list) => Math.round(list.reduce((sum, sk) => sum + sk.level, 0) / list.length);

export default function CategoryTornado() {
  const { overallAvg, rows } = useMemo(() => {
    const overall = avgOf(skillGroups.flatMap((g) => g.skills));
    const deltas = skillGroups.map((g) => {
      const avg = avgOf(g.skills);
      return { title: g.title, avg, delta: avg - overall };
    });
    const maxDelta = Math.max(...deltas.map((d) => Math.abs(d.delta)), 1);
    return {
      overallAvg: overall,
      rows: deltas.sort((a, b) => b.delta - a.delta).map((d) => ({ ...d, maxDelta })),
    };
  }, []);

  return (
    <div className={s.tornado} role="img" aria-label={`Category averages vs the overall average of ${overallAvg}%`}>
      <p className={s.baselineLabel}>
        Overall average: <b>{overallAvg}%</b>
      </p>
      {rows.map((r) => {
        const neg = r.delta < 0 ? s.negative : '';
        return (
          <div key={r.title} className={s.tornadoRow}>
            <span className={s.tornadoLabel}>{r.title}</span>
            <div className={s.tornadoTrack}>
              <span className={s.tornadoZero} />
              <span
                className={`${s.tornadoBar} ${neg}`}
                style={{ width: `${(Math.abs(r.delta) / r.maxDelta) * 48}%` }}
              />
            </div>
            <span className={`${s.tornadoValue} ${neg}`}>
              {r.delta > 0 ? '+' : ''}
              {r.delta}pt
            </span>
          </div>
        );
      })}
    </div>
  );
}
