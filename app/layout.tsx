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
    default: "LEXLEAD LEGAL SOLUTIONS | Advocates — Ernakulam (Kochi) & Thiruvananthapuram, Kerala",
    template: "%s | LEXLEAD LEGAL SOLUTIONS",
  },
  description:
    "Lexlead Legal Solutions — experienced advocates with principal chambers at Padma Junction, Ernakulam (Kochi) and branch chambers in Vanchiyoor, Thiruvananthapuram. We deliver result-oriented legal counsel in civil litigation, criminal law, property disputes, family law, and corporate advisory across Kerala High Court and district courts.",
  keywords: [
    "Lexlead Legal Solutions",
    "advocates in Ernakulam",
    "lawyers in Kochi",
    "advocates in Thiruvananthapuram",
    "lawyers in Trivandrum",
    "law firm Ernakulam",
    "law firm Trivandrum",
    "Kerala High Court advocates",
    "Ernakulam District Court lawyers",
    "Trivandrum District Court lawyers",
    "civil litigation lawyer Kochi",
    "civil litigation lawyer Thiruvananthapuram",
    "criminal defense advocate Ernakulam",
    "criminal lawyer Trivandrum",
    "property dispute lawyer Kochi",
    "property dispute lawyer Thiruvananthapuram",
    "family court lawyer Ernakulam",
    "divorce lawyer Kochi",
    "corporate legal counsel Kochi",
    "corporate lawyer Trivandrum",
    "bail application lawyer Ernakulam",
    "anticipatory bail Kerala",
    "property registration lawyer Kerala",
    "title verification lawyer Kochi",
    "Vanchiyoor advocate chambers",
    "Padma Junction Ernakulam advocates",
    "legal consultation Kochi",
    "legal consultation Trivandrum",
    "best advocate Kerala",
    "top law firm Kerala",
  ],
  applicationName: "Lexlead Legal Solutions",
  authors: [{ name: "Lexlead Legal Solutions" }],
  creator: "Lexlead Legal Solutions",
  publisher: "Lexlead Legal Solutions",
  metadataBase: new URL("https://lexleadlegal.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LEXLEAD LEGAL SOLUTIONS | Advocates — Ernakulam (Kochi) & Thiruvananthapuram, Kerala",
    description:
      "Trusted advocates with principal chambers in Ernakulam (Kochi) and branch chambers in Thiruvananthapuram. Expert legal counsel in civil, criminal, property, family, and corporate law across Kerala.",
    url: "https://lexleadlegal.in",
    siteName: "Lexlead Legal Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-reception.jpg",
        width: 1122,
        height: 1095,
        alt: "Lexlead Legal Solutions — Advocates & Legal Consultants, Ernakulam & Thiruvananthapuram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEXLEAD LEGAL SOLUTIONS | Advocates — Kochi & Trivandrum, Kerala",
    description:
      "Experienced advocates in Ernakulam (Kochi) and Thiruvananthapuram offering civil, criminal, property, family & corporate legal services.",
    images: ["/images/hero-reception.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ernakulam, Kochi, Thiruvananthapuram, Kerala, India" />
        <meta name="geo.position" content="9.9813;76.2656" />
        <meta name="ICBM" content="9.9813, 76.2656" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
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
