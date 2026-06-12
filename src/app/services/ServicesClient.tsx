"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    id: "weddings",
    title: "Luxury Destination Weddings",
    subtitle: "Complete Planning & Production",
    description: "From royal ceremonies in Udaipur to beachfront celebrations in Goa, we offer comprehensive end-to-end wedding management. Our dedicated team handles everything—from venue sourcing and guest hospitality to logistics and complete event production for international couples and NRIs coming to India.",
    features: ["Venue Sourcing & Booking", "Guest Hospitality & Logistics", "End-to-end Event Production", "Dedicated Shadow Teams"],
    image: "/_05A6903.jpg", // The requested image
    align: "left"
  },
  {
    id: "decor",
    title: "Bespoke Floral & Theme Decor",
    subtitle: "100% In-House Inventory",
    description: "Unlike standard planners who outsource, we own an extensive inventory of premium decor elements. Our in-house production facility allows us to create bespoke floral arrangements, towering stage setups, and immersive luxury themes that are tailored exactly to your vision, guaranteeing unmatched quality control.",
    features: ["Custom Stage Fabrication", "Premium Floral Arrangements", "Luxury Furniture Rentals", "Immersive Lighting Design"],
    image: "/205A4188.jpg",
    align: "right"
  },
  {
    id: "sound-sfx",
    title: "JBL VRX Audio & Special Effects",
    subtitle: "Tour-Grade Technical Infrastructure",
    description: "We bring the concert experience to your private events. Equipped with original JBL VRX line arrays, intelligent lighting rigs, cold pyrotechnics, dry ice, and CO2 jets, our in-house technical crew ensures your event sounds and looks spectacular. No third-party rentals, just pure uncompromised quality.",
    features: ["JBL VRX Sound Systems", "Intelligent Stage Lighting", "Cold Pyros & SFX", "LED Walls & Visuals"],
    image: "/_MP_2156.jpg",
    align: "left"
  },
  {
    id: "anchors-artists",
    title: "Anchors, Artists & Entertainment",
    subtitle: "Curating Unforgettable Performances",
    description: "The soul of any grand event lies in its entertainment. We provide top-tier celebrity anchors, professional hosts, live bands, international acts, and traditional folk dancers. We manage all artist coordination, riders, and stage requirements so your guests remain enthralled from the first welcome to the final after-party.",
    features: ["Celebrity Appearances", "Professional Emcees & Anchors", "Live Bands & DJs", "Traditional & Global Acts"],
    image: "/_MP_2161.jpg",
    align: "right"
  },
  {
    id: "corporate",
    title: "Corporate Events & Activations",
    subtitle: "Turnkey B2B Event Management",
    description: "From massive tech conferences and product launches to high-end corporate galas and mall activations, we deliver turnkey production for MNCs. Our meticulous planning and flawless execution ensure your brand message is delivered powerfully and professionally.",
    features: ["Conferences & Seminars", "Product Launches", "Brand Activations", "Gala Dinners & Awards"],
    image: "/_MP_0245.jpg",
    align: "left"
  }
];

export function ServicesClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#FAF6EF] min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-6 font-bold"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-4xl md:text-[72px] text-[#0E0A07] leading-[1.05] mb-8"
          >
            We Don't Just Plan Events.<br />
            <span className="text-[var(--color-brand-gold)] italic font-light">We Own Every Detail.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[18px] text-[#4A3E31] max-w-[800px] mx-auto leading-relaxed mb-12"
          >
            As a premier luxury event company based in Lonavla, Westend Events specializes in high-profile destination weddings, NRI celebrations, and large-scale corporate events. We offer a 100% in-house, zero-outsourcing model across Maharashtra and India.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services Alternating Blocks */}
      <section className="py-12 md:py-24 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-24 md:gap-40">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col gap-12 md:gap-24 items-center ${service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#161616] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:bg-black/0" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-[var(--color-brand-gold)] font-serif text-[120px] md:text-[200px] opacity-[0.1] leading-none pointer-events-none font-bold">
                  0{index + 1}
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <span className="text-[12px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-4 block font-bold">
                  {service.subtitle}
                </span>
                <h2 className="font-serif text-4xl md:text-[54px] text-[#0E0A07] leading-[1.1] mb-6">
                  {service.title}
                </h2>
                <p className="font-sans text-[16px] text-[#4A3E31] leading-relaxed mb-10 max-w-[540px]">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#0E0A07] font-medium">
                      <CheckCircle2 size={18} className="text-[var(--color-brand-gold)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#contact" className="inline-flex items-center gap-3 text-[13px] text-[#0E0A07] font-bold uppercase tracking-wider hover:text-[var(--color-brand-gold)] transition-colors w-fit border-b border-[#0E0A07] hover:border-[var(--color-brand-gold)] pb-1">
                  Discuss Your Event <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-[#0E0A07] py-24 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">Ready to create something extraordinary?</h2>
          <p className="font-sans text-white/70 mb-12 max-w-[600px] mx-auto">Contact us today to schedule a consultation at our Lonavla headquarters or via video call for international clients.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-[var(--color-brand-gold)] text-[#0E0A07] px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
            Book a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
