import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { newsItems } from "@/lib/news-data";
import { approvedMoviesPosts } from "@/lib/approved-movies-data";
import { ArrowRight, Film } from "lucide-react";
import NewsClient from "./news-client";
import { ClassificationPanel } from "@/components/classification-panel";

export const metadata: Metadata = {
  title: "News, Press Releases & Announcements",
  description:
    "Stay updated with the latest news, press releases and official announcements from the National Film and Video Censors Board of Nigeria — enforcement reports, policy updates, industry developments and more.",
  keywords: [
    "NFVCB news",
    "NFVCB press releases",
    "Nigeria film industry news",
    "NFVCB announcements",
    "Nollywood regulation news",
    "NFVCB latest news",
    "film board Nigeria news",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/news" },
  openGraph: {
    title: "News, Press Releases & Announcements | NFVCB",
    description:
      "Latest official news, press releases and announcements from Nigeria's National Film and Video Censors Board.",
    url: "https://nfvcb.gov.ng/news",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};


export default function NewsPage() {
  const sorted = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  const recentApproved = [...approvedMoviesPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-nfvcb-green border-nfvcb-green/30">
              Media Centre
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              News &amp; Press Releases
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Stay up to date with the latest news, press releases, and official announcements from
              the National Film and Video Censors Board.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0">
            <NewsClient items={sorted} />
          </div>

          {/* Approved movies aside */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="flex flex-col gap-4 sticky top-24">
              <div className="rounded-xl border bg-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Film className="h-4 w-4 text-nfvcb-green" />
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Recently Approved Films
                  </h2>
                </div>
                <ul className="space-y-4">
                  {recentApproved.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/approved-movies/${post.slug}`} className="group block">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {post.movies.length} film{post.movies.length !== 1 ? "s" : ""} &middot;{" "}
                          {new Date(post.date).toLocaleDateString("en-NG", {
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/approved-movies"
                  className="mt-5 flex items-center gap-1 text-xs text-primary font-medium hover:gap-2 transition-all"
                >
                  View all approved films <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="h-72">
                <ClassificationPanel />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
