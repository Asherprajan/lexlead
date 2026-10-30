import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, ArrowUpRight, Scale, ShieldCheck } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

export function HomeInsightsSection() {
  // Select top 3 high-impact guides for the homepage
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  return (
    <section className="w-full bg-[#F7F5F0] py-20 border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C6A15B]" />
              <span>LEGAL INTELLIGENCE & CASE JURISPRUDENCE</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] mt-3 leading-tight">
              Authoritative Guidance on Kerala Law & Court Precedents
            </h2>
            <p className="mt-4 text-base text-[#626B76] leading-relaxed">
              In-depth statutory analyses, procedural roadmaps, and landmark Kerala High Court and Supreme Court rulings authored by our practicing advocates in Ernakulam and Thiruvananthapuram.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#10253D] hover:bg-[#1A365D] text-white text-xs font-semibold tracking-wider uppercase transition-colors self-start md:self-auto shrink-0 shadow-sm"
          >
            <span>Explore All {BLOG_POSTS.length} Legal Guides</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </Link>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <article
              key={article.slug}
              className="bg-white rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#626B76] mb-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#F7F5F0] text-[#10253D] font-medium text-[10px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#B18A4A]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10253D] leading-snug group-hover:text-[#B18A4A] transition-colors mb-3">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>

                {/* Key takeaway snippet */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="p-3.5 rounded bg-[#F7F5F0]/70 border-l-2 border-[#C6A15B] mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10253D] block mb-1">
                      Key Precedent Ratio:
                    </span>
                    <p className="text-[11px] text-[#4A5568] leading-relaxed line-clamp-2 italic">
                      &ldquo;{article.keyTakeaways[0]}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between">
                <span className="text-[11px] text-[#8C98A9]">
                  {article.jurisdiction.split("(")[0]}
                </span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#10253D] group-hover:text-[#B18A4A] transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* High Court & Supreme Court Precedent Badges */}
        <div className="mt-12 p-6 rounded-sm bg-white border border-[#E8E1D5] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10253D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#10253D]">
                Grounded in Authoritative Statutory Precedents
              </p>
              <p className="text-xs text-[#626B76]">
                Covering BNSS 2023, BNS, MSMED Act, Registration of Births &amp; Deaths Act, Kerala Paddy Land Act, NI Act Section 138, and RERA.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/blog/kerala-arrested-person-magistrate-production-24-hours-bnss"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              After-5 PM Arrest Remand (Adv. Subeesh)
            </Link>
            <Link
              href="/blog/birth-certificate-father-name-correction-kerala"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              Birth Certificate (Swamidasan v. Kochi Corp)
            </Link>
            <Link
              href="/blog/msme-delayed-payment-recovery-kerala-msefc"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              MSME Recovery (45-Day Rule)
            </Link>
            <Link
              href="/blog/kerala-paddy-land-data-bank-removal-procedure"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              Data Bank Form 5 (KSREC Satellite)
            </Link>
            <Link
              href="/blog/child-maintenance-after-fathers-remarriage-kerala"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              Child Maintenance (S v. J 2026)
            </Link>
            <Link
              href="/blog/cyber-police-bank-account-freeze-kerala-high-court-unfreeze"
              className="text-xs px-3 py-1.5 rounded bg-[#F7F5F0] hover:bg-[#E8E1D5] text-[#10253D] font-medium transition-colors"
            >
              Cyber Bank Freeze (Dr. Sajeer v. RBI)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
