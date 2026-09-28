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
  },
  {
    title: "Startup & MVP Development",
    href: "/services",
    description: "Transform ideas into launch-ready products quickly.",
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    title: "Custom Software Solutions",
    href: "/services",
    description: "Tailored software built around your business workflow.",
    icon: <Code2 className="w-5 h-5 text-primary" />,
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
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.15 }
    }
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background/95 backdrop-blur-md border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              
              <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
                
                {/* Left Section: Services List */}
                <div className="md:col-span-3 p-4 sm:p-6 flex flex-col gap-2">
                  <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                    Services
                  </div>
                  {primaryServices.map((service, idx) => (
                    <Link 
                      key={idx}
                      href={service.href} 
                      onClick={onClose}
                      className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-foreground/[0.04] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="font-heading font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                          {service.title}
                          <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </h4>
                        <p className="text-xs text-foreground/60 leading-relaxed pr-4">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right Section: Featured Project */}
                <div className="md:col-span-2 bg-foreground/[0.02] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-5">
                      Featured Project
                    </div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                      MyGymBook
                    </h4>
                    <p className="text-sm text-foreground/60 mb-8 leading-relaxed">
                      Gym Management Platform built using Flutter and Supabase. Realtime synchronization across all devices.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href="/projects/mygymbook" onClick={onClose} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Study
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={onClose} className="flex-1">
                      <Button size="sm" className="w-full">
                        Let's Talk
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
