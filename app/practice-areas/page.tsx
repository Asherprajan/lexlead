import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Gavel,
  ShieldAlert,
  Users2,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  ArrowRight,
  CheckCircle,
  FileText,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive legal services in Civil Litigation, Criminal Defense, Property Law, Family Matters, Corporate Advisory, and Contract Documentation in Thiruvananthapuram, Kerala.",
};

const DETAILED_PRACTICES = [
  {
    id: "civil-litigation",
    icon: Gavel,
    title: "Civil Litigation",
    subtitle: "Trial & Appellate Advocacy Before Civil Courts",
    description:
      "Civil litigation requires exhaustive factual preparation, cogent evidence presentation, and a firm grasp of procedural codes. Our chambers handle original suits, injunctions, and appeals before Subordinate Courts, District Courts, and appellate forums.",
    scope: [
      "Original suits for declaration, possession, and recovery of debts",
      "Interim injunction applications and temporary relief petitions",
      "Appeals, revision petitions, and review applications",
      "Execution petitions for decree enforcement and satisfaction",
      "Contractual breach disputes and damages recovery",
    ],
  },
  {
    id: "criminal-law",
    icon: ShieldAlert,
    title: "Criminal Law & Defense",
    subtitle: "Procedural Safeguards & Criminal Jurisprudence",
    description:
      "Criminal proceedings place personal liberty directly at stake. We deliver strategic defense counsel adhering rigorously to constitutional safeguards, statutory criminal procedures (BNSS/CrPC), and evidence evaluation.",
    scope: [
      "Anticipatory bail applications before Sessions Courts and High Court",
      "Regular bail petitions and condition modification hearings",
      "Defense representation in trials before Magistrate and Sessions Courts",
      "Quashing petitions, criminal revision, and statutory appeals",
      "Representation in private complaints and statutory offenses",
    ],
  },
  {
    id: "family-matrimonial",
    icon: Users2,
    title: "Family & Matrimonial Matters",
    subtitle: "Constructive Counsel in Sensitive Personal Matters",
    description:
      "Matrimonial disputes demand emotional discretion, dignity, and a problem-solving mindset. We advise on marriage dissolution, maintenance, child custody, and amicable settlement frameworks before Family Courts in Kerala.",
    scope: [
      "Mutual consent divorce petitions and contested dissolution",
      "Interim and permanent maintenance applications for spouses and children",
      "Child custody, visitation rights, and guardianship proceedings",
      "Restitution of conjugal rights and mediation representation",
      "Domestic violence act proceedings and protection orders",
    ],
  },
  {
    id: "property-real-estate",
    icon: Building2,
    title: "Property & Real Estate",
    subtitle: "Title Verification, Partitions & Land Revenue Issues",
    description:
      "Kerala property laws feature unique tenurial histories and statutory frameworks. We conduct comprehensive title due diligence, trace ancestral titles, and represent parties in partition, boundary, and encroachment suits.",
    scope: [
      "30-year title search, document tracing, and legal scrutiny reports",
      "Partition suits among co-owners and legal heirs",
      "Boundary demarcation, easement rights, and trespass litigation",
      "Proceedings before Land Tribunals and Revenue Authorities",
      "Sale deed, settlement deed, and lease documentation scrutiny",
    ],
  },
  {
    id: "corporate-commercial",
    icon: BriefcaseBusiness,
    title: "Corporate & Commercial Law",
    subtitle: "Commercial Risk Mitigation & Business Advisory",
    description:
      "From emerging enterprises to established commercial firms in Kerala, we advise on statutory compliance, shareholder agreements, partnership dissolutions, and commercial dispute arbitration.",
    scope: [
      "Commercial agreement drafting and non-disclosure structuring",
      "Partnership deed formulation, LLPs, and founder pacts",
      "MSME payment delay resolution and conciliation proceedings",
      "Breach of warranty, supply chain, and trade disputes",
      "Arbitration notice issuance and arbitral tribunal representation",
    ],
  },
  {
    id: "contract-documentation",
    icon: FileCheck2,
    title: "Contract & Documentation Support",
    subtitle: "Precision Drafting & Statutory Scrutiny",
    description:
      "Ambiguous wording in agreements invites contentious disputes. Our advocates draft, audit, and negotiate high-value agreements with statutory precision to safeguard client interests against future liabilities.",
    scope: [
      "Commercial contracts, vendor pacts, and service level agreements",
      "General and Special Power of Attorney instruments",
      "Wills, codicils, family settlements, and trust deeds",
      "Legal notices, reply notices, and rejoinder communications",
      "Independent legal review of agreements drafted by third parties",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#183354]/30 blur-[140px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
            <FileText className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#DFBF7D]">
              Legal Capabilities
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F7F5F0] leading-tight">
            Considered Legal Counsel Across Key Jurisdictions.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#AAB4C3] leading-relaxed">
            Lexlead Legal Solutions offers targeted legal representation and transactional guidance across the core judicial branches in Thiruvananthapuram and across Kerala.
          </p>
        </div>
      </section>

      {/* Practice Details List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-12">
          {DETAILED_PRACTICES.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <GlassPanel
                key={practice.id}
                id={practice.id}
                variant={index % 2 === 0 ? "default" : "subtle"}
                className="p-8 sm:p-10 lg:p-12 scroll-mt-28 border border-white/10 hover:border-[#C6A15B]/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Heading, Icon, Description */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-[#C6A15B]/40 flex items-center justify-center text-[#DFBF7D]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-[#DFBF7D]">
                          Practice Area 0{index + 1}
                        </span>
                        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F7F5F0]">
                          {practice.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#DFBF7D]/90">
                      {practice.subtitle}
                    </p>

                    <p className="text-sm text-[#AAB4C3] leading-relaxed pt-1">
                      {practice.description}
                    </p>

                    <div className="pt-4">
                      <Button
                        href={`/contact?area=${encodeURIComponent(practice.title)}`}
                        variant="secondary"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Enquire for {practice.title}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Scope of Representation */}
                  <div className="lg:col-span-6 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-[#F7F5F0]">
                      Key Areas of Guidance & Representation:
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#AAB4C3]">
                      {practice.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassPanel>
            );
          })}
        </div>

        {/* Regulatory Note */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#AAB4C3]/80 leading-relaxed">
            In compliance with Bar Council of India guidelines, the details provided above are intended to inform potential clients regarding areas of practice. Formal acceptance of a legal brief occurs only after verification of facts, absence of conflict, and execution of a vakalatnama or engagement agreement.
          </p>
        </div>
      </section>
    </main>
  );
}
