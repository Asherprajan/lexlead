import React from "react";
import { ArrowRight, ShieldCheck, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C6A15B]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassPanel
          variant="gold"
          className="relative p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#C6A15B]/35 shadow-2xl"
        >
          {/* Subtle gold watermark emblem background */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 rounded-full border border-[#C6A15B]/10 pointer-events-none" />
          <div className="absolute -right-4 -bottom-4 w-60 h-60 rounded-full border border-[#C6A15B]/15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-[#C6A15B]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#DFBF7D]">
                  Confidential Consultation
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F7F5F0] leading-tight">
                Every Important Decision Deserves Clarity.
              </h2>

              <p className="text-base sm:text-lg text-[#AAB4C3] max-w-2xl leading-relaxed">
                Start a conversation about your legal requirements and the next steps you may wish to consider. We offer preliminary assessments for both individuals and commercial enterprises.
              </p>

              {/* Trust badges */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#AAB4C3]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                  <span>Strict Confidentiality Maintained</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C6A15B]" />
                  <span>Prompt Consultation Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#C6A15B]" />
                  <span>Structured Case Review</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center text-center py-4"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Lexlead
              </Button>
              <Button
                href="tel:+914712000000"
                variant="glass"
                size="md"
                className="w-full justify-center text-center"
              >
                Call Chambers Desk
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};
