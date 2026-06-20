import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm a Software Developer building scalable mobile applications, SaaS products, and modern business software using Flutter, React, and Node.js.",
  openGraph: {
    title: "About | Pratik Khose",
    description:
      "I'm a Software Developer building scalable mobile applications, SaaS products, and modern business software using Flutter, React, and Node.js.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
