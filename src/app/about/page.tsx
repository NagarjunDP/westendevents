import { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Us | Westend Events - You Celebrate. We Take Care of the Rest.",
  description: "Westend Events specializes in destination weddings, corporate events, and social experiences in Lonavala and Pune with 100% in-house production.",
  alternates: {
    canonical: "https://www.westendevent.com/about"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <AboutSection />
    </main>
  );
}
