import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { approvedMoviesPosts, getApprovedMoviesPost } from "@/lib/approved-movies-data";
import { ArrowLeft, Calendar, Film, User } from "lucide-react";
import { FilmTable } from "./film-table";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return approvedMoviesPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getApprovedMoviesPost(slug);
  if (!post) return { title: "Not Found" };
  const description = `${post.movies.length} films approved for public exhibition in Nigeria — ${post.title}. Includes ratings (G, PG, 12, 15, 18), languages and consumer advice as classified by NFVCB.`;
  return {
    title: `${post.title} — NFVCB Approved Films`,
    description,
    alternates: { canonical: `https://nfvcb.gov.ng/approved-movies/${slug}` },
    openGraph: {
      title: `${post.title} — NFVCB Approved Films`,
      description,
      url: `https://nfvcb.gov.ng/approved-movies/${slug}`,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
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

const RATING_ORDER = ["G", "PG", "12", "12A", "15", "18"];

function ratingColor(r: string) {
  switch (r) {
    case "G":   return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    case "PG":  return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "12":  return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
    case "12A": return "bg-orange-400/10 text-orange-500 border-orange-400/20";
    case "15":  return "bg-red-400/10 text-red-500 border-red-400/20";
    case "18":  return "bg-red-700/10 text-red-700 dark:text-red-400 border-red-700/20";
    default:    return "bg-muted text-muted-foreground";
  }
}

export default async function ApprovedMoviesDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getApprovedMoviesPost(slug);
  if (!post) notFound();
  if (!post) return null;

  const langCounts = countBy(post.movies, "language");
  const ratingCounts = countBy(post.movies, "rating");

  const sortedLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]);
  const sortedRatings = RATING_ORDER.filter((r) => ratingCounts[r]).map((r) => [r, ratingCounts[r]] as [string, number]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src={post.image ?? "/logo.webp"} alt="" fill className="object-cover object-center blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001506]/60 to-[#001506]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/approved-movies"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Approved Movies
            </Link>
<br/>
            <Badge className="w-fit mb-4 bg-[#fea600]/20 text-[#fea600] border-[#fea600]/30">
              Classification &amp; Approval
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-[#009f3b]" /> {post.publishedBy}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#009f3b]" />
                {new Date(post.date).toLocaleDateString("en-NG", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Film className="h-4 w-4 text-[#009f3b]" /> {post.movies.length} Movies Approved
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Film strip */}
      <div className="h-3 bg-[#001506] flex overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-8 shrink-0 border-r-2 border-[#fea600]/30 h-full" />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        {/* Cover image */}
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 flex items-center justify-center">
            {post.image ? (
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            ) : (
              <>
                <Image src="/logo.webp" alt="" width={180} height={180} className="opacity-15" aria-hidden />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white/40 text-xs">{post.title}</p>
                </div>
              </>
            )}
          </div>
        </AnimatedSection>

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
                    <Badge className={`text-[10px] font-bold w-10 justify-center shrink-0 ${ratingColor(rating)}`}>
                      {rating}
                    </Badge>
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden mx-3">
                        <div
                          className="h-full bg-[#fea600] rounded-full"
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
