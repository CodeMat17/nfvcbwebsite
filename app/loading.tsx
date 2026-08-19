/**
 * Route-level loading skeleton.
 *
 * Replaces a `fixed inset-0` full-screen blocker that hardcoded `bg-white` —
 * which flashed white on every navigation in dark mode and hid the layout
 * entirely, making each route change feel like a cold start. This mirrors the
 * shape of a typical page instead, so the transition reads as continuous.
 */
export default function Loading() {
  return (
    <div className="section section-y" role="status" aria-live="polite">
      <span className="sr-only">Loading page…</span>

      <div className="animate-pulse space-y-(--space-block)">
        {/* Heading block */}
        <div className="space-y-3">
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="h-9 w-3/4 max-w-xl rounded-lg bg-muted" />
          <div className="h-4 w-full max-w-2xl rounded bg-muted/70" />
          <div className="h-4 w-5/6 max-w-xl rounded bg-muted/70" />
        </div>

        {/* Card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="space-y-3 rounded-xl border border-border bg-card p-5"
            >
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <div className="h-4 w-2/3 rounded bg-muted" />
              <div className="h-3 w-full rounded bg-muted/70" />
              <div className="h-3 w-4/5 rounded bg-muted/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
