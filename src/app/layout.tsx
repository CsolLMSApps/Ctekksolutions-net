import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ctekksolutions.net"),
  title: {
    default: "CTekk Solutions | AI Consulting & Technology Services | Dallas, TX",
    template: "%s | CTekk Solutions",
  },
  description:
    "CTekk Solutions is a Dallas-based technology consulting firm specializing in AI talent, cloud consulting, staffing, offshore teams, and AI education platforms. Founded in 2010.",
  keywords: [
    "AI consulting",
    "technology consulting",
    "AI talent",
    "cloud consulting",
    "staffing",
    "offshore development",
    "Dallas technology",
    "AI education",
    "machine learning",
    "DevOps",
    "CTekk Solutions",
  ],
  authors: [{ name: "CTekk Solutions" }],
  creator: "CTekk Solutions",
  publisher: "CTekk Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctekksolutions.net",
    siteName: "CTekk Solutions",
    title: "CTekk Solutions | AI Consulting & Technology Services",
    description:
      "Empowering enterprises with AI-driven solutions. Dallas-based technology consulting since 2010.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTekk Solutions - AI Consulting & Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTekk Solutions | AI Consulting & Technology Services",
    description:
      "Empowering enterprises with AI-driven solutions. Dallas-based technology consulting since 2010.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CTekk Solutions",
  url: "https://ctekksolutions.net",
  logo: "https://ctekksolutions.net/logo.png",
  foundingDate: "2010",
  description:
    "Dallas-based technology consulting firm specializing in AI talent, cloud consulting, staffing, offshore teams, and AI education platforms.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14800 Quorum Drive, Suite 285",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75254",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-408-471-7753",
    contactType: "sales",
    email: "info@ctekksolutions.net",
  },
  sameAs: [
    "https://www.linkedin.com/company/ctekksolutions",
    "https://twitter.com/ctekksolutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-[#0D0D0D] text-[#111] dark:text-[#ECECEC]">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PTDLVKXJ01"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTDLVKXJ01');
          `}
        </Script>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
