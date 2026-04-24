import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { CheckCircle } from "lucide-react";

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
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const departments = [
  {
    name: "Executive Director's Office",
    color: "border-[#009f3b]",
    badge: "bg-[#009f3b]/10 text-[#009f3b]",
    functions: [
      "Responsible for ensuring the efficient coordination of NFVCB strategic goals across internal sectors of the Board.",
    ],
  },
  {
    name: "Administration Department",
    color: "border-blue-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    functions: [
      "Appointment, Promotion and Discipline of Officers",
      "Ensures the enrolment of the Board's staff into the Pension and National Housing Fund Schemes",
      "Ensures the maintenance of office Building, infrastructures and equipment",
      "Drives welfare agenda for staff in the areas of health, leave, marriage, funeral etc.",
      "In charge of store, Security and transport units",
      "Makes recommendation on various personnel matters and issues relating to BOT, Retirement, Gazetting of Appointment, Transfer of service, Secondment etc.",
      "Initiates policies and makes presentations to Management for approval",
    ],
  },
  {
    name: "Film Censorship & Classification Department",
    color: "border-[#fea600]",
    badge: "bg-[#fea600]/10 text-[#fea600]",
    functions: [
      "Reviews all films and video works submitted for censorship and classification",
      "Applies NFVCB Act and Code of Ethics in classification decisions",
      "Issues classification certificates and consumer advice",
      "Maintains classification records and archives",
      "Provides reasons for classification decisions on request",
    ],
  },
  {
    name: "Licensing & Documenting Department",
    color: "border-purple-500",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    functions: [
      "Processes applications for Film Distribution from existing stakeholders and interested investors",
      "Recommends applicants for the issuance of license",
      "Supervises the Board's Learning Centre and Library",
      "Organises enlightenment programmes like the school outreach",
      "Implements policies on film licensing and issuance",
      "Ensures the safe-keeping of all censored films",
      "Produces Directory of Film Distributors and Exhibitors in Nigeria",
      "Performs archive duty",
    ],
  },
  {
    name: "Operations Department",
    color: "border-red-500",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
    functions: [
      "Organises all field monitoring and operations to ensure compliance",
      "Co-ordinates all activities of field operations in the six geo-political zonal and Centre offices",
      "Convenes Stakeholders meetings",
      "Maintains correspondence with Licensed Film Distributors and Exhibitors",
      "Liaises with sister organisations: NFC, NCC, NBC, LSFVCB",
      "Implements policies on film distribution and exhibition",
    ],
  },
  {
    name: "Planning, Research & Statistics Department",
    color: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    functions: [
      "Preparation of plans, monitoring and evaluation of plan implementation",
      "Sorting and monitoring of performance and efficiency targets for various sub-divisions",
      "Collection and processing of data and statistics",
      "Managing the Board's records and information resources",
    ],
  },
  {
    name: "Service Innovation Department",
    color: "border-indigo-500",
    badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    functions: [
      "Initiating, planning and implementing innovative initiatives building a strong culture of innovation",
      "Identifying and reaching out to development partners for necessary supports",
      "Relates with Management for development and full implementation of identified innovative solutions",
      "Implementing sensitization campaigns necessary for assimilating innovation in the Service",
      "Tracking trends and competitions in innovation with a view to adopting same for implementation",
      "Rendering periodic reports on innovative identified ideas to Management",
    ],
  },
  {
    name: "Legal Department",
    color: "border-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    functions: [
      "Legal Services Division — Litigation and related matters",
      "Regulatory Compliance Division — ensuring all operations comply with the law",
      "Giving Legal Advice/Opinion on matters affecting the Board",
      "Attending to all Legal Matters involving the Board",
      "Liaising with Law Enforcement agencies and other regulatory agencies",
      "Vetting of contracts and agreements involving the Board",
    ],
  },
  {
    name: "Accounts Department",
    color: "border-green-500",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400",
    functions: [
      "In charge of staff salaries, allowances and other financial benefits",
      "In charge of all forms of payment",
      "Advises the management on project funding and implementation strategies",
      "Responsible for the Board's budget preparation and implementation",
      "Produces account and financial reports annually",
    ],
  },
  {
    name: "Corporate Affairs Department",
    color: "border-pink-500",
    badge: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    functions: [
      "External communication, public relations and Stakeholder Engagement",
      "Managing the Board's public image and reputation",
      "Handling media relations and public enquiries",
      "Co-ordinating press coverage",
      "Carrying out daily analysis of media comments from print and electronic media",
      "Providing needed feedback on comments and reactions from the public",
    ],
  },
  {
    name: "Information & Communication Technology (ICT) Department",
    color: "border-cyan-500",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    functions: [
      "Promoting and implementing information communication technology integration",
      "Hardware maintenance across all NFVCB facilities",
      "Software and website programming and maintenance",
      "Network maintenance and help desk services",
    ],
  },
];

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Organisation
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Departments &amp; Units
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
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map(({ name, color, badge, functions: fns }) => (
            <StaggerItem key={name}>
              <Card
                className={`h-full border-l-4 ${color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader>
                  <Badge className={`${badge} w-fit text-xs mb-2 border-0`}>Department</Badge>
                  <CardTitle className="text-base leading-snug">{name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {fns.map((fn, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-snug">{fn}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
