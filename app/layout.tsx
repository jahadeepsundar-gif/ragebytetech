import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/threeui.css";
import "@/styles/motion.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoadSequence } from "@/components/motion/PageLoadSequence";
import { RageBytePreloader } from "@/components/RageBytePreloader";
import { ScrollProgress, SpotlightTracker } from "@/components/motion/Premium";

// Master Specification Section 2 & 8 + Editorial Display:
// Display & headings: Barlow Condensed
// Body: Inter
// Labels / technical: Geist Mono
// Canvas renderers resolve these same faces through lib/brandFonts.ts
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Kaatchi Productions — Web Development Studio",
    template: "%s | Kaatchi Productions",
  },
  description:
    "A small, technically strong web development team building fast, modern, and production-grade web applications.",
  keywords: [
    "web development",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "frontend studio",
  ],
  metadataBase: new URL("https://ragebyte.tech"),
  openGraph: {
    title: "Kaatchi Productions — Web Development Studio",
    description:
      "A small, technically strong web development team building fast, modern, and production-grade web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col selection:bg-accent/20 selection:text-accent">
        <RageBytePreloader />
        <ScrollProgress />
        <SpotlightTracker />
        <PageLoadSequence>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageLoadSequence>
      </body>
    </html>
  );
}
