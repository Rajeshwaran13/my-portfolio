/** HeroIntro — name, title, copy, then actions + social links (staggered entrance). */
import { profile } from '@/data/profile';
import HeroActions from './HeroActions';
import s from './Hero.module.css';

export default function HeroIntro() {
  return (
    <div className={s.intro}>
      <h1 className={s.name}>
        <span className={s.hello}>Hi, I&apos;m</span>
        {profile.name}
      </h1>
      <p className={s.role}>{profile.title}</p>

      <div className={s.copy}>
        <p className={s.sub}>{profile.subtitle}</p>
        <p className={s.tagline}>{profile.tagline}</p>
      </div>

      <HeroActions />
    </div>
  );
}
