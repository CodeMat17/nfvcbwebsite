"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Film, Globe, Users } from "lucide-react";

/* Alternating green/gold was applied per-stat via inline hex. The figures are
   the point here, so all four now share one treatment and the gold is spent
   on the rules that bracket the band instead. */
const stats = [
  { label: "Years Serving Nigeria", value: "41+", icon: Award },
  { label: "Films Classified", value: "50K+", icon: Film },
  { label: "Licensed Outlets", value: "10K+", icon: Globe },
  { label: "Zonal Offices", value: "6", icon: Users },
];

export function StatsBar() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-nfvcb-dark" aria-label="NFVCB at a glance">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />

      <div className="section section-y relative z-10">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto mb-4 grid h-13 w-13 place-items-center rounded-2xl border border-primary/30 bg-primary/15">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <dd className="mb-1.5 text-h1 font-black text-white">{value}</dd>
              <dt className="text-overline uppercase text-white/55">{label}</dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
