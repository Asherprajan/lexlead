import React from "react";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use and Bar Council of India compliance statement for Lexlead Legal Solutions, Thiruvananthapuram, Kerala.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
          TERMS OF USE & REGULATORY COMPLIANCE
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] mt-2">
          Terms of Use
        </h1>
        <p className="mt-2 text-xs text-[#B18A4A]">
          Applicable under the Bar Council of India Rules • Thiruvananthapuram, Kerala
        </p>

        {/* Highlighted Compliance Notice */}
        <div className="mt-6 p-5 sm:p-6 rounded-sm bg-white border-l-4 border-[#C6A15B] border-y border-r border-[#E8E1D5] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B18A4A] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#10253D] leading-relaxed">
            <h2 className="font-semibold text-[#B18A4A] uppercase tracking-wide text-xs">
              Bar Council of India Rule 36 Compliance
            </h2>
            <p>
              By accessing this website, the user confirms that the information provided is solely for their awareness and that no advertisement, personal communication, solicitation, or inducement of any kind has been made by Lexlead Legal Solutions or its advocates.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] space-y-7 text-sm text-[#626B76] leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              1. Non-Reliance for Formal Legal Decisions
            </h2>
            <p>
              Users should not act upon any information provided on this website without seeking independent legal advice from a qualified advocate licensed to practice in the appropriate jurisdiction.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              2. Intellectual Property Rights
            </h2>
            <p>
              All proprietary logos, trademark identifiers, text, images, and brand design on this website belong to Lexlead Legal Solutions. Any unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              3. Jurisdiction & Dispute Resolution
            </h2>
            <p>
              Any dispute arising from or related to the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Thiruvananthapuram, Kerala.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
