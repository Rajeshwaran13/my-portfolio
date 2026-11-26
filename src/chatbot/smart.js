/**
 * Smart layer — runs before keyword intents:
 *   1. remembers the visitor's name and the last project discussed
 *   2. answers about a named project, or "which projects used <tech>?"
 *   3. "tell me more" drills into the last project
 */
import { suggestions } from './knowledge';
import { matchProjects, projectsUsing } from './dynamic';
import { projectBrief, projectDeep } from './projectText';
import { profile } from '@/data/profile';

export const memory = { name: undefined, last: undefined };

const NAME = /\b(?:my name is|call me|i am called)\s+([a-z]{2,20})\b/i;
const MORE = /^(?:more|tell me more|more details?|go on|elaborate|details?|what else)(?: about (?:it|that|this))?\??$/;

const projectActions = (p) => [
  { label: 'Open case study', to: `/projects/${p.id}` },
  ...(p.repo ? [{ label: 'Source code', href: p.repo }] : []),
  ...(p.demo ? [{ label: 'Live preview', href: p.demo }] : []),
];

const shortTitle = (p) => p.title.split(' — ')[0];
const listOf = (ps) => ps.map((p) => `• **${p.title}** — ${p.tagline}`).join('\n');

function projectReply(p, text, followUps) {
  memory.last = p;
  return { text, intent: `project:${p.id}`, followUps, actions: projectActions(p) };
}

export function smartReply(message) {
  const lower = message.trim().toLowerCase();

  const nameHit = message.match(NAME);
  if (nameHit) {
    memory.name = nameHit[1][0].toUpperCase() + nameHit[1].slice(1).toLowerCase();
    return { text: `Nice to meet you, **${memory.name}**! 😊 What would you like to know about ${profile.firstName}?`, intent: 'name', followUps: suggestions };
  }

  if (memory.last && MORE.test(lower)) {
    const p = memory.last;
    return projectReply(p, projectDeep(p), ['Which projects used React?', 'Tell me about your projects', 'Hire me']);
  }

  const using = projectsUsing(message);
  if (using) {
    const n = using.list.length;
    return {
      text: `**${using.tech}** shows up in ${n} project${n === 1 ? '' : 's'}:\n\n${listOf(using.list)}`,
      intent: 'tech',
      followUps: using.list.slice(0, 2).map((p) => `Tell me about ${shortTitle(p)}`).concat('What are your skills?'),
      actions: [{ label: 'Open Projects', section: 'projects' }],
    };
  }

  const found = matchProjects(message);
  if (found.length === 1) {
    const text = `${projectBrief(found[0])}\n\nWant the details? Just say **tell me more**.`;
    return projectReply(found[0], text, ['Tell me more', 'Tell me about your projects', 'Hire me']);
  }
  if (found.length > 1) {
    return {
      text: `A few projects match:\n\n${listOf(found)}\n\nWhich one should I open up?`,
      intent: 'project-choice',
      followUps: found.slice(0, 3).map((p) => `Tell me about ${shortTitle(p)}`),
    };
  }
  return null;
}
