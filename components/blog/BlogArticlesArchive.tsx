"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Search, Scale, Sparkles, Filter } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

interface BlogArticlesArchiveProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  "All",
  "Commercial & High Court",
  "Property Law",
  "Civil Litigation",
  "Criminal Law",
  "Family Law",
] as const;

export function BlogArticlesArchive({ posts }: BlogArticlesArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = post.excerpt.toLowerCase().includes(q);
      const inKeywords = post.keywords.some((k) => k.toLowerCase().includes(q));
      const inTakeaways = post.keyTakeaways.some((t) => t.toLowerCase().includes(q));
      const inJurisdiction = post.jurisdiction.toLowerCase().includes(q);

      return inTitle || inExcerpt || inKeywords || inTakeaways || inJurisdiction;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#E8E1D5] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-[#8C98A9] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case names, statutes, or keywords (e.g. BNSS, 102 CrPC, Sarla Verma)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] focus:outline-none focus:border-[#C6A15B] text-[#10253D] placeholder-[#8C98A9]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C98A9] hover:text-[#10253D]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-[#626B76] shrink-0 self-end md:self-auto">
            Showing <strong className="text-[#10253D]">{filteredPosts.length}</strong> of{" "}
            {posts.length} authoritative guides
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-[#F0EBE0]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAB4C3] mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#B18A4A]" />
            <span>Category:</span>
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? posts.length
                : posts.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#10253D] text-white font-medium shadow-sm"
                    : "bg-[#F7F5F0] text-[#626B76] hover:bg-[#E8E1D5] hover:text-[#10253D]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-[#C6A15B] text-[#10253D] font-bold" : "bg-[#E8E1D5] text-[#626B76]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Filtered Articles */}
      {filteredPosts.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-sm border border-[#E8E1D5] space-y-3">
          <Scale className="w-8 h-8 text-[#C6A15B] mx-auto" />
          <h3 className="font-serif-luxury text-xl font-medium text-[#10253D]">
            No legal guides matched your search
          </h3>
          <p className="text-xs text-[#626B76] max-w-md mx-auto">
            Try searching with broader terms like &quot;bail&quot;, &quot;property&quot;, &quot;divorce&quot;, &quot;cheque&quot;, or reset your category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-[#B18A4A] underline underline-offset-4"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-sm border border-[#E8E1D5] hover:border-[#C6A15B] transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md group"
            >
              <div className="p-6 sm:p-7 space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#F7F5F0] text-[#B18A4A] border border-[#E8E1D5]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#626B76]">
                    <Clock className="w-3 h-3 text-[#B18A4A]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10253D] leading-snug group-hover:text-[#B18A4A] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Precedent ratio excerpt */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                  <div className="p-3 rounded bg-[#F7F5F0]/70 border-l-2 border-[#C6A15B] text-[11px] text-[#4A5568] italic line-clamp-2">
                    &ldquo;{post.keyTakeaways[0]}&rdquo;
                  </div>
                )}
              </div>

              <div className="px-6 sm:px-7 py-3.5 bg-[#F7F5F0]/60 border-t border-[#E8E1D5] flex items-center justify-between text-xs">
                <span className="text-[#626B76] text-[11px] line-clamp-1 pr-2">
                  {post.jurisdiction.split("(")[0]}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-[#10253D] group-hover:text-[#B18A4A] inline-flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
