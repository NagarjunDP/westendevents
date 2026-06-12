import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Destination Wedding Planning Guides & Tips",
  description: "Read the latest tips, trends, and guides for planning the perfect destination wedding in India by Westend Events.",
};

const articles = [
  "How Much Does a Destination Wedding in Lonavla Cost? (Full Breakdown)",
  "Lonavla vs Karjat vs Khopoli vs Igatpuri — Which Is Best for Your Destination Wedding?",
  "The Complete Guide to Planning a Destination Wedding in India for NRIs",
  "What's Included in a Full-Service Wedding Event Management Package?",
  "Why JBL VRX Sound Systems Matter for Your Wedding (Sound Quality Guide)",
  "Top 10 Special Effects (SFX) Trends for Indian Weddings in 2026",
  "How to Choose a Wedding Anchor / Host for Your Big Day",
  "Mumbai to Lonavla: The Perfect Destination Wedding Logistics Guide for Out-of-Town Guests",
  "Royal Wedding Planning in Udaipur & Jaipur: A Westend Events Guide",
  "Beach Wedding in Goa: Décor, SFX & Entertainment Ideas",
  "Corporate Event Management in Pune & Mumbai: Westend Events Capabilities",
  "Real Wedding: A Luxury Destination Wedding at Della Resorts, Lonavla"
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Event Insights & Inspiration" 
          subtitle="Expert guides, cost breakdowns, and real wedding inspiration from Westend Events."
        />

        <div className="mt-16 grid gap-6">
          {articles.map((title, index) => (
            <div key={index} className="bg-[var(--color-brand-ivory)] p-6 rounded-2xl border border-[var(--color-brand-gold)]/20 hover:shadow-md transition-shadow group flex justify-between items-center">
              <div>
                <h3 className="font-serif text-xl font-bold text-[var(--color-brand-maroon)] group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {title}
                </h3>
                <p className="font-sans text-sm text-gray-500 mt-2">Coming Soon • 5 min read</p>
              </div>
              <div className="hidden sm:block text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
