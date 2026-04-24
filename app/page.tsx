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
import { NewsGrid } from "@/app/_components/news-grid";
import { StatsBar } from "@/app/_components/stats-bar";
import { MissionCinema } from "@/app/_components/mission-cinema";

/* ─── data ─── */
const quickLinks = [
  { label: "Submit a Film", href: "/industry", icon: Clapperboard, bg: "bg-[#009f3b]", glow: "hover:shadow-[#009f3b]/40" },
  { label: "Apply for Licence", href: "/industry/licensing", icon: BookOpen, bg: "bg-[#fea600]", glow: "hover:shadow-[#fea600]/40" },
  { label: "Classification Guide", href: "/policy", icon: Shield, bg: "bg-[#009f3b]/80", glow: "hover:shadow-[#009f3b]/30" },
  { label: "Find a Zone Office", href: "/zones", icon: Globe, bg: "bg-[#001506] dark:bg-[#003d14]", glow: "hover:shadow-black/30" },
  { label: "Law Enforcement", href: "/law-enforcement", icon: Scale, bg: "bg-red-600", glow: "hover:shadow-red-500/30" },
  { label: "Service Charter", href: "/service-charter", icon: Sparkles, bg: "bg-purple-600", glow: "hover:shadow-purple-500/30" },
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
    <section className="py-8 bg-muted/20 border-b border-border" aria-label="Quick services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex items-center gap-2 mb-5">
          <Sparkles className="h-4 w-4 text-[#fea600]" aria-hidden />
          <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Quick Services</span>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch">
          {quickLinks.map(({ label, href, icon: Icon, bg, glow }) => (
            <StaggerItem key={href} className="h-full">
              <Link href={href} className="group block h-full">
                <div className={`h-full ${bg} flex flex-col items-center gap-3 p-5 rounded-2xl shadow-md group-hover:shadow-2xl ${glow} transition-all duration-300 group-hover:-translate-y-2 cursor-pointer`}>
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/25">
                    <Icon className="h-8 w-8 text-white" aria-hidden />
                  </div>
                  <p className="font-bold text-white text-center leading-tight">{label}</p>
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
      <NewsGrid />
      <QuickServices />
      <WhatWeDo />
      <MissionCinema />
      <DGSpotlight />
    </>
  );
}
