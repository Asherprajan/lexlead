import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle2, HelpCircle, MapPin, Scale, Shield, Building2, ExternalLink, Phone } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/data/blog-posts";
import { ContactForm } from "@/components/contact/ContactForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Lexlead Legal Solutions" };
  }

  return {
    title: `${post.title} | Lexlead Legal Solutions`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Lexlead Legal Solutions`,
      description: post.excerpt,
      url: `https://lexleadlegal.in/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.keywords,
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://lexleadlegal.in/blog/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: `https://lexleadlegal.in${post.coverImage}`,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://lexleadlegal.in",
    },
    publisher: {
      "@type": "LegalService",
      name: "Lexlead Legal Solutions",
      url: "https://lexleadlegal.in",
      logo: "https://lexleadlegal.in/favicon.svg",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lexleadlegal.in/blog/${slug}`,
    },
    about: {
      "@type": "Thing",
      name: post.category,
    },
  };

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
        name: "Legal Insights",
        item: "https://lexleadlegal.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://lexleadlegal.in/blog/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="flex-1 w-full bg-[#F7F5F0] pt-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center justify-between text-xs text-[#626B76]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-semibold text-[#626B76] hover:text-[#10253D] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Legal Insights</span>
            </Link>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B18A4A]">
              {post.category}
            </span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[#E8E1D5]">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#626B76]">
              <span className="px-2 py-0.5 rounded bg-[#10253D] text-white text-[10px] font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B18A4A]" />
                <span>{post.readTime}</span>
              </span>
              <span>•</span>
              <span>{post.jurisdiction}</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#626B76] leading-relaxed">
              {post.subtitle}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs text-[#626B76]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#10253D] text-[#C6A15B] flex items-center justify-center font-bold text-xs">
                  LL
                </div>
                <div>
                  <div className="font-semibold text-[#10253D]">{post.author.name}</div>
                  <div className="text-[11px] text-[#AAB4C3]">{post.author.chambers}</div>
                </div>
              </div>
              <div className="text-right text-[11px]">
                <div>Updated: {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                <div className="text-[#AAB4C3]">Jurisdiction: Kerala</div>
              </div>
            </div>
          </header>

          {/* AI / Executive Summary: Key Takeaways Box */}
          <section className="my-8 p-6 sm:p-7 rounded-sm bg-white border-l-4 border-[#C6A15B] border-y border-r border-[#E8E1D5] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B18A4A]">
              <Scale className="w-4 h-4 text-[#C6A15B]" />
              <span>Key Legal Takeaways & Summary</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#10253D] leading-relaxed">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Article Main Body */}
          <article
            className="bg-white p-6 sm:p-10 rounded-sm border border-[#E8E1D5] shadow-sm prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-[#10253D] leading-relaxed
              [&>h2]:font-serif-luxury [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-medium [&>h2]:text-[#10253D] [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:border-b [&>h2]:border-[#E8E1D5] [&>h2]:pb-2
              [&>h3]:font-serif-luxury [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-[#10253D] [&>h3]:mt-6 [&>h3]:mb-2
              [&>p]:text-[#626B76] [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-[#626B76] [&>ul]:mb-4
              [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:text-[#626B76] [&>ol]:mb-4
              [&>strong]:text-[#10253D]
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* In-Article High-Converting Case Consultation Card */}
          <div className="my-10 bg-[#10253D] text-white p-6 sm:p-8 rounded-sm space-y-4 border border-[#C6A15B]/40 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C6A15B] flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>CONFIDENTIAL LEGAL CASE CONSULTATION</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#C6A15B] font-semibold border border-white/20">
                Kerala High Court & District Practice
              </span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium leading-snug">
              Have an Active Matter Involving {post.relatedPracticeAreaName}?
            </h2>

            <p className="text-xs sm:text-sm text-[#AAB4C3] leading-relaxed">
              Facing an impending court notice, FIR, property title risk, or limitation deadline? Speak directly with an advocate from our Ernakulam (Kochi) or Thiruvananthapuram chambers. We will scrutinize your case facts and outline statutory next steps.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#consultation-form"
                className="px-5 py-2.5 bg-[#C6A15B] text-[#10253D] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#B18A4A] transition-colors inline-flex items-center gap-1.5 shadow-md"
              >
                <span>Request Consultation Below</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#10253D]" />
              </a>

              <a
                href={`https://wa.me/917907224126?text=${encodeURIComponent(
                  `Hello Lexlead Legal Solutions, I read your article "${post.title}" and would like to request a Legal Consultation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors inline-flex items-center gap-1.5"
              >
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="tel:7907224126"
                className="px-4 py-2.5 bg-white/10 text-white font-medium text-xs tracking-wider uppercase rounded-sm hover:bg-white/20 transition-colors inline-flex items-center gap-1.5 border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Call: +91 79072 24126</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-white/60 pt-2 border-t border-white/10">
              <span>✓ Protected by Attorney-Client Privilege</span>
              <span>✓ Direct Advocate Review</span>
              <span>✓ 24-Hour Advocate Callback</span>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {post.faqs.length > 0 && (
            <section className="my-10 bg-white p-6 sm:p-8 rounded-sm border border-[#E8E1D5] shadow-sm space-y-5">
              <div className="border-b border-[#E8E1D5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A]">
                  COMMONLY ASKED QUESTIONS
                </span>
                <h2 className="font-serif-luxury text-2xl font-medium text-[#10253D] mt-1">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] space-y-1.5">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                      <h3 className="font-serif-luxury text-base sm:text-lg font-medium text-[#10253D]">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#626B76] pl-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* In-Article Consultation Form */}
          <section id="consultation-form" className="my-10 bg-white p-6 sm:p-8 rounded-sm border border-[#E8E1D5] shadow-sm">
            <div className="max-w-xl mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>CONFIDENTIAL EVALUATION</span>
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#10253D] mt-1">
                Schedule a Case Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#626B76] mt-1">
                Share a few brief details below. An advocate from our chambers will evaluate your query and contact you confidentially.
              </p>
            </div>
            <ContactForm defaultPracticeArea={post.relatedPracticeAreaName} darkTheme={true} />
          </section>

          {/* Related Articles */}
          {otherPosts.length > 0 && (
            <section className="my-12 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2">
                <h2 className="font-serif-luxury text-xl font-medium text-[#10253D]">
                  Related Legal Insights
                </h2>
                <Link href="/blog" className="text-xs font-semibold text-[#B18A4A] hover:underline">
                  View All Articles →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="p-5 rounded-sm bg-white border border-[#E8E1D5] hover:border-[#C6A15B] transition-all space-y-2 group"
                  >
                    <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-[#F7F5F0] text-[#B18A4A]">
                      {other.category}
                    </span>
                    <h3 className="font-serif-luxury text-lg font-medium text-[#10253D] group-hover:text-[#B18A4A] transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <p className="text-xs text-[#626B76] line-clamp-2">
                      {other.excerpt}
                    </p>
                    <span className="text-xs font-semibold text-[#B18A4A] inline-flex items-center gap-1 pt-1">
                      Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <footer className="p-4 rounded-sm bg-white border border-[#E8E1D5] text-[11px] text-[#626B76] text-center leading-relaxed">
            <strong className="text-[#10253D]">Bar Council Compliance:</strong> This article is published solely for academic awareness and educational understanding of Indian statutory law and Kerala court practice under Rule 36 of the Bar Council of India Rules. It does not establish an advocate-client relationship.
          </footer>
        </div>
      </main>
    </>
  );
}
