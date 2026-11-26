/** SkillHistogram — distribution of every individual skill's level into bands
 *  (spread, not per-category averages). */
import { useMemo } from 'react';
import { skillGroups } from '@/data/skills';
import { reveal } from '@/hooks/reveal';
import s from './SkillHistogram.module.css';

const BANDS = [
  { label: '< 70%', min: 0, max: 69 },
  { label: '70–79%', min: 70, max: 79 },
  { label: '80–89%', min: 80, max: 89 },
  { label: '90–100%', min: 90, max: 100 },
];

export default function SkillHistogram() {
  const buckets = useMemo(() => {
    const all = skillGroups.flatMap((g) => g.skills);
    return BANDS.map((b) => ({
      ...b,
      count: all.filter((sk) => sk.level >= b.min && sk.level <= b.max).length,
    }));
  }, []);
  const maxCount = Math.max(...buckets.map((b) => b.count), 1);

  return (
    <div
      className={s.histogram}
      role="img"
      aria-label="Histogram of individual skill levels grouped into bands"
      ref={reveal()}
    >
      {buckets.map((b) => (
        <div key={b.label} className={s.histCol}>
          <span className={s.histCount}>{b.count}</span>
          <div className={s.histBar} style={{ height: `${(b.count / maxCount) * 100}%` }} />
          <span className={s.histLabel}>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
