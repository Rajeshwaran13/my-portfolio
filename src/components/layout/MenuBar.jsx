/**
 * MenuBar — three floating pieces: brand tile (left), pill nav with a sliding
 * active indicator (center), action cluster (right).
 */
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import { useSectionNav } from '@/hooks/useNav';
import AppIcon from '@/components/ui/AppIcon';
import ThemeToggle from './ThemeToggle';
import NavPill from './NavPill';
import s from './MenuBar.module.css';

export default function MenuBar({ onOpenPalette }) {
  const goToSection = useSectionNav();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = (e) => {
    e.preventDefault();
    goToSection('top');
  };

  return (
    <header className={`${s.menubar} ${scrolled ? s.scrolled : ''}`}>
      <div className={`${s.bar} container`}>
        <a href="#top" className={s.brand} onClick={goTop} title={profile.name}>
          <span>{profile.initials}</span>
        </a>

        <div className={s.nav}>
          <NavPill />
        </div>

        <div className={s.actions}>
          <button
            className={s.iconBtn}
            type="button"
            aria-label="Search (Ctrl/⌘ + K)"
            title="Search  ·  Ctrl/⌘ K"
            onClick={() => onOpenPalette?.()}
          >
            <AppIcon name="search" size={16} />
          </button>
          <ThemeToggle />
          <span className={s.divider} aria-hidden="true" />
          <a href={profile.resumePath} download className={s.resumeBtn}>
            <AppIcon name="download" size={15} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
