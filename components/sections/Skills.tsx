"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills, type Skill } from "@/lib/data";

function ProficiencyDots({
  proficiency,
  isHovered,
}: {
  proficiency: number;
  isHovered: boolean;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((level) => (
        <motion.div
          key={level}
          className={`h-1.5 w-1.5 rounded-full ${
            level <= proficiency ? "bg-primary" : "bg-foreground-muted/20"
          }`}
          initial={false}
          animate={
            isHovered && level <= proficiency
              ? { scale: [1, 1.4, 1] }
              : { scale: 1 }
          }
          transition={{
            duration: 0.3,
            delay: level * 0.05,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function SkillItem({ skill, delay }: { skill: Skill; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="hover:border-primary/30 hover:bg-primary/5 flex cursor-default items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-colors duration-200"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="text-sm font-medium">{skill.name}</span>
        <ProficiencyDots
          proficiency={skill.proficiency}
          isHovered={isHovered}
        />
      </motion.div>
    </motion.div>
  );
}

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
            className="glass-card group rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-manrope)] text-lg font-bold">
              <span className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <span className="bg-primary h-3 w-3 rounded-full" />
              </span>
              {category.title}
            </h3>
            <div className="flex flex-col gap-2">
              {category.items.map((skill, skillIndex) => (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  delay={categoryIndex * 0.1 + skillIndex * 0.05}
                />
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
            <div className="gradient-text mb-2 text-3xl font-bold">25+</div>
            <div className="text-foreground-muted">Technologies Used</div>
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
