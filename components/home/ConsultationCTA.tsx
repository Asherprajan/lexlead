import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="bg-[#10253D] text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A15B]">
          COMMENCE A DIALOGUE
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Let&apos;s Discuss Your Legal Requirements.
        </h2>

        <p className="text-base sm:text-lg text-[#AAB4C3] max-w-2xl mx-auto leading-relaxed">
          Contact Lexlead Legal Solutions to share the general nature of your enquiry and discuss appropriate next steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Consultation
          </Button>

          <Button
            href="tel:7907224126"
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:border-white hover:bg-white/10"
            icon={<Phone className="w-4 h-4" />}
          >
            Call Chambers: 7907224126
          </Button>
        </div>
      </div>
    </section>
  );
};
