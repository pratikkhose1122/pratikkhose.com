"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SCREENSHOT_MAP: Record<string, string[]> = {
  "ipo-tracker": ["/screenshots/ipo-tracker-home.png", "/screenshots/ipo-tracker-settings.png"],
  mygymbook: ["/screenshots/mygymbook-dashboard.png", "/screenshots/mygymbook-members.png"],
  "mccd-app": ["/screenshots/mccd-dashboard.png", "/screenshots/mccd-profile.png"],
};

export function ScreenshotCarousel({ slug }: { slug: string }) {
  const [index, setIndex] = useState(0);
  const images = SCREENSHOT_MAP[slug] || [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return <div className="absolute inset-0 bg-slate-100 dark:bg-foreground/5 flex items-center justify-center text-slate-400">No Image</div>;
  }

  return (
    <div className="absolute inset-0 bg-background w-full h-full overflow-hidden rounded-[2rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`${slug} screenshot ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
