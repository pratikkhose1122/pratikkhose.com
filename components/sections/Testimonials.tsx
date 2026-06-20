"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BuildYourWay didn't just build an app; they engineered an entire ecosystem that allowed us to scale from 1,000 to 10,000 members effortlessly.",
    author: "Rahul Sharma",
    role: "Founder, MyGymBook",
    company: "MyGymBook",
  },
  {
    quote: "Their understanding of product strategy and conversion optimization is unmatched. The platform they delivered doubled our lead generation in 30 days.",
    author: "Priya Patel",
    role: "CMO",
    company: "TechFlow Solutions",
  },
  {
    quote: "Working with them feels like having an elite Silicon Valley engineering team in-house. Fast, communicative, and technically brilliant.",
    author: "Arjun Desai",
    role: "CEO",
    company: "Innovate AI",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const scrollPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Trusted by Innovators
          </h2>
        </div>

        <div className="relative">
          <Quote className="absolute -top-10 -left-10 w-24 h-24 text-primary/10 rotate-180" />
          
          <div className="h-[300px] sm:h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <p className="text-2xl sm:text-3xl font-light text-foreground/90 leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <div className="font-bold text-lg text-foreground">{testimonials[currentIndex].author}</div>
                  <div className="text-foreground/50 text-sm">
                    {testimonials[currentIndex].role}, <span className="text-primary">{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors text-foreground" onClick={scrollPrev}>
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors text-foreground" onClick={scrollNext}>
              →
            </button>
          </div>
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
