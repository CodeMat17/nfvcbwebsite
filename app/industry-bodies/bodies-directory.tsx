"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import { Globe, Mail, MapPin, Phone, Search, UserRound } from "lucide-react";
import type { IndustryBody } from "./data";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function siteHref(website: string) {
  return website.startsWith("http") ? website : `https://${website}`;
}

export function BodiesDirectory({ bodies }: { bodies: IndustryBody[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return bodies;
    return bodies.filter((body) =>
      [
        body.abbr,
        body.name,
        ...body.addresses,
        ...body.emails,
        ...body.contactPersons.map((p) => `${p.name} ${p.role}`),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [bodies, query]);

  return (
    <div className='space-y-8'>
      {/* Search */}
      <div className='sticky top-16 z-20 -mx-4 px-4 py-3 bg-background/80 backdrop-blur border-b border-border/60'>
        <div className='relative max-w-xl'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by guild, acronym, official or location…'
            className='pl-9'
            aria-label='Search registered associations and guilds'
          />
        </div>
        <p className='mt-2 text-xs text-muted-foreground'>
          Showing{" "}
          <span className='font-semibold text-foreground'>
            {filtered.length}
          </span>{" "}
          of {bodies.length} registered bodies
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className='py-20 text-center'>
          <p className='text-muted-foreground'>
            No association matches{" "}
            <span className='font-medium text-foreground'>“{query}”</span>.
          </p>
        </div>
      ) : (
        <StaggerContainer className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {filtered.map((body) => (
            <StaggerItem key={body.abbr}>
              <Card
                id={body.abbr.toLowerCase()}
                className='h-full scroll-mt-32 overflow-hidden border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg'>
                {/* Header */}
                <div className='relative border-b border-border/60 bg-muted/40 p-5'>
                  <div
                    className='absolute inset-y-0 left-0 w-1 bg-primary'
                    aria-hidden
                  />
                  <div className='flex items-start gap-3'>
                    {/* <span className='grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-[11px] font-black tracking-tight text-primary'>
                      {body.abbr.length > 5 ? body.abbr.slice(0, 5) : body.abbr}
                    </span> */}
                    <div className='min-w-0'>
                      <span className='grid h-11 w-26 shrink-0 place-items-center rounded-lg bg-primary/10 text-15px] font-black tracking text-primary'>
                        {body.abbr.length > 5
                          ? body.abbr.slice(0, 5)
                          : body.abbr}
                      </span>

                      {/* <Badge className='mb-1 border-0 bg-primary/10 text-[10px] font-bold uppercase tracking-wider text-primary'>
                        {body.abbr}
                      </Badge> */}
                      <h2 className='mt-1 text-sm font-bold leading-snug text-foreground'>
                        {body.name}
                      </h2>
                    </div>
                  </div>
                </div>

                <CardContent className='space-y-4 p-5 text-sm'>
                  {/* Officials */}
                  <ul className='space-y-3'>
                    {body.contactPersons.map((person) => (
                      <li
                        key={`${person.role}-${person.name}`}
                        className='flex gap-2.5'>
                        <UserRound className='mt-0.5 h-3.5 w-3.5 shrink-0 text-primary' />
                        <div className='min-w-0'>
                          <p className='text-[12px] font-semibold uppercase tracking-wider text-muted-foreground'>
                            {person.role}
                          </p>
                          <p className='font-medium text-foreground'>
                            {person.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className='h-px bg-border/60' />

                  {/* Addresses */}
                  <div className='space-y-1.5'>
                    {body.addresses.map((address) => (
                      <p
                        key={address}
                        className='flex gap-2.5 text-muted-foreground'>
                        <MapPin className='mt-0.5 h-3.5 w-3.5 shrink-0 text-primary' />
                        <span className='leading-snug'>{address}</span>
                      </p>
                    ))}
                  </div>

                  {/* Emails */}
                  {body.emails.length > 0 && (
                    <div className='space-y-1.5'>
                      {body.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className='flex gap-2.5 break-all text-muted-foreground transition-colors hover:text-primary'>
                          <Mail className='mt-0.5 h-3.5 w-3.5 shrink-0 text-primary' />
                          <span>{email}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Website + extra lines */}
                  {(body.website || body.additionalPhones?.length) && (
                    <div className='flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border/60 pt-3'>
                      {body.website && (
                        <a
                          href={siteHref(body.website)}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1.5 font-medium text-primary hover:underline'>
                          <Globe className='h-3.5 w-3.5' />
                          {body.website}
                        </a>
                      )}
                      {body.additionalPhones?.map((phone) => (
                        <a
                          key={phone}
                          href={telHref(phone)}
                          className='inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary'>
                          <Phone className='h-3.5 w-3.5' />
                          {phone}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
