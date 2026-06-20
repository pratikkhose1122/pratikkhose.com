"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it typically take to build an app?",
    answer: "For a standard MVP (Minimum Viable Product), we typically launch within 8 to 12 weeks. More complex enterprise applications can take 3 to 6 months. We work in 2-week sprints, so you see working software regularly."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes. We offer comprehensive Service Level Agreements (SLAs) that include bug fixes, OS updates, performance monitoring, and server maintenance to ensure 99.9% uptime."
  },
  {
    question: "Who owns the source code?",
    answer: "You do. 100%. Upon final payment, all intellectual property, source code, and assets are fully transferred to your company. We build it, but you own it."
  },
  {
    question: "How do you handle communication during the project?",
    answer: "We set up a dedicated Slack/Discord channel for real-time communication, provide a shared project management board (Linear/Jira), and hold weekly video syncs to review progress and blockages."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Common Questions
          </h2>
          <p className="text-xl text-foreground/60">
            Everything you need to know about how we work.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary/50 bg-primary/5' : 'border-border bg-foreground/5 hover:border-foreground/20'}`}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium pr-8 text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-foreground/50 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(37,99,235,0.4)] h-14 px-8">
              Schedule a Free Strategy Call
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
