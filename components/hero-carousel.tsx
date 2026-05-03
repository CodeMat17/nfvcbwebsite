"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    badge: "Licensing",
    title: "Get Licensed — Distribute Films Legally Across Nigeria",
    subtitle:
      "Four distributor licence categories to fit every business scope: Online, National, Regional, and Community. Apply today.",
    cta: { label: "Licensing Requirements", href: "/industry/licensing" },
    ctaSecondary: { label: "Industry Info", href: "/industry" },
    accent: "#009f3b",
    gradient: "from-[#001506] via-[#003d14] to-[#001506]",
    image: "/shaibu.jpeg",
  },
  {
    badge: "Our Mandate",
    title: "Nigeria's Premier Film & Video Regulatory Authority",
    subtitle:
      "Empowering Nollywood, protecting audiences, and preserving culture since 1993 — the NFVCB classifies every film you watch.",
    cta: { label: "About NFVCB", href: "/about" },
    ctaSecondary: { label: "Submit a Film", href: "/industry" },
    accent: "#009f3b",
    gradient: "from-[#001506] via-[#002b0e] to-[#001506]",
    image: "",
  },
  {
    badge: "Film Classification",
    title: "Know Before You Watch — Nigeria's Classification System",
    subtitle:
      "From G to RE, every film carries an NFVCB rating. Our classification system protects children, informs parents, and preserves creative freedom.",
    cta: { label: "Classification Policy", href: "/policy" },
    ctaSecondary: { label: "Ratings Guide", href: "/policy#categories" },
    accent: "#fea600",
    gradient: "from-[#1a0e00] via-[#2b1800] to-[#001506]",
    image: "/classification_symbols/symbol_G.jpg",
  },

  {
    badge: "Enforcement",
    title: "Protecting Nigeria's Film Market From Illegal Content",
    subtitle:
      "NFVCB's field operations team monitors compliance nationwide — combating piracy, uncensored content, and unlicensed distribution.",
    cta: { label: "Law Enforcement", href: "/law-enforcement" },
    ctaSecondary: { label: "Our Policy", href: "/policy" },
    accent: "#fea600",
    gradient: "from-[#001506] via-[#1a0a00] to-[#001506]",
  },
];

const AUTOPLAY_MS = 5500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + slides.length) % slides.length);
    },
    []
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
  }, [index, go]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const slide = slides[index];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="relative overflow-hidden rounded-2xl h-[400px] sm:h-[360px] lg:h-[380px] group">
      {/* Background gradient */}
      <AnimatePresence custom={direction} initial={false} mode="sync">
        <motion.div
          key={`bg-${index}`}
          custom={direction}
          variants={reduced ? {} : variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        />
      </AnimatePresence>

      {/* Accent top strip */}
      <motion.div
        key={`strip-${index}`}
        className="absolute top-0 left-0 right-0 h-[3px] z-20 pointer-events-none"
        style={{ background: slide.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Ghost lettering */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="text-[26vw] lg:text-[20vw] font-black text-white/[0.025] tracking-tighter leading-none">
          NFVCB
        </span>
      </div>

      {/* Ambient glow orb */}
      <motion.div
        key={`orb-${index}`}
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${slide.accent}22 0%, transparent 70%)` }}
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background image or logo watermark */}
      {slide.image ? (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Image src={slide.image} alt="" fill className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-[0.1] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" width={280} height={280} className="object-contain" />
        </div>
      )}

      {/* Animated film perfs — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-7 flex flex-col gap-1 py-2 opacity-30" aria-hidden>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mx-auto w-4 h-5 rounded-sm border border-white/40 bg-black/30" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-7 flex flex-col gap-1 py-2 opacity-30" aria-hidden>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mx-auto w-4 h-5 rounded-sm border border-white/40 bg-black/30" />
        ))}
      </div>

      {/* Slide content */}
      <AnimatePresence custom={direction} initial={false} mode="wait" >
        <motion.div
          key={index}
          custom={direction}
          variants={reduced ? {} : {
            enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
            center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 } },
            exit: (d) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.35 } }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 mb-4"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge
              className="mb-2 text-[10px] font-bold px-2 py-0.5"
              style={{ background: `${slide.accent}22`, color: slide.accent, borderColor: `${slide.accent}44` }}
            >
              {slide.badge}
            </Badge>
          </motion.div>

          <motion.h2
            className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug mb-3 max-w-lg text-balance"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            {slide.title}
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.45 }}
          >
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg text-[#001506] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: slide.accent, boxShadow: `0 0 0 0 ${slide.accent}` }}
            >
              {slide.cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              {slide.ctaSecondary.label}
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      <button
        onClick={() => { go(index - 1, -1); startTimer(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => { go(index + 1, 1); startTimer(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm pb-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { go(i, i > index ? 1 : -1); startTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === index ? 24 : 8,
              height: 8,
              background: i === index ? slide.accent : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <motion.div
          className="h-full"
          style={{ background: slide.accent }}
          key={index}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}
