/** Months in a role, inclusive of the start month — 'YYYY-MM' → number. */
export function monthsSince(start, now = new Date()) {
  if (!start) return 0;
  const [y, m] = start.split('-').map(Number);
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m) + 1;
  return Math.max(1, months);
}

/** Two-letter monogram from a company name, e.g. "Trinity Mobility" → "TM". */
export function monogram(name = '') {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
