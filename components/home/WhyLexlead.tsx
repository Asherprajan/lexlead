import React from "react";
import { MessageSquare, CheckCircle2, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Explain legal information in understandable, jargon-free language so you are always fully informed.",
  },
  {
    icon: CheckCircle2,
    title: "Considered Guidance",
    description: "Focus on the facts, procedural realities, and relevant options before pursuing formal action.",
  },
  {
    icon: Shield,
    title: "Professional Engagement",
    description: "Keep communication transparent, respect confidentiality, and maintain clarity regarding next steps.",
  },
];

export const WhyLexlead: React.FC = () => {
  return (
    <section className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            align="center"
            eyebrow="WHY CHOOSE OUR ADVOCATES"
            title="A Thoughtful Approach to Law"
            description="Our practice is shaped by clear communication, objective assessment, and respect for our clients' circumstances."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-7 sm:p-8 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-colors space-y-4"
              >
                <div className="w-11 h-11 rounded bg-[#F7F5F0] border border-[#E8E1D5] flex items-center justify-center text-[#B18A4A]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10253D]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#626B76] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
