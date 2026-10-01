export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Web Apps' | 'Mobile Apps' | 'Business Software';
  shortDescription: string;
  fullOverview: string;
  technologies: string[];
  metrics: string;
  clientIndustry: string;
  demoUrl: string;
  gradient: string;
  accent: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'apex-logistics',
    title: 'Apex Freight & Fleet Management',
    category: 'Business Software',
    shortDescription: 'Multi-branch logistics ERP with real-time GPS tracking, vehicle trip sheets, and automated fuel audit logs.',
    fullOverview: 'Custom enterprise software built for an interstate trucking and warehousing firm. Unifies consignment notes, driver manifest dispatch, toll expense reconciliation, and automated customer SMS tracking into one low-latency control tower.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
    metrics: '-38% Dispatch Latency · 100% Paperless Trip Audits',
    clientIndustry: 'Logistics & Supply Chain',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-slate-900/80',
    accent: '#06b6d4'
  },
  {
    id: 'solaris-health',
    title: 'Solaris Clinical Clinic Network',
    category: 'Web Apps',
    shortDescription: 'HIPAA-grade telemedicine portal with doctor slot scheduling, electronic health records, and prescription dispatch.',
    fullOverview: 'A streamlined web application connecting 14 medical practices. Patients book appointments in 3 clicks, while clinicians generate digital prescriptions with automatic drug-interaction checks.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: '+64% Online Bookings · 0% Double Booking Conflicts',
    clientIndustry: 'Healthcare & Wellness',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-emerald-600/30 via-teal-500/20 to-slate-900/80',
    accent: '#10b981'
  },
  {
    id: 'zenith-luxury',
    title: 'Zenith Architectural Studio',
    category: 'Websites',
    shortDescription: 'Ultra-minimalist digital showcase with interactive 3D spatial renders, smooth page transitions, and case study storytelling.',
    fullOverview: 'High-concept international website for a premium architectural engineering firm. Features custom WebGL project reveals, high-resolution architectural photography caching, and responsive typography.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'TypeScript'],
    metrics: '+180% Engagement Dwell Time · 99/100 Lighthouse Performance',
    clientIndustry: 'Architecture & Real Estate',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-amber-600/30 via-orange-500/20 to-slate-900/80',
    accent: '#f59e0b'
  },
  {
    id: 'swift-pay-pos',
    title: 'NovaRetail Smart Billing & POS',
    category: 'Business Software',
    shortDescription: 'High-speed retail counter billing software with offline fallback, barcode scanning, and multi-tier loyalty points.',
    fullOverview: 'Engineered for high-volume retail chains handling up to 1,200 checkouts per hour per store. Works seamlessly without an active internet connection and auto-syncs to the central cloud server once restored.',
    technologies: ['React', 'Node.js', 'SQLite Local / Cloud PostgreSQL', 'TypeScript'],
    metrics: '< 1.2s Average Checkout Speed · 14,000 Daily Orders',
    clientIndustry: 'Retail & Supermarkets',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-violet-600/30 via-purple-500/20 to-slate-900/80',
    accent: '#8b5cf6'
  },
  {
    id: 'orbit-fit',
    title: 'PulseTrack Fitness & Gym Companion',
    category: 'Mobile Apps',
    shortDescription: 'Cross-platform mobile application featuring interactive workout logging, coach video feedback, and biometric sync.',
    fullOverview: 'Modern mobile app built for both iOS and Android. Integrates with Bluetooth heart rate straps and smartwatches, delivering tailored workout intervals and habit-tracking gamification.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'FCM'],
    metrics: '4.8 Star App Store Rating · 45,000 Active Monthly Users',
    clientIndustry: 'Fitness & Consumer Tech',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-rose-600/30 via-pink-500/20 to-slate-900/80',
    accent: '#f43f5e'
  },
  {
    id: 'vortex-b2b',
    title: 'Vortex Industrial Marketplace',
    category: 'Web Apps',
    shortDescription: 'B2B e-commerce procurement hub for precision equipment, custom quotation requests, and supplier credit workflows.',
    fullOverview: 'Comprehensive procurement platform allowing enterprise purchasers to request bespoke multi-tier quotes, upload technical CAD drawings, and negotiate pricing with verified manufacturers.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: '$3.2M Annualized Transaction Volume · 99.98% Uptime',
    clientIndustry: 'Heavy Manufacturing & OEM',
    demoUrl: 'https://ts-devloper.web.app/',
    gradient: 'from-cyan-600/30 via-blue-500/20 to-slate-900/80',
    accent: '#06b6d4'
  }
];
