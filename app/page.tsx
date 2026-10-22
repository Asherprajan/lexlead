import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustPrinciples } from "@/components/home/TrustPrinciples";
import { PracticeAreaGrid } from "@/components/home/PracticeAreaGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { ApproachTimeline } from "@/components/home/ApproachTimeline";
import { WhyLexlead } from "@/components/home/WhyLexlead";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* 02. Split-screen hero */}
      <HeroSection />

      {/* 03. Trust principles */}
      <TrustPrinciples />

      {/* 04. Practice areas */}
      <PracticeAreaGrid />

      {/* 05. About Lexlead */}
      <AboutSection />

      {/* 06. Our approach */}
      <ApproachTimeline />

      {/* 07. Why Lexlead */}
      <WhyLexlead />

      {/* 08. Consultation CTA */}
      <ConsultationCTA />

      {/* 09. Contact and enquiry form */}
      <ContactSection />
    </main>
  );
}
