"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MegaMenu, primaryServices } from "@/components/layout/MegaMenu";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">B</span>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-foreground">
              BuildYourWay
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Desktop Services Mega Menu Trigger */}
            <div 
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${pathname.startsWith('/services') ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
                aria-expanded={isServicesHovered}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesHovered ? "rotate-180" : ""}`} />
              </button>
              
              {/* MegaMenu is positioned relative to the nav container */}
              <MegaMenu isOpen={isServicesHovered} onClose={() => setIsServicesHovered(false)} />
            </div>

            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${pathname === '/projects' || pathname.startsWith('/projects/') ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${pathname === '/about' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
            >
              About
            </Link>
            <ThemeToggle />
            <Link href="/contact">
              <Button>Start a Project</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4 relative z-10">
            <ThemeToggle />
            <button
              className="text-foreground p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-2">
              {/* Mobile Services Section */}
              <div className="border-b border-border/50 pb-2">
                <div className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2 px-2">Services</div>
                <div className="flex flex-col gap-1">
                  {primaryServices.map((service, idx) => (
                    <Link 
                      key={idx}
                      href={service.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          {service.icon}
                        </div>
                        <span className="font-medium text-foreground">{service.title}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-foreground/30" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Mobile Links */}
              <div className="flex flex-col gap-1 pt-2">
                <Link 
                  href="/projects" 
                  className={`flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 transition-colors font-medium ${pathname === '/projects' || pathname.startsWith('/projects/') ? 'text-primary bg-primary/5' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                  <ChevronRight className="w-4 h-4 text-foreground/30" />
                </Link>
                <Link 
                  href="/about" 
                  className={`flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 transition-colors font-medium ${pathname === '/about' ? 'text-primary bg-primary/5' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                  <ChevronRight className="w-4 h-4 text-foreground/30" />
                </Link>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-12 text-base">Start a Project</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
