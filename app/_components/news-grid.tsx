"use client";

import { useState } from "react";
import Link from "next/link";
import { Film, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { newsItems } from "@/lib/news-data";

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

const navTabs = [
  { label: "All", category: "all" },
  { label: "Press Releases", category: "press-release" },
  { label: "Announcements", category: "announcement" },
  { label: "News", category: "news" },
];

export function NewsGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = activeTab === "all"
    ? newsItems
    : newsItems.filter((n) => n.category === activeTab);

  const featured = filtered[0];
  const rest = filtered.slice(1, 5);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 rounded-full bg-[#009f3b]" />
          <h2 className="text-lg font-black text-foreground uppercase tracking-wide">News &amp; Updates</h2>
        </div>
        <div className="flex gap-1 flex-wrap" role="tablist" aria-label="Filter news by category">
          {navTabs.map(({ label, category }) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeTab === category}
              onClick={() => setActiveTab(category)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                activeTab === category
                  ? "bg-[#009f3b] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {featured && (
        <div className="grid lg:grid-cols-3 gap-5">
          <AnimatedSection className="lg:col-span-2">
            <Link href={`/news/${featured.slug}`} className="group block h-full">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border pt-0">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <Badge className={`text-xs ${categoryColor(featured.category)} border`}>
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

          <StaggerContainer className="flex flex-col gap-3">
            {rest.map((item) => (
              <StaggerItem key={item.slug}>
                <Link href={`/news/${item.slug}`} className="group block">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5">
                    <CardContent className="p-4 flex gap-3 items-start">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                        item.category === "press-release" ? "bg-nfvcb-green/15 border border-nfvcb-green/25" :
                        item.category === "announcement" ? "bg-nfvcb-gold/15 border border-nfvcb-gold/25" :
                        "bg-blue-500/10 border border-blue-500/20"
                      }`}>
                        {item.category === "press-release" ? <Film className="h-5 w-5 text-nfvcb-green/80" aria-hidden /> :
                         item.category === "announcement" ? <Sparkles className="h-5 w-5 text-nfvcb-gold/80" aria-hidden /> :
                         <Globe className="h-5 w-5 text-blue-400/80" aria-hidden />}
                      </div>
                      <div className="min-w-0">
                        <Badge className={`text-[9px] mb-1 px-1.5 py-0 ${categoryColor(item.category)} border`}>
                          {categoryLabel(item.category)}
                        </Badge>
                        <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </p>
                        <time dateTime={item.date} className="text-[10px] text-muted-foreground mt-1 block">
                          {fmtDate(item.date)}
                        </time>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link href="/news" className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-primary border border-primary/30 rounded-xl hover:bg-primary/5 transition-colors uppercase tracking-wider">
                All Stories <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      )}
    </section>
  );
}
