"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle scroll direction and visibility
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;

    // Show nav once past hero section, hide when in hero
    setIsVisible(currentScrollY > heroHeight);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="bg-primary fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 left-0 z-50 pt-[2px]"
          >
            <nav className="border-card-border/50 bg-background/80 mx-4 mt-4 rounded-2xl border backdrop-blur-xl md:mx-auto md:max-w-3xl">
              <div className="flex items-center justify-between px-4 py-3 md:px-6">
                {/* Logo/Name */}
                <motion.button
                  onClick={scrollToTop}
                  className="font-[family-name:var(--font-manrope)] text-lg font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="gradient-text">ZL</span>
                </motion.button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                  {navItems.map(({ id, label }) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`group relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        activeSection === id
                          ? "text-foreground"
                          : "text-foreground-muted hover:text-foreground"
                      }`}
                      whileHover="hover"
                      initial="initial"
                    >
                      {activeSection === id && (
                        <motion.span
                          layoutId="activeSection"
                          className="bg-primary/10 border-primary/20 absolute inset-0 rounded-lg border"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                      {/* Hover underline */}
                      {activeSection !== id && (
                        <motion.span
                          className="bg-primary absolute right-3 bottom-1 left-3 h-0.5 origin-left"
                          variants={{
                            initial: { scaleX: 0 },
                            hover: { scaleX: 1 },
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-foreground-muted hover:text-foreground rounded-lg p-2 transition-colors md:hidden"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden md:hidden"
                  >
                    <div className="border-card-border/50 space-y-1 border-t px-4 py-3">
                      {navItems.map(({ id, label }, index) => (
                        <motion.button
                          key={id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => scrollToSection(id)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                            activeSection === id
                              ? "bg-primary/10 text-foreground"
                              : "text-foreground-muted hover:bg-card hover:text-foreground"
                          }`}
                        >
                          {label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/50 fixed inset-0 z-40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
