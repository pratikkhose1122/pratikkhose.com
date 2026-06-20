"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Rocket, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const primaryServices = [
  {
    title: "Mobile App Development",
    href: "/services",
    description: "Build high-performance Android, iOS and Flutter applications.",
    icon: <Smartphone className="w-5 h-5 text-primary" />,
    highlights: ["Flutter Apps", "Android Apps", "iOS Apps", "Cross Platform Solutions"],
  },
  {
    title: "Startup & MVP Development",
    href: "/services",
    description: "Transform ideas into launch-ready products quickly.",
    icon: <Rocket className="w-5 h-5 text-primary" />,
    highlights: ["MVP Development", "Product Strategy", "UI/UX Design", "Rapid Prototyping"],
  },
  {
    title: "Custom Software Solutions",
    href: "/services",
    description: "Tailored software built around your business workflow.",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    highlights: ["CRM Systems", "Gym Management Software", "Healthcare Platforms", "Business Automation"],
  }
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, staggerChildren: 0.05 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="absolute left-0 right-0 top-full pt-4 w-full origin-top"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          onMouseLeave={onClose}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background/95 backdrop-blur-md border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Top Section: 3 Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
                {primaryServices.map((service, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="p-8 group hover:bg-foreground/[0.02] transition-colors relative flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={service.href} 
                      onClick={onClose}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section: Featured Project */}
              <div className="bg-foreground/[0.02] p-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider shrink-0">
                    Featured Project
                  </div>
                  <div>
                    <h4 className="text-base font-heading font-bold text-foreground flex items-center gap-2">
                      MyGymBook
                    </h4>
                    <p className="text-sm text-foreground/60 mt-1">
                      Gym Management Platform built using Flutter and Supabase.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                  <Link href="/projects/mygymbook" onClick={onClose} className="w-full md:w-auto">
                    <Button variant="outline" size="sm" className="w-full">
                      View Case Study
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={onClose} className="w-full md:w-auto">
                    <Button size="sm" className="w-full">
                      Start a Project
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
