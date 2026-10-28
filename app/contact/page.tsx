import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, ExternalLink, ShieldCheck, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ChambersMap } from "@/components/contact/ChambersMap";

export const metadata: Metadata = {
  title: "Contact Chambers",
  description:
    "Contact Lexlead Legal Solutions — main office at Padma Junction, Ernakulam (Kochi) and branch chambers in Vanchiyoor, Thiruvananthapuram, Kerala. Call, email, or fill the enquiry form to schedule a consultation.",
  keywords: [
    "contact Lexlead Legal Solutions",
    "lawyer office Ernakulam",
    "advocate chambers Kochi",
    "advocate office Thiruvananthapuram",
    "legal consultation Kochi contact",
    "Vanchiyoor advocate office",
    "Padma Junction law office",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Lexlead Legal Solutions | Ernakulam & Thiruvananthapuram Chambers",
    description:
      "Reach our advocates at Padma Junction, Ernakulam (Kochi) — Principal Chambers — or Vanchiyoor, Thiruvananthapuram — Branch Chambers. Call, email, or submit an enquiry.",
  },
};

const FAQS = [
  {
    q: "How are initial consultations conducted?",
    a: "We offer in-person conferences at both our Main Office in Padma Junction, Ernakulam (Kochi) and our Branch Chambers in Vanchiyoor, Thiruvananthapuram, as well as secure virtual consultations via video conference for non-resident clients.",
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

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lexleadlegal.in/#ernakulam",
    name: "Lexlead Legal Solutions — Principal Chambers, Ernakulam",
    url: "https://lexleadlegal.in/contact",
    telephone: "+917907224126",
    email: "lexleadlegal@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady",
      addressLocality: "Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682035",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9813,
      longitude: 76.2656,
    },
    openingHours: "Mo-Fr 09:30-18:30",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lexleadlegal.in/#thiruvananthapuram",
    name: "Lexlead Legal Solutions — Branch Chambers, Thiruvananthapuram",
    url: "https://lexleadlegal.in/contact",
    telephone: "+914713161884",
    email: "lexleadlegal@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor",
      addressLocality: "Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695035",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4979,
      longitude: 76.9529,
    },
    openingHours: "Mo-Fr 09:30-18:30",
  },
];

export default function ContactPage() {
  return (
    <>
      {contactSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
            Our main office is established in Padma Junction, Ernakulam (Kochi) alongside our branch chambers in Vanchiyoor, Thiruvananthapuram. We provide preliminary assessments and strategic litigation counsel for civil, criminal, property, and corporate matters across Kerala.
          </p>
        </div>

        {/* Two Column Layout: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left Column: Chambers Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E8E1D5] space-y-5">
              {/* Chambers Locations */}
              <div className="space-y-4">
                {/* Ernakulam Main Office */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                        Ernakulam (Kochi)
                      </h3>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#C6A15B] text-[#10253D] font-bold">
                        Main Office
                      </span>
                    </div>
                    <p className="text-xs text-[#626B76] mt-1 leading-relaxed">
                      2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi, Ernakulam – 682035
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lexlead+Legal+Solutions+TK+Tower+Chittoor+Rd+Padma+Junction+Pullepady+Kochi+Kerala+682035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B18A4A] hover:text-[#10253D] mt-1.5 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Trivandrum Branch */}
                <div className="flex items-start gap-3.5 pt-3.5 border-t border-[#E8E1D5]/70">
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                        Thiruvananthapuram
                      </h3>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] font-bold">
                        Branch Office
                      </span>
                    </div>
                    <p className="text-xs text-[#626B76] mt-1 leading-relaxed">
                      Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035
                    </p>
                    <a
                      href="https://maps.google.com/?q=Vinayaka+Building+Vanchiyoor+Thiruvananthapuram+Kerala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B18A4A] hover:text-[#10253D] mt-1.5 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
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
                  <div className="flex flex-col gap-1.5 mt-1 text-sm font-medium text-[#10253D]">
                    <a href="tel:+914713161884" className="hover:text-[#B18A4A] inline-flex items-center gap-2">
                      <span>+91 471 316 1884</span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#B18A4A] bg-[#F7F5F0] px-1.5 py-0.5 rounded border border-[#E8E1D5]">
                        Office
                      </span>
                    </a>
                    <div className="flex items-center gap-2 text-xs text-[#626B76]">
                      <a href="tel:7907224126" className="hover:text-[#B18A4A] text-sm text-[#10253D]">
                        +91 79072 24126
                      </a>
                      <span className="text-[#AAB4C3]">/</span>
                      <a href="tel:9567653357" className="hover:text-[#B18A4A] text-sm text-[#10253D]">
                        +91 95676 53357
                      </a>
                    </div>
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

        {/* Chambers Location Map */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                COURT DISTRICTS & CHAMBERS LOCATIONS
              </p>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mt-1">
                Find Our Chambers in Ernakulam & Thiruvananthapuram
              </h2>
            </div>
            <p className="text-xs text-[#626B76] max-w-md">
              Toggle between our Main Office at Padma Junction, Ernakulam (Kochi) and our Branch Chambers in Vanchiyoor, Thiruvananthapuram.
            </p>
          </div>
          <ChambersMap height="h-[360px] sm:h-[440px]" defaultBranch="kochi" />
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
    </>
  );
}
