import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Shield, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EAE6DC] dark:bg-[#070e1a] border-t border-black/10 dark:border-white/[0.08] text-[#4A586E] dark:text-[#AAB4C3] relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C6A15B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-black/10 dark:border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/40 rounded-lg">
              <Logo className="h-12 w-48" />
            </Link>
            <p className="text-sm leading-relaxed text-[#4A586E]/90 dark:text-[#AAB4C3]/90 pr-4">
              Lexlead Legal Solutions is a distinguished legal practice based in Thiruvananthapuram, Kerala. We provide disciplined advocacy, rigorous analysis, and considered legal representation across diverse domains of law.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#92703B] dark:text-[#DFBF7D]/80">
              <Shield className="w-4 h-4 text-[#C6A15B]" />
              <span>Advocates & Legal Consultants • Kerala</span>
            </div>
          </div>

          {/* Practice Areas Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#10253D] dark:text-[#F7F5F0] uppercase">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/practice-areas#civil-litigation"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Civil Litigation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#criminal-law"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Criminal Law</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#family-matrimonial"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Family & Matrimonial Matters</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#property-real-estate"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Property & Real Estate</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#corporate-commercial"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Corporate & Commercial Law</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#contract-documentation"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors flex items-center gap-1 group"
                >
                  <span>Contract & Documentation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#10253D] dark:text-[#F7F5F0] uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                  Contact Chambers
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Office Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#10253D] dark:text-[#F7F5F0] uppercase">
              Chambers Location
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  Chambers at Vanchiyoor & Thiruvananthapuram, Kerala, India — 695035
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href="mailto:office@lexlead.in"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors"
                >
                  office@lexlead.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href="tel:+914712000000"
                  className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors"
                >
                  +91 (0) 471 Consultation Desk
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#92703B] dark:text-[#DFBF7D] hover:text-[#10253D] dark:hover:text-[#F7F5F0] gap-1 transition-colors"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bar Council Compliance */}
        <div className="py-6 border-b border-black/10 dark:border-white/[0.08] text-xs leading-relaxed text-[#4A586E]/80 dark:text-[#AAB4C3]/70">
          <p>
            <strong className="text-[#92703B] dark:text-[#DFBF7D]/90">Legal Disclaimer & Compliance:</strong> Under the rules of the Bar Council of India, advocates and legal practitioners are prohibited from soliciting work or advertising in any form. This website is maintained strictly for informational purposes to provide general understanding about Lexlead Legal Solutions. The information presented herein does not constitute legal advice and does not create an advocate-client relationship. Visitors seeking legal counsel should seek direct legal consultation with an advocate.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A586E]/80 dark:text-[#AAB4C3]/70">
          <div>
            © 2026 Lexlead Legal Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
            <Link href="/terms" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
              Terms of Use & Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
