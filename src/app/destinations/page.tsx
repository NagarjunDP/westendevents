import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Destination Weddings in India | Westend Events",
  description: "Explore our top destination wedding locations including Lonavla, Pune, Udaipur, Goa, and more. Westend Events provides complete in-house production across India.",
};

const locations = [
  "Lonavla", "Pune", "Mumbai", "Udaipur", "Jaipur", 
  "Goa", "Mahabaleshwar", "Karjat", "Khopoli", "Igatpuri"
];

export default function DestinationsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen px-4">
      <div className="container mx-auto">
        <SectionHeading 
          title="Destination Weddings" 
          subtitle="We bring our premium in-house production and decor to India's most stunning locations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
          {locations.map((loc) => (
            <Link key={loc} href={`/destinations/${loc.toLowerCase()}`} className="group">
              <div className="bg-[var(--color-brand-ivory)] rounded-2xl p-8 border border-[var(--color-brand-gold)]/30 hover:border-[var(--color-brand-gold)] hover:shadow-lg transition-all text-center h-full flex flex-col justify-center items-center">
                <h3 className="font-serif text-2xl font-bold text-[var(--color-brand-maroon)] group-hover:text-[var(--color-brand-gold)] transition-colors mb-4">
                  {loc}
                </h3>
                <span className="font-sans text-sm text-gray-500 uppercase tracking-widest group-hover:text-[var(--color-brand-charcoal)] transition-colors">
                  View Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
