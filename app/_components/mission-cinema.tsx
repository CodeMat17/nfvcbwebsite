"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* The pulsing 384px blur orb was removed — it ran an infinite animation for a
   barely-visible effect. The perforation strips stay: they are the site's one
   ambient motif, and repeating them here ties this band to the hero. */
function Perfs({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 ${side}-0 hidden w-6 flex-col justify-around py-2 opacity-20 sm:flex`}
      aria-hidden
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="mx-auto h-4 w-3 rounded-[2px] border border-white/30 bg-black/40" />
      ))}
    </div>
  );
}

export function MissionCinema() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-nfvcb-dark via-primary/15 to-nfvcb-dark"
      aria-labelledby="mission-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]"
        aria-hidden
      >
        <Image src="/logo.webp" alt="" width={480} height={480} className="object-contain" />
      </div>
      <Perfs side="left" />
      <Perfs side="right" />

      <div className="section section-y relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-5 justify-center">Our Mission</p>

          <h2
            id="mission-heading"
            className="text-h2 font-black leading-snug text-balance text-white"
          >
            &ldquo;To contribute to the positive transformation of the Nigerian society through the
            censorship of films and video works whilst balancing the need to preserve{" "}
            <span className="text-accent">freedom of expression</span> within the law.&rdquo;
          </h2>

          <p className="mt-6 text-caption text-white/50">— NFVCB Mission Statement</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              className="inline-flex tap items-center gap-2 rounded-xl bg-primary px-6 text-caption font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              About NFVCB <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/service-charter"
              className="inline-flex tap items-center rounded-xl border border-white/25 px-6 text-caption font-semibold text-white transition-colors hover:bg-white/10"
            >
              Service Charter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
