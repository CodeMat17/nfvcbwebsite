import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { LicenceCards } from "./licence-cards";

export const metadata: Metadata = {
  title: "Film Licensing — Exhibition & Distribution Requirements",
  description:
    "NFVCB licensing requirements and fees for film exhibitors, exhibition premises, mobile cinema, online exhibition platforms, and film distributors operating in Nigeria. Apply for Online, National, Regional or Community licences.",
  keywords: [
    "NFVCB film license Nigeria",
    "film exhibition license Nigeria",
    "film distributor license Nigeria",
    "online film exhibition license Nigeria",
    "cinema license Nigeria",
    "NFVCB licensing fees",
    "film distribution Nigeria",
    "mobile cinema license Nigeria",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/industry/licensing" },
  openGraph: {
    title: "Film Licensing — Exhibition & Distribution Requirements | NFVCB",
    description:
      "Licensing requirements and fees for exhibitors, distributors and online platforms operating in Nigeria's film industry.",
    url: "https://nfvcb.gov.ng/industry/licensing",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function LicensingPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Licensing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Film Exhibition &amp; Distribution Licensing
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              NFVCB licenses film exhibitors, exhibition premises, mobile exhibition operators,
              online exhibitors, and distributors. Select a category below to view requirements and
              applicable fees under the NFVCB Act Cap N40 LFN 2004 and the Scale of Charges 2025.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-2">Licence Categories</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Use the tabs below to navigate between licence types. Click <strong className="text-foreground">View Requirements</strong> on any card to see the full application checklist and fee breakdown.
          </p>
          <LicenceCards />
        </AnimatedSection>

        {/* Renewal note */}
        <AnimatedSection>
          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-base">Licence Renewal</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Licences for Exhibitors and Distributors are renewable annually.{" "}
                <strong className="text-foreground">Renewal before expiry</strong> attracts a fee of
                20% of the new licence fee.{" "}
                <strong className="text-foreground">Renewal after expiry</strong> attracts 50% of the
                new licence fee. Exhibition Premises licences renew at the same rate as the original
                licence fee.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Payment note */}
        <AnimatedSection>
          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-base">Payment Instructions</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                All payments must be made via{" "}
                <strong className="text-foreground">Remita</strong> or any other
                government-approved payment platform. Keep a printout of your payment and obtain an
                NFVCB official receipt. Payments made outside Remita will not be accepted.
              </p>
              <p>
                For licensing enquiries, contact:{" "}
                <a href="mailto:nfvcb_ldd@nfvcb.gov.ng" className="text-primary hover:underline">
                  nfvcb_ldd@nfvcb.gov.ng
                </a>{" "}
                or visit any NFVCB zonal office.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </>
  );
}
