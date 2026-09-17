"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SEOPageData } from "@/data/seo/types";
import { buildPageSchemas, getBreadcrumbsForPage } from "@/lib/seo-utils";
import {
  MapPin,
  Phone,
  Calendar,
  Users,
  CheckCircle2,
  ChevronDown,
  Star,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Building2,
  Navigation,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface LandingPageLayoutProps {
  data: SEOPageData;
}

export function LandingPageLayout({ data }: LandingPageLayoutProps) {
  const schemas = buildPageSchemas(data);
  const breadcrumbs = getBreadcrumbsForPage(data);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: data.serviceCategory,
    date: "",
    guestCount: "",
    venue: ""
  });

  // Normalize dual schemas into unified local variables
  const serviceItems = data.serviceBreakdown ?? data.serviceFeatures ?? [];
  const galleryItems = (data.galleryImages ?? []).map((g) => ({
    src: g.url,
    alt: g.alt,
    caption: g.category,
  })).concat(
    (data.gallery ?? []).map((g) => ({
      src: g.src,
      alt: g.alt,
      caption: g.caption,
    }))
  );
  const pricingItems = (data.pricingPackages ?? []).map((p) => ({
    name: p.name,
    startingPrice: p.startingPrice,
    guestCount: p.guestCount,
    deliverables: p.deliverables,
    isPopular: p.isPopular ?? false,
  })).concat(
    (data.pricingSignal?.packages ?? []).map((p) => ({
      name: p.tierName,
      startingPrice: p.startingPrice,
      guestCount: p.bestFor,
      deliverables: p.inclusions,
      isPopular: false,
    }))
  );
  const faqItems = (data.faqs ?? []).map((f) => ({
    question: f.question,
    answer: f.answer ?? [f.directAnswer, f.detailedAnswer].filter(Boolean).join(" "),
  }));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp prefilled link fallback
    const message = `Hello Westend Events! I'm interested in ${data.targetKeyword} in ${data.location}. My Name: ${formData.name}, Phone: ${formData.phone}, Date: ${formData.date || "TBD"}, Guests: ${formData.guestCount || "TBD"}, Venue: ${formData.venue || "TBD"}.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919923590038?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-[#0A0705] text-[#FAF6EF] min-h-screen font-sans selection:bg-[var(--color-brand-gold)] selection:text-black">
      {/* 1. Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.serviceSchema) }}
      />

      {/* 2. Top Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28 pb-4 border-b border-[#241B12] bg-[#0E0A07]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.url} className="flex items-center gap-2">
                {idx > 0 && <span className="text-[var(--color-brand-gold)]/50">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[var(--color-brand-gold)] font-medium truncate max-w-[200px] sm:max-w-none">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.url.replace("https://www.westendevent.com", "") || "/"}
                    className="hover:text-[var(--color-brand-gold)] transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* 3. Hero Section with Inquiry Form */}
      <header className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#22180F]">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[var(--color-brand-gold)]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[400px] h-[300px] bg-[#B28A32]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-xs font-mono uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.heroBadge}</span>
              </div>

              {/* Main H1 */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                {data.h1}
              </h1>

              {/* Verified Authority Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-1.5 text-[#F5B041]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white ml-1">4.9 / 5.0</span>
                  <span className="text-gray-400">(142+ Verified Reviews)</span>
                </div>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-[var(--color-brand-gold)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% In-House Production</span>
                </div>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-4 h-4 text-[var(--color-brand-gold)]" />
                  <span>{data.location}, Maharashtra</span>
                </div>
              </div>

              {/* Comprehensive Local Intro Copy */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                {data.heroIntro}
              </p>

              {/* Quick Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {data.quickMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#140E0A] border border-[var(--color-brand-gold)]/20 text-center hover:border-[var(--color-brand-gold)]/40 transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[var(--color-brand-gold)] block">
                      {metric.value}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919923590038"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-gold)] text-black font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(201,168,76,0.6)] transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Director: +91 99235 90038</span>
                </a>
                <a
                  href={`https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I'm%20planning%20an%20event%20in%20${encodeURIComponent(data.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Intent Instant Inquiry Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#130D08] border border-[var(--color-brand-gold)]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1 mb-5">
                  <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block">
                    FAST TRACK ESTIMATE
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Request a Customized Proposal
                  </h3>
                  <p className="text-xs text-gray-400 font-light">
                    Direct callback from our senior event director in {data.location} within 30 minutes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-[#1F170E] border border-[var(--color-brand-gold)] text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-gold)] mx-auto" />
                    <h4 className="font-serif text-lg font-bold text-white">Inquiry Received!</h4>
                    <p className="text-xs text-gray-300">
                      We have opened WhatsApp with your details. Our lead director will connect shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[var(--color-brand-gold)] underline hover:text-white"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090604] border border-[#2B2117] text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090604] border border-[#2B2117] text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                          Estimated Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090604] border border-[#2B2117] text-white text-xs focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                          Guest Count
                        </label>
                        <input
                          type="text"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          placeholder="e.g. 150 - 250"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090604] border border-[#2B2117] text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                          Preferred Venue
                        </label>
                        <input
                          type="text"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          placeholder="Resort or Need Advice"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090604] border border-[#2B2117] text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-brand-gold)] via-[#E0C068] to-[var(--color-brand-gold)] text-[#0E0A07] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 shadow-lg mt-2 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Instant Proposal on WhatsApp</span>
                    </button>

                    <p className="text-[10px] text-gray-500 text-center">
                      🔒 No spam. We respect your privacy. In-house quotation provided directly.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 4. Distance & Transit Practical Info Strip */}
      <section className="py-8 bg-[#0D0906] border-b border-[#1F160E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0A] border border-[#22180F]">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0 text-[var(--color-brand-gold)]">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#A8937D] font-bold block">
                  Transit from Mumbai
                </span>
                <p className="text-xs text-gray-200 mt-0.5">{data.distanceInfo.fromMumbai}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0A] border border-[#22180F]">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0 text-[var(--color-brand-gold)]">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#A8937D] font-bold block">
                  Transit from Pune
                </span>
                <p className="text-xs text-gray-200 mt-0.5">{data.distanceInfo.fromPune}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#140E0A] border border-[#22180F]">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0 text-[var(--color-brand-gold)]">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#A8937D] font-bold block">
                  Nearest Transit Hubs
                </span>
                <p className="text-xs text-gray-200 mt-0.5">{data.distanceInfo.nearestTransit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Empanelled Venues Section */}
      <section className="py-16 md:py-24 border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              EXCLUSIVE PARTNERSHIPS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Empanelled Venues & Resorts in {data.location}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              We coordinate directly with property general managers to secure complimentary upgrades, flexible curfews, and exclusive Maharaj kitchen rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.empanelledVenues.map((venue, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#120D09] border border-[var(--color-brand-gold)]/25 hover:border-[var(--color-brand-gold)]/70 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] text-[10px] font-mono uppercase font-bold tracking-wider mb-3">
                    <Building2 className="w-3 h-3" />
                    <span>{venue.type}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[var(--color-brand-gold)] transition-colors mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                    {venue.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#231A12] flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                    <span>{venue.guestCapacity}</span>
                  </span>
                  <a
                    href={`https://wa.me/919923590038?text=I%20am%20interested%20in%20booking%20${encodeURIComponent(venue.name)}%20for%20an%20event`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-brand-gold)] hover:underline text-[11px]"
                  >
                    Check Availability →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deep Service Breakdown (4 Pillars) */}
      <section className="py-16 md:py-24 bg-[#0B0805] border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              COMPREHENSIVE EXECUTION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              End-to-End Production Scope in {data.location}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              From our local warehouse and fabrication workshops, we manage every layer of your celebration with zero third-party markups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#140E0A] border border-[var(--color-brand-gold)]/30 hover:border-[var(--color-brand-gold)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/40 flex items-center justify-center font-mono font-bold text-sm text-[var(--color-brand-gold)]">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Curated Image Gallery */}
      <section className="py-16 md:py-24 border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              VISUAL EXCELLENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Recent Production Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              Real high-resolution photographs from our luxury weddings, concerts, and enterprise conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-[#2B2014] bg-[#120D09] aspect-[4/3] shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-brand-gold)]/90 text-black text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
                    {img.caption}
                  </span>
                  <p className="text-xs text-white font-medium line-clamp-1">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Transparent Pricing Packages */}
      <section className="py-16 md:py-24 bg-[#0A0704] border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              TRANSPARENT ESTIMATES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Event Planning Packages in {data.location}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              Clear itemized pricing reflecting complete turnkey production. Custom packages available upon consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingItems.map((pkg, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.isPopular
                    ? "bg-gradient-to-b from-[#1E160D] via-[#161009] to-[#120D08] border-2 border-[var(--color-brand-gold)] shadow-[0_0_35px_rgba(201,168,76,0.25)] md:-translate-y-2"
                    : "bg-[#130E0A] border border-[#261C12] hover:border-[var(--color-brand-gold)]/50"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--color-brand-gold)] text-black text-[10px] font-mono uppercase font-bold tracking-widest shadow-md">
                    MOST REQUESTED
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-mono uppercase text-gray-400 block mb-1">
                    {pkg.guestCount}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#291F15]">
                    <span className="text-xs font-mono text-gray-400">Starting from</span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-brand-gold)]">
                      {pkg.startingPrice}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919923590038?text=I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package%20for%20${encodeURIComponent(data.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? "bg-[var(--color-brand-gold)] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(201,168,76,0.5)]"
                      : "bg-[#1E1710] text-gray-200 border border-[var(--color-brand-gold)]/40 hover:bg-[var(--color-brand-gold)] hover:text-black"
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Real Case Study Spotlight */}
      {data.caseStudy && (
        <section className="py-16 md:py-24 border-b border-[#22180F]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17110B] via-[#1C140D] to-[#17110B] border border-[var(--color-brand-gold)]/40 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold)] text-[10px] font-mono uppercase font-bold tracking-widest mb-4">
                <span>LOCAL CASE STUDY SPOTLIGHT</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {data.caseStudy.headline || (typeof data.caseStudy.testimonial === "object" ? data.caseStudy.testimonial?.clientName : "Local Success Story")}
              </h2>
              
              {typeof data.caseStudy.testimonial === "object" && (
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mb-6">
                  <span className="text-[var(--color-brand-gold)]">{data.caseStudy.testimonial.venueName}</span>
                  <span>•</span>
                  <span>{data.caseStudy.testimonial.clientRoleOrEvent}</span>
                </div>
              )}

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                <p>{data.caseStudy.story}</p>
                {typeof data.caseStudy.testimonial === "object" && data.caseStudy.testimonial.quote && (
                  <blockquote className="pt-4 mt-4 border-t border-[#2F2317] italic text-[var(--color-brand-gold)] font-serif text-base sm:text-lg">
                    "{data.caseStudy.testimonial.quote}"
                  </blockquote>
                )}
                {typeof data.caseStudy.testimonial === "string" && (
                  <blockquote className="pt-4 mt-4 border-t border-[#2F2317] italic text-[var(--color-brand-gold)] font-serif text-base sm:text-lg">
                    "{data.caseStudy.testimonial}"
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. Interactive FAQ Accordion (Targeted for Google AI Overviews & Snippets) */}
      <section className="py-16 md:py-24 bg-[#0A0704] border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              EXPERT ANSWERS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions: {data.targetKeyword}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              Clear, practical advice regarding venues, weather contingencies, noise laws, and logistics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#120D09] border border-[#271C12] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[var(--color-brand-gold)] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-brand-gold)] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-[#1C140D]">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Hub-and-Spoke Internal Mesh Links */}
      <section className="py-16 md:py-24 border-b border-[#22180F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              EXPLORE MORE DESTINATIONS & SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Related Event Guides & Nearby Hubs
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[...(data.relatedServiceSlugs ?? []), ...(data.nearbyLocationSlugs ?? [])].map((slug) => {
              const formattedName = slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="px-4 py-2.5 rounded-xl bg-[#140E0A] border border-[var(--color-brand-gold)]/30 text-xs text-gray-200 hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                >
                  <span>{formattedName}</span>
                  <ArrowRight className="w-3 h-3 text-[var(--color-brand-gold)]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0E0A07]/95 backdrop-blur-md border-t border-[var(--color-brand-gold)]/30 p-3 sm:hidden flex items-center gap-2">
        <a
          href="tel:+919923590038"
          className="flex-1 py-3 rounded-xl bg-[#1E1710] border border-[var(--color-brand-gold)]/40 text-white font-bold text-xs flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/919923590038?text=Hello%20Westend%20Events!%20Inquiring%20about%20${encodeURIComponent(data.targetKeyword)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-xl bg-[var(--color-brand-gold)] text-black font-bold text-xs flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
