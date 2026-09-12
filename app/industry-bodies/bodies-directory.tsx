"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import {
  ArrowDownAZ,
  Check,
  Copy,
  Globe,
  Mail,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { stateOf, statesInDirectory, type IndustryBody } from "./data";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function siteHref(website: string) {
  return website.startsWith("http") ? website : `https://${website}`;
}

type SortKey = "abbr" | "name" | "state";

const SORTS: ReadonlyArray<{ key: SortKey; label: string }> = [
  { key: "abbr", label: "Acronym" },
  { key: "name", label: "Full name" },
  { key: "state", label: "Location" },
];

/* ── Copy affordance ────────────────────────────────────────────────────────
   A toast would need a provider the site doesn't have, and a floating banner
   is louder than this interaction deserves. The button confirms in place and
   reverts itself, so the feedback lands exactly where the user clicked. */
function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard blocked (insecure origin or denied permission) — the value
         is still selectable text beside this button, so fail silently. */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground",
        "opacity-0 transition-all duration-(--duration-fast) ease-(--ease-out-soft)",
        "hover:bg-primary/10 hover:text-primary focus-visible:opacity-100",
        "group-hover/row:opacity-100",
        copied && "opacity-100 text-primary",
      )}
    >
      {copied ? (
        <Check className="size-3.5" aria-hidden />
      ) : (
        <Copy className="size-3.5" aria-hidden />
      )}
    </button>
  );
}

/* A single contact line: icon, selectable value, and a copy control that only
   surfaces on hover so the resting card stays quiet. */
function ContactRow({
  icon: Icon,
  children,
  copyValue,
  copyLabel,
}: {
  icon: typeof Mail;
  children: React.ReactNode;
  copyValue: string;
  copyLabel: string;
}) {
  return (
    <li className="group/row -mx-1.5 flex items-start gap-2.5 rounded-md px-1.5 py-1 transition-colors duration-(--duration-fast) hover:bg-muted/50">
      <Icon className="mt-[3px] size-3.5 shrink-0 text-primary/70" aria-hidden />
      <div className="min-w-0 flex-1 text-caption leading-relaxed">{children}</div>
      <CopyButton value={copyValue} label={copyLabel} />
    </li>
  );
}

function BodyCard({ body }: { body: IndustryBody }) {
  const state = stateOf(body);

  return (
    <article
      id={body.abbr.toLowerCase()}
      className={cn(
        "flex h-full scroll-mt-32 flex-col rounded-xl bg-card",
        "ring-1 ring-foreground/10 shadow-1",
        "transition-[box-shadow,transform,--tw-ring-color] duration-(--duration-base) ease-(--ease-out-expo)",
        "hover:-translate-y-0.5 hover:shadow-3 hover:ring-primary/30",
      )}
    >
      {/* Identity */}
      <header className="flex flex-col gap-3 p-5 pb-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-overline uppercase text-primary">
            {body.abbr}
          </span>
          <span className="inline-flex items-center gap-1 text-caption text-muted-foreground">
            <MapPin className="size-3" aria-hidden />
            {state}
          </span>
        </div>
        <h2 className="text-h4 font-bold leading-snug text-balance text-foreground">
          {body.name}
        </h2>
      </header>

      <div className="h-px bg-border/70" aria-hidden />

      {/* Officials — a definition list, because that is what it is. */}
      <dl className="grid gap-3 p-5 py-4">
        {body.contactPersons.map((person) => (
          <div key={`${person.role}-${person.name}`} className="grid gap-0.5">
            <dt className="text-overline uppercase text-muted-foreground">
              {person.role}
            </dt>
            <dd className="text-body font-semibold text-foreground">
              {person.name}
            </dd>
          </div>
        ))}
      </dl>

      <div className="h-px bg-border/70" aria-hidden />

      {/* Contact channels */}
      <ul className="grid gap-0.5 p-5 py-4">
        {body.addresses.map((address) => (
          <ContactRow
            key={address}
            icon={MapPin}
            copyValue={address}
            copyLabel="address"
          >
            <span className="text-muted-foreground">{address}</span>
          </ContactRow>
        ))}

        {body.emails.map((email) => (
          <ContactRow key={email} icon={Mail} copyValue={email} copyLabel="email address">
            <a
              href={`mailto:${email}`}
              className="break-all text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {email}
            </a>
          </ContactRow>
        ))}

        {body.additionalPhones?.map((phone) => (
          <ContactRow key={phone} icon={Phone} copyValue={phone} copyLabel="phone number">
            <a
              href={telHref(phone)}
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {phone}
            </a>
          </ContactRow>
        ))}

        {body.website && (
          <ContactRow
            icon={Globe}
            copyValue={siteHref(body.website)}
            copyLabel="website"
          >
            <a
              href={siteHref(body.website)}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-medium text-primary underline-offset-4 hover:underline"
            >
              {body.website}
            </a>
          </ContactRow>
        )}
      </ul>
    </article>
  );
}

export function BodiesDirectory({ bodies }: { bodies: IndustryBody[] }) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All");
  const [sort, setSort] = useState<SortKey>("abbr");

  const states = useMemo(() => statesInDirectory(bodies), [bodies]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matches = bodies.filter((body) => {
      if (state !== "All" && stateOf(body) !== state) return false;
      if (!q) return true;
      return [
        body.abbr,
        body.name,
        ...body.addresses,
        ...body.emails,
        ...body.contactPersons.map((p) => `${p.name} ${p.role}`),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });

    const collator = new Intl.Collator("en", { sensitivity: "base" });
    return [...matches].sort((a, b) => {
      if (sort === "name") return collator.compare(a.name, b.name);
      if (sort === "state") {
        const byState = collator.compare(stateOf(a), stateOf(b));
        if (byState !== 0) return byState;
      }
      return collator.compare(a.abbr, b.abbr);
    });
  }, [bodies, query, state, sort]);

  /* Groups drive both the section headings and the jump rail. Grouping follows
     whatever the active sort is, so the rail always matches what is on screen:
     letters for the two alphabetical sorts, state names for the location sort. */
  const groups = useMemo(() => {
    const map = new Map<string, IndustryBody[]>();
    for (const body of filtered) {
      const key =
        sort === "state"
          ? stateOf(body)
          : (sort === "name" ? body.name : body.abbr).charAt(0).toUpperCase();
      const bucket = map.get(key);
      if (bucket) bucket.push(body);
      else map.set(key, [body]);
    }
    return [...map.entries()];
  }, [filtered, sort]);

  const hasFilters = query.trim() !== "" || state !== "All";
  const clearAll = useCallback(() => {
    setQuery("");
    setState("All");
  }, []);

  return (
    <div className="space-y-8">
      {/* ── Toolbar ─────────────────────────────────────────────────────────
          Sticky under the fixed header so search and filters stay reachable
          while scrolling a long directory. */}
      <div className="sticky top-(--header-h) z-20 -mx-4 border-b border-border/70 bg-background/85 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative lg:max-w-md lg:flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guild, acronym, official or location…"
              className="h-11 rounded-lg pl-9 pr-9 text-body"
              aria-label="Search registered associations and guilds"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" aria-hidden />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Location filter */}
            <label className="relative inline-flex items-center">
              <span className="sr-only">Filter by location</span>
              <SlidersHorizontal
                className="pointer-events-none absolute left-3 size-3.5 text-muted-foreground"
                aria-hidden
              />
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="h-11 appearance-none rounded-lg border border-input bg-transparent pl-9 pr-8 text-caption font-medium text-foreground transition-colors hover:border-ring/60"
              >
                <option value="All">All locations</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            {/* Sort */}
            <label className="relative inline-flex items-center">
              <span className="sr-only">Sort directory</span>
              <ArrowDownAZ
                className="pointer-events-none absolute left-3 size-3.5 text-muted-foreground"
                aria-hidden
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-11 appearance-none rounded-lg border border-input bg-transparent pl-9 pr-8 text-caption font-medium text-foreground transition-colors hover:border-ring/60"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            {hasFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex h-11 items-center gap-1.5 rounded-lg px-3 text-caption font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" aria-hidden />
                Reset
              </button>
            )}
          </div>
        </div>

        <p className="mt-3 text-caption text-muted-foreground" aria-live="polite">
          Showing{" "}
          <span className="font-bold text-foreground">{filtered.length}</span> of{" "}
          {bodies.length} registered bodies
          {state !== "All" && <> in {state}</>}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-20 text-center">
          <p className="text-body text-muted-foreground">
            No association matches{" "}
            {query && (
              <span className="font-semibold text-foreground">“{query}”</span>
            )}
            {query && state !== "All" && " in "}
            {state !== "All" && (
              <span className="font-semibold text-foreground">{state}</span>
            )}
            .
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-4 text-caption font-semibold text-primary underline-offset-4 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* ── Jump rail ───────────────────────────────────────────────────
              A vertical index beside the grid on large screens; a horizontal
              chip strip above it on small ones. */}
          <nav
            aria-label="Jump to group"
            className="mb-2 lg:sticky lg:top-[calc(var(--header-h)+9rem)] lg:mb-0 lg:w-14 lg:shrink-0"
          >
            <ul className="flex flex-wrap gap-1 lg:flex-col lg:gap-0.5">
              {groups.map(([key]) => (
                <li key={key}>
                  <a
                    href={`#group-${encodeURIComponent(key)}`}
                    className={cn(
                      "grid h-8 min-w-8 place-items-center rounded-md px-2",
                      "text-caption font-bold text-muted-foreground",
                      "transition-colors duration-(--duration-fast)",
                      "hover:bg-primary/10 hover:text-primary",
                    )}
                  >
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 flex-1 space-y-10">
            {groups.map(([key, items]) => (
              <section
                key={key}
                id={`group-${encodeURIComponent(key)}`}
                aria-labelledby={`heading-${encodeURIComponent(key)}`}
                className="scroll-mt-[calc(var(--header-h)+8rem)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <h2
                    id={`heading-${encodeURIComponent(key)}`}
                    className="text-overline uppercase text-accent"
                  >
                    {key}
                  </h2>
                  <span className="h-px flex-1 bg-border" aria-hidden />
                  <span className="text-caption tabular-nums text-muted-foreground">
                    {items.length}
                  </span>
                </div>

                <StaggerContainer className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((body) => (
                    <StaggerItem key={body.abbr}>
                      <BodyCard body={body} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
