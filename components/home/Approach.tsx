import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

const APPROACH_PILLARS = [
  {
    title: "Understanding Client Circumstances",
    description:
      "Every dispute and transaction exists within a distinct human or commercial context. We listen carefully before formulating legal opinion.",
  },
  {
    title: "Clear Explanation of Legal Options",
    description:
      "We demystify legal complexities, setting out realistic probabilities, statutory pathways, and potential timelines in plain language.",
  },
  {
    title: "Transparent & Professional Communication",
    description:
      "Clients are kept appraised at each procedural juncture, ensuring you have direct access to counsel when decisions must be taken.",
  },
  {
    title: "Considered Next Steps",
    description:
      "We avoid unnecessary litigation where negotiation or conciliation serves your interest, while preparing rigorously when advocacy in court is required.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Enquiry",
    description:
      "Submit an initial overview of your legal query through our confidential consultation request.",
  },
  {
    step: "02",
    title: "Initial Assessment",
    description:
      "We review relevant background documents and identify statutory provisions applicable to the circumstances.",
  },
  {
    step: "03",
    title: "Discuss Options",
    description:
      "We hold an in-depth consultation in chambers or virtually to explain options, risks, and procedural avenues.",
  },
  {
    step: "04",
    title: "Agree on Next Steps",
    description:
      "Formal engagement terms and a clear legal action plan are established before proceeding with representation.",
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Editorial Split Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-[#C6A15B]/20 -z-10" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/editorial-desk.jpg"
                  alt="Legal documentation and chambers desk at Lexlead"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/70 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Badge */}
              <GlassPanel
                variant="subtle"
                className="absolute -bottom-6 right-4 sm:-right-4 max-w-xs p-5 border border-white/15 bg-[#0B1728]/90"
              >
                <p className="text-xs italic text-[#DFBF7D] leading-relaxed font-serif-luxury text-base">
                  &ldquo;In the practice of law, thorough preparation is the greatest foundation of confidence.&rdquo;
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#AAB4C3] mt-2 font-semibold">
                  Lexlead Legal Solutions
                </p>
              </GlassPanel>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="Our Legal Philosophy"
              title="A More Thoughtful Approach to Legal Matters."
              description="Legal decisions often carry lasting consequences. We believe sound advocacy begins with comprehensive factual inquiry, sober assessment of remedies, and unequivocal honesty about legal prospects."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {APPROACH_PILLARS.map((pillar) => (
                <div key={pillar.title} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <h3 className="text-sm font-semibold text-[#F7F5F0]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed pl-6.5">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/about" variant="secondary" size="md">
                Learn More About Our Chambers
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section: From First Conversation to Clear Next Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            align="center"
            eyebrow="Structured Engagement"
            title="From First Conversation to Clear Next Steps."
            description="A transparent four-stage pathway designed to ensure rigorous evaluation and methodical progress for every legal matter."
          />
        </div>

        {/* Timeline Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-[#C6A15B]/10 via-[#C6A15B]/40 to-[#C6A15B]/10 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <GlassPanel
                key={item.step}
                variant="default"
                className="p-6 sm:p-7 relative flex flex-col justify-between group hover:border-[#C6A15B]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif-luxury text-3xl font-bold text-gold-gradient">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-xs text-[#DFBF7D]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#F7F5F0] group-hover:text-[#DFBF7D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#AAB4C3] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-[#AAB4C3]/60 flex items-center justify-between">
                  <span>Phase {idx + 1}</span>
                  <ArrowRight className="w-3 h-3 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[#AAB4C3]/60">
          *Note: Actual procedural timelines and procedural stages may vary depending on court calendars, statutory procedures, and the specific nature of the dispute.
        </p>
      </div>
    </section>
  );
};
