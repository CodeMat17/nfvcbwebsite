"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MissionCinema() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" aria-labelledby="mission-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001506] via-[#002b0e] to-[#001506]" />
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none" aria-hidden>
        <Image src="/logo.webp" alt="" width={500} height={500} className="object-contain" />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col gap-1 py-2 opacity-25" aria-hidden>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mx-auto w-3 h-4 rounded-sm border border-white/30 bg-black/40" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col gap-1 py-2 opacity-25" aria-hidden>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="mx-auto w-3 h-4 rounded-sm border border-white/30 bg-black/40" />
        ))}
      </div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#009f3b]/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Badge className="mb-5 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30 text-xs font-bold px-4 py-1.5">
            Our Mission
          </Badge>
          <h2 id="mission-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 text-balance leading-snug">
            &ldquo;To contribute to the positive transformation of the Nigerian society through the
            censorship of films and video works whilst balancing the need to preserve{" "}
            <span className="text-[#009f3b]">freedom of expression</span>{" "}
            within the law.&rdquo;
          </h2>
          <p className="text-white/50 mb-8">— NFVCB Mission Statement</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#009f3b] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#009f3b]/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#009f3b]/25 text-sm"
            >
              About NFVCB <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/service-charter"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Service Charter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
