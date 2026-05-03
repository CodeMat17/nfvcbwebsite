"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import type { NewsItem } from "@/lib/news-data";
import { ArrowRight, Calendar, User, Search } from "lucide-react";

function categoryLabel(cat: string) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Announcement";
  return "News";
}

function categoryColor(cat: string) {
  if (cat === "press-release") return "bg-[#009f3b]/10 text-[#009f3b] border-[#009f3b]/20";
  if (cat === "announcement") return "bg-[#fea600]/10 text-[#fea600] border-[#fea600]/20";
  return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
}




interface Props {
  items: NewsItem[];
}

export default function NewsClient({ items }: Props) {
  const [query, setQuery] = useState("");


  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) =>
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q)
    );
  }, [items, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="space-y-10">
      {/* Search + Filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search by title or author…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>

      
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center text-muted-foreground text-sm">
          No stories match your search.
        </div>
      ) : (
        <>
          {/* Featured */}
          <AnimatedSection>
            <h2 className="font-semibold text-muted-foreground mb-4 uppercase tracking-wider text-sm">
              Featured Story
            </h2>
            <Link href={`/news/${featured.slug}`} className="group block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 py-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-56 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 flex items-center justify-center overflow-hidden">
                    {featured.image ? (
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src="/logo.webp"
                        alt=""
                        width={160}
                        height={160}
                        className="opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                        aria-hidden
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className={`w-fit mb-3 text-xs ${categoryColor(featured.category)}`}>
                      {categoryLabel(featured.category)}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-snug text-balance">
                      {featured.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" /> {featured.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(featured.date).toLocaleDateString("en-NG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                      Read full story <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </AnimatedSection>

          {/* Rest */}
          {rest.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                All Stories
              </h2>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((item) => (
                  <StaggerItem key={item.slug}>
                    <Link href={`/news/${item.slug}`} className="group block h-full">
                      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 pt-0">
                        <div className="relative h-44 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 flex items-center justify-center overflow-hidden">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <Image
                              src="/logo.webp"
                              alt=""
                              width={80}
                              height={80}
                              className="opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                              aria-hidden
                            />
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <Badge className={`w-fit text-[12px] mb-2 ${categoryColor(item.category)}`}>
                            {categoryLabel(item.category)}
                          </Badge>
                          <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2 text-balance leading-snug">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-2 text-xs mb-3">
                            {item.excerpt}
                          </CardDescription>
                          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                            <span>{item.author}</span>
                            <span>
                              {new Date(item.date).toLocaleDateString("en-NG", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
}
