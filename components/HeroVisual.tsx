"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const codeLines = [
  { text: "const developer = {", delay: 0 },
  { text: '  name: "Zachary Legros",', delay: 0.8 },
  { text: '  role: "Full-Stack Developer",', delay: 1.6 },
  { text: "  stack: [", delay: 2.4 },
  { text: '    "React", "TypeScript",', delay: 3.0 },
  { text: '    "Next.js", "NestJS"', delay: 3.6 },
  { text: "  ],", delay: 4.2 },
  { text: '  passion: "Building products', delay: 4.8 },
  { text: '    people love to use"', delay: 5.4 },
  { text: "};", delay: 6.0 },
];

function TypewriterLine({
  text,
  startDelay,
  onComplete,
}: {
  text: string;
  startDelay: number;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
          onComplete?.();
        }
      }, 30);

      return () => clearInterval(intervalId);
    }, startDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, startDelay, onComplete, prefersReducedMotion]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}

function FloatingShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.1, 1],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [showCursor, setShowCursor] = useState(true);
  const [allComplete, setAllComplete] = useState(!!prefersReducedMotion);
  const completedLines = useRef(0);

  useEffect(() => {
    if (!allComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [allComplete]);

  const handleLineComplete = () => {
    completedLines.current++;
    if (completedLines.current >= codeLines.length) {
      setAllComplete(true);
    }
  };

  return (
    <div className="relative h-full w-full">
      {/* Floating shapes */}
      <FloatingShape
        className="bg-primary/20 absolute -top-4 -right-4 h-20 w-20 rounded-full blur-xl"
        delay={0}
      />
      <FloatingShape
        className="bg-accent/15 absolute top-1/4 -left-8 h-16 w-16 rotate-45 rounded-lg blur-lg"
        delay={1}
      />
      <FloatingShape
        className="bg-primary-light/20 absolute -right-6 bottom-1/4 h-12 w-12 rounded-full blur-lg"
        delay={2}
      />
      <FloatingShape
        className="bg-accent-light/10 absolute -bottom-2 left-1/4 h-14 w-14 rotate-12 rounded-lg blur-xl"
        delay={1.5}
      />

      {/* Glow effect behind terminal */}
      <div className="bg-primary/10 absolute inset-0 translate-x-4 translate-y-4 rounded-2xl blur-2xl" />

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="terminal-window relative overflow-hidden rounded-2xl"
      >
        {/* Terminal header */}
        <div className="terminal-header flex items-center gap-2 px-4 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="terminal-title ml-2 text-xs">developer.ts</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          {codeLines.map((line, index) => (
            <div key={index} className="terminal-line">
              <span className="terminal-line-number mr-4 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="terminal-code">
                <TypewriterLine
                  text={line.text}
                  startDelay={line.delay}
                  onComplete={
                    index === codeLines.length - 1
                      ? handleLineComplete
                      : undefined
                  }
                />
              </span>
            </div>
          ))}
          {/* Final cursor */}
          {allComplete && (
            <div className="terminal-line">
              <span className="terminal-line-number mr-4 select-none">
                {String(codeLines.length + 1).padStart(2, "0")}
              </span>
              <span
                className={`terminal-cursor inline-block h-4 w-2 ${showCursor ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
