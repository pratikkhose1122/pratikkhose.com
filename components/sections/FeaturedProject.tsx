"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { projectsConfig } from "@/lib/config/projectsConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export function FeaturedProject() {
  return (
    <section className="py-32 bg-background border-y border-border overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] opacity-30 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Work
            </div>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            Real products we&apos;ve shipped — solving real business problems for
            real clients.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {projectsConfig.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full rounded-3xl border border-border bg-foreground/[0.02] overflow-hidden hover:border-primary/30 hover:bg-foreground/[0.04] transition-all duration-500">
                  {/* Visual Header */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-border/50">
                    <img
                      src={project.heroImage}
                      alt={`${project.title} App Screen`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay to blend with the card on light themes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/50 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.cardDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-foreground/5 text-foreground/60 text-[11px] border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center border-t border-border pt-16"
        >
          <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
            Want results like this for your business?
          </h3>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Every project starts with a free strategy call. Let&apos;s discuss how
            we can help you build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-8 text-base shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
