/**
 * HeroPortrait — the framed portrait. portrait → <img>, else photo → <img>,
 * else an empty photo slot of the same frame size.
 */
import { profile } from '@/data/profile';
import AppIcon from '@/components/ui/AppIcon';
import s from './Hero.module.css';

export default function HeroPortrait() {
  if (profile.portrait) {
    return <img src={profile.portrait} alt={profile.name} className={s.portrait} loading="eager" />;
  }
  if (profile.photo) {
    return <img src={profile.photo} alt={profile.name} className={s.portrait} />;
  }
  return (
    <div className="photo-placeholder">
      <AppIcon name="camera" size={28} />
      <span>Photo coming soon</span>
    </div>
  );
}
