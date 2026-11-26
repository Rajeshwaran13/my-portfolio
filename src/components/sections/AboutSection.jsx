/** AboutSection — career summary + highlight chips. */
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { reveal } from '@/hooks/reveal';
import CountUp from '@/components/ui/CountUp';
import s from './AboutSection.module.css';

const focus = ['React.js SPAs', 'Spring Boot APIs', 'Apache NiFi / Kafka pipelines', 'ML-driven alerting'];
const current = experience[0];
const highlights = [
  { value: '70+', label: 'NiFi processors' },
  { value: '9', label: 'Rule condition types' },
  { value: '6', label: 'Mapper operators' },
  { value: '4', label: 'Flow templates' },
];

function ChipRow({ label, items }) {
  return (
    <div className={s.row}>
      <span className={s.k}>{label}</span>
      <div className={s.chips}>
        {items.map((it) => (
          <span key={it} className="chip">{it}</span>
        ))}
      </div>
    </div>
  );
}

function TextRow({ label, value }) {
  return (
    <div className={s.row}>
      <span className={s.k}>{label}</span>
      <span className={s.v}>{value}</span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow" ref={reveal()}>About</p>
        <h2 className="section-title" ref={reveal()}>Building solutions, end to end</h2>

        <div className={s.aboutGrid}>
          <div className={`${s.aboutText} surface`} ref={reveal()}>
            <p>{profile.about}</p>
            <div className={s.stats}>
              {highlights.map((h) => (
                <div key={h.label} className={s.stat}>
                  <strong>
                    <CountUp value={h.value} />
                  </strong>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className={`${s.side} surface`} ref={reveal(120)}>
            <ChipRow label="Focus" items={focus} />
            {current && <TextRow label="Currently" value={`${current.role} · ${current.org}`} />}
            <TextRow label="Based in" value={profile.location} />
          </aside>
        </div>
      </div>
    </section>
  );
}
