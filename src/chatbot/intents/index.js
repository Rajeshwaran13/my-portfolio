/**
 * Chatbot knowledge base — intents matched by keyword against resume data.
 * Add an intent = append one object to a group file. Each intent:
 *   { id, keywords[], answer(), chart?: 'skills-radar' | 'top-skills', followUps?[], actions?[] }
 * `chart` opts a reply into an inline visualization; `followUps` become the
 * suggestion chips shown after that reply.
 */
import { contactIntents } from './contact';
import { skillIntents } from './skills';
import { workIntents } from './work';
import { backgroundIntents } from './background';
import { actionsById } from './actions';

export { suggestions, getGreeting, fallback } from './base';

export const intents = [...contactIntents, ...skillIntents, ...workIntents, ...backgroundIntents].map(
  (i) => ({ ...i, actions: actionsById[i.id] }),
);
