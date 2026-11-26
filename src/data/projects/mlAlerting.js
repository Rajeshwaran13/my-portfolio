export const mlAlerting = {
  id: 'ml-alerting',
  title: 'ML-Based Alerting Integration',
  category: 'ML Integration',
  accent: '#15803d',
  period: 'Trinity Mobility · Jan 2026 – Present',
  periodStart: '2026-01',
  tagline: 'ML model predictions as first-class rule conditions',
  summary:
    'Integrated ML model predictions into the Rule Engine, loading models and target / probability columns dynamically from the model API.',
  description: [
    'Static thresholds miss a lot. This integration lets a rule fire on what an ML model predicts, not only on raw sensor values.',
    'Available models and their target / probability columns are loaded dynamically from the model API, so new models appear in the rule builder without UI changes. The REST payload for ML conditions was designed alongside the Spring Boot services.',
  ],
  stack: ['React.js', 'Ant Design', 'Spring Boot', 'ML Integration', 'RESTful APIs'],
  highlights: [
    'ML condition type inside the visual rule builder.',
    'Models and target / probability columns loaded dynamically from the model API.',
    'Typed REST payload contract for ML conditions.',
  ],
};
