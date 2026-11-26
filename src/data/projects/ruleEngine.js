export const ruleEngine = {
  id: 'rule-engine',
  title: 'Rule Engine — Real-Time IoT Alerting',
  category: 'Stream Processing',
  featured: true,
  accent: '#059669',
  period: 'Trinity Mobility · Jan 2026 – Present',
  periodStart: '2026-01',
  tagline: 'Visual rule builder with 9 condition types and ML-based alerting on live IoT events',
  summary:
    'A visual rule builder supporting 9 condition types with nested AND/OR logic, deployed to a stream-processing service for real-time IoT event processing and ML-based alerting.',
  description: [
    'The Rule Engine lets operators of a Smart City IoT platform express alerting logic visually instead of in code. Rules are composed on a React Flow canvas and deployed to a stream-processing service that evaluates live events coming in over Apache Kafka.',
    'It supports 9 condition types — threshold, aggregation, sliding window, tumbling window, sequence, pattern, health, geo-fence and ML — combined with nested AND/OR logic, so simple thresholds and complex multi-step patterns live in the same builder.',
    'ML model predictions are first-class conditions: models and their target / probability columns are loaded dynamically from the model API. Data-type, numeric and date validation plus a rule versioning and deployment workflow keep invalid rules out of production.',
  ],
  stack: [
    'React.js', 'React Flow', 'Ant Design', 'Spring Boot',
    'Apache Kafka', 'Stream Processing', 'ML Integration',
  ],
  highlights: [
    '9 condition types: threshold, aggregation, sliding/tumbling window, sequence, pattern, health, geo-fence, ML.',
    'Nested AND/OR logic groups.',
    'ML predictions as rule conditions, loaded dynamically from the model API.',
    'Data-type, numeric and date validation before deployment.',
    'Rule versioning and deployment workflow.',
    'REST payload contracts for rule properties, ML conditions and window aggregations.',
  ],
  ownership: [
    'Built the visual rule builder and condition forms.',
    'Integrated the ML model API for dynamic model / column loading.',
    'Added validation and the versioning + deployment workflow.',
    'Designed the REST payload contracts between React and Spring Boot.',
  ],
  outcomes: [
    'Invalid rules are blocked before they reach production.',
    'Operators create complex real-time alerts without writing code.',
  ],
};
