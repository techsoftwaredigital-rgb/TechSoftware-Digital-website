export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'websites',
    title: 'WEBSITES',
    shortDescription: 'Modern responsive websites designed for businesses, brands and global enterprises.',
    fullDescription: 'We engineer ultra-fast, visually commanding websites built to convert visitors into loyal clients. Custom-crafted with responsive layouts, fluid typography, modern animation systems, and search engine optimization built-in from the ground up.',
    features: [
      'High-performance responsive design across mobile, tablet, and desktop',
      'SEO optimization with rich structured data and meta-tag architecture',
      'Custom animations and micro-interactions for elevated brand presence',
      'Speed-optimized code delivering sub-second page loads'
    ],
    deliverables: ['Custom UI/UX Theme', 'Full Source Code', 'CMS or Headless Setup', 'Analytics & Domain Wiring'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    iconName: 'Globe'
  },
  {
    id: 'web-applications',
    title: 'WEB APPLICATIONS',
    shortDescription: 'Custom business workflow platforms, client portals and scalable web applications.',
    fullDescription: 'From client self-service portals to data-intensive operational management platforms, we architect resilient web applications that streamline operations and support complex transactional workflows with enterprise-grade stability.',
    features: [
      'Secure role-based authentication and granular permission management',
      'Real-time data synchronization and live event processing',
      'Intuitive dashboard layouts with interactive reporting and charts',
      'Resilient RESTful and GraphQL backend integration'
    ],
    deliverables: ['Full-Stack Web Application', 'Admin Console', 'API Endpoints', 'Database Migration Scripts'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'Express'],
    iconName: 'LayoutGrid'
  },
  {
    id: 'business-software',
    title: 'BUSINESS SOFTWARE',
    shortDescription: 'Custom ERP, CRM, POS, inventory, billing and business management systems.',
    fullDescription: 'Replace chaotic spreadsheets and fragmented SaaS subscriptions with a single cohesive operational engine designed around your exact business logic, billing tiers, inventory lifecycles, and staff hierarchies.',
    features: [
      'Automated invoice generation, tax computation, and digital receipts',
      'Multi-warehouse stock control with barcode and SKU management',
      'Integrated ledger, payment reconciliation, and expense tracking',
      'Automated notifications via SMS, WhatsApp, and email'
    ],
    deliverables: ['Operational Dashboard', 'Billing & POS Modules', 'PDF Generator Engine', 'Role Access Management'],
    technologies: ['Node.js', 'PostgreSQL', 'Express', 'React', 'Tailwind CSS'],
    iconName: 'Building2'
  },
  {
    id: 'android-apps',
    title: 'ANDROID APPS',
    shortDescription: 'High-performance Android applications with modern material aesthetics and offline support.',
    fullDescription: 'Native and cross-platform Android applications crafted to deliver fluid 60fps animations, intuitive gesture navigation, offline reliability, background workers, and seamless Google Play integration.',
    features: [
      'Native runtime speed optimized for all screen densities and devices',
      'Offline-first architecture with local cache synchronization',
      'Firebase Cloud Messaging and push notification pipelines',
      'Secure biometric authentication and Google Pay payment integration'
    ],
    deliverables: ['Compiled App Bundles (APK & AAB)', 'Play Store Deployment Support', 'API Backend Endpoints'],
    technologies: ['Kotlin', 'React Native', 'TypeScript', 'Firebase'],
    iconName: 'Smartphone'
  },
  {
    id: 'ios-apps',
    title: 'iOS APPS',
    shortDescription: 'Premium iOS applications crafted to Apple Human Interface Guidelines standards.',
    fullDescription: 'Elegant, ultra-fluid iOS applications engineered for iPhone and iPad. Leverages hardware capabilities, Apple Pay, FaceID biometric security, and fluid interactive gestures.',
    features: [
      'Apple Human Interface Guidelines compliance and luxury aesthetics',
      'Haptic feedback and custom fluid interactive transitions',
      'Biometric authentication (Face ID / Touch ID) and Apple Pay',
      'Seamless App Store submission and TestFlight staging'
    ],
    deliverables: ['Xcode Project & IPA Builds', 'App Store Connect Setup', 'TestFlight Staging Access'],
    technologies: ['Swift', 'React Native', 'TypeScript', 'Apple Pay'],
    iconName: 'Smartphone'
  },
  {
    id: 'saas-platforms',
    title: 'SAAS PLATFORMS',
    shortDescription: 'Scalable multi-tenant SaaS platforms with automated billing and team isolation.',
    fullDescription: 'End-to-end multi-tenant SaaS architecture engineered for fast user onboarding, tiered subscription billing, usage metering, data isolation, and smooth horizontal scaling.',
    features: [
      'Multi-tenant data isolation and organization team switching',
      'Subscription lifecycle handling with automated recurring billing',
      'Granular audit trails and compliance-ready security logging',
      'Developer API keys and webhook dispatch system'
    ],
    deliverables: ['Multi-tenant Web Application', 'Billing Portal', 'API Documentation', 'Monitoring Setup'],
    technologies: ['Next.js', 'Node.js', 'Docker', 'PostgreSQL', 'Redis'],
    iconName: 'Cloud'
  },
  {
    id: 'ai-solutions',
    title: 'AI SOLUTIONS',
    shortDescription: 'AI-powered assistants, automated neural workflows and intelligent business tools.',
    fullDescription: 'Harness practical, high-impact machine learning and Gemini LLM capabilities to automate customer inquiries, summarize documents, parse financial receipts, and provide predictive intelligence directly within your workflows.',
    features: [
      'Domain-tuned conversational assistants for 24/7 customer support',
      'Automated document extraction (invoices, contracts, identification)',
      'Intelligent semantic search across internal business documents',
      'Predictive analytics for inventory demand and sales velocity'
    ],
    deliverables: ['Trained Assistant Pipeline', 'Custom AI API Endpoints', 'Knowledge Base Ingestion System'],
    technologies: ['Gemini API', 'Python', 'Node.js', 'Vector DB', 'LangChain'],
    iconName: 'Cpu'
  },
  {
    id: 'custom-software',
    title: 'CUSTOM SOFTWARE',
    shortDescription: 'Software designed specifically around unique business rules and proprietary algorithms.',
    fullDescription: 'When off-the-shelf software falls short of your distinct business model, we build purpose-built software from the ground up to address proprietary calculations, legacy data bridges, and unique operational workflows.',
    features: [
      'Tailored business logic engineered without unnecessary bloated bloatware',
      'Legacy system synchronization and third-party API orchestration',
      'Custom hardware, sensor, or biometric scanner integrations',
      'Full intellectual property transfer with complete source code ownership'
    ],
    deliverables: ['Custom Application Architecture', 'API Integrations', 'Technical Documentation', 'Maintenance Plan'],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Modern Frameworks'],
    iconName: 'Code2'
  }
];
