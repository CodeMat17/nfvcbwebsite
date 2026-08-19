import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Film, Shield, BookOpen,
  Globe, Quote, Clapperboard, Scale,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { HeroSection } from "@/components/hero-section";
import { FilmOfTheMonth } from "@/components/film-of-the-month";
import { NewsUpdate } from "@/app/_components/news-grid";
import { StatsBar } from "@/app/_components/stats-bar";
import { MissionCinema } from "@/app/_components/mission-cinema";

/* ─── data ───
   The per-card accent colours (#60a5fa, #c084fc, #f87171, #34d399, blue-500,
   purple-500) are gone. Six cards in six hues read as six unrelated products;
   the site's language is green, gold and the neutral ramp. Differentiation
   now comes from iconography, position and type. */
const quickLinks = [
  { label: "Submit a Film",        href: "/industry",           icon: Clapperboard, tag: "Film" },
  { label: "Apply for Licence",    href: "/industry/licensing", icon: BookOpen,     tag: "Licence" },
  { label: "Classification Guide", href: "/policy",             icon: Shield,       tag: "Policy" },
  { label: "Find a Zone Office",   href: "/zones",              icon: Globe,        tag: "Zones" },
  { label: "Law Enforcement",      href: "/law-enforcement",    icon: Scale,        tag: "Legal" },
  { label: "Service Charter",      href: "/service-charter",    icon: Film,         tag: "Charter" },
];

const features = [
  { icon: Film, title: "Film Classification", desc: "Every film and video work must be classified by NFVCB before distribution or exhibition in Nigeria.", href: "/policy" },
  { icon: Shield, title: "Content Regulation", desc: "Protecting children and communities while preserving artistic freedom — guided by the NFVCB Act 85 of 1993.", href: "/policy" },
  { icon: BookOpen, title: "Licensing Services", desc: "Online, National, Regional, and Community distributor licences to legalise your film business.", href: "/industry/licensing" },
  { icon: Globe, title: "Nationwide Presence", desc: "6 zonal offices and 30+ state centres across all six geopolitical zones — regulation at your doorstep.", href: "/zones" },
];

/* ─── shared section header ─── */
function SectionHeading({
  eyebrow,
  title,
  id,
  aside,
}: {
  eyebrow: string;
  title: string;
  id: string;
  aside?: string;
}) {
  return (
    <AnimatedSection className="mb-(--space-block) flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 id={id} className="text-h2 font-black text-foreground">
          {title}
        </h2>
      </div>
      {aside && (
        <p className="max-w-xs text-caption leading-relaxed text-muted-foreground sm:text-right">
          {aside}
        </p>
      )}
    </AnimatedSection>
  );
}

/* ─── sections ─── */
function QuickServices() {
  return (
    <section className="bg-secondary/60 border-y border-border" aria-labelledby="quick-services-heading">
      <div className="section section-y">
        <SectionHeading
          id="quick-services-heading"
          eyebrow="Online Portal"
          title="Quick Services"
          aside="Access regulatory services without visiting an office"
        />

        <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {quickLinks.map(({ label, href, icon: Icon, tag }) => (
            <StaggerItem key={href}>
              <Link href={href} className="group block h-full">
                <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-3">
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <span className="text-overline uppercase text-muted-foreground">{tag}</span>
                    <p className="text-caption font-bold leading-snug text-foreground">{label}</p>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
    <section className="section section-y" aria-labelledby="what-we-do-heading">
      <SectionHeading
        id="what-we-do-heading"
        eyebrow="Our Mandate"
        title="What We Do"
      />

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc, href }) => (
          <StaggerItem key={title}>
            <Link href={href} className="group block h-full">
              <Card className="relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-3">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <h3 className="mb-2 text-h4 font-black leading-snug text-foreground transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="text-caption leading-relaxed text-muted-foreground">{desc}</p>
                <span className="mt-4 flex items-center gap-1 text-overline uppercase text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
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
    <section className="section section-y" aria-labelledby="dg-heading">
      <SectionHeading
        id="dg-heading"
        eyebrow="Leadership"
        title="From the Director-General"
      />

      <AnimatedSection>
        <Card className="overflow-hidden p-0 transition-shadow duration-500 hover:shadow-3">
          <div className="grid md:grid-cols-5">
            <div className="relative h-72 overflow-hidden bg-nfvcb-dark sm:h-96 md:col-span-2 md:h-full md:min-h-80">
              <Image
                src="/management_staff/dr_shaibu.webp"
                alt="Dr. Shaibu Husseini, Director-General of NFVCB"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nfvcb-dark via-nfvcb-dark/20 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <p className="text-h4 font-bold text-white">Dr. Shaibu Husseini</p>
                <p className="text-caption font-semibold text-accent">Director-General, NFVCB</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9 md:col-span-3">
              <Quote className="mb-4 h-7 w-7 text-accent" aria-hidden />
              <figure>
                <blockquote className="text-body-lg font-semibold leading-relaxed text-balance text-foreground">
                  &ldquo;Nigeria&apos;s film regulatory framework can rank among the best in the world.
                  We have the talent, the legislation, and now the strategy. NFVCB is determined to
                  reduce bureaucracy, embrace technology, and make our services accessible to every
                  stakeholder across Nigeria.&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-caption text-muted-foreground">
                  <strong className="text-foreground">Dr. Shaibu Husseini</strong> — Chair, AMAA Selection
                  Committee (16 yrs) · Oxford Blavatnik Alumni · Golden Globes Voter
                </figcaption>
              </figure>
              <Link
                href="/management"
                className="mt-6 inline-flex items-center gap-2 text-overline uppercase text-primary transition-all hover:gap-3"
              >
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
