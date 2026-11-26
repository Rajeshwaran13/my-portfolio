/**
 * HeroActions — primary "Let's talk" pill, two-line icon links (WhatsApp,
 * Resume) and inline text social links with an animated underline.
 */
import { profile, socials, whatsappLink } from '@/data/profile';
import AppIcon from '@/components/ui/AppIcon';
import s from './HeroActions.module.css';

const quick = [
  { label: 'WhatsApp', note: 'Chat instantly', icon: 'chat', href: whatsappLink(), external: true },
  { label: 'Resume', note: 'Download PDF', icon: 'download', href: profile.resumePath, download: true },
];

const shortLabel = (label) => (label === 'Phone' ? 'Call' : label);

export default function HeroActions() {
  return (
    <div className={s.actions}>
      <div className={s.row}>
        <a href="#contact" className={s.talk}>
          <span>Let&apos;s talk</span>
          <span className={s.talkIc}>
            <AppIcon name="arrow" size={16} />
          </span>
        </a>

        {quick.map((q) => (
          <a
            key={q.label}
            href={q.href}
            className={s.quick}
            {...(q.external ? { target: '_blank', rel: 'noopener' } : {})}
            {...(q.download ? { download: true } : {})}
          >
            <span className={s.quickIc}>
              <AppIcon name={q.icon} size={18} />
            </span>
            <span className={s.quickText}>
              <strong>{q.label}</strong>
              <small>{q.note}</small>
            </span>
          </a>
        ))}
      </div>

      <nav className={s.links} aria-label="Social links">
        {socials.map((so) => (
          <a key={so.label} href={so.href} target="_blank" rel="noopener" className={s.link}>
            <AppIcon name={so.icon} size={16} />
            <span>{shortLabel(so.label)}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
