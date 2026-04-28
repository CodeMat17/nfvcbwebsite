import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";

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

const dgAchievements = [
  { icon: GraduationCap, text: "First Class BSc, Mass Communication — Lagos State University" },
  { icon: GraduationCap, text: "MSc (Distinction), Mass Communication — University of Lagos" },
  { icon: GraduationCap, text: "PhD, Mass Communication (Film Studies) — University of Lagos" },
  { icon: Award, text: "Chair, AMAA Selection Committee — 16 consecutive years" },
  { icon: Globe, text: "AIG-Public Leaders Programme, Blavatnik School of Governance, University of Oxford" },
  { icon: Globe, text: "US International Visitors Leadership Programme alumnus" },
  { icon: BookOpen, text: "Author: 'Moviedom: The Nollywood Narratives'" },
  { icon: Award, text: "Current voting member, International Golden Globes Award" },
  { icon: Award, text: "Consultant, Berlin International Film Festival" },
  { icon: GraduationCap, text: "Senior Teaching & Research Fellow, UNILAG Mass Communication" },
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

        {/* Director General */}
        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* DG Card */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden border-primary/20 sticky top-28 py-0">
                <div className="relative h-72 sm:h-80 lg:h-72 xl:h-80 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 overflow-hidden">
                  <Image src="/management_staff/dr_shaibu.webp" alt="Dr. Shaibu Husseini" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <Badge className="bg-[#fea600] text-[#001506] font-semibold mb-2">
                      Director General
                    </Badge>
                    <h2 className="text-xl font-bold text-white">Dr. Shaibu Husseini</h2>
                    <p className="text-white/70 text-sm">PhD, Mass Communication</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="space-y-3">
                    {dgAchievements.map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-snug">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DG Profile */}
            <div className="md:col-span-2 space-y-5">
              <div>
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                  Director General&apos;s Profile
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-1">Dr. Shaibu Husseini</h2>
                <p className="text-muted-foreground text-sm">PhD (Lagos) | FISPA | Film Scholar | Culture Expert</p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Dr. Shaibu Husseini holds a First Class BSc degree in Mass Communication from the
                  Lagos State University; an MSc degree in Mass Communication (Distinction) from the
                  University of Lagos and a PhD in Mass Communication from the University of Lagos.
                  His PhD was on film studies — his thesis examined the &apos;Structure of Film
                  Production Companies in Nollywood&apos;.
                </p>
                <p>
                  A trained and seasoned theatre, film, broadcast, Public Relations and Culture
                  expert, Shaibu is an alumnus of the United States International Visitors Leadership
                  Programme and the Aig-Imoukhuede Foundation&apos;s AIG-Public Leaders Programme of
                  the Blavatnik School of Governance of the University of Oxford.
                </p>
                <p>
                  One time Secretary of the Governing Board of the National Theatre/National Troupe
                  of Nigeria (from 2011 to 2015) and until his appointment Director of Dance and
                  Music and Head of the Strategic Communication Unit of the National Troupe of
                  Nigeria, Dr. Shaibu is reputed as one of the most consistent documentarists of
                  Nigeria&apos;s vibrant film and movie industry Nollywood and he is an astute
                  commentator on arts, theatre and film development in Nigeria and the continent of
                  Africa. His career as a film and culture journalist with Nigeria&apos;s flagship
                  newspaper — The Guardian — has spanned over three decades.
                </p>
                <p>
                  The Chair, for 16 years running, of the Selection Committee of Africa&apos;s
                  premier film award — the Africa Movie Academy Awards (AMAA) — and a member of
                  the prestigious AMAA jury, Shaibu has attended several conferences, workshops and
                  festivals and has sat on numerous local and international committees on film,
                  theatre and allied matters. These include serving on the Board of the Mainframe
                  Film Institute run by the legendary Tunde Kelani, the board of In-short
                  International Film Festival and on the Board of the Bank of Industry (BOI)
                  Nollywood Fund, amongst others.
                </p>
                <p>
                  Author of a monograph on the pioneers of the Nigerian film and video industry
                  titled &apos;Moviedom: The Nollywood Narratives&apos;, Shaibu is a Senior Teaching
                  and Research Fellow at the Mass Communication Department of the University of Lagos
                  and was a former member of the Nigeria Official Selection Committee charged with
                  deciding Nigeria&apos;s entry for the Best International Film category of the
                  Oscars. He is a current voting member of the International Golden Globes Award and
                  a consultant to the Berlin International Film Festival.
                </p>
                <p>
                  A pioneer artiste of the National Troupe of Nigeria who rose to become
                  Personal/Special Assistant to the Director General of the National
                  Theatre/National Troupe of Nigeria, Dr. Shaibu has considerable theoretical,
                  practical and field experience in Theatre, cultural administration, Public
                  Relations, Advertising, Journalism, Broadcasting and film. He considers himself
                  an enthusiastic, dedicated, detailed and capable theory-cum-practice oriented
                  professional who is able to improve the ability of an organisation to deliver
                  outcomes that matter.
                </p>
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
