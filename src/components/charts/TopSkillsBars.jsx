/** TopSkillsBars — ranked horizontal bar list of the highest-rated individual skills.
 *  Reused by the Analysis page (full) and the chatbot (compact). */
import { useMemo } from 'react';
import { skillGroups } from '@/data/skills';
import { reveal } from '@/hooks/reveal';
import s from './TopSkillsBars.module.css';

export default function TopSkillsBars({ limit = 10, compact = false }) {
  const topSkills = useMemo(
    () =>
      skillGroups
        .flatMap((g) => g.skills.map((sk) => ({ ...sk, group: g.title })))
        .sort((a, b) => b.level - a.level)
        .slice(0, limit),
    [limit],
  );

  return (
    <div className={`${s.bars} ${compact ? s.compact : ''}`} ref={reveal()}>
      {topSkills.map((sk) => (
        <div key={sk.name} className={s.barRow}>
          <span className={s.barLabel}>{sk.name}</span>
          <div className={s.barTrack}>
            <span className={s.barFill} style={{ '--lvl': `${sk.level}%` }} />
          </div>
          <span className={s.barValue}>{sk.level}%</span>
        </div>
      ))}
    </div>
  );
}
