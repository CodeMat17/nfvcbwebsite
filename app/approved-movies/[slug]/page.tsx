import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { Calendar, Film, User } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RatingBadge, RATING_ORDER } from "@/components/rating-badge";
import { FilmTable } from "./film-table";
import { ShareButton } from "@/components/ShareButton";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchQuery(api.approvedMovies.getPostBySlugWithMovies, { slug });
  if (!post) return { title: "Not Found" };
  const pageTitle = `Approved Movies — ${post.month}`;
  const description = `${post.movies.length} films approved for public exhibition in Nigeria — ${post.month}. Includes ratings (G, PG, 12, 15, 18), languages and consumer advice as classified by NFVCB.`;
  return {
    title: `${pageTitle} — NFVCB Approved Films`,
    description,
    alternates: { canonical: `https://nfvcb.gov.ng/approved-movies/${slug}` },
    openGraph: {
      title: `${pageTitle} — NFVCB Approved Films`,
      description,
      url: `https://nfvcb.gov.ng/approved-movies/${slug}`,
      images: [{ url: "/opengraph-image-v2.png", width: 1200, height: 630 }],
    },
  };
}

function countBy<T>(arr: T[], key: keyof T): Record<string, number> {
  return arr.reduce<Record<string, number>>((acc, item) => {
    const val = String(item[key]);
    acc[val] = (acc[val] ?? 0) + 1;
    return acc;
  }, {});
}




export default async function ApprovedMoviesDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchQuery(api.approvedMovies.getPostBySlugWithMovies, { slug });
  if (!post) notFound();

  const langCounts = countBy(post.movies, "language");
  const ratingCounts = countBy(post.movies, "rating");

  const sortedLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]);
  const sortedRatings = RATING_ORDER.filter((r) => ratingCounts[r]).map((r) => [r, ratingCounts[r]] as [string, number]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-nfvcb-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src={post.image ?? "/logo.webp"} alt="" fill className="object-cover object-center blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-nfvcb-dark/60 to-nfvcb-dark" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replaces a lone "Back to…" link (and a stray <br/>) with a full
              trail, so arrivals from search know where they are. */}
          <div className="[&_a]:text-white/60 [&_a:hover]:text-accent [&_span]:text-white">
            <Breadcrumbs
              items={[
                { label: "Approved Movies", href: "/approved-movies" },
                { label: post.month, href: `/approved-movies/${post.slug}` },
              ]}
            />
          </div>
          <AnimatedSection>
            <Badge className="w-fit mb-4 bg-accent/20 text-accent border-accent/30">
              Classification &amp; Approval
            </Badge>

            <h1 className="text-h1 font-black text-white mb-5 leading-tight text-balance">
              Approved Movies — {post.month}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" /> {post.publishedBy}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                {new Date(post.date).toLocaleDateString("en-NG", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Film className="h-4 w-4 text-primary" /> {post.movies.length} Movies Approved
              </span>
              <ShareButton
                title={`${post.month} — NFVCB Approved Films`}
                url={`/approved-movies/${slug}`}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Film strip */}
      <div className="h-3 bg-nfvcb-dark flex overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-8 shrink-0 border-r-2 border-accent/30 h-full" />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        {/* Cover image */}
      

        {/* Summary */}
        <AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* By Language */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                By Language
              </h2>
              <div className="space-y-2.5">
                {sortedLangs.map(([lang, count]) => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{lang}</span>
                      <span className="text-sm font-bold text-primary">{count}</span>
                    </div>
                    <div className="w-24 h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(count / post.movies.length) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By Rating */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                By Rating
              </h2>
              <div className="space-y-2.5">
                {sortedRatings.map(([rating, count]) => (
                  <div key={rating} className="flex items-center gap-3">
                    <RatingBadge rating={rating} className="w-11 justify-center" />
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden mx-3">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${(count / post.movies.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-foreground">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Films */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Film className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Approved Movies
              </h2>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {post.movies.length} total
              </span>
            </div>
            <FilmTable movies={post.movies} />
          </div>
        </AnimatedSection>

        {/* Footer note */}
        <AnimatedSection>
          <div className="rounded-xl bg-muted/40 border border-border p-5 text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Notice:</strong> This list represents films approved by the
            National Film and Video Censors Board (NFVCB) for public exhibition in Nigeria during the stated period.
            Exhibition of unapproved films is an offence under the NFVCB Act Cap N40 LFN 2004.
            For enquiries, contact <a href="mailto:info@nfvcb.gov.ng" className="text-primary hover:underline">info@nfvcb.gov.ng</a>.
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
