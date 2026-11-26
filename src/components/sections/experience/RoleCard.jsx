/**
 * RoleCard — deep-green card for the current role: live badge, company
 * monogram, role/company/meta, live tenure stats and the tech stack.
 */
import { projects } from '@/data/projects';
import AppIcon from '@/components/ui/AppIcon';
import CountUp from '@/components/ui/CountUp';
import { monthsSince, monogram } from './tenure';
import s from './Experience.module.css';

export default function RoleCard({ item }) {
  const months = monthsSince(item.start);
  const current = /present/i.test(item.period);

  return (
    <aside className={s.role}>
      <span className={s.glow} aria-hidden="true" />

      <div className={s.roleTop}>
        <span className={s.logo}>{monogram(item.company)}</span>
        {current && (
          <span className={s.live}>
            <span className={s.liveDot} />
            Currently here
          </span>
        )}
      </div>

      <h3 className={s.roleTitle}>{item.role}</h3>
      <p className={s.company}>{item.company}</p>

      <div className={s.meta}>
        <span>
          <AppIcon name="pin" size={14} /> {item.location}
        </span>
        <span>
          <AppIcon name="calendar" size={14} /> {item.period}
        </span>
      </div>

      <div className={s.stats}>
        <div>
          <strong>
            <CountUp value={String(months)} />
          </strong>
          <span>months in role</span>
        </div>
        <div>
          <strong>
            <CountUp value={String(projects.length)} />
          </strong>
          <span>products built</span>
        </div>
      </div>

      <div className={s.stack}>
        {item.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </aside>
  );
}
