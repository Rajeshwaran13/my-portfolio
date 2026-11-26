const PERIOD = 'Trinity Mobility · Jan 2026 – Present';

export const flowMonitor = {
  id: 'flow-monitor',
  title: 'Real-Time Flow Monitor',
  category: 'React / Front-End',
  accent: '#0d9488',
  period: PERIOD,
  periodStart: '2026-01',
  tagline: 'Bulk Start / Stop / Run Once across many NiFi processors at once',
  summary:
    'A real-time monitor for deployed NiFi flows with bulk Start / Stop / Run Once on multiple processors at once, replacing one-by-one manual control.',
  description: [
    'Part of DataFlow App: once a pipeline is deployed, the Flow Monitor shows its processors in real time and lets users act on many of them together.',
    'Bulk Start, Stop and Run Once across multiple NiFi processors replaced the previous one-by-one manual control, making day-to-day pipeline operations much faster.',
  ],
  stack: ['React.js', 'Ant Design', 'Apache NiFi', 'Spring Boot', 'RESTful APIs'],
  highlights: [
    'Real-time processor status for deployed flows.',
    'Bulk Start / Stop / Run Once on multiple processors.',
    'Replaced one-by-one manual processor control.',
  ],
};

export const dataMapper = {
  id: 'data-mapper-templates',
  title: 'Data Mapper & Flow Templates',
  category: 'React / Front-End',
  accent: '#65a30d',
  period: PERIOD,
  periodStart: '2026-01',
  tagline: 'Dynamic processor forms, 6 transformation operators and 4 ready-made templates',
  summary:
    'The configuration layer of DataFlow App: dynamic processor forms, a data mapper with 6 transformation operators and 4 ready-made flow templates.',
  description: [
    'Every NiFi processor has its own configuration surface. Instead of hand-building 70+ forms, processor forms are generated dynamically on the React Flow canvas.',
    'A data mapper with 6 transformation operators shapes payloads between source and sink, and 4 ready-made flow templates give users a working pipeline to start from.',
  ],
  stack: ['React.js', 'React Flow', 'Ant Design', 'Apache NiFi'],
  highlights: [
    'Dynamic processor forms for 70+ processors.',
    'Data mapper with 6 transformation operators.',
    '4 ready-made flow templates.',
  ],
};

export const flowApis = {
  id: 'flow-versioning-apis',
  title: 'Flow & Rule Versioning APIs',
  category: 'Backend / APIs',
  accent: '#0891b2',
  period: PERIOD,
  periodStart: '2026-01',
  tagline: 'Spring Boot REST APIs for save, deploy and versioning with Vault config',
  summary:
    'Spring Boot REST APIs for flow save, deploy and versioning with HashiCorp Vault-based environment configuration, plus the REST payload contracts behind the Rule Engine.',
  description: [
    'Behind both DataFlow App and the Rule Engine sit Spring Boot services that save, version and deploy what users build in the UI, with environment configuration resolved from HashiCorp Vault for each tenant.',
    'I designed the REST payload contracts between the React UI and Spring Boot services for rule properties, ML conditions and window aggregations.',
  ],
  stack: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'HashiCorp Vault', 'MongoDB'],
  highlights: [
    'Flow save, deploy and versioning endpoints.',
    'Vault-based environment configuration.',
    'Payload contracts for rule properties, ML conditions and window aggregations.',
  ],
};
