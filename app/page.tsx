import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Film, Shield, BookOpen,
  Globe, Sparkles, Clapperboard, Scale,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { HeroSection } from "@/components/hero-section";
import { FilmOfTheMonth } from "@/components/film-of-the-month";
import { NewsUpdate } from "@/app/_components/news-grid";
import { StatsBar } from "@/app/_components/stats-bar";
import { MissionCinema } from "@/app/_components/mission-cinema";

/* ─── data ─── */
const quickLinks = [
  { label: "Submit a Film",        href: "/industry",           icon: Clapperboard, accent: "#009f3b", tag: "Film" },
  { label: "Apply for Licence",    href: "/industry/licensing", icon: BookOpen,     accent: "#fea600", tag: "Licence" },
  { label: "Classification Guide", href: "/policy",             icon: Shield,       accent: "#34d399", tag: "Policy" },
  { label: "Find a Zone Office",   href: "/zones",              icon: Globe,        accent: "#60a5fa", tag: "Zones" },
  { label: "Law Enforcement",      href: "/law-enforcement",    icon: Scale,        accent: "#f87171", tag: "Legal" },
  { label: "Service Charter",      href: "/service-charter",    icon: Sparkles,     accent: "#c084fc", tag: "Charter" },
];

const features = [
  { icon: Film, title: "Film Classification", desc: "Every film and video work must be classified by NFVCB before distribution or exhibition in Nigeria.", href: "/policy", col: "text-[#009f3b]", accent: "#009f3b" },
  { icon: Shield, title: "Content Regulation", desc: "Protecting children and communities while preserving artistic freedom — guided by the NFVCB Act 85 of 1993.", href: "/policy", col: "text-blue-500", accent: "#3b82f6" },
  { icon: BookOpen, title: "Licensing Services", desc: "Online, National, Regional, and Community distributor licences to legalise your film business.", href: "/industry/licensing", col: "text-[#fea600]", accent: "#fea600" },
  { icon: Globe, title: "Nationwide Presence", desc: "6 zonal offices and 30+ state centres across all six geopolitical zones — regulation at your doorstep.", href: "/zones", col: "text-purple-500", accent: "#a855f7" },
];

/* ─── sections ─── */
function QuickServices() {
  return (
    <section className="relative py-16 overflow-hidden" aria-label="Quick services">
      {/* layered background */}
      <div className="absolute inset-0 bg-[#030f05]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#009f3b18,transparent)]" aria-hidden />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#009f3b]/30 to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="block w-4 h-px bg-[#fea600]" aria-hidden />
              <span className="text-[#fea600] text-[10px] font-extrabold uppercase tracking-[0.25em]">Online Portal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Quick Services
            </h2>
          </div>
          <p className="text-xs text-white/35 max-w-[200px] text-right leading-relaxed hidden sm:block">
            Access regulatory services without visiting an office
          </p>
        </AnimatedSection>

        {/* cards */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickLinks.map(({ label, href, icon: Icon, accent, tag }) => (
            <StaggerItem key={href}>
              <Link href={href} className="group block h-full" aria-label={label}>
                <div
                  className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm flex flex-col gap-5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] cursor-pointer hover:shadow-[0_12px_40px_-8px_var(--qs-accent)]"
                  style={{ "--qs-accent": accent } as React.CSSProperties}
                >
                  {/* animated top accent bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl transition-all duration-500 group-hover:h-[3px] group-hover:opacity-100 opacity-60"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                    aria-hidden
                  />

                  {/* subtle corner glow */}
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ background: accent }}
                    aria-hidden
                  />

                  {/* icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}1a`, border: `1px solid ${accent}35` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} aria-hidden />
                  </div>

                  {/* text */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: `${accent}99` }}
                    >
                      {tag}
                    </span>
                    <p className="font-bold text-white text-sm leading-snug">{label}</p>
                  </div>

                  {/* arrow */}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-x-1"
                    style={{ color: accent }}
                    aria-hidden
                  />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="what-we-do-heading">
      <AnimatedSection className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <div className="w-1 h-6 rounded-full bg-[#fea600]" aria-hidden />
        <h2 id="what-we-do-heading" className="text-lg font-black uppercase tracking-wide text-foreground">What We Do</h2>
      </AnimatedSection>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc, href, col, accent }) => (
          <StaggerItem key={title}>
            <Link href={href} className="group block h-full">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.75" style={{ background: accent }} aria-hidden />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(160deg, ${accent}0d 0%, transparent 55%)` }} aria-hidden />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}28` }}>
                  <Icon className={`h-6 w-6 ${col}`} aria-hidden />
                </div>
                <h3 className="font-black text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[11px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function DGSpotlight() {
  return (
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="dg-heading">
      <AnimatedSection className="flex items-center gap-3 mb-7 pb-4 border-b border-border">
        <div className="w-1 h-6 rounded-full bg-[#fea600]" aria-hidden />
        <h2 id="dg-heading" className="text-lg font-black uppercase tracking-wide text-foreground">Leadership Spotlight</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-500">
          <div className="grid md:grid-cols-3">
            <div className="relative bg-gradient-to-br from-[#001506] to-[#009f3b]/40 overflow-hidden h-72 md:h-auto md:min-h-0 md:aspect-auto rounded-md m-4">
              <Image
                src="/management_staff/dr_shaibu.webp"
                alt="Dr. Shaibu Husseini, Director-General of NFVCB"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />
              <div className="absolute left-4 bottom-4 z-10">
                <p className="text-white font-bold text-sm">Dr. Shaibu Husseini</p>
                <p className="text-[#fea600] text-xs font-semibold">Director-General, NFVCB</p>
              </div>
            </div>

            <div className="md:col-span-2 p-7 sm:p-9 flex flex-col justify-center">
              <Sparkles className="h-6 w-6 text-[#fea600] mb-4" aria-hidden />
              <figure>
                <blockquote className="text-base sm:text-lg font-semibold text-foreground leading-relaxed mb-5 italic text-balance">
                  &ldquo;Nigeria&apos;s film regulatory framework can rank among the best in the world.
                  We have the talent, the legislation, and now the strategy. NFVCB is determined to
                  reduce bureaucracy, embrace technology, and make our services accessible to every
                  stakeholder across Nigeria.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-muted-foreground mb-1">
                  <strong className="text-foreground">Dr. Shaibu Husseini</strong> — Chair, AMAA Selection Committee (16 yrs) · Oxford Blavatnik Alumni · Golden Globes Voter
                </figcaption>
              </figure>
              <Link href="/management" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                Full Profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </section>
  );
}

/* ─── page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FilmOfTheMonth />
      <NewsUpdate />
      <QuickServices />
      <WhatWeDo />
      <MissionCinema />
      <DGSpotlight />
    </>
  );
}
