import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Phone, Mail, MapPin, ArrowRight, BookOpen, Clock, ArrowUpRight, Scale } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((practice) => ({
    slug: practice.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const practice = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!practice) {
    return { title: "Practice Area Not Found" };
  }

  return {
    title: `${practice.title} Lawyers in Kochi & Trivandrum | Lexlead Legal Solutions`,
    description: `${practice.shortDescription} Experienced advocates providing ${practice.title.toLowerCase()} services in Ernakulam (Kochi) and Thiruvananthapuram, Kerala.`,
    keywords: [
      `${practice.title} lawyer Ernakulam`,
      `${practice.title} advocate Kochi`,
      `${practice.title} lawyer Thiruvananthapuram`,
      `${practice.title} advocate Trivandrum`,
      `${practice.title} Kerala High Court`,
      "Lexlead Legal Solutions",
    ],
    alternates: {
      canonical: `/practice-areas/${slug}`,
    },
    openGraph: {
      title: `${practice.title} | Lexlead Legal Solutions — Ernakulam & Thiruvananthapuram`,
      description: `${practice.shortDescription} Trusted advocates in Ernakulam (Kochi) and Thiruvananthapuram, Kerala.`,
      images: [practice.image],
    },
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const practice = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  const otherPractices = PRACTICE_AREAS.filter((p) => p.slug !== slug);
  const matchedGuides = BLOG_POSTS.filter((p) => p.relatedPracticeAreaSlug === slug);
  const displayGuides = matchedGuides.length > 0 ? matchedGuides : BLOG_POSTS.slice(0, 3);

  const breadcrumbSchema = {
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
        name: "Practice Areas",
        item: "https://lexleadlegal.in/practice-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: practice.title,
        item: `https://lexleadlegal.in/practice-areas/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${practice.title} Lawyers — Lexlead Legal Solutions`,
    description: practice.longDescription,
    url: `https://lexleadlegal.in/practice-areas/${slug}`,
    telephone: ["+917907224126", "+919567653357", "+919747395967", "+914713161884"],
    areaServed: [
      { "@type": "City", name: "Ernakulam" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Thiruvananthapuram" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    provider: {
      "@type": "LegalService",
      name: "Lexlead Legal Solutions",
      url: "https://lexleadlegal.in",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="flex-1 w-full bg-[#F7F5F0] pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#626B76] hover:text-[#10253D] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Practice Areas</span>
          </Link>
          <div className="text-xs text-[#626B76]">
            Lexlead Legal Solutions • Advocates
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
                LEGAL PRACTICE AREA
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] mt-2 leading-tight">
                {practice.title}
              </h1>
              <p className="text-base sm:text-lg text-[#626B76] mt-4 leading-relaxed">
                {practice.shortDescription}
              </p>
            </div>

            {/* Editorial Feature Image */}
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E8E1D5] shadow-md bg-[#10253D]">
              <Image
                src={practice.image}
                alt={practice.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
                priority
              />
            </div>

            {/* Comprehensive Detail */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E8E1D5] space-y-5">
              <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D]">
                Scope of Representation & Guidance
              </h2>
              <p className="text-sm text-[#626B76] leading-relaxed">
                {practice.longDescription}
              </p>

              <div className="pt-4 border-t border-[#E8E1D5] space-y-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#10253D]">
                  Key Areas of Practice & Services:
                </h3>
                <ul className="space-y-2.5">
                  {practice.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#626B76]">
                      <CheckCircle2 className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Local Chambers Consultation Hubs */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E8E1D5] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A]">
                    REGIONAL CHAMBERS
                  </span>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#10253D] mt-0.5">
                    {practice.title} Services by City
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed">
                Our advocates represent clients in {practice.title.toLowerCase()} matters across trial courts, family courts, and the High Court of Kerala. Schedule a confidential chamber consultation at your nearest office:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <Link
                  href="/lawyers-in-kochi"
                  className="p-4 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] bg-[#F7F5F0]/60 hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#10253D] group-hover:text-[#B18A4A] transition-colors">
                        Ernakulam (Kochi)
                      </span>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#C6A15B] text-[#10253D] font-bold">
                        Main
                      </span>
                    </div>
                    <p className="text-[11px] text-[#626B76] mt-1.5">
                      Padma Junction • Kerala High Court & District Court representation
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#B18A4A] mt-3 inline-flex items-center gap-1">
                    Explore Kochi Chambers <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/lawyers-in-trivandrum"
                  className="p-4 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] bg-[#F7F5F0]/60 hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#10253D] group-hover:text-[#B18A4A] transition-colors">
                        Thiruvananthapuram
                      </span>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] font-bold">
                        Branch
                      </span>
                    </div>
                    <p className="text-[11px] text-[#626B76] mt-1.5">
                      Vanchiyoor • District & Sessions Court, Vanchiyoor Court Complex
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#B18A4A] mt-3 inline-flex items-center gap-1">
                    Explore Trivandrum Chambers <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Related Legal Guides & Case Precedents */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E8E1D5] space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>CASE LAW & STATUTORY GUIDES</span>
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10253D] mt-1">
                    Court Precedents & Legal Analyses
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#B18A4A] hover:text-[#10253D] transition-colors"
                >
                  <span>All Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-xs text-[#626B76] leading-relaxed">
                Practical guides and judicial ratio analyses on {practice.title.toLowerCase()} authored by our Ernakulam and Thiruvananthapuram chambers:
              </p>

              <div className="space-y-4">
                {displayGuides.map((guide) => (
                  <div
                    key={guide.slug}
                    className="p-4 rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] bg-[#F7F5F0]/40 hover:bg-white transition-all group"
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#626B76] mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-white text-[#10253D] font-medium text-[9px] uppercase tracking-wider border border-[#E8E1D5]">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B18A4A]" />
                        <span>{guide.readTime}</span>
                      </span>
                    </div>

                    <h4 className="font-serif-luxury text-base sm:text-lg font-medium text-[#10253D] group-hover:text-[#B18A4A] transition-colors leading-snug">
                      <Link href={`/blog/${guide.slug}`}>
                        {guide.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-[#626B76] line-clamp-2 mt-2 leading-relaxed">
                      {guide.excerpt}
                    </p>

                    {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
                      <div className="mt-2.5 pt-2.5 border-t border-[#E8E1D5]/60 text-[11px] text-[#4A5568] italic flex items-center justify-between">
                        <span className="line-clamp-1 pr-2">
                          &ldquo;{guide.keyTakeaways[0]}&rdquo;
                        </span>
                        <Link
                          href={`/blog/${guide.slug}`}
                          className="shrink-0 font-medium text-[#B18A4A] inline-flex items-center gap-0.5 not-italic hover:underline"
                        >
                          <span>Read</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Disclaimer */}
            <div className="p-4 rounded-sm bg-white border border-[#E8E1D5] text-xs text-[#626B76] leading-relaxed">
              <strong className="text-[#10253D]">Advocates Act Compliance:</strong> Legal assistance is subject to direct chamber consultation, factual verification, conflict check, and execution of formal engagement documentation at our chambers in Ernakulam (Kochi) and Thiruvananthapuram, Kerala.
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Consultation Card */}
            <ContactForm defaultPracticeArea={practice.title} darkTheme={true} />

            {/* Other Practice Areas Navigation */}
            <div className="bg-white p-6 rounded-sm border border-[#E8E1D5] space-y-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#10253D]">
                Other Practice Areas
              </h3>
              <ul className="divide-y divide-[#E8E1D5] text-xs sm:text-sm">
                {otherPractices.map((p) => (
                  <li key={p.slug} className="py-2.5">
                    <Link
                      href={`/practice-areas/${p.slug}`}
                      className="flex items-center justify-between text-[#626B76] hover:text-[#B18A4A] transition-colors"
                    >
                      <span>{p.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chambers Direct Contact */}
            <div className="bg-white p-6 rounded-sm border border-[#E8E1D5] space-y-3 text-xs text-[#626B76]">
              <h3 className="font-semibold tracking-wider uppercase text-[#10253D]">
                Chambers Registry
              </h3>
              {/* Ernakulam Main Office */}
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#B18A4A]">Main Office — Ernakulam (Kochi)</span>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                  <span>2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi – 682035</span>
                </div>
              </div>
              {/* Trivandrum Branch */}
              <div className="space-y-1 pt-2 border-t border-[#E8E1D5]">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#626B76]">Branch Chambers — Thiruvananthapuram</span>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                  <span>Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-[#E8E1D5]">
                <Phone className="w-4 h-4 text-[#B18A4A] shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <a href="tel:+914713161884" className="hover:text-[#10253D] font-medium">
                      +91 471 316 1884
                    </a>
                    <span className="text-[10px] text-[#B18A4A] font-semibold uppercase">(Office)</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap text-xs text-[#626B76]">
                    <a href="tel:7907224126" className="hover:text-[#10253D]">
                      +91 79072 24126
                    </a>
                    <span>/</span>
                    <a href="tel:9567653357" className="hover:text-[#10253D]">
                      +91 95676 53357
                    </a>
                    <span>/</span>
                    <a href="tel:9747395967" className="hover:text-[#10253D]">
                      +91 97473 95967
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B18A4A] shrink-0" />
                <a href="mailto:info@lexleadlegal.in" className="hover:text-[#10253D]">
                  info@lexleadlegal.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);
}
