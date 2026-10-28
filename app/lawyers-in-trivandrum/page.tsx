import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Scale, Landmark, Users, House, Building2, FileText, HelpCircle, Calendar, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ChambersMap } from "@/components/contact/ChambersMap";
import { ContactForm } from "@/components/contact/ContactForm";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Lawyers in Trivandrum | Advocates in Thiruvananthapuram | Lexlead Legal Solutions",
  description:
    "Looking for trusted advocates in Thiruvananthapuram (Trivandrum)? Lexlead Legal Solutions offers expert legal services in civil litigation, criminal law, property disputes, family law, and corporate advisory from our branch chambers in Vanchiyoor, Thiruvananthapuram, Kerala.",
  keywords: [
    "lawyers in Trivandrum",
    "advocates in Thiruvananthapuram",
    "law firm Trivandrum",
    "best lawyers Thiruvananthapuram",
    "civil lawyer Trivandrum",
    "criminal lawyer Thiruvananthapuram",
    "property lawyer Trivandrum",
    "family court lawyer Thiruvananthapuram",
    "corporate lawyer Trivandrum",
    "Kerala High Court advocate Trivandrum",
    "District Court Trivandrum lawyer",
    "Vanchiyoor advocate chambers",
    "legal consultation Thiruvananthapuram",
    "advocate near me Trivandrum",
    "Lexlead Legal Solutions Thiruvananthapuram",
  ],
  alternates: {
    canonical: "/lawyers-in-trivandrum",
  },
  openGraph: {
    title: "Lawyers in Trivandrum | Advocates in Thiruvananthapuram | Lexlead Legal Solutions",
    description:
      "Expert advocates based at Vanchiyoor, Thiruvananthapuram. Civil litigation, criminal defense, property disputes, family law & corporate advisory across Trivandrum courts.",
    url: "https://lexleadlegal.in/lawyers-in-trivandrum",
  },
};

const TRIVANDRUM_FAQS = [
  {
    q: "Where is Lexlead's branch office located in Thiruvananthapuram?",
    a: "Our chambers are located on the Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035. The chambers are within comfortable walking distance to the Vanchiyoor Court Complex.",
  },
  {
    q: "Which courts and forums in Thiruvananthapuram do your advocates appear in?",
    a: "We regularly appear before the Thiruvananthapuram District & Sessions Court (Vanchiyoor), Family Court Thiruvananthapuram, Chief Judicial Magistrate Court, Munsiff Courts, Rent Control Court, and Land Tribunals.",
  },
  {
    q: "Do your Trivandrum advocates handle property disputes and title verifications?",
    a: "Yes. We conduct extensive title scrutiny, encumbrance verification, inheritance and partition suits, property registration assistance, and boundary dispute litigation across Thiruvananthapuram district.",
  },
  {
    q: "How can I book a consultation with an advocate at the Vanchiyoor chambers?",
    a: "You can book directly by calling +91 471 316 1884 or +91 79072 24126, or submit an inquiry through our consultation request form. Both in-person meetings at Vanchiyoor and virtual consultations are accommodated.",
  },
  {
    q: "If my case originates in Trivandrum but requires High Court appeal, how is it handled?",
    a: "Lexlead operates as an integrated practice with our Principal Chambers in Ernakulam (Kochi) right beside the High Court. Your matter is transitioned seamlessly between our Trivandrum and Ernakulam advocates without requiring you to engage external counsel.",
  },
];

const trivandrumBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lexleadlegal.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lawyers in Trivandrum",
      item: "https://lexleadlegal.in/lawyers-in-trivandrum",
    },
  ],
};

const trivandrumFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TRIVANDRUM_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const trivandrumSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lexlead Legal Solutions — Branch Chambers, Thiruvananthapuram",
  url: "https://lexleadlegal.in/lawyers-in-trivandrum",
  telephone: ["+914713161884"],
  email: "lexleadlegal@gmail.com",
  description:
    "Experienced advocates in Thiruvananthapuram (Trivandrum) offering civil litigation, criminal law, property disputes, family law, and corporate legal services from branch chambers in Vanchiyoor.",
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
  areaServed: [
    { "@type": "City", name: "Thiruvananthapuram" },
    { "@type": "City", name: "Trivandrum" },
    { "@type": "AdministrativeArea", name: "Kerala" },
  ],
  openingHours: ["Mo-Fr 09:30-18:30", "Sa 10:00-14:00"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services in Thiruvananthapuram",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Litigation — Thiruvananthapuram Courts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Law — District Court & Kerala High Court Trivandrum" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Disputes — Thiruvananthapuram" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family & Matrimonial Law — Family Court Trivandrum" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Commercial Law — Thiruvananthapuram" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contract & Documentation Support" } },
    ],
  },
};

const SERVICES = [
  {
    icon: Scale,
    title: "Civil Litigation",
    slug: "civil-litigation",
    desc: "Representation in civil suits, injunctions, appeals, and execution proceedings before Thiruvananthapuram District Court and Kerala High Court.",
  },
  {
    icon: Landmark,
    title: "Criminal Law",
    slug: "criminal-law",
    desc: "Bail applications, trial defense, and revision petitions before Thiruvananthapuram Magistrate Courts, Sessions Court, and Kerala High Court.",
  },
  {
    icon: Users,
    title: "Family & Matrimonial Law",
    slug: "family-and-matrimonial-law",
    desc: "Divorce, maintenance, custody, and domestic violence proceedings before Family Court, Thiruvananthapuram.",
  },
  {
    icon: House,
    title: "Property & Real Estate",
    slug: "property-and-real-estate",
    desc: "Title verification, partition suits, boundary disputes, and revenue matters across Thiruvananthapuram district.",
  },
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    slug: "corporate-and-commercial-law",
    desc: "Commercial contracts, arbitration, and business dispute resolution for enterprises in Thiruvananthapuram.",
  },
  {
    icon: FileText,
    title: "Contract & Documentation",
    slug: "contract-and-documentation-support",
    desc: "Legal notices, agreements, wills, POA instruments, and deed scrutiny for Thiruvananthapuram-based transactions.",
  },
];

export default function LawyersInTrivandrumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trivandrumSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trivandrumBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trivandrumFaqSchema) }}
      />
      <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
              ADVOCATES IN THIRUVANANTHAPURAM (TRIVANDRUM)
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
              Lawyers in Trivandrum —<br />
              Thiruvananthapuram Chambers
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
              Lexlead Legal Solutions operates <strong>branch chambers in Vanchiyoor, Thiruvananthapuram</strong>. Our advocates
              regularly appear before the <strong>Thiruvananthapuram District Court</strong>, <strong>Family Court Trivandrum</strong>,{" "}
              <strong>Sessions Court</strong>, and the <strong>Kerala High Court</strong>, delivering
              comprehensive legal representation across civil, criminal, property, family, and corporate matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Button href="#consultation" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}>
                Book a Consultation
              </Button>
              <Button href="/practice-areas" variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}>
                All Practice Areas
              </Button>
            </div>
          </div>

          {/* Why Lexlead in Trivandrum */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mb-6">
              Why Choose Lexlead as Your Advocates in Thiruvananthapuram?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Branch chambers in Vanchiyoor — in close proximity to Thiruvananthapuram District Court and the Kerala High Court",
                "Regular appearances at Thiruvananthapuram District Court, Family Court, Sessions Court, and Kerala High Court",
                "Deep familiarity with Revenue Division procedures, Sub-Registrar offices, and Land Tribunal practice in Thiruvananthapuram",
                "Extensive case-law research grounded in Kerala High Court precedents relevant to Trivandrum district",
                "Transparent fee structures with no hidden costs — clear engagement letters before any formal representation",
                "Coordination between our Ernakulam Principal Chambers and Thiruvananthapuram Branch for comprehensive statewide advocacy",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#626B76]">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mb-8">
              Legal Services at Our Thiruvananthapuram Chambers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/practice-areas/${s.slug}`}
                    className="group bg-white p-6 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-colors space-y-3"
                  >
                    <div className="w-10 h-10 rounded bg-[#F7F5F0] border border-[#E8E1D5] flex items-center justify-center text-[#B18A4A] group-hover:bg-[#C6A15B]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-luxury text-lg font-medium text-[#10253D]">{s.title}</h3>
                    <p className="text-xs text-[#626B76] leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B18A4A]">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Address & Chambers Info Card */}
          <div className="bg-[#10253D] text-white p-8 sm:p-10 rounded-sm flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
            <div className="flex-1 space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A15B]">
                BRANCH CHAMBERS — THIRUVANANTHAPURAM
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
                Visit Us in Trivandrum
              </h2>
              <div className="flex items-start gap-3 text-sm text-[#AAB4C3]">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#AAB4C3]">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="tel:+914713161884" className="hover:text-white">+91 471 316 1884</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#AAB4C3]">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="mailto:lexleadlegal@gmail.com" className="hover:text-white">lexleadlegal@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="#consultation" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}>
                Request Consultation
              </Button>
              <Link
                href="/lawyers-in-kochi"
                className="text-xs text-center text-[#AAB4C3] hover:text-white underline underline-offset-4"
              >
                View Ernakulam Principal Chambers →
              </Link>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A]">
                  LOCATION MAP
                </span>
                <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D] mt-1">
                  Find Our Chambers at Vanchiyoor, Trivandrum
                </h2>
              </div>
              <p className="text-xs text-[#626B76]">
                Walking distance to the Vanchiyoor Court Complex, District & Sessions Court.
              </p>
            </div>
            <ChambersMap height="h-[360px] sm:h-[420px]" defaultBranch="trivandrum" />
          </div>

          {/* Consultation Form Section */}
          <div id="consultation" className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
                  CHAMBER CONSULTATION
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D]">
                  Request an Appointment in Trivandrum
                </h2>
                <p className="text-sm text-[#626B76] leading-relaxed">
                  Schedule an in-person meeting with our advocates at Vanchiyoor. Preliminary assessments and document reviews are conducted under professional confidentiality.
                </p>
                <div className="space-y-2.5 pt-2 text-xs text-[#626B76]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B18A4A]" />
                    <span>Protected under advocate-client privilege</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B18A4A]" />
                    <span>Prompt scheduling within 24 hours</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ContactForm darkTheme={true} defaultCity="Thiruvananthapuram" />
              </div>
            </div>
          </div>

          {/* Courts We Appear In */}
          <div className="bg-white p-8 rounded-sm border border-[#E8E1D5] mb-12">
            <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D] mb-6">
              Courts & Tribunals We Regularly Appear Before in Thiruvananthapuram
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Thiruvananthapuram District & Sessions Court (Vanchiyoor)",
                "Kerala State Consumer Disputes Redressal Commission (SCDRC, Vazhuthacaud)",
                "Family Court, Thiruvananthapuram (Vanchiyoor)",
                "Motor Accidents Claims Tribunal (MACT), Thiruvananthapuram",
                "Chief Judicial Magistrate Court (CJM) & JFCM Courts, Vanchiyoor",
                "Subordinate Judges' Courts (Sub Courts I, II, III), Vanchiyoor",
                "Principal & Additional Munsiff Courts, Thiruvananthapuram",
                "Rent Control Court, Thiruvananthapuram",
                "District Consumer Commission (DCDRC, Vazhuthacaud)",
                "Special Court for CBI Cases, Thiruvananthapuram",
                "Land Tribunal & Revenue Divisional Office (RDO), Kudappanakunnu",
                "Kerala Administrative Tribunal (KAT), Vanchiyoor",
              ].map((court) => (
                <div key={court} className="flex items-center gap-2.5 text-xs text-[#626B76]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B18A4A] shrink-0" />
                  <span>{court}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trivandrum Case Law & Legal Guides */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#C6A15B]" />
                  <span>TRIVANDRUM CHAMBERS CASE JURISPRUDENCE</span>
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mt-1.5">
                  Legal Guides for Litigants in Thiruvananthapuram
                </h2>
                <p className="text-xs sm:text-sm text-[#626B76] mt-1">
                  Authored by our Vanchiyoor chambers advocates covering family law, property due diligence, medical malpractice, and accident claims.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B18A4A] hover:text-[#10253D] transition-colors shrink-0"
              >
                <span>View All 16 Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {[
                "mutual-consent-divorce-kerala-procedure-timeline",
                "domestic-violence-act-kerala-magistrate-court-procedure",
                "medical-negligence-laws-kerala-consumer-court-procedure",
                "property-title-verification-kerala-checklist",
              ].map((slug) => {
                const post = BLOG_POSTS.find((p) => p.slug === slug);
                if (!post) return null;
                return (
                  <div
                    key={post.slug}
                    className="p-5 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] bg-[#F7F5F0]/50 hover:bg-white transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#626B76] mb-2">
                        <span className="px-2 py-0.5 rounded bg-white text-[#10253D] font-medium text-[9px] uppercase tracking-wider border border-[#E8E1D5]">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#B18A4A]" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      <h3 className="font-serif-luxury text-lg font-medium text-[#10253D] group-hover:text-[#B18A4A] transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs text-[#626B76] line-clamp-2 mt-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E8E1D5]/60 flex items-center justify-between">
                      <span className="text-[11px] text-[#8C98A9]">Thiruvananthapuram Jurisdiction</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-[#B18A4A] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Read Case Guide</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5]">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
                HELPFUL ANSWERS
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mt-1">
                Frequently Asked Questions — Advocates in Trivandrum
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TRIVANDRUM_FAQS.map((faq) => (
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
