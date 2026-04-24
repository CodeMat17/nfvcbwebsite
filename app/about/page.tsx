import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CheckCircle, Target, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About NFVCB — History, Mission, Vision & Functions",
  description:
    "The National Film and Video Censors Board (NFVCB) was established by Act No. 85 of 1993 to regulate Nigeria's film and video industry. Learn our history, mission, vision, philosophy and statutory functions.",
  keywords: [
    "NFVCB history",
    "National Film Video Censors Board established 1993",
    "Nigeria film regulation history",
    "NFVCB mission",
    "NFVCB vision",
    "NFVCB functions",
    "film regulatory body Nigeria",
    "Nigeria censorship board history",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/about" },
  openGraph: {
    title: "About NFVCB — History, Mission, Vision & Functions",
    description:
      "Established by Act No. 85 of 1993, NFVCB is Nigeria's official film and video regulatory authority. Discover our history, mission and statutory functions.",
    url: "https://nfvcb.gov.ng/about",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const functions = [
  "To license a person to exhibit films and video works",
  "To license a premises for the purposes of exhibiting films and video works",
  "To classify films and video works",
  "To regulate and prescribe safety precautions to be observed in licensed premises",
  "To regulate and control cinematographic exhibitions",
  "To regulate the import of foreign movies and export of Nigerian movies",
  "To perform such other functions as are necessary or expedient for the full discharge of all or any of the functions conferred on it by law",
];

const philosophyPrinciples = [
  "Artistic expression and creative freedom are not unduly curbed.",
  "Protect National culture, peace and security. Protect children and young persons from harm and prevent access by children to materials which are offensive.",
  "Strongly encourage and promote the exercise of parental responsibility.",
  "Movies should be allowed to reach the widest audience that is appropriate for their theme and treatment.",
  "The context in which something (e.g. sex or violence) is presented is central to the question of its acceptability.",
  "Take into account community concerns about religion, and prevent the exhibition of materials that are objectionable, likely to cause incitement, civil disorder, portray persons in demeaning manner, incite or condone sexual violence or glamorise criminal acts.",
  "Members of the public should have information through consumer advice, about materials which they may find offensive, both for themselves and for children in their care.",
  "Adults (persons over 18) should be free, within the law, to choose what they wish to view.",
  "The guidelines shall be published annually and revised on the basis of public inputs.",
];

const goals = [
  "To provide an enabling environment for the growth of the film industry.",
  "To enshrine a code of ethics and professionalism which would ensure the production of quality movies.",
  "To manage the classification system to time, cost and quality standards.",
  "To provide policy advice and services to governments.",
  "To enhance confidence in and utilization of the NFVCB classification system among existing and potential clients.",
  "To enhance community understanding, confidence and usage in relation to classification systems and outcomes.",
  "To continually empower NFVCB staff to meet its objectives by providing the requisite internal capability in the areas of people, training, logistical support, information, financial resources and leadership.",
];

function PageHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#001506]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-end" aria-hidden>
        <Image src="/logo.webp" alt="" width={500} height={500} className="object-contain" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#001506] via-[#001506]/90 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">About NFVCB</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our History &amp; Identity
          </h1>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            Established by Act No.85 of 1993, the National Film and Video Censors Board has been
            Nigeria&apos;s guardian of filmed content for over three decades.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* History */}
        <AnimatedSection id="history" className="scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Our History</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nigeria&apos;s Film Regulatory Legacy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The National Film and Video Censors Board is the regulatory body set up by Act
                  No.85 of 1993 to regulate the films and video industry in Nigeria. The Board is
                  empowered by law to classify all films and videos whether imported or produced
                  locally.
                </p>
                <p>
                  It is also the duty of the Board to register all films and video outlets across
                  the country and to keep a register of such registered outlets, among other
                  functions empowered by the enabling legislation.
                </p>
                <p>
                  Over three decades, NFVCB has grown from a nascent regulatory body into a
                  world-class institution that shapes Nigeria&apos;s vibrant Nollywood industry
                  while protecting the viewing public.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "1993", event: "Established by Act No.85" },
                { year: "2000s", event: "Nollywood boom — classification at scale" },
                { year: "2010s", event: "Digital content regulation introduced" },
                { year: "2020s", event: "Streaming & online distribution licensing" },
              ].map(({ year, event }) => (
                <Card key={year} className="p-5 hover:shadow-md transition-all hover:border-primary/30">
                  <div className="text-2xl font-bold text-primary mb-2">{year}</div>
                  <p className="text-sm text-muted-foreground">{event}</p>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection delay={0}>
            <Card className="p-8 h-full border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;To contribute to the positive transformation of the Nigerian society through
                the censorship of films and video works whilst balancing the need to preserve
                freedom of expression within the law, and limit social harm caused by films.&rdquo;
              </p>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Card className="p-8 h-full border-accent/30 bg-accent/5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-[#001506]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;To be recognized as a world-class film and video regulatory agency that
                institutes best practice in the discharge of its duties.&rdquo;
              </p>
            </Card>
          </AnimatedSection>
        </div>

        {/* Functions */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6">Functions of the Board</h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-3">
            {functions.map((fn, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:border-primary/30 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{fn}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Vision & Goals */}
        <AnimatedSection id="vision" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-2">Vision &amp; Goals</h2>
          <p className="text-muted-foreground mb-6">
            Our strategic goals guide every aspect of NFVCB&apos;s operations.
          </p>
          <StaggerContainer className="space-y-3">
            {goals.map((goal, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-sm hover:border-primary/20 transition-all">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Philosophy */}
        <AnimatedSection id="philosophy" className="scroll-mt-20">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#001506]" />
            <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
              <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
            </div>
            <div className="relative z-10 p-8 sm:p-12">
              <Badge className="mb-4 bg-[#fea600]/20 text-[#fea600] border-[#fea600]/30">Our Philosophy</Badge>
              <h2 className="text-2xl font-bold text-white mb-6">
                Principles Guiding Film Classification
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {philosophyPrinciples.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-[#009f3b]/50 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#009f3b]" />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Learn More About NFVCB
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/management" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5">
              Management Team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/departments" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-medium hover:border-primary/50 hover:text-primary transition-all">
              Departments &amp; Units
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
