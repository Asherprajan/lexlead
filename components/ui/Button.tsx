import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "goldOutline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#C6A15B] to-[#B18A4A] text-white font-medium shadow-sm hover:brightness-105 border border-[#B18A4A]",
    secondary:
      "bg-[#10253D] text-[#F7F5F0] hover:bg-[#0B1728] shadow-sm",
    outline:
      "bg-transparent text-[#10253D] border border-[#10253D]/30 hover:border-[#10253D] hover:bg-[#10253D]/5",
    goldOutline:
      "bg-transparent text-[#C6A15B] border border-[#C6A15B] hover:bg-[#C6A15B]/10",
    ghost:
      "bg-transparent text-[#10253D] hover:text-[#C6A15B] hover:bg-black/5 px-2",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClasses = cn(
    "group",
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
