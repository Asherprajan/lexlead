import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 sm:h-12 w-36 sm:w-44", priority = false }) => {
  return (
    <div className={`relative ${className} transition-transform duration-300 group-hover:scale-[1.01]`}>
      {/* Light Mode Logo: Brand Navy lettering with gold emblem */}
      <Image
        src="/images/lexlead-logo.png"
        alt="Lexlead Legal Solutions — Advocates"
        fill
        sizes="(max-width: 640px) 144px, 176px"
        className="object-contain object-left dark:hidden block"
        priority={priority}
      />
      {/* Dark Mode Logo: Ivory lettering with gold emblem */}
      <Image
        src="/images/lexlead-logo-light.png"
        alt="Lexlead Legal Solutions — Advocates"
        fill
        sizes="(max-width: 640px) 144px, 176px"
        className="object-contain object-left hidden dark:block"
        priority={priority}
      />
    </div>
  );
};
