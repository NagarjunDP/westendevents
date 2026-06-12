"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-serif text-xl font-semibold text-[var(--color-brand-charcoal)] focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn("h-5 w-5 text-[var(--color-brand-gold)] transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-gray-600 leading-relaxed pb-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", subtitle = "Everything you need to know about our destination wedding services." }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[var(--color-brand-ivory)] px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-brand-gold)]/20">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
