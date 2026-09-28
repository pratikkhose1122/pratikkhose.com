"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const technologiesData = [
  { name: "Flutter", iconPath: "/tech/flutter.svg", needsInvert: false },
  { name: "Supabase", iconPath: "/tech/supabase.svg", needsInvert: false },
  { name: "Firebase", iconPath: "/tech/firebase.svg", needsInvert: false },
  { name: "PostgreSQL", iconPath: "/tech/postgresql.svg", needsInvert: false },
  { name: "Node.js", iconPath: "/tech/nodejs.svg", needsInvert: false },
  { name: "GitHub", iconPath: "/tech/github.svg", needsInvert: true },
  { name: "Vercel", iconPath: "/tech/vercel.svg", needsInvert: true },
  { name: "Docker", iconPath: "/tech/docker.svg", needsInvert: false },
];

export function TechStack() {
  return (
    <section className="py-24 md:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6">
              Technologies I Work With
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
              Production-ready technologies used to build scalable mobile apps, SaaS platforms, healthcare systems, and business software.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {technologiesData.map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center justify-center text-center py-8 px-4 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/[0.35] hover:-translate-y-[6px] hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] transition-all duration-300 group"
              >
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <Image
                    src={tech.iconPath}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className={`object-contain transition-transform duration-300 group-hover:scale-[1.08] ${tech.needsInvert ? "dark:invert" : ""}`}
                  />
                </div>
                <div className="font-heading font-medium text-base text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
