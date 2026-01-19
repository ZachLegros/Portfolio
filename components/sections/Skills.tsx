"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills } from "@/lib/data";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([key, category], categoryIndex) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass-card group hover:border-primary/40 rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
              <span className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <span className="bg-primary h-3 w-3 rounded-full" />
              </span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="hover:border-primary/30 hover:bg-primary/5 cursor-default rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-card glow mt-12 rounded-2xl p-8"
      >
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="gradient-text mb-2 text-3xl font-bold">5+</div>
            <div className="text-foreground-muted">Years Coding</div>
          </div>
          <div>
            <div className="gradient-text mb-2 text-3xl font-bold">10+</div>
            <div className="text-foreground-muted">Technologies Mastered</div>
          </div>
          <div>
            <div className="gradient-text mb-2 text-3xl font-bold">
              AI-Native
            </div>
            <div className="text-foreground-muted">Development Workflow</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
