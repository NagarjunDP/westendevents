"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Layers } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Weddings" | "Decor" | "Corporate" | "Sound & SFX" | "Destinations";
  location: string;
  featured?: boolean;
  span?: string; // Tailwind grid span override for Desktop/Mobile bento
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/205A4188.jpg",
    title: "Royal Mandap & Floral Canopy",
    category: "Weddings",
    location: "Lonavla Resort",
    featured: true,
    span: "col-span-1 md:col-span-2 md:row-span-2 h-[340px] sm:h-[420px] md:h-[560px]"
  },
  {
    id: "2",
    src: "/_MP_2138.jpg",
    title: "Luxury Floral Pathway & Aisles",
    category: "Decor",
    location: "Lonavla Estate",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[270px]"
  },
  {
    id: "3",
    src: "/_05A6890.jpg",
    title: "Original JBL VRX Sound & Stage",
    category: "Sound & SFX",
    location: "Concert Arena, Mumbai",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[270px]"
  },
  {
    id: "4",
    src: "/_05A6913.jpg",
    title: "Sunset Beach Mandap",
    category: "Destinations",
    location: "Goa Beachfront",
    span: "col-span-1 md:col-span-2 h-[280px] sm:h-[320px] md:h-[270px]"
  },
  {
    id: "5",
    src: "/_MP_2148.jpg",
    title: "Glamorous Sangeet Lighting & Pyros",
    category: "Sound & SFX",
    location: "Karjat Farmhouse",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[270px]"
  },
  {
    id: "6",
    src: "/205A4204.jpg",
    title: "Grand Palace Entrance & Decor",
    category: "Weddings",
    location: "Udaipur Palace",
    featured: true,
    span: "col-span-1 md:col-span-2 h-[300px] sm:h-[360px] md:h-[320px]"
  },
  {
    id: "7",
    src: "/MDP_1147.jpg",
    title: "Traditional Varmala Stage",
    category: "Decor",
    location: "Pune Luxury Hotel",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[320px]"
  },
  {
    id: "8",
    src: "/_MP_2173.jpg",
    title: "Heritage Fort Wedding Gala",
    category: "Destinations",
    location: "Jaipur Heritage Fort",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[320px]"
  },
  {
    id: "9",
    src: "/_MP_2188.jpg",
    title: "Corporate Excellence Night",
    category: "Corporate",
    location: "Grand Ballroom, Mumbai",
    span: "col-span-1 md:col-span-2 h-[280px] sm:h-[320px] md:h-[320px]"
  },
  {
    id: "10",
    src: "/_MP_2154.jpg",
    title: "Cold Pyros & Heavy Fog SFX",
    category: "Sound & SFX",
    location: "Khopoli Open Air Ground",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[290px]"
  },
  {
    id: "11",
    src: "/_MP_2166.jpg",
    title: "Vibrant Haldi & Mehendi Canopy",
    category: "Decor",
    location: "Igatpuri Hill Resort",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[290px]"
  },
  {
    id: "12",
    src: "/_MP_2190.jpg",
    title: "Illuminated Night Reception",
    category: "Weddings",
    location: "Mahabaleshwar Club",
    span: "col-span-1 h-[260px] sm:h-[300px] md:h-[290px]"
  }
];

const categories = ["ALL", "Weddings", "Decor", "Corporate", "Sound & SFX", "Destinations"] as const;

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
      
      {/* MOBILE HIGHLIGHT STORIES (Horizontal Swipe Banner) */}
      <div className="md:hidden mb-8 overflow-x-auto pb-4 pt-1 no-scrollbar flex gap-4 px-2">
        {galleryItems.slice(0, 5).map((story, i) => (
          <button
            key={story.id}
            onClick={() => setSelectedImageIndex(i)}
            className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[var(--color-brand-gold)] via-[#E8C97A] to-amber-200 shadow-md group-active:scale-95 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-black relative">
                <img 
                  src={story.src} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[var(--color-cream-muted)] max-w-[80px] truncate text-center">
              {story.location.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-10 md:mb-14 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-[var(--color-brand-gold)] text-black shadow-lg scale-105"
                : "bg-white/80 hover:bg-white text-[var(--color-cream-muted)] hover:text-black border border-[var(--color-brand-gold)]/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* DYNAMIC BENTO GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setSelectedImageIndex(idx)}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-black/40 border border-[var(--color-brand-gold)]/20 shadow-lg hover:shadow-2xl hover:border-[var(--color-brand-gold)] transition-all duration-500 ${item.span || 'col-span-1 h-[280px]'}`}
            >
              {/* Main Photo Asset */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Gradient Overlay for Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/30 shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-[11px] font-semibold text-[var(--color-gold-light)] uppercase tracking-wider">
                  <Sparkles size={12} className="text-[var(--color-brand-gold)]" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-medium leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8"
          >
            {/* Modal Header */}
            <div className="w-full max-w-6xl flex items-center justify-between z-10 pt-2">
              <div className="flex items-center gap-3 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[var(--color-brand-gold)] text-black">
                  {displayedItems[selectedImageIndex].category}
                </span>
                <span className="text-xs text-white/70 font-sans tracking-wider uppercase">
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

            {/* Modal Main Image Display */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Navigation Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image */}
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

              {/* Navigation Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="w-full max-w-3xl text-center pb-4 z-10">
              <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-1">
                {displayedItems[selectedImageIndex].title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-[var(--color-brand-gold)] font-semibold uppercase tracking-widest">
                {displayedItems[selectedImageIndex].location} · Westend Events Production
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
