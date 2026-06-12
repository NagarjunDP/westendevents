import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Gallery | Westend Events",
  description: "View our portfolio of luxury destination weddings, corporate events, and special effects showcases.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-brand-ivory)] min-h-screen px-4">
      <div className="container mx-auto">
        <SectionHeading 
          title="Portfolio & Gallery" 
          subtitle="A glimpse into the spectacular events we've brought to life."
        />

        <div className="mt-16 text-center text-gray-600 font-sans">
          <p className="mb-8">Follow us on Instagram and YouTube for our latest work!</p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-maroon)] hover:text-[var(--color-brand-gold)] font-bold text-lg">
              @westendevents on Instagram
            </a>
            <a href="https://youtube.com/@westendevents3797" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-maroon)] hover:text-[var(--color-brand-gold)] font-bold text-lg">
              @westendevents3797 on YouTube
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Placeholder for actual Instagram/YouTube embeds or a grid of Images */}
             {[1, 2, 3, 4, 5, 6].map((i) => (
               <div key={i} className="bg-gray-200 w-full h-64 rounded-xl flex items-center justify-center text-gray-500">
                 Gallery Image / Video {i}
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
