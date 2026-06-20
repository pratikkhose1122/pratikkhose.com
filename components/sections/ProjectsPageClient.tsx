"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProjectData } from "@/lib/config/projectsConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};



import { projectsConfig } from "@/lib/config/projectsConfig";

export default function ProjectsPageClient() {
  const projects = projectsConfig;
  return (
    <div className="bg-background">
      {/* ─── Hero Header ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1),rgba(255,255,255,1))] dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:via-[#0d1429] dark:to-background" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-5 dark:opacity-30"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs md:text-sm mb-8 text-slate-700 dark:text-foreground/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)] dark:shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="font-medium tracking-wide">Our Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 leading-[1.05] text-slate-900 dark:text-foreground"
          >
            Real Products.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 dark:from-white dark:via-white/90 dark:to-white/50">
              Real Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Every project below is a live, production product solving real
            business problems. We don&apos;t build demos — we ship software.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-6 md:gap-10 px-8 py-4 rounded-2xl bg-white dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 shadow-sm dark:shadow-none"
          >
            <div className="text-center">
              <div className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-wider">Flutter Experts</div>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-foreground/10" />
            <div className="text-center">
              <div className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-wider">Production Ready</div>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-foreground/10" />
            <div className="text-center">
              <div className="text-sm md:text-base font-heading font-bold text-primary uppercase tracking-wider">End-to-End Delivery</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Projects List ─── */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-16"
          >
            {projects.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative rounded-3xl border border-slate-200 dark:border-border overflow-hidden bg-white dark:bg-background hover:border-primary/30 transition-all duration-500 shadow-sm dark:shadow-none">
                    <div className={`grid lg:grid-cols-[45%_55%] ${i % 2 !== 0 ? "lg:grid-cols-[55%_45%] lg:grid-flow-dense" : ""}`}>
                      {/* Content Side */}
                      <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <span className={`px-3 py-1 rounded-full bg-foreground/5 text-xs font-medium ${project.statusColor}`}>
                            {project.status}
                          </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4 text-slate-900 dark:text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h2>

                        <p className="text-slate-600 dark:text-foreground/60 text-lg leading-relaxed mb-6 font-light max-w-xl">
                          {project.cardDescription}
                        </p>

                        {/* Deliverables */}
                        <div className="text-sm text-slate-500 dark:text-foreground/50 mb-6 font-medium">
                          {project.deliverables}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-full bg-slate-50 dark:bg-foreground/5 text-slate-700 dark:text-foreground/70 text-xs font-medium border border-slate-200 dark:border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                          View Case Study
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Visual Side — Final Premium Showcase Image */}
                      <div
                        className={`relative w-full h-[500px] lg:h-[550px] overflow-hidden ${
                          i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                        }`}
                      >
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          priority
                          sizes="50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-border bg-white dark:bg-transparent">
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
              Ready to build something like this?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-foreground/60 mb-10 text-lg font-light leading-relaxed"
            >
              We bring the same level of premium engineering, design, and
              business logic to every project. Let&apos;s discuss yours.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="https://cal.com/pratik-khose" target="_blank" rel="noopener noreferrer">
            <Button
                  size="lg"
                  className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all"
                >
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
