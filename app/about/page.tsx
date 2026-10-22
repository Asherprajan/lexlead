import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Compass, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Lexlead Legal Solutions, our advocacy principles, chambers in Vanchiyoor, Thiruvananthapuram, Kerala, and commitment to disciplined legal representation.",
};

const PILLARS = [
  {
    icon: Scale,
    title: "Statutory & Factual Rigour",
    description:
      "Every opinion, pleading, and contract review is anchored in thorough precedent analysis and granular examination of evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Professional Ethics",
    description:
      "We practice under strict adherence to the Advocates Act and Bar Council of India guidelines, placing client confidentiality and honesty paramount.",
  },
  {
    icon: Compass,
    title: "Pragmatic Dispute Resolution",
    description:
      "We believe true advocacy includes identifying early settlement opportunities and constructive conciliation before embarking on protracted litigation.",
  },
  {
    icon: Users,
    title: "Rooted in Kerala's Legal Landscape",
    description:
      "Situated in Thiruvananthapuram with an intimate understanding of local revenue laws, civil procedures, and appellate jurisdictions.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
            ABOUT LEXLEAD LEGAL SOLUTIONS
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
            Principled Advocacy. <br />
            Disciplined Legal Assessment.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
            Lexlead Legal Solutions is an advocacy practice located in Vanchiyoor, Thiruvananthapuram, Kerala. We provide considered representation and strategic counsel designed to give clients clarity through every phase of dispute or commercial undertaking.
          </p>
        </div>

        {/* Split Visual & Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E8E1D5] shadow-lg bg-[#0B1728]">
              <Image
                src="/images/about-scales.jpg"
                alt="Advocacy integrity at Lexlead Legal Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-white/90 border-t border-white/20 pt-3">
                <span className="text-[#C6A15B]">INTEGRITY</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>CLARITY</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>COMMITMENT</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D]">
              Advocacy Built on Transparency & Diligence
            </h2>
            <p className="text-sm sm:text-base text-[#626B76] leading-relaxed">
              Navigating legal disputes or statutory transactions requires more than mere procedural compliance. It demands a holistic understanding of the client&apos;s factual background, commercial realities, and realistic assessments of judicial outcomes.
            </p>
            <p className="text-sm sm:text-base text-[#626B76] leading-relaxed">
              At Lexlead, we prioritize transparent dialogue above all else. From the initial review of documents to court appearances or negotiation sessions, our advocates ensure clients understand their legal standing without false expectations or unnecessary procedural delays.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#10253D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B18A4A]" />
                <span>Thorough case-law research and factual scrutiny</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#10253D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B18A4A]" />
                <span>Ethical representation in civil, criminal, and commercial forums</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#10253D] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B18A4A]" />
                <span>Conflict-of-interest verification prior to formal engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionHeading
              align="center"
              eyebrow="OUR PRACTICE STANDARDS"
              title="The Principles That Guide Us"
              description="Our practice standards are structured around core tenets of professional discipline, ethical clarity, and prompt communication."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white p-7 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded bg-[#F7F5F0] border border-[#E8E1D5] flex items-center justify-center text-[#B18A4A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#10253D]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-[#10253D] text-white p-8 sm:p-12 rounded-sm text-center space-y-5">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium">
            Speak with an Advocate at Our Chambers
          </h2>
          <p className="text-sm sm:text-base text-[#AAB4C3] max-w-xl mx-auto leading-relaxed">
            We invite you to reach out for an initial discussion regarding your legal requirements in Thiruvananthapuram or across Kerala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Request Consultation
            </Button>
            <Button href="/practice-areas" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
