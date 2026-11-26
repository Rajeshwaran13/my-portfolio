/** ContactFooter — copyright line + Certifications / Analysis links. */
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { useSectionNav } from '@/hooks/useNav';
import s from './Contact.module.css';

const year = new Date().getFullYear();

export default function ContactFooter() {
  const goToSection = useSectionNav();

  return (
    <footer className={s.footer}>
      <span>
        Copyrights © {year} {profile.name}
      </span>
      <span className={s.footerLinks}>
        <a
          href="#certifications"
          className={s.footerLink}
          onClick={(e) => {
            e.preventDefault();
            goToSection('certifications');
          }}
        >
          Certifications
        </a>
        <Link to="/analysis" className={s.footerLink}>Analysis</Link>
      </span>
    </footer>
  );
}
