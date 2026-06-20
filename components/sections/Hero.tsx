"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Premium Linear-style Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 dark:opacity-100">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>

      {/* Single static glow — no animation, GPU-composited */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none will-change-transform" 
        style={{ transform: 'translateZ(0)' }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-xs md:text-sm mb-8 text-foreground"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          <span className="font-medium tracking-wide">Hi, I'm Pratik Khose</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-8 leading-[1.05] text-foreground"
        >
          Building Software That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50">
            Solves Real Business Problems.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/60 max-w-3xl mb-12 font-light leading-relaxed"
        >
          Software Developer specializing in Mobile Apps, SaaS Platforms, Healthcare Systems, and Business Software. I design, develop, and deploy production-ready software solutions used by real businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Link href="/projects">
            <Button size="lg" className="h-14 px-8 text-base shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-shadow">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://cal.com/pratik-khose" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-14 px-8 text-base group border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20 text-foreground">
              Book a Call
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Subtle fade at the bottom to transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
