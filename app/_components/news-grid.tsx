"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { AsideNewsStack } from "@/components/AsideNewsStack";
import { CompanyAdverts } from "@/components/CompanyAdverts";

function categoryLabel(cat: string | undefined) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Notice";
  return "News";
}
function categoryColor(cat: string | undefined) {
  if (cat === "press-release") return "bg-[#009f3b]/10 text-[#009f3b] border-[#009f3b]/20";
  if (cat === "announcement") return "bg-[#fea600]/10 text-[#fea600] border-[#fea600]/20";
  return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
}
function fmtDate(d: string | number) {
  return new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}

export function NewsUpdate() {
  const items = useQuery(api.news.list);
  const featured = items?.[0];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-1 h-6 rounded-full bg-nfvcb-green" />
        <h2 className="text-lg font-black text-foreground uppercase tracking-wide">Latest News &amp; Adverts</h2>
      </AnimatedSection>

      {featured && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main content */}
          <div className=" flex flex-col gap-5">
            <AnimatedSection>
              <Link href={`/news/${featured.slug}`} className="group block">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border pt-0">
                  <div className="relative h-56 sm:h-72 overflow-hidden bg-linear-to-br from-nfvcb-dark via-[#002b0e] to-nfvcb-dark">
                    {featured.coverImageUrl ? (
                      <Image
                        src={featured.coverImageUrl}
                        alt={featured.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-nfvcb-dark via-[#002b0e] to-nfvcb-dark">
                        <Image
                          src="/logo.webp"
                          alt="NFVCB Logo"
                          width={120}
                          height={120}
                          className="object-contain opacity-90 group-hover:opacity-60 transition-opacity duration-500"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 " />
                    <div className="absolute bottom-4 left-5">
                      <Badge className={`text-[15px] ${categoryColor(featured.category)} border-white/20 py-3 font-bold`}>
                        {categoryLabel(featured.category)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors line-clamp-2 text-balance leading-snug">
                      {featured.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-1 text-sm">{featured.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text- text-muted-foreground">
                      <span className="font-medium">{featured.author ?? "NFVCB"}</span>
                      <time dateTime={featured.publishedAt ?? new Date(featured._creationTime).toISOString()}>
                        {fmtDate(featured.publishedAt ?? featured._creationTime)}
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <aside className="">
            <div className="sticky top-24 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 min-w-0">
                <AsideNewsStack />
              </div>
              <div className="flex-1 min-w-0">
                <CompanyAdverts />
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
