import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    default: "OptiHealth - Transform Your Health & Business Performance",
    template: "%s | OptiHealth",
  },
  description:
    "OptiHealth helps entrepreneurs optimize their health and business performance through personalized solutions, expert guidance, and cutting-edge technology.",
  keywords: [
    "health optimization",
    "business performance",
    "entrepreneur wellness",
    "executive health",
    "performance coaching",
    "wellness platform",
    "business productivity",
    "health technology",
  ],
  authors: [{ name: "Borhan", url: "https://github.com/borhanrahi" }],
  creator: "Borhan",
  publisher: "Borhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optihealth-topaz.vercel.app",
    siteName: "OptiHealth",
    title: "OptiHealth - Transform Your Health & Business Performance",
    description:
      "OptiHealth helps entrepreneurs optimize their health and business performance through personalized solutions, expert guidance, and cutting-edge technology.",
    images: [
      {
        url: "/hero-background.png",
        width: 1200,
        height: 630,
        alt: "OptiHealth Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiHealth - Transform Your Health & Business Performance",
    description:
      "OptiHealth helps entrepreneurs optimize their health and business performance through personalized solutions, expert guidance, and cutting-edge technology.",
    images: ["/hero-background.png"],
    creator: "@borhandev",
    site: "@borhanrahi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
