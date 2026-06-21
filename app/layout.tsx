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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pratikkhose.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pratik Khose | Software Developer",
    template: "%s | Pratik Khose",
  },
  description:
    "Software Developer building mobile apps, SaaS platforms, healthcare systems, and business software.",
  keywords: [
    "Software Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "SaaS Developer",
    "Full Stack Developer",
    "India",
    "Maharashtra",
    "Firebase",
    "Supabase",
    "Node.js",
    "Healthcare Software",
    "Business Software"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Pratik Khose",
    title: "Pratik Khose | Software Developer",
    description:
      "Software Developer building mobile apps, SaaS platforms, healthcare systems, and business software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pratik Khose - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Khose | Software Developer",
    description:
      "Software Developer building mobile apps, SaaS platforms, healthcare systems, and business software.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-icon.png',
      },
    ],
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
    "@type": "Person",
    "name": "Pratik Khose",
    "jobTitle": "Software Developer",
    "description": "Software Developer building mobile apps, SaaS platforms, healthcare systems, and business software.",
    "url": BASE_URL,
    "email": "buildyourway.studio@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/pratik-khose-ab441937b",
      "https://github.com/pratikkhose1122"
    ]
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
