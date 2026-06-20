"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, ShieldCheck, Users, Clock } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Modern Tech Stack",
      desc: "We build with Next.js, Flutter, and Supabase. No legacy tech, just fast, scalable, modern architectures."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Execution",
      desc: "Stop planning for months. We use agile sprints to get your MVP to market in weeks, not years."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Transparent Process",
      desc: "Clear communication, weekly updates, and full visibility into our progress. No surprises."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Long-Term Partnership",
      desc: "We don't just build and leave. We maintain, scale, and iterate with you as your business grows."
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-slate-50 dark:bg-black border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 leading-tight">
              Why <br className="hidden lg:block"/> Work With Me?
            </h2>
            <p className="text-xl text-foreground/60 mb-8 leading-relaxed">
              I operate as your dedicated premium engineer. I care about clean code, stunning design, and bottom-line business results.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200 dark:border-white/10">
              <div>
                <div className="text-4xl font-heading font-black text-foreground mb-2">50+</div>
                <div className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-black text-foreground mb-2">4+</div>
                <div className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex"
              >
                <GlassCard className="flex-1 w-full p-8 bg-white dark:bg-foreground/[0.02] border border-slate-200 dark:border-foreground/5 hover:bg-slate-50 dark:hover:bg-foreground/[0.04] shadow-sm dark:shadow-none">
                  <div className="mb-6">{reason.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-3">{reason.title}</h3>
                  <p className="text-foreground/50 leading-relaxed text-sm">{reason.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
