"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DualDeviceProps {
  slug: string;
  gradient?: string;
}

const DUAL_SCREENSHOTS: Record<string, [string, string] | null> = {
  "ipo-tracker": ["/screenshots/ipo-tracker-home.png", "/screenshots/ipo-tracker-settings.png"],
  "mygymbook": ["/screenshots/mygymbook-dashboard.png", "/screenshots/mygymbook-members.png"],
  "mccd-app": ["/screenshots/mccd-dashboard.png", "/screenshots/mccd-profile.png"],
};

export function DualDeviceMockup({ slug, gradient = "from-primary/20 to-primary/5" }: DualDeviceProps) {
  const images = DUAL_SCREENSHOTS[slug];

  // Floating animation for front phone
  const floatingFront = {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Floating animation for back phone (offset timing)
  const floatingBack = {
    y: [4, -4, 4], // Reduced movement (8px total)
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // If no real screenshots, return null as we removed fallback mockups
  if (!images) {
    return null;
  }

  return (
    <div className="relative w-full max-w-[500px] h-[550px] md:h-[650px] mx-auto flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] bg-gradient-to-br ${gradient} opacity-40 dark:opacity-20 pointer-events-none`} />

      {/* BACK PHONE */}
      <motion.div
        animate={floatingBack}
        className="hidden md:block absolute left-4 lg:left-0 top-12 w-64 aspect-[9/19] rounded-[2.5rem] border-[6px] border-slate-200 dark:border-foreground/10 bg-background shadow-xl overflow-hidden z-0"
        style={{ transformOrigin: "bottom left", scale: 0.9, rotate: "-12deg" }}
      >
        <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10 pointer-events-none" /> {/* Dim effect for background phone */}
        <Image
          src={images[1]}
          alt={`${slug} secondary screen`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </motion.div>

      {/* FRONT PHONE */}
      <motion.div
        animate={floatingFront}
        className="relative md:absolute md:right-4 lg:right-0 md:top-24 w-72 md:w-[17rem] aspect-[9/19] rounded-[2.5rem] border-[8px] border-white dark:border-foreground/20 bg-background shadow-2xl overflow-hidden z-10"
        style={{ scale: 1.0, rotate: "8deg" }}
      >
        {/* Screen Content */}
        <Image
          src={images[0]}
          alt={`${slug} primary screen`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
        
        {/* Optional gloss reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
      </motion.div>
    </div>
  );
}
