export const dataflowApp = {
  id: 'dataflow-app',
  title: 'DataFlow App — Low-Code IoT Data Pipelines',
  category: 'Data Pipelines',
  featured: true,
  accent: '#16a34a',
  period: 'Trinity Mobility · Jan 2026 – Present',
  periodStart: '2026-01',
  tagline: 'Low-code Apache NiFi pipeline builder for a multi-tenant Smart City IoT platform',
  summary:
    'A low-code Apache NiFi pipeline builder supporting 70+ processors, letting users drag, configure and deploy multi-tenant IoT data flows (Kafka to MongoDB / InfluxDB / MinIO / Neo4j) without writing code.',
  description: [
    'DataFlow App is the data-ingestion workbench of an enterprise, multi-tenant Smart City IoT platform deployed across multiple cities. It turns Apache NiFi into a low-code experience: users drag processors onto a canvas, configure them through generated forms and deploy complete IoT data flows without writing code.',
    'The React Flow canvas supports 70+ NiFi processors with dynamic processor forms, a data mapper with 6 transformation operators and 4 ready-made flow templates, so common Kafka → MongoDB / InfluxDB / MinIO / Neo4j pipelines can be set up in minutes.',
    'On the backend, Spring Boot REST APIs handle flow save, deploy and versioning with HashiCorp Vault-based environment configuration. The UI ships as a micro-frontend (Web Component) so it plugs straight into the wider platform.',
  ],
  stack: [
    'React.js', 'React Flow', 'Ant Design', 'Spring Boot', 'Apache NiFi',
    'Apache Kafka', 'MongoDB', 'InfluxDB', 'MinIO', 'Neo4j', 'HashiCorp Vault',
  ],
  highlights: [
    'Drag-and-drop React Flow canvas supporting 70+ Apache NiFi processors.',
    'Dynamic processor forms generated from processor configuration.',
    'Data mapper with 6 transformation operators.',
    '4 ready-made flow templates for common IoT pipelines.',
    'Real-time Flow Monitor with bulk Start / Stop / Run Once.',
    'Shipped as a micro-frontend (Web Component).',
  ],
  ownership: [
    'Built the canvas, processor forms and data mapper on the React side.',
    'Implemented Spring Boot REST APIs for flow save, deploy and versioning.',
    'Wired Vault-based environment configuration for multi-tenant deployments.',
    'Packaged the UI as a Web Component micro-frontend.',
  ],
  outcomes: [
    'Users build and deploy multi-tenant IoT data flows without writing code.',
    'Bulk processor control replaced one-by-one manual operations.',
  ],
};
