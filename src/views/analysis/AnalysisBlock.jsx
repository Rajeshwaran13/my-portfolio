/** AnalysisBlock — titled block (h3 + sub) with an optional revealed chart card.
 *  card: 'chart' (default) | 'radar' | null (children rendered bare). */
import { reveal } from '@/hooks/reveal';
import s from '../AnalysisView.module.css';

export default function AnalysisBlock({ title, sub, card = 'chart', split = false, children }) {
  const cardClass = card === 'radar' ? s.radarCard : s.chartCard;
  return (
    <section className={`${s.block} ${split ? s.splitCol : ''}`}>
      <h3 className={s.blockTitle}>{title}</h3>
      <p className={s.blockSub}>{sub}</p>
      {card ? (
        <div className={`${cardClass} surface`} ref={reveal()}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
