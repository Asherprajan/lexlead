import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Compass, CheckCircle2, ShieldCheck, MessageSquare, Scale, ArrowRight } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover the structured legal methodology at Lexlead Legal Solutions: from preliminary intake and documentary analysis to principled advocacy and client communication.",
};

const DETAILED_STAGES = [
  {
    step: "Stage 01",
    title: "Initial Inquiry & Conflict Check",
    description:
      "Before discussing substantive details, we verify absence of conflict of interest across adverse parties. Once cleared, we gather initial factual background to understand the exact scope of assistance sought.",
    points: [
      "Ethical conflict verification under Bar Council rules",
      "Confidentiality safeguards enacted upon first contact",
      "Preliminary classification of legal issues involved",
    ],
  },
  {
    step: "Stage 02",
    title: "Documentary Audit & Statutory Scrutiny",
    description:
      "Legal disputes are won or lost on primary documents. We conduct an exhaustive audit of revenue records, contractual agreements, notices, and procedural timelines before formulating conclusions.",
    points: [
      "Rigorous verification of deeds, plaints, and evidence",
      "Analysis of limitation periods and jurisdictional forum",
      "Cross-referencing applicable High Court and Supreme Court precedents",
    ],
  },
  {
    step: "Stage 03",
    title: "Strategy Formulation & Realistic Counsel",
    description:
      "We explain the legal merits, potential risks, procedural pathways, and realistic time horizons. We believe in candid advice: if litigation is unnecessary or counter-productive, we state so clearly.",
    points: [
      "Evaluation of non-adversarial resolution (conciliation/mediation)",
      "Clear explanation of courtroom costs, stages, and remedies",
      "Preparation of client action plan prior to filing",
    ],
  },
  {
    step: "Stage 04",
    title: "Disciplined Advocacy & Active Communication",
    description:
      "During court proceedings or commercial negotiations, our advocates represent client interests with thoroughness. Clients receive periodic updates following each judicial posting or procedural development.",
    points: [
      "Articulate pleadings and disciplined oral submissions",
      "Prompt debriefing after each court listing",
      "Ongoing strategic reassessment as evidence unfolds",
    ],
  },
];

export default function OurApproachPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#183354]/30 blur-[130px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
            <Compass className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#DFBF7D]">
              Our Methodology
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F7F5F0] leading-tight">
            How We Work: Thorough Inquiry, Clear Strategy.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#AAB4C3] leading-relaxed">
            Legal outcomes rely on disciplined preparation and candid communication. We reject opaque procedures in favour of a structured, stepwise methodology that keeps you fully informed.
          </p>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F7F5F0]">
              The Value of Considered Legal Analysis
            </h2>
            <p className="text-sm sm:text-base text-[#AAB4C3] leading-relaxed">
              In legal practice, rushed actions often cause avoidable complications. An incorrectly framed notice or a premature plaint can prejudice your legal standing for years.
            </p>
            <p className="text-sm sm:text-base text-[#AAB4C3] leading-relaxed">
              At Lexlead Legal Solutions, we place great value on the assessment phase. By scrutinizing records, examining statutory limitations, and anticipating adverse arguments before filing, we build representations anchored in unshakeable legal foundations.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C6A15B]/30 flex items-center gap-3 text-xs sm:text-sm text-[#DFBF7D]">
              <Scale className="w-5 h-5 shrink-0 text-[#C6A15B]" />
              <span>We provide candid assessments of probability, never speculative guarantees.</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/editorial-desk.jpg"
                alt="Case files and legal research documentation at Lexlead"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Detailed Stages */}
      <section className="py-20 bg-[#070e1a]/80 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Procedural Stages"
            title="A Systematic Four-Stage Pathway"
            description="Our process ensures transparency, objective evaluation, and disciplined execution from day one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {DETAILED_STAGES.map((stage) => (
              <GlassPanel
                key={stage.step}
                variant="default"
                className="p-8 sm:p-10 border border-white/10 hover:border-[#C6A15B]/40 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#DFBF7D]">
                    {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#F7F5F0]">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#AAB4C3] leading-relaxed">
                  {stage.description}
                </p>
                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  {stage.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-[#AAB4C3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Client Communication Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 text-[#DFBF7D] flex items-center justify-center mx-auto">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-serif-luxury text-lg text-[#F7F5F0]">Direct Communication</h4>
            <p className="text-xs text-[#AAB4C3] leading-relaxed">
              No layered bureaucratic obstacles. You interact directly with the advocate handling your case briefing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 text-[#DFBF7D] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif-luxury text-lg text-[#F7F5F0]">Total Confidentiality</h4>
            <p className="text-xs text-[#AAB4C3] leading-relaxed">
              Privileged communications protected by legal professional privilege under Section 126 of the Evidence Act.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 text-[#DFBF7D] flex items-center justify-center mx-auto">
              <Scale className="w-5 h-5" />
            </div>
            <h4 className="font-serif-luxury text-lg text-[#F7F5F0]">Transparent Terms</h4>
            <p className="text-xs text-[#AAB4C3] leading-relaxed">
              Clear mutual understanding regarding chamber conferences, drafting scopes, and court representations.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Initiate an Initial Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}
