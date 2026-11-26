/** Derived stats for the Analysis page — everything computed from src/data. */
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';
import { projects } from '@/data/projects';
import { education } from '@/data/experience';

export function avgOverallSkill() {
  const all = skillGroups.flatMap((g) => g.skills);
  return Math.round(all.reduce((sum, sk) => sum + sk.level, 0) / all.length);
}

/** "CGPA 7.6" → "7.6" (falls back to the raw score). */
function cgpa() {
  const score = education[0]?.score ?? '';
  return score.match(/\d+(?:\.\d+)?/)?.[0] ?? score;
}

export function buildKpis() {
  return [
    { label: 'Experience', value: `${profile.experienceYears}y` },
    { label: 'Projects Shipped', value: `${projects.length}` },
    { label: 'Avg Skill Level', value: `${avgOverallSkill()}%` },
    { label: 'M.Sc CGPA', value: cgpa() },
  ];
}

/** Projects grouped by period, most recent first (ties keep data order). */
export function buildEras() {
  const map = new Map();
  for (const p of projects) {
    if (!map.has(p.period)) map.set(p.period, { period: p.period, periodStart: p.periodStart, projects: [] });
    map.get(p.period).projects.push(p);
  }
  return Array.from(map.values()).sort((a, b) => b.periodStart.localeCompare(a.periodStart));
}
