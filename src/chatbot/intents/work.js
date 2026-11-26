/** Work intents — featured case studies, project list, experience. */
import { profile } from '@/data/profile';
import { projects, contributions } from '@/data/projects';
import { experience } from '@/data/experience';
import { yearsLabel } from './base';

const featured = () => projects.filter((p) => p.featured);

export const workIntents = [
  {
    id: 'featured',
    keywords: ['featured', 'case study', 'flagship', 'main project', 'biggest project', 'best project'],
    answer: () => {
      const list = featured()
        .map((p) => `**${p.title}** — ${p.tagline}.\n${p.summary}`)
        .join('\n\n');
      return `${profile.firstName}'s featured case studies:\n\n${list}\n\nAsk about either by name for the stack and details.`;
    },
    followUps: ['Tell me about DataFlow', 'Tell me about the Rule Engine', 'What are your skills?'],
  },
  {
    id: 'projects',
    keywords: [
      'project', 'work', 'built', 'portfolio', 'app', 'pipeline', 'case studies', 'shipped', 'examples',
      'showcase', 'what have you made',
    ],
    answer: () => {
      const list = projects.map((p) => `• **${p.title}** — ${p.tagline}`).join('\n');
      const feats = contributions.map((c) => `• **${c.title}** — ${c.tagline}`).join('\n');
      return `${profile.firstName} built two products:\n\n${list}\n\nKey contributions inside them:\n\n${feats}`;
    },
    followUps: ['Tell me about DataFlow', 'Tell me about the Rule Engine', 'Give me a report'],
  },
  {
    id: 'experience',
    keywords: [
      'experience', 'job', 'career', 'worked', 'role', 'company', 'years', 'background', 'history',
      'employment', 'trinity', 'current',
    ],
    answer: () => {
      const list = experience
        .map((e) => `• **${e.role}** at ${e.org} (${e.period})\n${e.points.map((x) => `  – ${x}`).join('\n')}`)
        .join('\n\n');
      return `${profile.firstName} has ${yearsLabel()} of professional experience:\n\n${list}`;
    },
    followUps: ['What are your skills?', 'Are you available for hire?', 'Where are you based?'],
  },
];
