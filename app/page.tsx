import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustPrinciples } from "@/components/home/TrustPrinciples";
import { PracticeAreaGrid } from "@/components/home/PracticeAreaGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { ApproachTimeline } from "@/components/home/ApproachTimeline";
import { WhyLexlead } from "@/components/home/WhyLexlead";
import { HomeInsightsSection } from "@/components/home/HomeInsightsSection";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ContactSection } from "@/components/home/ContactSection";

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lexlead Legal Solutions",
  alternateName: ["Lexlead", "Lexlead Advocates"],
  url: "https://lexleadlegal.in",
  logo: "https://lexleadlegal.in/favicon.svg",
  image: "https://lexleadlegal.in/images/hero-reception.jpg",
  description:
    "Lexlead Legal Solutions is an advocacy practice with principal chambers at Padma Junction, Ernakulam (Kochi) and branch chambers in Vanchiyoor, Thiruvananthapuram, Kerala. We offer expert legal counsel in civil litigation, criminal law, property disputes, family law, and corporate advisory.",
  priceRange: "₹₹",
  email: "lexleadlegal@gmail.com",
  telephone: ["+914713161884", "+917907224126", "+919567653357"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Ernakulam",
      sameAs: "https://en.wikipedia.org/wiki/Ernakulam",
    },
    {
      "@type": "City",
      name: "Kochi",
      sameAs: "https://en.wikipedia.org/wiki/Kochi",
    },
    {
      "@type": "City",
      name: "Thiruvananthapuram",
      sameAs: "https://en.wikipedia.org/wiki/Thiruvananthapuram",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kerala",
      sameAs: "https://en.wikipedia.org/wiki/Kerala",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Civil Litigation",
          url: "https://lexleadlegal.in/practice-areas/civil-litigation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Criminal Law",
          url: "https://lexleadlegal.in/practice-areas/criminal-law",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family and Matrimonial Law",
          url: "https://lexleadlegal.in/practice-areas/family-and-matrimonial-law",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property and Real Estate Law",
          url: "https://lexleadlegal.in/practice-areas/property-and-real-estate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate and Commercial Law",
          url: "https://lexleadlegal.in/practice-areas/corporate-and-commercial-law",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract and Documentation Support",
          url: "https://lexleadlegal.in/practice-areas/contract-and-documentation-support",
        },
      },
    ],
  },
  location: [
    {
      "@type": "LocalBusiness",
      "@id": "https://lexleadlegal.in/#ernakulam",
      name: "Lexlead Legal Solutions — Principal Chambers, Ernakulam",
      telephone: "+917907224126",
      email: "lexleadlegal@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady",
        addressLocality: "Ernakulam",
        addressRegion: "Kerala",
        postalCode: "682035",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9813,
        longitude: 76.2656,
      },
      url: "https://lexleadlegal.in/contact",
      openingHours: ["Mo-Fr 09:30-18:30", "Sa 10:00-14:00"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://lexleadlegal.in/#thiruvananthapuram",
      name: "Lexlead Legal Solutions — Branch Chambers, Thiruvananthapuram",
      telephone: "+914713161884",
      email: "lexleadlegal@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor",
        addressLocality: "Thiruvananthapuram",
        addressRegion: "Kerala",
        postalCode: "695035",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 8.4979,
        longitude: 76.9529,
      },
      url: "https://lexleadlegal.in/contact",
      openingHours: ["Mo-Fr 09:30-18:30", "Sa 10:00-14:00"],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
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

        {/* 08. Legal Intelligence & Case Precedents */}
        <HomeInsightsSection />

        {/* 09. Consultation CTA */}
        <ConsultationCTA />

        {/* 10. Contact and enquiry form */}
        <ContactSection />
      </main>
    </>
  );
}
