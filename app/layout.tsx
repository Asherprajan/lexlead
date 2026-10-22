import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "LEXLEAD LEGAL SOLUTIONS | Advocates — Thiruvananthapuram, Kerala",
    template: "%s | LEXLEAD LEGAL SOLUTIONS",
  },
  description:
    "Lexlead Legal Solutions is an advocacy practice in Vanchiyoor, Thiruvananthapuram, Kerala. We provide practical, reliable, and result-oriented legal guidance across civil litigation, criminal law, property, and corporate advisory.",
  keywords: [
    "Lexlead Legal Solutions",
    "Advocates Thiruvananthapuram",
    "Lawyers in Trivandrum",
    "Kerala High Court advocates",
    "Civil Litigation Lawyer Kerala",
    "Property Dispute Lawyer Thiruvananthapuram",
    "Criminal Defense Advocate Kerala",
    "Corporate Legal Counsel Trivandrum",
    "Vanchiyoor advocate chambers",
  ],
  authors: [{ name: "Lexlead Legal Solutions" }],
  creator: "Lexlead Legal Solutions",
  publisher: "Lexlead Legal Solutions",
  metadataBase: new URL("https://lexlead.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LEXLEAD LEGAL SOLUTIONS | Advocates — Thiruvananthapuram, Kerala",
    description:
      "Legal Solutions for a Brighter Tomorrow. At Lexlead Legal Solutions, we provide practical, reliable, and considered legal guidance to individuals, families and businesses.",
    url: "https://lexlead.in",
    siteName: "Lexlead Legal Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-reception.jpg",
        width: 1122,
        height: 1095,
        alt: "Lexlead Legal Solutions — Advocates & Legal Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEXLEAD LEGAL SOLUTIONS | Advocates",
    description: "Legal Solutions for a Brighter Tomorrow.",
    images: ["/images/hero-reception.jpg"],
  },
  icons: {
    icon: "/images/lexlead-emblem.png",
    apple: "/images/lexlead-emblem.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#10253D] selection:bg-[#C6A15B]/30 selection:text-[#10253D] font-sans">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
