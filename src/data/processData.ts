export interface ProcessStepItem {
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverables: string[];
  durationEstimate: string;
}

export const processData: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    shortDesc: 'Understand the business and requirements.',
    details: 'We begin with an in-depth requirement analysis session to understand your business objectives, operational bottlenecks, target audience, and competitive landscape.',
    deliverables: ['Requirement Specification Document', 'Stakeholder Goals Matrix', 'Technology Feasibility Audit'],
    durationEstimate: 'Week 1'
  },
  {
    number: '02',
    title: 'Plan',
    shortDesc: 'Define features, architecture and project roadmap.',
    details: 'We formulate the architectural blueprint: database schema modeling, API contract specifications, security protocols, sprint milestones, and exact budget allocations.',
    deliverables: ['System Architecture Diagram', 'Database Schema Models', 'Milestone Schedule & Scope Charter'],
    durationEstimate: 'Week 1-2'
  },
  {
    number: '03',
    title: 'Design',
    shortDesc: 'Create modern UI/UX and user flows.',
    details: 'Our product designers create intuitive, high-fidelity wireframes, interactive user flows, and a cohesive design system with accessible contrast and micro-interactions.',
    deliverables: ['Figma Prototypes', 'Design System & Component Library', 'Interactive Clickable Mockups'],
    durationEstimate: 'Week 2-3'
  },
  {
    number: '04',
    title: 'Develop',
    shortDesc: 'Build the website, application or software.',
    details: 'Full-stack engineering using modern, battle-tested technologies. We write modular, well-documented, clean TypeScript code with continuous integration and staging builds.',
    deliverables: ['Modular Codebase', 'Live Staging Environment Access', 'Bi-Weekly Working Sprint Demos'],
    durationEstimate: 'Week 3-6'
  },
  {
    number: '05',
    title: 'Test',
    shortDesc: 'Test functionality, responsiveness, security and performance.',
    details: 'Rigorous cross-device quality assurance: functional testing, edge-case validation, responsiveness verification across iOS/Android/desktop, security audits, and load testing.',
    deliverables: ['QA Test Execution Report', 'Lighthouse Performance Scorecard', 'Security Vulnerability Audit'],
    durationEstimate: 'Week 6-7'
  },
  {
    number: '06',
    title: 'Launch',
    shortDesc: 'Deploy the final product.',
    details: 'Seamless production deployment to cloud infrastructure (Firebase, Cloud Run, AWS, or your preferred host), DNS mapping, SSL certification, and zero-downtime cutover.',
    deliverables: ['Production Cloud Deployment', 'Custom Domain & SSL Provisioning', 'Database Backup Automation'],
    durationEstimate: 'Week 7-8'
  },
  {
    number: '07',
    title: 'Support',
    shortDesc: 'Provide maintenance and future improvements.',
    details: 'Our relationship continues post-launch. We provide real-time uptime monitoring, security patches, performance tuning, and phased feature expansions as your business scales.',
    deliverables: ['Uptime Monitoring Alerts', 'Scheduled Security Patches', 'Dedicated Priority Technical Support'],
    durationEstimate: 'Ongoing'
  }
];
