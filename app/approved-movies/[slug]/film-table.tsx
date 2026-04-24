"use client";

import { useState, useMemo } from "react";
import { Movie } from "@/lib/approved-movies-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

const RATINGS = ["All", "G", "PG", "12", "12A", "15", "18"];

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

interface Props {
  movies: Movie[];
}

export function FilmTable({ movies }: Props) {
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const languages = useMemo(
    () => ["All", ...Array.from(new Set(movies.map((f) => f.language))).sort()],
    [movies]
  );

  const filtered = useMemo(() => {
    return movies.filter((f) => {
      const matchSearch =
        !search ||
        f.title.toLowerCase().includes(search.toLowerCase()) ||
        f.director.toLowerCase().includes(search.toLowerCase()) ||
        f.producer.toLowerCase().includes(search.toLowerCase());
      const matchLang = langFilter === "All" || f.language === langFilter;
      const matchRating = ratingFilter === "All" || f.rating === ratingFilter;
      return matchSearch && matchLang && matchRating;
    });
  }, [movies, search, langFilter, ratingFilter]);

  const hasFilters = search || langFilter !== "All" || ratingFilter !== "All";

  function clearFilters() {
    setSearch("");
    setLangFilter("All");
    setRatingFilter("All");
  }

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by film title, director or producer…"
            className="pl-9"
          />
        </div>

        <select
          value={langFilter}
          onChange={(e) => setLangFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-w-[130px]"
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {l === "All" ? "All Languages" : l}
            </option>
          ))}
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-w-[130px]"
        >
          {RATINGS.map((r) => (
            <option key={r} value={r}>
              {r === "All" ? "All Ratings" : r}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            <X className="h-3.5 w-3.5" /> Clear filters
          </button>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {filtered.length} of {movies.length} movies
      </p>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground text-sm">
          No movies match your filters.
        </div>
      )}

      {filtered.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((film) => (
            <div
              key={film.title}
              className="rounded-xl border border-border bg-card p-5 space-y-3 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-foreground leading-snug">{film.title}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{film.productionCompany}</p>
                </div>
                <Badge className={` font-bold shrink-0 ${ratingColor(film.rating)}`}>{film.rating}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Duration</p>
                  <p className="text-foreground">{film.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Language</p>
                  <p className="text-foreground">{film.language}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Director</p>
                  <p className="text-foreground">{film.director}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Producer</p>
                  <p className="text-foreground">{film.producer}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Major Cast</p>
                  <p className="text-foreground">{film.majorCast}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Preview Location</p>
                  <p className="text-foreground">{film.previewLocation}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Consumer Advice</p>
                  <p className="text-foreground">{film.consumerAdvice}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Date of Approval</p>
                  <p className="text-foreground">
                    {new Date(film.dateOfApproval).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
