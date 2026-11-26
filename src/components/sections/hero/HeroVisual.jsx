/** HeroVisual — tilting portrait frame with floating stat badges + caption. */
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import AppIcon from '@/components/ui/AppIcon';
import CountUp from '@/components/ui/CountUp';
import HeroPortrait from './HeroPortrait';
import { useTilt } from './useTilt';
import s from './Hero.module.css';

const stats = [
  { value: `${profile.experienceYears}y`, label: 'Experience', icon: 'chart' },
  { value: `${projects.length}`, label: 'Projects', icon: 'layout' },
];

export default function HeroVisual() {
  const { frameTransform, badgeTransform, handleTilt, resetTilt } = useTilt();

  return (
    <div className={s.visual}>
      <div className={s.portraitStage} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
        <div className={s.portraitFrame} style={{ transform: frameTransform }}>
          <HeroPortrait />
        </div>

        <div className={s.badgeLayer} style={{ transform: badgeTransform }}>
          {stats.map((st, i) => (
            <div key={st.label} className={`${s.statBadge} ${s[`badge${i}`]}`}>
              <span className={s.badgeIc}>
                <AppIcon name={st.icon} size={16} />
              </span>
              <span className={s.badgeText}>
                <span className={s.badgeVal}>
                  <CountUp value={st.value} />
                </span>
                <span className={s.badgeLbl}>{st.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className={s.visualCaption}>
        {profile.name} · {profile.location}
      </p>
    </div>
  );
}
