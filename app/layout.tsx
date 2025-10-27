import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Hosting Review - Compare Top Web Hosting Services 2025",
  description: "Comprehensive guide comparing top web hosting providers. Find the best hosting for your website with detailed reviews of Bluehost, SiteGround, A2 Hosting, and more.",
  keywords: "web hosting review, best web hosting, hosting comparison, Bluehost, SiteGround, A2 Hosting, cheap hosting, best web host 2025",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://hostinginsights.vercel.app",
    title: "Best Hosting Review - Compare Top Web Hosting Services 2025",
    description: "Honest reviews of the best web hosting providers. Compare features, pricing, and performance.",
    images: [
      {
        url: "https://hostinginsights.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Best Hosting Review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hosting Review - Compare Top Web Hosting Services 2025",
    description: "Honest reviews of the best web hosting providers.",
    images: ["https://hostinginsights.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://hostinginsights.vercel.app",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Best Hosting Review",
  "description": "Comprehensive guide comparing top web hosting providers. Find the best hosting for your website.",
  "url": "https://hostinginsights.vercel.app",
  "logo": "https://hostinginsights.vercel.app/logo.png",
  "sameAs": [
    "https://twitter.com/besthosting",
    "https://www.facebook.com/besthosting",
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://hostinginsights.vercel.app/blog/hosting-comparison",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
