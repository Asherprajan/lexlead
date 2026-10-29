import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Scale, Landmark, Users, House, Building2, FileText, HelpCircle, Calendar, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ChambersMap } from "@/components/contact/ChambersMap";
import { ContactForm } from "@/components/contact/ContactForm";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Lawyers in Kochi | Advocates in Ernakulam | Lexlead Legal Solutions",
  description:
    "Looking for experienced advocates in Kochi (Ernakulam)? Lexlead Legal Solutions offers expert legal services in civil litigation, criminal law, property disputes, family law, and corporate advisory from our principal chambers at Padma Junction, Ernakulam, Kerala.",
  keywords: [
    "lawyers in Kochi",
    "advocates in Ernakulam",
    "law firm Kochi",
    "best lawyers Ernakulam",
    "civil lawyer Kochi",
    "criminal lawyer Ernakulam",
    "property lawyer Kochi",
    "family court lawyer Ernakulam",
    "corporate lawyer Kochi",
    "High Court advocate Ernakulam",
    "Ernakulam District Court lawyer",
    "Padma Junction advocate chambers",
    "legal consultation Kochi",
    "advocate near me Ernakulam",
    "Lexlead Legal Solutions Kochi",
  ],
  alternates: {
    canonical: "/lawyers-in-kochi",
  },
  openGraph: {
    title: "Lawyers in Kochi | Advocates in Ernakulam | Lexlead Legal Solutions",
    description:
      "Expert advocates based at Padma Junction, Ernakulam (Kochi). Civil litigation, criminal defense, property disputes, family law & corporate advisory across Kerala courts.",
    url: "https://lexleadlegal.in/lawyers-in-kochi",
  },
};

const KOCHI_FAQS = [
  {
    q: "Where is Lexlead's main legal office located in Ernakulam (Kochi)?",
    a: "Our principal chambers are situated on the 2nd Floor, T K Tower, Chittoor Road, Padma Junction, Pullepady, Kochi – 682035. The chambers are centrally located with rapid transit connectivity to Ernakulam North & South railway stations, MG Road, and the High Court of Kerala.",
  },
  {
    q: "Do your advocates represent matters before the Kerala High Court in Ernakulam?",
    a: "Yes. Our advocates regularly appear before the High Court of Kerala in Ernakulam for civil writ petitions, criminal appeals, anticipatory bail applications, revision petitions, and commercial matters.",
  },
  {
    q: "Which district courts and tribunals in Ernakulam do you cover?",
    a: "We actively represent clients across the Ernakulam District & Sessions Court, Family Court Ernakulam, Chief Judicial Magistrate Court, Rent Control Court, Motor Accidents Claims Tribunal (MACT), and Land Tribunals.",
  },
  {
    q: "Can I schedule an in-person consultation at the Padma Junction chambers?",
    a: "Yes. Chamber consultations can be scheduled Monday through Friday from 9:30 AM to 6:30 PM, and on Saturdays by prior appointment. Virtual consultations via secure video/telephone are also available for NRI and out-of-station clients.",
  },
  {
    q: "What documents should I prepare for an initial consultation with an advocate in Kochi?",
    a: "Please bring all relevant correspondence, case files, registered deeds, notices received, police complaints, or previous court orders. This enables our advocates to conduct a rigorous factual assessment during your consultation.",
  },
];

const kochiBreadcrumbSchema = {
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
      name: "Lawyers in Kochi",
      item: "https://lexleadlegal.in/lawyers-in-kochi",
    },
  ],
};

const kochiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: KOCHI_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const kochiSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lexlead Legal Solutions — Principal Chambers, Ernakulam (Kochi)",
  url: "https://lexleadlegal.in/lawyers-in-kochi",
  telephone: ["+917907224126", "+919567653357", "+919747395967"],
  email: "info@lexleadlegal.in",
  description:
    "Experienced advocates in Kochi (Ernakulam) offering civil litigation, criminal law, property disputes, family law, and corporate legal services from principal chambers at Padma Junction.",
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
  areaServed: [
    { "@type": "City", name: "Kochi" },
    { "@type": "City", name: "Ernakulam" },
    { "@type": "AdministrativeArea", name: "Kerala" },
  ],
  openingHours: ["Mo-Fr 09:30-18:30", "Sa 10:00-14:00"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services in Kochi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Litigation — Ernakulam Courts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criminal Law — Ernakulam & Kerala High Court" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Disputes — Kochi & Ernakulam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family & Matrimonial Law — Family Court Ernakulam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Commercial Law — Kochi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contract & Documentation Support" } },
    ],
  },
};

const SERVICES = [
  {
    icon: Scale,
    title: "Civil Litigation",
    slug: "civil-litigation",
    desc: "Representation in civil suits, injunctions, appeals, and execution proceedings before Ernakulam District Court and Kerala High Court.",
  },
  {
    icon: Landmark,
    title: "Criminal Law",
    slug: "criminal-law",
    desc: "Bail applications, trial defense, and revision petitions before Ernakulam Magistrate Courts, Sessions Court, and Kerala High Court.",
  },
  {
    icon: Users,
    title: "Family & Matrimonial Law",
    slug: "family-and-matrimonial-law",
    desc: "Divorce, maintenance, custody, and domestic violence proceedings before Family Court, Ernakulam.",
  },
  {
    icon: House,
    title: "Property & Real Estate",
    slug: "property-and-real-estate",
    desc: "Title verification, partition suits, boundary disputes, and revenue tribunal matters in Ernakulam and Kochi.",
  },
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    slug: "corporate-and-commercial-law",
    desc: "Commercial contracts, arbitration, and business dispute resolution for enterprises in Kochi and the broader Ernakulam district.",
  },
  {
    icon: FileText,
    title: "Contract & Documentation",
    slug: "contract-and-documentation-support",
    desc: "Legal notices, agreements, wills, POA instruments, and deed scrutiny for Kochi-based transactions.",
  },
];

export default function LawyersInKochiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kochiSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kochiBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kochiFaqSchema) }}
      />
      <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
              ADVOCATES IN ERNAKULAM (KOCHI)
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
              Lawyers in Kochi —<br />
              Ernakulam Chambers
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
              Lexlead Legal Solutions maintains its <strong>principal chambers at Padma Junction, Ernakulam</strong>. Our advocates
              regularly appear before the <strong>Ernakulam District Court</strong>, <strong>Family Court Ernakulam</strong>,{" "}
              <strong>Sessions Court</strong>, and the <strong>Kerala High Court</strong>, providing
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

          {/* Why Lexlead in Kochi */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mb-6">
              Why Choose Lexlead as Your Advocates in Kochi?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Principal chambers strategically located at Padma Junction, Ernakulam — accessible from Ernakulam North, South, and High Court Road",
                "Regular appearances at Ernakulam District Court, Family Court, Sessions Court, and Kerala High Court",
                "Deep familiarity with local Revenue Division procedures, Sub-Registrar offices, and Land Tribunal practice in Ernakulam",
                "Extensive case-law research grounded in Kerala High Court precedents and Supreme Court rulings",
                "Transparent fee structures with no hidden costs — clear engagement letters before any formal representation",
                "Dedicated conflict-of-interest screening prior to every new engagement",
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
              Legal Services at Our Ernakulam Chambers
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
                PRINCIPAL CHAMBERS — ERNAKULAM (KOCHI)
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
                Visit Us in Kochi
              </h2>
              <div className="flex items-start gap-3 text-sm text-[#AAB4C3]">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi, Ernakulam – 682035</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#AAB4C3]">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <div className="flex flex-wrap items-center">
                  <a href="tel:7907224126" className="hover:text-white">+91 79072 24126</a>
                  <span className="mx-2 text-[#AAB4C3]/50">/</span>
                  <a href="tel:9567653357" className="hover:text-white">+91 95676 53357</a>
                  <span className="mx-2 text-[#AAB4C3]/50">/</span>
                  <a href="tel:9747395967" className="hover:text-white">+91 97473 95967</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#AAB4C3]">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="mailto:info@lexleadlegal.in" className="hover:text-white">info@lexleadlegal.in</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="#consultation" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}>
                Request Consultation
              </Button>
              <Link
                href="/lawyers-in-trivandrum"
                className="text-xs text-center text-[#AAB4C3] hover:text-white underline underline-offset-4"
              >
                View Thiruvananthapuram Branch →
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
                  Find Our Chambers at Padma Junction, Kochi
                </h2>
              </div>
              <p className="text-xs text-[#626B76]">
                Centrally accessible from High Court Road, MG Road, and Ernakulam North/South.
              </p>
            </div>
            <ChambersMap height="h-[360px] sm:h-[420px]" defaultBranch="kochi" />
          </div>

          {/* Consultation Form Section */}
          <div id="consultation" className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
                  CHAMBER CONSULTATION
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D]">
                  Request an Appointment in Kochi
                </h2>
                <p className="text-sm text-[#626B76] leading-relaxed">
                  Speak directly with an advocate at our Padma Junction chambers. In-person meetings and virtual consultations are scheduled with strict confidentiality and preliminary conflict check.
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
                <ContactForm darkTheme={true} defaultCity="Ernakulam (Kochi)" />
              </div>
            </div>
          </div>

          {/* Courts We Appear In */}
          <div className="bg-white p-8 rounded-sm border border-[#E8E1D5] mb-12">
            <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D] mb-6">
              Courts & Tribunals We Regularly Appear Before in Ernakulam & Kochi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "High Court of Kerala (Principal Seat, Ernakulam)",
                "National Company Law Tribunal (NCLT Kochi Bench, Kakkanad)",
                "Ernakulam District & Sessions Court",
                "Family Court, Ernakulam",
                "Chief Judicial Magistrate Court (CJM), Ernakulam",
                "Motor Accidents Claims Tribunal (MACT), Ernakulam",
                "Special Court for CBI / ED Cases, Kochi",
                "Judicial First Class Magistrate Courts, Ernakulam",
                "Civil Court & Sub Courts, Ernakulam",
                "Rent Control Appellate Authority & Munsiff Courts",
                "District Consumer Commission (DCDRC Kadavanthra)",
                "Land Tribunal & Revenue Divisional Office (RDO), Ernakulam",
              ].map((court) => (
                <div key={court} className="flex items-center gap-2.5 text-xs text-[#626B76]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B18A4A] shrink-0" />
                  <span>{court}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High Court & Kochi Legal Precedents & Guides */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8E1D5] mb-12 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#C6A15B]" />
                  <span>HIGH COURT & KOCHI CASE JURISPRUDENCE</span>
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mt-1.5">
                  Legal Guides for Litigants in Ernakulam & High Court
                </h2>
                <p className="text-xs sm:text-sm text-[#626B76] mt-1">
                  Authored by our practicing High Court advocates, addressing complex statutory procedures and recent Kerala High Court rulings.
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
                "cyber-police-bank-account-freeze-kerala-high-court-unfreeze",
                "anticipatory-bail-bnss-kerala-high-court",
                "nclt-kochi-ibc-corporate-insolvency-section-7-9-procedure",
                "kerala-high-court-writ-petition-procedure-article-226",
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
                      <span className="text-[11px] text-[#8C98A9]">Kerala High Court Jurisdiction</span>
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
                Frequently Asked Questions — Advocates in Kochi
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {KOCHI_FAQS.map((faq) => (
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
