import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { approvedMoviesPosts } from "@/lib/approved-movies-data";
import { ArrowRight, Calendar, Film, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Approved Movies — Monthly Classification Lists",
  description:
    "Browse monthly lists of films approved for public exhibition in Nigeria by the National Film and Video Censors Board. Includes Nollywood films, foreign productions, ratings, languages and consumer advice.",
  keywords: [
    "NFVCB approved movies",
    "approved films Nigeria",
    "classified movies Nigeria",
    "Nollywood approved films",
    "NFVCB monthly approvals",
    "films approved for exhibition Nigeria",
    "Nigerian film classification list",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/approved-movies" },
  openGraph: {
    title: "Approved Movies — Monthly Classification Lists | NFVCB",
    description:
      "Monthly lists of films approved for public exhibition in Nigeria — ratings, languages and consumer advice from NFVCB.",
    url: "https://nfvcb.gov.ng/approved-movies",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function ApprovedMoviesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#fea600]/20 text-[#fea600] border-[#fea600]/30">
              Classification &amp; Approval
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Approved Movies
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Browse monthly lists of movies approved for public exhibition in Nigeria by the NFVCB.
              Each list includes ratings, language, producer details, and consumer advisories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Film strip decoration */}
      <div className="h-3 bg-[#001506] flex overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-8 shrink-0 border-r-2 border-[#fea600]/30 h-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Film className="h-5 w-5 text-primary" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Monthly Approvals
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedMoviesPosts.map((post) => {
            const filmCount = post.movies.length;
            const langs = [...new Set(post.movies.map((f) => f.language))];
            const ratings = [...new Set(post.movies.map((f) => f.rating))];

            return (
              <StaggerItem key={post.slug}>
                <Link href={`/approved-movies/${post.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 pt-0">
                    {/* Thumbnail */}
                    <div className="relative h-44 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 flex items-center justify-center overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <Image
                            src="/logo.webp"
                            alt=""
                            width={80}
                            height={80}
                            className="opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                            aria-hidden
                          />
                          {/* film count badge */}
                          <div className="absolute bottom-3 right-3 bg-[#fea600] text-[#001506] text-xs font-bold px-2.5 py-1 rounded-full">
                            {filmCount} Movies
                          </div>
                        </>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <Badge className="w-fit text-[10px] mb-2 bg-[#009f3b]/10 text-[#009f3b] border-[#009f3b]/20">
                        Monthly Approval
                      </Badge>
                      <CardTitle className="text-base group-hover:text-primary transition-colors leading-snug text-balance">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {/* Languages */}
                      <div className="flex flex-wrap gap-1">
                        {langs.map((lang) => (
                          <span
                            key={lang}
                            className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>

                      {/* Ratings */}
                      <div className="flex flex-wrap gap-1">
                        {ratings.map((r) => (
                          <span
                            key={r}
                            className="text-[10px] px-2 py-0.5 bg-[#fea600]/10 text-[#fea600] rounded-full font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>

                      <CardDescription className="text-[10px]">
                        {filmCount} movie{filmCount !== 1 ? "s" : ""} approved this period
                      </CardDescription>

                      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {post.publishedBy}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-NG", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-primary font-medium group-hover:gap-2.5 transition-all pt-1">
                        View approvals <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* CTA */}
      <section className="bg-[#001506] py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Film className="h-10 w-10 text-[#fea600] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Submit a Film for Classification</h2>
            <p className="text-white/60 mb-6 text-sm max-w-xl mx-auto">
              Producers and distributors can submit films for classification and approval through the
              NFVCB Licensing office or the Digital Classification Portal.
            </p>
            <Link
              href="/industry/licensing"
              className="inline-flex items-center gap-2 bg-[#fea600] text-[#001506] font-semibold px-6 py-3 rounded-xl hover:bg-[#fea600]/90 transition-colors text-sm"
            >
              Start Licensing Process <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
