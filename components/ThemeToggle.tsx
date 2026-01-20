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
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="border-foreground/10 bg-background/90 text-foreground-muted hover:border-foreground/20 hover:text-foreground fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border px-3 py-2 shadow-sm backdrop-blur-md transition-colors duration-300"
      aria-label={label}
      title={label}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
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
