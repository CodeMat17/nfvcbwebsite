"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import type { ApprovedMoviesPost } from "@/lib/approved-movies-data";
import { ArrowRight, Calendar, Film, Search, User, X } from "lucide-react";

interface Props {
  posts: ApprovedMoviesPost[];
}

/** Extract "Month Year" from titles like "Approved Movies — March 2026" */
function monthChipFromTitle(title: string) {
  const match = title.match(/([A-Za-z]+ \d{4})/);
  return match ? match[1] : title;
}

export function MoviesClient({ posts }: Props) {
  const [query, setQuery] = useState("");

  const months = useMemo(
    () => [...new Set(posts.map((p) => monthChipFromTitle(p.title)))],
    [posts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => p.title.toLowerCase().includes(q));
  }, [posts, query]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-8 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by month, e.g. March 2026"
          className="w-full pl-9 pr-9 py-2.5 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

    

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground gap-3">
          <Film className="h-10 w-10 opacity-30" />
          <p className="text-sm">No approvals found for &ldquo;{query}&rdquo;</p>
          <button
            onClick={() => setQuery("")}
            className="text-xs text-primary underline underline-offset-2"
          >
            Clear search
          </button>
        </div>
      ) : (
        <StaggerContainer className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const filmCount = post.movies.length;
            const langs = [...new Set(post.movies.map((f) => f.language))];
            const ratings = [...new Set(post.movies.map((f) => f.rating))];

            return (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/approved-movies/${post.slug}`}
                  className='group block h-full'>
                  <Card className='h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 pt-0'>
                    <div className='relative h-44 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 flex items-center justify-center overflow-hidden'>
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-500'
                        />
                      ) : (
                        <>
                          <Image
                            src='/logo.webp'
                            alt=''
                            width={80}
                            height={80}
                            className='opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500'
                            aria-hidden
                          />
                          <div className='absolute bottom-3 right-3 bg-[#fea600] text-[#001506] text-xs font-bold px-2.5 py-1 rounded-full'>
                            {filmCount} Movies
                          </div>
                        </>
                      )}
                    </div>

                   
                    <h1 className='px-4 font-bold'>{post.title}</h1>

                    <CardContent className='space-y-2'>
                      <div className='flex flex-wrap gap-1'>
                        {langs.map((lang) => (
                          <span
                            key={lang}
                            className='text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground'>
                            {lang}
                          </span>
                        ))}
                      </div>

                      <div className='flex flex-wrap gap-1'>
                        {ratings.map((r) => (
                          <span
                            key={r}
                            className='text-[10px] px-2 py-0.5 bg-[#fea600]/10 text-[#fea600] rounded-full font-medium'>
                            {r}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center justify-between text-[10px] text-muted-foreground pt-1'>
                        <span className='flex items-center gap-1'>
                          <User className='h-3 w-3' /> {post.publishedBy}
                        </span>
                        <span className='flex items-center gap-1'>
                          <Calendar className='h-3 w-3' />
                          {new Date(post.date).toLocaleDateString("en-NG", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <div className='flex items-center gap-1.5 text-xs text-primary font-medium group-hover:gap-2.5 transition-all pt-1'>
                        View approvals <ArrowRight className='h-3.5 w-3.5' />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}
    </div>
  );
}
