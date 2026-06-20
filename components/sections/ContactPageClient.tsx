"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Mail, Phone, MessageCircle, Calendar, MapPin,
  Loader2, CheckCircle2, Plus, Minus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const EMAIL = "buildyourway.studio@gmail.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=Project%20Inquiry%20-%20Pratik%20Khose&body=Hi!%20I'm%20interested%20in%20building%20an%20app.%20Here%20are%20my%20project%20details%3A%0A%0A`;
const CAL_URL = "https://cal.com/pratik-khose";

const faqs = [
  {
    question: "How long does it typically take to build an app?",
    answer:
      "For a standard MVP, I typically launch within 8 to 12 weeks. More complex enterprise applications can take 3 to 6 months. I work in 2-week sprints, so you see working software regularly.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. I offer comprehensive SLAs that include bug fixes, OS updates, performance monitoring, and server maintenance to ensure 99.9% uptime.",
  },
  {
    question: "Who owns the source code?",
    answer:
      "You do. 100%. Upon final payment, all intellectual property, source code, and assets are fully transferred to your company. I build it, but you own it.",
  },
  {
    question: "How do you handle communication during the project?",
    answer:
      "I set up a dedicated Slack/Discord channel for real-time communication, provide a shared project management board, and hold weekly video syncs to review progress.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My primary stack includes Flutter for mobile, Next.js/React for web, Node.js for backend, and Supabase/PostgreSQL for databases. I choose the best tool for each project's unique requirements.",
  },
];

import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from "react";

export default function ContactPageClient() {
  const [state, handleSubmit] = useForm('xzdqnegq');
  const [openFaq, setOpenFaq] = useState<number | null>(0);



  return (
    <div className="bg-background">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-white dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1),rgba(255,255,255,1))] dark:bg-gradient-to-b dark:from-[#0a0f1e] dark:via-[#0d1429] dark:to-background" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-5 dark:opacity-30" style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-foreground/10 text-xs md:text-sm mb-8 text-slate-700 dark:text-foreground/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.5)] dark:shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            <span className="font-medium tracking-wide">Let&apos;s Talk</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6 text-slate-900 dark:text-foreground"
          >
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Extraordinary
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Fill out the form or reach out directly. I respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ─── Contact Methods Strip ─── */}
      <section className="py-8 border-y border-slate-200 dark:border-border bg-slate-50 dark:bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={EMAIL_URL}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-background border border-slate-200 dark:border-border hover:border-primary/30 hover:bg-blue-50 dark:hover:bg-primary/[0.05] transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-foreground">Email</h4>
                <p className="text-sm text-slate-500 dark:text-foreground/50 break-all">{EMAIL}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 dark:text-foreground/30 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-background border border-slate-200 dark:border-border hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/[0.05] transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                <Calendar className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-foreground">Schedule Call</h4>
                <p className="text-sm text-slate-500 dark:text-foreground/50">Book a free session</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 dark:text-foreground/30 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-900 dark:text-foreground">
                How It Works
              </h2>
              <p className="text-slate-600 dark:text-foreground/60 mb-12 leading-relaxed">
                Fill out the form and I'll get back within 24 hours with a tailored assessment of your project.
              </p>

              <div className="space-y-8">
                {[
                  { num: "01", title: "Share Your Idea", desc: "Tell me about your project, goals, and timeline." },
                  { num: "02", title: "Free Assessment", desc: "I analyze feasibility, recommend a tech stack, and estimate scope." },
                  { num: "03", title: "Tailored Plan", desc: "Receive a detailed proposal with timeline, milestones, and pricing." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-heading font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-foreground">{step.title}</h4>
                      <p className="text-slate-600 dark:text-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-200 dark:border-border space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 border border-slate-200 dark:border-border">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-foreground">Email</h4>
                    <a href={EMAIL_URL} className="text-slate-600 dark:text-foreground/60 hover:text-primary transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {state.succeeded ? (
                <div className="flex items-center justify-center min-h-[500px]">
                  <div className="max-w-md w-full bg-white dark:bg-foreground/5 border border-slate-200 dark:border-border rounded-3xl p-10 text-center shadow-sm dark:shadow-none">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold mb-4 text-slate-900 dark:text-foreground">Request Received!</h2>
                    <p className="text-slate-600 dark:text-foreground/70 mb-8">
                      We've received your request and will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-foreground/5 border border-slate-200 dark:border-border rounded-3xl p-8 sm:p-10 shadow-lg dark:shadow-none">
                  {state.errors && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm">
                      There was a problem submitting your request. Please ensure all fields are valid.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Full Name *</label>
                        <input required type="text" id="name" name="name" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Rahul Patil" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Company</label>
                        <input type="text" id="company" name="company" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Acme Inc." />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Email Address *</label>
                        <input required type="email" id="email" name="email" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="rahul@example.com" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Service Required *</label>
                      <select required id="service" name="service" defaultValue="" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                        <option value="" disabled>Select a service...</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Startup & MVP Development">Startup & MVP Development</option>
                        <option value="Custom Software Solutions">Custom Software Solutions</option>
                        <option value="Web Application">Web Application</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Estimated Budget *</label>
                      <select required id="budget" name="budget" defaultValue="" className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                        <option value="" disabled>Select budget range...</option>
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 – ₹1 Lakh">₹50,000 – ₹1 Lakh</option>
                        <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
                        <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
                        <option value="₹5 Lakhs – ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                        <option value="₹10 Lakhs+">₹10 Lakhs+</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-foreground/80">Project Details *</label>
                      <textarea required id="message" name="message" rows={4} className="w-full bg-slate-50 dark:bg-background/50 border border-slate-200 dark:border-border rounded-xl px-4 py-3 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your project, goals, and timeline..." />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={state.submitting}>
                      {state.submitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                    <p className="text-center text-xs text-slate-400 dark:text-foreground/40 mt-4">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-t border-slate-200 dark:border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-foreground">
                Common Questions
              </h2>
              <p className="text-xl text-slate-600 dark:text-foreground/60">
                Everything you need to know about how I work.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    openFaq === index
                      ? "border-primary/50 bg-white dark:bg-primary/5"
                      : "border-slate-200 dark:border-border bg-white dark:bg-foreground/5 hover:border-slate-300 dark:hover:border-foreground/20"
                  } shadow-sm dark:shadow-none`}
                >
                  <button
                    className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-medium pr-8 text-slate-900 dark:text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-slate-400 dark:text-foreground/50 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 dark:text-foreground/70 leading-relaxed border-t border-slate-200 dark:border-border pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
