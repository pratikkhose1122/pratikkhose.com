"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPageClient() {
  return (
    <div className="bg-background">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1),rgba(255,255,255,1))] dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:via-[#0d1429] dark:to-background" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs md:text-sm mb-8 text-slate-700 dark:text-foreground/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)] dark:shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="font-medium tracking-wide">About Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 leading-[1.05] text-slate-900 dark:text-foreground"
          >
            I Build Software That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Moves Businesses Forward.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ─── Mission / Vision ─── */}
      <section className="py-20 bg-slate-50 dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-700 dark:text-foreground/80 leading-relaxed font-light"
            >
              I'm a Software Developer from Maharashtra, India. I build scalable mobile applications, admin dashboards, SaaS products, and modern business software using Flutter, Firebase, Supabase, Node.js, PostgreSQL, and cloud technologies.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-700 dark:text-foreground/80 leading-relaxed font-light"
            >
              I've built production-ready applications across Healthcare, Fitness Tech, and FinTech domains, including MyGymBook, IPO Tracker, and MCCD App.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-700 dark:text-foreground/80 leading-relaxed font-light"
            >
              My focus is creating fast, beautiful, and business-focused software that solves real-world problems through <span className="font-semibold text-slate-900 dark:text-foreground">engineering excellence paired with deep business understanding.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-20 border-y border-slate-200 dark:border-border bg-white dark:bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center"
          >
            {[
              { value: "7+", label: "Live Products" },
              { value: "6", label: "Industries Served" },
              { value: "Full Stack", label: "Development" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-slate-600 dark:text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── How We Work ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-foreground">
                How I Work
              </h2>
              <p className="text-xl text-slate-600 dark:text-foreground/60 max-w-2xl mx-auto font-light">
                A transparent, iterative process designed to deliver value quickly and consistently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "1. Discovery", desc: "I start by deeply understanding your business goals, target audience, and technical constraints." },
                { icon: Code2, title: "2. Architecture", desc: "I design a scalable technical foundation and create high-fidelity prototypes." },
                { icon: Rocket, title: "3. Agile Build", desc: "I develop in 2-week sprints, giving you full visibility and frequent demos." },
                { icon: Users, title: "4. Launch & Scale", desc: "I deploy to production, monitor performance, and provide ongoing support." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-foreground/[0.03] border border-slate-200 dark:border-border shadow-sm dark:shadow-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-slate-900 dark:text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-foreground/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-t border-slate-200 dark:border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-foreground"
            >
              Ready to start your project?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <a href="https://cal.com/pratik-khose" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-16 px-10 text-lg mt-8 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all">
                  Schedule a Free Strategy Call
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
          </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
