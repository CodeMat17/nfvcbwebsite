"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ArrowRight, Film } from "lucide-react";
import Link from "next/link";
import { RatingBadge, RATING_ORDER } from "@/components/rating-badge";

const AsideApprovedMovies = () => {
  const posts = useQuery(api.approvedMovies.listPostsWithMovies);
  const loading = posts === undefined;

  const recentApproved = [...(posts ?? [])]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-2">
        <Film className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <h2 className="text-overline uppercase text-foreground">
          Recently Approved
        </h2>
      </div>

      {/* Previously rendered an empty list while the query was in flight. */}
      {loading ? (
        <ul className="flex-1 animate-pulse space-y-4" aria-hidden>
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="space-y-2">
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-3 w-1/2 rounded bg-muted/70" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex-1 divide-y divide-border">
          {recentApproved.map((post) => {
            const ratingCounts = post.movies.reduce<Record<string, number>>((acc, f) => {
              acc[f.rating] = (acc[f.rating] ?? 0) + 1;
              return acc;
            }, {});

            return (
              <li key={post.slug} className="py-3 first:pt-0 last:pb-0">
                <Link href={`/approved-movies/${post.slug}`} className="group block">
                  <p className="text-caption font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.month}
                    <span className="ml-1.5 font-normal text-muted-foreground">
                      · {post.movies.length} film{post.movies.length !== 1 ? "s" : ""}
                    </span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1">
                    {Object.entries(ratingCounts)
                      .sort(
                        ([a], [b]) => RATING_ORDER.indexOf(a) - RATING_ORDER.indexOf(b)
                      )
                      .map(([r, count]) => (
                        <RatingBadge key={r} rating={r} size="sm">
                          {r} ({count})
                        </RatingBadge>
                      ))}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <Link
        href="/approved-movies"
        className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-3 text-caption font-semibold text-primary transition-all hover:gap-2.5"
      >
        View all approved films
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
};

export default AsideApprovedMovies;
