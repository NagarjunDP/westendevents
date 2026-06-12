import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Westend Events",
  description: "Read reviews from our happy couples and corporate clients. See why we are the preferred luxury event planners in Maharashtra.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="Don't just take our word for it. Hear what our clients have to say."
        />
      </div>
      <div className="mt-8">
        <TestimonialsCarousel />
      </div>
    </div>
  );
}
