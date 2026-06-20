"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Smartphone, Rocket, Code2, CheckCircle2,
  Zap, Users, Shield, Clock, Layers, Target, TrendingUp,
  Lightbulb, Settings, Database, Globe, BarChart3, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Service Data ────────────────────────────────────────

const services = [
  {
    id: "mobile-app",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native-quality apps that users love",
    problem:
      "Your business needs a mobile presence, but building a high-quality app that works flawlessly across Android and iOS is expensive, slow, and technically complex. Hiring separate teams for each platform doubles cost and creates inconsistencies.",
    solution:
      "We use Flutter to build a single, beautiful codebase that deploys natively to both Android and iOS — with pixel-perfect design, 60fps performance, and significantly lower cost than maintaining two separate apps.",
    benefits: [
      { icon: Zap, title: "Cross-Platform", desc: "One codebase for Android & iOS, cutting development time in half" },
      { icon: Shield, title: "Production Quality", desc: "Apps that pass rigorous Play Store & App Store review standards" },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Built to handle thousands of concurrent users from day one" },
      { icon: Users, title: "Premium UX", desc: "Conversion-optimized interfaces that build trust and drive retention" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We map your requirements, user flows, and technical constraints" },
      { step: "02", title: "UI/UX Design", desc: "Premium interface design with interactive prototypes for your review" },
      { step: "03", title: "Development", desc: "Agile sprints with weekly demos so you see progress every week" },
      { step: "04", title: "Launch & Support", desc: "Store submission, monitoring, and ongoing maintenance" },
    ],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "startup-mvp",
    icon: Rocket,
    title: "Startup & MVP Development",
    tagline: "Go from idea to launched product in weeks",
    problem:
      "You have a validated idea but spending months planning and building burns through runway. By the time you launch, the market has moved. You need to test with real users fast — without sacrificing quality that could damage your brand.",
    solution:
      "We run a focused 8-12 week MVP sprint. We help you identify the core features that validate your hypothesis, design a premium experience that builds trust, and ship a production-grade product that real users can pay for.",
    benefits: [
      { icon: Clock, title: "8-12 Week Launch", desc: "From kickoff to production in weeks, not months or years" },
      { icon: Target, title: "Lean & Focused", desc: "Only the features that matter for validation — zero bloat" },
      { icon: Lightbulb, title: "Product Strategy", desc: "We help refine your concept based on real market patterns" },
      { icon: TrendingUp, title: "Investor-Ready", desc: "A polished product that demonstrates traction to investors" },
    ],
    process: [
      { step: "01", title: "Strategy Call", desc: "We understand your vision, market, and key hypotheses to test" },
      { step: "02", title: "Scope & Design", desc: "Define MVP features and create a high-fidelity prototype" },
      { step: "03", title: "Build Sprint", desc: "Rapid development with weekly demos and course corrections" },
      { step: "04", title: "Launch & Iterate", desc: "Deploy, gather user feedback, and plan the next iteration" },
    ],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Solutions",
    tagline: "Software built around your business workflow",
    problem:
      "Off-the-shelf software forces you to adapt your business processes to its limitations. You end up with workarounds, manual data entry, and fragmented tools that don't talk to each other — wasting hours every day on tasks that should be automated.",
    solution:
      "We build tailored software that matches your exact workflow — whether it's a gym management platform, healthcare system, CRM, or internal operations tool. Every feature is designed around how your team actually works, eliminating friction and automating repetitive tasks.",
    benefits: [
      { icon: Settings, title: "Perfect Fit", desc: "Software designed around your workflow, not the other way around" },
      { icon: Database, title: "Integrated Data", desc: "One source of truth replacing fragmented spreadsheets and tools" },
      { icon: Layers, title: "Multi-Tenant Ready", desc: "Scale to serve multiple clients or locations from one platform" },
      { icon: Shield, title: "Enterprise Security", desc: "Role-based access, audit trails, and encrypted data at rest" },
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "We map your current processes and identify automation opportunities" },
      { step: "02", title: "Architecture", desc: "Design scalable system architecture and data models" },
      { step: "03", title: "Agile Build", desc: "Iterative development with your team embedded in the process" },
      { step: "04", title: "Deploy & Train", desc: "Production deployment, team training, and long-term support" },
    ],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
  },
];

// ─── Component ───────────────────────────────────────────

export default function ServicesPageClient() {
  return (
    <div className="bg-background">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1),rgba(255,255,255,1))] dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:via-[#0d1429] dark:to-background" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-5 dark:opacity-30"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs md:text-sm mb-8 text-slate-700 dark:text-foreground/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)] dark:shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="font-medium tracking-wide">Our Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 leading-[1.05] text-slate-900 dark:text-foreground"
          >
            Engineering Excellence,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 dark:from-white dark:via-white/90 dark:to-white/50">
              Delivered.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We provide comprehensive technical capabilities to bring your most ambitious ideas to market — from mobile apps to enterprise platforms.
          </motion.p>
        </div>
      </section>

      {/* ─── Service Sections ─── */}
      {services.map((service, sectionIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 md:py-32 ${
            sectionIndex % 2 === 0
              ? "bg-slate-50 dark:bg-foreground/[0.02] border-y border-slate-200 dark:border-border"
              : "bg-background"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {/* Header */}
              <motion.div variants={fadeUp} className="mb-16 max-w-3xl">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[1.5px]">
                    Service
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4 text-slate-900 dark:text-foreground">
                  {service.title}
                </h2>
                <p className="text-xl text-slate-600 dark:text-foreground/60 font-light">
                  {service.tagline}
                </p>
              </motion.div>

              {/* Problem & Solution */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <motion.div
                  variants={fadeUp}
                  className="p-8 md:p-10 rounded-2xl bg-white dark:bg-background border border-slate-200 dark:border-border shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-6 rounded-full bg-red-500/60" />
                    <span className="text-xs font-bold uppercase tracking-widest text-red-500/80">The Problem</span>
                  </div>
                  <p className="text-slate-700 dark:text-foreground/70 leading-relaxed text-lg font-light">
                    {service.problem}
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="p-8 md:p-10 rounded-2xl bg-white dark:bg-transparent border border-primary/20 shadow-sm dark:shadow-none relative"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-6 rounded-full bg-green-500/60" />
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500/80">Our Solution</span>
                  </div>
                  <p className="text-slate-700 dark:text-foreground/70 leading-relaxed text-lg font-light">
                    {service.solution}
                  </p>
                </motion.div>
              </div>

              {/* Benefits Grid */}
              <motion.div variants={fadeUp} className="mb-16">
                <h3 className="text-2xl font-heading font-bold mb-8 text-slate-900 dark:text-foreground">
                  Key Benefits
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <GlassCard key={i} hoverEffect className="p-6 bg-white dark:bg-foreground/[0.02] border border-slate-200 dark:border-border shadow-sm dark:shadow-none">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-heading font-bold text-lg mb-2 text-slate-900 dark:text-foreground">{benefit.title}</h4>
                      <p className="text-slate-600 dark:text-foreground/50 text-sm leading-relaxed">{benefit.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div variants={fadeUp} className="mb-12">
                <h3 className="text-2xl font-heading font-bold mb-8 text-slate-900 dark:text-foreground">
                  Our Process
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative">
                      {i < service.process.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 dark:bg-foreground/10 z-0" style={{ width: "calc(100% - 2rem)" }} />
                      )}
                      <div className="relative z-10 p-6 rounded-2xl bg-white dark:bg-foreground/[0.03] border border-slate-200 dark:border-border shadow-sm dark:shadow-none">
                        <div className="text-3xl font-heading font-black text-primary dark:text-blue-400 mb-3">{step.step}</div>
                        <h4 className="font-heading font-bold text-lg mb-2 text-slate-900 dark:text-foreground">{step.title}</h4>
                        <p className="text-slate-600 dark:text-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="text-center pt-8">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-base shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    Discuss Your {service.title.split(" ")[0]} Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── Bottom CTA ─── */}
      <section className="py-24 md:py-32 bg-white dark:bg-transparent border-t border-slate-200 dark:border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-slate-900 dark:text-foreground"
            >
              Not sure which service fits?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-foreground/60 mb-10 text-lg font-light leading-relaxed"
            >
              Book a free strategy call. We&apos;ll help you figure out the right approach, scope, and timeline — no commitment, no pressure.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="https://cal.com/pratik-khose" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all">
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
