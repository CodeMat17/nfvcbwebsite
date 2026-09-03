import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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
      <section className="relative overflow-hidden bg-nfvcb-dark py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden
        >
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="section relative z-10">
          <AnimatedSection>
            <Badge className="mb-4 border-primary/30 bg-primary/20 text-primary">
              Industry Directory
            </Badge>
            <h1 className="text-h1 mb-4 font-black text-white">
              Registered Professional Associations/Guilds
            </h1>
            <p className="max-w-2xl text-lg text-white/60">
              The associations and guilds below are registered with the National Film and Video
              Censors Board and represent practitioners across acting, directing, production,
              distribution, exhibition and film education nationwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section space-y-10 py-14">
        <AnimatedSection>
          <div className="inline-flex items-center gap-4 rounded-xl border border-border/70 bg-card px-5 py-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </span>
            <div>
              <p className="text-2xl font-black leading-none text-foreground">
                {industryBodies.length}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Registered bodies</p>
            </div>
          </div>
        </AnimatedSection>

        <BodiesDirectory bodies={industryBodies} />

        <AnimatedSection>
          <p className="rounded-xl border border-border/70 bg-muted/40 p-5 text-xs leading-relaxed text-muted-foreground">
            Contact details are provided by the associations themselves and are published for the
            convenience of practitioners and the public. If your guild&apos;s details have changed,
            please write to the Board so this directory can be updated.
          </p>
        </AnimatedSection>
      </div>
    </>
  );
}
