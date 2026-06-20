import { Smartphone, Globe, Briefcase, Rocket } from "lucide-react";

export type ServiceItem = {
  label: string;
  subtitle: string;
  href: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: any; // LucideIcon
  items: ServiceItem[];
};

export const servicesConfig: ServiceCategory[] = [
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: Smartphone,
    items: [
      { label: "Flutter Development", subtitle: "Cross-platform apps for Android and iOS", href: "/services/flutter-app-development" },
      { label: "Android Development", subtitle: "Native performance for Android devices", href: "/services/android-app-development" },
      { label: "iOS Development", subtitle: "Premium native experiences for Apple", href: "/services/ios-app-development" },
      { label: "Cross Platform Apps", subtitle: "Single codebase, universal deployment", href: "/services/cross-platform-apps" },
      { label: "MVP Development", subtitle: "Rapid prototyping to test the market", href: "/services/mvp-development" },
      { label: "App Maintenance", subtitle: "Continuous support and updates", href: "/services/app-maintenance" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    items: [
      { label: "Business Websites", subtitle: "High-performance websites for growth", href: "/services/business-websites" },
      { label: "Landing Pages", subtitle: "Conversion-optimized single pages", href: "/services/landing-pages" },
      { label: "React Development", subtitle: "Interactive and dynamic user interfaces", href: "/services/react-development" },
      { label: "Next.js Development", subtitle: "SEO-friendly, server-rendered applications", href: "/services/nextjs-development" },
      { label: "Web Portals", subtitle: "Secure hubs for your customers or staff", href: "/services/web-portals" },
      { label: "Progressive Web Apps", subtitle: "App-like experiences in the browser", href: "/services/progressive-web-apps" },
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: Briefcase,
    items: [
      { label: "CRM Systems", subtitle: "Manage customer relationships efficiently", href: "/services/crm-systems" },
      { label: "ERP Solutions", subtitle: "Streamline your business operations", href: "/services/erp-solutions" },
      { label: "Gym Management Software", subtitle: "Complete platforms for fitness centers", href: "/services/gym-management-software" },
      { label: "Healthcare Systems", subtitle: "Secure, compliant medical applications", href: "/services/healthcare-systems" },
      { label: "School Management Systems", subtitle: "Digital infrastructure for education", href: "/services/school-management-systems" },
      { label: "Business Automation", subtitle: "Eliminate repetitive manual tasks", href: "/services/business-automation" },
    ],
  },
  {
    id: "saas-startup",
    title: "SaaS & Startup Solutions",
    icon: Rocket,
    items: [
      { label: "SaaS Development", subtitle: "Launch scalable software products", href: "/services/saas-development" },
      { label: "MVP Development", subtitle: "Get your idea to market quickly", href: "/services/mvp-development-startup" },
      { label: "Product Design", subtitle: "UI/UX designed for user retention", href: "/services/product-design" },
      { label: "Startup Consulting", subtitle: "Technical guidance for founders", href: "/services/startup-consulting" },
      { label: "Cloud Deployment", subtitle: "Robust hosting and infrastructure", href: "/services/cloud-deployment" },
      { label: "Scaling & Optimization", subtitle: "Prepare your app for massive growth", href: "/services/scaling-optimization" },
    ],
  },
];
