"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="aurora" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 container mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
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
            className="mb-4 font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="text-foreground-muted mb-10 max-w-2xl text-lg md:text-xl lg:text-2xl"
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
            className="mb-12 flex flex-wrap justify-center gap-4"
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
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-foreground-muted hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="text-foreground-muted/30">·</span>
            <span className="text-foreground-muted text-sm">
              {personalInfo.email}
            </span>
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
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-foreground-muted/30 h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
