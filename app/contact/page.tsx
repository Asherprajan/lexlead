import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, ExternalLink, ShieldCheck, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Chambers",
  description:
    "Contact Lexlead Legal Solutions advocates at our chambers in Vinayaka Building, Vanchiyoor, Thiruvananthapuram, Kerala.",
};

const FAQS = [
  {
    q: "How are initial consultations conducted?",
    a: "We offer both in-person conferences at our chambers in Vanchiyoor, Thiruvananthapuram, as well as secure virtual consultations via video conference for non-resident clients.",
  },
  {
    q: "What should I prepare before an initial consultation?",
    a: "It is beneficial to bring or compile: (1) A brief chronological outline of events, (2) Copies of primary contracts, deeds, notices, or court pleadings received, and (3) A clear summary of the relief or guidance sought.",
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
    <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
            CHAMBERS REGISTRY
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
            Contact Lexlead Legal Solutions
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
            Our chambers are located in Vanchiyoor, adjacent to the District Court Complex in Thiruvananthapuram, Kerala. We provide preliminary assessments for civil, criminal, property, and commercial matters.
          </p>
        </div>

        {/* Two Column Layout: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left Column: Chambers Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E8E1D5] space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Chambers Address
                  </h3>
                  <p className="text-sm font-semibold text-[#10253D] mt-0.5">
                    LEXLEAD LEGAL SOLUTIONS
                  </p>
                  <p className="text-xs text-[#626B76] mt-1 leading-relaxed">
                    Ground Floor, Vinayaka Building, <br />
                    V V Road, Opp. Rainbow Apartments, Vanchiyoor, <br />
                    Thiruvananthapuram, Kerala – 695035
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vinayaka+Building+Vanchiyoor+Thiruvananthapuram+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#B18A4A] hover:text-[#10253D] mt-2 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Direct Telephone
                  </h3>
                  <div className="flex flex-col gap-1 mt-1 text-sm font-medium text-[#10253D]">
                    <a href="tel:7907224126" className="hover:text-[#B18A4A]">
                      +91 79072 24126
                    </a>
                    <a href="tel:9567653357" className="hover:text-[#B18A4A]">
                      +91 95676 53357
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Email Communications
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#10253D]">
                    <a href="mailto:lexleadlegal@gmail.com" className="hover:text-[#B18A4A]">
                      lexleadlegal@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Working Hours
                  </h3>
                  <p className="text-xs text-[#10253D] mt-1">
                    Monday to Friday: 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-xs text-[#626B76] mt-0.5">
                    Saturday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-white border border-[#E8E1D5] flex items-center gap-3 text-xs text-[#626B76]">
              <ShieldCheck className="w-4 h-4 text-[#B18A4A] shrink-0" />
              <span>
                All inquiries submitted to our chambers are treated with strict confidentiality under advocate ethical obligations.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-[#626B76]">Loading form...</div>}>
              <ContactForm darkTheme={true} />
            </Suspense>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#E8E1D5]">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#B18A4A] shrink-0 mt-1" />
                  <h3 className="font-serif-luxury text-lg font-medium text-[#10253D]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#626B76] pl-6.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
