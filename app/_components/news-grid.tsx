"use client";

import Link from "next/link";
import { Film, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { newsItems } from "@/lib/news-data";
import { AsideNewsStack } from "@/components/AsideNewsStack";

function categoryLabel(cat: string) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Notice";
  return "News";
}
function categoryColor(cat: string) {
  if (cat === "press-release") return "bg-[#009f3b]/10 text-[#009f3b] border-[#009f3b]/20";
  if (cat === "announcement") return "bg-[#fea600]/10 text-[#fea600] border-[#fea600]/20";
  return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}

const sorted = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function NewsUpdate() {
  const featured = sorted[0];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-1 h-6 rounded-full bg-nfvcb-green" />
        <h2 className="text-lg font-black text-foreground uppercase tracking-wide">News &amp; Updates</h2>
      </AnimatedSection>

      {featured && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <AnimatedSection>
              <Link href={`/news/${featured.slug}`} className="group block">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border pt-0">
                  <div className="relative h-56 sm:h-72 overflow-hidden bg-linear-to-br from-nfvcb-dark via-[#002b0e] to-nfvcb-dark">
                    <div className="absolute inset-0 opacity-[0.18]" aria-hidden style={{
                      backgroundImage: "linear-gradient(rgba(0,159,59,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,159,59,0.25) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }} />
                    <div className="absolute left-0 top-0 bottom-0 w-1" aria-hidden style={{
                      background: featured.category === "press-release" ? "#009f3b" :
                                  featured.category === "announcement" ? "#fea600" : "#3b82f6",
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        {featured.category === "press-release" ? <Film className="h-10 w-10 text-nfvcb-green/60" aria-hidden /> :
                         featured.category === "announcement" ? <Sparkles className="h-10 w-10 text-nfvcb-gold/60" aria-hidden /> :
                         <Globe className="h-10 w-10 text-blue-400/60" aria-hidden />}
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 flex h-4 overflow-hidden opacity-30" aria-hidden>
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="shrink-0 w-5 h-4 border-r border-white/30 bg-black/40" />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <Badge className={`text-sm ${categoryColor(featured.category)} border`}>
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
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-medium">{featured.author}</span>
                      <time dateTime={featured.date}>{fmtDate(featured.date)}</time>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>

        
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <AsideNewsStack />
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
