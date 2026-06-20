"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileText, PenTool, Code2, Bug, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    { num: "01", title: "Discovery Call", icon: <PhoneCall className="w-6 h-6 text-primary" />, desc: "We discuss your vision, business goals, and technical requirements to ensure perfect alignment." },
    { num: "02", title: "Requirement Analysis", icon: <FileText className="w-6 h-6 text-primary" />, desc: "Our team architects the solution, selecting the optimal tech stack and mapping out the database." },
    { num: "03", title: "Design", icon: <PenTool className="w-6 h-6 text-primary" />, desc: "We craft premium, conversion-focused UI/UX flows that wow users and build instant trust." },
    { num: "04", title: "Development", icon: <Code2 className="w-6 h-6 text-primary" />, desc: "Agile sprints bring your product to life using scalable, modern frameworks like Next.js and Flutter." },
    { num: "05", title: "Testing", icon: <Bug className="w-6 h-6 text-primary" />, desc: "Rigorous QA across devices ensures zero critical bugs and a perfectly smooth user experience." },
    { num: "06", title: "Launch & Support", icon: <Rocket className="w-6 h-6 text-primary" />, desc: "We deploy to production, monitor performance, and provide long-term scaling support." }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground">How We Build</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A battle-tested process designed to transform your idea into a market-ready product efficiently and predictably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Desktop connector line */}
              {i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-8 left-[140px] right-[-2rem] h-px bg-foreground/10" />
              )}
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 relative">
                  <div className="h-16 w-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-heading font-black text-foreground/40 dark:text-foreground/50 select-none relative z-10">
                    {step.num}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-foreground/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
