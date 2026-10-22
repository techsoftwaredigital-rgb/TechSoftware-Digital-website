export type DemoCategory =
  | 'Websites'
  | 'Business Software'
  | 'SaaS Platforms'
  | 'Mobile Apps'
  | 'E-commerce'
  | 'Industry Solutions';

export interface DemoProject {
  id: string;
  name: string;
  category: DemoCategory;
  industry: string;
  description: string;
  features: [string, string, string] | string[];
  image: string;
  demoUrl: string;
  status: 'live' | 'coming_soon';
  demoLabel: 'DEMO PROJECT' | 'CONCEPT PROJECT';
  requestUrl: string;
  accentColor: string;
  gradient: string;
  platformBadge: 'Web' | 'Mobile App' | 'Cloud SaaS' | 'Enterprise';
  highlights?: string[];
  overview?: string;
}

export const demoCategories: Array<{ id: string; label: string }> = [
  { id: 'All Projects', label: 'All Projects' },
  { id: 'Websites', label: 'Websites' },
  { id: 'Business Software', label: 'Business Software' },
  { id: 'SaaS Platforms', label: 'SaaS Platforms' },
  { id: 'Mobile Apps', label: 'Mobile Apps' },
  { id: 'E-commerce', label: 'E-commerce' },
  { id: 'Industry Solutions', label: 'Industry Solutions' },
];

export const demoProjectsData: DemoProject[] = [
  // 1. UrbanBite
  {
    id: 'urban-bite',
    name: 'UrbanBite',
    category: 'Websites',
    industry: 'Restaurant & Dining',
    description: 'High-conversion culinary website featuring digital QR menus, table reservation engine, and real-time kitchen dispatch notifications.',
    features: [
      'Interactive visual menu with dietary filters & allergen tags',
      'Table booking system with instant SMS confirmation',
      'Direct online ordering with zero commissions'
    ],
    image: '/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#f97316',
    gradient: 'from-amber-600/30 via-orange-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['Multi-location support', 'Stripe & Razorpay integrated', 'Kitchen Display System (KDS)'],
    overview: 'UrbanBite provides independent restaurants and multi-unit hospitality brands with an enterprise-grade digital storefront to capture high-margin direct orders and guest reservations.'
  },

  // 2. PrimeNest
  {
    id: 'prime-nest',
    name: 'PrimeNest',
    category: 'Websites',
    industry: 'Real Estate & Properties',
    description: 'Luxury real estate marketplace featuring dynamic neighborhood maps, virtual 3D tour embeds, and an automated mortgage calculator.',
    features: [
      'Interactive geo-spatial property search & filters',
      'Schedule on-site private tours directly with verified brokers',
      'Instant mortgage estimation with amortization schedules'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#38bdf8',
    gradient: 'from-sky-600/30 via-blue-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['MLS / IDX feed compatible', 'Lead capture gating', 'High-res gallery CDN'],
    overview: 'PrimeNest equips modern property brokerages and developers with an ultra-responsive web portal designed to convert affluent buyers and tenants.'
  },

  // 3. BuildCore
  {
    id: 'build-core',
    name: 'BuildCore',
    category: 'Websites',
    industry: 'Construction & Civil Engineering',
    description: 'Heavy construction and civil infrastructure corporate portal showcasing landmark portfolios, safety compliance ratings, and RFP bid submissions.',
    features: [
      'Interactive project timeline with before & after drone photography',
      'Subcontractor pre-qualification and bid submission vault',
      'OSHA and ISO compliance verification badges'
    ],
    image: '/assets/images/solution_erp_operations_1791023763347.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#eab308',
    gradient: 'from-yellow-600/30 via-amber-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['BIM & CAD model showcase', 'Safety audit logs', 'RFP document routing'],
    overview: 'BuildCore offers construction general contractors an authoritative, industrial-grade digital presence to win commercial infrastructure tenders.'
  },

  // 4. AuraSalon
  {
    id: 'aura-salon',
    name: 'AuraSalon',
    category: 'Websites',
    industry: 'Beauty, Spa & Wellness',
    description: 'Chic boutique salon web experience with stylist portfolio lookbooks, package bundles, and seamless two-way calendar slot booking.',
    features: [
      'Stylist selection with specialty ratings & lookbook galleries',
      'Real-time appointment slot calendar with reminder pings',
      'Gift card purchasing & VIP membership subscription billing'
    ],
    image: '/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#ec4899',
    gradient: 'from-pink-600/30 via-rose-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['Automated WhatsApp reminders', 'Deposit collection', 'Client history card'],
    overview: 'AuraSalon streamlines guest acquisition and chair utilization for premium salons, spas, and wellness studios.'
  },

  // 5. DriveNova
  {
    id: 'drive-nova',
    name: 'DriveNova',
    category: 'Websites',
    industry: 'Automotive Showroom & Dealerships',
    description: 'Next-gen automobile digital showroom featuring 360° vehicle exterior views, specs comparison matrix, and instant test drive reservation.',
    features: [
      'Interactive 360-degree vehicle interior & exterior inspector',
      'Multi-trim specification comparator with finance leasing tiers',
      'Instant test-drive scheduling with nearest dealership sync'
    ],
    image: '/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#ef4444',
    gradient: 'from-red-600/30 via-rose-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['VIN inventory lookup', 'Trade-in value estimator', 'Digital brochure generator'],
    overview: 'DriveNova delivers a high-octane digital car showroom experience that converts vehicle researchers into showroom footfall.'
  },

  // 6. EduSphere
  {
    id: 'edu-sphere',
    name: 'EduSphere',
    category: 'Industry Solutions',
    industry: 'Education & Academics',
    description: 'Unified academic institution platform linking digital curriculum distribution, parent portals, interactive gradebooks, and fee collection.',
    features: [
      'Student Information System (SIS) with digital gradebook',
      'Automated semester fee collection with invoice receipts',
      'Parent-teacher communication channels and attendance tracking'
    ],
    image: '/assets/images/portfolio_ai_enterprise_1791023094858.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-600/30 via-sky-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['CBSE/ICSE syllabus sync', 'Exam hall ticket generation', 'Library RFID management'],
    overview: 'EduSphere modernizes universities and K-12 academic institutions with an all-in-one paperless campus administrative operating system.'
  },

  // 7. MediCare Plus
  {
    id: 'medicare-plus',
    name: 'MediCare Plus',
    category: 'Industry Solutions',
    industry: 'Healthcare & Telemedicine',
    description: 'HIPAA-conscious healthcare portal and patient app with encrypted teleconsultation, digital prescription storage, and lab report delivery.',
    features: [
      'End-to-end encrypted video doctor consultations',
      'E-prescription repository with one-tap pharmacy reordering',
      'Diagnostic lab test booking and automated PDF report delivery'
    ],
    image: '/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#10b981',
    gradient: 'from-emerald-600/30 via-teal-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['ABHA / Health ID integration', 'EHR medical records', 'Emergency ambulance dispatch'],
    overview: 'MediCare Plus bridges patients, clinics, and diagnostic labs through a secure, cloud-hosted health portal designed for patient privacy.'
  },

  // 8. EliteEvents
  {
    id: 'elite-events',
    name: 'EliteEvents',
    category: 'Industry Solutions',
    industry: 'Event Management & Experiential',
    description: 'End-to-end event management suite with dynamic stage schedules, tiered ticket purchasing, digital QR check-in, and speaker directories.',
    features: [
      'Tiered VIP & General Admission ticketing with QR badge passes',
      'Live attendee agenda builder with push schedule notifications',
      'Exhibitor lead scanner and interactive convention floor map'
    ],
    image: '/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#8b5cf6',
    gradient: 'from-violet-600/30 via-purple-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['Offline QR turnstile scanner', 'Sponsor ROI analytics', 'Virtual stream integration'],
    overview: 'EliteEvents powers large-scale corporate summits, concerts, and tech conferences with zero check-in bottlenecks.'
  },

  // 9. GreenLeaf Organics
  {
    id: 'greenleaf-organics',
    name: 'GreenLeaf Organics',
    category: 'E-commerce',
    industry: 'Organic FMCG & Superfoods',
    description: 'Farm-to-table organic grocery marketplace with recurring farm box subscriptions, cold-chain delivery tracker, and nutritional transparency.',
    features: [
      'Weekly automated farm box customizer & subscription billing',
      'Harvest origin tracking with pesticide-free batch certificates',
      'Same-day eco-courier dispatch with real-time temperature tracking'
    ],
    image: '/assets/images/solution_pos_retail_1791023776756.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#22c55e',
    gradient: 'from-green-600/30 via-emerald-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['PWA offline cart recovery', 'CO2 offset ledger', 'Dynamic perishability discounts'],
    overview: 'GreenLeaf Organics enables sustainable agribusinesses to sell fresh, organic produce directly to urban households.'
  },

  // 10. NexLaw
  {
    id: 'nex-law',
    name: 'NexLaw',
    category: 'Websites',
    industry: 'Legal Services & Corporate Counsel',
    description: 'Authoritative corporate law firm platform with practice area taxonomy, partner credential vaults, encrypted document intake, and case consultation billing.',
    features: [
      'Encrypted client consultation scheduler with NDA signing',
      'Comprehensive attorney profile directory with landmark case wins',
      'Secure legal document drop-off portal with 256-bit AES encryption'
    ],
    image: '/assets/images/portfolio_ai_enterprise_1791023094858.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#64748b',
    gradient: 'from-slate-600/30 via-cyan-900/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['Conflict check workflow', 'Retainer deposit checkout', 'Practice area knowledgebase'],
    overview: 'NexLaw provides enterprise legal practices with a distinguished, compliant web architecture that commands trust with Fortune 500 general counsel.'
  },

  // 11. HotelFlow
  {
    id: 'hotel-flow',
    name: 'HotelFlow',
    category: 'Business Software',
    industry: 'Hospitality & Resort Management',
    description: 'Full-stack property management system (PMS) synchronizing OTA channels, room housekeeping status, minibar auditing, and front-desk check-in.',
    features: [
      'Two-way channel manager syncing Airbnb, Booking.com & Agoda',
      'Housekeeping mobile view with room turnover status alerts',
      'Folio billing, corporate banquet invoices & night audit engine'
    ],
    image: '/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#0ea5e9',
    gradient: 'from-sky-600/30 via-indigo-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Keycard encoder interface', 'Direct booking engine', 'Revenue per available room analytics'],
    overview: 'HotelFlow eliminates double-bookings and coordinates multi-department operations across luxury boutique hotels and resort chains.'
  },

  // 12. RetailPro
  {
    id: 'retail-pro',
    name: 'RetailPro',
    category: 'Business Software',
    industry: 'Retail & Multi-store POS',
    description: 'High-speed cloud POS and retail management software supporting offline billing, multi-store barcode scanning, and supplier purchase orders.',
    features: [
      'Sub-second barcode checkout with thermal receipt & WhatsApp invoice',
      'Centralized multi-store stock visibility and automated store transfers',
      'Supplier purchase order generation based on predictive reorder points'
    ],
    image: '/assets/images/solution_pos_retail_1791023776756.jpg',
    demoUrl: 'https://ts-devloper.web.app/',
    status: 'live',
    demoLabel: 'DEMO PROJECT',
    requestUrl: '#contact',
    accentColor: '#3b82f6',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Works offline without internet', 'Customer loyalty point engine', 'Cash register reconciliation'],
    overview: 'RetailPro keeps brick-and-mortar checkout lines moving fast while maintaining strict inventory control across all franchise locations.'
  },

  // 13. ClinicDesk
  {
    id: 'clinic-desk',
    name: 'ClinicDesk',
    category: 'Business Software',
    industry: 'Outpatient Clinic & Practice Care',
    description: 'Specialized clinic management software covering doctor appointment queueing, electronic medical records (EMR), and diagnostic billing.',
    features: [
      'Live waiting room token queue display for outpatient patients',
      'Doctor EMR workspace with pre-populated ICD-10 clinical notes',
      'Integrated pharmacy dispensing and medical bill settlement'
    ],
    image: '/assets/images/solution_crm_sales_1791023745384.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#14b8a6',
    gradient: 'from-teal-600/30 via-emerald-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Vitals trending graphs', 'WhatsApp prescription delivery', 'Multi-doctor schedule splitting'],
    overview: 'ClinicDesk replaces paper patient files with a swift, doctor-friendly electronic records and billing interface.'
  },

  // 14. SchoolSphere
  {
    id: 'school-sphere',
    name: 'SchoolSphere',
    category: 'Business Software',
    industry: 'School Management & K-12',
    description: 'Comprehensive ERP for schools managing student admissions, biometrics attendance, automated timetable scheduling, and bus GPS tracking.',
    features: [
      'RFID bus attendance tracking with live parent GPS location map',
      'Automated conflict-free timetable and exam hall allocator',
      'Grade report generation with percentile analytics & CBSE compliance'
    ],
    image: '/assets/images/portfolio_ai_enterprise_1791023094858.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#6366f1',
    gradient: 'from-indigo-600/30 via-blue-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Teacher leave substitution', 'Online fee gateway integration', 'Digital student ID generation'],
    overview: 'SchoolSphere automates school administrative burdens so educators can focus entirely on student academic performance.'
  },

  // 15. GymCore
  {
    id: 'gym-core',
    name: 'GymCore',
    category: 'Business Software',
    industry: 'Gym & Fitness Centers',
    description: 'Membership and access-control software for fitness centers with turnstile biometric integration, personal trainer bookings, and recurring dues.',
    features: [
      'Biometric / QR turnstile access control with expired membership lockout',
      'Recurring auto-debit membership billing via UPI & Credit Cards',
      'PT workout plan builder and personal trainer commission tracker'
    ],
    image: '/assets/images/solution_crm_sales_1791023745384.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#f43f5e',
    gradient: 'from-rose-600/30 via-pink-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Locker allocation tracking', 'Class capacity cap manager', 'Member body composition metrics'],
    overview: 'GymCore prevents membership revenue leaks and streamlines gym front-desk operations across single gyms and nationwide chains.'
  },

  // 16. ServeBook
  {
    id: 'serve-book',
    name: 'ServeBook',
    category: 'Business Software',
    industry: 'Home Services & Facility Management',
    description: 'Dispatch and booking operating system for appliance repair, plumbing, and electrical service companies with technician geo-routing.',
    features: [
      'Smart automated job dispatch to nearest available field technician',
      'Digital job work-order with customer signature on mobile screen',
      'Spare part inventory deduction per repair job with instant invoice'
    ],
    image: '/assets/images/solution_crm_sales_1791023745384.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#0284c7',
    gradient: 'from-cyan-600/30 via-sky-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Google Maps live ETA link', 'Warranty period tracking', 'Post-service rating automation'],
    overview: 'ServeBook provides home service providers with Uber-like operational efficiency from initial customer call to completed field execution.'
  },

  // 17. StockPilot
  {
    id: 'stock-pilot',
    name: 'StockPilot',
    category: 'Business Software',
    industry: 'Inventory & Warehouse Management',
    description: 'Multi-warehouse stock inventory system with bin location mapping, pick-and-pack optimization, and batch expiration auditing.',
    features: [
      'Granular warehouse bin & rack level barcode mapping',
      'Pick, pack, and ship order routing with handheld terminal support',
      'Real-time automated low-stock reorder triggers with supplier sync'
    ],
    image: '/assets/images/solution_erp_operations_1791023763347.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#10b981',
    gradient: 'from-emerald-600/30 via-teal-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['FIFO & LIFO valuation', 'Shrinkage & damage logging', 'Cross-docking dispatch'],
    overview: 'StockPilot prevents stockouts and shipping errors across fast-moving distribution centers and multi-facility manufacturing hubs.'
  },

  // 18. BizLedger
  {
    id: 'biz-ledger',
    name: 'BizLedger',
    category: 'Business Software',
    industry: 'Business Accounting & Tax',
    description: 'Compliant business accounting suite with automated bank reconciliation, GST / VAT reporting, double-entry ledgers, and profit analytics.',
    features: [
      'Automated bank feed reconciliation with AI matching rules',
      'One-click GST / Sales Tax report compilation ready for tax filing',
      'Double-entry balance sheet, P&L, and cash flow forecasting ledger'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#d97706',
    gradient: 'from-amber-600/30 via-yellow-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Multi-currency conversions', 'Auditor read-only access', 'Expense receipt OCR ingestion'],
    overview: 'BizLedger replaces clunky legacy accounting desktop apps with a fast, cloud-native financial command center.'
  },

  // 19. FleetTrack
  {
    id: 'fleet-track',
    name: 'FleetTrack',
    category: 'Business Software',
    industry: 'Fleet & Telematics Logistics',
    description: 'Commercial fleet telematics and vehicle maintenance system with GPS route tracking, fuel consumption telemetry, and driver safety scoring.',
    features: [
      'Live GPS fleet tracking with geofencing breach alerts',
      'Fuel consumption analytics with sudden drop / siphon detection',
      'Preventative vehicle maintenance scheduler based on odometer data'
    ],
    image: '/assets/images/solution_erp_operations_1791023763347.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-600/30 via-blue-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Driver duty hour logging (ELD)', 'Toll tag expenditure audit', 'Carbon footprint tracking'],
    overview: 'FleetTrack reduces per-kilometer logistics overhead and maximizes commercial vehicle uptime across transport operations.'
  },

  // 20. HRMatrix
  {
    id: 'hr-matrix',
    name: 'HRMatrix',
    category: 'Business Software',
    industry: 'HR & Payroll Management',
    description: 'Human resource information system featuring automated salary slip generation, biometric clock-in, leave approvals, and employee performance reviews.',
    features: [
      'One-click statutory payroll calculation with TDS & PF deductions',
      'Employee self-service portal for leave requests and payslip downloads',
      'Quarterly OKR / KPI performance tracking with 360-degree peer feedback'
    ],
    image: '/assets/images/solution_erp_operations_1791023763347.jpg',
    demoUrl: 'https://ts-devloper.web.app/',
    status: 'live',
    demoLabel: 'DEMO PROJECT',
    requestUrl: '#contact',
    accentColor: '#8b5cf6',
    gradient: 'from-purple-600/30 via-indigo-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Digital onboarding documentation', 'Shift roster management', 'Reimbursement claim approvals'],
    overview: 'HRMatrix eliminates payroll calculation errors and gives distributed companies an automated employee lifecycle hub.'
  },

  // 21. LeadSphere
  {
    id: 'lead-sphere',
    name: 'LeadSphere',
    category: 'SaaS Platforms',
    industry: 'CRM & Pipeline Automation',
    description: 'High-velocity sales CRM featuring automated lead enrichment, visual Kanban deal stages, email sequence cadence, and revenue forecasting.',
    features: [
      'Visual drag-and-drop pipeline with customizable deal stages',
      'Automated email sequences with open and reply detection',
      'Call dialer integration with automatic call recording & transcript'
    ],
    image: '/assets/images/solution_crm_sales_1791023745384.jpg',
    demoUrl: 'https://ts-devloper.web.app/',
    status: 'live',
    demoLabel: 'DEMO PROJECT',
    requestUrl: '#contact',
    accentColor: '#38bdf8',
    gradient: 'from-sky-600/30 via-cyan-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Lead scoring model', 'Two-way calendar sync', 'Sales leaderboard metrics'],
    overview: 'LeadSphere empowers B2B sales teams to close deals faster by automating administrative tracking and follow-up chores.'
  },

  // 22. InvoiceCloud
  {
    id: 'invoice-cloud',
    name: 'InvoiceCloud',
    category: 'SaaS Platforms',
    industry: 'Invoicing & Subscription Billing',
    description: 'SaaS billing platform with recurring metered subscriptions, multi-currency invoices, automated late payment reminders, and payment gateway webhooks.',
    features: [
      'Professional white-labeled PDF invoices with custom domain delivery',
      'Recurring billing engine supporting metered & seat-based subscriptions',
      'Automated polite dunning sequence emails for overdue invoices'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#10b981',
    gradient: 'from-emerald-600/30 via-blue-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Client invoice payment portal', 'Multi-tax jurisdiction support', 'Webhook sync with Stripe & Razorpay'],
    overview: 'InvoiceCloud helps agencies, freelancers, and software companies get paid 4x faster with automated invoice processing.'
  },

  // 23. TeamFlow
  {
    id: 'team-flow',
    name: 'TeamFlow',
    category: 'SaaS Platforms',
    industry: 'Project Management & Collaboration',
    description: 'Agile team collaboration workspace combining interactive Kanban boards, Gantt chart dependencies, live document editing, and sprint burndown graphs.',
    features: [
      'Interactive Gantt timeline with critical path dependency mapping',
      'Scrum sprint planning boards with automatic burndown velocity graphs',
      'Embedded collaborative markdown documents with live co-editing'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#a855f7',
    gradient: 'from-purple-600/30 via-pink-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Git repository branch links', 'Time tracking per task', 'Role-based guest permissions'],
    overview: 'TeamFlow keeps distributed software and creative teams aligned with clear task dependencies and zero status update meetings.'
  },

  // 24. BookEase
  {
    id: 'book-ease',
    name: 'BookEase',
    category: 'SaaS Platforms',
    industry: 'Appointment Booking SaaS',
    description: 'Sleek self-scheduling booking SaaS for consultants, tutors, and professionals with Google / Outlook calendar sync and upfront payment collection.',
    features: [
      'Custom personal booking links with buffer times & timezone detection',
      'Two-way sync with Google Calendar, Outlook, and Apple iCloud',
      'Automated Zoom & Google Meet conference link generation'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#3b82f6',
    gradient: 'from-blue-600/30 via-indigo-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Team round-robin scheduling', 'Intake question forms', 'Cancellation policy enforcement'],
    overview: 'BookEase eliminates email ping-pong for meetings by letting clients pick ideal open times instantly.'
  },

  // 25. StorePilot
  {
    id: 'store-pilot',
    name: 'StorePilot',
    category: 'SaaS Platforms',
    industry: 'Multi-Tenant E-commerce SaaS',
    description: 'Modern headless commerce engine allowing entrepreneurs to spin up branded online stores in minutes with sub-second catalog page speeds.',
    features: [
      'Zero-code drag-and-drop storefront builder with modern templates',
      'Built-in shopping cart with optimized one-page checkout',
      'Integrated shipping aggregator label printing & tracking'
    ],
    image: '/assets/images/solution_pos_retail_1791023776756.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-600/30 via-teal-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Abandoned cart SMS recovery', 'Coupon code engine', 'Custom domain SSL provisioning'],
    overview: 'StorePilot provides emerging direct-to-consumer brands with an independent, fast-loading e-commerce foundation.'
  },

  // 26. ClientHub
  {
    id: 'client-hub',
    name: 'ClientHub',
    category: 'SaaS Platforms',
    industry: 'Agency Management & Client Portal',
    description: 'White-label client portal for creative and digital agencies to share deliverables, collect design approvals, and manage monthly retainers.',
    features: [
      'Custom branded portal domain with client login credentials',
      'Interactive design feedback with point-and-click visual commenting',
      'Scope change request tracking and monthly retainer hour ledger'
    ],
    image: '/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#ec4899',
    gradient: 'from-pink-600/30 via-purple-500/20 to-slate-900/80',
    platformBadge: 'Cloud SaaS',
    highlights: ['Secure asset delivery download links', 'Contract signing vault', 'Invoice payment embed'],
    overview: 'ClientHub transforms agency client communication into a polished, professional client portal that commands premium rates.'
  },

  // 27. FoodRush
  {
    id: 'food-rush',
    name: 'FoodRush',
    category: 'Mobile Apps',
    industry: 'Food Delivery & Quick-Commerce',
    description: 'On-demand food delivery mobile ecosystem connecting customer iOS/Android apps, live courier GPS navigation, and restaurant order tablets.',
    features: [
      'Sub-minute hyper-local restaurant search with live food preparation status',
      'Turn-by-turn courier delivery route navigation with battery-optimized GPS',
      'Customer in-app chat with courier and real-time delivery ETA map'
    ],
    image: '/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    demoUrl: 'https://ts-devloper.web.app/',
    status: 'live',
    demoLabel: 'DEMO PROJECT',
    requestUrl: '#contact',
    accentColor: '#f97316',
    gradient: 'from-orange-600/30 via-red-500/20 to-slate-900/80',
    platformBadge: 'Mobile App',
    highlights: ['Push notifications with order updates', 'Apple Pay & Google Pay checkout', 'Driver tip distribution'],
    overview: 'FoodRush offers a turn-key on-demand delivery app architecture engineered for extreme throughput during peak dinner rushes.'
  },

  // 28. QuickServe
  {
    id: 'quick-serve',
    name: 'QuickServe',
    category: 'Mobile Apps',
    industry: 'On-Demand Home Services App',
    description: 'Consumer mobile app for instant booking of vetted electricians, plumbers, home cleaners, and carpenters with transparent upfront pricing.',
    features: [
      'Instant service provider dispatch based on current GPS radius',
      'Escrow payment release upon customer service completion rating',
      'Comprehensive provider verification badges with background check records'
    ],
    image: '/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#0ea5e9',
    gradient: 'from-sky-600/30 via-cyan-500/20 to-slate-900/80',
    platformBadge: 'Mobile App',
    highlights: ['In-app calling with number masking', 'Service warranty certificate', 'Emergency 30-min rush bookings'],
    overview: 'QuickServe connects homeowners with top-tier, background-verified tradespeople through a streamlined, mobile-first booking experience.'
  },

  // 29. TravelGo
  {
    id: 'travel-go',
    name: 'TravelGo',
    category: 'Industry Solutions',
    industry: 'Travel & Tourism Marketplace',
    description: 'Integrated travel discovery platform aggregating international flight searches, curated boutique holiday packages, and visa guidance.',
    features: [
      'Multi-city flight & hotel search engine with price prediction alerts',
      'Day-by-day customized holiday itinerary planner with offline PDF export',
      'Country visa requirement checker and digital document assistance'
    ],
    image: '/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    demoUrl: '',
    status: 'coming_soon',
    demoLabel: 'CONCEPT PROJECT',
    requestUrl: '#contact',
    accentColor: '#14b8a6',
    gradient: 'from-teal-600/30 via-cyan-500/20 to-slate-900/80',
    platformBadge: 'Web',
    highlights: ['GDS flight API integration', 'Currency conversion live feeds', 'Local excursion bookings'],
    overview: 'TravelGo turns vacation planning into an inspiring, frictionless digital journey with verified bookings and 24/7 travel support.'
  },

  // 30. VendorConnect
  {
    id: 'vendor-connect',
    name: 'VendorConnect',
    category: 'E-commerce',
    industry: 'B2B Wholesale Marketplace',
    description: 'High-volume wholesale commerce exchange supporting minimum order quantities (MOQs), tiered volume pricing, trade credit, and RFQ negotiations.',
    features: [
      'Dynamic volume discount tier matrix based on order quantity',
      'Request for Quotation (RFQ) negotiation engine between buyer & manufacturer',
      'Net-30 / Net-60 trade credit application with automated credit score check'
    ],
    image: '/assets/images/solution_erp_operations_1791023763347.jpg',
    demoUrl: 'https://ts-devloper.web.app/',
    status: 'live',
    demoLabel: 'DEMO PROJECT',
    requestUrl: '#contact',
    accentColor: '#6366f1',
    gradient: 'from-indigo-600/30 via-sky-500/20 to-slate-900/80',
    platformBadge: 'Enterprise',
    highlights: ['Multi-currency invoices with tax exemptions', 'Container freight estimation', 'Escrow milestone payouts'],
    overview: 'VendorConnect unites verified manufacturers with commercial distributors for streamlined bulk procurement and supply chain continuity.'
  }
];
