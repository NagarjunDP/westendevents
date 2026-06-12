import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Westend Events | Luxury Wedding Planners",
  description: "Westend Events is a premium destination wedding and event management company based in Lonavla. We provide complete in-house production for luxury events.",
};

export default function AboutUsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="About Westend Events" 
          subtitle="Crafting unforgettable moments with uncompromising quality."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-sans text-gray-700 leading-relaxed text-lg">
            <p>
              Founded in Lonavla, <strong>Westend Events</strong> has grown into one of Maharashtra's most trusted luxury destination wedding production companies. With over a decade of experience, we specialize in high-profile events across Lonavla, Udaipur, Jaipur, and Goa.
            </p>
            <p>
              Our biggest differentiator is our <strong>100% in-house production capabilities</strong>. We are not just planners who outsource everything; we are a dedicated production house. We own an extensive inventory of luxury floral decor, custom stage fabrication materials, and professional audio-visual gear.
            </p>
            <p>
              This includes our signature <strong>JBL VRX Line Array sound systems</strong>, which deliver unparalleled concert-level audio for your Sangeet and reception. We also bring our own specialized special effects (SFX) team, deploying cold pyros, dry ice, and paper blasts with utmost precision and safety.
            </p>
            <p>
              By eliminating third-party vendor dependencies, we maintain strict quality control, offer significant value by removing middleman markups, and guarantee flawless execution on your biggest day.
            </p>
          </div>
          <div className="bg-[var(--color-brand-ivory)] rounded-3xl h-96 w-full relative overflow-hidden border-4 border-[var(--color-brand-gold)]/20">
            <Image 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
              alt="Westend Events Wedding Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
