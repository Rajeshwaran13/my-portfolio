/** Project reply text — short brief and "tell me more" deep dive, built from project data. */
import { profile } from '@/data/profile';

export function projectBrief(p) {
  return `**${p.title}** (${p.category}, ${p.period})\n${p.tagline}.\n\n${p.summary}\n\nBuilt with: ${p.stack.join(', ')}.`;
}

const bullets = (title, xs) => (xs?.length ? `\n\n**${title}**\n${xs.map((x) => `• ${x}`).join('\n')}` : '');

export function projectDeep(p) {
  return `More on **${p.title}**:${bullets('Highlights', p.highlights)}${bullets(`What ${profile.firstName} did`, p.ownership)}${bullets('Outcomes', p.outcomes)}`;
}
