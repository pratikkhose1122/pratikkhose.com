import type { Metadata } from "next";
import ServicesPageClient from "@/components/sections/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development, startup MVP sprints, and custom software solutions. Flutter, React, and Node.js expert building scalable products.",
  openGraph: {
    title: "Services | Pratik Khose",
    description:
      "Mobile app development, startup MVP sprints, and custom software solutions built by an experienced developer.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
