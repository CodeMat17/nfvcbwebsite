import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { Film, Download, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Information — Film Submission & Services",
  description:
    "Complete guide for Nigerian film industry stakeholders — how to submit films for classification, download NFVCB forms, apply for licensing, and access all NFVCB services for producers, distributors and exhibitors.",
  keywords: [
    "submit film NFVCB",
    "NFVCB film submission",
    "NFVCB forms download",
    "film classification Nigeria how to apply",
    "Nigerian film industry services",
    "NFVCB stakeholder guide",
    "film producer Nigeria regulation",
    "Nollywood film submission",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/industry" },
  openGraph: {
    title: "Industry Information — Film Submission & Services | NFVCB",
    description:
      "How to submit films, download forms, and access NFVCB services for producers, distributors and exhibitors in Nigeria.",
    url: "https://nfvcb.gov.ng/industry",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: Film,
    title: "Film Classification & Censorship",
    description:
      "Submit films, music videos, skits, and video games to NFVCB for classification. All works must be classified before distribution or exhibition in Nigeria.",
    href: "/policy",
    badge: "Core Service",
    badgeColor: "bg-[#009f3b]/10 text-[#009f3b]",
  },
  {
    icon: BookOpen,
    title: "Exhibition & Distribution Licensing",
    description:
      "Apply for Exhibitor, Exhibition Premises, Mobile Exhibition, Online Exhibition, or Distributor licences. Five licence categories covering every scale of operation — community to national.",
    href: "/industry/licensing",
    badge: "Licensing",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Download,
    title: "Downloadable Forms",
    description:
      "Access and download all forms needed to submit a film, music video, skit or video game to NFVCB for classification. Forms available in PDF format.",
    href: "#forms",
    badge: "Resources",
    badgeColor: "bg-[#fea600]/10 text-[#fea600]",
  },
];

const forms = [
  { name: "Application for Censorship and Approval for Exhibition", type: "Classification", href: "/forms/downloadable/Application for classification and approval for exhibition.pdf" },
  { name: "Application for Exemption from Censorship", type: "Classification", href: "/forms/downloadable/Application for exemption.pdf" },
  { name: "Application for Registration of Film/Video Work", type: "Classification", href: "/forms/downloadable/Application for the registration of film and video work.pdf" },
  { name: "Application for License as a Distributor/Exhibitor", type: "Licensing", href: "/forms/downloadable/Application for distributor and exhibitor.pdf" },
  { name: "Application for License of Premises", type: "Licensing", href: "/forms/downloadable/Application for license of premises.pdf" },
  { name: "Application for Exportation of Films and Video Works", type: "Permits", href: "/forms/downloadable/Application for exportation.pdf" },
  { name: "Notice of Appeal", type: "Permits", href: "/forms/downloadable/Noticeofappeal.pdf" },
  { name: "Industry Information", type: "Reference", href: "/forms/downloadable/industry_information.pdf" },
  { name: "National Film and Video Censors Board Act", type: "Reference", href: "/forms/downloadable/NFVCB Act CAP N40.pdf" },
  { name: "NFVCB Regulations 2008", type: "Reference", href: "/forms/downloadable/NFVCB Regulations 2008.pdf" },
];

const submissionProcess = [
  { step: 1, title: "Prepare Your Work", desc: "Ensure your film, music video, skit or video game is complete and ready for review." },
  { step: 2, title: "Complete Application Form", desc: "Download and complete the appropriate application form for your content type." },
  { step: 3, title: "Pay Applicable Fees", desc: "Make payment via Remita to NFVCB. Keep your payment receipt as you will need it." },
  { step: 4, title: "Submit to NFVCB", desc: "Submit your application, work copy, and payment receipt to the nearest NFVCB office or online portal." },
  { step: 5, title: "Await Classification", desc: "NFVCB will classify your work within 20 working days and issue a classification certificate." },
  { step: 6, title: "Receive Certificate", desc: "Collect your classification certificate within 5 working days of the classification decision." },
];

export default function IndustryPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              For Stakeholders
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Industry Information
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Welcome to the NFVCB Industry Information section — your one-stop resource for
              classification, licensing, forms, and all services for film industry stakeholders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Services */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Services</h2>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, href, badge, badgeColor }) => (
              <StaggerItem key={title}>
                <Link href={href} className="group block h-full">
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 cursor-pointer">
                    <Badge className={`${badgeColor} border-0 text-xs mb-4`}>{badge}</Badge>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Submission Process */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Submit for Classification</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {submissionProcess.map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4 p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors">
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Online Application Notice */}
        <AnimatedSection>
          <Card className="bg-primary/5 border-primary/20 overflow-hidden">
            <CardContent className="p-6 sm:p-8 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Film className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">NFVCB Business Online — Coming Soon</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NFVCB plans to launch a full Business Online Application that will make online
                  transactions easier for stakeholders — including electronic submission, application
                  tracking, and digital certificate download. Watch this space for the launch
                  announcement.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Forms */}
        <AnimatedSection id="forms">
          <h2 className="text-2xl font-bold text-foreground mb-2">Downloadable Forms</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Download the appropriate form for your submission or application. All forms are in PDF format.
          </p>

          {(["Classification", "Licensing", "Permits", "Reference"] as const).map((category) => {
            const categoryForms = forms.filter((f) => f.type === category);
            const badgeColor =
              category === "Classification"
                ? "bg-[#009f3b]/10 text-[#009f3b]"
                : category === "Licensing"
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                : category === "Reference"
                ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                : "bg-[#fea600]/10 text-[#fea600]";

            return (
              <div key={category} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${badgeColor} border-0`}>{category}</Badge>
                  <span className="text-xs text-muted-foreground">{categoryForms.length} form{categoryForms.length !== 1 ? "s" : ""}</span>
                </div>
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryForms.map(({ name, href }) => (
                    <StaggerItem key={name}>
                      <Card className="group p-5 flex flex-col gap-4 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 h-full">
                        <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950/40 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold text-red-600 dark:text-red-400">PDF</span>
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug flex-1">{name}</p>
                        <a
                          href={href}
                          download
                          className="flex items-center gap-1.5 text-xs text-primary font-semibold group-hover:underline w-fit mt-auto"
                        >
                          <Download className="h-3.5 w-3.5" /> Download
                        </a>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            );
          })}
        </AnimatedSection>

        {/* Licensing CTA */}
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden bg-[#001506] p-8 sm:p-12 text-center">
            <div className="absolute inset-0 opacity-[0.05]" aria-hidden>
              <Image src="/logo.webp" alt="" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <Badge className="mb-4 bg-[#fea600]/20 text-[#fea600] border-[#fea600]/30">
                Get Licensed
              </Badge>
              <h2 className="text-2xl font-bold text-white mb-3">Ready to Apply for a Licence?</h2>
              <p className="text-white/60 mb-6 max-w-xl mx-auto text-sm">
                NFVCB licenses exhibitors, exhibition premises, mobile exhibitors, online exhibitors,
                and distributors across five categories. Find the right framework for your business
                and apply today.
              </p>
              <Link
                href="/industry/licensing"
                className="inline-flex items-center gap-2 bg-[#009f3b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#009f3b]/90 transition-all hover:-translate-y-0.5"
              >
                View Licensing Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
