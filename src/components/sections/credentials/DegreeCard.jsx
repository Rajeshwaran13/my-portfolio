/**
 * DegreeCard — animated CGPA ring (fills when scrolled into view) beside the
 * degree, institution and years; large faded cap icon as a watermark.
 */
import AppIcon from '@/components/ui/AppIcon';
import CountUp from '@/components/ui/CountUp';
import { reveal } from '@/hooks/reveal';
import s from './Credentials.module.css';

const R = 52;
const CIRC = 2 * Math.PI * R;

export default function DegreeCard({ edu }) {
  const cgpa = parseFloat(edu.score.replace(/[^\d.]/g, '')) || 0;
  const offset = CIRC * (1 - Math.min(cgpa / 10, 1));

  return (
    <article className={`${s.card} ${s.degree}`} ref={reveal()}>
      <span className={s.watermark} aria-hidden="true">
        <AppIcon name="cap" size={190} />
      </span>
      <span className={s.kicker}>
        <AppIcon name="cap" size={15} /> Education
      </span>

      <div className={s.degreeRow}>
        <div className={s.ring} style={{ '--off': offset, '--circ': CIRC }}>
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r={R} className={s.ringTrack} />
            <circle cx="60" cy="60" r={R} className={s.ringFill} />
          </svg>
          <span className={s.ringText}>
            <strong>
              <CountUp value={String(cgpa)} />
            </strong>
            <small>CGPA / 10</small>
          </span>
        </div>

        <div className={s.degreeText}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          {edu.period && (
            <span className={s.period}>
              <AppIcon name="calendar" size={14} /> {edu.period}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
