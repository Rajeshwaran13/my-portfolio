/**
 * projectsUsing() — "which projects used React?" → { tech, list }.
 * Each stack entry also answers to a short alias, so "React" finds React.js /
 * React Flow, "Kafka" finds Apache Kafka and "Vault" finds HashiCorp Vault.
 */
import { allWork as projects } from '@/data/projects';

const ASKING =
  /\b(which|what|where|who)\b.*\b(project|app|built|used|using|worked)|\b(used|using|built with|worked with)\b/;

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Lower-case names a stack entry answers to. */
function aliases(tech) {
  const t = tech.toLowerCase();
  const short = t.replace(/\.js$/, '').replace(/^(apache|hashicorp)\s+/, '');
  const first = t.split(/[\s.]/)[0];
  return [...new Set([t, short, first])].filter((a) => a.length >= 3);
}

const mentions = (text, name) => new RegExp(`(^|[^a-z0-9])${escape(name)}([^a-z0-9]|$)`).test(text);

export function projectsUsing(message) {
  const text = message.toLowerCase();
  if (!ASKING.test(text)) return null;

  const stack = [...new Set(projects.flatMap((p) => p.stack))];
  const hits = stack
    .flatMap((tech) => aliases(tech).map((name) => ({ tech, name })))
    .filter((h) => mentions(text, h.name))
    .sort((a, b) => b.name.length - a.name.length);
  const best = hits[0];
  if (!best) return null;

  // Exact stack name if fully typed, otherwise the alias in title case (e.g. "React").
  const label = best.name === best.tech.toLowerCase()
    ? best.tech
    : best.name.replace(/\b[a-z]/g, (c) => c.toUpperCase());
  const list = projects.filter((p) => p.stack.some((s) => aliases(s).includes(best.name)));
  return { tech: label, list };
}
