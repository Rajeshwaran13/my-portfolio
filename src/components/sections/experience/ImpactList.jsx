/**
 * ImpactList — the role's bullet points as a bento grid: first item is a
 * wide featured tile, the rest sit in a 2×2 grid. Icon, title, detail.
 */
import AppIcon from '@/components/ui/AppIcon';
import { reveal } from '@/hooks/reveal';
import s from './Experience.module.css';

export default function ImpactList({ item }) {
  return (
    <ul className={s.bento}>
      {item.points.map((text, i) => (
        <li
          key={text}
          className={`${s.tile} ${i === 0 ? s.tileWide : ''}`}
          ref={reveal(i * 80)}
        >
          <span className={s.tileNum}>{String(i + 1).padStart(2, '0')}</span>
          <span className={s.tileIc}>
            <AppIcon name={item.pointIcons?.[i] ?? 'spark'} size={20} />
          </span>
          <h4>{item.pointTitles?.[i] ?? `Highlight ${i + 1}`}</h4>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
