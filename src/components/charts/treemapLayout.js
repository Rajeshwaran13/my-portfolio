/**
 * Simple recursive binary-split ("slice and dice") treemap — alternates the split
 * axis by whichever side of the remaining box is longer, keeping tiles reasonably
 * square without a full squarified-treemap implementation.
 */
export function squarify(items, x, y, w, h) {
  if (items.length === 0) return [];
  if (items.length === 1) return [{ ...items[0], x, y, w, h }];

  const total = items.reduce((sum, i) => sum + i.value, 0);
  let sumA = 0;
  let splitIdx = 1;
  for (let i = 0; i < items.length; i++) {
    sumA += items[i].value;
    if (sumA >= total / 2) {
      splitIdx = i + 1;
      break;
    }
  }
  splitIdx = Math.max(1, Math.min(splitIdx, items.length - 1));
  const groupA = items.slice(0, splitIdx);
  const groupB = items.slice(splitIdx);
  const fracA = groupA.reduce((sum, i) => sum + i.value, 0) / total;

  if (w >= h) {
    const wA = w * fracA;
    return [...squarify(groupA, x, y, wA, h), ...squarify(groupB, x + wA, y, w - wA, h)];
  }
  const hA = h * fracA;
  return [...squarify(groupA, x, y, w, hA), ...squarify(groupB, x, y + hA, w, h - hA)];
}

/** Count tech usage across projects → top-`limit` tiles laid out in a 100×100 box. */
export function buildTreemap(projects, limit) {
  const counts = new Map();
  for (const p of projects) {
    for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
  }
  const items = Array.from(counts.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
  // Tiles too small for a padded label hide it (the title attribute keeps it on hover).
  return squarify(items, 0, 0, 100, 100).map((r) => ({ ...r, showLabel: r.w >= 18 && r.h >= 20 }));
}
