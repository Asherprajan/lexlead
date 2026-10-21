import React from "react";
import { MessageSquareText, SearchCheck, Briefcase, Compass } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

const PRINCIPLES = [
  {
    icon: MessageSquareText,
    title: "Client-Focused Communication",
    description: "Clear, transparent dialogue so you always understand where your matter stands.",
  },
  {
    icon: SearchCheck,
    title: "Careful Legal Assessment",
    description: "Meticulous review of documents, statutory provisions, and factual context.",
  },
  {
    icon: Briefcase,
    title: "Professional Approach",
    description: "Uncompromising ethical standards and disciplined preparation in every engagement.",
  },
  {
    icon: Compass,
    title: "Clear Next Steps",
    description: "Direct guidance on actionable legal strategies without unnecessary ambiguity.",
  },
];

export const TrustPrinciples: React.FC = () => {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <GlassPanel
        variant="subtle"
        className="p-6 sm:p-8 border border-white/10 bg-[#10253D]/70 backdrop-blur-xl shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className={`flex items-start gap-4 ${
                  index !== 0 ? "pt-5 lg:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-[#C6A15B]/30 text-[#DFBF7D] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F7F5F0] tracking-wide">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#AAB4C3] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </GlassPanel>
    </section>
  );
};
