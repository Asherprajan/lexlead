import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, Scale, MapPin, Phone } from "lucide-react";
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

            {/* Call-to-Action Group matching site design system */}
            <div className="space-y-3.5 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                {/* CTA 1: Schedule Consultation (Primary Brand Navy Button) */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-sm bg-[#10253D] hover:bg-[#1A365D] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#C6A15B] shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform stroke-[2]" />
                </Link>

                {/* CTA 2: Direct Helpline (Secondary Clean Card Button) */}
                <a
                  href="tel:7907224126"
                  className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-sm bg-white hover:bg-[#F7F5F0] text-[#10253D] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#E8E1D5] hover:border-[#10253D] shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none"
                >
                  <Phone className="w-4 h-4 text-[#B18A4A] group-hover:text-[#10253D] transition-colors stroke-[1.75]" />
                  <span>Helpline: +91 79072 24126</span>
                </a>
              </div>

              {/* Conversion Trust Micro-Pills */}
              <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#626B76] pt-1 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A15B] font-bold">✓</span> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A15B] font-bold">✓</span> Direct Advocate Review
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C6A15B] font-bold">✓</span> Same-Day Callback
                </span>
              </div>
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
                <div className="location-strip absolute inset-x-0 bottom-0 bg-[#0B1728]/95 border-t border-[#C6A15B]/30 p-3.5 sm:p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="text-[#C6A15B] shrink-0">
                        <MapPin className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <div className="eyebrow text-[10px] font-bold tracking-[0.18em] uppercase text-[#C6A15B]">
                          ERNAKULAM (MAIN) & THIRUVANANTHAPURAM
                        </div>
                        <p className="text-xs text-[#F7F5F0] leading-snug font-normal">
                          Padma Junction, Kochi & Vanchiyoor, Trivandrum
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                      <Link
                        href="/lawyers-in-kochi"
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-white/10 hover:bg-[#C6A15B] hover:text-[#10253D] text-white rounded transition-colors"
                      >
                        Kochi
                      </Link>
                      <Link
                        href="/lawyers-in-trivandrum"
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-white/10 hover:bg-[#C6A15B] hover:text-[#10253D] text-white rounded transition-colors"
                      >
                        Trivandrum
                      </Link>
                    </div>
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
