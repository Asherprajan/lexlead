import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "We listen and understand the nature of the matter.",
  },
  {
    step: "02",
    title: "Assess",
    description: "We analyse the details and provide practical options.",
  },
  {
    step: "03",
    title: "Advise",
    description: "We explain the legal implications and possible next steps.",
  },
  {
    step: "04",
    title: "Support",
    description: "We assist you through the process with integrity and diligence.",
  },
];

export const ApproachTimeline: React.FC = () => {
  return (
    <section className="bg-[#0B1728] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Action */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A15B]">
              OUR APPROACH
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.12]">
              Clear Steps. <br />
              Confident Decisions.
            </h2>

            <p className="text-sm sm:text-base text-[#AAB4C3] leading-relaxed">
              We take the time to understand your circumstances, provide clear explanations, and guide you through the available options.
            </p>

            <div className="pt-2">
              <Button
                href="/our-approach"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Our Approach
              </Button>
            </div>
          </div>

          {/* Right Column: 4-Step Process Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-4 left-6 right-6 h-px bg-white/20 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {STEPS.map((step) => (
                <div key={step.step} className="space-y-4">
                  {/* Number Badge */}
                  <div className="w-9 h-9 rounded-full bg-[#10253D] border border-[#C6A15B] text-[#C6A15B] text-xs font-semibold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>

                  <h3 className="font-serif-luxury text-xl font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
