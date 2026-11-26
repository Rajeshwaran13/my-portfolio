/** SkillRadarChart — skill-category radar/hexagon.
 *  Reused by the Analysis page (full) and the chatbot (compact). */
import { useMemo } from 'react';
import { skillGroups } from '@/data/skills';
import AppIcon from '@/components/ui/AppIcon';
import s from './SkillRadarChart.module.css';

const LEVELS = [25, 50, 75, 100];
const fmt = (p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`;

export default function SkillRadarChart({ size = 340, showLabels = true }) {
  const cats = useMemo(
    () =>
      skillGroups
        .map((g) => ({
          title: g.title,
          icon: g.icon,
          avg: Math.round(g.skills.reduce((sum, sk) => sum + sk.level, 0) / g.skills.length),
        }))
        .sort((a, b) => b.avg - a.avg),
    [],
  );

  const center = size / 2;
  const maxR = size * 0.32;
  const point = (i, value) => {
    const angle = (Math.PI * 2 * i) / cats.length - Math.PI / 2;
    const r = (value / 100) * maxR;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  };

  const gridPolygons = LEVELS.map((lvl) => cats.map((_, i) => fmt(point(i, lvl))).join(' '));
  const spokes = cats.map((_, i) => point(i, 100));
  const dataPolygon = cats.map((c, i) => fmt(point(i, c.avg))).join(' ');
  const dataPoints = cats.map((c, i) => ({ ...c, ...point(i, c.avg) }));
  const labels = cats.map((c, i) => {
    const p = point(i, 134);
    return { ...c, leftPct: (p.x / size) * 100, topPct: (p.y / size) * 100 };
  });

  return (
    <div className={s.radarWrap} style={{ maxWidth: `${size}px` }}>
      <svg viewBox={`0 0 ${size} ${size}`} className={s.radarSvg} role="img" aria-label="Skill category radar chart">
        {gridPolygons.map((poly, i) => (
          <polygon key={`grid-${i}`} points={poly} className={s.radarGrid} />
        ))}
        {spokes.map((p, i) => (
          <line key={`spoke-${i}`} x1={center} y1={center} x2={p.x} y2={p.y} className={s.radarSpoke} />
        ))}
        <polygon points={dataPolygon} className={s.radarFill} />
        <polygon points={dataPolygon} className={s.radarStroke} />
        {dataPoints.map((p) => (
          <circle key={p.title} cx={p.x} cy={p.y} r={showLabels ? 5 : 3.5} className={s.radarDot} />
        ))}
      </svg>
      {showLabels &&
        labels.map((l) => (
          <span key={l.title} className={s.radarLabel} style={{ left: `${l.leftPct}%`, top: `${l.topPct}%` }}>
            <AppIcon name={l.icon} size={14} />
            {l.title}
            <b>{l.avg}%</b>
          </span>
        ))}
    </div>
  );
}
