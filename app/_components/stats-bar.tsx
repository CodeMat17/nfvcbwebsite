"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Film, Globe, Users } from "lucide-react";

const stats = [
  { label: "Years Serving Nigeria", value: "31+", icon: Award, color: "text-[#009f3b]", ring: "bg-[#009f3b]/15 border border-[#009f3b]/30" },
  { label: "Films Classified", value: "50K+", icon: Film, color: "text-[#fea600]", ring: "bg-[#fea600]/15 border border-[#fea600]/30" },
  { label: "Licensed Outlets", value: "10K+", icon: Globe, color: "text-[#009f3b]", ring: "bg-[#009f3b]/15 border border-[#009f3b]/30" },
  { label: "Zonal Offices", value: "6", icon: Users, color: "text-[#fea600]", ring: "bg-[#fea600]/15 border border-[#fea600]/30" },
];

export function StatsBar() {
  return (
    <section className="relative py-14 overflow-hidden" aria-label="NFVCB at a glance">
      <div className="absolute inset-0 bg-[#001506]" />
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#009f3b]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#009f3b]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ label, value, icon: Icon, color, ring }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${ring}`}>
                <Icon className={`h-7 w-7 ${color}`} aria-hidden />
              </div>
              <dd className={`text-4xl sm:text-5xl font-black mb-1.5 ${color}`}>{value}</dd>
              <dt className="text-xs text-white/50 font-medium uppercase tracking-wider">{label}</dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
