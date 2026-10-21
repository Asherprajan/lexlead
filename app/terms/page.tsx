import React from "react";
import type { Metadata } from "next";
import { Scale, AlertCircle, FileCheck2 } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer",
  description:
    "Bar Council of India compliance statement, legal disclaimer, and terms of use for the Lexlead Legal Solutions website.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
          <Scale className="w-4 h-4 text-[#C6A15B]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#DFBF7D]">
            Regulatory Compliance
          </span>
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F7F5F0]">
          Terms of Use & Bar Council Compliance
        </h1>
        <p className="mt-4 text-xs text-[#DFBF7D]">
          Applicable under the Bar Council of India Rules • Thiruvananthapuram, Kerala
        </p>

        {/* Highlighted Compliance Notice */}
        <div className="mt-8 p-6 rounded-2xl bg-[#C6A15B]/10 border border-[#C6A15B]/35 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#DFBF7D] shrink-0 mt-1" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#F7F5F0]/90 leading-relaxed">
            <h2 className="font-semibold text-[#DFBF7D] uppercase tracking-wide text-xs">
              Bar Council of India Rule 36 Mandatory Notice
            </h2>
            <p>
              As per the rules of the Bar Council of India, advocates and legal practitioners are not permitted to solicit work or advertise in any form or manner. By accessing this website (www.lexlead.in), you acknowledge and confirm that you are seeking information relating to Lexlead Legal Solutions of your own accord and that there has been no form of solicitation, advertisement, or inducement by the firm or its members.
            </p>
          </div>
        </div>

        <GlassPanel variant="subtle" className="mt-8 p-8 sm:p-10 border border-white/10 space-y-8 text-sm text-[#AAB4C3] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#F7F5F0]">
              1. Informational Purpose Only
            </h2>
            <p>
              The contents of this website are provided solely for general informational purposes to present an overview of Lexlead Legal Solutions, its areas of practice, and its chambers located in Thiruvananthapuram, Kerala. None of the material on this site should be interpreted or relied upon as formal legal counsel or advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#F7F5F0]">
              2. No Advocate-Client Relationship
            </h2>
            <p>
              The transmission, receipt, or browsing of information contained on this website or transmitting an online consultation form does not create an advocate-client relationship between Lexlead Legal Solutions and the user. Formal representation occurs exclusively upon:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Completion of standard conflict-of-interest checks</li>
              <li>Mutual agreement on scope of legal assignment</li>
              <li>Execution of a vakalatnama or formal legal engagement letter</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#F7F5F0]">
              3. No Guarantee of Judicial Outcomes
            </h2>
            <p>
              Under advocate ethics, outcomes of judicial or quasi-judicial proceedings are subject to evidence, court jurisdiction, and judicial discretion. Lexlead Legal Solutions does not make, and expressly disclaims, any guarantees, promises, or warranties regarding specific results in contentious litigation or regulatory matters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#F7F5F0]">
              4. Intellectual Property
            </h2>
            <p>
              All proprietary brand identifiers, including the &ldquo;Lexlead Legal Solutions&rdquo; name, logo mark, editorial texts, design elements, and brand layout, are the intellectual property of the firm. Unauthorized reproduction, modification, or commercial distribution is prohibited without prior written sanction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#F7F5F0]">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              Any disputes, controversies, or claims arising out of or in connection with the use of this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Thiruvananthapuram, Kerala.
            </p>
          </section>
        </GlassPanel>
      </div>
    </main>
  );
}
