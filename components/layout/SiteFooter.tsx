import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight, Shield } from "lucide-react";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#0B1728] text-white border-t border-white/10 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block relative h-10 w-44">
              <Image
                src="/images/lexlead-logo.png"
                alt="Lexlead Legal Solutions"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs text-[#AAB4C3] leading-relaxed pr-4">
              Lexlead Legal Solutions is a legal practice based in Thiruvananthapuram, Kerala, delivering disciplined legal guidance, civil representation, criminal defense, property solutions, and corporate advisory.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C6A15B]">
              <Shield className="w-4 h-4 text-[#C6A15B]" />
              <span>Advocates & Legal Consultants • Kerala</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#AAB4C3]">
              <li>
                <Link href="/" className="hover:text-[#C6A15B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C6A15B] transition-colors">
                  About Lexlead
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-[#C6A15B] transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="hover:text-[#C6A15B] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C6A15B] transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-xs text-[#AAB4C3]">
              <li>
                <Link href="/practice-areas/civil-litigation" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Civil Litigation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/criminal-law" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Criminal Law</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/family-and-matrimonial-law" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Family & Matrimonial Law</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/property-and-real-estate" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Property & Real Estate</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/corporate-and-commercial-law" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Corporate & Commercial Law</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/contract-and-documentation-support" className="hover:text-[#C6A15B] transition-colors flex items-center justify-between group">
                  <span>Contract & Documentation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white">
              Office Details
            </h3>
            <div className="space-y-2.5 text-xs text-[#AAB4C3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <a href="tel:+914713161884" className="hover:text-white font-medium text-white">
                      +91 471 316 1884
                    </a>
                    <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider">(Office)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#AAB4C3]">
                    <a href="tel:7907224126" className="hover:text-white">
                      +91 79072 24126
                    </a>
                    <span>/</span>
                    <a href="tel:9567653357" className="hover:text-white">
                      +91 95676 53357
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="mailto:lexleadlegal@gmail.com" className="hover:text-white">
                  lexleadlegal@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-4 border-b border-white/10 text-[11px] text-[#AAB4C3]/70 leading-relaxed">
          <p>
            <strong className="text-white">Bar Council of India Disclaimer:</strong> As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form. This website is maintained strictly for informational purposes to provide general understanding of the firm. The content herein does not constitute legal advice and does not create an advocate-client relationship.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#AAB4C3]">
          <div>
            © 2026 LEXLEAD LEGAL SOLUTIONS. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-[#C6A15B]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C6A15B]">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-[#C6A15B]">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
