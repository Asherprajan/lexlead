import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users, ShieldCheck, Scale, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#F7F5F0] pt-10 sm:pt-14 pb-14 sm:pb-20 overflow-hidden border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, CTAs, Trust Principles */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <p className="eyebrow text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#B18A4A]">
              EXPERIENCED. PRINCIPLED. PEOPLE-FOCUSED.
            </p>

            {/* Editorial Animated Looping Headline */}
            <AnimatedHeroTitle />

            {/* Supporting Copy */}
            <p className="hero-description text-base sm:text-lg text-[#626B76] max-w-xl leading-relaxed">
              At Lexlead Legal Solutions, we provide practical, reliable, and
              considered legal guidance to individuals, families and businesses.
            </p>

            {/* CTAs */}
            <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button asChild variant="primary" size="md" className="px-6 py-3.5 text-xs sm:text-sm font-medium">
                <Link href="/contact" className="inline-flex items-center gap-2.5">
                  Request a Consultation <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="md" className="px-6 py-3.5 text-xs sm:text-sm font-medium border-[#CBD5E1] bg-[#F7F5F0]/60 hover:border-[#10253D] hover:bg-white">
                <Link href="/practice-areas" className="inline-flex items-center gap-2.5">
                  Explore Our Services <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </Button>
            </div>

            {/* Three Compact Principles with vertical dividers */}
            <div className="hero-principles pt-6 border-t border-[#E8E1D5] grid grid-cols-3 divide-x divide-[#E8E1D5]">
              {[
                [Users, "Client-Focused", "Approach"],
                [ShieldCheck, "Practical", "Solutions"],
                [Scale, "Trusted Legal", "Guidance"],
              ].map(([Icon, a, b], i) => {
                const I = Icon as typeof Users;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 ${
                      i === 0 ? "pr-2 sm:pr-3" : i === 1 ? "px-2 sm:px-3" : "pl-2 sm:pl-3"
                    }`}
                  >
                    <I className="w-5 h-5 text-[#B18A4A] shrink-0 stroke-[1.25]" />
                    <div>
                      <h2 className="text-xs font-semibold text-[#10253D] leading-tight">
                        {a as string}
                      </h2>
                      <p className="text-[11px] text-[#626B76] mt-0.5">
                        {b as string}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footnote */}
            <div className="hero-footnote pt-4 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#626B76]">
              <span className="small-line w-8 h-px bg-[#C6A15B]" />
              <span>ROOTED IN PRINCIPLE. FOCUSED ON YOU.</span>
            </div>
          </div>

          {/* Right Column: Hero Reception Image with Location Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-none overflow-hidden shadow-xl border border-[#E8E1D5]">
              <div className="relative aspect-[4/3] sm:aspect-[1.18/1] w-full bg-[#10253D]">
                <Image
                  src="/images/office.png"
                  alt="Lexlead Legal Solutions contemporary chambers reception in Thiruvananthapuram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                  priority
                />

                {/* Vertical Pill Tag: LAW. PEOPLE. POSSIBILITIES. */}
                <div className="image-caption absolute right-5 sm:right-7 bottom-20 sm:bottom-24 text-right text-white/90 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium space-y-1 drop-shadow-md select-none">
                  <div>LAW.</div>
                  <div>PEOPLE.</div>
                  <div>POSSIBILITIES.</div>
                </div>

                {/* Location Overlay Card at the Bottom */}
                <div className="location-strip absolute inset-x-0 bottom-0 bg-[#0B1728]/95 border-t border-[#C6A15B]/30 p-3.5 sm:p-4.5 flex items-center gap-3.5 backdrop-blur-md">
                  <div className="text-[#C6A15B] shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="eyebrow text-[10px] font-bold tracking-[0.2em] uppercase text-[#C6A15B]">
                      BASED IN THIRUVANANTHAPURAM
                    </div>
                    <p className="text-xs text-[#F7F5F0] leading-snug font-normal">
                      Vanchiyoor, Kerala · Guidance with perspective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
