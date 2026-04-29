"use client";

import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/hero-carousel";
import { ClassificationPanel } from "@/components/classification-panel";
import { SideNewsStack } from "@/components/side-news-stack";

/* ─── magic particles ─── */
function MagicParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#009f3b]/40"
          style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 4) * 18}%` }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`g-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-[#fea600]/50"
          style={{ left: `${15 + i * 14}%`, top: `${50 + (i % 3) * 15}%` }}
          animate={{ y: [6, -6, 6], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </div>
  );
}

/* ─── exported section ─── */
export function HeroSection() {
  return (
    <section className="relative bg-background py-6 border-b border-border overflow-hidden">
      <MagicParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Mobile:  1 column stacked
          Large:   3 columns — carousel wide (5fr), news stack (3fr), classification (2fr)
          All columns stretch to the same height.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr_2fr] gap-4 lg:items-stretch">
          {/* Col 1 — Carousel */}
          <div className="flex flex-col">
            <HeroCarousel />
          </div>

          {/* Col 2 & 3 — News stack + Classification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:contents">
            <SideNewsStack />
            <ClassificationPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
