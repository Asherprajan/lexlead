import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PracticeAreaCard } from "./PracticeAreaCard";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";

export const PracticeAreaGrid: React.FC = () => {
  return (
    <section id="practice-areas" className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="PRACTICE AREAS"
            title="Wide-Ranging Legal Services"
            description="We offer comprehensive legal support across key practice areas, with a commitment to clarity, integrity, and effective solutions."
          />

          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#10253D] hover:text-[#B18A4A] transition-colors group shrink-0"
          >
            <span>View All Practice Areas</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((practice) => (
            <PracticeAreaCard key={practice.slug} practice={practice} />
          ))}
        </div>
      </div>
    </section>
  );
};
