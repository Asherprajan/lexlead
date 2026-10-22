import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
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
    title: `${practice.title} | Lexlead Legal Solutions`,
    description: practice.shortDescription,
    openGraph: {
      title: `${practice.title} | Lexlead Legal Solutions`,
      description: practice.shortDescription,
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

  return (
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

            {/* Regulatory Disclaimer */}
            <div className="p-4 rounded-sm bg-white border border-[#E8E1D5] text-xs text-[#626B76] leading-relaxed">
              <strong className="text-[#10253D]">Advocates Act Compliance:</strong> Legal assistance is subject to direct chamber consultation, factual verification, conflict check, and execution of formal engagement documentation in Thiruvananthapuram, Kerala.
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
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                <span>Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035</span>
              </div>
              <div className="flex items-center gap-2.5">
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
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B18A4A] shrink-0" />
                <a href="mailto:lexleadlegal@gmail.com" className="hover:text-[#10253D]">
                  lexleadlegal@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
