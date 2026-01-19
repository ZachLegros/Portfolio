"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown, Award } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { experience } from "@/lib/data";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("trend-micro");

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Building enterprise security systems and crafting exceptional user experiences"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="from-primary via-cyan absolute top-0 bottom-0 left-0 hidden w-px bg-gradient-to-b to-transparent md:left-8 md:block" />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative md:ml-16 ${
                  job.isFeatured ? "border-primary/40" : ""
                }`}
                glow={job.isFeatured}
              >
                {/* Timeline dot */}
                <div className="bg-primary border-background absolute top-8 -left-[4.5rem] hidden h-4 w-4 rounded-full border-4 md:block" />

                <button
                  onClick={() =>
                    setExpandedId(expandedId === job.id ? null : job.id)
                  }
                  className="w-full text-left focus-visible:outline-none"
                  aria-expanded={expandedId === job.id}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold md:text-2xl">
                          {job.role}
                        </h3>
                        {job.isFeatured && (
                          <Badge variant="primary" size="sm">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="text-foreground-muted flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="text-primary flex items-center gap-1.5 font-medium">
                          <Briefcase className="h-4 w-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                          {job.duration && (
                            <span className="text-foreground-muted/60">
                              ({job.duration})
                            </span>
                          )}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                      </div>
                      {job.internPeriod && (
                        <p className="text-foreground-muted/70 mt-1 text-sm">
                          Intern: {job.internPeriod}
                          {job.internDuration && (
                            <span className="text-foreground-muted/50">
                              {" "}
                              ({job.internDuration})
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="self-start rounded-lg p-2 hover:bg-white/5"
                    >
                      <ChevronDown className="text-foreground-muted h-5 w-5" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 pt-6">
                        <p className="text-foreground-muted">
                          {job.description}
                        </p>

                        {/* Achievements with metrics */}
                        {job.achievements && (
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {job.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="rounded-xl border border-white/5 bg-white/5 p-4"
                              >
                                <div className="gradient-text mb-1 text-2xl font-bold">
                                  {achievement.metric}
                                </div>
                                <div className="text-foreground-muted text-sm">
                                  {achievement.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Highlights */}
                        <div>
                          <h4 className="text-foreground-muted mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
                            <Award className="h-4 w-4" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {job.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="text-foreground-muted flex items-start gap-3"
                              >
                                <span className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="default">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
