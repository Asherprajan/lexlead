"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Contact", href: "/contact" },
];

export const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative py-1 text-sm font-medium tracking-wide transition-colors",
              isActive
                ? "text-[#10253D] font-semibold"
                : "text-[#626B76] hover:text-[#10253D]"
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A15B] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
