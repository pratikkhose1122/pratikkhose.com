import type { Metadata } from "next";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to build your next app? Reach out via email, or book a free strategy call. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | BuildYourWay",
    description:
      "Ready to build your next app? Reach out and get a free strategy call with our engineering team.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
