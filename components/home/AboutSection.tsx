import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Scales of Justice Atmospheric Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-[#E8E1D5] bg-[#0B1728]">
              <Image
                src="/images/about-scales.jpg"
                alt="Advocacy integrity at Lexlead Legal Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/80 via-transparent to-transparent" />

              {/* Text Pill overlay as in mockup */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-white/90 border-t border-white/20 pt-3">
                <span className="text-[#C6A15B]">INTEGRITY</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>CLARITY</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>COMMITMENT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B18A4A]">
              ABOUT LEXLEAD
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#10253D] leading-[1.12]">
              More Than Legal Advice.
            </h2>

            <div className="w-12 h-0.5 bg-[#C6A15B]" />

            <p className="text-base sm:text-lg text-[#626B76] leading-relaxed max-w-xl">
              Lexlead Legal Solutions is built on a commitment to integrity, clarity and client-focused service. We combine legal expertise with a practical approach to help you make informed decisions with confidence.
            </p>

            <p className="text-sm sm:text-base text-[#626B76] leading-relaxed max-w-xl">
              Based in Thiruvananthapuram, Kerala, we believe legal guidance should be considered and responsive to the distinct human and commercial realities of each matter.
            </p>

            <div className="pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 stroke-[2]" />}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
