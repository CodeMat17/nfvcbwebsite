"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import { RatingBadge, RATING_ORDER } from "@/components/rating-badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { ApprovedMoviesPost } from "@/lib/approved-movies-data";
import { ArrowRight, Calendar, Film, Search, User, X } from "lucide-react";

const PAGE_SIZE = 9;

interface Props {
  posts: ApprovedMoviesPost[];
}

export function MoviesClient({ posts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  /* Search and page live in the URL — the list can be linked and shared, and
     the back button restores where you were. */
  const query = params.get("q") ?? "";
  const page = Math.max(1, Number(params.get("page")) || 1);

  const setParams = useCallback(
    (patch: Record<string, string | null>) => {
      const next = new URLSearchParams(params.toString());
      for (const [k, v] of Object.entries(patch)) {
        if (!v) next.delete(k);
        else next.set(k, v);
      }
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [params, pathname, router]
  );

  const [draft, setDraft] = useState(query);
  /* Re-sync only when the URL changes from outside this input (back button,
     shared link, cleared search). Adjusting state during render rather than
     in an effect avoids a second render pass. */
  const [syncedFrom, setSyncedFrom] = useState(query);
  if (syncedFrom !== query) {
    setSyncedFrom(query);
    setDraft(query);
  }
  useEffect(() => {
    if (draft === query) return;
    const t = setTimeout(() => setParams({ q: draft || null, page: null }), 250);
    return () => clearTimeout(t);
  }, [draft, query, setParams]);

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return posts;
    return posts.filter((p) => p.month.toLowerCase().includes(trimmed));
  }, [posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  /* Paging used to leave you scrolled mid-list on the new page. */
  function goToPage(n: number) {
    setParams({ page: n === 1 ? null : String(n) });
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearQuery() {
    setDraft("");
    router.replace(pathname, { scroll: false });
    inputRef.current?.focus();
  }

  function getPageNumbers(): (number | "ellipsis")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (safePage <= 4) return [1, 2, 3, 4, 5, "ellipsis", totalPages];
    if (safePage >= totalPages - 3)
      return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "ellipsis", safePage - 1, safePage, safePage + 1, "ellipsis", totalPages];
  }

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* Search */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <label htmlFor="approval-search" className="sr-only">
            Search approvals by month
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            ref={inputRef}
            id="approval-search"
            type="text"
            autoComplete="off"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") { clearQuery(); inputRef.current?.blur(); }
            }}
            placeholder="Search by month, e.g. March or 2026"
            className="tap w-full rounded-xl border border-input bg-background pl-9 pr-9 text-caption transition focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
          {draft && (
            <button
              onClick={clearQuery}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* This list previously gave no result feedback at all, while the film
            list on the detail page did. Both now report the same way. */}
        <p className="text-caption text-muted-foreground" aria-live="polite">
          Showing <span className="font-semibold text-foreground">{paginated.length}</span> of{" "}
          {filtered.length} {filtered.length === 1 ? "release" : "releases"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-20 text-center">
          <Film className="h-9 w-9 text-muted-foreground/40" aria-hidden />
          <p className="text-caption text-muted-foreground">
            No approvals found for &ldquo;{query.trim()}&rdquo;
          </p>
          <button
            onClick={clearQuery}
            className="text-caption font-semibold text-primary hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <>
          <StaggerContainer
            key={`${query}-${safePage}`}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {paginated.map((post) => {
              const filmCount = post.movies.length;
              const ratings = [...new Set(post.movies.map((f) => f.rating))].sort(
                (a, b) => RATING_ORDER.indexOf(a) - RATING_ORDER.indexOf(b)
              );

              return (
                <StaggerItem key={post.slug}>
                  <Link href={`/approved-movies/${post.slug}`} className="group block h-full">
                    <Card className="h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-3">
                      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-nfvcb-dark">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <Image
                            src="/logo.webp"
                            alt=""
                            width={72}
                            height={72}
                            className="opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
                            aria-hidden
                          />
                        )}
                        <span className="absolute bottom-3 right-3 rounded-full bg-accent px-2.5 py-1 text-overline text-nfvcb-dark">
                          {filmCount} {filmCount === 1 ? "film" : "films"}
                        </span>
                      </div>

                      <CardContent className="space-y-3">
                        {/* Was an <h1> — one per card, many per page, which
                            broke the document outline for screen readers. */}
                        <h3 className="text-h4 font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                          {post.month}
                        </h3>

                        <div className="flex flex-wrap gap-1">
                          {ratings.map((r) => (
                            <RatingBadge key={r} rating={r} size="sm" />
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-1 text-caption text-muted-foreground">
                          <span className="inline-flex min-w-0 items-center gap-1.5">
                            <User className="h-3.5 w-3.5 shrink-0" aria-hidden />
                            <span className="truncate">{post.publishedBy}</span>
                          </span>
                          <span className="inline-flex shrink-0 items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" aria-hidden />
                            {new Date(post.date).toLocaleDateString("en-NG", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <span className="flex items-center gap-1.5 pt-1 text-overline uppercase text-primary transition-all group-hover:gap-2.5">
                          View films <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => goToPage(Math.max(1, safePage - 1))}
                    aria-disabled={safePage === 1}
                    className={safePage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {getPageNumbers().map((entry, i) =>
                  entry === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${i}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={entry}>
                      <PaginationLink
                        isActive={entry === safePage}
                        onClick={() => goToPage(entry)}
                        className="cursor-pointer"
                      >
                        {entry}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
                    aria-disabled={safePage === totalPages}
                    className={safePage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}
