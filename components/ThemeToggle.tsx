"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label =
    theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      onClick={toggleTheme}
      className="border-card-border bg-background/80 text-foreground-muted hover:border-primary/30 hover:text-foreground fixed right-6 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
      aria-label={label}
      title={label}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </motion.span>
    </motion.button>
  );
}
