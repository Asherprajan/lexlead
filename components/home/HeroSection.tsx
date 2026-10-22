import React from "react";
import Image from "next/image";
import { ArrowRight, Users, ShieldCheck, Scale, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#F7F5F0] pt-10 sm:pt-14 pb-14 sm:pb-20 overflow-hidden border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, CTAs, Trust Principles */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#B18A4A]">
              EXPERIENCED. PRINCIPLED. PEOPLE-FOCUSED.
            </p>

            {/* Editorial Serif Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-tight text-[#10253D] leading-[1.08]">
              Legal <br className="hidden sm:inline" />
              Solutions <br className="hidden sm:inline" />
              for a Brighter <br className="hidden sm:inline" />
              <span className="text-[#C6A15B] italic font-serif-luxury">Tomorrow.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#626B76] max-w-xl leading-relaxed">
              At Lexlead Legal Solutions, we provide practical, reliable, and result-oriented legal guidance to individuals, families and businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Consultation
              </Button>
              <Button
                href="#about"
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            {/* Three Compact Principles */}
            <div className="pt-6 border-t border-[#E8E1D5] grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-start gap-2.5">
                <Users className="w-5 h-5 text-[#B18A4A] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#10253D] leading-tight">
                    Client-Focused
                  </h2>
                  <p className="text-[11px] text-[#626B76] mt-0.5">Approach</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#B18A4A] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#10253D] leading-tight">
                    Practical
                  </h2>
                  <p className="text-[11px] text-[#626B76] mt-0.5">Solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Scale className="w-5 h-5 text-[#B18A4A] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-[#10253D] leading-tight">
                    Trusted
                  </h2>
                  <p className="text-[11px] text-[#626B76] mt-0.5">Legal Guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Reception Image with Location Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-sm overflow-hidden shadow-xl border border-[#E8E1D5]">
              {/* Reception Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[1.15/1] w-full bg-[#10253D]">
                <Image
                  src="/images/hero-reception.jpg"
                  alt="Lexlead Legal Solutions chambers reception in Thiruvananthapuram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                  priority
                />

                {/* Vertical Pill Tag: LAW PEOPLE SOLUTIONS */}
                <div className="hidden sm:flex absolute right-4 bottom-24 flex-col items-center justify-center py-3 px-2 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white text-[9px] tracking-[0.2em] uppercase font-medium space-y-1">
                  <span>LAW</span>
                  <span className="w-1 h-1 bg-[#C6A15B] rounded-full" />
                  <span>PEOPLE</span>
                  <span className="w-1 h-1 bg-[#C6A15B] rounded-full" />
                  <span>SOLUTIONS</span>
                </div>

                {/* Location Overlay Card at the Bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0B1728]/95 border-t border-[#C6A15B]/30 p-4 sm:p-5 flex items-start gap-3.5 backdrop-blur-md">
                  <div className="p-2 rounded bg-[#C6A15B]/15 text-[#C6A15B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#C6A15B]">
                      OUR LOCATION
                    </div>
                    <p className="text-xs text-[#F7F5F0] leading-snug font-normal">
                      Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035
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
