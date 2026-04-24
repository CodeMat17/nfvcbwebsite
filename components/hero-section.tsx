"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Film } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { newsItems } from "@/lib/news-data";

/* ─── classification symbols ─── */
const classificationSymbols = [
  { file: "/classification_symbols/symbol_G.jpg",   label: "G",   desc: "General Audience" },
  { file: "/classification_symbols/symbol_PG.jpg",  label: "PG",  desc: "Parental Guidance" },
  { file: "/classification_symbols/symbol_12.jpg",  label: "12",  desc: "12 & Over" },
  { file: "/classification_symbols/symbol_12A.png", label: "12A", desc: "Accompanied Under-12" },
  { file: "/classification_symbols/symbol_15.jpg",  label: "15",  desc: "15 & Over" },
  { file: "/classification_symbols/symbol_18.jpg",  label: "18",  desc: "Adults Only" },
  { file: "/classification_symbols/symbol_RE.jpg",  label: "RE",  desc: "Restricted Exhibition" },
];

/* ─── helpers ─── */
function categoryLabel(cat: string) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Notice";
  return "News";
}
function categoryColor(cat: string) {
  if (cat === "press-release") return "bg-[#009f3b] text-white";
  if (cat === "announcement")  return "bg-[#fea600] text-black";
  return "bg-blue-600 text-white";
}
function fmtRelative(d: string) {
  const diff = Math.floor((Date.now() - new Date(d).getTime()) / 60000);
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / 1440)}d ago`;
}

/* ─── news stack (MSN style) ─── */
const PAGE_SIZE = 4;

function SideNewsStack() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const pages = Math.ceil(newsItems.length / PAGE_SIZE);

  function go(next: number, d: number) {
    setDir(d);
    setPage((next + pages) % pages);
  }

  const visible = newsItems.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="flex flex-col h-72 lg:h-full border border-border rounded-2xl overflow-hidden bg-card">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#fea600]" />
          <span className="text-xs font-black uppercase tracking-widest text-foreground">Top Stories</span>
        </div>
        {/* <button className="text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-lg font-bold leading-none">···</span>
        </button> */}
      </div>

      {/* Stories */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={dir} initial={false} mode="wait">
          <motion.div
            key={page}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
              exit:  (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.25 } }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col overflow-y-auto"
          >
            {visible.map((item, i) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className={`group flex flex-col gap-1 px-4 py-3 hover:bg-muted/50 transition-colors ${i < visible.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${categoryColor(item.category)}`}>
                    {categoryLabel(item.category)}
                  </span>
                  <span className="text-[10px] text-muted-foreground">NFVCB · {fmtRelative(item.date)}</span>
                </div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </p>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer: prev/next dots + see more */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border shrink-0">
        <div className="flex items-center gap-1">
          <button
            onClick={() => go(page - 1, -1)}
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Previous"
          >
            <ChevronLeft className="h-3 w-3" />
          </button>
          <div className="flex gap-1 items-center">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > page ? 1 : -1)}
                aria-label={`Page ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === page ? 16 : 6,
                  height: 6,
                  background: i === page ? "#009f3b" : "var(--border)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => go(page + 1, 1)}
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Next"
          >
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
        <Link href="/news" className="text-[11px] font-bold text-primary hover:underline">
          See more
        </Link>
      </div>
    </div>
  );
}

/* ─── classification panel ─── */
const SYMBOL_MS = 3500;

function ClassificationPanel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const advance = useCallback(() => {
    setDir(1);
    setIndex((prev) => (prev + 1) % classificationSymbols.length);
  }, []);

  useEffect(() => {
    const t = setInterval(advance, SYMBOL_MS);
    return () => clearInterval(t);
  }, [advance]);

  const sym = classificationSymbols[index];

  return (
    <div className="flex flex-col h-72 lg:h-full border border-border rounded-2xl overflow-hidden bg-card">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border shrink-0">
        <Film className="h-3.5 w-3.5 text-[#009f3b] shrink-0" />
        <span className="text-xs font-black uppercase tracking-widest text-foreground">Film Ratings</span>
      </div>

      {/* Sliding symbol — right-to-left, fills remaining height */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={dir} initial={false} mode="wait">
          <motion.div
            key={sym.label}
            custom={dir}
            variants={{
              enter:  () => ({ x: "100%", opacity: 0 }),
              center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
              exit:   () => ({ x: "-100%", opacity: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col"
          >
            <Link href="/classifications" className="group flex flex-col flex-1 min-h-0">
              {/* Image fills top portion */}
              <div className="flex-1 min-h-0 overflow-hidden bg-muted/20 flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={sym.file}
                    alt={sym.label}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="px-4 py-3 shrink-0 bg-card border-t border-border">
                {/* <p className="text-sm font-black text-foreground leading-none">{sym.label}</p> */}
                <p className="text-center text-muted-foreground mt-0.5 font-bold group-hover:text-primary transition-colors leading-snug">
                  {sym.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer: dots left, see more right */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border shrink-0">
        <div className="flex gap-1.5 items-center">
          {classificationSymbols.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
              aria-label={classificationSymbols[i].label}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? 16 : 6,
                height: 6,
                background: i === index ? "#009f3b" : "var(--border)",
              }}
            />
          ))}
        </div>
        <Link href="/classifications" className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5">
          See more <ArrowRight className="h-2.5 w-2.5" />
        </Link>
      </div>
    </div>
  );
}

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
