"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-xl shadow-black/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 rounded-lg"
              aria-label="Lexlead Legal Solutions Home"
            >
              <div className="relative h-10 sm:h-12 w-36 sm:w-44 transition-transform duration-300 group-hover:scale-[1.01]">
                <Image
                  src="/images/lexlead-logo-light.png"
                  alt="Lexlead Legal Solutions — Advocates"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/40 ${
                      isActive
                        ? "text-[#DFBF7D] bg-white/[0.08] shadow-sm"
                        : "text-[#AAB4C3] hover:text-[#F7F5F0] hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#C6A15B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Consultation CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Request Consultation
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-[#F7F5F0] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        pathname={pathname}
      />
    </>
  );
};
