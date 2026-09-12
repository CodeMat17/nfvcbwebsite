import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Building2 } from "lucide-react";
import { industryBodies } from "./data";
import { BodiesDirectory } from "./bodies-directory";

export const metadata: Metadata = {
  title: "Registered Professional Associations/Guilds — NFVCB",
  description:
    "Directory of professional associations and guilds registered with the National Film and Video Censors Board — presidents, secretaries, secretariat addresses, phone numbers and email contacts.",
  keywords: [
    "Nollywood guilds",
    "registered film associations Nigeria",
    "NFVCB industry bodies",
    "Actors Guild of Nigeria",
    "Directors Guild of Nigeria",
    "Association of Movie Producers",
    "film guild contacts Nigeria",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/industry-bodies" },
  openGraph: {
    title: "Registered Professional Associations/Guilds — NFVCB",
    description:
      "Contact details for the professional associations and guilds registered with the NFVCB.",
    url: "https://nfvcb.gov.ng/industry-bodies",
    images: [{ url: "/opengraph-image-v2.png", width: 1200, height: 630 }],
  },
};

export default function IndustryBodiesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────
          Dark brand ground with the Board's mark ghosted behind it, plus a soft
          green wash so the panel reads as lit rather than flat black. */}
      <section className="film-grain relative overflow-hidden bg-nfvcb-dark py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden
        >
          <Image
            src="/logo.webp"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div
          className="pointer-events-none absolute -top-1/3 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="section relative z-10">
          <AnimatedSection>
            <p className="eyebrow mb-5 text-nfvcb-gold">Industry Directory</p>
            <h1 className="text-h1 mb-5 max-w-4xl font-black text-balance text-white">
              Registered Professional Associations &amp; Guilds
            </h1>
            <p className="max-w-2xl text-body-lg text-white/65">
              The associations and guilds below are registered with the National
              Film and Video Censors Board and represent practitioners across
              acting, directing, production, distribution, exhibition and film
              education nationwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section space-y-10 py-14">
        <AnimatedSection>
          <div className="inline-flex items-center gap-4 rounded-xl bg-card px-5 py-4 shadow-1 ring-1 ring-foreground/10">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10">
              <Building2 className="size-5 text-primary" aria-hidden />
            </span>
            <div>
              <p className="text-h2 font-black leading-none tabular-nums text-foreground">
                {industryBodies.length}
              </p>
              <p className="mt-1.5 text-overline uppercase text-muted-foreground">
                Registered bodies
              </p>
            </div>
          </div>
        </AnimatedSection>

        <BodiesDirectory bodies={industryBodies} />

        <AnimatedSection>
          <p className="rounded-xl border-l-2 border-accent bg-muted/40 p-5 text-caption leading-relaxed text-muted-foreground">
            Contact details are provided by the associations themselves and are
            published for the convenience of practitioners and the public. If
            your guild&apos;s details have changed, please write to the Board so
            this directory can be updated.
          </p>
        </AnimatedSection>
      </div>
    </>
  );
}
