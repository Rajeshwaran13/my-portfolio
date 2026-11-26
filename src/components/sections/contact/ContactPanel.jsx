/**
 * ContactPanel — deep-green left panel: heading, lead line and compact
 * contact rows (email / phone / LinkedIn / GitHub) with a hover arrow.
 */
import { profile } from '@/data/profile';
import AppIcon from '@/components/ui/AppIcon';
import s from './Contact.module.css';

/** Last path segment of a profile URL, e.g. ".../in/rajesh0613" → "rajesh0613". */
const handle = (url) => url.replace(/\/+$/, '').split('/').pop();

const methods = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phoneDisplay, href: `tel:+${profile.whatsapp}` },
  { icon: 'linkedin', label: 'LinkedIn', value: handle(profile.linkedin), href: profile.linkedin },
  { icon: 'github', label: 'GitHub', value: handle(profile.github), href: profile.github },
];

export default function ContactPanel() {
  return (
    <div className={s.panel}>
      <span className={s.glow} aria-hidden="true" />
      <p className={s.kicker}>Contact</p>
      <h2 className={s.big}>
        Let&apos;s build something <span>together</span>
      </h2>
      <p className={s.lead}>
        Open to full stack, React and Java / Spring Boot roles. Based in {profile.location}.
      </p>

      <ul className={s.methods}>
        {methods.map((m) => (
          <li key={m.label}>
            <a href={m.href} target="_blank" rel="noopener" className={s.method}>
              <span className={s.mIc}>
                <AppIcon name={m.icon} size={17} />
              </span>
              <span className={s.mText}>
                <small>{m.label}</small>
                <strong>{m.value}</strong>
              </span>
              <span className={s.mArrow}>
                <AppIcon name="arrow" size={16} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
