/**
 * ContributionCard — one feature/task delivered inside a project: icon,
 * "Part of <project>" tag(s), title, tagline, top tech and a details link.
 */
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import AppIcon from '@/components/ui/AppIcon';
import { reveal } from '@/hooks/reveal';
import s from './Contributions.module.css';

const shortName = (id) => projects.find((p) => p.id === id)?.title.split(' — ')[0] ?? id;

export default function ContributionCard({ item, delay }) {
  return (
    <article className={s.card} ref={reveal(delay)}>
      <div className={s.top}>
        <span className={s.ic}>
          <AppIcon name={item.icon} size={20} />
        </span>
        <div className={s.parents}>
          {item.parents.map((pid) => (
            <Link key={pid} to={`/projects/${pid}`} className={s.parent}>
              {shortName(pid)}
            </Link>
          ))}
        </div>
      </div>

      <h4 className={s.title}>{item.title}</h4>
      <p className={s.tagline}>{item.tagline}</p>

      <div className={s.stack}>
        {item.stack.slice(0, 3).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <Link to={`/projects/${item.id}`} className={s.more}>
        Details <AppIcon name="arrow" size={14} />
      </Link>
    </article>
  );
}
