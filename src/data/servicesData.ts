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
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern responsive websites designed for businesses, brands and professionals.',
    fullDescription: 'We build fast, secure, and visually commanding websites engineered to convert visitors into loyal clients. Every website is custom-crafted with responsive layouts, modern design systems, and search engine optimization built-in from the ground up.',
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
    title: 'Web Applications',
    shortDescription: 'Custom business workflow applications and scalable web platforms.',
    fullDescription: 'From client portals to data-intensive management platforms, we architect resilient web applications that streamline operations and support complex transactional workflows with enterprise-grade stability.',
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
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Android and iOS applications with modern user experiences.',
    fullDescription: 'Native-feel mobile apps crafted to deliver fluid 60fps animations, intuitive gesture navigation, offline reliability, and seamless hardware sensor integration for both Android and iOS devices.',
    features: [
      'Cross-platform codebase delivering native speed on Android and iOS',
      'Offline-first architecture with local cache synchronization',
      'Push notification pipelines and background service workers',
      'Secure biometric authentication and payment gateway integration'
    ],
    deliverables: ['Compiled App Bundles (APK / AAB / IPA)', 'Store Deployment Support', 'API Backend Support'],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase Cloud Messaging'],
    iconName: 'Smartphone'
  },
  {
    id: 'business-management-software',
    title: 'Business Management Software',
    shortDescription: 'Custom software for billing, CRM, inventory, accounting and business operations.',
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
    id: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    shortDescription: 'Modern online stores and custom e-commerce platforms.',
    fullDescription: 'High-conversion digital storefronts built with frictionless checkout paths, instant search filters, inventory syncing, payment gateways, and automated order fulfillment pipelines.',
    features: [
      'Multi-currency and domestic/international payment gateways',
      'Dynamic product variants, size guides, and faceted search',
      'One-click checkout and abandoned cart recovery systems',
      'Automated dispatch, courier tracking, and customer portal'
    ],
    deliverables: ['Storefront App', 'Merchant Order Dashboard', 'Payment Gateway Integration', 'Inventory Matrix'],
    technologies: ['Next.js', 'Node.js', 'Stripe / Razorpay', 'PostgreSQL'],
    iconName: 'ShoppingBag'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'AI-powered assistants, automation and intelligent business tools.',
    fullDescription: 'Harness practical, high-impact machine learning and LLM capabilities to automate customer inquiries, summarize documents, parse financial receipts, and provide predictive intelligence directly within your workflows.',
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
    id: 'saas-development',
    title: 'SaaS Development',
    shortDescription: 'Scalable SaaS platforms and multi-user business applications.',
    fullDescription: 'End-to-end multi-tenant SaaS architecture engineered for fast user onboarding, tiered subscription billing, usage metering, data isolation, and smooth horizontal scaling.',
    features: [
      'Multi-tenant data isolation and organization team switching',
      'Subscription lifecycle handling with automated recurring billing',
      'Granular audit trails and compliance-ready security logging',
      'Developer API keys and webhook dispatch system'
    ],
    deliverables: ['Multi-tenant Web Application', 'Billing Billing Portal', 'API Documentation', 'Monitoring Setup'],
    technologies: ['Next.js', 'Node.js', 'Docker', 'PostgreSQL', 'Redis'],
    iconName: 'Cloud'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    shortDescription: 'Software designed specifically around unique business requirements.',
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
