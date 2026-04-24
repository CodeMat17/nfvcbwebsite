import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CheckCircle, Users, Building2, Landmark, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Charter — Our Commitment to Stakeholders",
  description:
    "The NFVCB Service Charter defines the service standards that filmmakers, distributors, exhibitors and the general public can expect from Nigeria's National Film and Video Censors Board — processing times, complaint procedures and our obligations.",
  keywords: [
    "NFVCB service charter",
    "NFVCB service standards",
    "Nigeria film board commitment",
    "NFVCB client services",
    "film regulation service delivery Nigeria",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/service-charter" },
  openGraph: {
    title: "Service Charter — Our Commitment to Stakeholders | NFVCB",
    description:
      "NFVCB's defined service standards for filmmakers, distributors, exhibitors and the public — processing times and obligations.",
    url: "https://nfvcb.gov.ng/service-charter",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const generalStandards = [
  "NFVCB shall treat all clients fairly and professionally.",
  "Our staff will identify themselves to you by name and will be polite, courteous and helpful at all times.",
  "If no one is able to deal with your query when you telephone, someone will call you back before the end of the next working day.",
  "If you write, fax or email us, we will reply provided you have supplied your name, email, telephone number, and postal address.",
  "We will undertake to answer correspondence within 20 working days, and where this is not possible, we will keep you informed of progress.",
  "Our letters will have a contact name and telephone number on them where appropriate.",
  "Where it is more appropriate for another organisation to help you, we will provide that organisation's contact details.",
  "Establish a database of all classified works, video outlets and distributors and update such information periodically.",
  "Our information products will be accurate and up to date.",
  "Our advice will be accurate, relevant and reliable.",
];

const industryStandards = [
  "Advise you of any fees relevant to your application.",
  "Issue receipts for payments immediately.",
  "Provide facilities for electronic submission of applications and services to monitor progress.",
  "Classify material within 20 working days of receipt of a valid application.",
  "Consistently apply the criteria set out in NFVCB legislation and the NFVCB Code of Ethics and classification guidelines.",
  "Issue classification certificates within 5 working days of our decision.",
  "Give clear reasons for our classification decisions on request.",
  "Assist you to arrange collection of submitted material.",
  "Provide information about how to apply for review of a decision of the Board or appeal a decision of the Review Board.",
  "Consult you about proposed regulatory changes.",
  "Make officers available to discuss operational classification matters with you.",
  "Assist you to meet the requirement to display our classification markings, including consumer advice on covers, packaging, products and related advertising material.",
];

const governmentStandards = [
  "Provide the Honourable Minister and the National Assembly with timely and comprehensive reports regarding the state of affairs of NFVCB.",
  "Provide timely and reliable advice to the government on matters relating to the Nigerian film industry and other trends worldwide.",
  "Give priority to applications identified as urgent for law enforcement purposes.",
];

const publicStandards = [
  "Provide reliable and accurate classifications and consumer advice.",
  "Take community standards into account when classifying material.",
  "Provide information about the national classification scheme upon request.",
  "Provide access to classification decisions.",
  "Welcome and respond to your comments on our classification decisions.",
  "Welcome comments about proposed regulatory changes, including reviews of the classification guidelines.",
  "Maintain an up-to-date website.",
];

function StandardsList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceCharterPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              SERVICOM Initiative
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Service Charter</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Our commitment to providing world-class film regulatory services — setting the standard
              for how NFVCB serves every stakeholder.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* DG Foreword */}
        <AnimatedSection>
          <Card className="bg-primary/5 border-primary/20 overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium mb-3 uppercase tracking-wider">
                    Director-General&apos;s Foreword
                  </p>
                  <blockquote className="text-muted-foreground leading-relaxed italic text-base sm:text-lg">
                    &ldquo;In line with the Federal Government reform programme with respect to the
                    services delivery contract, it is my pleasure to present this revised NFVCB
                    Service Charter for clients of the board. Our goal is to ensure that NFVCB
                    operates a world class film regulatory agency with established best practices and
                    appropriate service standards.&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-foreground">Dr. Shaibu Husseini PhD</p>
                    <p className="text-sm text-muted-foreground">
                      Director-General, National Film and Video Censors Board
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Our Clients */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-5">Who This Charter Serves</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-6 hover:shadow-md transition-all hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-[#009f3b]/10 flex items-center justify-center mb-4">
                <Building2 className="h-5 w-5 text-[#009f3b]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Industry Clients</h3>
              <p className="text-sm text-muted-foreground">
                Producers, marketers and organisations that apply to have films, video works, and
                computer games censored/classified.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-md transition-all hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-[#fea600]/10 flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-[#fea600]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Consumers</h3>
              <p className="text-sm text-muted-foreground">
                Members of the public who consume films and video products in Nigeria, and deserve
                accurate consumer information and protection.
              </p>
            </Card>
          </div>
        </AnimatedSection>

        {/* Standards sections */}
        <StaggerContainer className="space-y-8">
          {[
            {
              title: "For All Clients",
              icon: ShieldCheck,
              items: generalStandards,
              color: "border-[#009f3b]",
            },
            {
              title: "For Film & Video Industry Clients",
              icon: Building2,
              items: industryStandards,
              color: "border-blue-500",
            },
            {
              title: "For Government & Law Enforcement",
              icon: Landmark,
              items: governmentStandards,
              color: "border-[#fea600]",
            },
            {
              title: "For Members of the Public",
              icon: Users,
              items: publicStandards,
              color: "border-purple-500",
            },
          ].map(({ title, icon: Icon, items, color }) => (
            <StaggerItem key={title}>
              <Card className={`border-l-4 ${color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="h-5 w-5 text-primary" /> {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <StandardsList items={items} />
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Feedback */}
        <AnimatedSection>
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl">Feedback On Our Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The Board welcomes feedback on our performance against these service standards. Clients
                can write to or email us with any comments or suggestions. Your feedback will help us
                to improve our services in future.
              </p>
              <p>
                If you experience any problem with our service and cannot resolve it by discussion
                with the staff member concerned, escalate the matter by asking to speak to his or her
                supervisor. If you remain dissatisfied, you can further escalate the issue to the
                office of the Director-General through the Head of Servicom and Community Liaison
                Unit.
              </p>
              <p>
                For clients who are not satisfied with a classification decision, we can provide you
                with a copy of the reasons for the Board&apos;s decision or arrange for you to speak
                to a senior official. We can also assist you with information on how to apply to the
                Review Board for a review of the decision.
              </p>
              <div className="mt-4 p-4 bg-background rounded-xl border border-border">
                <p className="font-medium text-foreground mb-1">Contact NFVCB</p>
                <p>Email: <a href="mailto:info@nfvcb.gov.ng" className="text-primary hover:underline">info@nfvcb.gov.ng</a></p>
                <p>Address: No. 20 Alexandria Crescent, Wuse II, Abuja</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </>
  );
}
