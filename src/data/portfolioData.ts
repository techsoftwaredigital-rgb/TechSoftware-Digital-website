export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Web Apps' | 'Mobile Apps' | 'Business Software' | 'AI Systems';
  shortDescription: string;
  fullOverview: string;
  technologies: string[];
  metrics: string;
  clientIndustry: string;
  demoUrl: string;
  gradient: string;
  accent: string;
  imageUrl?: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'apex-saas-platform',
    title: 'CloudScale Enterprise SaaS & Telemetry',
    category: 'Business Software',
    shortDescription: 'Multi-tenant cloud infrastructure monitoring platform with real-time distributed telemetry, SLA forecasting, and automated failover.',
    fullOverview: 'Custom enterprise software built for modern tech infrastructure. Integrates real-time event streaming, database query inspection, instant alerting webhooks, and granular team access controls into a single low-latency glass cockpit.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
    metrics: '< 15ms Query Latency · 99.99% Uptime Guarantee',
    clientIndustry: 'Cloud Infrastructure & Enterprise SaaS',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-slate-900/80',
    accent: '#06b6d4',
    imageUrl: '/src/assets/images/portfolio_saas_dashboard_1791023083898.jpg'
  },
  {
    id: 'neural-ai-pipeline',
    title: 'CognitiveFlow Autonomous AI Engine',
    category: 'AI Systems',
    shortDescription: 'Enterprise AI orchestration system combining LLM agents, vector document search, and autonomous business workflows.',
    fullOverview: 'Purpose-built AI platform that parses thousands of unstructured documents, automates cross-department approvals, and provides an internal conversational agent fine-tuned on corporate knowledge with strict zero-leakage security boundaries.',
    technologies: ['Gemini API', 'TypeScript', 'Node.js', 'Vector DB', 'Python'],
    metrics: '85% Faster Document Ingestion · 12,000 Weekly Automations',
    clientIndustry: 'Artificial Intelligence & Automation',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-purple-600/30 via-indigo-500/20 to-slate-900/80',
    accent: '#a855f7',
    imageUrl: '/src/assets/images/portfolio_ai_enterprise_1791023094858.jpg'
  },
  {
    id: 'novapay-mobile-fintech',
    title: 'NovaPay Retail POS & Mobile Wallet',
    category: 'Mobile Apps',
    shortDescription: 'Flagship iOS and Android fintech application featuring offline counter transactions, instant biometric auth, and ledger analytics.',
    fullOverview: 'Modern banking and commerce app designed for merchants and high-volume retail. Features biometric authorization, offline payment buffering with automatic cloud reconciliation, multi-store inventory sync, and hardware barcode scanning.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'PostgreSQL', 'Tailwind CSS'],
    metrics: '< 1.1s Checkout Speed · 4.9 Star App Store Rating',
    clientIndustry: 'Fintech & Retail Systems',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-emerald-600/30 via-teal-500/20 to-slate-900/80',
    accent: '#10b981',
    imageUrl: '/src/assets/images/portfolio_fintech_mobile_1791023106605.jpg'
  },
  {
    id: 'zenith-architecture-portal',
    title: 'Zenith Global Architectural Studio',
    category: 'Websites',
    shortDescription: 'Ultra-minimalist digital headquarters featuring interactive 3D spatial renders, smooth camera transitions, and immersive case study storytelling.',
    fullOverview: 'High-concept international website for a premium architectural engineering studio. Features custom Three.js WebGL building visualizers, sub-second route changes, responsive typography, and global CDN asset delivery.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    metrics: '+180% Engagement Dwell Time · 100/100 Lighthouse Performance',
    clientIndustry: 'Architecture & Design',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-cyan-600/30 via-blue-500/20 to-slate-900/80',
    accent: '#06b6d4',
    imageUrl: '/src/assets/images/hero_neural_core_1791023116628.jpg'
  },
  {
    id: 'solaris-health-portal',
    title: 'Solaris Clinical Health Network',
    category: 'Web Apps',
    shortDescription: 'HIPAA-grade telemedicine web platform with real-time doctor slot scheduling, electronic health records, and prescription dispatch.',
    fullOverview: 'A streamlined web application connecting 14 medical practices. Patients book appointments in 3 clicks, while clinicians generate digital prescriptions with automatic drug-interaction checks.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: '+64% Online Bookings · 0% Scheduling Conflicts',
    clientIndustry: 'Healthcare & Wellness',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-sky-600/30 via-cyan-500/20 to-slate-900/80',
    accent: '#38bdf8'
  },
  {
    id: 'vortex-b2b-procure',
    title: 'Vortex Industrial Supply Portal',
    category: 'Web Apps',
    shortDescription: 'B2B e-commerce procurement hub for precision equipment, custom quotation requests, and supplier credit workflows.',
    fullOverview: 'Comprehensive procurement platform allowing enterprise purchasers to request bespoke multi-tier quotes, upload technical CAD drawings, and negotiate pricing with verified manufacturers.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: '$4.2M Annualized Transaction Volume · 99.98% SLA',
    clientIndustry: 'Heavy Manufacturing & OEM',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-amber-600/30 via-orange-500/20 to-slate-900/80',
    accent: '#f59e0b'
  }
];
