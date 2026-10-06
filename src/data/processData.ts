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
    shortDesc: 'Deep requirements audit and architectural discovery.',
    details: 'We begin with an in-depth requirement analysis session to understand your business objectives, operational bottlenecks, target audience, and system integrations.',
    deliverables: ['Requirement Specification Document', 'Stakeholder Goals Matrix', 'Technology Feasibility Audit'],
    durationEstimate: 'Sprint 1'
  },
  {
    number: '02',
    title: 'Plan',
    shortDesc: 'System blueprint, data modeling and delivery roadmap.',
    details: 'We formulate the architectural blueprint: database schema modeling, API contract specifications, security protocols, sprint milestones, and exact technical milestones.',
    deliverables: ['System Architecture Diagram', 'Database Schema Models', 'Milestone Schedule & Scope Charter'],
    durationEstimate: 'Sprint 1-2'
  },
  {
    number: '03',
    title: 'Design',
    shortDesc: 'Futuristic UI/UX systems and interactive ergonomics.',
    details: 'Our product designers create intuitive, high-fidelity wireframes, interactive user flows, and a cohesive design system with accessible contrast and micro-interactions.',
    deliverables: ['High-Fidelity Prototypes', 'Design System & Component Library', 'Interactive Clickable Flows'],
    durationEstimate: 'Sprint 2-3'
  },
  {
    number: '04',
    title: 'Develop',
    shortDesc: 'Clean full-stack engineering and modular architecture.',
    details: 'Full-stack engineering using modern, battle-tested technologies. We write modular, well-documented, clean TypeScript code with continuous integration and staging builds.',
    deliverables: ['Modular Codebase', 'Live Staging Environment Access', 'Bi-Weekly Working Sprint Demos'],
    durationEstimate: 'Sprint 3-6'
  },
  {
    number: '05',
    title: 'Test',
    shortDesc: 'Automated QA, cross-device verification and security audits.',
    details: 'Rigorous cross-device quality assurance: functional testing, edge-case validation, responsiveness verification across iOS/Android/desktop, security audits, and load testing.',
    deliverables: ['QA Test Execution Report', 'Lighthouse Performance Scorecard', 'Security Vulnerability Audit'],
    durationEstimate: 'Sprint 6-7'
  },
  {
    number: '06',
    title: 'Launch',
    shortDesc: 'Zero-downtime production deployment and DNS mapping.',
    details: 'Seamless production deployment to cloud infrastructure (Firebase, Google Cloud, AWS, or your preferred host), DNS mapping, SSL certification, and zero-downtime cutover.',
    deliverables: ['Production Cloud Deployment', 'Custom Domain & SSL Provisioning', 'Database Backup Automation'],
    durationEstimate: 'Sprint 7-8'
  },
  {
    number: '07',
    title: 'Scale',
    shortDesc: 'Continuous optimization, feature expansion and cloud scaling.',
    details: 'Our engineering partnership expands post-launch. We provide real-time uptime monitoring, horizontal cloud scaling, security updates, and phased feature rollouts as your user base multiplies.',
    deliverables: ['Uptime Monitoring Alerts', 'Cloud Elasticity Tuning', 'Continuous Engineering Sprints'],
    durationEstimate: 'Continuous'
  }
];
