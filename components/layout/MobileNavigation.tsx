"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "./DesktopNavigation";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
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
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F7F5F0] border-l border-[#E8E1D5] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E8E1D5]">
            <Link href="/" onClick={onClose} className="block relative h-9 w-32">
              <Image
                src="/images/lexlead-logo.png"
                alt="Lexlead Legal Solutions"
                fill
                sizes="128px"
                className="object-contain object-left"
                priority
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-[#626B76] hover:text-[#10253D] hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#10253D] text-[#F7F5F0]"
                      : "text-[#10253D] hover:bg-black/5"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Contact Details */}
        <div className="pt-6 border-t border-[#E8E1D5] space-y-4">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full justify-center"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Request a Consultation
          </Button>

          <div className="space-y-2 text-xs text-[#626B76]">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
              <span>Vinayaka Bldg, Vanchiyoor, Thiruvananthapuram</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <a href="mailto:lexleadlegal@gmail.com" className="hover:text-[#10253D]">
                lexleadlegal@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <a href="tel:7907224126" className="hover:text-[#10253D]">
                7907224126 / 9567653357
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
