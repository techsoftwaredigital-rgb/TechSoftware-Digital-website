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
    title: 'WEBSITE DEVELOPMENT',
    shortDescription: 'Website development company in India crafting modern, fast, and responsive business websites.',
    fullDescription: 'As a dedicated website development company in India, TechSoftware.digital builds high-performance corporate websites, product landing pages, and web portals. Each project is engineered with mobile responsiveness, Core Web Vitals optimization, semantic HTML, and technical SEO architecture built-in from the ground up to ensure strong visibility across Google Search.',
    features: [
      'Responsive website development for mobile, tablet, and desktop devices',
      'Technical SEO with structured JSON-LD schema, canonical tags, and Open Graph metadata',
      'High-speed frontend architecture delivering sub-second load times',
      'Custom animations and clean visual hierarchy tailored for modern brands'
    ],
    deliverables: ['Custom UI/UX Architecture', 'Full Source Code', 'Production Deployment', 'Search Console & Analytics Integration'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    iconName: 'Globe'
  },
  {
    id: 'web-applications',
    title: 'WEB APPLICATION DEVELOPMENT',
    shortDescription: 'Custom web application development and CRM platforms engineered for reliable operations.',
    fullDescription: 'TechSoftware.digital specializes in web application development, client portals, and custom CRM software. We replace error-prone manual spreadsheets with secure, multi-user web platforms equipped with role-based access control, live data synchronization, and automated notification engines.',
    features: [
      'Secure role-based authentication and granular permission management',
      'Custom CRM software with customer pipelines and lead lifecycle tracking',
      'Real-time data synchronization with reactive dashboards and telemetry',
      'Resilient backend REST and GraphQL APIs with comprehensive data integrity'
    ],
    deliverables: ['Full-Stack Web Application', 'Admin Management Console', 'API Endpoints', 'Database Migration Scripts'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'Express'],
    iconName: 'LayoutGrid'
  },
  {
    id: 'business-software',
    title: 'BUSINESS MANAGEMENT SOFTWARE',
    shortDescription: 'Custom business management software, ERP systems, billing POS, and business automation solutions.',
    fullDescription: 'Modernize and unify enterprise operations with custom business management software and business automation solutions. We engineer tailored ERP systems, point-of-sale (POS) billing, multi-warehouse inventory management, and digital invoicing workflows shaped specifically to your operational rules.',
    features: [
      'Automated invoice generation, tax computation, and digital PDF receipts',
      'Multi-warehouse stock control with barcode scanning and SKU tracking',
      'Business automation solutions with automated WhatsApp and email alerts',
      'Financial ledgers, expense tracking, and real-time operational reporting'
    ],
    deliverables: ['Operational ERP Dashboard', 'Billing & POS Modules', 'PDF Engine', 'Role Access Management'],
    technologies: ['Node.js', 'PostgreSQL', 'Express', 'React', 'Tailwind CSS'],
    iconName: 'Building2'
  },
  {
    id: 'android-apps',
    title: 'ANDROID APP DEVELOPMENT',
    shortDescription: 'Android app development company in India engineering native and cross-platform mobile apps.',
    fullDescription: 'High-performance Android app development designed to perform smoothly across diverse devices and screen sizes. We architect native Kotlin and cross-platform React Native apps with offline cache synchronization, push notification pipelines, Google Pay integration, and Google Play Store deployment readiness.',
    features: [
      'Native performance optimization across smartphones and tablets',
      'Offline-first data storage with automatic cloud synchronization',
      'Firebase Cloud Messaging (FCM) push notifications and telemetry',
      'Biometric authentication and secure mobile payment gateways'
    ],
    deliverables: ['Compiled App Bundles (APK & AAB)', 'Play Store Staging Support', 'Backend API Endpoints'],
    technologies: ['Kotlin', 'React Native', 'TypeScript', 'Firebase'],
    iconName: 'Smartphone'
  },
  {
    id: 'ios-apps',
    title: 'iOS APP DEVELOPMENT',
    shortDescription: 'Premium iOS app development adhering strictly to Apple Human Interface Guidelines.',
    fullDescription: 'Elegant, responsive iOS app development built for iPhone and iPad ecosystems. We craft iOS applications with fluid gesture interactions, FaceID security, Apple Pay integration, and reliable offline data synchronization ready for App Store submission.',
    features: [
      'Apple Human Interface Guidelines compliance and fluid typography',
      'Biometric authentication (Face ID & Touch ID) and Apple Pay checkout',
      'Haptic feedback and custom 60fps view transitions',
      'App Store Connect setup, review compliance, and TestFlight beta staging'
    ],
    deliverables: ['Xcode Project & Archive Builds', 'App Store Connect Setup', 'TestFlight Staging Access'],
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
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    shortDescription: 'Bespoke custom software development built around proprietary business logic.',
    fullDescription: 'When off-the-shelf software falls short, TechSoftware.digital delivers custom software development tailored to your exact business rules, legacy data bridges, and specialized operational workflows with 100% intellectual property ownership.',
    features: [
      'Tailored business logic engineered without unnecessary software bloat',
      'Legacy system synchronization and third-party API orchestration',
      'Specialized hardware, sensor, or biometric scanner integrations',
      'Complete intellectual property transfer with full source code ownership'
    ],
    deliverables: ['Custom Application Architecture', 'API Integrations', 'Technical Documentation', 'Maintenance Plan'],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Modern Frameworks'],
    iconName: 'Code2'
  }
];
