import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { AlertTriangle, Gavel, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Law Enforcement — Film Industry Compliance & Prosecution",
  description:
    "NFVCB law enforcement activities across Nigeria — types of film industry infringements, ongoing prosecution, pending court cases, and how the Board combats piracy and uncensored content distribution.",
  keywords: [
    "NFVCB law enforcement",
    "film piracy Nigeria",
    "uncensored films Nigeria",
    "NFVCB prosecution",
    "film industry infringement Nigeria",
    "NFVCB operations department",
    "film regulation enforcement Nigeria",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/law-enforcement" },
  openGraph: {
    title: "Law Enforcement — Film Industry Compliance & Prosecution | NFVCB",
    description:
      "NFVCB enforcement activities — infringement types, prosecution and pending cases combating piracy and uncensored content in Nigeria.",
    url: "https://nfvcb.gov.ng/law-enforcement",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const infringements = [
  "Distribution/exhibition of unapproved (uncensored/unclassified) films/video works and musical videos",
  "Distribution/exhibition of unapproved trailers/promos",
  "Distribution of films/video works without being a licensed Distributor",
  "Exhibition of films/video works without being a licensed Exhibitor",
  "Distributing/exhibiting films/video works and trailers in unlicensed premises",
  "Forging the Board's logo",
  "Forging the Board's classification symbols",
  "Forging the Board's receipts",
  "Forging the Board's certificates/licences",
  "Altering already approved films/video works, posters and promos/trailers",
  "Distributing/exhibiting pornographic films",
  "Obstructing field officers from carrying out their statutory duties",
  "Broadcasting unapproved films/video works by satellite/cable television operators",
  "Impersonation of officers of the Board (field officers)",
  "Exhibition of films with restricted classification to underage persons",
  "Failure of exhibitors to put the rating given to a film on their posters, handbills, adverts, etc.",
  "Exhibition of films classified as 'for restricted exhibition' in registered/licensed premises without authorisation",
  "Failure of exhibitors to project the classification certificate before exhibition",
  "Failure of distributors/exhibitors to distribute films in the intended film format",
  "Failure of distributors to label cassette package and spool with classification symbols",
  "Failure of distributors to submit to the Board a market copy of the classified and approved film",
  "Failure of distributors, exhibitors, importers and exporters to submit quarterly reports",
  "Failure of importers and exporters to obtain import or export permits from the Board",
];

const majorInfringements = [
  "Distribution/exhibition of unapproved (uncensored/unclassified) films/video works and musical videos",
  "Distribution/exhibition of unapproved trailers/promos",
  "Distribution of films/video works without being a licensed Distributor",
  "Exhibition of films/video works without being a licensed Exhibitor",
  "Distributing/exhibiting films/video works and trailers in unlicensed premises",
];

const pendingCases = [
  { parties: "NFVCB Vs Akinola Adegboyega", court: "Court of Appeal, Ibadan" },
  { parties: "Adewale Joseph Vs NFVCB", court: "FHC, Kaduna" },
  { parties: "Kingawa Ltd. Vs NFVCB & 2 Ors", court: "FHC, Jos" },
  { parties: "Registered Trustees of VCOAN Vs NFVCB", court: "FHC, Akure" },
  { parties: "Incorporated Trustees of Movie Makers and Marketers & 2 Ors Vs NFVCB & Anor", court: "FHC, Awka" },
  { parties: "Cajetan Obi Vs NFVCB & 7 Ors", court: "FHC, Awka" },
  { parties: "Divine Network Investment Ltd Vs NFVCB & 3 Ors", court: "FHC, Awka" },
  { parties: "Uchenna Nwachukwu & 2 Ors Vs NFVCB", court: "FHC, Awka" },
  { parties: "Onyeka Orajiaka & 12 Ors Vs NFVCB & Anor", court: "FHC, Awka" },
  { parties: "Hon. Olatunbosun Kazeem Vs Lagos State Film Committee & Anor", court: "Lagos State High Court" },
  { parties: "Incorporated Trustees of Motion Practitioners Association of Nigeria Vs Kano State Censorship Board & 3 Ors", court: "FHC, Kano" },
  { parties: "Chibuzor Obiajunwa Vs Chief Sunny Collins Nwatu & NFVCB", court: "FHC Awka" },
];

export default function LawEnforcementPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
              Enforcement
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Law Enforcement</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              NFVCB actively enforces compliance with the NFVCB Act 85 of 1993. Violations lead to
              arrest, prosecution, and sanctions. The Board&apos;s operations team monitors
              compliance nationwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Major infringements */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-red-500" /> Major Areas of Infringement
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            These are the most commonly detected violations during NFVCB field operations:
          </p>
          <div className="space-y-3">
            {majorInfringements.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* All infringements */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6">All Types of Infringements</h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-3">
            {infringements.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-red-300 dark:hover:border-red-800 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center text-[11px] font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Prosecution */}
        <AnimatedSection>
          <Card className="border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <Gavel className="h-5 w-5" /> Prosecution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p>
                The infringement of the Board&apos;s laws most times results in arrests and
                eventually prosecution of offenders. However, in some deserving cases, matters are
                settled out of court.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Pending Cases */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Gavel className="h-6 w-6 text-primary" /> Pending Cases
          </h2>
          <StaggerContainer className="space-y-3">
            {pendingCases.map(({ parties, court }, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{parties}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                      <Gavel className="h-3 w-3" /> {court}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </>
  );
}
