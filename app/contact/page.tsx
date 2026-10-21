import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, ExternalLink, ShieldAlert, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Chambers",
  description:
    "Schedule a confidential legal consultation with Lexlead Legal Solutions at our chambers in Vanchiyoor, Thiruvananthapuram, Kerala.",
};

const FAQS = [
  {
    q: "How are initial consultations conducted?",
    a: "We offer both in-person conferences at our chambers in Vanchiyoor, Thiruvananthapuram, as well as secure virtual consultations via video conference for non-resident clients.",
  },
  {
    q: "What should I prepare before an initial consultation?",
    a: "It is beneficial to bring or compile: (1) A brief chronological outline of events, (2) Copies of primary contracts, deeds, notices, or pleadings received, and (3) A clear summary of the relief or guidance sought.",
  },
  {
    q: "Does submitting this form create an advocate-client relationship?",
    a: "No. Under the rules of the Bar Council of India, formal representation begins only after an initial conflict check, mutual agreement on representation scope, and execution of a vakalatnama or formal engagement letter.",
  },
  {
    q: "Is my consultation strictly confidential?",
    a: "Yes. All preliminary communications and documents submitted for the purpose of seeking legal advice are strictly confidential and protected by professional advocate privilege.",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 w-full pt-28 pb-20 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#DFBF7D]/10 dark:bg-[#183354]/30 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#C6A15B]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-[#C6A15B]/30 mb-6">
            <MapPin className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#92703B] dark:text-[#DFBF7D]">
              Chambers Registry • Thiruvananthapuram
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] dark:text-[#F7F5F0] leading-tight">
            Schedule a Confidential Legal Consultation.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
            Our chambers are situated in the judicial corridor of Vanchiyoor, Thiruvananthapuram. We welcome inquiries regarding civil litigation, criminal defense, property, and commercial advisory.
          </p>
        </div>
      </section>

      {/* Two Column Layout: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Chamber Info & Consultation Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address */}
            <GlassPanel variant="subtle" className="p-6 border border-black/10 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 flex items-center justify-center text-[#92703B] dark:text-[#DFBF7D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Chambers Address
                  </h3>
                  <p className="text-base font-medium text-[#10253D] dark:text-[#F7F5F0]">
                    Lexlead Legal Solutions — Advocates
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed pl-13">
                Court Road / Vanchiyoor, Thiruvananthapuram, Kerala, India — 695035
              </p>
              <div className="pl-13 pt-1">
                <a
                  href="https://maps.google.com/?q=Vanchiyoor+Thiruvananthapuram+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#92703B] dark:text-[#DFBF7D] hover:text-[#10253D] dark:hover:text-[#F7F5F0] transition-colors font-medium"
                >
                  <span>Locate via Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassPanel>

            {/* Direct Communication */}
            <GlassPanel variant="subtle" className="p-6 border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 flex items-center justify-center text-[#92703B] dark:text-[#DFBF7D]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Electronic Registry
                  </h3>
                  <a
                    href="mailto:office@lexlead.in"
                    className="text-sm font-medium text-[#10253D] dark:text-[#F7F5F0] hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors"
                  >
                    office@lexlead.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-black/10 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 flex items-center justify-center text-[#92703B] dark:text-[#DFBF7D]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Chamber Desk
                  </h3>
                  <p className="text-sm font-medium text-[#10253D] dark:text-[#F7F5F0]">
                    +91 (0) 471 Consultation Line
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-black/10 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 flex items-center justify-center text-[#92703B] dark:text-[#DFBF7D]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Working Hours
                  </h3>
                  <p className="text-xs text-[#10253D] dark:text-[#F7F5F0]">
                    Monday – Friday: 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3]">
                    Saturday: By Prior Chamber Appointment
                  </p>
                </div>
              </div>
            </GlassPanel>

            {/* Preparation note */}
            <div className="p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#92703B] dark:text-[#DFBF7D] uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#C6A15B]" />
                <span>Confidentiality & Conflict Policy</span>
              </div>
              <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3] leading-relaxed">
                To prevent potential conflict of interest, all incoming requests are screened before substantive advice is tendered. Please state the names of opposing parties if litigation has commenced.
              </p>
            </div>
          </div>

          {/* Right Column: Glassmorphic Consultation Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-[#4A586E] dark:text-[#AAB4C3]">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#EFECE4] dark:bg-[#070e1a]/80 border-t border-black/10 dark:border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Consultation Guidance"
            title="Frequently Asked Questions"
            description="Clear answers regarding consultation procedures, confidentiality, and chamber protocols."
          />

          <div className="mt-12 space-y-4">
            {FAQS.map((faq) => (
              <GlassPanel key={faq.q} variant="subtle" className="p-6 border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#C6A15B] shrink-0 mt-1" />
                  <h4 className="font-serif-luxury text-lg text-[#10253D] dark:text-[#F7F5F0] font-medium">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4A586E] dark:text-[#AAB4C3] pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
