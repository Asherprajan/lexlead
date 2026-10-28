import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users, ShieldCheck, Scale, MapPin, Phone, Sparkles } from "lucide-react";
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

            {/* Two Boxed CTAs on One Single Line with Special Hover Effects */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-row items-center gap-2.5 sm:gap-4 flex-nowrap w-full">
                {/* CTA Box 1: Claim Free Assessment (Deep Navy with 24K Gold Shimmer Beam Glider & Luminous Halo) */}
                <Link
                  href="/contact"
                  className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3.5 rounded-sm bg-[#10253D] text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase border border-[#C6A15B] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(198,161,91,0.48),0_0_24px_rgba(198,161,91,0.3)] hover:border-[#F2D696] overflow-hidden whitespace-nowrap cursor-pointer select-none"
                >
                  {/* Special Effect: 45° Metallic Gold Shimmer Beam */}
                  <span
                    className="absolute inset-0 -translate-x-[160%] group-hover:translate-x-[260%] bg-gradient-to-r from-transparent via-[#DFC287]/45 to-transparent transition-transform duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  />
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A15B] group-hover:text-[#F2D696] group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300 shrink-0" />
                  <span className="relative z-10">Claim Free Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A15B] group-hover:text-[#F2D696] stroke-[2.5] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
                </Link>

                {/* CTA Box 2: Direct Helpline (Luxury Boxed Card with Phone Ring Animation, Glow & Light Glider) */}
                <a
                  href="tel:7907224126"
                  className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-3.5 rounded-sm bg-white text-[#10253D] text-xs sm:text-[13px] font-semibold tracking-wider border-2 border-[#C6A15B]/50 shadow-xs transition-all duration-300 hover:bg-[#FFFDF8] hover:border-[#C6A15B] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(16,37,61,0.18),0_0_22px_rgba(198,161,91,0.35)] overflow-hidden whitespace-nowrap cursor-pointer select-none"
                >
                  {/* Subtle Shimmer Flash Glider */}
                  <span
                    className="absolute inset-0 -translate-x-[160%] group-hover:translate-x-[260%] bg-gradient-to-r from-transparent via-[#C6A15B]/25 to-transparent transition-transform duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Live Status indicator dot */}
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B18A4A] group-hover:text-[#C6A15B] group-hover:animate-phone-ring transition-colors duration-300 shrink-0" />
                  <span className="relative z-10 text-[#10253D]">
                    <span className="font-normal text-[#626B76] group-hover:text-[#10253D] transition-colors duration-300">Helpline: </span>
                    <strong className="font-bold text-[#10253D] group-hover:text-[#0B1728]">+91 79072 24126</strong>
                  </span>
                </a>
              </div>

              {/* Conversion Trust Micro-Pills */}
              <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#626B76] pt-1 flex-wrap">
                <span className="flex items-center gap-1">
                  <span className="text-[#C6A15B] font-bold">✓</span> 100% Confidential
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-[#C6A15B] font-bold">✓</span> Zero Obligation
                </span>
                <span className="flex items-center gap-1">
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
