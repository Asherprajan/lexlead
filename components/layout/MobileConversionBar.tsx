"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Sparkles, Scale } from "lucide-react";

export function MobileConversionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1728]/95 backdrop-blur-md border-t border-[#C6A15B]/40 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:7907224126"
          className="flex-1 py-2 px-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20 flex items-center justify-center gap-1.5 transition-colors"
          aria-label="Call Chamber Directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Call Office</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/917907224126?text=Hello%20Lexlead%20Legal%20Solutions%2C%20I%20would%20like%20to%20request%20a%20Free%2015-Minute%20Preliminary%20Case%20Assessment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2.5 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <span>WhatsApp</span>
        </a>

        {/* Free Case Assessment CTA */}
        <Link
          href="/contact"
          className="flex-1 py-2 px-2.5 rounded bg-[#C6A15B] hover:bg-[#B18A4A] text-[#10253D] text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#10253D]" />
          <span>Free Assessment</span>
        </Link>
      </div>
    </div>
  );
}
