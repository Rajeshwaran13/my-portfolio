/**
 * NavPill — floating pill nav with a green indicator that slides to the
 * active item (scroll-spy on home, route match on pages).
 */
import { useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSectionNav } from '@/hooks/useNav';
import { menuItems } from './navItems';
import { useActiveSection } from './useActiveSection';
import s from './NavPill.module.css';

const sectionIds = menuItems.filter((i) => i.id).map((i) => i.id);

export default function NavPill() {
  const { pathname } = useLocation();
  const goToSection = useSectionNav();
  const activeId = useActiveSection(sectionIds, pathname === '/');
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState(null);

  const isActive = (item) => (item.to ? pathname === item.to : pathname === '/' && activeId === item.id);
  const activeLabel = menuItems.find(isActive)?.label;

  useLayoutEffect(() => {
    const el = navRef.current?.querySelector(`[data-label="${activeLabel}"]`);
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [activeLabel]);

  const go = (id) => (e) => {
    e.preventDefault();
    goToSection(id);
  };

  return (
    <nav ref={navRef} className={s.pill} aria-label="Primary">
      <span
        className={`${s.indicator} ${indicator ? s.show : ''}`}
        style={indicator ? { transform: `translateX(${indicator.left}px)`, width: indicator.width } : undefined}
        aria-hidden="true"
      />
      {menuItems.map((item) => {
        const cls = `${s.link} ${isActive(item) ? s.active : ''}`;
        const body = item.label;
        return item.to ? (
          <Link key={item.label} to={item.to} data-label={item.label} className={cls}>
            {body}
          </Link>
        ) : (
          <a key={item.label} href={`#${item.id}`} data-label={item.label} className={cls} onClick={go(item.id)}>
            {body}
          </a>
        );
      })}
    </nav>
  );
}
