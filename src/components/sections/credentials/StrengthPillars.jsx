/** StrengthPillars — core strengths as three pillars with big outlined monograms. */
import { reveal } from '@/hooks/reveal';
import s from './Credentials.module.css';

export default function StrengthPillars({ items }) {
  return (
    <div className={s.pillars}>
      {items.map((a, i) => (
        <article key={a.title} className={s.pillar} ref={reveal(i * 90)}>
          <span className={s.mono}>{a.rank}</span>
          <h4>{a.title}</h4>
          <p>{a.detail}</p>
        </article>
      ))}
    </div>
  );
}
