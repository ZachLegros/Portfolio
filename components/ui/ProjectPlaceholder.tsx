"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Globe, Rocket, TrendingUp } from "lucide-react";

interface ProjectPlaceholderProps {
  projectName: string;
  technologies: string[];
}

function getIconType(
  projectName: string,
  technologies: string[]
): "trending" | "rocket" | "database" | "globe" | "code" {
  const name = projectName.toLowerCase();

  if (name.includes("moon") || name.includes("crypto") || name.includes("dca"))
    return "trending";
  if (name.includes("rocket") || name.includes("rocketry")) return "rocket";
  if (technologies.some((t) => t.toLowerCase().includes("database")))
    return "database";
  if (technologies.some((t) => t.toLowerCase().includes("next")))
    return "globe";

  return "code";
}

const iconComponents = {
  trending: TrendingUp,
  rocket: Rocket,
  database: Database,
  globe: Globe,
  code: Code2,
};

function PlaceholderIcon({
  iconType,
  animated,
}: {
  iconType: keyof typeof iconComponents;
  animated: boolean;
}) {
  const IconComponent = iconComponents[iconType];

  if (!animated) {
    return <IconComponent className="project-placeholder-icon h-16 w-16" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <IconComponent className="project-placeholder-icon h-16 w-16" />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectPlaceholder({
  projectName,
  technologies,
}: ProjectPlaceholderProps) {
  const iconType = useMemo(
    () => getIconType(projectName, technologies),
    [projectName, technologies]
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="browser-mockup">
      {/* Browser header */}
      <div className="browser-header">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-url">Preview coming soon</div>
      </div>

      {/* Placeholder content */}
      <div className="project-placeholder aspect-video">
        <PlaceholderIcon iconType={iconType} animated={!prefersReducedMotion} />
        <span className="text-foreground-muted text-sm">
          {projectName} Preview
        </span>
      </div>
    </div>
  );
}
