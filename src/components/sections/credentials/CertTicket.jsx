/**
 * CertTicket — certification styled as a ticket: side notches, dashed tear
 * line and a slowly spinning seal. Links to the image when one is set.
 */
import AppIcon from '@/components/ui/AppIcon';
import { reveal } from '@/hooks/reveal';
import s from './Credentials.module.css';

export default function CertTicket({ cert: c, delay }) {
  return (
    <article className={`${s.card} ${s.ticket}`} ref={reveal(delay)}>
      <div className={s.ticketMain}>
        <span className={s.kicker}>
          <AppIcon name="award" size={15} /> Certification
        </span>
        <h3>{c.title}</h3>
        <p className={s.issuer}>{c.issuer}</p>
        {(c.note || c.date) && (
          <span className={s.note}>{[c.note, c.date].filter(Boolean).join(' · ')}</span>
        )}
        {c.image && (
          <a href={c.image} target="_blank" rel="noopener" className={s.view}>
            View certificate <AppIcon name="external" size={14} />
          </a>
        )}
      </div>

      <div className={s.ticketStub} aria-hidden="true">
        <span className={s.seal}>
          <span className={s.sealRing} />
          <AppIcon name="award" size={30} />
        </span>
        <span className={s.verified}>Certified</span>
      </div>
    </article>
  );
}
