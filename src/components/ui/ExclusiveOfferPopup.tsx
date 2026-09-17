"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Phone, Mail, MessageCircle, CheckCircle2, ArrowRight, Gift, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface PopupOfferConfig {
  enabled: boolean;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  perks?: string[];
  phone?: string;
  email?: string;
  buttonText: string;
  buttonLink: string;
  effectStyle: "gold-flakes" | "snow-flakes" | "sparkles" | "petals";
  showDelaySeconds: number;
  fontFamily?: string;
}

export function ExclusiveOfferPopup() {
  const [popupConfig, setPopupConfig] = useState<PopupOfferConfig | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isDismissedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Synchronize initial dismissal state from sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("we_offer_dismissed_session") === "true") {
        isDismissedRef.current = true;
      }
    }
  }, []);

  const handleDismiss = () => {
    isDismissedRef.current = true;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("we_offer_dismissed_session", "true");
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        if (isDismissedRef.current) return;
        const dismissed = typeof window !== "undefined" && sessionStorage.getItem("we_offer_dismissed_session") === "true";
        if (dismissed) {
          isDismissedRef.current = true;
          return;
        }

        const res = await fetch("/api/popup", { cache: "no-store" });
        const data = await res.json();
        if (data.success && data.popup) {
          const config: PopupOfferConfig = data.popup;
          setPopupConfig(config);

          if (!config.enabled) {
            setIsOpen(false);
            return;
          }

          // If not dismissed and timer not set yet, schedule opening
          if (!timerRef.current && !isDismissedRef.current) {
            const delaySeconds = config.showDelaySeconds && config.showDelaySeconds > 0 ? config.showDelaySeconds : 8;
            timerRef.current = setTimeout(() => {
              const currentDismissed = typeof window !== "undefined" && sessionStorage.getItem("we_offer_dismissed_session") === "true";
              if (!isDismissedRef.current && !currentDismissed) {
                setIsOpen(true);
              }
              timerRef.current = null;
            }, delaySeconds * 1000);
          }
        }
      } catch (err) {
        // silent fetch error
      }
    };

    fetchConfig();
    const interval = setInterval(fetchConfig, 5000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // Multi-color colorful festive particle canvas
  useEffect(() => {
    if (!isOpen || !popupConfig || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const count = 30;
    const colors = [
      "hsla(45, 100%, 60%, ",   // Vivid Gold
      "hsla(340, 95%, 65%, ",  // Vibrant Rose Ruby
      "hsla(160, 90%, 55%, ",  // Vibrant Festive Emerald
      "hsla(280, 85%, 65%, ",  // Royal Violet
      "hsla(25, 100%, 60%, "   // Festive Amber
    ];

    const particles = Array.from({ length: count }, () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 1.1 + 0.5,
        speedX: Math.sin(Math.random() * Math.PI) * 0.7,
        opacity: Math.random() * 0.75 + 0.25,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.02) * p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        ctx.fillStyle = `${p.color}${p.opacity})`;
        if (popupConfig.effectStyle === "sparkles") {
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos((i * Math.PI) / 2) * p.size * 1.8, Math.sin((i * Math.PI) / 2) * p.size * 1.8);
            ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (p.size / 2.2), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (p.size / 2.2));
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size * 1.4, p.size * 0.75);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen, popupConfig]);

  if (!popupConfig || !popupConfig.enabled) return null;

  const phoneNum = popupConfig.phone || "+91 99235 90038";
  const emailAddr = popupConfig.email || "westendagarwal@gmail.com";
  const cleanPhone = phoneNum.replace(/[^0-9]/g, "");

  const activeFont = popupConfig.fontFamily || "Cormorant Garamond";
  const googleFontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(activeFont)}:ital,wght@0,400;0,600;0,700;1,400&display=swap`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 font-sans overflow-hidden">
          {/* Dynamic Google Font Import */}
          <link rel="stylesheet" href={googleFontUrl} />

          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-[#060403]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Compact, Ultra-Creative Colorful Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 24, stiffness: 320 }}
            className="relative w-full max-w-[350px] sm:max-w-[420px] bg-[#0E0B08] p-[1.5px] rounded-3xl shadow-[0_15px_50px_rgba(255,215,0,0.25)] overflow-hidden z-10"
          >
            {/* Vibrant Multi-Color Gradient Outer Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700] via-[#FF4081] to-[#00E676] rounded-3xl opacity-80 animate-pulse pointer-events-none" />

            {/* Prominent High-Visibility Close Button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close offer modal"
              className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#1A140F]/90 border border-[#FFD700]/60 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0E0B08] transition-all cursor-pointer z-50 shadow-lg active:scale-90 touch-manipulation flex items-center justify-center"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="relative w-full bg-[#0E0B08] rounded-[23px] p-4 sm:p-5 overflow-hidden text-center space-y-3.5 max-h-[85vh] overflow-y-auto scrollbar-none">
              {/* Animated Particle Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
              />

              {/* Colorful Glow Background Accents */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#FFD700]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#00E676]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Top Colorful Badge */}
              <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#FFD700]/20 via-[#FF4081]/20 to-[#00E676]/20 border border-[#FFD700]/40 text-[#FFD700] text-[10px] font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#FFD700]" />
                <span>{popupConfig.badge || "EXCLUSIVE FESTIVE OFFER"}</span>
              </div>

              {/* Title & Subtitle with Admin Selected Font */}
              <div className="relative z-10 space-y-0.5">
                <h2
                  style={{ fontFamily: `'${activeFont}', serif` }}
                  className="text-2xl sm:text-3xl font-bold text-[#FFF5E4] leading-tight tracking-wide"
                >
                  {popupConfig.title || "Grand Wedding Season Offer"}
                </h2>
                {popupConfig.subtitle && (
                  <p
                    style={{ fontFamily: `'${activeFont}', serif` }}
                    className="text-xs sm:text-sm text-[#FFD700] italic font-medium"
                  >
                    {popupConfig.subtitle}
                  </p>
                )}
              </div>

              {/* Key Perks Box - Compact & Vivid */}
              <div className="relative z-10 p-3 rounded-xl bg-[#16110B]/90 border border-[#FFD700]/25 text-left space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2 text-[#FFE0B2]">
                  <Star className="w-3.5 h-3.5 text-[#FFD700] shrink-0 fill-current" />
                  <span><strong>100% In-House Production:</strong> Stage, Décor & Florals</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFE0B2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span><strong>Free Setup:</strong> VRX Sound System & Stage Pyros</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFE0B2]">
                  <Gift className="w-3.5 h-3.5 text-[#FF4081] shrink-0" />
                  <span><strong>NRI Special:</strong> Dedicated Senior Event Director</span>
                </div>
              </div>

              {/* Direct Instant WhatsApp Chat Button */}
              <div className="relative z-10 pt-0.5 space-y-2">
                <a
                  href={`https://wa.me/${cleanPhone}?text=Hello%20Westend%20Events!%20I%20saw%20your%20Exclusive%20Offer%20on%20website%20and%20would%20like%20to%20enquire.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDismiss}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#00C853] via-[#00E676] to-[#1DE9B6] text-[#041A0E] font-bold text-xs font-mono shadow-md shadow-[#00E676]/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#041A0E] group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Direct: {phoneNum}</span>
                </a>

                {/* Primary Form CTA */}
                <a
                  href={popupConfig.buttonLink || "#contact"}
                  onClick={handleDismiss}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FF8F00] text-[#0E0B08] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FFD700]/20 hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{popupConfig.buttonText || "Plan Your Event"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Call & Email Contact Row */}
              <div className="relative z-10 flex items-center justify-center gap-3 text-[10px] font-mono text-[#B0A090] pt-0.5 border-t border-[#261E16]">
                <a href={`tel:${cleanPhone}`} className="hover:text-[#FFD700] flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#FFD700]" />
                  <span>{phoneNum}</span>
                </a>
                <span>&bull;</span>
                <a href={`mailto:${emailAddr}`} className="hover:text-[#FFD700] flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#FFD700]" />
                  <span>{emailAddr}</span>
                </a>
              </div>

              {/* Secondary Explicit Dismiss Link */}
              <div className="relative z-10 pt-1">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-[11px] text-[#A09080] hover:text-[#FFD700] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
