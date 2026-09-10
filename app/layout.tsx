import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Master Specification Section 2 & 8:
// Headings: Geist / Space Grotesk
// Body: Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "RageByte — Web Development Studio",
    template: "%s | RageByte",
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
    title: "RageByte — Web Development Studio",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col selection:bg-accent/20 selection:text-accent">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
