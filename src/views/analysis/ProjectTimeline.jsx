/** ProjectTimeline — projects grouped by role/period, most recent first. */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { reveal } from '@/hooks/reveal';
import { buildEras } from './analysisStats';
import s from '../AnalysisView.module.css';

export default function ProjectTimeline() {
  const eras = useMemo(buildEras, []);

  return (
    <div className={s.timeline}>
      {eras.map((era, i) => (
        <article key={era.period} className={s.era} ref={reveal(i * 90)}>
          <span className={s.node} />
          <div className={`${s.eraContent} surface`}>
            <h4>{era.period}</h4>
            <div className={s.eraProjects}>
              {era.projects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className={s.eraProject}
                  style={{ borderColor: p.accent }}
                >
                  <span className={s.eraProjectTitle} style={{ color: p.accent }}>{p.title}</span>
                  <span className={s.eraProjectStack}>{p.stack.join(' · ')}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
