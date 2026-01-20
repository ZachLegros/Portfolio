"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BrowserMockup from "@/components/ui/BrowserMockup";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import { projects } from "@/lib/data";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="From cryptocurrency analytics to e-commerce platforms"
    >
      {/* Featured Projects */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col overflow-hidden" glow>
              {/* Project Screenshot */}
              <div className="-mx-6 -mt-6 mb-6">
                {project.screenshot ? (
                  <BrowserMockup
                    src={project.screenshot}
                    alt={project.screenshotAlt || `${project.name} screenshot`}
                    url={project.url?.replace(/^https?:\/\//, "")}
                    href={project.url}
                    priority={index < 2}
                  />
                ) : (
                  <ProjectPlaceholder
                    projectName={project.name}
                    technologies={project.technologies}
                  />
                )}
              </div>

              {/* Project Header */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-manrope)] text-2xl font-bold">
                    {project.name}
                  </h3>
                  <Badge variant="primary">Featured</Badge>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-white/10"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-white/10"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground-muted mb-4 flex-grow">
                {project.longDescription || project.description}
              </p>

              {/* Features */}
              {project.features && (
                <div className="mb-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-foreground-muted flex items-center gap-2 text-sm"
                      >
                        <span className="bg-primary h-1 w-1 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              {project.url && (
                <Button
                  href={project.url}
                  variant="secondary"
                  size="sm"
                  external
                  className="mt-auto self-start"
                >
                  View Live
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-foreground-muted mb-6 text-lg font-semibold">
          Other Projects
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-3 flex items-start justify-between">
                  <h4 className="font-[family-name:var(--font-manrope)] font-bold">
                    {project.name}
                  </h4>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-muted hover:text-foreground transition-colors"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-muted hover:text-foreground transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-foreground-muted mb-3 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
