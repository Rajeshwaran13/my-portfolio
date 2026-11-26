/**
 * ExperienceSection — split layout per role: a deep-green role card (left,
 * sticky on desktop) beside a numbered impact list (right).
 */
import { experience } from '@/data/experience';
import { reveal } from '@/hooks/reveal';
import RoleCard from './experience/RoleCard';
import ImpactList from './experience/ImpactList';
import s from './experience/Experience.module.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow" ref={reveal()}>Experience</p>
        <h2 className="section-title" ref={reveal()}>Where I&apos;ve worked</h2>

        {experience.map((item) => (
          <div key={`${item.org}-${item.role}`} className={s.split}>
            <div className={s.roleCol} ref={reveal()}>
              <RoleCard item={item} />
            </div>
            <ImpactList item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
