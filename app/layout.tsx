import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://buildyourway.agency";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BuildYourWay | Premium App Development Agency",
    template: "%s | BuildYourWay",
  },
  description:
    "We help startups and businesses transform ideas into scalable mobile apps, web platforms, and custom software solutions. Flutter, React, Next.js experts.",
  keywords: [
    "Flutter development",
    "mobile app agency",
    "MVP development",
    "app development company India",
    "custom software development",
    "startup app development",
    "React Native development",
    "Next.js development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "BuildYourWay",
    title: "BuildYourWay | Premium App Development Agency",
    description:
      "We help startups and businesses transform ideas into scalable mobile apps, web platforms, and custom software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildYourWay - Premium App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildYourWay | Premium App Development Agency",
    description:
      "We help startups and businesses transform ideas into scalable mobile apps, web platforms, and custom software solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BuildYourWay",
    "description": "Premium App Development Agency — Flutter, React, Next.js experts helping startups and businesses build scalable software.",
    "url": BASE_URL,
    "email": "buildyourway.studio@gmail.com",
    "areaServed": "Worldwide",
    "serviceType": ["Mobile App Development", "UI/UX Design", "MVP Development", "Custom Software Development", "SaaS Development"]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
