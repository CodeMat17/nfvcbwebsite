import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Departments & Units — NFVCB Organisational Structure",
  description:
    "Explore all departments and units of the National Film and Video Censors Board — Administration, Censorship & Classification, Licensing, Operations, Legal Services, ICT, Finance, and more.",
  keywords: [
    "NFVCB departments",
    "NFVCB organisational structure",
    "NFVCB censorship department",
    "NFVCB licensing department",
    "NFVCB legal department",
    "Nigeria film board departments",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/departments" },
  openGraph: {
    title: "Departments & Units — NFVCB Organisational Structure",
    description:
      "Explore all departments of the National Film and Video Censors Board including Censorship, Licensing, Operations, Legal, ICT and Finance.",
    url: "https://nfvcb.gov.ng/departments",
    images: [{ url: "/opengraph-image-v2.png", width: 1200, height: 630 }],
  },
};

const ACCENTS = ["#009f3b", "#10b981", "#14b8a6"] as const;

const departments = [
  { name: "Executive Director's Office", icon: "🏛️" },
  { name: "Administration Department", icon: "⚙️" },
  { name: "Film Censorship & Classification Department", icon: "🎬" },
  { name: "Licensing & Documentation Department", icon: "📋" },
  { name: "Operations Department", icon: "🗺️" },
  { name: "Planning, Research & Statistics Department", icon: "📊" },
  { name: "Service Innovation Department", icon: "💡" },
  { name: "Legal Department", icon: "⚖️" },
  { name: "Accounts Department", icon: "💼" },
  { name: "Corporate Affairs Department", icon: "📣" },
];

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-nfvcb-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-nfvcb-green/20 text-nfvcb-green border-nfvcb-green/30">
              Organisation
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Departments
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              NFVCB is organised into specialised departments, each playing a vital role in
              delivering the Board&apos;s statutory mandate to regulate Nigeria&apos;s film and
              video industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map(({ name, icon }, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <StaggerItem key={name}>
                <div className="group relative h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
                  {/* coloured top bar */}
                  <div className="h-1.5 w-full" style={{ background: accent }} />
                  <div className="p-6 flex flex-col gap-4">
                    {/* icon circle */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: `${accent}18` }}
                    >
                      {icon}
                    </div>
                    {/* index badge + name */}
                    <div>
                      <span
                        className="text-[15px] font-semibold tracking-widest uppercase mb-1 block"
                        style={{ color: accent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-semibold leading-snug text-foreground">
                        {name}
                      </h3>
                    </div>
                  </div>
                  {/* subtle glow on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 40px 0 ${accent}18` }}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </>
  );
}
