export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  useCase: string;
  accentColor: string;
  badge: string;
}

export const technologiesData: TechItem[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend Ecosystem',
    description: 'Component-driven user interfaces with declarative rendering and virtual DOM state synchronization.',
    useCase: 'Interactive SPAs, web dashboards, dynamic client portals',
    accentColor: '#61DAFB',
    badge: 'v19 Ready'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Full-Stack Framework',
    description: 'Server-side rendering, static site generation, and optimized API routes for enterprise speed.',
    useCase: 'SEO-critical websites, scalable e-commerce, web applications',
    accentColor: '#FFFFFF',
    badge: 'App Router'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Type Safety & Architecture',
    description: 'Strict static typing providing bulletproof compile-time safety and self-documenting codebases.',
    useCase: 'Enterprise codebases, mission-critical systems, shared types',
    accentColor: '#3178C6',
    badge: 'Strict Mode'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend & APIs',
    description: 'Asynchronous event-driven JavaScript runtime engineered for ultra-fast, high-throughput microservices.',
    useCase: 'REST & GraphQL APIs, real-time websockets, automation pipelines',
    accentColor: '#5FA04E',
    badge: 'High I/O'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Cloud & Database',
    description: 'Realtime NoSQL Firestore, cloud authentication, serverless functions, and global CDN hosting.',
    useCase: 'Rapid MVP launches, mobile app backends, live collaboration',
    accentColor: '#FFCA28',
    badge: 'Serverless'
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: '3D & WebGL',
    description: 'Hardware-accelerated 3D graphics, spatial shaders, interactive geometries, and immersive experiences in the browser.',
    useCase: 'Interactive 3D showcases, product visualizers, futuristic interfaces',
    accentColor: '#04D9FF',
    badge: 'GPU Powered'
  },
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile Platform',
    description: 'Modern Android applications optimized for performance, background services, and Google Play compliance.',
    useCase: 'Native Android apps, industrial handhelds, tablet interfaces',
    accentColor: '#3DDC84',
    badge: 'Kotlin / Native'
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'Mobile Platform',
    description: 'Fluid iOS applications tailored to Apple Human Interface Guidelines and App Store standards.',
    useCase: 'iPhone & iPad applications, Apple Pay integrations',
    accentColor: '#007AFF',
    badge: 'Swift / Cross'
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'Intelligent Systems',
    description: 'Large language models, semantic vector search, intelligent automation, and custom neural pipelines.',
    useCase: 'Autonomous workflow bots, AI assistants, document intelligence',
    accentColor: '#A855F7',
    badge: 'LLM & Vision'
  }
];
