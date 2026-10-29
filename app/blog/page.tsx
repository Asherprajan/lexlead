import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, ArrowUpRight, Scale, Shield } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { BlogArticlesArchive } from "@/components/blog/BlogArticlesArchive";

export const metadata: Metadata = {
  title: "Legal Insights & Articles | Kerala Law Guides | Lexlead Legal Solutions",
  description:
    "Authoritative legal guides and answers to Kerala's most searched legal questions. In-depth analysis on property due diligence, anticipatory bail under BNSS, mutual consent divorce, caveat filing, and cheque bounce laws by Kerala advocates in Ernakulam and Thiruvananthapuram.",
  keywords: [
    "Kerala legal articles",
    "Kerala law blog",
    "advocate legal insights Kerala",
    "Kerala High Court legal guides",
    "property title verification Kerala guide",
    "anticipatory bail BNSS Kerala High Court",
    "mutual consent divorce Kerala timeline",
    "caveat procedure Section 148A CPC Kerala",
    "cheque bounce notice Section 138 NI Act Kerala",
    "Lexlead Legal Solutions blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Legal Insights & Articles | Kerala Law Guides | Lexlead Legal Solutions",
    description:
      "Expert legal guidance on property, criminal defense, family disputes, and High Court practice in Kerala. Written by practicing advocates at Lexlead Legal Solutions.",
    url: "https://lexleadlegal.in/blog",
  },
};

const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Lexlead Legal Insights — Kerala Law Guides",
  description:
    "Authoritative articles and procedural guides on civil litigation, criminal law, property verification, and family law in Kerala.",
  url: "https://lexleadlegal.in/blog",
  publisher: {
    "@type": "LegalService",
    name: "Lexlead Legal Solutions",
    url: "https://lexleadlegal.in",
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://lexleadlegal.in/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
  })),
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <main className="flex-1 w-full bg-[#F7F5F0] pt-10 sm:pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C6A15B]" />
              <span>KNOWLEDGE & LEGAL INSIGHTS</span>
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#10253D] mt-3 leading-tight">
              Answers to Kerala&apos;s Most Critical Legal Questions
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#626B76] leading-relaxed">
              Researched and authored by practicing advocates at our <strong>Ernakulam (Kochi)</strong> and <strong>Thiruvananthapuram</strong> chambers. Clear, actionable guidance explaining statutory procedures, court precedents, and rights under Indian law.
            </p>
          </div>

          {/* Featured Article Card */}
          {featuredPost && (
            <div className="mb-14">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAB4C3] mb-3 block">
                FEATURED LEGAL GUIDE
              </span>
              <div className="bg-white rounded-sm border border-[#E8E1D5] overflow-hidden hover:border-[#C6A15B] transition-colors shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full bg-[#10253D] min-h-[280px]">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#0B1728]/90 text-white text-[10px] font-semibold tracking-wider uppercase">
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-[#626B76]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B18A4A]" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{featuredPost.jurisdiction}</span>
                    </div>

                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] leading-snug">
                      <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#B18A4A] transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#626B76] leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10253D] hover:text-[#B18A4A] transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-[#AAB4C3]">
                        By {featuredPost.author.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Articles Archive with Search & Category Filters */}
          <div className="mb-16">
            <BlogArticlesArchive posts={regularPosts} />
          </div>

          {/* Regional Chamber Cross-Links */}
          <div className="bg-[#10253D] text-white p-8 sm:p-10 rounded-sm mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C6A15B]">
                IN-PERSON & VIRTUAL CONSULTATIONS
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
                Need Specific Legal Advice on Your Matter?
              </h2>
              <p className="text-sm text-[#AAB4C3] leading-relaxed">
                Articles provide general legal awareness. For a confidential assessment of your specific facts, schedule a chamber consultation at our Ernakulam or Thiruvananthapuram offices.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/lawyers-in-kochi"
                  className="px-4 py-2 bg-[#C6A15B] text-[#10253D] font-semibold text-xs rounded-sm hover:bg-[#B18A4A] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Ernakulam (Kochi) Chambers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/lawyers-in-trivandrum"
                  className="px-4 py-2 bg-white/10 text-white font-medium text-xs rounded-sm hover:bg-white/20 transition-colors inline-flex items-center gap-1.5 border border-white/20"
                >
                  <span>Thiruvananthapuram Chambers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bar Council Compliance Notice */}
          <div className="p-4 rounded-sm bg-white border border-[#E8E1D5] text-xs text-[#626B76] text-center leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#10253D]">Bar Council Compliance:</strong> All legal articles, procedural guides, and statutory explanations published on this platform are for academic and informational purposes only in compliance with Rule 36 of the Bar Council of India Rules. They do not constitute formal legal advice.
          </div>
        </div>
      </main>
    </>
  );
}
