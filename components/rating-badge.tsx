import type { ReactNode } from "react";

export const RATING_ORDER = ["G", "PG", "12", "12A", "15", "18", "RE"];

/**
 * The Board's classification ratings are the one place on this site that uses
 * colour outside the three brand hues — age ratings are the core public
 * taxonomy and must be distinguishable at a glance, which is a functional
 * requirement rather than decoration.
 *
 * The colours form a deliberate severity ramp (safe → restricted) and are
 * defined once as --rating-* tokens in globals.css, with separate light and
 * dark values so every badge clears AA in both themes. They were previously
 * ad-hoc Tailwind palette classes inlined in one switch statement.
 */
const RATING_CLASS: Record<string, string> = {
  G: "bg-rating-g/10 text-rating-g border-rating-g/25",
  PG: "bg-rating-pg/10 text-rating-pg border-rating-pg/25",
  "12": "bg-rating-12/10 text-rating-12 border-rating-12/25",
  "12A": "bg-rating-12/10 text-rating-12 border-rating-12/25",
  "15": "bg-rating-15/10 text-rating-15 border-rating-15/25",
  "18": "bg-rating-18/10 text-rating-18 border-rating-18/25",
  RE: "bg-rating-18/15 text-rating-18 border-rating-18/35",
};

const FALLBACK = "bg-muted text-muted-foreground border-border";

export function ratingClass(rating: string) {
  return RATING_CLASS[rating] ?? FALLBACK;
}

export function RatingBadge({
  rating,
  children,
  size = "md",
  className = "",
}: {
  rating: string;
  children?: ReactNode;
  size?: "sm" | "md";
  className?: string;
}) {
  const pad = size === "sm" ? "px-1.5 py-0.5" : "px-2.5 py-1";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border text-overline ${pad} ${ratingClass(
        rating
      )} ${className}`}
    >
      {children ?? rating}
    </span>
  );
}
