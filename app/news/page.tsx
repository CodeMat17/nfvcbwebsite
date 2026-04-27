import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { newsItems } from "@/lib/news-data";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "News, Press Releases & Announcements",
  description:
    "Stay updated with the latest news, press releases and official announcements from the National Film and Video Censors Board of Nigeria — enforcement reports, policy updates, industry developments and more.",
  keywords: [
    "NFVCB news",
    "NFVCB press releases",
    "Nigeria film industry news",
    "NFVCB announcements",
    "Nollywood regulation news",
    "NFVCB latest news",
    "film board Nigeria news",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/news" },
  openGraph: {
    title: "News, Press Releases & Announcements | NFVCB",
    description:
      "Latest official news, press releases and announcements from Nigeria's National Film and Video Censors Board.",
    url: "https://nfvcb.gov.ng/news",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

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

export default function NewsPage() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Media Centre
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              News &amp; Press Releases
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Stay up to date with the latest news, press releases, and official announcements from
              the National Film and Video Censors Board.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Featured */}
        <AnimatedSection>
          <h2 className="text-lg font-semibold text-muted-foreground mb-4 uppercase tracking-wider text-xs">
            Featured Story
          </h2>
          <Link href={`/news/${featured.slug}`} className="group block">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 pt-0">
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

        {/* All other news */}
        <div>
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider text-xs">
            All Stories
          </h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Badge className={`w-fit text-[10px] mb-2 ${categoryColor(item.category)}`}>
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
      </div>
    </>
  );
}
