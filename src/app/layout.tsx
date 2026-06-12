import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0E0A07",
};

export const metadata: Metadata = {
  title: "Westend Events | Luxury Wedding & Event Management in Lonavla, Pune, Goa & Rajasthan",
  description: "India's most trusted luxury event company based in Lonavla. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts. 100% in-house production — décor, JBL VRX sound, special effects, anchors. Serving Lonavla, Mumbai, Pune, Goa, Udaipur, Jaipur & beyond.",
  keywords: "destination wedding planner Lonavla, luxury event management company, in-house production, JBL VRX sound, special effects wedding India, destination wedding India for foreigners",
  openGraph: {
    title: "Westend Events | Luxury Wedding & Event Management",
    description: "India's most trusted luxury event company based in Lonavla. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts.",
    url: "https://www.westendevent.com",
    siteName: "Westend Events",
    images: [
      {
        url: "/205A4188.jpg",
        width: 1200,
        height: 630,
        alt: "Westend Events Luxury Wedding Setup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Westend Events | Luxury Wedding & Event Management",
    description: "India's most trusted luxury event company based in Lonavla. 100% in-house production.",
    images: ["/205A4188.jpg"],
  },
};

import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${playfair.variable} ${inter.variable} h-full antialiased text-[17px] sm:text-[18px]`}
      >
        <body className="min-h-full flex flex-col leading-[1.7]">
        <Preloader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
