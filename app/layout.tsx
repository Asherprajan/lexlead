import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1728" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Lexlead Legal Solutions | Advocates — Thiruvananthapuram, Kerala",
    template: "%s | Lexlead Legal Solutions — Advocates",
  },
  description:
    "Lexlead Legal Solutions is a premier advocacy practice in Thiruvananthapuram, Kerala. We provide disciplined legal counsel across civil litigation, criminal law, property, corporate advisory, and dispute resolution.",
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
    title: "Lexlead Legal Solutions | Advocates — Thiruvananthapuram, Kerala",
    description:
      "Clarity in Law. Confidence in Every Decision. Bespoke advocacy practice delivering considered counsel and legal representation in Kerala.",
    url: "https://lexlead.in",
    siteName: "Lexlead Legal Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/lexlead-concept-board.png",
        width: 1536,
        height: 1024,
        alt: "Lexlead Legal Solutions — Advocates & Legal Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexlead Legal Solutions | Advocates",
    description: "Clarity in Law. Confidence in Every Decision.",
    images: ["/images/lexlead-concept-board.png"],
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
    <html lang="en" className="scroll-smooth antialiased dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('lexlead_theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : supportDarkMode;
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[#C6A15B]/30 selection:text-white font-sans transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
