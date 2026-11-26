/** Skill-related intents — full breakdown, ranked top skills, short report. */
import { profile } from '@/data/profile';
import { skillGroups, concepts } from '@/data/skills';
import { allWork as projects } from '@/data/projects';
import { yearsLabel } from './base';

const allSkills = () => skillGroups.flatMap((g) => g.skills);

export const skillIntents = [
  {
    id: 'skills',
    keywords: [
      'skill', 'tech', 'stack', 'technolog', 'know', 'good at', 'expertise', 'react', 'java', 'spring',
      'frontend', 'front end', 'backend', 'back end', 'database', 'devops', 'testing', 'proficient',
      'capable', 'strength', 'strong at', 'familiar with', 'toolkit', 'what can you do',
    ],
    chart: 'skills-radar',
    answer: () => {
      const lines = skillGroups
        .map((g) => `• **${g.title}** — ${g.skills.map((s) => s.name).join(', ')}`)
        .join('\n');
      return `${profile.firstName} works across the full stack. Here's the breakdown:\n\n${lines}\n\nConcepts: ${concepts.join(', ')}.`;
    },
    followUps: ["What's your best skill?", 'Give me a report', 'Tell me about your projects'],
  },
  {
    id: 'top-skills',
    keywords: ['best skill', 'strongest skill', 'top skill', 'favorite skill', 'rank your skills'],
    chart: 'top-skills',
    answer: () => {
      const top = [...allSkills()]
        .sort((a, b) => b.level - a.level)
        .slice(0, 3)
        .map((s) => `**${s.name}** (${s.level}%)`)
        .join(', ');
      return `Ranked by self-rated proficiency, ${profile.firstName}'s top skills are ${top}. Here's the ranked list:`;
    },
    followUps: ['What are your skills?', 'Give me a report', 'Tell me about your projects'],
  },
  {
    id: 'report',
    keywords: [
      'report', 'analysis', 'summary', 'self assessment', 'rate yourself', 'overview of you',
      'profile summary', 'sum up', 'tldr',
    ],
    chart: 'skills-radar',
    answer: () => {
      const all = allSkills();
      const avg = Math.round(all.reduce((sum, s) => sum + s.level, 0) / all.length);
      return `Here's the short version: ${yearsLabel()} of professional experience, ${projects.length} projects in this portfolio, and an average self-rated skill level of ${avg}%. The shape below shows strength by skill category — open the full **/analysis** page for the ranked skill list and a project timeline too.`;
    },
    followUps: ['What are your skills?', 'Tell me about your projects', 'How can I contact you?'],
  },
];
