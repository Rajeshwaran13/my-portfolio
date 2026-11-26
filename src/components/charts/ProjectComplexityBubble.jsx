/** ProjectComplexityBubble — project complexity over time: x = era (chronological),
 *  y = tech-stack size, bubble size = highlights documented, color = category. */
import { useMemo } from 'react';
import { projects } from '@/data/projects';
import { buildBubbles, buildEras } from './projectBubbles';
import s from './ProjectComplexityBubble.module.css';

export default function ProjectComplexityBubble() {
  const eras = useMemo(() => buildEras(projects), []);
  const bubbles = useMemo(() => buildBubbles(projects, eras), [eras]);

  return (
    <div className={s.bubbleChart}>
      <div className={s.plot} role="img" aria-label="Project complexity over time: tech-stack size per project, grouped by era">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className={s.bubble}
            style={{
              left: `${b.xPct}%`,
              top: `${b.yPct}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              background: b.color,
            }}
            title={`${b.title} — ${b.stack.length} technologies, ${b.highlights.length} highlights`}
          />
        ))}
      </div>
      <div className={s.axisX}>
        {eras.map((era) => (
          <span key={era} className={s.axisTick}>{era.split('·')[0].trim()}</span>
        ))}
      </div>
      <p className={s.axisYHint}>
        Vertical position = number of technologies used · bubble size = highlights documented
      </p>
    </div>
  );
}
