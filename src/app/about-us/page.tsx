import { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Westend Events | Luxury Wedding & Event Planners",
  description: "Westend Events is a premium destination wedding and event management company based in Lonavla and Pune with 100% in-house production.",
  alternates: {
    canonical: "https://www.westendevent.com/about-us"
  }
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <AboutSection />
    </main>
  );
}
