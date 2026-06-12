"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "wedding",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry. Our luxury event specialists will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              Whether you're planning a royal destination wedding or a massive corporate conference, our in-house production team is ready to bring your vision to life. No outsourcing. No compromises.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="text-[11px] text-[#4A3E31] uppercase tracking-widest mb-1 font-semibold">Direct Line</h4>
                  <p className="text-[16px] text-[#0E0A07] font-serif font-medium">+91 99235 90037</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="text-[11px] text-[#4A3E31] uppercase tracking-widest mb-1 font-semibold">Email Us</h4>
                  <p className="text-[16px] text-[#0E0A07] font-serif font-medium">westendeventagarwal@gmail.com</p>
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

                {/* Event Type */}
                <div className="relative">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] text-[14px] px-4 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors appearance-none"
                  >
                    <option value="wedding">Destination Wedding</option>
                    <option value="corporate">Corporate Event / Conference</option>
                    <option value="concert">Live Concert / Entertainment</option>
                    <option value="activation">Brand Activation</option>
                    <option value="other">Other</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#4A3E31" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your event (Location, guest count, vision...)"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#FAF6EF] border border-[#0E0A07]/10 text-[#0E0A07] placeholder-[#4A3E31]/50 text-[14px] px-6 py-4 focus:outline-none focus:border-[var(--color-brand-gold)]/50 transition-colors resize-none"
                />

                <button 
                  type="submit"
                  className="group relative w-full bg-[#0E0A07] text-[var(--color-brand-gold)] py-5 px-8 flex justify-center items-center gap-3 overflow-hidden mt-2 border-none"
                >
                  <div className="absolute inset-0 bg-[var(--color-brand-gold)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                  <span className="relative z-10 text-[13px] font-bold uppercase tracking-widest group-hover:text-[#0E0A07] transition-colors duration-500">Submit Enquiry</span>
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
