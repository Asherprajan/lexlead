"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Scale } from "lucide-react";

export function MobileConversionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1728]/95 backdrop-blur-md border-t border-[#C6A15B]/40 px-2.5 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-stretch">
        {/* Box 1: Direct Call Button */}
        <a
          href="tel:7907224126"
          className="h-11 rounded-sm bg-white/10 hover:bg-white/20 text-white text-[10px] xs:text-[11px] font-semibold tracking-wider uppercase border border-white/25 flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap px-1 select-none"
          aria-label="Call Chamber Directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
          <span>Call Office</span>
        </a>

        {/* Box 2: WhatsApp Direct */}
        <a
          href="https://wa.me/917907224126?text=Hello%20Lexlead%20Legal%20Solutions%2C%20I%20would%20like%20to%20request%20a%20Legal%20Consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[10px] xs:text-[11px] font-bold tracking-wider uppercase border border-[#25D366]/40 flex items-center justify-center gap-1.5 transition-colors shadow-sm whitespace-nowrap px-1 select-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Box 3: Consultation CTA */}
        <Link
          href="/contact"
          className="h-11 rounded-sm bg-[#C6A15B] hover:bg-[#B18A4A] text-[#10253D] text-[10px] xs:text-[11px] font-bold tracking-wider uppercase border border-[#C6A15B] flex items-center justify-center gap-1.5 transition-colors shadow-md whitespace-nowrap px-1 select-none"
        >
          <Scale className="w-3.5 h-3.5 text-[#10253D] shrink-0" />
          <span>Consultation</span>
        </Link>
      </div>
    </div>
  );
}
