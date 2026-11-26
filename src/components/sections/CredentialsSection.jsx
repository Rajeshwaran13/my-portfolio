/**
 * CredentialsSection — degree card (CGPA ring) + certification ticket(s) on
 * top, core strengths as three pillars below.
 */
import { education, achievements } from '@/data/experience';
import { certificationList } from '@/data/certifications';
import { reveal } from '@/hooks/reveal';
import DegreeCard from './credentials/DegreeCard';
import CertTicket from './credentials/CertTicket';
import StrengthPillars from './credentials/StrengthPillars';
import s from './credentials/Credentials.module.css';

export default function CredentialsSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow" ref={reveal()}>Credentials</p>
        <h2 className="section-title" ref={reveal()}>Education, certifications & strengths</h2>

        <div className={s.top}>
          {education.map((e) => (
            <DegreeCard key={e.degree} edu={e} />
          ))}
          <div id="certifications" className={s.certs}>
            {certificationList.map((c, i) => (
              <CertTicket key={c.title} cert={c} delay={90 + i * 70} />
            ))}
          </div>
        </div>

        <h3 className={s.subhead} ref={reveal()}>Core strengths</h3>
        <StrengthPillars items={achievements} />
      </div>
    </section>
  );
}
