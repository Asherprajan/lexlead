import React from "react";
import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling practices of Lexlead Legal Solutions, Thiruvananthapuram, Kerala.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
          <Shield className="w-4 h-4 text-[#C6A15B]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#92703B] dark:text-[#DFBF7D]">
            Legal Transparency
          </span>
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
          Privacy Policy & Confidentiality Statement
        </h1>
        <p className="mt-4 text-xs text-[#92703B] dark:text-[#DFBF7D]">
          Last reviewed: January 2026 • Lexlead Legal Solutions, Advocates
        </p>

        <GlassPanel variant="subtle" className="mt-10 p-8 sm:p-10 border border-black/10 dark:border-white/10 space-y-8 text-sm text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              1. Professional Privilege & Data Confidentiality
            </h2>
            <p>
              Lexlead Legal Solutions operates strictly within the framework of professional advocate ethics under the Advocates Act, 1961, and Section 126 of the Indian Evidence Act, 1872. All client communications, documentary evidence, case notes, and consultations are protected by attorney-client privilege.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              2. Information Collected Through This Website
            </h2>
            <p>
              When you submit a consultation enquiry through our contact form, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Your full name and contact identifiers (email address, telephone number)</li>
              <li>The selected category of legal practice</li>
              <li>A preliminary summary of the matter solely for intake and conflict screening purposes</li>
            </ul>
            <p className="text-xs text-[#92703B] dark:text-[#DFBF7D]">
              We advise visitors not to upload or transmit highly sensitive confidential documents, financial records, or original deeds through the initial public enquiry form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              3. Purpose of Processing
            </h2>
            <p>
              Information submitted is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Assessing whether the chambers can accept your instructions</li>
              <li>Conducting mandatory conflict of interest checks against adverse parties</li>
              <li>Scheduling in-person or virtual chamber conferences</li>
              <li>Direct advocate communication regarding your enquiry</li>
            </ul>
            <p>
              We do not sell, license, rent, or trade personal data to third parties, commercial advertisers, or marketing agencies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              4. Data Storage & Security
            </h2>
            <p>
              All electronic communications transmitted through our platform are protected by Transport Layer Security (TLS/SSL). Inquiries are stored on secure encrypted servers with restricted access limited to authorized advocates and chamber personnel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-xl font-medium text-[#10253D] dark:text-[#F7F5F0]">
              5. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding how your data is handled or wish to have your contact details updated or expunged following a consultation, you may address written correspondence to:
            </p>
            <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-xs text-[#10253D] dark:text-[#F7F5F0]">
              <p className="font-semibold text-[#92703B] dark:text-[#DFBF7D]">Chamber Registry</p>
              <p>Lexlead Legal Solutions — Advocates</p>
              <p>Court Road / Vanchiyoor, Thiruvananthapuram, Kerala — 695035</p>
              <p>Email: <a href="mailto:office@lexlead.in" className="text-[#92703B] dark:text-[#DFBF7D] underline">office@lexlead.in</a></p>
            </div>
          </section>
        </GlassPanel>
      </div>
    </main>
  );
}
