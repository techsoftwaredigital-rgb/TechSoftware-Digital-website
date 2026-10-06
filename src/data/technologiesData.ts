export interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Mobile & AI' | 'Data & Architecture';
  description: string;
  useCase: string;
  accentColor: string;
  badge: string;
  connections: string[];
}

export const technologiesData: TechItem[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Component-driven user interfaces with declarative rendering and virtual DOM state synchronization.',
    useCase: 'Interactive SPAs, web dashboards, dynamic client portals',
    accentColor: '#61DAFB',
    badge: 'v19 Ready',
    connections: ['nextjs', 'typescript', 'apis', 'nodejs']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    description: 'Server-side rendering, static site generation, and optimized API routes for enterprise speed.',
    useCase: 'SEO-critical websites, scalable e-commerce, web applications',
    accentColor: '#FFFFFF',
    badge: 'App Router',
    connections: ['react', 'typescript', 'gcloud', 'databases']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Data & Architecture',
    description: 'Strict static typing providing bulletproof compile-time safety and self-documenting codebases.',
    useCase: 'Enterprise codebases, mission-critical systems, shared types',
    accentColor: '#3178C6',
    badge: 'Strict Mode',
    connections: ['react', 'nodejs', 'android', 'ios']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend & Cloud',
    description: 'Asynchronous event-driven JavaScript runtime engineered for ultra-fast, high-throughput microservices.',
    useCase: 'REST & GraphQL APIs, real-time websockets, automation pipelines',
    accentColor: '#5FA04E',
    badge: 'High I/O',
    connections: ['apis', 'databases', 'firebase', 'gcloud']
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Backend & Cloud',
    description: 'Realtime NoSQL Firestore, cloud authentication, serverless functions, and global CDN hosting.',
    useCase: 'Rapid MVP launches, mobile app backends, live collaboration',
    accentColor: '#FFCA28',
    badge: 'Serverless',
    connections: ['nodejs', 'databases', 'android', 'ios']
  },
  {
    id: 'gcloud',
    name: 'Google Cloud',
    category: 'Backend & Cloud',
    description: 'Enterprise cloud infrastructure, container orchestration, serverless Cloud Run, and managed databases.',
    useCase: 'Global deployment, microservices scalability, high-availability SLA',
    accentColor: '#4285F4',
    badge: 'Enterprise Cloud',
    connections: ['nodejs', 'databases', 'ai', 'firebase']
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'Mobile & AI',
    description: 'Gemini LLMs, neural automation pipelines, semantic vector search, and intelligent agents.',
    useCase: 'Autonomous workflow bots, AI assistants, document intelligence',
    accentColor: '#A855F7',
    badge: 'LLM & Vision',
    connections: ['gcloud', 'apis', 'nodejs', 'react']
  },
  {
    id: 'apis',
    name: 'APIs & Microservices',
    category: 'Data & Architecture',
    description: 'High-performance RESTful, GraphQL, and WebSocket architectures with OpenAPI contracts.',
    useCase: 'Third-party integrations, payment gateways, inter-service messaging',
    accentColor: '#06B6D4',
    badge: 'REST / GraphQL',
    connections: ['nodejs', 'databases', 'react', 'ai']
  },
  {
    id: 'databases',
    name: 'Databases',
    category: 'Data & Architecture',
    description: 'Relational PostgreSQL, Cloud SQL, and high-speed Redis caching with schema migrations.',
    useCase: 'Transactional integrity, ACID guarantees, relational indexing',
    accentColor: '#38BDF8',
    badge: 'SQL & NoSQL',
    connections: ['nodejs', 'gcloud', 'firebase', 'apis']
  },
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile & AI',
    description: 'Modern Android applications optimized for performance, background services, and Google Play compliance.',
    useCase: 'Native Android apps, industrial handhelds, tablet interfaces',
    accentColor: '#3DDC84',
    badge: 'Kotlin / Native',
    connections: ['apis', 'firebase', 'typescript', 'ios']
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'Mobile & AI',
    description: 'Fluid iOS applications tailored to Apple Human Interface Guidelines and App Store standards.',
    useCase: 'iPhone & iPad applications, Apple Pay integrations',
    accentColor: '#F1F5F9',
    badge: 'Swift / Cross',
    connections: ['apis', 'firebase', 'typescript', 'android']
  }
];
