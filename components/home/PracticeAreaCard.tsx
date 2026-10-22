import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PracticeArea } from "@/lib/data/practice-areas";

export const PracticeAreaCard: React.FC<{ practice: PracticeArea }> = ({ practice }) => {
  return (
    <Link
      href={`/practice-areas/${practice.slug}`}
      className="group bg-white rounded-sm border border-[#E8E1D5] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#C6A15B] hover:shadow-md"
    >
      <div>
        {/* Editorial Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full bg-[#10253D] overflow-hidden border-b border-[#E8E1D5]">
          <Image
            src={practice.image}
            alt={practice.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-2">
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#10253D] group-hover:text-[#B18A4A] transition-colors">
            {practice.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#626B76] leading-relaxed line-clamp-2">
            {practice.shortDescription}
          </p>
        </div>
      </div>

      {/* Footer Arrow */}
      <div className="px-5 sm:px-6 pb-5 pt-1 flex items-center justify-between text-[#B18A4A] group-hover:text-[#10253D] transition-colors">
        <span className="text-xs font-medium tracking-wide uppercase">Explore</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
