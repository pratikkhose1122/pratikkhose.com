import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProject />
      <Process />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
