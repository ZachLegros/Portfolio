"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      external = false,
      className = "",
      disabled,
      type = "button",
      onClick,
    },
    ref
  ) => {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

    const variants = {
      primary:
        "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:brightness-110",
      secondary: isLight
        ? "border border-slate-300 text-slate-800 bg-slate-100 hover:bg-slate-200 hover:border-slate-400"
        : "border border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20",
      ghost: isLight
        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        : "text-slate-400 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-3.5 text-base gap-2",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
