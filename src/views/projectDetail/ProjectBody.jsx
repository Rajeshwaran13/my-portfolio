/** ProjectBody — overview + highlights windows, with the "What I did" / outcomes side panels. */
import GlassWindow from '@/components/layout/GlassWindow';
import AppIcon from '@/components/ui/AppIcon';
import s from './ProjectDetail.module.css';

export default function ProjectBody({ project }) {
  const hasSide = Boolean(project.ownership || project.outcomes);

  return (
    <div className={`${s.layout} ${hasSide ? '' : s.noSide}`}>
      <div>
        <GlassWindow title="Overview">
          {project.description.map((para, i) => (
            <p key={i} className={s.para}>{para}</p>
          ))}
        </GlassWindow>

        <GlassWindow title="Highlights" className={s.block}>
          <ul className={s.ticks}>
            {project.highlights.map((h) => (
              <li key={h}>
                <span className={s.tickIcon} style={{ color: project.accent }}>
                  <AppIcon name="arrow" size={15} />
                </span>{' '}
                {h}
              </li>
            ))}
          </ul>
        </GlassWindow>
      </div>

      {hasSide && (
        <aside className={s.side}>
          {project.ownership && (
            <div className={`surface ${s.panel}`}>
              <h3>What I did — end to end</h3>
              <ol className={s.steps}>
                {project.ownership.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>
          )}
          {project.outcomes && (
            <div className={`surface ${s.panel}`}>
              <h3>Outcomes</h3>
              <ul className={s.dots}>
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
