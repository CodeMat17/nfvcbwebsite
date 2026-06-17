import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Management Team — Leadership & Principal Officers",
  description:
    "Meet the leadership of the National Film and Video Censors Board — Director-General Dr. Shaibu Husseini, principal officers, and senior management staff driving Nigeria's film regulatory agenda.",
  keywords: [
    "NFVCB management",
    "NFVCB director general",
    "Dr Shaibu Husseini",
    "NFVCB principal officers",
    "NFVCB leadership",
    "Nigeria film board management",
    "NFVCB senior staff",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/management" },
  openGraph: {
    title: "Management Team — Leadership & Principal Officers | NFVCB",
    description:
      "Meet Director-General Dr. Shaibu Husseini and the senior leadership team of the National Film and Video Censors Board.",
    url: "https://nfvcb.gov.ng/management",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

// ─── Data Sources ────────────────────────────────────────────────────────────

const principalOfficers = [
  {
    name: "President Bola Ahmed Tinubu, GCFR",
    title: "President",
    subtitle: "Federal Republic of Nigeria",
    image: "/management_staff/president.webp",
  },
  {
    name: "Vice President Kashim Shettima, GCON",
    title: "Vice President",
    subtitle: "Federal Republic of Nigeria",
    image: "/management_staff/vp.webp",
  },
  {
    name: "Hon. Hannatu Musawa, Esq.",
    title: "Honourable Minister",
    subtitle: "Ministry of Arts, Culture, Tourism and Creative Economy",
    image: "/management_staff/minister.webp",
  },
];

// Ordered: Directors → Heads → Ag. Heads → Zonal Coordinators
const seniorManagement = [
  // Directors
  {
    name: "Deborah A. Malgwi",
    position: "Director, Film Censorship & Classification",
    image: "/management_staff/fcc.webp",
  },
  {
    name: "Peace Ononobi",
    position: "Director, Service Innovation Department",
    image: "/management_staff/sid.jpeg",
  },
  {
    name: "Onwumere Ogbonna",
    position: "Director, Corporate Affairs",
    image: "/management_staff/ca.webp",
  },
  {
    name: "Francis Nzekwu Esq.",
    position: "Director, Planning Research & Statistics",
    image: "/management_staff/prs.jpg",
  },

  {
    name: "Etuechere Martins",
    position: "Director, Operations",
    image: "/management_staff/sd.jpeg",
  },
  {
    name: "Olaoye Samuel",
    position: "Ag. Head, Administrative Department",
    image: "/management_staff/admin.jpeg",
  },
  {
    name: "Hasina D. Nasir",
    position: "Head, Legal Services",
    image: "/management_staff/lg.jpg",
  },
  {
    name: "Isaac Adeyemi",
    position: "Head of Finance & Account",
    image: "/management_staff/accounts.jpeg",
  },
  // Ag. Heads
  {
    name: "Rhoda Dandaura",
    position: "Ag. Head, Director, Licensing and Documentation",
    image: null,
  },

  // Zonal Coordinators
  {
    name: "Hubert Odeh",
    position: "Zonal Coordinator, South East Zone",
    image: "/management_staff/sez.png",
  },
  {
    name: "Emagha Uju",
    position: "Zonal Coordinator, South West Zone",
    image: "/management_staff/swz.jpg",
  },
  {
    name: "Margarita Adeyinka Oluwole",
    position: "Zonal Coordinator, North Central Zone",
    image: "/management_staff/ncz.jpg",
  },
  {
    name: "Sangari Rabi Muhammed",
    position: "Zonal Coordinator, North East Zone",
    image: "/management_staff/nez.jpg",
  },
  {
    name: "Aliyu Sani",
    position: "Ag. Zonal Coordinator, North West Zone",
    image: null,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">Leadership</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Management Team</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Distinguished professionals steering Nigeria&apos;s premier film regulatory agency with
              expertise, vision, and passion for the arts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Principal Officers */}
        <AnimatedSection className="mb-16">
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {principalOfficers.map(({ name, title, subtitle, image }) => (
              <StaggerItem key={title}>
                <Card className="overflow-hidden border-primary/20 py-0">
                  <div className="relative h-96 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 overflow-hidden">
                    <Image src={image} alt={name} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 z-10">
                      <Badge className="bg-[#fea600] text-[#001506] font-semibold mb-1.5 text-xs">
                        {title}
                      </Badge>
                      <h3 className="text-base font-bold text-white leading-tight">{name}</h3>
                      <p className="text-white/70 text-xs mt-0.5">{subtitle}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Executive Director */}
        <AnimatedSection className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-[#fea600]/30 bg-gradient-to-br from-[#001506] to-[#001a08]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(254,166,0,0.08),transparent)]" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-0">
              {/* Photo */}
              <div className="relative w-full md:w-72 lg:w-80 h-80 md:h-auto shrink-0 overflow-hidden">
                <Image
                  src="/management_staff/dr_shaibu.webp"
                  alt="Dr. Shaibu Husseini"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001506]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#001506]/60" />
                <div className="absolute bottom-4 left-4 md:hidden">
                  <Badge className="bg-[#fea600] text-[#001506] font-bold text-xs mb-1">Executive Director / CEO</Badge>
                  <p className="text-white font-bold text-lg leading-tight">Dr. Shaibu Husseini</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
                <div className="hidden md:block">
                  <Badge className="bg-[#fea600] text-[#001506] font-bold mb-3">Executive Director / CEO</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Dr. Shaibu Husseini</h2>
                  <p className="text-white/50 text-sm mt-1">PhD, Mass Communication · MNIPR · RPA · FTA · FGOND</p>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Widely referred to as <span className="text-white font-semibold">&ldquo;Mr. Nollywood&rdquo;</span>, Dr. Shaibu Husseini is one of Nigeria&apos;s most authoritative voices in film scholarship, cultural journalism, and creative policy. Appointed Executive Director / CEO of the NFVCB by President Bola Ahmed Tinubu on January 12, 2024, he has led a transformative shift from censorship to progressive content classification, championed full digitalisation, and positioned Nigerian cinema for global competitiveness.
                </p>

                <div className="flex flex-wrap gap-3 text-xs">
                  {[
                    { label: "30+", sub: "Years in Media" },
                    { label: "16yrs", sub: "AMAA Chair" },
                    { label: "PhD", sub: "UNILAG" },
                    { label: "465", sub: "Staff Empowered" },
                  ].map(({ label, sub }) => (
                    <div key={sub} className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-center min-w-[72px]">
                      <p className="text-[#fea600] font-bold text-base">{label}</p>
                      <p className="text-white/40 mt-0.5">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/executive-director"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fea600] hover:bg-[#fea600]/90 text-[#001506] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#fea600]/20"
                  >
                    Full Profile & Achievements
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Senior Management */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-8">Senior Management</h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {seniorManagement.map(({ name, position, image }) => (
              <StaggerItem key={name}>
                <Card className="overflow-hidden border-primary/20 py-0 hover:shadow-md transition-all hover:border-primary/40 hover:-translate-y-0.5">
                  <div className="relative h-96  bg-gradient-to-br from-[#001506] to-[#009f3b]/40 overflow-hidden">
                    {image ? (
                      <Image src={image} alt={name} fill className="object-cover object-top" />
                    ) : (
                      <Image src="/logo.webp" alt="" fill className="object-contain object-center opacity-20 p-6" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3 z-10">
                      <p className="font-bold text-white leading-tight">{name}</p>
                      <p className="text-white/70 text-sm mt-0.5 leading-snug">{position}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

      </div>
    </>
  );
}
