"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Conversion Bar: Chambers Legal Consultation Hook */}
      <div className="bg-[#10253D] text-white py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#C6A15B]/30 text-[10px] sm:text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse shrink-0" />
            <span className="text-[#F7F5F0] truncate">
              <span className="hidden sm:inline">Facing an active legal dispute in Kerala? </span>
              <strong className="text-[#C6A15B] font-semibold">Chambers Legal Consultation Available</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/contact"
              className="font-semibold text-[#C6A15B] hover:text-white transition-colors underline underline-offset-2 flex items-center gap-1 whitespace-nowrap"
            >
              <span>Schedule<span className="hidden sm:inline"> Consultation</span></span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="tel:7907224126"
              className="text-[#AAB4C3] hover:text-white transition-colors hidden sm:inline font-mono"
            >
              Helpline: +91 79072 24126
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#F7F5F0] border-b border-[#E8E1D5] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-22 sm:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-0 outline-none select-none py-1"
              aria-label="Lexlead Legal Solutions Home"
            >
              <div className="relative h-13 sm:h-16 w-52 sm:w-64">
                <Image
                  src="/images/lexlead-logo.png"
                  alt="Lexlead Legal Solutions — Advocates"
                  fill
                  sizes="(max-width: 640px) 208px, 256px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <DesktopNavigation />

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#10253D] hover:bg-[#1A365D] text-white border border-[#C6A15B]"
                icon={<ArrowUpRight className="w-3.5 h-3.5 stroke-[2] text-[#C6A15B]" />}
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-none text-[#10253D] hover:bg-black/5 focus:outline-none outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
