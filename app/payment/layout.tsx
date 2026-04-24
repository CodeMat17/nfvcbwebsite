import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pay Classification & Licensing Fees",
  description:
    "Pay NFVCB film classification fees, licensing fees and other regulatory charges securely online via Remita. Select your service, enter your details and complete payment instantly.",
  keywords: [
    "NFVCB payment",
    "NFVCB film classification fee",
    "NFVCB licensing fee",
    "pay NFVCB online",
    "Remita NFVCB",
    "film classification fee Nigeria",
    "NFVCB online payment",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/payment" },
  openGraph: {
    title: "Pay Classification & Licensing Fees | NFVCB",
    description:
      "Securely pay NFVCB film classification and licensing fees online via Remita.",
    url: "https://nfvcb.gov.ng/payment",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function PaymentLayout({ children }: { children: ReactNode }) {
  return children;
}
