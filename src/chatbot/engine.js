/**
 * Chatbot engine — scored keyword intents plus the smart layer (./smart).
 * A reply is { text, intent, chart?, followUps[], actions? }.
 *
 * `askBot()` is the single seam for a future real-AI upgrade: replace its body
 * with a fetch to a serverless endpoint and nothing else needs to change.
 */
import { intents, fallback, suggestions, getGreeting } from './knowledge';
import { smartReply, memory } from './smart';
import { allWork as projects } from '@/data/projects';
import { profile } from '@/data/profile';

export function resetMemory() {
  memory.name = undefined;
  memory.last = undefined;
}
export const rememberedName = () => memory.name;

const normalize = (input) => input.toLowerCase().replace(/[^\w\s]/g, ' ');

/** Returns the best-matching intent by keyword hit count, or null. */
function matchIntent(input) {
  const text = ` ${normalize(input)} `;
  let best = null;
  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) if (text.includes(kw)) score += kw.length; // longer keywords weigh more
    if (score > 0 && (!best || score > best.score)) best = { score, intent };
  }
  return best?.intent ?? null;
}

/** Typing time scales with reply length so short answers feel instant. */
export const typingDelay = (text) => 350 + Math.min(text.length * 3, 800);

export async function askBot(message) {
  const smart = smartReply(message);
  if (smart) return smart;

  const intent = matchIntent(message);
  if (intent) {
    const hello = intent.id === 'greeting' ? getGreeting(memory.name) : undefined;
    return {
      text: hello ?? intent.answer(),
      intent: intent.id,
      chart: intent.chart,
      followUps: intent.followUps ?? suggestions,
      actions: intent.actions,
    };
  }
  return {
    text: `${fallback}\n\nI know all ${projects.length} of ${profile.firstName}'s projects — ask by name, like **DataFlow** or **Rule Engine**.`,
    intent: 'fallback',
    followUps: suggestions,
  };
}
