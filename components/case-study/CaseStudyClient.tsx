"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Quote, CheckCircle2, Building2, Zap, Layers, Package, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ProjectData } from "@/lib/config/projectsConfig";

// ─── Animation Variants ──────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[1.5px] mb-6">
      {children}
    </div>
  );
}

import { getProjectBySlug } from "@/lib/config/projectsConfig";

// ─── Client Component ────────────────────────────────────

export default function CaseStudyClient({
  slug,
  nextSlug,
}: {
  slug: string;
  nextSlug?: string;
}) {
  const project = getProjectBySlug(slug);
  const nextProject = nextSlug ? getProjectBySlug(nextSlug) : undefined;

  if (!project) return null;
  return (
    <div className="bg-background">
      {/* ═══ 1. Hero Banner ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1),rgba(255,255,255,1))] dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:via-[#0d1429] dark:to-background" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-5 dark:opacity-40"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Live Product
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-foreground/80 shadow-sm">
                  Production Ready
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-foreground/80 shadow-sm">
                  Mobile App + Admin Panel
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 leading-[1.05] text-slate-900 dark:text-foreground"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-2xl text-slate-600 dark:text-foreground/60 max-w-xl mb-8 font-light leading-relaxed"
              >
                {project.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-foreground/10 text-slate-800 dark:text-foreground/90 text-sm font-medium border border-slate-200 dark:border-foreground/10 shadow-sm dark:shadow-none">
                  {project.industry}
                </span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-slate-50 dark:bg-foreground/5 text-slate-600 dark:text-foreground/70 text-sm border border-slate-200 dark:border-foreground/5"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center w-full relative group perspective-1000"
            >
              {/* Large Ambient Blue Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blur-[80px] rounded-full pointer-events-none opacity-50 dark:opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)'
                }}
              />

              {/* Massive Showcase Canvas */}
              <div className="relative w-full lg:w-[130%] max-w-[1200px] -right-[10%] z-10 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01]">
                <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)] dark:shadow-[0_40px_100px_rgba(255,255,255,0.05)] ring-1 ring-black/5 dark:ring-white/10">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    width={1400}
                    height={1200}
                    priority
                    sizes="(max-width:768px) 100vw, 80vw"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Glass Cards */}
                {slug === "mygymbook" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="absolute bottom-24 -left-20 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Scale</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">10K+ Members</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="absolute top-24 -right-16 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Efficiency</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">80% Admin Time Saved</div>
                    </motion.div>
                  </>
                )}
                
                {slug === "ipo-tracker" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="absolute bottom-24 -left-20 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Delivery</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">50K+ Alerts Sent</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="absolute top-24 -right-16 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Reliability</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">99.9% API Uptime</div>
                    </motion.div>
                  </>
                )}

                {slug === "mccd-app" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="absolute bottom-24 -left-20 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Network</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">25+ Hospitals</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="absolute top-24 -right-16 px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                    >
                      <div className="text-[10px] font-bold text-slate-500 dark:text-foreground/60 uppercase tracking-widest mb-0.5">Process</div>
                      <div className="text-lg font-heading font-black text-slate-900 dark:text-foreground">100% Digital Workflow</div>
                    </motion.div>
                  </>
                )}

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 2. Project Meta Strip ═══ */}
      <section className="py-16 border-b border-slate-200 dark:border-border bg-slate-50/50 dark:bg-foreground/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: "Industry", value: project.industry, icon: Building2 },
              { label: "Status", value: project.status, color: project.statusColor, icon: Zap },
              { label: "Technology Stack", value: project.technologies.join(", "), icon: Layers },
              { label: "Deliverables", value: project.deliverables, icon: Package },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-[#0a0f1e]/50 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-foreground shrink-0 border border-slate-200 dark:border-white/5">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-foreground/40 mb-1.5">
                    {item.label}
                  </div>
                  <div className={`font-semibold text-sm leading-relaxed ${item.color || "text-slate-900 dark:text-foreground"}`}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. Project Metrics Row ═══ */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {project.metrics.map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-foreground/50">
                    {metric.label}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-foreground tracking-tight mb-3">
                  {metric.value}
                </div>
                <p className="text-sm text-slate-600 dark:text-foreground/60 leading-relaxed font-medium">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. Overview ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <SectionPill>Overview</SectionPill>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-700 dark:text-foreground/70 leading-relaxed font-light"
            >
              {project.overview}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. Problem Section ═══ */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-y border-slate-200 dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionPill>The Challenge</SectionPill>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-12 text-slate-900 dark:text-foreground"
            >
              The Problem We Solved
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {project.problem.map((para, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-white dark:bg-background border border-slate-200 dark:border-border shadow-sm dark:shadow-none"
                >
                  <p className="text-slate-700 dark:text-foreground/70 leading-relaxed text-lg font-light">
                    {para}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. Solution Section ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionPill>The Solution</SectionPill>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-12 text-slate-900 dark:text-foreground"
            >
              Our Approach
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {project.solution.map((para, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-8 rounded-2xl border border-primary/20 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
                  <p className="text-slate-700 dark:text-foreground/70 leading-relaxed text-lg font-light">
                    {para}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. Core Features ═══ */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-y border-slate-200 dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <SectionPill>Core Features</SectionPill>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-slate-900 dark:text-foreground">
                What We Built
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <GlassCard hoverEffect className="p-8 h-full bg-white dark:bg-foreground/[0.02] border border-slate-200 dark:border-border shadow-sm dark:shadow-none">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-slate-900 dark:text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-foreground/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* ═══ 10. Technical Architecture ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <SectionPill>Architecture</SectionPill>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-slate-900 dark:text-foreground">
                Technology Stack
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {project.techArchitecture.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-foreground/[0.03] border border-slate-200 dark:border-border hover:border-primary/30 dark:hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-foreground/[0.06] transition-all duration-300 shadow-sm dark:shadow-none"
                >
                  <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-foreground/10 flex items-center justify-center mb-4">
                    <tech.icon className="w-7 h-7 text-slate-700 dark:text-foreground" />
                  </div>
                  <div className="font-bold text-sm text-slate-900 dark:text-foreground">
                    {tech.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-foreground/50 uppercase tracking-widest mt-1">
                    {tech.role}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* ═══ 12. Testimonial ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="relative p-10 md:p-16 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#0a0f1e] dark:to-[#111833] border border-slate-200 dark:border-white/10 text-center"
          >
            <motion.div variants={fadeUp}>
              <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-60" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-700 dark:text-foreground/80 italic leading-relaxed mb-8 max-w-2xl mx-auto font-light"
            >
              &ldquo;{project.testimonial.quote}&rdquo;
            </motion.p>
            <motion.div variants={fadeUp}>
              <div className="text-primary font-heading font-bold text-lg">
                {project.testimonial.author}
              </div>
              <div className="text-slate-500 dark:text-foreground/50 text-sm mt-1">
                {project.testimonial.role}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 13. Conclusion CTA ═══ */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-t border-slate-200 dark:border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionPill>Conclusion</SectionPill>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-700 dark:text-foreground/70 leading-relaxed mb-12 font-light"
            >
              {project.conclusion}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-base group"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    View Next: {nextProject.title}
                  </Button>
                </Link>
              )}
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-base shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
