"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Trophy, Clapperboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { approvedMoviesPosts } from "@/lib/approved-movies-data";

const RATING_COLOR: Record<string, string> = {
  G: "bg-green-600",
  PG: "bg-blue-600",
  "12": "bg-yellow-500",
  "12A": "bg-amber-500",
  "15": "bg-orange-500",
  "18": "bg-red-600",
  RE: "bg-purple-700",
};

function findFeaturedFilm() {
  for (const post of approvedMoviesPosts) {
    const film = post.movies.find((m) => m.featured);
    if (film) return { film, post };
  }
  return null;
}

export function FilmOfTheMonth() {
  const result = findFeaturedFilm();
  if (!result) return null;

  const { film, post } = result;
  const ratingBg = RATING_COLOR[film.rating] ?? "bg-gray-600";

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 rounded-full bg-[#fea600]" />
          <Trophy className="h-5 w-5 text-[#fea600]" />
          <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
            Film of the Month
          </h2>
        </div>
        <Link
          href={`/approved-movies/${post.slug}`}
          className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
        >
          View all approved films <ArrowRight className="h-3 w-3" />
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 items-stretch">
        {/* Trailer embed — 3/5 */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
            <iframe
              src={film.trailerUrl}
              title={`${film.title} — Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        {/* Producer spotlight card — 2/5 */}
        <motion.div
          className="lg:col-span-2 flex flex-col"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Card className="flex-1 relative overflow-hidden border-[#fea600]/30 hover:shadow-xl transition-all duration-500">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#009f3b] via-[#fea600] to-[#009f3b]" />

            <div className="p-6 sm:p-7 flex flex-col h-full gap-5">
              {/* Film title + rating */}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Badge className={`${ratingBg} text-white font-black text-xs px-2.5 py-0.5`}>
                    {film.rating}
                  </Badge>
                  <Badge className="bg-[#fea600]/15 text-[#fea600] border border-[#fea600]/30 text-xs font-semibold">
                    NFVCB Pick · {new Date(post.date).toLocaleDateString("en-NG", { month: "long", year: "numeric" })}
                  </Badge>
                </div>
                <h3 className="text-2xl font-black text-foreground leading-tight mb-1">
                  {film.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {film.language} · {film.duration}
                </p>
              </div>

              {/* Jury note */}
              {film.juryNote && (
                <blockquote className="relative pl-4 border-l-2 border-[#fea600] text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{film.juryNote}&rdquo;
                  <div className="mt-2 flex items-center gap-1 not-italic">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-[#fea600] text-[#fea600]" />
                    ))}
                    <span className="text-[10px] font-bold text-[#fea600] ml-1 uppercase tracking-wider">NFVCB Board</span>
                  </div>
                </blockquote>
              )}

              {/* Producer info */}
              <div className="mt-auto rounded-xl bg-muted/50 border border-border p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  <Clapperboard className="h-3.5 w-3.5 text-[#009f3b]" />
                  Producer Spotlight
                </div>
                <div>
                  <p className="font-black text-foreground text-base leading-tight">{film.producer}</p>
                  <p className="text-xs text-muted-foreground">{film.productionCompany}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Director: <span className="font-semibold text-foreground">{film.director}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Cast: <span className="font-semibold text-foreground">{film.majorCast}</span>
                </div>
              </div>

              <Link
                href={`/approved-movies/${post.slug}`}
                className="mt-1 inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#009f3b] hover:bg-[#009f3b]/90 text-white text-xs font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#009f3b]/25"
              >
                View Full Approval Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
