import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Film Classification Policy — Legal Framework & Criteria",
  description:
    "NFVCB's official film classification and censorship policy — the legal framework under Act No. 85 of 1993, censorship principles, content criteria, and rating categories (G, PG, 12, 15, 18, RE) used to classify films in Nigeria.",
  keywords: [
    "NFVCB film classification policy",
    "Nigeria film censorship policy",
    "film rating criteria Nigeria",
    "NFVCB Act 1993",
    "film censorship legal framework Nigeria",
    "Nigerian film classification criteria",
    "content regulation Nigeria",
    "film policy Nigeria",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/policy" },
  openGraph: {
    title: "Film Classification Policy — Legal Framework & Criteria | NFVCB",
    description:
      "NFVCB's official classification policy — censorship principles, content criteria and rating categories under Nigerian law.",
    url: "https://nfvcb.gov.ng/policy",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const mainConsiderations = [
  "Is the film or video work in conflict with the law?",
  "That adults should be free to choose their entertainment, within the law.",
  "Is the film or video classified for a particular age group likely to be harmful?",
  "Is the material, at the age group concerned, clearly unacceptable to broad public opinion?",
];

const censorshipCriteria = [
  {
    type: "required",
    text: "Such a film or video work has educational or entertainment value apart from promoting the Nigerian culture, unity and interest.",
  },
  {
    type: "prohibited",
    text: "Not likely to undermine national security.",
  },
  {
    type: "prohibited",
    text: "Not likely to induce or reinforce the corruption of private or public morality.",
  },
  {
    type: "prohibited",
    text: "Not likely to encourage or glorify the use of violence.",
  },
  {
    type: "prohibited",
    text: "Not likely to expose the people of African heritage to ridicule or contempt.",
  },
  {
    type: "prohibited",
    text: "Not likely to encourage illegal or criminal acts.",
  },
  {
    type: "prohibited",
    text: "Not likely to encourage racial, religious or ethnic discrimination or conflict.",
  },
  {
    type: "prohibited",
    text: "Not likely by its contents to be blasphemous or obscene.",
  },
  {
    type: "prohibited",
    text: "Not likely to denigrate the dignity of womanhood.",
  },
];

const classificationRatings = [
  {
    symbol: "G",
    name: "General Exhibition",
    color: "bg-green-600",
    textColor: "text-green-700 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800",
    desc: "Suitable for general exhibition. Content is appropriate for all audiences including children of all ages.",
  },
  {
    symbol: "PG",
    name: "Parental Guidance",
    color: "bg-blue-600",
    textColor: "text-blue-700 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    desc: "Some material may not be suitable for young children. Parental guidance is suggested for children under 12.",
  },
  {
    symbol: "12",
    name: "12 and Over",
    color: "bg-yellow-500",
    textColor: "text-yellow-700 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    desc: "Suitable for persons aged 12 and above. May contain mild violence, moderate language, or thematic content not appropriate for younger children.",
  },
  {
    symbol: "12A",
    name: "12 Accompanied",
    color: "bg-orange-400",
    textColor: "text-orange-700 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    desc: "Children under 12 may watch only if accompanied by an adult. Parents are strongly advised to consider the suitability of the film for their child.",
  },
  {
    symbol: "15",
    name: "15 and Over",
    color: "bg-red-400",
    textColor: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    desc: "Not suitable for persons below 15 years of age. May contain mature themes, strong language, or moderate violence.",
  },
  {
    symbol: "18",
    name: "Adults Only",
    color: "bg-red-700",
    textColor: "text-red-700 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-300 dark:border-red-900",
    desc: "Restricted to persons 18 years and above. Contains adult content, strong violence, or explicit material unsuitable for minors.",
  },
  {
    symbol: "RE",
    name: "Restricted Exhibition",
    color: "bg-purple-700",
    textColor: "text-purple-700 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    desc: "Only for restricted exhibition in specially licensed venues. Not approved for general public exhibition or broadcast.",
  },
];

export default function PolicyPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Regulation
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Policy</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              The legal framework, principles, and criteria governing NFVCB&apos;s classification
              and censorship of films and video works in Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Policy Overview */}
        <AnimatedSection>
          <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In an ethnic and religious society like Nigeria, the censorship and classification of
              films into varying categories not only allows adults the opportunity to see a wider
              range of films dealing with the realities of the adult world, but at the same time
              restricts children and youth from viewing what could be harmful to them — this is
              besides ensuring that other kinds of objectionable materials capable of inciting civil
              strife are reduced or eliminated completely.
            </p>
            <p>
              The classification system serves two different functions: first, it lays down a set of
              legally enforceable rules to restrict admission and access to adult films by minors.
              On the other hand, it offers parents advance information about the suitability of the
              film so that parents can make informed decisions about what to let their children watch.
            </p>
            <p>
              The Board abides at all times with the legal instruments that established it — the
              NFVCB Act 85 of 1993 (Cap N40 LFN 2004) — which lays out specific criteria for the
              censorship of films and video works. In line with global best practices and under
              section 2(e) of the NFVCB Act, the Board has also established clear guidelines for
              censorship and classification.
            </p>
          </div>
        </AnimatedSection>

        {/* Exhibition Policy Note */}
        <AnimatedSection>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-base text-foreground">
                New Policies for Film &amp; Video Exhibition (2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>
                In exercise of the powers conferred by Section 65 of the NFVCB Act 1993 and with
                the approval of the Honourable Minister of Art, Culture, Tourism and the Creative
                Economy, the Board has issued updated Regulations and Scale of Charges for Film
                Distribution and Exhibition 2025. These regulations govern:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Community Exhibition Premises Licensing</li>
                <li>Community Exhibitor Licensing</li>
                <li>Mobile Exhibition Licensing</li>
                <li>Regional and National Mobile Exhibitor Licensing</li>
                <li>Exhibition Premises Licensing (Major, Medium, Small Hall, Drive-In, Mobile)</li>
                <li>Regional and National Exhibitor Licensing</li>
                <li>Online Exhibitor Licensing (Multi-National, Medium, Small, YouTube)</li>
                <li>Suburban Exhibitor Licensing</li>
                <li>Film Distribution Licensing (National, Regional, Suburban, Community, Online)</li>
              </ul>
              <p className="mt-3">
                Full requirements and applicable fees are available on the{" "}
                <a href="/industry/licensing" className="text-primary hover:underline font-medium">
                  Licensing page
                </a>
                . For enquiries: <a href="mailto:nfvcb_ldd@nfvcb.gov.ng" className="text-primary hover:underline">nfvcb_ldd@nfvcb.gov.ng</a>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Four Main Considerations */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6" id="considerations">
            Four Main Considerations
          </h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {mainConsiderations.map((c, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:border-primary/30 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Censorship Criteria */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-3" id="criteria">
            Censorship Criteria — Section 37, NFVCB Decree No.85 of 1993
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            The Censors and Classification Committee in reaching a decision on a film or video work
            shall ensure that:
          </p>
          <div className="space-y-3">
            {censorshipCriteria.map(({ type, text }, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl border ${
                  type === "required"
                    ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20"
                    : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20"
                }`}
              >
                {type === "required" ? (
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Classification Ratings */}
        <AnimatedSection id="categories">
          <h2 className="text-2xl font-bold text-foreground mb-2">Classification Rating System</h2>
          <p className="text-sm text-muted-foreground mb-6">
            All films and video works approved by the NFVCB are assigned one of the following
            classification symbols, which must be prominently displayed on all promotional materials
            and on-screen prior to exhibition.
          </p>
          <StaggerContainer className="space-y-4">
            {classificationRatings.map((r) => (
              <StaggerItem key={r.symbol}>
                <div className={`flex items-start gap-4 p-5 rounded-xl border ${r.borderColor} ${r.bgColor}`}>
                  <div className={`${r.color} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-lg">{r.symbol}</span>
                  </div>
                  <div>
                    <p className={`font-semibold ${r.textColor} mb-1`}>{r.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Rejection Note */}
        <AnimatedSection>
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-5 w-5" /> Board&apos;s Power to Reject
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                The Board shall not classify material which it believes to be in breach of the
                criminal law. Where possible the Board will carry out its responsibilities through
                appropriate use of the classification categories, particularly in order to protect
                children from actual or potential harm.
              </p>
              <p>
                If necessary, however, the Board may cut or even reject a film, video, DVD or
                digital work. The Board&apos;s approach to rejects is set out in the Classification
                Guidelines.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </>
  );
}
