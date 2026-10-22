import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive legal services in Civil Litigation, Criminal Defense, Property Law, Family Matters, Corporate Advisory, and Contract Documentation in Thiruvananthapuram, Kerala.",
};

export default function PracticeAreasPage() {
  return (
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
            LEGAL CAPABILITIES
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
            Wide-Ranging Legal Services
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
            Lexlead Legal Solutions offers targeted legal representation and transactional guidance across the core judicial branches in Thiruvananthapuram and across Kerala.
          </p>
        </div>

        {/* Detailed Practice Cards */}
        <div className="space-y-10 mb-20">
          {PRACTICE_AREAS.map((practice, index) => (
            <div
              key={practice.slug}
              id={practice.slug}
              className="bg-white rounded-sm border border-[#E8E1D5] overflow-hidden p-6 sm:p-8 lg:p-10 hover:border-[#C6A15B] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Thumbnail & Badge */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-sm overflow-hidden border border-[#E8E1D5] bg-[#10253D]">
                  <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1728]/90 text-white text-[10px] font-semibold tracking-wider uppercase">
                    AREA 0{index + 1}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D]">
                    {practice.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#626B76] leading-relaxed">
                    {practice.longDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#10253D]">
                      Scope of Representation:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#626B76]">
                      {practice.scope.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B18A4A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 flex items-center gap-4">
                    <Button
                      href={`/practice-areas/${practice.slug}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View Full Details
                    </Button>
                    <Link
                      href={`/contact?area=${encodeURIComponent(practice.title)}`}
                      className="text-xs font-semibold text-[#10253D] hover:text-[#B18A4A] underline-offset-4 hover:underline"
                    >
                      Enquire for this area →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Note */}
        <div className="p-6 rounded-sm bg-white border border-[#E8E1D5] text-center max-w-3xl mx-auto text-xs text-[#626B76] leading-relaxed">
          <strong className="text-[#10253D]">Bar Council Compliance:</strong> Specific legal services are confirmed following an initial consultation and conflict check in accordance with the Advocates Act and Bar Council regulations.
        </div>
      </div>
    </main>
  );
}
