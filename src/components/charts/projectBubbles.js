/**
 * Layout math for ProjectComplexityBubble: x = era (chronological), y = stack size,
 * bubble size = highlights documented, color = category.
 * Projects sharing an era are spread evenly across that era's band so they never
 * overlap — important here, since every project currently shares one era.
 */
import { CATEGORY_COLORS } from './categoryColors';

export function buildEras(projects) {
  const seen = new Map();
  for (const p of projects) seen.set(p.period, p.periodStart);
  return Array.from(seen.entries())
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([period]) => period);
}

export function buildBubbles(projects, eras) {
  const stacks = projects.map((p) => p.stack.length);
  const maxStack = Math.max(...stacks);
  const minStack = Math.min(...stacks);
  const stackRange = maxStack - minStack || 1;
  const maxHighlights = Math.max(...projects.map((p) => p.highlights.length), 1);
  const bandWidth = 100 / eras.length;
  const perEra = new Map();
  for (const p of projects) perEra.set(p.period, (perEra.get(p.period) ?? 0) + 1);
  const seenPerEra = new Map();

  return projects.map((p) => {
    const eraIdx = eras.indexOf(p.period);
    const within = seenPerEra.get(p.period) ?? 0;
    seenPerEra.set(p.period, within + 1);
    const n = perEra.get(p.period);
    const spread = n > 1 ? ((within + 0.5) / n - 0.5) * bandWidth * 0.84 : 0;

    return {
      ...p,
      xPct: eraIdx * bandWidth + bandWidth / 2 + spread,
      yPct: 92 - ((p.stack.length - minStack) / stackRange) * 80,
      size: 16 + (p.highlights.length / maxHighlights) * 22,
      color: CATEGORY_COLORS[p.category] ?? 'var(--accent)',
    };
  });
}
