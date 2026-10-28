"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const LOCATION_ITEMS = [
  {
    city: "Ernakulam (Kochi)",
    label: "Main Office",
    href: "/lawyers-in-kochi",
    landmark: "Padma Junction, Chittoor Rd",
    badge: "Main Chambers",
  },
  {
    city: "Thiruvananthapuram",
    label: "Branch Office",
    href: "/lawyers-in-trivandrum",
    landmark: "Vanchiyoor, Court Complex",
    badge: "Branch Chambers",
  },
];

export const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();
  const [locationsOpen, setLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLocationActive =
    pathname.startsWith("/lawyers-in-kochi") ||
    pathname.startsWith("/lawyers-in-trivandrum");

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

      {/* Locations Dropdown */}
      <div
        ref={dropdownRef}
        className="relative"
        onMouseEnter={() => setLocationsOpen(true)}
        onMouseLeave={() => setLocationsOpen(false)}
      >
        <button
          type="button"
          onClick={() => setLocationsOpen((prev) => !prev)}
          className={cn(
            "relative py-1 text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1.5 focus:outline-none",
            isLocationActive
              ? "text-[#10253D] font-semibold"
              : "text-[#626B76] hover:text-[#10253D]"
          )}
          aria-expanded={locationsOpen}
          aria-haspopup="true"
        >
          <span>Locations</span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200",
              locationsOpen && "rotate-180"
            )}
          />
          {isLocationActive && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A15B] rounded-full" />
          )}
        </button>

        {locationsOpen && (
          <div className="absolute top-full -left-4 mt-2 w-72 bg-white rounded-sm border border-[#E8E1D5] shadow-xl p-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#AAB4C3] border-b border-[#E8E1D5] mb-1">
              Chambers Registry
            </div>
            {LOCATION_ITEMS.map((loc) => {
              const active = pathname === loc.href;
              return (
                <Link
                  key={loc.href}
                  href={loc.href}
                  onClick={() => setLocationsOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-sm transition-colors text-left",
                    active
                      ? "bg-[#10253D] text-white"
                      : "hover:bg-[#F7F5F0] text-[#10253D]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{loc.city}</span>
                    <span
                      className={cn(
                        "text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold",
                        active
                          ? "bg-[#C6A15B] text-[#10253D]"
                          : "bg-[#F7F5F0] text-[#B18A4A] border border-[#E8E1D5]"
                      )}
                    >
                      {loc.badge}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "text-[11px] mt-0.5 flex items-center gap-1",
                      active ? "text-white/80" : "text-[#626B76]"
                    )}
                  >
                    <MapPin className="w-3 h-3 shrink-0 text-[#C6A15B]" />
                    <span>{loc.landmark}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

