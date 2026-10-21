import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustPrinciples } from "@/components/home/TrustPrinciples";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { Approach } from "@/components/home/Approach";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { LocationContact } from "@/components/home/LocationContact";

export default function HomePage() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Section B: Cinematic Hero */}
      <Hero />

      {/* Section C: Floating Trust Indicators */}
      <TrustPrinciples />

      {/* Section D: Practice Areas */}
      <PracticeAreas />

      {/* Section E & F: Editorial Introduction & 4-Stage Process */}
      <Approach />

      {/* Section G: Striking Consultation Feature */}
      <ConsultationCTA />

      {/* Section H: Location and Contact */}
      <LocationContact />
    </main>
  );
}
