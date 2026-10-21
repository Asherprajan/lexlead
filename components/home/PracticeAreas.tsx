import React from "react";
import Link from "next/link";
import {
  Gavel,
  ShieldAlert,
  Users2,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const PRACTICE_AREAS_DATA = [
  {
    id: "civil-litigation",
    icon: Gavel,
    title: "Civil Litigation",
    description:
      "Comprehensive representation in original suits, appeals, injunctions, money recovery, and contractual disputes before civil courts and appellate forums.",
    badge: "Dispute Resolution",
  },
  {
    id: "criminal-law",
    icon: ShieldAlert,
    title: "Criminal Law",
    description:
      "Strategic defense counsel, bail applications, revision petitions, and trial advocacy adhering strictly to procedural justice and statutory safeguards.",
    badge: "Trial & Bail",
  },
  {
    id: "family-matrimonial",
    icon: Users2,
    title: "Family & Matrimonial Matters",
    description:
      "Sensitive and constructive guidance regarding divorce petitions, maintenance, child custody, domestic disputes, and settlement negotiations.",
    badge: "Personal Law",
  },
  {
    id: "property-real-estate",
    icon: Building2,
    title: "Property & Real Estate",
    description:
      "Title verification, partition suits, boundary disputes, revenue matter representations, and conveyance documentation across Kerala jurisdictions.",
    badge: "Property & Titles",
  },
  {
    id: "corporate-commercial",
    icon: BriefcaseBusiness,
    title: "Corporate & Commercial Law",
    description:
      "Advisory on business formation, partnership agreements, statutory compliances, commercial contract negotiations, and dispute mitigation.",
    badge: "Business Advisory",
  },
  {
    id: "contract-documentation",
    icon: FileCheck2,
    title: "Contract & Documentation Support",
    description:
      "Precision drafting and scrutiny of commercial contracts, deeds, MOUs, power of attorney, employment agreements, and legal notices.",
    badge: "Drafting & Scrutiny",
  },
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#10253D]/40 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Areas of Legal Practice"
            title="Legal Support, Considered From Every Angle."
            description="Our advocacy practice provides structured counsel across key legal disciplines in Kerala, combining procedural mastery with measured strategic advice."
          />
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFBF7D] hover:text-[#F7F5F0] transition-colors group shrink-0"
          >
            <span>View All Practice Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRACTICE_AREAS_DATA.map((area, index) => {
            const Icon = area.icon;
            const isFeatured = index === 0 || index === 4;

            return (
              <GlassPanel
                key={area.id}
                variant={isFeatured ? "gold" : "default"}
                className="p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B]/50 hover:shadow-xl hover:shadow-[#C6A15B]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-[#C6A15B]/30 flex items-center justify-center text-[#DFBF7D] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C6A15B]/60">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] text-[#AAB4C3] border border-white/[0.08]">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#F7F5F0] group-hover:text-[#DFBF7D] transition-colors">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#AAB4C3] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href={`/practice-areas#${area.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] group-hover:text-[#F7F5F0] transition-colors"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs text-[#AAB4C3]/50">0{index + 1}</span>
                </div>
              </GlassPanel>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#AAB4C3]/70 max-w-2xl mx-auto">
            Note: Specific legal services are confirmed following an initial consultation and conflict check in accordance with the Advocates Act and Bar Council regulations.
          </p>
        </div>
      </div>
    </section>
  );
};
