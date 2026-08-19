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
        <div className="relative z-10 section">
          <AnimatedSection>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Organisation
            </Badge>
            <h1 className="text-h1 font-black text-white mb-4">
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

      <div className="section py-16">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* The rotating three-colour accent scheme was removed — the hue
              carried no meaning, it just cycled by array index. */}
          {departments.map(({ name, icon }, index) => (
            <StaggerItem key={name}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-3">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex flex-col gap-4 p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-2xl">
                    <span aria-hidden>{icon}</span>
                  </div>
                  <div>
                    <span className="mb-1 block text-overline uppercase text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-h4 font-semibold leading-snug text-foreground">
                      {name}
                    </h3>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
