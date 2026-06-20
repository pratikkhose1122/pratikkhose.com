"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SCREENSHOT_MAP: Record<string, string[]> = {
  "ipo-tracker": ["/screenshots/ipo-tracker-home.png", "/screenshots/ipo-tracker-settings.png"],
  mygymbook: ["/screenshots/mygymbook-dashboard.png", "/screenshots/mygymbook-members.png"],
  "mccd-app": ["/screenshots/mccd-dashboard.png", "/screenshots/mccd-profile.png"],
};

export function ScreenshotShowcase({ slug }: { slug: string }) {
  const images = SCREENSHOT_MAP[slug] || [];

  if (images.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-foreground/[0.02] border-y border-slate-200 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[1.5px] mb-6">
            Product Screens
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-slate-900 dark:text-foreground">
            Authentic Application Interface
          </h2>
        </div>
        
        {/* Responsive Grid: Mobile 1 col, Tablet 2 col, Desktop 2 col (as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-full aspect-[9/19] rounded-[2rem] border-[8px] border-slate-200 dark:border-foreground/10 bg-background shadow-xl overflow-hidden mx-auto max-w-[320px] md:max-w-none"
            >
              <Image
                src={src}
                alt={`${slug} screen ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
