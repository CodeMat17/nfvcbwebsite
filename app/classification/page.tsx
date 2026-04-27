import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, Clapperboard, Receipt } from "lucide-react";

export const metadata: Metadata = {
  title: "Film Classification Symbols — G, PG, 12, 15, 18, RE",
  description:
    "Official NFVCB film and video classification symbols explained — G (General), PG (Parental Guidance), 12, 12A, 15, 18 and RE (Restricted Exhibition). Understand what each rating means for Nigerian audiences.",
  keywords: [
    "film classification symbols Nigeria",
    "NFVCB ratings",
    "G rating Nigeria",
    "PG rating Nigeria",
    "18 rating Nigeria",
    "RE restricted exhibition Nigeria",
    "movie ratings Nigeria",
    "film age rating Nigeria",
    "Nigerian film classification guide",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/classification" },
  openGraph: {
    title: "Film Classification Symbols — G, PG, 12, 15, 18, RE | NFVCB",
    description:
      "Official NFVCB film classification symbols explained. Understand what G, PG, 12, 15, 18 and RE ratings mean for Nigerian audiences.",
    url: "https://nfvcb.gov.ng/classification",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const symbols = [
  {
    src: "/classification_symbols/symbol_G.jpg",
    label: "G",
    title: "General",
    description:
      "Suitable for all audiences. Content contains nothing that would harm or disturb any age group, including young children.",
  },
  {
    src: "/classification_symbols/symbol_PG.jpg",
    label: "PG",
    title: "Parental Guidance",
    description:
      "General viewing, but some scenes may be unsuitable for young children. Parents are advised to watch with younger children.",
  },
  {
    src: "/classification_symbols/symbol_12.jpg",
    label: "12",
    title: "12 Years and Above",
    description:
      "Suitable only for persons of 12 years and over. Not to be supplied to any person below that age.",
  },
  {
    src: "/classification_symbols/symbol_12A.png",
    label: "12A",
    title: "12 Years and Above (Accompanied)",
    description:
      "Suitable for 12 years and above, but younger children may watch when accompanied by a responsible adult who has deemed the content appropriate.",
  },
  {
    src: "/classification_symbols/symbol_15.jpg",
    label: "15",
    title: "15 Years and Above",
    description:
      "Suitable only for persons of 15 years and over. Content may include stronger language, themes, or references not appropriate for younger audiences.",
  },
  {
    src: "/classification_symbols/symbol_18.jpg",
    label: "18",
    title: "18 Years and Above",
    description:
      "Suitable only for adults aged 18 and over. Content may include adult themes, strong language, nudity, or violence.",
  },
  {
    src: "/classification_symbols/symbol_RE.jpg",
    label: "RE",
    title: "Restricted Exhibition",
    description:
      "Content is restricted to specific controlled exhibition settings only, such as licensed adult venues. Not for general public distribution.",
  },
];

/* ─── fees data ─── */
const filmFees = [
  { item: 1, runtime: "0 – 15 min",       local: "₦10,000", english: "₦20,000", foreign: "₦25,000" },
  { item: 2, runtime: "16 – 30 min",      local: "₦20,000", english: "₦30,000", foreign: "₦40,000" },
  { item: 3, runtime: "31 – 60 min",      local: "₦30,000", english: "₦40,000", foreign: "₦50,000" },
  { item: 4, runtime: "61 – 90 min",      local: "₦40,000", english: "₦50,000", foreign: "₦60,000" },
  { item: 5, runtime: "91 – 120 min",     local: "₦45,000", english: "₦60,000", foreign: "₦70,000" },
  { item: 6, runtime: "121 – 150 min",    local: "₦60,000", english: "₦70,000", foreign: "₦80,000" },
  { item: 7, runtime: "151 – 200 min",    local: "₦60,000", english: "₦80,000", foreign: "₦90,000" },
  { item: 8, runtime: "201 – 300 min",    local: "₦60,000", english: "₦90,000", foreign: "₦100,000" },
  { item: 9, runtime: "300+ min",         local: "₦75,000", english: "₦90,000", foreign: "₦150,000" },
];

const trailerFees = [
  { category: "Classification of Trailers", local: "₦5,000", english: "₦7,500", foreign: "₦7,500" },
];

const otherFees = [
  {
    category: "Cost of Appeal",
    note: "₦5,000 application fee + cost of constituting a review committee",
    uniform: true,
  },
  {
    category: "Application for Exemption",
    note: "50% of the applicable classification fee",
    uniform: true,
  },
  {
    category: "Title Change",
    note: "₦10,000 (all categories)",
    uniform: true,
  },
];

/* ─── page ─── */
export default function ClassificationsPage() {
  return (
    <main className="min-h-screen pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── page hero ── */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Classification & Fees
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Official NFVCB classification symbols and schedule of fees for film, trailer
            and video content submitted for classification in Nigeria.
          </p>
        </AnimatedSection>

        {/* ══════════════════════════════════════════
            SECTION 1 — FILM CLASSIFICATION FEES
        ══════════════════════════════════════════ */}
        <AnimatedSection className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-[#009f3b]" aria-hidden />
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
              Classification Fees — Films
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Fees are based on the runtime of the film. A surcharge of{" "}
            <span className="font-semibold text-foreground">+30%</span> of the applicable
            fee applies to films intended for public exhibition. Fast-track processing
            attracts an additional <span className="font-semibold text-foreground">₦50,000</span> on
            top of any category fee.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filmFees.map(({ item, runtime, local, english, foreign }) => (
            <StaggerItem key={item}>
              <Card className="h-full border-border hover:shadow-md transition-shadow hover:border-[#009f3b]/30">
                <CardHeader className="pb-2 pt-5 px-5">
                  <div className="flex items-center justify-between mb-1">
                    <Badge className="bg-[#009f3b]/10 text-[#009f3b] border-[#009f3b]/20 border text-sm font-bold text-center">
                      Item {item}
                    </Badge>
                    <span className="text-sm font-bold text-muted-foreground">{runtime}</span>
                  </div>
                  <CardTitle className="text-sm font-black text-foreground leading-snug sr-only">
                    {runtime}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 space-y-2.5">
                  <div className="flex items-center justify-between py-2 border-b border-border/60">
                    <span className="text-sm text-muted-foreground">Local Language</span>
                    <span className="text-sm font-bold text-foreground">{local}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/60">
                    <span className="text-sm text-muted-foreground">English Language</span>
                    <span className="text-sm font-bold text-foreground">{english}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">Foreign Film</span>
                    <span className="text-sm font-bold text-foreground">{foreign}</span>
                  </div>
                  <div className="mt-1 rounded-lg bg-[#fea600]/8 border border-[#fea600]/20 px-3 py-2 flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#fea600]">PUBLIC EXHIBITION</span>
                    <span className="text-[11px] text-muted-foreground ml-auto">+30% of fee</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fast-track banner */}
        <AnimatedSection className="mb-14">
          <div className="rounded-2xl border border-[#009f3b]/25 bg-[#009f3b]/5 px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#009f3b]/15 flex items-center justify-center shrink-0">
              <Film className="h-5 w-5 text-[#009f3b]" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-black text-foreground">Fast-Track Processing</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                An additional <span className="font-bold text-foreground">₦50,000</span> is charged
                on top of the applicable category fee for expedited classification of films.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ══════════════════════════════════════════
            SECTION 2 — TRAILER FEES
        ══════════════════════════════════════════ */}
        <AnimatedSection className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-[#fea600]" aria-hidden />
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
              Classification Fees — Trailers
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Trailers submitted separately for classification are subject to the following fees.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-14">
          {[
            { label: "Nigerian (Local Language)", amount: "₦5,000", color: "text-[#009f3b]", ring: "border-[#009f3b]/20 bg-[#009f3b]/5" },
            { label: "Nigerian (English Language)", amount: "₦7,500", color: "text-[#fea600]", ring: "border-[#fea600]/20 bg-[#fea600]/5" },
            { label: "Foreign Film Trailer", amount: "₦7,500", color: "text-blue-500", ring: "border-blue-500/20 bg-blue-500/5" },
          ].map(({ label, amount, color, ring }) => (
            <StaggerItem key={label}>
              <Card className={`border ${ring} hover:shadow-md transition-shadow`}>
                <CardContent className="flex flex-col items-center text-center gap-3 py-7">
                  <Clapperboard className={`h-7 w-7 ${color}`} aria-hidden />
                  <p className="text-sm font-semibold text-muted-foreground">{label}</p>
                  <p className={`text-2xl font-black ${color}`}>{amount}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ══════════════════════════════════════════
            SECTION 3 — OTHER FEES
        ══════════════════════════════════════════ */}
        <AnimatedSection className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-purple-500" aria-hidden />
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
              Other Fees
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Administrative charges for appeals, exemptions and title changes.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-16">
          {otherFees.map(({ category, note }) => (
            <StaggerItem key={category}>
              <Card className="h-full border-border hover:shadow-md transition-shadow hover:border-purple-500/30">
                <CardContent className="flex flex-col gap-3 py-6 px-5 h-full">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Receipt className="h-4 w-4 text-purple-500" aria-hidden />
                  </div>
                  <p className="text-sm font-black text-foreground">{category}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ══════════════════════════════════════════
            SECTION 4 — CLASSIFICATION SYMBOLS
        ══════════════════════════════════════════ */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-blue-500" aria-hidden />
            <h2 className="text-lg font-black uppercase tracking-wide text-foreground">
              Classification Symbols
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The NFVCB uses these official symbols to indicate the suitability of film and video
            content for different audience age groups across Nigeria.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {symbols.map(({ src, label, title, description }) => (
            <StaggerItem key={label}>
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 h-full hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={src}
                    alt={`${label} classification symbol`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
               
                  <h2 className="text-base font-semibold text-foreground mb-2">{title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
