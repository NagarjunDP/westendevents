"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Phone, User } from "lucide-react";
import { useState, useEffect } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    guestCount: "",
    budget: "",
    type: "wedding",
    message: ""
  });

  useEffect(() => {
    const handleEventTypeSelect = (e: CustomEvent) => {
      if (e.detail) {
        setFormData(prev => ({ ...prev, type: e.detail }));
      }
    };
    window.addEventListener("selectEventType" as any, handleEventTypeSelect);
    return () => window.removeEventListener("selectEventType" as any, handleEventTypeSelect);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
        
        // Build pre-filled WhatsApp enquiry message
        const messageText = `✨ *New Westend Events Proposal Enquiry* ✨\n\n` +
          `👤 *Name:* ${formData.name}\n` +
          `📞 *Phone:* ${formData.phone}\n` +
          `✉️ *Email:* ${formData.email}\n` +
          `📅 *Event Date:* ${formData.date || "TBD"}\n` +
          `🎉 *Event Type:* ${formData.type}\n` +
          `📍 *Location:* ${formData.location || "Lonavala / TBD"}\n` +
          `👥 *Guest Count:* ${formData.guestCount || "TBD"}\n` +
          `💰 *Approx. Budget:* ${formData.budget || "Flexible"}\n` +
          `💬 *Details:* ${formData.message}`;

        const encodedMsg = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/919923590038?text=${encodedMsg}`;

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          location: "",
          guestCount: "",
          budget: "",
          type: "wedding",
          message: ""
        });

        // Trigger WhatsApp redirect with prefilled details
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 800);
      } else {
        setSubmitError(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FAF6EF] overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-brand-gold)]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-blush)]/50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-5/12"
          >
            <div className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.3em] mb-6 font-bold">
              PLAN YOUR EVENT
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0E0A07] mb-8 leading-[1.1]">
              Let's create something <span className="text-[var(--color-brand-gold)] italic font-light">extraordinary.</span>
            </h2>
            <p className="font-sans text-[16px] text-[#4A3E31] leading-relaxed mb-12">
              Whether you're planning a royal destination wedding or a large-scale corporate conference, our in-house production team is ready to bring your vision to life. No outsourcing. No compromises.
            </p>

            <div className="flex flex-col gap-8">
              {/* Phone & WhatsApp */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="text-[11px] text-[#4A3E31] uppercase tracking-widest mb-1 font-semibold">Direct Phone & WhatsApp</h4>
                  <div className="text-[18px] text-[#0E0A07] font-serif font-bold">
                    <a href="tel:+919923590038" className="hover:text-[var(--color-brand-gold)] transition-colors">+91 99235 90038</a>
                  </div>
                  <div className="mt-2">
                    <a 
                      href="https://wa.me/919923590038?text=Hello%20Westend%20Events%2C%20I%20would%20like%20to%20plan%20an%20event." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 text-xs font-mono font-bold hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Direct Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="text-[11px] text-[#4A3E31] uppercase tracking-widest mb-1 font-semibold">Official Email Addresses</h4>
                  <div className="flex flex-col gap-2 pt-1">
                    <a href="mailto:westendagarwal@gmail.com" className="text-[15px] sm:text-[16px] text-[#0E0A07] font-serif font-medium hover:text-[var(--color-brand-gold)] transition-colors block">
                      westendagarwal@gmail.com
                    </a>
                    <a href="mailto:info@westendevent.com" className="text-[15px] sm:text-[16px] text-[#0E0A07] font-serif font-medium hover:text-[var(--color-brand-gold)] transition-colors block">
                      info@westendevent.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Page */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0 bg-[#E1306C]/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] text-[#4A3E31] uppercase tracking-widest mb-1 font-semibold">Official Instagram Page</h4>
                  <div className="text-[16px] text-[#0E0A07] font-serif font-bold">
                    <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
                      @westendevents
                    </a>
                  </div>
                  <div className="mt-1.5">
                    <a 
                      href="https://instagram.com/westendevents" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E1306C] hover:underline font-bold"
                    >
                      <span>Follow on Instagram</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative border border-[#0E0A07]/5">
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-brand-gold)]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-brand-gold)]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--color-brand-gold)]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-brand-gold)]" />

              {/* Google Rating Proof Badge */}
              <div className="mb-6 p-4 rounded-xl bg-[#FAF6EF] border border-[var(--color-brand-gold)]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#4285F4]/30 flex items-center justify-center font-bold text-lg text-[#4285F4] shadow-sm">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <span>★ 4.9 / 5.0</span>
                      <span className="text-[#4A3E31] font-normal">• 100+ Verified Reviews</span>
                    </div>
                    <span className="text-[11px] text-[#4A3E31] font-mono block">Google Business Profile • Lonavla & Pune</span>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Lonavla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex text-[11px] font-mono text-[#4285F4] font-bold hover:underline"
                >
                  Verify Reviews →
                </a>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A3E31]/50" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-12 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A3E31]/50" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-12 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A3E31]/50" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-12 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>

                  {/* Date Selection */}
                  <div className="relative">
                    <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A3E31]/50" />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-12 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                      style={{ colorScheme: "light" }}
                    />
                  </div>
                </div>

                {/* Event Type & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Type Dropdown with Separate Corporate Option */}
                  <div className="relative">
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] text-[14px] px-4 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors appearance-none"
                    >
                      <option value="wedding">Destination Wedding</option>
                      <option value="corporate">Corporate Event / Conference</option>
                      <option value="corporate-offsite">Corporate Offsite & Team Retreat</option>
                      <option value="corporate-launch">Corporate Product Launch & Gala</option>
                      <option value="luxury-wedding">Luxury Local Wedding</option>
                      <option value="concert">Live Concert / Festival</option>
                      <option value="other">Other Event</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#4A3E31" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Location / Venue City */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Event Location (e.g. Lonavla, Goa...)" 
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-6 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Guest Count & Approx Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Guest Count */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="guestCount"
                      placeholder="Approx. Number of Guests" 
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[16px] px-6 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>

                  {/* Approx Budget */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="budget"
                      placeholder="Approx. Budget (e.g. ₹15L - ₹50L+)" 
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[16px] px-6 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Requirement */}
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your event requirements (Vision, specific decor, technical sound/lighting needs...)"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[16px] px-6 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors resize-none"
                />

                {submitSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded flex items-center justify-between">
                    <span>Thank you for your proposal request! Our luxury event specialists will contact you shortly on phone/WhatsApp.</span>
                    <button type="button" onClick={() => setSubmitSuccess(false)} className="text-xs text-emerald-600 font-bold ml-2 underline">Send another</button>
                  </div>
                )}

                {submitError && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded">
                    {submitError}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-[#0E0A07] text-[var(--color-brand-gold)] py-5 px-8 flex justify-center items-center gap-3 overflow-hidden mt-2 border-none disabled:opacity-50 rounded-xl"
                >
                  <div className="absolute inset-0 bg-[var(--color-brand-gold)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                  <span className="relative z-10 text-[13px] font-bold uppercase tracking-widest group-hover:text-[#0E0A07] transition-colors duration-500">
                    {isSubmitting ? "Submitting..." : "Get Event Proposal"}
                  </span>
                  <ArrowRight size={16} className="relative z-10 group-hover:text-[#0E0A07] transition-colors duration-500" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
