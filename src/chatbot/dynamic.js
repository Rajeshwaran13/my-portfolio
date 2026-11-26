/**
 * Dynamic answers — built from the project data instead of fixed templates:
 *   • matchProjects(): "tell me about the rule engine" → the right project(s)
 *   • projectsUsing():  "which projects used Kafka?" → stack lookup (./techLookup)
 * Project names are matched on title words that identify a project. Words that
 * are generic or shared by several titles are ignored (STOP), e.g. "data"
 * (DataFlow vs Data Mapper), "real"/"time" (Rule Engine vs Flow Monitor),
 * "iot", "app", "based", "integration".
 */
import { allWork as projects } from '@/data/projects';

export { projectsUsing } from './techLookup';

const STOP = new Set([
  'app', 'low', 'code', 'iot', 'data', 'real', 'time', 'based', 'integration', 'project',
  'application', 'system', 'the', 'and', 'for', 'with',
]);

const words = (s) => s.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

/** Distinctive title words. 2-letter words are kept so "ML" identifies ML-Based Alerting. */
const keyWords = (p) => [...new Set(words(p.title).filter((w) => w.length >= 2 && !STOP.has(w)))];

/** "data flow" / "data-flow" → "dataflow" so it hits DataFlow App, not Data Mapper. */
const canonical = (message) => message.replace(/\bdata[\s-]*flows?\b/gi, 'dataflow');

/** Projects whose distinctive title words appear in the message (best score only). */
export function matchProjects(message) {
  const said = new Set(words(canonical(message)));
  const scored = projects
    .map((p) => ({ p, score: keyWords(p).filter((w) => said.has(w)).length }))
    .filter((x) => x.score > 0);
  const best = Math.max(0, ...scored.map((x) => x.score));
  return scored.filter((x) => x.score === best).map((x) => x.p);
}
