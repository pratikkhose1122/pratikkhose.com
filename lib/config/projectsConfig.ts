import {
  Smartphone, Database, Zap, Shield, Bell, Layout,
  Users, CreditCard, BarChart3, Clock, RefreshCw, Lock,
  TrendingUp, LineChart, Wallet, Globe, FileText, Activity,
  Heart, ClipboardList, Stethoscope, Building2, Server, Cloud,
  Layers, Cpu, Wifi, Eye, Settings, Search,
  type LucideIcon
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────

export type ProjectFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type InterfaceCategory = {
  title: string;
  color: string;
  screens: string[];
};

export type Challenge = {
  number: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type TechItem = {
  name: string;
  role: string;
  icon: LucideIcon;
};

export type Metric = {
  value: string;
  label: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  technologies: string[];
  status: string;
  statusColor: string;
  deliverables: string;
  overview: string;
  problem: string[];
  solution: string[];
  features: ProjectFeature[];
  interfaceJourney: InterfaceCategory[];
  challenges: Challenge[];
  techArchitecture: TechItem[];
  metrics: Metric[];
  testimonial: Testimonial;
  conclusion: string;
  nextProject: string;
  cardDescription: string;
  gradient: string;
  accentColor: string;
  heroImage: string;
};

// ─── Project Data ────────────────────────────────────────

export const projectsConfig: ProjectData[] = [
  // ═══════════════════════════════════════════════════════
  // 1. MyGymBook
  // ═══════════════════════════════════════════════════════
  {
    slug: "mygymbook",
    heroImage: "/project-showcases/mygymbook-final.png",
    title: "MyGymBook",
    subtitle: "Transforming Gym Management with Smart Technology",
    industry: "Fitness & HealthTech",
    technologies: ["Flutter", "Supabase", "Firebase", "PostgreSQL"],
    status: "Play Store Published",
    statusColor: "text-green-500 dark:text-green-400",
    deliverables: "Mobile App, Web Dashboard, Admin Panel",
    overview:
      "A comprehensive gym management platform that replaces fragmented manual systems with an intelligent, automated solution — handling memberships, payments, renewals, and member communication at scale.",
    problem: [
      "Gym owners were struggling with fragmented, archaic systems. Using WhatsApp for communication, Excel for tracking memberships, and manual cash entries for payments caused extreme friction and constant data loss.",
      "This resulted in lost revenue from missed renewals, poor member retention, and hours wasted on administrative tasks that should have been automated. A single gym could lose ₹50,000+ monthly from missed renewal follow-ups alone.",
    ],
    solution: [
      "We architected a scalable, multi-tenant ecosystem consisting of a premium Flutter mobile application and a high-performance administrative dashboard that gym owners could operate from day one.",
      "By leveraging Supabase for realtime database synchronization and Firebase for targeted push notifications, we completely automated the membership renewal pipeline — reducing administrative overhead by 80% and nearly eliminating missed payments.",
    ],
    features: [
      {
        title: "Membership Management",
        description:
          "Automated tracking of thousands of active, paused, and expired memberships with instant status visibility.",
        icon: Users,
      },
      {
        title: "Payment Tracking",
        description:
          "Granular financial dashboards tracking cash, card, and UPI transactions in real-time with detailed reports.",
        icon: CreditCard,
      },
      {
        title: "Renewal Reminders",
        description:
          "Algorithmic logic to trigger automated reminders 7 days, 3 days, and 1 day before membership expiration.",
        icon: Bell,
      },
      {
        title: "Push Notifications",
        description:
          "Firebase integration for instant alerts, announcements, and direct member communication channels.",
        icon: Zap,
      },
      {
        title: "Premium Mobile UX",
        description:
          "A perfectly fluid, 60fps Flutter app optimized for both iOS and Android platforms with native feel.",
        icon: Smartphone,
      },
      {
        title: "Offline-First Sync",
        description:
          "Local caching mechanisms so gym staff can operate seamlessly during internet outages without data loss.",
        icon: RefreshCw,
      },
    ],
    interfaceJourney: [
      {
        title: "Dashboard",
        color: "text-blue-500",
        screens: [
          "Home Overview",
          "Revenue Analytics",
          "Member Statistics",
          "Quick Actions Panel",
          "Recent Activity Feed",
          "Expiry Alerts",
        ],
      },
      {
        title: "Members",
        color: "text-emerald-500",
        screens: [
          "All Members List",
          "Member Profile",
          "Add New Member",
          "Membership Plans",
          "Renewal History",
          "Attendance Tracker",
        ],
      },
      {
        title: "Payments",
        color: "text-amber-500",
        screens: [
          "Payment Dashboard",
          "Record Payment",
          "Payment History",
          "Revenue Reports",
          "Pending Dues",
          "Receipt Generator",
        ],
      },
      {
        title: "Settings",
        color: "text-purple-500",
        screens: [
          "Gym Profile",
          "Notification Settings",
          "Staff Management",
          "Plan Configuration",
          "Backup & Export",
          "Account Security",
        ],
      },
    ],
    challenges: [
      {
        number: "01",
        title: "Real-Time Multi-Tenant Data Synchronization",
        problem:
          "Multiple staff members needed to access and update member data simultaneously without conflicts. Traditional database approaches led to stale reads and overwritten entries during peak hours.",
        solution:
          "Implemented Supabase Realtime subscriptions with Row-Level Security (RLS) policies. Each gym operates in its own secure data silo, while staff see live updates within milliseconds across all devices.",
        result:
          "Zero data conflicts reported across 50+ active gyms with concurrent users.",
      },
      {
        number: "02",
        title: "Intelligent Renewal Pipeline Automation",
        problem:
          "Gym owners were manually tracking expiration dates in spreadsheets, leading to 40% of renewals being missed entirely. The financial impact was devastating for small gym businesses.",
        solution:
          "Built an automated renewal engine using PostgreSQL triggers and Firebase Cloud Messaging. The system sends cascading reminders at 7, 3, and 1 day before expiry, then escalates to the gym owner for unresponsive members.",
        result:
          "Renewal rates increased 2.5x within the first month of deployment.",
      },
      {
        number: "03",
        title: "Offline-First Architecture in Low-Connectivity Areas",
        problem:
          "Many gyms in tier-2 and tier-3 cities experience intermittent internet connectivity. Staff couldn't record payments or check member status during outages, causing workflow breakdowns.",
        solution:
          "Designed an offline-first architecture using local SQLite caching with a custom conflict-resolution sync engine. All operations queue locally and reconcile automatically when connectivity is restored.",
        result:
          "100% operational uptime regardless of network conditions.",
      },
    ],
    techArchitecture: [
      { name: "Flutter", role: "Mobile Framework", icon: Smartphone },
      { name: "Supabase", role: "Backend & Realtime", icon: Database },
      { name: "PostgreSQL", role: "Database", icon: Server },
      { name: "Firebase", role: "Notifications", icon: Zap },
      { name: "Row-Level Security", role: "Authentication", icon: Shield },
      { name: "REST + Realtime", role: "API Layer", icon: Wifi },
    ],
    metrics: [
      {
        value: "80%",
        label: "Reduction in Admin Time",
        description:
          "Automated systems replaced manual Excel tracking entirely.",
      },
      {
        value: "2.5x",
        label: "Higher Renewal Rates",
        description:
          "Automated push notifications drastically reduced missed payments.",
      },
      {
        value: "10k+",
        label: "Active Members Managed",
        description:
          "Platform scales flawlessly without performance degradation.",
      },
      {
        value: "24",
        label: "Gyms Onboarded",
        description:
          "Multi-tenant architecture supports rapid gym onboarding.",
      },
    ],
    testimonial: {
      quote:
        "MyGymBook completely transformed how we run our gym. We went from losing members due to missed renewals to having a 95% renewal rate. The automated reminders alone saved us hours every week.",
      author: "Gym Owner",
      role: "MyGymBook Client",
    },
    conclusion:
      "MyGymBook demonstrates our ability to deeply understand a business domain, architect a scalable technical solution, and deliver a product that creates immediate, measurable impact. From replacing Excel sheets with real-time dashboards to automating the entire renewal pipeline, this project showcases end-to-end product engineering at its finest.",
    nextProject: "ipo-tracker",
    cardDescription:
      "A comprehensive gym management platform handling memberships, payments, and renewals with real-time sync and push notifications.",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "blue",
  },

  // ═══════════════════════════════════════════════════════
  // 2. IPO Tracker
  // ═══════════════════════════════════════════════════════
  {
    slug: "ipo-tracker",
    heroImage: "/project-showcases/ipotrackerlive.png",
    title: "IPO Tracker",
    subtitle: "Never Miss a Market Opportunity Again",
    industry: "FinTech & Capital Markets",
    technologies: ["Flutter", "Node.js", "Firebase", "REST APIs"],
    status: "Live & Active",
    statusColor: "text-green-500 dark:text-green-400",
    deliverables: "Mobile App, API Integration, Push Alerts",
    overview:
      "A real-time financial market tracking application that gives retail investors instant access to upcoming IPOs, GMP data, subscription status, and allotment results — all in one beautifully designed mobile experience.",
    problem: [
      "Retail investors in India were scattered across dozens of fragmented sources — Twitter threads, Telegram groups, unreliable websites — trying to track IPO timelines, grey market premiums, and subscription statuses.",
      "Missing an IPO application deadline or not knowing the GMP trend could mean losing thousands in potential returns. There was no single, reliable, real-time source of truth for the entire IPO lifecycle.",
    ],
    solution: [
      "We built a sleek, data-rich mobile application that aggregates IPO data from multiple verified sources into a single, real-time dashboard. Users can track the complete IPO lifecycle from announcement to listing.",
      "Smart push notifications alert users about key events — application open/close dates, GMP spikes, subscription milestones, and allotment results. The app became the investor's personal IPO command center.",
    ],
    features: [
      {
        title: "Live IPO Dashboard",
        description:
          "Real-time feed of all upcoming, active, and recently listed IPOs with instant access to key data points.",
        icon: BarChart3,
      },
      {
        title: "GMP Tracking",
        description:
          "Live grey market premium updates with historical charts showing GMP trends over the IPO lifecycle.",
        icon: TrendingUp,
      },
      {
        title: "Subscription Status",
        description:
          "Real-time subscription data broken down by category — Retail, HNI, QIB — updated throughout the bidding period.",
        icon: LineChart,
      },
      {
        title: "Smart Alerts",
        description:
          "Configurable push notifications for IPO open dates, close dates, allotment announcements, and listing day.",
        icon: Bell,
      },
      {
        title: "Portfolio Watchlist",
        description:
          "Personalized watchlist to track specific IPOs with quick-access cards and timeline views.",
        icon: Eye,
      },
      {
        title: "Allotment Checker",
        description:
          "Integrated allotment result checker — enter PAN or application number to check status directly in-app.",
        icon: Search,
      },
    ],
    interfaceJourney: [
      {
        title: "Discovery",
        color: "text-emerald-500",
        screens: [
          "IPO Feed",
          "Upcoming IPOs",
          "Active IPOs",
          "Recently Listed",
          "IPO Calendar",
          "Market Overview",
        ],
      },
      {
        title: "Analysis",
        color: "text-blue-500",
        screens: [
          "IPO Detail Page",
          "GMP Chart",
          "Subscription Tracker",
          "Company Financials",
          "Peer Comparison",
          "Analyst Ratings",
        ],
      },
      {
        title: "Tracking",
        color: "text-amber-500",
        screens: [
          "My Watchlist",
          "Applied IPOs",
          "Allotment Results",
          "Listing Day Tracker",
          "Returns Calculator",
          "History Log",
        ],
      },
      {
        title: "Account",
        color: "text-purple-500",
        screens: [
          "Profile Settings",
          "Notification Preferences",
          "Alert Configuration",
          "Theme Settings",
          "Data Export",
          "App Info",
        ],
      },
    ],
    challenges: [
      {
        number: "01",
        title: "Aggregating Reliable Data from Multiple Sources",
        problem:
          "IPO data is scattered across registrar websites, stock exchanges, and unofficial sources. No single API provides complete, accurate lifecycle data. Scraped data was often stale or incorrect.",
        solution:
          "Built a custom data aggregation pipeline with multiple source verification. Data from BSE, NSE, and registrar sites is cross-referenced and validated before reaching the app. A confidence scoring system flags inconsistencies.",
        result:
          "99.5% data accuracy maintained across 200+ IPOs tracked.",
      },
      {
        number: "02",
        title: "Real-Time GMP Updates Without Official APIs",
        problem:
          "Grey market premium data has no official API — it changes rapidly throughout the day and varies by source. Displaying stale or inaccurate GMP could mislead investors.",
        solution:
          "Implemented a multi-source GMP verification engine that aggregates data from verified market sources, applies outlier detection, and pushes consensus values to users via Firebase Realtime Database.",
        result:
          "GMP data refreshes every 15 minutes with source-verified accuracy.",
      },
      {
        number: "03",
        title: "Push Notification Timing for IPO Events",
        problem:
          "IPO-related events have strict deadlines — a few hours delay in notification could mean missing the application window entirely. Standard batch notification systems were too slow.",
        solution:
          "Designed a priority-based notification pipeline using Firebase Cloud Functions with event-triggered dispatching. Critical alerts (application deadline, allotment) bypass batch queues and send instantly.",
        result:
          "Zero missed deadline notifications with sub-second delivery for critical alerts.",
      },
    ],
    techArchitecture: [
      { name: "Flutter", role: "Mobile Framework", icon: Smartphone },
      { name: "Node.js", role: "Backend API", icon: Server },
      { name: "Firebase", role: "Realtime & Notifications", icon: Zap },
      { name: "REST APIs", role: "Data Sources", icon: Globe },
      { name: "Firebase Auth", role: "Authentication", icon: Lock },
      { name: "Cloud Functions", role: "Serverless Logic", icon: Cloud },
    ],
    metrics: [
      {
        value: "200+",
        label: "IPOs Tracked",
        description:
          "Complete lifecycle tracking from announcement to listing day.",
      },
      {
        value: "15min",
        label: "GMP Refresh Rate",
        description:
          "Near real-time grey market premium updates throughout the day.",
      },
      {
        value: "50k+",
        label: "Active Users",
        description:
          "Growing user base of retail investors relying on the app daily.",
      },
      {
        value: "99.5%",
        label: "Data Accuracy",
        description:
          "Multi-source verification ensures reliable investment data.",
      },
    ],
    testimonial: {
      quote:
        "IPO Tracker became my go-to app for every IPO season. The GMP tracking and smart alerts helped me make better investment decisions. I haven't missed a single IPO deadline since I started using it.",
      author: "Retail Investor",
      role: "IPO Tracker User",
    },
    conclusion:
      "IPO Tracker showcases our ability to build data-intensive financial applications that retail users can trust. By solving the fragmentation problem in IPO data access and delivering real-time intelligence through a beautifully crafted mobile experience, we helped thousands of investors make more informed decisions. This project demonstrates our expertise in data aggregation, real-time systems, and financial UX design.",
    nextProject: "mccd-app",
    cardDescription:
      "A real-time financial tracking app giving retail investors instant access to IPO data, GMP trends, and smart alerts.",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "emerald",
  },

  // ═══════════════════════════════════════════════════════
  // 3. MCCD App
  // ═══════════════════════════════════════════════════════
  {
    slug: "mccd-app",
    heroImage: "/project-showcases/mccd.png",
    title: "MCCD App",
    subtitle: "Digitizing Healthcare Workflow Management",
    industry: "Healthcare & MedTech",
    technologies: ["Flutter", "Firebase", "Node.js", "Firestore"],
    status: "Deployed & In Use",
    statusColor: "text-green-500 dark:text-green-400",
    deliverables: "Mobile App, Admin Dashboard, Reporting System",
    overview:
      "A healthcare workflow management platform that digitizes the Medical Certificate of Cause of Death (MCCD) process — replacing paper-based systems with a secure, efficient digital workflow used by medical professionals.",
    problem: [
      "The Medical Certificate of Cause of Death (MCCD) process in hospitals was entirely paper-based. Doctors filled forms manually, data was transcribed by clerks, and reports were generated through laborious manual compilation. This led to delays, errors, and compliance issues.",
      "Health authorities needed timely, accurate mortality data for public health decisions. But the manual process meant data was often weeks behind, riddled with transcription errors, and nearly impossible to aggregate across multiple facilities.",
    ],
    solution: [
      "We designed and built a complete digital MCCD workflow — from bedside data entry by attending physicians to automated report generation for health authorities. The mobile-first approach ensured doctors could complete forms in under 2 minutes.",
      "The system features role-based access control, multi-level review workflows, automated ICD-10 coding assistance, and real-time dashboards for health administrators. Every certificate maintains a complete digital audit trail for compliance.",
    ],
    features: [
      {
        title: "Digital MCCD Forms",
        description:
          "Structured digital forms following WHO standards with intelligent field validation and auto-fill capabilities.",
        icon: ClipboardList,
      },
      {
        title: "ICD-10 Coding Assistance",
        description:
          "Smart search and suggestion engine for cause-of-death coding based on the International Classification of Diseases.",
        icon: Search,
      },
      {
        title: "Multi-Level Review Workflow",
        description:
          "Configurable approval chains — attending doctor, department head, medical records — with notification at each stage.",
        icon: Layers,
      },
      {
        title: "Real-Time Dashboards",
        description:
          "Administrative dashboards showing mortality statistics, pending reviews, and compliance metrics in real-time.",
        icon: Activity,
      },
      {
        title: "Secure Data Handling",
        description:
          "End-to-end encryption, role-based access, and complete audit trails meeting healthcare data protection requirements.",
        icon: Shield,
      },
      {
        title: "Automated Reporting",
        description:
          "One-click generation of statutory reports for health authorities with data exported in required government formats.",
        icon: FileText,
      },
    ],
    interfaceJourney: [
      {
        title: "Data Entry",
        color: "text-red-500",
        screens: [
          "New MCCD Form",
          "Patient Information",
          "Cause of Death",
          "ICD-10 Search",
          "Certifying Doctor",
          "Form Preview",
        ],
      },
      {
        title: "Review",
        color: "text-blue-500",
        screens: [
          "Pending Reviews",
          "Certificate Detail",
          "Approve / Reject",
          "Add Comments",
          "Revision History",
          "Final Certification",
        ],
      },
      {
        title: "Analytics",
        color: "text-emerald-500",
        screens: [
          "Mortality Dashboard",
          "Cause-wise Statistics",
          "Department Reports",
          "Trend Analysis",
          "Export Center",
          "Compliance Tracker",
        ],
      },
      {
        title: "Administration",
        color: "text-amber-500",
        screens: [
          "User Management",
          "Role Configuration",
          "Hospital Settings",
          "Audit Logs",
          "System Health",
          "Backup Management",
        ],
      },
    ],
    challenges: [
      {
        number: "01",
        title: "Complex Multi-Step Medical Forms with Validation",
        problem:
          "MCCD forms contain 30+ fields with complex interdependencies. WHO standards require specific coding formats and conditional logic. Paper forms had a 35% error rate due to missing or incorrectly coded fields.",
        solution:
          "Built a dynamic form engine with conditional field rendering, real-time validation, and smart defaults. The ICD-10 search integrates a fuzzy-matching algorithm that suggests codes based on natural language descriptions entered by doctors.",
        result:
          "Form error rate reduced from 35% to under 2% with completion time halved.",
      },
      {
        number: "02",
        title: "Role-Based Access Across Hospital Hierarchy",
        problem:
          "Different hospital staff — attending doctors, department heads, medical records officers, administrators — needed different levels of access and editing capabilities. A flat permission model wouldn't work for a hierarchical medical institution.",
        solution:
          "Implemented a granular role-based access control (RBAC) system using Firestore security rules and custom claims in Firebase Auth. Each role has precisely defined CRUD permissions, with a configurable approval chain that can adapt to any hospital's organizational structure.",
        result:
          "Successfully deployed across facilities with varying organizational structures.",
      },
      {
        number: "03",
        title: "Offline Capability in Hospital Environments",
        problem:
          "Hospital wifi is notoriously unreliable, especially in wards and ICUs. Doctors couldn't wait for connectivity to complete time-sensitive death certificates — the forms had to work without internet access.",
        solution:
          "Engineered a complete offline-first architecture with local Firestore persistence. Forms are saved locally with full validation, then synced to the cloud when connectivity is available. Conflict resolution handles simultaneous edits from multiple devices.",
        result:
          "100% form completion capability regardless of network status.",
      },
    ],
    techArchitecture: [
      { name: "Flutter", role: "Mobile Framework", icon: Smartphone },
      { name: "Firebase", role: "Backend Platform", icon: Zap },
      { name: "Firestore", role: "NoSQL Database", icon: Database },
      { name: "Node.js", role: "Cloud Functions", icon: Server },
      { name: "Firebase Auth", role: "Authentication & RBAC", icon: Lock },
      { name: "Cloud Storage", role: "Document Storage", icon: Cloud },
    ],
    metrics: [
      {
        value: "95%",
        label: "Reduction in Processing Time",
        description:
          "Digital forms completed in under 2 minutes vs. 30+ minutes on paper.",
      },
      {
        value: "98%",
        label: "Data Accuracy Rate",
        description:
          "Smart validation reduced coding errors from 35% to under 2%.",
      },
      {
        value: "500+",
        label: "Certificates Processed Monthly",
        description:
          "Platform handles high-volume certificate processing reliably.",
      },
      {
        value: "Real-time",
        label: "Reporting Capability",
        description:
          "Health authorities receive instant access to mortality statistics.",
      },
    ],
    testimonial: {
      quote:
        "The MCCD App revolutionized our death certification process. What used to take 30 minutes of paperwork now takes under 2 minutes on a mobile device. The accuracy improvements have been equally impressive.",
      author: "Medical Records Officer",
      role: "Hospital Administration",
    },
    conclusion:
      "The MCCD App represents our capability to build mission-critical healthcare software that meets strict compliance requirements while remaining intuitive for medical professionals. By digitizing a complex paper-based workflow, we delivered measurable improvements in speed, accuracy, and data accessibility — proving that thoughtful technology can meaningfully improve healthcare operations.",
    nextProject: "mygymbook",
    cardDescription:
      "A healthcare workflow platform digitizing the MCCD process with smart forms, multi-level reviews, and real-time reporting.",
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
    accentColor: "rose",
  },
];

// ─── Helpers ─────────────────────────────────────────────

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsConfig.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsConfig.map((p) => p.slug);
}
