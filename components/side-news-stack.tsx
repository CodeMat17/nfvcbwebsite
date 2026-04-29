"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { newsItems } from "@/lib/news-data";

function categoryLabel(cat: string) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Notice";
  return "News";
}
function categoryColor(cat: string) {
  if (cat === "press-release") return "bg-[#009f3b] text-white";
  if (cat === "announcement") return "bg-[#fea600] text-black";
  return "bg-blue-600 text-white";
}
function fmtRelative(d: string) {
  const diff = Math.floor((Date.now() - new Date(d).getTime()) / 60000);
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / 1440)}d ago`;
}

const PAGE_SIZE = 4;

export function SideNewsStack() {
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

      {/* Footer */}
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
