"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  eyebrow,
  centered = false, 
  className,
  titleClassName 
}: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("mb-16 md:mb-24 relative z-10", centered && "text-center flex flex-col items-center", className)}
    >
      {eyebrow && (
        <span className="eyebrow block mb-6">{eyebrow}</span>
      )}
      
      <h2 className={cn(
        "font-serif font-medium text-[var(--color-brand-charcoal)] mb-8 leading-[1.1]",
        "text-4xl md:text-5xl lg:text-7xl", // Default sizes, can be overridden by titleClassName
        titleClassName
      )}>
        {title}
      </h2>
      
      {/* Editorial Gold Line */}
      <div className={cn("flex items-center gap-4 mb-8", centered && "justify-center")}>
        <div className="h-[1px] w-24 bg-[var(--color-brand-gold)]"></div>
      </div>

      {subtitle && (
        <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
