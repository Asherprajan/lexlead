import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageSquare, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover the structured legal methodology at Lexlead Legal Solutions: from preliminary intake and documentary analysis to principled advocacy and client communication.",
};

const DETAILED_STAGES = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Listen to the initial enquiry and understand the general nature of the matter",
    description:
      "Before discussing substantive details, we verify absence of conflict of interest across adverse parties. Once cleared, we gather initial factual background to understand the exact scope of assistance sought.",
    points: [
      "Ethical conflict verification under Bar Council rules",
      "Confidentiality safeguards enacted upon first contact",
      "Preliminary classification of legal issues involved",
    ],
  },
  {
    step: "02",
    title: "Assess",
    subtitle: "Identify relevant information and issues that may need consideration",
    description:
      "Legal disputes are won or lost on primary documents. We conduct an exhaustive audit of revenue records, contractual agreements, notices, and procedural timelines before formulating conclusions.",
    points: [
      "Rigorous verification of deeds, plaints, and evidence",
      "Analysis of limitation periods and jurisdictional forum",
      "Cross-referencing applicable High Court and Supreme Court precedents",
    ],
  },
  {
    step: "03",
    title: "Advise",
    subtitle: "Discuss applicable options and relevant considerations, as appropriate",
    description:
      "We explain the legal merits, potential risks, procedural pathways, and realistic time horizons. We believe in candid advice: if litigation is unnecessary or counter-productive, we state so clearly.",
    points: [
      "Evaluation of non-adversarial resolution (conciliation/mediation)",
      "Clear explanation of courtroom costs, stages, and remedies",
      "Preparation of client action plan prior to filing",
    ],
  },
  {
    step: "04",
    title: "Support",
    subtitle: "Clarify next steps based on the matter and the agreed scope of assistance",
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
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
            OUR METHODOLOGY
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
            Clear Steps. <br />
            Confident Decisions.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
            Legal outcomes rely on disciplined preparation and candid communication. We reject opaque procedures in favour of a structured, stepwise methodology that keeps you fully informed.
          </p>
        </div>

        {/* 4 Stages Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {DETAILED_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-white p-8 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-colors space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#10253D] text-[#C6A15B] text-xs font-semibold flex items-center justify-center">
                  {stage.step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B18A4A]">
                  Stage {stage.step}
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D]">
                {stage.title}
              </h2>
              <p className="text-xs font-semibold text-[#10253D]/80">
                {stage.subtitle}
              </p>
              <p className="text-sm text-[#626B76] leading-relaxed">
                {stage.description}
              </p>

              <div className="pt-3 border-t border-[#E8E1D5] space-y-2">
                {stage.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs text-[#626B76]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B18A4A] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Communication Standards */}
        <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#E8E1D5] mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionHeading
              align="center"
              eyebrow="COMMUNICATION STANDARDS"
              title="How We Maintain Transparency"
              description="Direct access to counsel, regular status updates, and transparent engagement parameters."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2.5 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] flex items-center justify-center mx-auto">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-[#10253D]">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed">
                Direct interaction with the advocate handling your case briefings without unnecessary bureaucracy.
              </p>
            </div>

            <div className="space-y-2.5 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-[#10253D]">
                Total Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed">
                All communications protected under statutory professional privilege and ethical advocate standards.
              </p>
            </div>

            <div className="space-y-2.5 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] flex items-center justify-center mx-auto">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-[#10253D]">
                Objective Counsel
              </h3>
              <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed">
                Honest assessments of risks, probabilities, and timelines without speculative guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#10253D] text-white p-8 sm:p-12 rounded-sm text-center space-y-5">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium">
            Ready to Discuss Your Matter?
          </h2>
          <p className="text-sm sm:text-base text-[#AAB4C3] max-w-xl mx-auto leading-relaxed">
            Begin with an initial inquiry to understand available options and procedural requirements.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}>
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
