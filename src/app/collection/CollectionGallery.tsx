"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const collectionImages = [
  { src: "/205A4188.jpg", title: "Royal Wedding Production" },
  { src: "/MDP_1147.jpg", title: "Lakeside Ceremony" },
  { src: "/_05A6890.jpg", title: "Luxury Decor" },
  { src: "/_05A6896.jpg", title: "Mandap Details" },
  { src: "/_MP_2156.jpg", title: "Evening Reception" },
  { src: "/205A4189.jpg", title: "Floral Architecture" },
  { src: "/205A4190.jpg", title: "Grand Entry" },
  { src: "/205A4193.jpg", title: "Bespoke Lighting" },
  { src: "/205A4196.jpg", title: "Venue Styling" },
  { src: "/205A4197.jpg", title: "Sangeet Night" },
  { src: "/205A4199.jpg", title: "Table Settings" },
  { src: "/205A4200.jpg", title: "Event Details" },
  { src: "/205A4204.jpg", title: "Immersive Production" },
  { src: "/205A4205.jpg", title: "Outdoor Ambience" },
  { src: "/MDP_1146.jpg", title: "Wedding Rituals" },
  { src: "/MDP_1151.jpg", title: "Luxury Arrangements" },
  { src: "/_05A6892.jpg", title: "Custom Mandap" },
  { src: "/_05A6895.jpg", title: "Varmala Stage" },
  { src: "/_05A6900.jpg", title: "Cocktail Details" },
  { src: "/_05A6903.jpg", title: "Destination Magic" },
  { src: "/_05A6906.jpg", title: "Sound & Stage" },
  { src: "/_05A6910.jpg", title: "Sangeet Decor" },
  { src: "/_MP_0243.jpg", title: "Haldi Setup" },
  { src: "/_MP_0245.jpg", title: "Vibrant Decor" },
  { src: "/_MP_0246.jpg", title: "Premium Tenting" },
  { src: "/_MP_0249.jpg", title: "Poolside Party" },
  { src: "/_MP_0251.jpg", title: "Thematic Designs" },
  { src: "/_MP_0256.jpg", title: "Elegant Seating" },
  { src: "/_MP_2131.jpg", title: "Exquisite Florals" },
  { src: "/_MP_2147.jpg", title: "Special Effects" },
  { src: "/_MP_2149.jpg", title: "Ambient Lighting" },
  { src: "/_MP_2153.jpg", title: "Reception Glamour" },
  { src: "/_MP_2161.jpg", title: "Live Entertainment" },
  { src: "/_MP_2181.jpg", title: "Stage Setup" },
  { src: "/_MP_2184.jpg", title: "Grand Finale" }
];

export function CollectionGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === 0 ? collectionImages.length - 1 : selectedImageIndex - 1);
  }, [selectedImageIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === collectionImages.length - 1 ? 0 : selectedImageIndex + 1);
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrevious]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImageIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {collectionImages.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: (idx % 8) * 0.1 }}
            className="relative group break-inside-avoid overflow-hidden cursor-pointer"
            onClick={() => setSelectedImageIndex(idx)}
          >
            <div className="relative w-full overflow-hidden bg-gray-100">
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-gold)] mb-1">Westend Events</p>
                <h3 className="text-white font-serif text-lg leading-tight">{image.title}</h3>
              </div>
              
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 size={14} className="text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Header / Close */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
              <div className="text-white">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-brand-gold)]">Collection</p>
                <p className="font-sans text-sm">{selectedImageIndex + 1} / {collectionImages.length}</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={handlePrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 hover:bg-[var(--color-brand-gold)] border border-white/20 hover:border-transparent backdrop-blur-md flex items-center justify-center text-white transition-all z-10 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 hover:bg-[var(--color-brand-gold)] border border-white/20 hover:border-transparent backdrop-blur-md flex items-center justify-center text-white transition-all z-10 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto p-4 md:p-12 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={collectionImages[selectedImageIndex].src}
                  alt={collectionImages[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </motion.div>
              
              {/* Footer Title */}
              <motion.div 
                key={`title-${selectedImageIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 md:bottom-12 text-center"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-white">{collectionImages[selectedImageIndex].title}</h2>
              </motion.div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
