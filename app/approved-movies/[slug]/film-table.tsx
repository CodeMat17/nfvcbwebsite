"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Movie } from "@/lib/approved-movies-data";
import { Input } from "@/components/ui/input";
import { RatingBadge } from "@/components/rating-badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, ChevronDown, Clock, Languages } from "lucide-react";

const RATINGS = ["All", "G", "PG", "12", "12A", "15", "18"];

interface Props {
  movies: Movie[];
}

/* Progressive disclosure. The card previously showed all eight fields at
   identical weight with a repeated 10px uppercase label — across dozens of
   films that is a wall of text with no entry point. The front of the card now
   carries only what people actually scan by; production credits sit behind an
   expand. */
function FilmCard({ film }: { film: Movie }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-2">
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-h4 font-bold leading-snug text-foreground">{film.title}</h3>
            <p className="mt-0.5 text-caption text-muted-foreground">{film.productionCompany}</p>
          </div>
          <RatingBadge rating={film.rating} />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden /> {film.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Languages className="h-3.5 w-3.5" aria-hidden /> {film.language}
          </span>
        </div>

        {film.consumerAdvice && (
          <p className="rounded-lg bg-muted/60 px-3 py-2 text-caption leading-relaxed text-foreground">
            <span className="font-semibold">Advice: </span>
            {film.consumerAdvice}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex tap w-full items-center justify-between gap-2 border-t border-border px-5 text-caption font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        {open ? "Hide details" : "Production details"}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <dl className="space-y-2.5 border-t border-border px-5 py-4 text-caption">
          {[
            ["Director", film.director],
            ["Producer", film.producer],
            ["Major Cast", film.majorCast],
            ["Preview Location", film.previewLocation],
            [
              "Date of Approval",
              new Date(film.dateOfApproval).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }),
            ],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[9rem_1fr] gap-3 max-sm:grid-cols-1 max-sm:gap-0.5">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export function FilmTable({ movies }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  /* Filter state lives in the URL, so a filtered view can be linked and
     shared and the back button restores it. It was previously useState only. */
  const search = params.get("q") ?? "";
  const langFilter = params.get("lang") ?? "All";
  const ratingFilter = params.get("rating") ?? "All";

  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(params.toString());
      if (!value || value === "All") next.delete(key);
      else next.set(key, value);
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [params, pathname, router]
  );

  /* Typing straight into the URL on every keystroke is jittery, so the input
     is local and debounced into the query string. */
  const [draft, setDraft] = useState(search);
  /* Re-sync only when the URL changes from outside this input (back button,
     shared link, cleared filters). Adjusting state during render rather than
     in an effect avoids a second render pass. */
  const [syncedFrom, setSyncedFrom] = useState(search);
  if (syncedFrom !== search) {
    setSyncedFrom(search);
    setDraft(search);
  }
  useEffect(() => {
    if (draft === search) return;
    const t = setTimeout(() => setParam("q", draft), 250);
    return () => clearTimeout(t);
  }, [draft, search, setParam]);

  const languages = useMemo(
    () => ["All", ...Array.from(new Set(movies.map((f) => f.language))).sort()],
    [movies]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return movies.filter((f) => {
      const matchSearch =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.director.toLowerCase().includes(q) ||
        f.producer.toLowerCase().includes(q);
      const matchLang = langFilter === "All" || f.language === langFilter;
      const matchRating = ratingFilter === "All" || f.rating === ratingFilter;
      return matchSearch && matchLang && matchRating;
    });
  }, [movies, search, langFilter, ratingFilter]);

  const hasFilters = search !== "" || langFilter !== "All" || ratingFilter !== "All";

  function clearFilters() {
    setDraft("");
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <label htmlFor="film-search" className="sr-only">
            Search films by title, director or producer
          </label>
          <Input
            id="film-search"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Search title, director or producer…"
            className="tap pl-9"
          />
        </div>

        <Select value={langFilter} onValueChange={(v) => setParam("lang", v)}>
          <SelectTrigger className="tap min-w-36" aria-label="Filter by language">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((l) => (
              <SelectItem key={l} value={l}>
                {l === "All" ? "All Languages" : l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={ratingFilter} onValueChange={(v) => setParam("rating", v)}>
          <SelectTrigger className="tap min-w-36" aria-label="Filter by rating">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {RATINGS.map((r) => (
              <SelectItem key={r} value={r}>
                {r === "All" ? "All Ratings" : r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <p className="text-caption text-muted-foreground" aria-live="polite">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
          {movies.length} films
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 text-caption font-semibold text-primary transition-colors hover:underline"
          >
            <X className="h-3.5 w-3.5" aria-hidden /> Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-16 text-center">
          <p className="text-caption text-muted-foreground">No films match your filters.</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-caption font-semibold text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((film, i) => (
            <FilmCard key={`${film.title}-${film.rating}-${i}`} film={film} />
          ))}
        </div>
      )}
    </div>
  );
}
