"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Play, Award, Star } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Weddings" | "Corporate" | "Achievements";
  location: string;
  featured?: boolean;
  isVideo?: boolean;
  videoSrc?: string;
  poster?: string;
  badge?: string;
  span?: string; // Tailwind grid span override for Desktop/Mobile bento
}

export const galleryItems: GalleryItem[] = [
  // ACHIEVEMENTS & CELEBRITY HIGHLIGHTS
  {
    id: "ach-1",
    src: getCdnUrl("/kawaljitsingh.jpeg"),
    title: "Honored by Veteran Actor Kawaljit Singh",
    category: "Achievements",
    location: "Mumbai Industry Summit",
    featured: true,
    badge: "⭐ ACTOR KAWALJIT SINGH",
    span: "col-span-1 h-72 sm:h-80 md:col-span-2 md:row-span-2 md:h-[560px]"
  },
  {
    id: "ach-2",
    src: getCdnUrl("/goacm.png"),
    title: "Felicitation by Hon'ble Goa CM Dr. Pramod Sawant",
    category: "Achievements",
    location: "The Westin Goa",
    featured: true,
    badge: "🏛️ GOA CM DR. PRAMOD SAWANT",
    span: "col-span-1 h-72 sm:h-80 md:col-span-2 md:h-[270px]"
  },
  {
    id: "ach-3",
    src: getCdnUrl("/Video-44267-mobile-poster.jpg"),
    title: "Award Ceremony with Actor Kawaljit Singh",
    category: "Achievements",
    location: "National Excellence Gala",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/kawaljit-singh-felicitation.mp4"),
    badge: "🎬 KAWALJIT SINGH FELICITATION",
    span: "col-span-1 h-72 sm:h-80 md:h-[270px]"
  },
  {
    id: "ach-5",
    src: getCdnUrl("/Video-44267-mobile-poster.jpg"),
    title: "CA Conference Event Production",
    category: "Achievements",
    location: "Grand Expo Convention",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/ca-conference-production.mp4"),
    badge: "🏆 CA CONFERENCE",
    span: "col-span-1 h-72 sm:h-80 md:h-[270px]"
  },
  {
    id: "ach-6",
    src: getCdnUrl("/_MP_2154.jpg"),
    title: "Children's Day Grand Celebration Event",
    category: "Achievements",
    location: "Special Corporate Gala",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/childrens-day-celebration.mp4"),
    badge: "🎉 SPECIAL CELEBRATION",
    span: "col-span-1 h-72 sm:h-80 md:h-[270px]"
  },
  {
    id: "ach-7",
    src: getCdnUrl("/corporate_production.jpg"),
    title: "Awards & Stage Production Showcase",
    category: "Achievements",
    location: "Awards Night Gala",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/luxury-event-showcase.mp4"),
    badge: "🏆 AWARDS SHOWCASE",
    span: "col-span-1 h-72 sm:h-80 md:col-span-2 md:h-[270px]"
  },

  // WEDDINGS & WEDDING VIDEOS
  {
    id: "w-vid-1",
    src: getCdnUrl("/205A4188.jpg"),
    title: "Royal Wedding Decor & Stage Production",
    category: "Weddings",
    location: "Lonavla Resort",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/wedding-decor-production.mp4"),
    badge: "🎥 WEDDING VIDEO",
    span: "col-span-1 h-72 sm:h-80 md:col-span-2 md:h-[320px]"
  },
  {
    id: "w-vid-2",
    src: getCdnUrl("/_05A6913.jpg"),
    title: "Grand Couple Entry & Pyros SFX",
    category: "Weddings",
    location: "Goa Beachfront",
    isVideo: true,
    videoSrc: getCdnUrl("/videos/wedding-entry-celebration.mp4"),
    badge: "🎥 WEDDING ENTRY",
    span: "col-span-1 h-72 sm:h-80 md:h-[320px]"
  },
  {
    id: "1",
    src: getCdnUrl("/205A4188.jpg"),
    title: "Royal Mandap & Floral Canopy",
    category: "Weddings",
    location: "Lonavla Resort",
    featured: true,
    span: "col-span-1 h-72 sm:h-80 md:h-[320px]"
  },
  {
    id: "2",
    src: getCdnUrl("/_MP_2138.jpg"),
    title: "Luxury Floral Pathway & Aisles",
    category: "Weddings",
    location: "Lonavla Estate",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },
  {
    id: "4",
    src: getCdnUrl("/_05A6913.jpg"),
    title: "Sunset Beach Mandap",
    category: "Weddings",
    location: "Goa Beachfront",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },
  {
    id: "6",
    src: getCdnUrl("/205A4204.jpg"),
    title: "Grand Palace Entrance & Decor",
    category: "Weddings",
    location: "Udaipur Palace",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },

  // CORPORATE EVENTS
  {
    id: "3",
    src: getCdnUrl("/corporate_conference.jpg"),
    title: "Global Executive Conference Summit",
    category: "Corporate",
    location: "Grand Ballroom, Mumbai",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },
  {
    id: "5",
    src: getCdnUrl("/corporate_offsites.jpg"),
    title: "Open-Air Gala Team Offsite Night",
    category: "Corporate",
    location: "Lonavla Resort Grounds",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },
  {
    id: "8",
    src: getCdnUrl("/corporate_launch.jpg"),
    title: "High-Impact Product Reveal Stage",
    category: "Corporate",
    location: "Mumbai Expo Center",
    span: "col-span-1 h-72 sm:h-80 md:h-[290px]"
  },
  {
    id: "9",
    src: getCdnUrl("/corporate_awards.jpg"),
    title: "Corporate Excellence Awards Night",
    category: "Corporate",
    location: "Grand Ballroom, Mumbai",
    span: "col-span-1 h-72 sm:h-80 md:col-span-2 md:h-[290px]"
  }
];

const categories = ["ALL", "Weddings", "Corporate", "Achievements"] as const;

interface BentoGalleryProps {
  isPage?: boolean;
  maxItems?: number;
}

export function BentoGallery({ isPage = false, maxItems }: BentoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "ALL" ? true : item.category === activeCategory
  );

  const displayedItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % displayedItems.length);
    }
  };

  return (
    <div className="w-full">
      
      {/* CATEGORY FILTER TABS (ALL, WEDDINGS, CORPORATE, ACHIEVEMENTS) */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-10 md:mb-14 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-serif text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2 ${
              activeCategory === cat
                ? "bg-[var(--color-brand-gold)] text-[#0E0A07] scale-105 shadow-xl ring-2 ring-[var(--color-brand-gold)]/50"
                : "bg-white text-[#0E0A07] hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] border border-[var(--color-brand-gold)]/30"
            }`}
          >
            {cat === "Achievements" && <Award size={16} className="shrink-0" />}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* DYNAMIC CREATIVE BENTO GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              onClick={() => setSelectedImageIndex(idx)}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-[#0E0A07] border border-[var(--color-brand-gold)]/30 shadow-lg hover:shadow-2xl hover:border-[var(--color-brand-gold)] transition-all duration-500 ${item.span || 'col-span-1 h-[280px]'}`}
            >
              {/* Media Asset (Image or Video Preview) */}
              {item.isVideo ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.videoSrc || item.src}
                    poster={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-gold)] text-[#0E0A07] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
              )}

              {/* Gradient Overlay for Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A07]/95 via-[#0E0A07]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

              {/* Category & Badge Tags */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 items-start">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.15em] uppercase bg-[#0E0A07]/80 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 shadow-md">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[var(--color-brand-gold)] text-[#0E0A07] shadow-lg">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Expand Icon Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[var(--color-brand-gold)]/50 flex items-center justify-center text-[var(--color-brand-gold)]">
                  <Maximize2 size={15} />
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-1.5 font-serif text-xs font-bold text-[var(--color-brand-gold)] uppercase tracking-[0.25em]">
                  <Sparkles size={13} className="text-[var(--color-brand-gold)] shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white font-medium leading-snug tracking-wide group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* FULL-SCREEN LIGHTBOX MODAL (Supports Images & HD Videos) */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8 font-sans"
          >
            {/* Modal Header */}
            <div className="w-full max-w-6xl flex items-center justify-between z-10 pt-2">
              <div className="flex items-center gap-3 text-white">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[var(--color-brand-gold)] text-[#0E0A07]">
                  {displayedItems[selectedImageIndex].category}
                </span>
                {displayedItems[selectedImageIndex].badge && (
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/30">
                    {displayedItems[selectedImageIndex].badge}
                  </span>
                )}
                <span className="text-xs text-white/70 font-mono tracking-wider uppercase">
                  {selectedImageIndex + 1} / {displayedItems.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Main Display (Image or Video) */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Navigation Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              {displayedItems[selectedImageIndex].isVideo ? (
                <motion.video
                  key={displayedItems[selectedImageIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={displayedItems[selectedImageIndex].videoSrc || displayedItems[selectedImageIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] w-auto max-w-full rounded-xl md:rounded-2xl shadow-2xl border border-[var(--color-brand-gold)]/30"
                />
              ) : (
                <motion.img
                  key={displayedItems[selectedImageIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={displayedItems[selectedImageIndex].src}
                  alt={displayedItems[selectedImageIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl md:rounded-2xl shadow-2xl border border-white/10"
                />
              )}

              {/* Navigation Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="w-full max-w-3xl text-center pb-4 z-10">
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-1 tracking-wide">
                {displayedItems[selectedImageIndex].title}
              </h3>
              <p className="font-serif text-xs md:text-sm text-[var(--color-brand-gold)] font-bold uppercase tracking-[0.25em]">
                {displayedItems[selectedImageIndex].location} · Westend Events Production
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
