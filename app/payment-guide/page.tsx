import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { RevOpPaymentWidget } from "./payment-widget";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Download,
  ExternalLink,
  FileText,
  Info,
  Landmark,
  Receipt,
  TriangleAlert,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RevOP Payment Guide — How to Make a Federal Government Payment",
  description:
    "Official OAGF RevOP user guide — step-by-step instructions for generating a bill and making payment online, by card, or at any bank branch on the RevOP portal.",
  keywords: [
    "RevOP payment guide",
    "OAGF RevOP",
    "how to pay on RevOP",
    "federal government revenue payment Nigeria",
    "generate bill RevOP",
    "RevOP pay a bill",
    "NFVCB RevOP payment",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/payment-guide" },
  openGraph: {
    title: "RevOP Payment Guide — How to Make a Federal Government Payment | NFVCB",
    description:
      "Step-by-step guide for generating a bill and making payment on the OAGF RevOP portal.",
    url: "https://nfvcb.gov.ng/payment-guide",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const reminders = [
  {
    icon: CheckCircle,
    color: "text-[#009f3b]",
    bg: "bg-[#009f3b]/10 border-[#009f3b]/20",
    title: "Validate your ID",
    desc: 'Always click the Validate button after entering your ID number. If you have no valid ID, choose "Not Available".',
  },
  {
    icon: Receipt,
    color: "text-[#fea600]",
    bg: "bg-[#fea600]/10 border-[#fea600]/20",
    title: "Save your bill reference",
    desc: "Copy it immediately after generation. You will need it to pay or retrieve your receipt later.",
  },
  {
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
    title: "Transfer time limit",
    desc: "Bank transfers must be completed within the time window shown on your invoice or the payment will expire.",
  },
  {
    icon: CreditCard,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    title: "Full payment only",
    desc: "Part-payment is not enabled. Always pay the exact total charge shown on your bill.",
  },
  {
    icon: Download,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    title: "Download your invoice",
    desc: "The downloaded PDF shows full payment instructions for online, bank transfer, and bank branch options.",
  },
  {
    icon: TriangleAlert,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
    title: "Use the official portal only",
    desc: "Always access revop.gov.ng directly. Never pay via links received through unofficial SMS or social media.",
  },
];

const part1Steps = [
  {
    number: 1,
    icon: ExternalLink,
    title: "Visit the RevOP Portal",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Go to{" "}
          <a
            href="https://revop.gov.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            revop.gov.ng
          </a>{" "}
          in your browser. You will see the RevOP homepage with two main options on the landing page.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Click <strong className="text-foreground">&ldquo;Generate a Bill&rdquo;</strong>.
        </p>
      </>
    ),
  },
  {
    number: 2,
    icon: FileText,
    title: "Search for and Select Your Biller",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A Billers List will appear. Use the search bar to find &quot;NATIONAL FILM AND VIDEO CENSORS BOARD&quot;. Click on your biller to proceed.
        </p>
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-[#009f3b]/5 border border-[#009f3b]/20">
          <Info className="h-4 w-4 text-[#009f3b] shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            If you already have a bill reference number, click{" "}
            <strong className="text-foreground">&ldquo;Click here to pay&rdquo;</strong> at the
            top-right of the page to skip straight to payment.
          </p>
        </div>
      </>
    ),
  },
  {
    number: 3,
    icon: FileText,
    title: "Enter Bill Details",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          On the Bill Details screen (Step 1 of 2), fill in the following fields:
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          {[
            "What the payment is for",
            "Amount",
            "Quantity",
            "GIFMIS Code (if applicable)",
            "Narration / description for the bill",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          You can click{" "}
          <strong className="text-foreground">&ldquo;+ Add Another Payment Item&rdquo;</strong> to
          include multiple items on the same bill.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Click <strong className="text-foreground">&ldquo;Next&rdquo;</strong> to continue.
        </p>
      </>
    ),
  },
  {
    number: 4,
    icon: User,
    title: "Enter Customer Information",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          On the Customer Information screen (Step 2 of 2), fill in:
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          {[
            "Payer type — Individual or Corporate",
            "First Name and Last Name",
            "ID Type (e.g. NIN, Passport, Driver's License)",
            "ID Number — then click Validate",
            "Phone Number",
            "Email",
            "Address",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
          <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            You must click the{" "}
            <strong className="text-foreground">&ldquo;Validate&rdquo;</strong> button after
            entering your ID Number. If you do not have a valid ID, select{" "}
            <strong className="text-foreground">&ldquo;Not Available&rdquo;</strong> as the ID Type
            and proceed without validation.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Click <strong className="text-foreground">&ldquo;Continue&rdquo;</strong>.
        </p>
      </>
    ),
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "Review the Bill Preview and Confirm",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A &ldquo;Confirm Bill&rdquo; dialog will appear showing the item description, quantity,
          rate, and total amount in Naira. Review all details carefully.
        </p>
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <TriangleAlert className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Warning:</strong> Creating a bill is irreversible.
            Once confirmed, it cannot be undone.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Click <strong className="text-foreground">&ldquo;Create Bill&rdquo;</strong>.
        </p>
      </>
    ),
  },
  {
    number: 6,
    icon: Receipt,
    title: "Save Your Bill Reference Number",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your bill is now generated. The portal displays your unique Bill Reference Number at the
          top of the screen. You can:
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            Click <strong className="text-foreground ml-1">&ldquo;View Invoice&rdquo;</strong> to
            see the full invoice on screen
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            Click <strong className="text-foreground ml-1">&ldquo;Download&rdquo;</strong> to save a
            PDF copy — the PDF includes your bill number and full payment instructions for all
            channels
          </li>
        </ul>
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
          <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Important:</strong> Copy or note down your Bill
            Reference Number — you will need it to make payment.
          </p>
        </div>
      </>
    ),
  },
];

const part2Steps = [
  {
    number: 7,
    icon: ArrowRight,
    title: "Initiate Payment",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can pay immediately after generating the bill by clicking the green{" "}
          <strong className="text-foreground">&ldquo;Make ₦X Payment&rdquo;</strong> button at the
          bottom of the bill screen.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Alternatively, return to{" "}
          <a
            href="https://revop.gov.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            revop.gov.ng
          </a>
          , click <strong className="text-foreground">&ldquo;Pay a Bill&rdquo;</strong>, enter your
          Bill Reference Number in the field provided, and click{" "}
          <strong className="text-foreground">&ldquo;Pay Bill&rdquo;</strong>.
        </p>
      </>
    ),
  },
  {
    number: 8,
    icon: CreditCard,
    title: "Choose a Payment Method",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A Payment Method dialog will appear with three options:
        </p>
        <div className="mt-3 space-y-3">
          {[
            {
              icon: ArrowRight,
              label: "Bank Transfer",
              color: "text-blue-600",
              bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
              desc: "Transfer the exact amount to the account details generated for you within the time limit shown on screen.",
            },
            {
              icon: CreditCard,
              label: "Card",
              color: "text-[#009f3b]",
              bg: "bg-[#009f3b]/5 border-[#009f3b]/20",
              desc: 'Select Card, then choose Credo by eTranzact as the payment option. Click "Continue", enter your card details, and click "Proceed" to complete payment.',
            },
            {
              icon: Landmark,
              label: "Bank Branch",
              color: "text-purple-600",
              bg: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
              desc: "Walk into any bank branch closest to you and present your downloaded bill invoice for payment.",
            },
          ].map(({ icon: Icon, label, color, bg, desc }) => (
            <div key={label} className={`flex items-start gap-3 p-3 rounded-lg border ${bg}`}>
              <Icon className={`h-4 w-4 ${color} shrink-0 mt-0.5`} />
              <div>
                <p className={`text-sm font-semibold ${color} mb-0.5`}>{label}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    number: 9,
    icon: CheckCircle,
    title: "Confirm and Complete Payment",
    content: (
      <>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A summary screen will show the total amount due and notify you that a service charge will
          be added to the bill amount. Part-payment is not enabled — you must pay the full amount
          shown.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          Click <strong className="text-foreground">&ldquo;Pay Bill&rdquo;</strong> and follow your
          chosen channel&apos;s instructions to authorise the transaction.
        </p>
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-[#009f3b]/5 border border-[#009f3b]/20">
          <Info className="h-4 w-4 text-[#009f3b] shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Part-payment is not enabled. Always
            pay the exact total charge shown on your bill.
          </p>
        </div>
      </>
    ),
  },
];

function StepCard({
  step,
  partColor,
}: {
  step: { number: number; icon: React.ElementType; title: string; content: React.ReactNode };
  partColor: string;
}) {
  const Icon = step.icon;
  return (
    <Card className="border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full ${partColor} text-white flex items-center justify-center text-sm font-bold shrink-0`}
          >
            {step.number}
          </div>
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">{step.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">{step.content}</CardContent>
    </Card>
  );
}

export default function PaymentGuidePage() {
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
              Official OAGF RevOP User Guide
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How to Make a RevOP Payment
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Federal Government of Nigeria revenue payments — generate your bill, then pay online,
              by card, or at any bank branch. Ensure you read the guide below before you proceed.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="https://revop.gov.ng/payments/generate-bill"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#009f3b] text-white text-sm font-semibold hover:bg-[#007d2e] transition-colors"
              >
                Generate a Bill <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://revop.gov.ng/payments/pay-bill"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Pay a Bill <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Part 1 */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#009f3b] flex items-center justify-center text-white text-sm font-bold shrink-0">
              1
            </div>
            <h2 className="text-2xl font-bold text-foreground">Part 1 — Generate Your Bill</h2>
          </div>
          <StaggerContainer className="space-y-4">
            {part1Steps.map((step) => (
              <StaggerItem key={step.number}>
                <StepCard step={step} partColor="bg-[#009f3b]" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Part 2 */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#001506] border border-[#009f3b]/40 flex items-center justify-center text-[#009f3b] text-sm font-bold shrink-0">
              2
            </div>
            <h2 className="text-2xl font-bold text-foreground">Part 2 — Make Payment</h2>
          </div>
          <StaggerContainer className="space-y-4">
            {part2Steps.map((step) => (
              <StaggerItem key={step.number}>
                <StepCard step={step} partColor="bg-[#001506] border border-[#009f3b]/40" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Pay Online */}
        {/* <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-nfvcb-green flex items-center justify-center text-white text-sm font-bold shrink-0">
              ₦
            </div>
            <h2 className="text-2xl font-bold text-foreground">Pay Your Bill Online</h2>
          </div>
          <RevOpPaymentWidget />
        </AnimatedSection> */}

        {/* Key Reminders */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Reminders</h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reminders.map(({ icon: Icon, color, bg, title, desc }) => (
              <StaggerItem key={title}>
                <div className={`flex items-start gap-3 p-4 rounded-xl border ${bg} h-full`}>
                  <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Footer note */}
        <AnimatedSection>
          <Card className="bg-muted/30 border-border">
            <CardContent className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Official portal operated by the{" "}
                <strong className="text-foreground">
                  Office of the Accountant-General of the Federation (OAGF)
                </strong>
                .
              </p>
              <a
                href="https://revop.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline shrink-0"
              >
                Visit revop.gov.ng <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </>
  );
}
