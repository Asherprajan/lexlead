import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "text";
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
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#DFBF7D] via-[#C6A15B] to-[#92703B] text-[#0B1728] font-semibold shadow-lg shadow-[#C6A15B]/20 hover:shadow-xl hover:shadow-[#C6A15B]/30 hover:brightness-105 border border-[#DFBF7D]/40",
    secondary:
      "bg-[#10253D] text-[#F7F5F0] border border-[#C6A15B]/30 hover:border-[#C6A15B]/70 hover:bg-[#183354] shadow-md",
    glass:
      "bg-white/[0.07] backdrop-blur-md text-[#F7F5F0] border border-white/15 hover:bg-white/[0.12] hover:border-[#C6A15B]/40 shadow-sm",
    outline:
      "bg-transparent text-[#DFBF7D] border border-[#C6A15B]/50 hover:bg-[#C6A15B]/10 hover:border-[#C6A15B]",
    text:
      "bg-transparent text-[#DFBF7D] hover:text-[#F7F5F0] px-0 py-0 underline-offset-4 hover:underline",
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

  const combinedClasses = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

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
