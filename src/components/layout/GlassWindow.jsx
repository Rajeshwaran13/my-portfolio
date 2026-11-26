/** GlassWindow — reusable flat card: title bar + children. */
import s from './GlassWindow.module.css';

export default function GlassWindow({ title, subtitle, className = '', children }) {
  return (
    <div className={`${s.window} surface ${className}`}>
      <div className={s.titlebar}>
        {title && <span className={s.title}>{title}</span>}
        {subtitle && <span className={s.subtitle}>{subtitle}</span>}
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
}
