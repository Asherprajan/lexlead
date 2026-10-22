"use client";

import React, { useState, useEffect, useRef } from "react";

interface LineConfig {
  text: string;
  isGold?: boolean;
  isItalic?: boolean;
}

const LINES: LineConfig[] = [
  { text: "Legal" },
  { text: "Solutions" },
  { text: "for a Brighter" },
  { text: "Tomorrow.", isGold: true, isItalic: true },
];

export const AnimatedHeroTitle: React.FC = () => {
  const allChars = useRef(
    LINES.flatMap((line, lineIndex) =>
      line.text.split("").map((char) => ({
        char,
        lineIndex,
        isGold: line.isGold,
        isItalic: line.isItalic,
      }))
    )
  ).current;

  const totalChars = allChars.length;
  const [visibleCount, setVisibleCount] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion for accessibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCount(totalChars);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    // Phase 1: Typing letter by letter
    if (!isFading && visibleCount < totalChars) {
      timeoutId = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 55); // Smooth 55ms letter typing cadence
    }
    // Phase 2: Complete headline displayed -> hold so user can read with ease
    else if (!isFading && visibleCount >= totalChars) {
      timeoutId = setTimeout(() => {
        setIsFading(true);
      }, 3600); // 3.6s hold duration
    }
    // Phase 3: Smooth fade-out transition, reset, and loop
    else if (isFading) {
      timeoutId = setTimeout(() => {
        setVisibleCount(0);
        setIsFading(false);
      }, 500); // 500ms fade duration
    }

    return () => clearTimeout(timeoutId);
  }, [visibleCount, isFading, totalChars, prefersReducedMotion]);

  // Compute character offset for each line
  let runningIndex = 0;

  return (
    <h1
      className="font-hero-bold text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold tracking-tight text-[#10253D] leading-[1.05] select-none"
      aria-label="Legal Solutions for a Brighter Tomorrow."
    >
      <span
        aria-hidden="true"
        className={`block transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {LINES.map((line, lineIndex) => {
          const lineStartIndex = runningIndex;
          const lineLength = line.text.length;
          runningIndex += lineLength;

          // Initial cursor at start of line 0 before any letters appear
          const showInitialCursor =
            !isFading &&
            !prefersReducedMotion &&
            visibleCount === 0 &&
            lineIndex === 0;

          return (
            <span
              key={lineIndex}
              className={`block min-h-[1.05em] ${
                line.isGold ? "text-[#C6A15B]" : "text-[#10253D]"
              } ${line.isItalic ? "italic" : "not-italic"}`}
            >
              {showInitialCursor && (
                <span
                  className="inline-block w-[3px] sm:w-[4px] h-[0.76em] bg-[#C6A15B] align-baseline animate-pulse shadow-[0_0_8px_rgba(198,161,91,0.6)]"
                  style={{ verticalAlign: "-0.04em" }}
                />
              )}

              {line.text.split("").map((char, charInLineIdx) => {
                const globalIndex = lineStartIndex + charInLineIdx;
                const isVisible = visibleCount > globalIndex;
                const isCursorHere =
                  !isFading &&
                  !prefersReducedMotion &&
                  globalIndex === visibleCount - 1;

                return (
                  <React.Fragment key={charInLineIdx}>
                    <span
                      className={`inline-block transition-opacity duration-150 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>

                    {/* Blinking gold cursor attached directly to current typed letter */}
                    {isCursorHere && (
                      <span
                        className="inline-block w-[3px] sm:w-[4px] h-[0.76em] bg-[#C6A15B] ml-0.5 align-baseline animate-pulse shadow-[0_0_8px_rgba(198,161,91,0.6)]"
                        style={{ verticalAlign: "-0.04em" }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </span>
          );
        })}
      </span>
    </h1>
  );
};
