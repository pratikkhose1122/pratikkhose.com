import type { Metadata } from "next";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to build your next app? Reach out via email, or book a free strategy call.",
  openGraph: {
    title: "Contact | Pratik Khose",
    description:
      "Ready to build your next app? Reach out via email, or book a free strategy call.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
