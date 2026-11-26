/** ThemeToggle — round icon button; moon (light) ↔ sun (dark) with a spin swap. */
import { useTheme } from '@/hooks/useTheme';
import AppIcon from '@/components/ui/AppIcon';
import s from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      className={`${s.toggle} ${dark ? s.isDark : ''}`}
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      title={dark ? 'Switch to light' : 'Switch to dark'}
      onClick={toggle}
    >
      <span className={`${s.ic} ${s.icMoon}`}>
        <AppIcon name="moon" size={16} />
      </span>
      <span className={`${s.ic} ${s.icSun}`}>
        <AppIcon name="sun" size={17} />
      </span>
    </button>
  );
}
