import type { Metadata } from "next";
import ServicesPageClient from "@/components/sections/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development, startup MVP sprints, and custom software solutions. Flutter, React, Next.js experts building scalable products for startups and businesses.",
  openGraph: {
    title: "Our Services | BuildYourWay",
    description:
      "Mobile app development, startup MVP sprints, and custom software solutions built by a premium engineering team.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
