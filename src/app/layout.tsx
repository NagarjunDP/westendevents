import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { Preloader } from "@/components/ui/Preloader";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { ExclusiveOfferPopup } from "@/components/ui/ExclusiveOfferPopup";
import { DynamicThemeFont } from "@/components/theme/DynamicThemeFont";
import type { Metadata, Viewport } from "next";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0E0A07",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.westendevent.com"),
  alternates: {
    canonical: "https://www.westendevent.com",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png", type: "image/png" }
    ]
  },
  title: "Westend Events | Luxury Wedding & Event Management in Lonavala, Pune, Goa & Rajasthan",
  description: "India's most trusted luxury event company based in Lonavala. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts. In-house production — décor, JBL VRX sound, special effects, anchors. Serving Lonavala, Mumbai, Pune, Goa, Udaipur, Jaipur & beyond.",
  keywords: "destination wedding planner Lonavala, luxury event management company, in-house production, JBL VRX sound, special effects wedding India, destination wedding India for foreigners",
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

import { SmoothScrollProvider } from "@/components/theme/SmoothScrollProvider";

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
        <SmoothScrollProvider>
          <DynamicThemeFont />
          <AnalyticsTracker />
          <ExclusiveOfferPopup />
          <Preloader />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

