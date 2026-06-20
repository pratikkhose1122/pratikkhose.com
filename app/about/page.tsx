import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We engineer solutions that solve real business problems. Learn about our mission, experience, and the agile process we use to deliver premium software.",
  openGraph: {
    title: "About Us | BuildYourWay",
    description:
      "Learn about our mission, experience, and the agile process we use to deliver premium software.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
