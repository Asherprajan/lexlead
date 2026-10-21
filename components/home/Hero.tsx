import React from "react";
import Image from "next/image";
import { ArrowRight, Scale, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Lighting & Atmosphere */}
      <div className="absolute inset-0 bg-[#F8F7F4] dark:bg-[#0B1728] -z-20 transition-colors duration-300" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#DFBF7D]/15 dark:bg-[#183354]/40 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#C6A15B]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Architectural Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-[#C6A15B]/40 backdrop-blur-md">
              <Scale className="w-4 h-4 text-[#C6A15B]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#92703B] dark:text-[#DFBF7D]">
                LEXLEAD LEGAL SOLUTIONS • ADVOCATES
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-[#10253D] dark:text-[#F7F5F0] leading-[1.08] transition-colors duration-300">
              Clarity in Law.{" "}
              <span className="text-gold-gradient block sm:inline font-serif-luxury italic">
                Confidence
              </span>{" "}
              in Every Decision.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4A586E] dark:text-[#AAB4C3] max-w-xl leading-relaxed font-light transition-colors duration-300">
              Thoughtful legal guidance, clear communication, and a considered approach to the matters that matter to you. Based in Thiruvananthapuram, Kerala.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Consultation
              </Button>
              <Button
                href="/practice-areas"
                variant="secondary"
                size="lg"
              >
                Explore Practice Areas
              </Button>
            </div>

            {/* Trust & Location Meta */}
            <div className="pt-4 border-t border-black/10 dark:border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-[#4A586E]/80 dark:text-[#AAB4C3]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                <span>Thiruvananthapuram, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Ethical & Principled Advocacy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Floating Glass Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Border Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#C6A15B]/30 -z-10 transition-all duration-500" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#C6A15B]/20 via-transparent to-black/5 dark:to-white/10 blur-sm -z-10" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                <Image
                  src="/images/hero-chamber.jpg"
                  alt="Lexlead Legal Solutions contemporary law chambers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F4]/90 dark:from-[#0B1728]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Translucent Glass Panel */}
              <GlassPanel
                variant="gold"
                className="absolute -bottom-6 -left-4 sm:-left-6 right-6 sm:right-auto sm:max-w-xs p-4 sm:p-5 border border-[#C6A15B]/40 shadow-xl"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#C6A15B]/15 text-[#92703B] dark:text-[#DFBF7D] shrink-0 border border-[#C6A15B]/30">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                      Legal Practice
                    </h2>
                    <p className="text-xs text-[#10253D] dark:text-[#F7F5F0] mt-1 leading-snug font-medium">
                      Disciplined counsel and objective representation tailored to individual and commercial matters.
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
