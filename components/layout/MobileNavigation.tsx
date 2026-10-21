"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  pathname: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 dark:bg-[#0B1728]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F8F7F4]/98 dark:bg-[#0B1728]/95 border-l border-black/10 dark:border-white/10 p-6 flex flex-col justify-between backdrop-blur-2xl shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar with Logo and Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
            <Link href="/" onClick={onClose} className="block">
              <Logo className="h-10 w-32" priority />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#4A586E] dark:text-[#AAB4C3] hover:text-[#10253D] dark:hover:text-[#F7F5F0] hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-black/[0.05] dark:bg-white/[0.08] text-[#92703B] dark:text-[#DFBF7D] border border-[#C6A15B]/30"
                      : "text-[#4A586E] dark:text-[#F7F5F0]/80 hover:text-[#10253D] dark:hover:text-[#F7F5F0] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />}
                </Link>
              );
            })}
          </nav>

          {/* Theme switcher */}
          <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10">
              <span className="text-xs font-medium text-[#4A586E] dark:text-[#AAB4C3]">Appearance Theme</span>
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>

        {/* Bottom Contact & Action */}
        <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-5">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full justify-between"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Request a Consultation
          </Button>

          <div className="space-y-2.5 text-xs text-[#4A586E] dark:text-[#AAB4C3]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span>Thiruvananthapuram, Kerala, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <a href="mailto:office@lexlead.in" className="hover:text-[#10253D] dark:hover:text-[#F7F5F0] transition-colors">
                office@lexlead.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span>Advocates & Legal Consultants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
