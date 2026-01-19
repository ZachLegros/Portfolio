"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-2xl p-6 ${glow ? "glow" : ""} ${
        hover
          ? ""
          : "hover:border-card-border hover:bg-card hover:transform-none"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
