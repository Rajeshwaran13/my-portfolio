/** Skill helpers — tier label from a 0-100 level, and a group's average. */
export function skillTier(level) {
  if (level >= 85) return 'Expert';
  if (level >= 78) return 'Advanced';
  return 'Proficient';
}

export function groupAverage(group) {
  const sum = group.skills.reduce((acc, sk) => acc + sk.level, 0);
  return Math.round(sum / group.skills.length);
}
