"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Briefcase, Sparkles, Compass, Music, ShieldCheck, Presentation, Building2, Award, Layers } from "lucide-react";
import { useState } from "react";

export function ServicesClient() {
  const [activeTab, setActiveTab] = useState<"weddings" | "corporate">("weddings");

  const weddingServices = [
    {
      id: "destination-weddings",
      title: "Destination Weddings & NRI Celebrations",
      subtitle: "Full End-to-End Planning & Management",
      description: "From royal palace ceremonies in Udaipur and Jaipur to hilltop retreats in Lonavla and tropical beach weddings in Goa, we offer complete turn-key wedding management for couples and NRI families flying in from abroad. We act as your single point of contact for venue shortlisting, guest hospitality, airport transfers, and remote planning.",
      features: ["Royal Venue Sourcing & Booking", "Dedicated NRI Concierge & Airport Logistics", "Full Remote & On-Site Planning", "Shadow Teams for Couple & Family"],
      image: "/205A4188.jpg",
      icon: Compass
    },
    {
      id: "wedding-decor",
      title: "Bespoke Décor & Floral Architecture",
      subtitle: "100% In-House Inventory & Production",
      description: "Unlike standard planners who rely on third-party vendors, Westend Events owns an extensive in-house decor inventory. Our team creates bespoke mandap setups, royal floral entryways, custom stage structures, and theme lighting that transform every venue into a fairytale experience.",
      features: ["Custom Mandap & Stage Fabrication", "Royal Floral Entryways & Structures", "Luxury Seating & Theme Furniture", "Intelligent Ambient & Accent Lighting"],
      image: "/MDP_1147.jpg",
      icon: Sparkles
    },
    {
      id: "hospitality-logistics",
      title: "Hospitality & Guest Management",
      subtitle: "White-Glove Guest Experience",
      description: "We ensure every guest feels like royalty from the moment they arrive. Our hospitality directors manage hotel check-ins, luxury resort room blockings, luggage coordination, welcome hamper distribution, and 24/7 guest helpline assistance.",
      features: ["5-Star Resort Room Blockings", "Airport & Station AC Coach Transfers", "Customized Welcome Hampers & Keycards", "24/7 On-Site Guest Desk"],
      image: "/_MP_2156.jpg",
      icon: Heart
    },
    {
      id: "wedding-entertainment",
      title: "Entertainment & Artist Management",
      subtitle: "Curated Live Acts & Choreography",
      description: "Elevate your celebrations with India's finest performers. We manage top-tier celebrity anchors, professional Sangeet choreographers, live Bollywood bands, traditional Shehnai masters, international dancers, and high-energy DJ lineups.",
      features: ["Celebrity MCs & TV Anchors", "Sangeet Choreography & Showflows", "Live Bands, Dhol Teams & DJs", "Artist Travel & Rider Logistics"],
      image: "/_05A6896.jpg",
      icon: Music
    },
    {
      id: "wedding-production",
      title: "JBL Sound, Pyros & Stage SFX",
      subtitle: "Concert-Grade In-House Audio Visual",
      description: "We bring tour-grade sound systems and special effects to your wedding functions. Equipped with original JBL VRX line arrays, cold pyrotechnics for varmala, dry ice heavy fog for couple entry, and LED screens for Sangeet visuals.",
      features: ["Original JBL VRX Line Arrays", "Cold Spark Pyros & CO2 Jets", "Dry Ice Low-Lying Heavy Fog", "Custom LED Walls & Lighting Rigs"],
      image: "/205A4204.jpg",
      icon: ShieldCheck
    }
  ];

  const corporateServices = [
    {
      id: "corporate-conferences",
      title: "Conferences, Summits & Keynotes",
      subtitle: "Turnkey B2B Executive Events",
      description: "Flawless execution for high-level corporate summits, multi-track annual conferences, and executive keynotes. We provide custom stage fabrication, broadcast-quality AV setups, delegate registration portals, and live streaming capabilities.",
      features: ["Custom Keynote Stage & Podium Setup", "Multi-Track Audio Visual Systems", "High-Def Live Streaming & Recording", "Delegate Badging & Registration Desks"],
      image: "/corporate_conference.jpg",
      icon: Presentation
    },
    {
      id: "corporate-offsites",
      title: "Offsites & Team Retreats",
      subtitle: "Experiential Corporate Escapes",
      description: "Transform your company offsite into an unforgettable experience. Based in Lonavla and Pune, we manage resort bookings, outdoor team-building activities, open-air lawn gala dinners under fairy lights, and evening entertainment.",
      features: ["Lonavla & Pune Resort Bookings", "Outdoor Team Building Activities", "Open-Air Gala Dinners & Cocktail Nights", "Complete Logistics & Coach Transfers"],
      image: "/corporate_offsites.jpg",
      icon: Building2
    },
    {
      id: "product-launches",
      title: "Product Launches & Brand Activations",
      subtitle: "High-Impact Reveal Staging",
      description: "Make your new product launch headline-worthy. We design dramatic reveal staging, interactive brand installation booths, media press walls, and immersive lighting shows that command audience attention.",
      features: ["Dramatic Product Reveal Stage FX", "Brand Experience Booths & Stalls", "Press & Media Wall Fabrications", "Interactive Display Technology"],
      image: "/corporate_launch.jpg",
      icon: Sparkles
    },
    {
      id: "awards-nights",
      title: "Awards Ceremonies & Annual Galas",
      subtitle: "Red Carpet Corporate Excellence",
      description: "Celebrate corporate milestones with a spectacular red-carpet gala. From golden trophy stage fabrications and intelligent lighting design to celebrity anchors and entertainment acts.",
      features: ["Red Carpet Entry & Backdrop Fabrications", "Custom Trophy Podium & Stage Production", "Celebrity Anchors & Live Performers", "Full Audio-Visual & Pyro Effects"],
      image: "/corporate_awards.jpg",
      icon: Award
    },
    {
      id: "exhibitions",
      title: "Exhibitions & Trade Show Booths",
      subtitle: "Custom Stall Architecture & AV",
      description: "Stand out on the expo floor with bespoke exhibition booth architecture. We handle stall design, 3D floorplan rendering, timber & metal fabrication, LED display integration, and on-ground booth staffing.",
      features: ["3D Stall Design & Fabrication", "Integrated LED Screens & AV Displays", "Exhibition Flooring & Lighting Rigs", "On-Ground Crowd Flow Management"],
      image: "/corporate_exhibition.jpg",
      icon: Layers
    },
    {
      id: "corporate-production",
      title: "Corporate Production & Audio-Visual",
      subtitle: "100% In-House Sound & Stage Rigging",
      description: "We own our entire technical audio-visual inventory, ensuring crystal-clear acoustics and seamless technical execution for corporate presentations without third-party vendor delays.",
      features: ["In-House JBL VRX Sound Systems", "Intelligent Stage Lighting & DMX Rigs", "Ultra-HD LED Video Walls", "On-Site Technical Engineers & Sound Masters"],
      image: "/corporate_production.jpg",
      icon: Briefcase
    }
  ];

  const currentList = activeTab === "weddings" ? weddingServices : corporateServices;

  return (
    <div className="bg-[#FAF6EF] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 px-4 md:px-12 lg:px-24 relative overflow-hidden bg-[#0E0A07] text-[#FAF6EF]">
        <div className="absolute inset-0 bg-[url('/205A4189.jpg')] bg-cover bg-center opacity-20" />
        <div className="max-w-[1200px] mx-auto text-center relative z-10 space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/20 border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
          >
            <Sparkles size={14} />
            <span>FULL IN-HOUSE EVENT PRODUCTION</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl text-white leading-tight"
          >
            Our In-House Services. <br />
            <span className="text-[var(--color-brand-gold)] italic font-light">Weddings & Corporate Events.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] md:text-[18px] text-gray-300 max-w-[800px] mx-auto leading-relaxed"
          >
            Based in <strong className="text-white">Lonavla and Pune</strong>, Westend Events owns 100% in-house decor inventory, JBL VRX Sound Systems, Technical AV, LED Screens, Special Entries, and SFX for extraordinary celebrations across India.
          </motion.p>

          {/* Interactive Category Selector Tabs */}
          <div className="pt-8 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#1C1611] border border-[var(--color-brand-gold)]/40 gap-2 shadow-2xl">
              <button
                onClick={() => setActiveTab("weddings")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-serif text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === "weddings"
                    ? "bg-[var(--color-brand-gold)] text-[#0E0A07] shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Heart size={18} className={activeTab === "weddings" ? "fill-current" : ""} />
                <span>Weddings & Celebrations</span>
              </button>

              <button
                onClick={() => setActiveTab("corporate")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-serif text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === "corporate"
                    ? "bg-[var(--color-brand-gold)] text-[#0E0A07] shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Briefcase size={18} />
                <span>Corporate Events</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Services Block */}
      <section className="py-16 md:py-28 px-4 md:px-12 lg:px-24 bg-[#FAF6EF]">
        <div className="max-w-[1400px] mx-auto space-y-20 md:space-y-32">
          
          {/* Section Heading Badge */}
          <div className="text-center max-w-2xl mx-auto border-b border-[var(--color-brand-gold)]/30 pb-8">
            <span className="text-xs font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              {activeTab === "weddings" ? "DIVISION 01 — WEDDINGS" : "DIVISION 02 — CORPORATE"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0E0A07] font-bold">
              {activeTab === "weddings" ? "Luxury Wedding Services" : "Corporate & Turnkey B2B Services"}
            </h2>
          </div>

          {currentList.map((service, index) => {
            const IconComp = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-10 md:gap-20 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-1/2 relative group"
                >
                  <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-2xl bg-[#0E0A07] relative shadow-2xl border border-[var(--color-brand-gold)]/30">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 p-3 rounded-full bg-black/70 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40">
                      <IconComp size={22} />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono font-bold flex items-center justify-between">
                      <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/30">
                        {service.subtitle}
                      </span>
                      <span className="text-white/80">0{index + 1}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
                >
                  <span className="text-[12px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] font-mono font-bold">
                    {service.subtitle}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-[#0E0A07] font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[16px] text-[#4A3E31] leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-[#0E0A07] font-medium">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-gold)] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link 
                      href={activeTab === "corporate" ? "/#contact?type=corporate" : "/#contact"}
                      className="inline-flex items-center gap-2.5 bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-[#0E0A07] hover:text-white transition-all duration-300 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-md"
                    >
                      <span>{activeTab === "corporate" ? "Request Corporate Proposal" : "Discuss Your Event"}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-[#0E0A07] py-24 px-4 text-center text-[#FAF6EF]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white">We Create. You Celebrate.</h2>
          <p className="font-sans text-gray-300 max-w-[600px] mx-auto leading-relaxed">
            Contact Westend Events today to schedule a meeting at our Lonavla or Pune office, or book a video consultation for international NRI clients.
          </p>
          <div>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center bg-[var(--color-brand-gold)] text-[#0E0A07] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-xl shadow-xl"
            >
              Plan Your Celebration Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
