"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export interface Testimonial {
  text: string;
  author: string;
  meta: string;
  rating: number;
  googleReviewUrl?: string;
  isGoogleReview?: boolean;
}

export function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
    {
      text: "A huge thank you to the Westend Events team for making our celebration better than imagined. What touched us most was their personal involvement — they handled everything like family! The décor was stunning, arrangements on point, and staff polite and coordinated.",
      author: "Tajammul Kazi",
      meta: "Verified Google Review · 5 Stars",
      rating: 5,
      isGoogleReview: true,
      googleReviewUrl: "https://www.google.com/maps/contrib/103236144724626609074/reviews?hl=en-GB"
    },
    {
      text: "Westend Events turned our dream celebration into reality! Warm, transparent, and extremely professional. The décor, guest handling, and last-minute adjustments were handled with so much care and perfection. Highly, highly recommended!",
      author: "Ashwini Kotasthane",
      meta: "Google Local Guide (15 Reviews) · 5 Stars",
      rating: 5,
      isGoogleReview: true,
      googleReviewUrl: "https://www.google.com/maps/contrib/114604049785360873359/reviews?hl=en-GB"
    },
    {
      text: "We had an amazing experience with Westend Events! The team took care of everything from start to finish with attention to detail. The décor was stunning, matching our theme perfectly, and management was smooth and stress-free.",
      author: "Ravindra Kamble",
      meta: "Verified Google Review · 5 Stars",
      rating: 5,
      isGoogleReview: true,
      googleReviewUrl: "https://www.google.com/maps/contrib/104966247915137286966/reviews?hl=en-GB"
    },
    {
      text: "Westend Events organized the 50th Marriage Anniversary of our parents. It was the best gift we could give them! The event was a huge success and everyone in our family had the greatest experience.",
      author: "Reetu Jain",
      meta: "Verified Google Review (14 Reviews) · 5 Stars",
      rating: 5,
      isGoogleReview: true,
      googleReviewUrl: "https://www.google.com/maps/contrib/102216003625701023073/reviews?hl=en-GB"
    },
    {
      text: "Westend Events executed my son's wedding with extraordinary grandeur and precision. Their in-house decor team, original JBL VRX sound, and SFX made the entire celebration unforgettable.",
      author: "Kanwaljit Singh (Actor)",
      meta: "Celebrity Wedding · Lonavla",
      rating: 5
    },
    {
      text: "We flew in from Toronto with 180 guests and didn't have to worry about a single thing. The décor, sound, and coordination were flawless — it felt like a Bollywood film brought to life.",
      author: "Natasha & Arjun S.",
      meta: "NRI Destination Wedding · Lonavla",
      rating: 5
    }
  ];

  // Tripled for infinite seamless 60fps marquee loop
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-[#FAF6EF] py-10 sm:py-16 md:py-24 overflow-hidden border-t border-b border-[var(--color-brand-gold)]/20 font-sans">
      
      {/* Section Title */}
      <div className="max-w-[1400px] mx-auto text-center mb-10 md:mb-14 px-5 sm:px-8 md:px-12 lg:px-24">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-flex items-center gap-2 mb-3 font-mono font-bold tracking-[0.25em]"
        >
          <span>REAL GOOGLE REVIEWS & STORIES</span>
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E0A07] font-medium leading-tight max-w-3xl mx-auto"
        >
          Trusted by Families, Couples & Brands
        </motion.h2>
      </div>

      {/* CONTINUOUS SMOOTH SLIDING MARQUEE CAROUSEL */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft Ambient Side Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />

        {/* Sliding Marquee Track */}
        <div className="animate-marquee flex items-stretch gap-5 sm:gap-6 whitespace-normal">
          {marqueeTestimonials.map((t, idx) => (
            <div 
              key={idx}
              className="w-[300px] sm:w-[360px] md:w-[410px] bg-white p-6 sm:p-8 border border-[#EADBCE] rounded-2xl flex flex-col justify-between items-start text-left shadow-xs hover:shadow-xl hover:border-[var(--color-brand-gold)] transition-all duration-300 shrink-0 relative group"
            >
              {/* Decorative Gold Quotation Mark */}
              <div className="absolute top-3 right-5 font-serif text-[60px] leading-none text-[var(--color-brand-gold)] opacity-20 select-none pointer-events-none group-hover:opacity-40 transition-opacity">
                “
              </div>

              {/* Star Rating Header + Google Badge */}
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                {t.isGoogleReview && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#4285F4] bg-[#4285F4]/10 px-2 py-0.5 rounded-md border border-[#4285F4]/30">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.907 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                    <span>Google Review</span>
                  </span>
                )}
              </div>

              {/* Review Paragraph */}
              <p className="font-serif italic text-[#0E0A07] text-sm sm:text-base leading-relaxed mb-6 flex-grow relative z-10">
                "{t.text}"
              </p>

              {/* Author & Metadata */}
              <div className="relative z-10 pt-4 border-t border-[#F2E8DD] w-full flex items-center justify-between">
                <div>
                  <div className="font-serif text-sm font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors">
                    {t.author}
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#8A7663] font-semibold uppercase tracking-wider mt-0.5">
                    {t.meta}
                  </div>
                </div>

                {t.googleReviewUrl && (
                  <a
                    href={t.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FAF6EF] text-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-colors"
                    title="View Original Google Review"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
