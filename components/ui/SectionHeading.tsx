import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-[11px] font-semibold tracking-[0.2em] uppercase mb-2",
            dark ? "text-[#C6A15B]" : "text-[#B18A4A]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12]",
          dark ? "text-[#FFFFFF]" : "text-[#10253D]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-sm sm:text-base leading-relaxed max-w-2xl",
            dark ? "text-[#AAB4C3]" : "text-[#626B76]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
