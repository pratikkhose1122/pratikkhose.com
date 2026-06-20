"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Smartphone, Monitor, Database, Paintbrush, Layers, Settings } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Mobile App Development",
    description: "Native-quality iOS and Android applications built with Flutter or React Native for maximum performance and user engagement.",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Web Platforms",
    description: "Highly scalable Next.js and React web applications designed to handle thousands of concurrent users seamlessly.",
    icon: <Monitor className="w-6 h-6 text-primary" />,
  },
  {
    title: "Backend Engineering",
    description: "Robust API architectures using Node.js, Python, or Go, backed by scalable databases like PostgreSQL and Supabase.",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Conversion-optimized, stunning interfaces that build trust instantly and guide users toward your business goals.",
    icon: <Paintbrush className="w-6 h-6 text-primary" />,
  },
  {
    title: "SaaS Development",
    description: "End-to-end multi-tenant software platforms complete with billing, authentication, and admin dashboards.",
    icon: <Layers className="w-6 h-6 text-primary" />,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing optimization, feature additions, and 99.9% uptime guarantees for your critical business applications.",
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
];

export function Services() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Engineering Excellence
            </h2>
            <p className="text-xl text-foreground/60">
              We provide comprehensive technical capabilities to bring your most ambitious ideas to market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <GlassCard hoverEffect className="flex-1 w-full flex flex-col p-8">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed flex-1">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(37,99,235,0.4)] h-14 px-8">
              Schedule a Free Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
