import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "gold" | "interactive";
  className?: string;
  as?: React.ElementType;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  variant = "default",
  className = "",
  as: Component = "div",
  ...props
}) => {
  const variantStyles = {
    default: "glass-panel",
    subtle: "glass-panel-subtle",
    gold: "glass-panel-gold",
    interactive: "glass-panel glass-card-interactive cursor-pointer",
  };

  return (
    <Component
      className={`rounded-2xl transition-all duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
