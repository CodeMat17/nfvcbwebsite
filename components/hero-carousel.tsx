"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from "lucide-react";

const slides = [
  {
    badge: "Licensing",
    title: "Distribute films legally across Nigeria",
    subtitle:
      "Four distributor licence categories to fit every business scope: Online, National, Regional and Community.",
    cta: { label: "Licensing Requirements", href: "/industry/licensing" },
    ctaSecondary: { label: "Industry Info", href: "/industry" },
    image: "/shaibu.jpeg",
  },
  {
    badge: "Our Mandate",
    title: "Nigeria's film and video regulatory authority",
    subtitle:
      "Empowering Nollywood, protecting audiences and preserving culture since 1993 — the NFVCB classifies every film you watch.",
    cta: { label: "About NFVCB", href: "/about" },
    ctaSecondary: { label: "Submit a Film", href: "/industry" },
    image: "/poster2.jpg",
  },
  {
    badge: "Classification",
    title: "Know before you watch",
    subtitle:
      "From G to RE, every film carries an NFVCB rating — protecting children, informing parents and preserving creative freedom.",
    cta: { label: "Classification Policy", href: "/policy" },
    ctaSecondary: { label: "Ratings Guide", href: "/classification" },
    image: "/classifications.jpg",
  },
  {
    badge: "Enforcement",
    title: "Protecting Nigeria's film market",
    subtitle:
      "Field operations monitor compliance nationwide — combating piracy, uncensored content and unlicensed distribution.",
    cta: { label: "Law Enforcement", href: "/law-enforcement" },
    ctaSecondary: { label: "Our Policy", href: "/policy" },
    image: "/nfvcb_ncc.jpg",
  },
];

const AUTOPLAY_MS = 7000;
const EXPO = [0.16, 1, 0.3, 1] as const;

/* The single ambient device kept from the previous hero. Ghost lettering, the
   pulsing orb and the 18 looping particles were removed — four competing
   effects read as noise, and the particles burned battery below the fold. */
function FilmPerfs({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 ${side}-0 z-20 hidden w-6 flex-col justify-around py-3 opacity-25 sm:flex`}
      aria-hidden
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="mx-auto h-4 w-3 rounded-[2px] border border-white/50 bg-black/40" />
      ))}
    </div>
  );
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + slides.length) % slides.length);
  }, []);

  /* WCAG 2.2.2 — auto-advancing content must be pausable. Previously it
     advanced every 5.5s with no pause on hover, focus or by control. */
  useEffect(() => {
    if (paused || reduced) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, reduced]);

  const slide = slides[index];

  const bgVariants = {
    enter: (d: number) => ({ opacity: 0, scale: 1.06, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 1.02, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section
      className="group relative isolate h-[clamp(26rem,62vh,34rem)] w-full overflow-hidden rounded-2xl bg-nfvcb-dark sm:h-[clamp(28rem,60vh,32rem)]"
      aria-roledescription="carousel"
      aria-label="NFVCB highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Imagery — slow Ken Burns drift, disabled under reduced motion */}
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={reduced ? undefined : bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: EXPO }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            animate={reduced ? undefined : { scale: [1.04, 1.12] }}
            transition={{ duration: AUTOPLAY_MS / 1000 + 2, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Scrim — heavy enough that white text clears AA over all four images */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-nfvcb-dark via-nfvcb-dark/75 to-nfvcb-dark/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-nfvcb-dark/80 via-transparent to-transparent"
        aria-hidden
      />

      <FilmPerfs side="left" />
      <FilmPerfs side="right" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5 pb-16 sm:p-8 sm:pb-16 lg:p-10 lg:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduced ? false : "hidden"}
            animate="show"
            exit={reduced ? undefined : "out"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
              out: { opacity: 0, transition: { duration: 0.2 } },
            }}
            className="max-w-2xl"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: EXPO }}
              className="eyebrow mb-3"
            >
              {slide.badge}
            </motion.p>

            {/* The headline was previously text-base…lg:text-xl — smaller than
                body copy. This is the change that carries the whole hero. */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.62, ease: EXPO }}
              className="text-h1 font-black text-balance text-white"
            >
              {slide.title}
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: EXPO }}
              className="mt-3 hidden max-w-lg text-body text-white/75 sm:block"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: EXPO }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              <Link
                href={slide.cta.href}
                className="inline-flex tap items-center gap-2 rounded-lg bg-accent px-5 text-caption font-bold text-nfvcb-dark transition-transform duration-200 hover:-translate-y-0.5"
              >
                {slide.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex tap items-center rounded-lg border border-white/25 px-5 text-caption font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                {slide.ctaSecondary.label}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Announce slide changes to assistive tech */}
      <div className="sr-only" aria-live="polite" aria-atomic>
        Slide {index + 1} of {slides.length}: {slide.title}
      </div>

      {/* Controls — always visible. Previously opacity-0 group-hover:opacity-100,
          which made them permanently unreachable on touch devices. */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 px-4 pb-4 sm:px-6">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.badge}
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className="group/dot grid h-8 place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-accent"
                    : "w-1.5 bg-white/40 group-hover/dot:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            aria-label="Previous slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label="Next slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="absolute inset-x-0 top-0 z-30 h-0.5 bg-white/10">
        {!reduced && !paused && (
          <motion.div
            key={index}
            className="h-full bg-accent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          />
        )}
      </div>
    </section>
  );
}
