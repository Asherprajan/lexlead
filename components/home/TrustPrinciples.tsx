import React from "react";
import { MessageSquareText, Compass, Briefcase } from "lucide-react";

const PRINCIPLES = [
  {
    icon: MessageSquareText,
    title: "Client-Focused Communication",
    description: "Understand the matter and explain relevant information clearly.",
  },
  {
    icon: Compass,
    title: "Practical Guidance",
    description: "Help clients understand applicable options and considerations.",
  },
  {
    icon: Briefcase,
    title: "Professional Approach",
    description: "Handle enquiries with care, appropriate diligence, and clear communication.",
  },
];

export const TrustPrinciples: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E8E1D5] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E1D5]">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index === 0
                    ? "pb-6 md:pb-0 md:pr-8"
                    : index === 1
                    ? "py-6 md:py-0 md:px-8"
                    : "pt-6 md:pt-0 md:pl-8"
                }`}
              >
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#10253D]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#626B76] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
