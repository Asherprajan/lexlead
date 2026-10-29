import React from "react";
import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling practices of Lexlead Legal Solutions, Thiruvananthapuram, Kerala.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
          DATA PROTECTION & CONFIDENTIALITY
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] mt-2">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-[#B18A4A]">
          Last reviewed: January 2026 • Lexlead Legal Solutions, Advocates
        </p>

        <div className="mt-8 bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] space-y-7 text-sm text-[#626B76] leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              1. Professional Privilege & Data Confidentiality
            </h2>
            <p>
              Lexlead Legal Solutions operates strictly within the framework of professional advocate ethics under the Advocates Act, 1961, and Section 126 of the Indian Evidence Act, 1872. All client communications, documentary evidence, case notes, and consultations are protected by attorney-client privilege.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              2. Information Collected Through This Website
            </h2>
            <p>
              When you submit a consultation enquiry through our contact form, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Your full name and contact identifiers (email address, telephone number)</li>
              <li>The selected category of legal practice</li>
              <li>A preliminary summary of the matter solely for intake and conflict screening purposes</li>
            </ul>
            <p className="text-xs text-[#B18A4A]">
              We advise visitors not to upload or transmit highly sensitive confidential documents, financial records, or original deeds through the initial public enquiry form.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              3. Purpose of Processing
            </h2>
            <p>
              Information submitted is utilized exclusively for assessing whether the chambers can accept your instructions, conducting mandatory conflict of interest checks, scheduling chamber conferences, and communicating with you directly. We do not sell, license, rent, or trade personal data to third parties.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
              4. Contact for Privacy Inquiries
            </h2>
            <div className="p-4 rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] text-xs text-[#10253D] space-y-1">
              <p className="font-semibold text-[#B18A4A]">Chambers Registry</p>
              <p>LEXLEAD LEGAL SOLUTIONS — ADVOCATES</p>
              <p>Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035</p>
              <p>Email: <a href="mailto:info@lexleadlegal.in" className="text-[#B18A4A] underline">info@lexleadlegal.in</a></p>
              <p>Phone: +91 79072 24126 / +91 95676 53357 / +91 97473 95967</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
