/** HeroRibbon — endless horizontal strip of concepts closing the hero; pauses on hover. */
import { concepts } from '@/data/skills';
import s from './HeroRibbon.module.css';

export default function HeroRibbon() {
  const loop = [...concepts, ...concepts];
  return (
    <div className={s.marquee} aria-label="Concepts">
      <div className={s.track}>
        {loop.map((c, i) => (
          <span key={`${c}-${i}`} className={s.item} aria-hidden={i >= concepts.length}>
            <span className={s.star}>✦</span>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
