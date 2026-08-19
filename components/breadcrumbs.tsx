import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const BASE_URL = "https://nfvcb.gov.ng";

export type Crumb = { label: string; href: string };

/**
 * Shared breadcrumb trail for nested routes.
 *
 * The site has genuinely nested IA (/industry/licensing, /news/[slug],
 * /approved-movies/[slug]) but previously had no wayfinding at all — visitors
 * arriving from search had no sense of place and no route upward.
 *
 * `items` should NOT include Home; it is prepended here. The final item is the
 * current page and renders as plain text, not a link.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${BASE_URL}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-(--space-block)">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-caption">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60"
                    aria-hidden
                  />
                )}
                {last ? (
                  <span className="font-semibold text-foreground" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="flex items-center gap-1 rounded text-muted-foreground transition-colors hover:text-primary"
                  >
                    {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
