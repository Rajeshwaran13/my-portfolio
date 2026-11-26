/**
 * StageList — skill groups as nodes on a vertical "pipeline" with a dot
 * flowing down the line. Active node glows; a bar shows auto-advance time.
 */
import AppIcon from '@/components/ui/AppIcon';
import s from './Skills.module.css';

export default function StageList({ groups, active, onSelect, auto, cycleMs }) {
  return (
    <div className={s.stages} role="tablist" aria-label="Skill groups">
      <span className={s.pipe} aria-hidden="true">
        <span className={s.flow} />
      </span>

      {groups.map((g, i) => {
        const on = i === active;
        return (
          <button
            key={g.title}
            type="button"
            role="tab"
            aria-selected={on}
            className={`${s.stage} ${on ? s.stageOn : ''}`}
            onClick={() => onSelect(i)}
          >
            <span className={s.node}>
              <AppIcon name={g.icon} size={18} />
            </span>
            <span className={s.stageText}>
              <strong>{g.title}</strong>
              <small>{g.skills.length} skills</small>
              {on && auto && (
                <span className={s.timer} aria-hidden="true">
                  <span style={{ animationDuration: `${cycleMs}ms` }} />
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
