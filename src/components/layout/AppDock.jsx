/** AppDock — floating macOS dock for quick section navigation with hover magnify. */
import { NavLink } from 'react-router-dom';
import { useSectionNav } from '@/hooks/useNav';
import AppIcon from '@/components/ui/AppIcon';
import { dockItems } from './navItems';
import s from './AppDock.module.css';

function DockInner({ item }) {
  return (
    <>
      <span className={s.tip}>{item.label}</span>
      <AppIcon name={item.icon} size={22} />
    </>
  );
}

export default function AppDock() {
  const goToSection = useSectionNav();

  return (
    <nav className={`${s.dock} surface`} aria-label="Section navigation">
      {dockItems.map((item) =>
        item.to ? (
          <NavLink
            key={item.label}
            to={item.to}
            end
            aria-label={item.label}
            className={({ isActive }) => `${s.dockItem} ${isActive ? s.routeActive : ''}`}
          >
            <DockInner item={item} />
          </NavLink>
        ) : (
          <a
            key={item.label}
            href={`#${item.id}`}
            aria-label={item.label}
            className={s.dockItem}
            onClick={(e) => {
              e.preventDefault();
              goToSection(item.id);
            }}
          >
            <DockInner item={item} />
          </a>
        ),
      )}
    </nav>
  );
}
