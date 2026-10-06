export interface SolutionItem {
  id: string;
  name: string;
  category: 'Operations' | 'Finance & Sales' | 'Hospitality & Education' | 'Workforce';
  shortDesc: string;
  keyHighlights: string[];
  useCases: string;
  imageUrl?: string;
  iconName: string;
  gradient: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'crm',
    name: 'CRM (Customer Relationship Management)',
    category: 'Finance & Sales',
    shortDesc: 'Lead pipeline management, automatic follow-ups, and customer communication tracking.',
    keyHighlights: ['Visual Kanban Lead Funnel', 'Automated WhatsApp & Email Reminders', 'Call Logs & Deal Value Tracking'],
    useCases: 'Sales teams, service agencies, and B2B consultancies looking to boost lead conversion.',
    imageUrl: '/src/assets/images/solution_crm_sales_1791023745384.jpg',
    iconName: 'Users',
    gradient: 'from-blue-600/30 to-cyan-500/20'
  },
  {
    id: 'erp',
    name: 'ERP (Enterprise Resource Planning)',
    category: 'Operations',
    shortDesc: 'Unified platform connecting procurement, manufacturing, warehousing, and finance.',
    keyHighlights: ['Cross-Department Sync', 'Real-Time Inventory Status', 'Automated Purchase Order Cycles'],
    useCases: 'Growing manufacturers, wholesale distributors, and multi-branch trading businesses.',
    imageUrl: '/src/assets/images/solution_erp_operations_1791023763347.jpg',
    iconName: 'Layers',
    gradient: 'from-indigo-600/30 to-blue-500/20'
  },
  {
    id: 'billing-pos',
    name: 'Billing & POS',
    category: 'Finance & Sales',
    shortDesc: 'Ultra-fast retail billing, GST-compliant invoicing, barcode scanning, and thermal printing.',
    keyHighlights: ['Sub-second Barcode Checkout', 'Instant GST & Tax Breakdown', 'Offline-Capable POS Terminal'],
    useCases: 'Supermarkets, retail stores, electronics shops, and counter-sales environments.',
    imageUrl: '/src/assets/images/solution_pos_retail_1791023776756.jpg',
    iconName: 'Receipt',
    gradient: 'from-emerald-600/30 to-teal-500/20'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    category: 'Operations',
    shortDesc: 'Stock tracking, low-stock reorder thresholds, batch/expiry alerts, and transfer notes.',
    keyHighlights: ['Batch & Expiry Date Tracking', 'Automated Low-Stock Trigger Alerts', 'Inter-Warehouse Transfers'],
    useCases: 'Warehouses, pharmaceutical distributors, e-commerce brands, and fast-moving retail.',
    imageUrl: '/src/assets/images/solution_erp_operations_1791023763347.jpg',
    iconName: 'Boxes',
    gradient: 'from-amber-600/30 to-orange-500/20'
  },
  {
    id: 'hotel-management',
    name: 'Hotel Management System',
    category: 'Hospitality & Education',
    shortDesc: 'Room booking calendar, check-in/out workflows, housekeeping dispatch, and guest folio billing.',
    keyHighlights: ['Interactive Room Availability Grid', 'OTA & Direct Booking Sync', 'Guest Service Order Tracking'],
    useCases: 'Boutique hotels, resorts, guest houses, and serviced apartments.',
    imageUrl: '/src/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    iconName: 'Hotel',
    gradient: 'from-purple-600/30 to-indigo-500/20'
  },
  {
    id: 'restaurant-management',
    name: 'Restaurant Management',
    category: 'Hospitality & Education',
    shortDesc: 'Table reservations, Kitchen Display System (KDS), digital QR menu ordering, and split bills.',
    keyHighlights: ['Instant Kitchen Order Tickets (KOT)', 'Table Occupancy Heatmap', 'Aggregator Sync (Swiggy/Zomato)'],
    useCases: 'Cafes, fine dining restaurants, cloud kitchens, and franchise chains.',
    imageUrl: '/src/assets/images/solution_hospitality_hotel_1791023790715.jpg',
    iconName: 'Utensils',
    gradient: 'from-rose-600/30 to-red-500/20'
  },
  {
    id: 'school-management',
    name: 'School & Institute Management',
    category: 'Hospitality & Education',
    shortDesc: 'Student admissions, fee collection with digital receipts, attendance tracking, and report cards.',
    keyHighlights: ['Fee Payment Gateway Integration', 'Parent Portal & SMS Notifications', 'Exam Gradebook & Report Cards'],
    useCases: 'K-12 schools, coaching academies, universities, and training institutes.',
    imageUrl: '/src/assets/images/hero_neural_core_1791023116628.jpg',
    iconName: 'GraduationCap',
    gradient: 'from-sky-600/30 to-blue-500/20'
  },
  {
    id: 'accounting-expense',
    name: 'Accounting & Expense Software',
    category: 'Finance & Sales',
    shortDesc: 'General ledger, accounts receivable/payable, expense categorization, and tax filing reports.',
    keyHighlights: ['Automated Bank Reconciliation', 'P&L, Balance Sheet & Cash Flow', 'Staff Reimbursement Approval Flow'],
    useCases: 'Small-to-medium businesses needing transparent financial tracking.',
    imageUrl: '/src/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    iconName: 'Calculator',
    gradient: 'from-emerald-600/30 to-cyan-500/20'
  },
  {
    id: 'appointment-management',
    name: 'Appointment Management',
    category: 'Operations',
    shortDesc: 'Online client booking calendar, automated appointment reminders, and practitioner scheduling.',
    keyHighlights: ['Interactive Self-Booking Portal', 'Calendar Sync (Google/Outlook)', 'No-Show Reduction SMS/WhatsApp Alerts'],
    useCases: 'Clinics, salons, wellness spas, legal advisors, and dental practices.',
    imageUrl: '/src/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    iconName: 'CalendarCheck',
    gradient: 'from-teal-600/30 to-emerald-500/20'
  },
  {
    id: 'customer-management',
    name: 'Customer Management & Loyalty',
    category: 'Finance & Sales',
    shortDesc: 'Customer profiles, purchase histories, reward points systems, and targeted campaign triggers.',
    keyHighlights: ['Tiered Loyalty Rewards Program', 'Customer Lifetime Value Analytics', 'Broadcast Promo Messaging'],
    useCases: 'Retail chains, lifestyle brands, and customer service centers.',
    imageUrl: '/src/assets/images/portfolio_ai_enterprise_1791023094858.jpg',
    iconName: 'UserCheck',
    gradient: 'from-violet-600/30 to-purple-500/20'
  },
  {
    id: 'employee-management',
    name: 'Employee & HR Management',
    category: 'Workforce',
    shortDesc: 'Biometric attendance sync, leave requests, payroll processing, and employee document repository.',
    keyHighlights: ['Automated Salary Slip Generation', 'Leave & Attendance Tracking', 'Employee Self-Service App'],
    useCases: 'Companies managing in-office, remote, or field staff across multiple locations.',
    imageUrl: '/src/assets/images/portfolio_fintech_mobile_1791023106605.jpg',
    iconName: 'Briefcase',
    gradient: 'from-blue-600/30 to-indigo-500/20'
  },
  {
    id: 'custom-business-software',
    name: 'Custom Business Software',
    category: 'Operations',
    shortDesc: 'Purpose-engineered software designed around unique business models and custom operating workflows.',
    keyHighlights: ['Exact Business Logic Replication', 'Enterprise Security Hardening', 'Zero Monthly Per-User Seat Fees'],
    useCases: 'Specialized industries with niche processes that off-the-shelf software cannot handle.',
    imageUrl: '/src/assets/images/portfolio_saas_dashboard_1791023083898.jpg',
    iconName: 'Code',
    gradient: 'from-cyan-600/30 to-blue-500/20'
  }
];
