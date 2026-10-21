import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Scale, ShieldCheck, BookOpen, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Lexlead Legal Solutions, our advocacy principles, chambers in Thiruvananthapuram, Kerala, and commitment to disciplined legal representation.",
};

const PRACTICE_PILLARS = [
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
    icon: BookOpen,
    title: "Pragmatic Dispute Resolution",
    description:
      "We believe true advocacy includes identifying early settlement opportunities and constructive conciliation before embarking on protracted litigation.",
  },
  {
    icon: Building,
    title: "Rooted in Kerala's Legal Landscape",
    description:
      "Situated in Thiruvananthapuram with an intimate understanding of local revenue laws, civil procedures, and appellate jurisdictions.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#DFBF7D]/10 dark:bg-[#183354]/30 blur-[140px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
            <Scale className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#92703B] dark:text-[#DFBF7D]">
              Chambers & Philosophy
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] dark:text-[#F7F5F0] leading-tight">
            Principled Advocacy. Disciplined Legal Assessment.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
            Lexlead Legal Solutions is an advocacy and legal consultancy practice based in Thiruvananthapuram, Kerala. We provide considered representation and strategic counsel designed to give clients clarity through every phase of dispute or commercial undertaking.
          </p>
        </div>
      </section>

      {/* Visual & Chambers Environment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <Image
                src="/images/hero-chamber.jpg"
                alt="Lexlead legal chambers in Thiruvananthapuram"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F4]/90 dark:from-[#0B1728]/80 via-transparent to-transparent" />
            </div>
            <GlassPanel
              variant="gold"
              className="absolute -bottom-6 right-6 p-4 max-w-xs border border-[#C6A15B]/30 hidden sm:block"
            >
              <p className="text-xs text-[#92703B] dark:text-[#DFBF7D] font-semibold">Chambers at Vanchiyoor</p>
              <p className="text-xs text-[#10253D] dark:text-[#F7F5F0] mt-0.5">
                Adjacent to District Courts, Thiruvananthapuram, Kerala.
              </p>
            </GlassPanel>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              Advocacy Built on Transparency & Diligence
            </h2>
            <p className="text-sm sm:text-base text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
              Navigating legal disputes or statutory transactions requires more than mere procedural compliance. It demands a holistic understanding of the client’s factual background, commercial realities, and realistic assessments of judicial outcomes.
            </p>
            <p className="text-sm sm:text-base text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
              At Lexlead, we prioritize transparent dialogue above all else. From the initial review of documents to court appearances or negotiation sessions, our advocates ensure clients understand their legal standing without false expectations or unnecessary procedural delays.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#10253D] dark:text-[#F7F5F0]">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                <span>Thorough case-law research and factual scrutiny</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#10253D] dark:text-[#F7F5F0]">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                <span>Ethical representation in civil, criminal, and commercial forums</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#10253D] dark:text-[#F7F5F0]">
                <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                <span>Conflict-of-interest verification prior to formal engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Pillars Grid */}
      <section className="py-20 bg-[#EFECE4] dark:bg-[#070e1a]/80 border-y border-black/10 dark:border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Commitments"
            title="The Principles That Govern Our Practice"
            description="Our practice standards are structured around core tenets of professional discipline, ethical clarity, and prompt communication."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {PRACTICE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <GlassPanel
                  key={pillar.title}
                  variant="subtle"
                  className="p-7 space-y-4 border border-black/10 dark:border-white/10 hover:border-[#C6A15B]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-[#C6A15B]/30 flex items-center justify-center text-[#92703B] dark:text-[#DFBF7D]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
                    {pillar.description}
                  </p>
                </GlassPanel>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <GlassPanel variant="gold" className="p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
            Speak with an Advocate at Our Chambers
          </h2>
          <p className="text-sm sm:text-base text-[#4A586E] dark:text-[#AAB4C3] max-w-xl mx-auto leading-relaxed">
            We invite you to reach out for an initial discussion regarding your legal requirements in Thiruvananthapuram or across Kerala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Request Chamber Consultation
            </Button>
            <Button href="/practice-areas" variant="glass" size="lg">
              Explore Practice Areas
            </Button>
          </div>
        </GlassPanel>
      </section>
    </main>
  );
}
