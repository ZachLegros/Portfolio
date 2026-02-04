"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/HeroVisual";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="aurora" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Overline */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-foreground-muted mb-6 text-sm font-medium tracking-[0.3em] uppercase"
            >
              {personalInfo.location}
            </motion.span>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-[family-name:var(--font-manrope)] text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="gradient-text text-glow">
                {personalInfo.name.split(" ")[0]}
              </span>{" "}
              <span className="text-foreground/90">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-muted mb-10 max-w-xl text-lg md:text-xl"
            >
              I&apos;m a {personalInfo.title.toLowerCase()} at{" "}
              <span className="text-primary">Trend Micro</span>, crafting{" "}
              <span className="text-accent">AI-powered security products</span>{" "}
              and interfaces people love to use.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Button href="#projects" variant="primary" size="lg">
                View Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="secondary"
                size="lg"
              >
                Get in Touch
              </Button>
              <Button
                href="/RESUME_2026.pdf"
                variant="ghost"
                size="lg"
                external
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-5"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <span className="text-foreground-muted/30">·</span>
              <span className="text-foreground-muted text-sm">
                {personalInfo.email}
              </span>
            </motion.div>
          </div>

          {/* Right column - Visual (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="relative">
          {/* Pulsing ring */}
          <motion.div
            className="border-primary/30 absolute inset-0 rounded-full border-2"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-card-border/50 relative rounded-full p-2"
          >
            <ArrowDown className="text-foreground-muted/50 h-5 w-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
