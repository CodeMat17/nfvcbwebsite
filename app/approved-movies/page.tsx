import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { approvedMoviesPosts } from "@/lib/approved-movies-data";
import { ArrowRight, Film } from "lucide-react";
import { AsideNewsStack } from "@/components/AsideNewsStack";
import { ClassificationPanel } from "@/components/classification-panel";
import { MoviesClient } from "./movies-client";

export const metadata: Metadata = {
  title: "Approved Movies — Monthly Classification Lists",
  description:
    "Browse monthly lists of films approved for public exhibition in Nigeria by the National Film and Video Censors Board. Includes Nollywood films, foreign productions, ratings, languages and consumer advice.",
  keywords: [
    "NFVCB approved movies",
    "approved films Nigeria",
    "classified movies Nigeria",
    "Nollywood approved films",
    "NFVCB monthly approvals",
    "films approved for exhibition Nigeria",
    "Nigerian film classification list",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/approved-movies" },
  openGraph: {
    title: "Approved Movies — Monthly Classification Lists | NFVCB",
    description:
      "Monthly lists of films approved for public exhibition in Nigeria — ratings, languages and consumer advice from NFVCB.",
    url: "https://nfvcb.gov.ng/approved-movies",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function ApprovedMoviesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#fea600]/20 text-[#fea600] border-[#fea600]/30">
              Classification &amp; Approval
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Approved Movies
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Browse monthly lists of movies approved for public exhibition in Nigeria by the NFVCB.
              Each list includes ratings, language, producer details, and consumer advisories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Film strip decoration */}
      <div className="h-3 bg-[#001506] flex overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-8 shrink-0 border-r-2 border-[#fea600]/30 h-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0 w-full">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Film className="h-5 w-5 text-primary" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Monthly Approvals
            </h2>
          </div>
        </AnimatedSection>

        <MoviesClient posts={approvedMoviesPosts} />
        </div>{/* end main */}

          <aside className="w-full lg:w-72 shrink-0">
            <div className="flex flex-col gap-4 sticky top-24">
              <div className="">
                <AsideNewsStack />
              </div>
              <div className="h-72">
                <ClassificationPanel />
              </div>
            </div>
          </aside>
        </div>{/* end flex row */}
      </div>

      {/* CTA */}
      <section className="bg-[#001506] py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Film className="h-10 w-10 text-[#fea600] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Submit a Film for Classification</h2>
            <p className="text-white/60 mb-6 text-sm max-w-xl mx-auto">
              Producers and distributors can submit films for classification and approval through the
              NFVCB Licensing office or the Digital Classification Portal.
            </p>
            <Link
              href="/industry/licensing"
              className="inline-flex items-center gap-2 bg-[#fea600] text-[#001506] font-semibold px-6 py-3 rounded-xl hover:bg-[#fea600]/90 transition-colors text-sm"
            >
              Start Licensing Process <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
