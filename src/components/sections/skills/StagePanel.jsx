/**
 * StagePanel — detail view of the selected skill group: big index, title,
 * quick stats, then each skill with a tier tag and an animated level bar.
 * Keyed by group so the entrance + bar animations replay on every switch.
 */
import AppIcon from '@/components/ui/AppIcon';
import { skillTier, groupAverage } from './skillTier';
import s from './Skills.module.css';

export default function StagePanel({ group, index, total }) {
  const avg = groupAverage(group);

  return (
    <div className={s.panel} role="tabpanel">
      <div className={s.panelHead}>
        <span className={s.bigIndex}>
          {String(index + 1).padStart(2, '0')}
          <small>/ {String(total).padStart(2, '0')}</small>
        </span>
        <div className={s.headText}>
          <h3>
            <span className={s.headIc}>
              <AppIcon name={group.icon} size={20} />
            </span>
            {group.title}
          </h3>
          <p>{group.blurb}</p>
        </div>
        <div className={s.kpis}>
          <span>
            <strong>{group.skills.length}</strong> skills
          </span>
          <span>
            <strong>{avg}%</strong> avg
          </span>
        </div>
      </div>

      <ul className={s.skillList}>
        {group.skills.map((sk, i) => (
          <li key={sk.name} className={s.skill} style={{ animationDelay: `${i * 60}ms` }}>
            <div className={s.skillTop}>
              <span className={s.skillName}>{sk.name}</span>
              <span className={`${s.tier} ${s[`tier${skillTier(sk.level)}`]}`}>{skillTier(sk.level)}</span>
            </div>
            <div className={s.track}>
              <span
                className={s.fill}
                style={{ '--lvl': `${sk.level}%`, animationDelay: `${150 + i * 60}ms` }}
              />
            </div>
            <span className={s.pct}>{sk.level}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
