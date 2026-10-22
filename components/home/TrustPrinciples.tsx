import React from "react";
import { MessagesSquare, Compass, ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  {
    icon: MessagesSquare,
    title: "Client-focused communication",
    description: "Understand the matter and explain relevant information clearly.",
  },
  {
    icon: Compass,
    title: "Practical guidance",
    description: "Help clients understand applicable options and considerations.",
  },
  {
    icon: ShieldCheck,
    title: "Professional approach",
    description: "Handle enquiries with care, appropriate diligence, and clear communication.",
  },
];

export const TrustPrinciples: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E8E1D5] py-7 sm:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E1D5]">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 ${
                  index === 0
                    ? "pb-5 md:pb-0 md:pr-8"
                    : index === 1
                    ? "py-5 md:py-0 md:px-8"
                    : "pt-5 md:pt-0 md:pl-8"
                }`}
              >
                <div className="text-[#B18A4A] shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 stroke-[1.25]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#10253D]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#626B76] leading-relaxed">
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
