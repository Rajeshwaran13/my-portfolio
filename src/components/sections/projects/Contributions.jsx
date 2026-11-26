/** Contributions — "Key contributions" block below the projects grid. */
import { contributions } from '@/data/projects';
import { reveal } from '@/hooks/reveal';
import ContributionCard from './ContributionCard';
import s from './Contributions.module.css';

export default function Contributions() {
  return (
    <div className={s.block}>
      <div className={s.head} ref={reveal()}>
        <h3>Key contributions</h3>
        <p>Features and tasks I delivered inside these two products.</p>
      </div>
      <div className={s.grid}>
        {contributions.map((c, i) => (
          <ContributionCard key={c.id} item={c} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}
