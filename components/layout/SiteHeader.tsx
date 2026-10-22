"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
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
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C6A15B] rounded-sm"
              aria-label="Lexlead Legal Solutions Home"
            >
              <div className="relative h-11 sm:h-12 w-44 sm:w-52">
                <Image
                  src="/images/lexlead-logo.png"
                  alt="Lexlead Legal Solutions — Advocates"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
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
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Consultation
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-md text-[#10253D] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
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
