import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  light = false,
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-[#C6A15B]/35 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#92703B] dark:text-[#DFBF7D]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] transition-colors duration-300 ${
          light ? "text-[#10253D]" : "text-[#10253D] dark:text-[#F7F5F0]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
            light ? "text-[#4A586E]" : "text-[#4A586E] dark:text-[#AAB4C3]"
          } max-w-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
