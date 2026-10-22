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
                className="px-4 py-2 text-xs font-medium"
                icon={<ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />}
              >
                Request a Consultation
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
