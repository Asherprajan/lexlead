import React from "react";
import type { Metadata } from "next";
import { Scale, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Bar Council of India Rule 36 compliance statement and legal disclaimer for Lexlead Legal Solutions, Thiruvananthapuram, Kerala.",
};

export default function DisclaimerPage() {
  return (
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
          BAR COUNCIL OF INDIA COMPLIANCE
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] mt-2">
          Legal Disclaimer
        </h1>
        <p className="mt-2 text-xs text-[#B18A4A]">
          Under the Advocates Act, 1961 and Bar Council Rules • Thiruvananthapuram, Kerala
        </p>

        {/* Highlighted Compliance Notice */}
        <div className="mt-6 p-5 sm:p-6 rounded-sm bg-white border-l-4 border-[#C6A15B] border-y border-r border-[#E8E1D5] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B18A4A] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#10253D] leading-relaxed">
            <h2 className="font-semibold text-[#B18A4A] uppercase tracking-wide text-xs">
              Mandatory Regulatory Notice
            </h2>
            <p>
              Under Rule 36 of the Bar Council of India Rules, advocates and law firms in India are strictly prohibited from soliciting work or advertising in any form. By accessing this website (www.lexleadlegal.in), you acknowledge that you are seeking information voluntarily for your own informational purposes and that there has been no solicitation, invitation, or inducement of any kind.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] space-y-7 text-sm text-[#626B76] leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              1. Informational Purpose Only
            </h2>
            <p>
              The material published on this website is for general informational awareness regarding the fields of practice provided by Lexlead Legal Solutions. None of the content should be construed as formal legal advice or an authoritative legal opinion.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              2. No Advocate-Client Relationship
            </h2>
            <p>
              Sending an enquiry via this website, transmitting emails, or receiving preliminary correspondence does not create an advocate-client relationship. Formal representation commences strictly upon conflict verification, explicit acceptance of terms, and execution of a vakalatnama or formal engagement agreement.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              3. No Judicial Outcome Guarantees
            </h2>
            <p>
              Judicial and quasi-judicial decisions in India depend on factual merit, documentary evidence, and statutory interpretation by the competent courts. Lexlead Legal Solutions does not make, and disclaims, any promises or guarantees regarding specific case outcomes.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              4. Office & Jurisdiction
            </h2>
            <div className="p-4 rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] text-xs text-[#10253D] space-y-1">
              <p className="font-semibold text-[#B18A4A]">Chambers Registry</p>
              <p>LEXLEAD LEGAL SOLUTIONS — ADVOCATES</p>
              <p>Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035</p>
              <p>Telephone: +91 79072 24126 / +91 95676 53357 / +91 97473 95967</p>
              <p>Email: <a href="mailto:info@lexleadlegal.in" className="text-[#B18A4A] underline">info@lexleadlegal.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
