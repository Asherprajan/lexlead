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
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  children,
  asChild = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-normal transition-all duration-150 rounded-none focus:outline-none focus:ring-0 outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-2.5 text-sm gap-2.5",
    lg: "px-7 sm:px-8 py-3.5 text-sm sm:text-base gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#C59B51] text-[#10253D] font-medium border border-[#B38C44] hover:bg-[#B88E43] hover:border-[#A47C35] hover:text-[#0B1728] shadow-sm",
    secondary:
      "bg-[#10253D] text-[#F7F5F0] border border-[#10253D] hover:bg-[#0B1728] hover:border-[#0B1728] shadow-sm",
    outline:
      "bg-transparent text-[#10253D] border border-[#8E9CAE] hover:border-[#10253D] hover:bg-[#10253D] hover:text-[#F7F5F0]",
    goldOutline:
      "bg-transparent text-[#10253D] border border-[#C59B51] hover:bg-[#C59B51] hover:text-[#10253D]",
    ghost:
      "bg-transparent text-[#10253D] hover:text-[#B88E43] hover:bg-black/5 px-3",
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

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{ className?: string }>,
      {
        className: cn(
          combinedClasses,
          (children.props as { className?: string }).className
        ),
      }
    );
  }

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
