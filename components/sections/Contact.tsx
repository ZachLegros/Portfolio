"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="contact" className="pb-8">
      <div className="glass-card glow rounded-3xl p-8 text-center md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Let&apos;s Work Together</span>
          </h2>
          <p className="text-foreground-muted mx-auto mb-8 max-w-xl text-lg">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              size="lg"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              href={personalInfo.linkedin}
              variant="secondary"
              size="lg"
              external
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-foreground-muted flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-foreground-muted text-sm">
            &copy; {currentYear} {personalInfo.name}. Built with Next.js &
            Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
}
