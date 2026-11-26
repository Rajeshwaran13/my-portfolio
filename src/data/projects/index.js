/**
 * Projects — the two products I built, plus the key contributions (features /
 * tasks) delivered inside them. `id` powers the /projects/:id route for both.
 *
 * Project shape: { id, title, category, featured?, tagline, summary,
 *   description[], stack[], highlights[], ownership?[], outcomes?[],
 *   repo?, demo?, accent, period, periodStart: 'YYYY-MM' }
 * Contributions add `parents: [projectId]` and `icon`.
 */
import { dataflowApp } from './dataflowApp';
import { ruleEngine } from './ruleEngine';
import { flowMonitor, dataMapper, flowApis } from './featureProjects';
import { mlAlerting } from './mlAlerting';

export const projects = [dataflowApp, ruleEngine];

export const contributions = [
  { ...flowMonitor, parents: ['dataflow-app'], icon: 'chart' },
  { ...dataMapper, parents: ['dataflow-app'], icon: 'grid' },
  { ...mlAlerting, parents: ['rule-engine'], icon: 'brain' },
  { ...flowApis, parents: ['dataflow-app', 'rule-engine'], icon: 'plug' },
];

/** Everything with a detail page — used by the router and the chatbot. */
export const allWork = [...projects, ...contributions];

export const projectCategories = [...new Set(projects.map((p) => p.category))];

export const findProject = (id) => allWork.find((p) => p.id === id);

export const contributionsOf = (projectId) =>
  contributions.filter((c) => c.parents.includes(projectId));
