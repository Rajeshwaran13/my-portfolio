import { certificationList } from './certifications';

/** Experience timeline + education + certifications + strengths. */
export const experience = [
  {
    role: 'Software Engineer – Full Stack',
    org: 'Trinity Mobility Pvt. Ltd. · Bengaluru',
    period: 'Jan 2026 – Present',
    /** 'YYYY-MM' — drives the live "months in role" counter. */
    start: '2026-01',
    company: 'Trinity Mobility Pvt. Ltd.',
    location: 'Bengaluru',
    /** Short headline per bullet in `points` (same order). */
    pointTitles: ['Platform delivery', 'DataFlow App', 'Rule Engine', 'APIs & micro-frontends', 'Ownership & quality'],
    pointIcons: ['grid', 'layout', 'spark', 'plug', 'award'],
    points: [
      'Deliver end-to-end features across UI and backend services for an enterprise, multi-tenant Smart City IoT platform deployed across multiple cities.',
      'Built DataFlow App — a low-code Apache NiFi pipeline builder supporting 70+ processors, with a React Flow canvas, data mapper and real-time Flow Monitor.',
      'Built the Rule Engine — a visual rule builder with 9 condition types, nested AND/OR logic and ML-based alerting, deployed to a stream-processing service.',
      'Implemented Spring Boot REST APIs for save, deploy and versioning with Vault-based configuration; shipped UIs as micro-frontends (Web Components).',
      'Own features from requirement to production release in Agile/Scrum sprints, with Jest / RTL tests and Jenkins CI/CD quality gates (SonarQube, OWASP).',
    ],
    tags: ['React.js', 'React Flow', 'Spring Boot', 'Apache NiFi', 'Apache Kafka', 'MongoDB', 'Jenkins'],
  },
];

export const education = [
  { degree: 'M.Sc. Computer Science', institution: 'The American College, Madurai', score: 'CGPA 7.6', period: '2023 – 2025' },
];

/** Flat title list — used by the chatbot. Full details live in certifications.js. */
export const certifications = certificationList.map((c) =>
  c.issuer ? `${c.title} — ${c.issuer}` : c.title,
);

/** Core strengths (shown where the reference shows achievements). */
export const achievements = [
  {
    rank: 'DSA',
    title: 'Data Structures & Algorithms',
    detail: 'Strong problem-solving with Arrays, HashMaps, Lists, Stacks, Queues, Sorting and Searching; applied in optimizing application logic.',
  },
  {
    rank: 'Git',
    title: 'Version Control',
    detail: 'Git and GitHub/Bitbucket workflows — branching, pull requests, code reviews and merge-conflict resolution in team projects.',
  },
  {
    rank: 'CI',
    title: 'Quality Gates',
    detail: 'Jenkins CI/CD pipelines with SonarQube and OWASP checks, plus Jest / React Testing Library unit tests.',
  },
];

export const languages = ['English', 'Tamil'];
