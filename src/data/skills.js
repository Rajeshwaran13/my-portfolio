/**
 * Skills — grouped capability cards. `level` (0-100) drives the charts.
 * `variant` picks the chart form: bars | radial | meter | dots | tags | columns.
 * Levels are self-assessed estimates — tune them freely.
 */
export const skillGroups = [
  {
    title: 'Frontend Engineering', icon: 'code', blurb: 'Interactive, data-heavy React UIs.', variant: 'bars',
    skills: [
      { name: 'React.js', level: 88 }, { name: 'React Hooks', level: 86 },
      { name: 'JavaScript (ES6+)', level: 87 }, { name: 'TypeScript', level: 74 },
      { name: 'HTML5 / CSS3', level: 85 }, { name: 'Vite', level: 78 },
    ],
  },
  {
    title: 'UI & Component Systems', icon: 'layout', blurb: 'Canvas builders and design systems.', variant: 'radial',
    skills: [
      { name: 'React Flow', level: 86 }, { name: 'Ant Design', level: 85 },
      { name: 'Micro-Frontends', level: 78 }, { name: 'Bootstrap', level: 76 },
    ],
  },
  {
    title: 'Backend & APIs', icon: 'plug', blurb: 'Spring Boot services and REST contracts.', variant: 'meter',
    skills: [
      { name: 'Java', level: 84 }, { name: 'Spring Boot', level: 82 },
      { name: 'RESTful APIs', level: 86 }, { name: 'Microservices', level: 78 },
      { name: 'Hibernate / JPA', level: 74 }, { name: 'JDBC', level: 74 },
    ],
  },
  {
    title: 'Data & Streaming', icon: 'spark', blurb: 'Real-time IoT pipelines.', variant: 'dots',
    skills: [
      { name: 'Apache NiFi', level: 85 }, { name: 'Apache Kafka', level: 80 },
      { name: 'ETL Pipelines', level: 80 }, { name: 'Stream Processing', level: 78 },
    ],
  },
  {
    title: 'Databases & Storage', icon: 'grid', blurb: 'Document, time-series, graph and SQL.', variant: 'tags',
    skills: [
      { name: 'MongoDB', level: 82 }, { name: 'InfluxDB', level: 76 }, { name: 'Neo4j', level: 70 },
      { name: 'Oracle SQL', level: 74 }, { name: 'MySQL', level: 78 }, { name: 'MinIO (S3)', level: 74 },
    ],
  },
  {
    title: 'DevOps & Testing', icon: 'brain', blurb: 'Quality gates from commit to release.', variant: 'columns',
    skills: [
      { name: 'Git', level: 86 }, { name: 'Jenkins CI/CD', level: 76 }, { name: 'SonarQube', level: 76 },
      { name: 'OWASP', level: 70 }, { name: 'HashiCorp Vault', level: 72 },
      { name: 'Jest / RTL', level: 78 },
    ],
  },
];

/** Concepts — rendered as plain chips. */
export const concepts = ['Multi-Tenant SaaS', 'IoT Platforms', 'Low-Code Platforms', 'ML Model Integration', 'Agile/Scrum'];
