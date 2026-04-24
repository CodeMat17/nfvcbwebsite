"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsItems } from "@/lib/news-data";

export function NewsTicker() {
  const items = [
    ...newsItems.map((n) => ({ text: n.title, href: `/news/${n.slug}` })),
    { text: "NFVCB classifies all films and videos — imported or locally produced", href: "/policy" },
    { text: "Apply for a distributor licence — four categories available", href: "/industry/licensing" },
    { text: "NFVCB has 6 zonal offices and 30+ state centres nationwide", href: "/zones" },
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-nfvcb-green text-white overflow-hidden flex items-center h-9 select-none">
      <div className="shrink-0 bg-nfvcb-dark px-4 h-full flex items-center z-10">
        <span className="text-[10px] font-black uppercase tracking-widest text-nfvcb-gold whitespace-nowrap">
          Latest
        </span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {doubled.map(({ text, href }, i) => (
            <Link
              key={i}
              href={href}
              className="text-xs font-medium text-white/90 hover:text-white transition-colors shrink-0 inline-flex items-center gap-2"
            >
              <span className="text-nfvcb-gold text-[10px]">◆</span>
              {text}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
