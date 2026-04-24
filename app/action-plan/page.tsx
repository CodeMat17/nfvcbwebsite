import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "8-Point Strategic Action Plan — NFVCB",
  description:
    "NFVCB's 8-Point Strategic Action Plan outlines the Board's blueprint for transforming Nigeria's film regulatory landscape — covering digitisation, enforcement, stakeholder engagement and industry development.",
  keywords: [
    "NFVCB action plan",
    "Nigeria film regulation strategy",
    "NFVCB strategic plan",
    "film industry development Nigeria",
    "NFVCB 8-point plan",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/action-plan" },
  openGraph: {
    title: "8-Point Strategic Action Plan — NFVCB",
    description:
      "NFVCB's strategic blueprint for transforming Nigeria's film regulatory landscape — digitisation, enforcement and industry development.",
    url: "https://nfvcb.gov.ng/action-plan",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const actionPoints = [
  {
    number: 1,
    title: "New Direction in Film & Video Content",
    objective:
      "Redressing the current situation where the content of movies are not encouraging, concentrating more on the promotion of negative stereotypes. Urgent need to focus more on themes and stories reflecting other positive aspects of Nigerian life.",
    strategies: [
      "In concert with the NFC and industry groups, especially Guilds of Directors, Producers, and scriptwriters, evolve a new culture of thematic movies promoting Nigeria and other positive values.",
      "Provide guidance and funding for script development based on identified themes.",
      "Promote and drive professionalism in content development, focused on the image Nigeria project with relevant stakeholders.",
      "Promote the project through special events and activities, as well as through the mass media.",
      "Offer incentives and rewards to outstanding producers who best fulfill the objectives.",
    ],
    color: "border-[#009f3b]",
    badgeColor: "bg-[#009f3b]/10 text-[#009f3b]",
  },
  {
    number: 2,
    title: "Significantly Reduce Objectionable Movies in the Market",
    objective:
      "Ensure that all movies available in Nigeria go through NFVCB's censorship and classification guidelines, and reduce content that reinforces negative stereotypes of Nigerians.",
    strategies: [
      "Refuse classification for movies that reinforce or project negative stereotypes about Nigeria and Nigerians.",
      "Employ a sliding censorship fee system, charging lower fees for movies with defined advocacy themes, such as children's movies.",
      "Be more proactive in censorship, and monitoring enforcement of classification rules.",
    ],
    color: "border-red-500",
    badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    number: 3,
    title: "Improve Standards of Professionalism in Film Production",
    objective:
      "Identify and address serious gaps in professionalism in all aspects of the Nigerian movie industry — script writing, production, marketing and distribution.",
    strategies: [
      "Set defined standards for movie production in concert with NFC, and the various industry guilds.",
      "New guideline which bans submission of movies by producers who are not members of MOPPICON, or guilds under it.",
      "Organise training programmes focusing on new content development, aimed at institutionalising international best practices in film production.",
      "Organise International conference on film censorship/classification: impact on society and development.",
    ],
    color: "border-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    number: 4,
    title: "Manage the Classification System to Time, Cost and Quality Standards",
    objective:
      "NFVCB is obliged to meet time standards for censorship and classification decisions. The cost of making classification decisions is recovered from clients and efficiency is subject to scrutiny.",
    strategies: [
      "In cooperation with clients, streamline procedures to provide timely decisions within the legislative framework.",
      "Ensure that clients receive value for money without compromising classification decisions.",
      "Maintain high quality classification standards through effective knowledge management.",
      "Launch new IT-based work flow process.",
      "Involve Stakeholders in developing new censorship classification guidelines.",
    ],
    color: "border-[#fea600]",
    badgeColor: "bg-[#fea600]/10 text-[#fea600]",
  },
  {
    number: 5,
    title: "Enhance Confidence in NFVCB Classification Systems",
    objective:
      "Address relationships with key government and industry stakeholders. Effectively and efficiently service expectations from government, media convergence and NFVCB's communication with other industry, consumer and classification bodies.",
    strategies: [
      "Improve the working environment of the NFVCB — adequate infrastructure, logistics and human resources.",
      "Provide briefing, policy and legislative services to the Government.",
      "Improve the NFVCB relationships with existing and potential clients.",
      "Establish the NFVCB Consultative forum based on the six geo-political zones, as well as a national consultative body.",
      "Understand emerging product and technology to identify potential clients and industry, technology and communication trends.",
    ],
    color: "border-purple-500",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    number: 6,
    title: "Enhance Community Understanding of Classification Systems",
    objective:
      "Ensure that decisions of the Board reflect community standards, and that communities are aware of the NFVCB's role and the implications of its classification decisions.",
    strategies: [
      "Expand zonal structure to six based on the geo-political zones; inaugurate the NFVCB zonal consultative forum.",
      "Identify and develop avenues for dissemination of NFVCB information. Involve local media and schools, PTAs in communication of classification decisions.",
      "Establish an informal community involvement in the preview of movies submitted.",
      "Establish and communicate clearly the NFVCB service charter to all relevant stakeholders.",
    ],
    color: "border-teal-500",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
  {
    number: 7,
    title: "Provide Access to Information on Roles, Responsibilities and Classification Decisions",
    objective:
      "Ensure that NFVCB and support staff are appropriately resourced and have the information and support to perform their roles and optimise their contribution to the broader objectives of NFVCB.",
    strategies: [
      "Develop and maintain practical information resources relevant and appropriate to external interested parties and internal users.",
      "Establish more effective internal communication within NFVCB.",
      "Establish arrangements for all NFVCB staff to have convenient access to information required in the course of their work.",
      "Improve NFVCB handling of external enquiries.",
    ],
    color: "border-indigo-500",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    number: 8,
    title: "Provide NFVCB Staff with Skills and Support to Maximise Their Contribution",
    objective:
      "Ensure that people requiring information relating to the activities or operation of NFVCB are able to access accurate information in a convenient, timely manner.",
    strategies: [
      "Establish, as an integral part of working at NFVCB, an induction, training and orientation policy and process.",
      "Organise training programmes in concert with the NFI, other agencies.",
      "Establish a comprehensive and effective performance management system.",
      "Establish appropriate arrangements for the timely recruitment of staff.",
      "Maintain appropriate terms and conditions for the employment of NFVCB staff.",
    ],
    color: "border-amber-500",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export default function ActionPlanPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Strategic Plan
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              8-Point Action Plan
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              NFVCB&apos;s strategic blueprint for transforming Nigeria&apos;s film regulatory
              landscape — empowering industry, protecting communities, and promoting excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview grid */}
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {actionPoints.map(({ number, title }) => (
              <a
                key={number}
                href={`#point-${number}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                  {number}
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 leading-snug">
                  {title}
                </p>
              </a>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-8">
          {actionPoints.map(({ number, title, objective, strategies, color, badgeColor }) => (
            <StaggerItem key={number}>
              <Card id={`point-${number}`} className={`border-l-4 ${color} scroll-mt-28`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                      {number}
                    </div>
                    <div>
                      <Badge className={`${badgeColor} border-0 text-xs mb-2`}>
                        Action Point {number}
                      </Badge>
                      <CardTitle className="text-lg leading-snug">{title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/40 rounded-xl p-4">
                    <p className="text-sm font-medium text-foreground mb-1">Objective</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{objective}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">Strategies</p>
                    <ul className="space-y-2">
                      {strategies.map((strategy, si) => (
                        <li key={si} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{strategy}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
