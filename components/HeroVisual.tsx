"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TokenType =
  | "keyword"
  | "variable"
  | "property"
  | "string"
  | "boolean"
  | "punctuation";

interface Token {
  text: string;
  type: TokenType;
}

interface CodeLine {
  tokens: Token[];
  delay: number;
}

const tokenColors: Record<TokenType, string> = {
  keyword: "text-[#c678dd]", // purple
  variable: "text-[#e06c75]", // red/coral
  property: "text-[#61afef]", // blue
  string: "text-[#98c379]", // green
  boolean: "text-[#d19a66]", // orange
  punctuation: "text-[#abb2bf]", // gray
};

const codeLines: CodeLine[] = [
  {
    delay: 0,
    tokens: [
      { text: "const", type: "keyword" },
      { text: " ", type: "punctuation" },
      { text: "zach", type: "variable" },
      { text: " = {", type: "punctuation" },
    ],
  },
  {
    delay: 0.6,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "location", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: '"Ottawa, Canada"', type: "string" },
      { text: ",", type: "punctuation" },
    ],
  },
  {
    delay: 1.2,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "fuel", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: '"too much coffee"', type: "string" },
      { text: ",", type: "punctuation" },
    ],
  },
  {
    delay: 1.8,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "sideProject", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: '"MoonDCA.com"', type: "string" },
      { text: ",", type: "punctuation" },
    ],
  },
  {
    delay: 2.4,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "interests", type: "property" },
      { text: ": [", type: "punctuation" },
    ],
  },
  {
    delay: 3.0,
    tokens: [
      { text: "        ", type: "punctuation" },
      { text: '"markets"', type: "string" },
      { text: ", ", type: "punctuation" },
      { text: '"weightlifting"', type: "string" },
      { text: ",", type: "punctuation" },
    ],
  },
  {
    delay: 3.6,
    tokens: [
      { text: "        ", type: "punctuation" },
      { text: '"cars"', type: "string" },
    ],
  },
  {
    delay: 4.2,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "],", type: "punctuation" },
    ],
  },
  {
    delay: 4.8,
    tokens: [
      { text: "    ", type: "punctuation" },
      { text: "lovesToBuild", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "true", type: "boolean" },
      { text: ",", type: "punctuation" },
    ],
  },
  {
    delay: 5.4,
    tokens: [{ text: "};", type: "punctuation" }],
  },
];

function TypewriterLine({
  tokens,
  startDelay,
  onComplete,
  onStart,
  showCursor,
}: {
  tokens: Token[];
  startDelay: number;
  onComplete?: () => void;
  onStart?: () => void;
  showCursor?: boolean;
}) {
  const fullText = tokens.map((t) => t.text).join("");
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Use refs for callbacks to avoid re-running effect
  const onStartRef = useRef(onStart);
  const onCompleteRef = useRef(onComplete);
  onStartRef.current = onStart;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLength(fullText.length);
      setIsComplete(true);
      setHasStarted(true);
      onStartRef.current?.();
      onCompleteRef.current?.();
      return;
    }

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      onStartRef.current?.();
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedLength(currentIndex);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
      }, 30);

      return () => clearInterval(intervalId);
    }, startDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [fullText, startDelay, prefersReducedMotion]);

  // Render tokens with syntax highlighting
  const renderTokens = () => {
    let charCount = 0;
    return tokens.map((token, i) => {
      const tokenStart = charCount;
      const tokenEnd = charCount + token.text.length;
      charCount = tokenEnd;

      if (displayedLength <= tokenStart) {
        return null;
      }

      const visibleLength = Math.min(
        displayedLength - tokenStart,
        token.text.length
      );
      const visibleText = token.text.slice(0, visibleLength);

      return (
        <span
          key={i}
          className={tokenColors[token.type]}
          style={{ whiteSpace: "pre" }}
        >
          {visibleText}
        </span>
      );
    });
  };

  const shouldShowCursor = showCursor && hasStarted && !isComplete;

  return (
    <span>
      {renderTokens()}
      {shouldShowCursor && (
        <span className="terminal-cursor inline-block h-4 w-2 opacity-100" />
      )}
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
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const completedLines = useRef(0);

  useEffect(() => {
    if (!allComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [allComplete]);

  const handleLineStart = (index: number) => {
    setActiveLine(index);
  };

  const handleLineComplete = () => {
    completedLines.current++;
    if (completedLines.current >= codeLines.length) {
      setActiveLine(null);
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
              <span className="terminal-code whitespace-pre">
                <TypewriterLine
                  tokens={line.tokens}
                  startDelay={line.delay}
                  onStart={() => handleLineStart(index)}
                  onComplete={handleLineComplete}
                  showCursor={activeLine === index}
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
