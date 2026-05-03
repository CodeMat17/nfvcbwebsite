"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Film } from "lucide-react";

const classificationSymbols = [
  { file: "/classification_symbols/symbol_G.jpg",   label: "G",   desc: "General Audience" },
  { file: "/classification_symbols/symbol_PG.jpg",  label: "PG",  desc: "Parental Guidance" },
  { file: "/classification_symbols/symbol_12.jpg",  label: "12",  desc: "12 & Over" },
  { file: "/classification_symbols/symbol_12A.png", label: "12A", desc: "Accompanied Under-12" },
  { file: "/classification_symbols/symbol_15.jpg",  label: "15",  desc: "15 & Over" },
  { file: "/classification_symbols/symbol_18.jpg",  label: "18",  desc: "Adults Only" },
  { file: "/classification_symbols/symbol_RE.jpg",  label: "RE",  desc: "Restricted Exhibition" },
];

const SYMBOL_MS = 3500;

export function ClassificationPanel() {
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
        <Film className="h-4 w-4 text-[#009f3b] shrink-0" />
        <span className="text-sm font-black uppercase tracking-widest text-foreground">Film Ratings</span>
      </div>

      {/* Sliding symbol */}
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
              <div className="px-4 py-3 shrink-0 bg-card border-t border-border">
                <p className="text-center text-muted-foreground mt-0.5 font-bold group-hover:text-primary transition-colors leading-snug">
                  {sym.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
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
