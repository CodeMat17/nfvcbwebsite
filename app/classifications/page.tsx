import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Film Classification Symbols — G, PG, 12, 15, 18, RE",
  description:
    "Official NFVCB film and video classification symbols explained — G (General), PG (Parental Guidance), 12, 12A, 15, 18 and RE (Restricted Exhibition). Understand what each rating means for Nigerian audiences.",
  keywords: [
    "film classification symbols Nigeria",
    "NFVCB ratings",
    "G rating Nigeria",
    "PG rating Nigeria",
    "18 rating Nigeria",
    "RE restricted exhibition Nigeria",
    "movie ratings Nigeria",
    "film age rating Nigeria",
    "Nigerian film classification guide",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/classifications" },
  openGraph: {
    title: "Film Classification Symbols — G, PG, 12, 15, 18, RE | NFVCB",
    description:
      "Official NFVCB film classification symbols explained. Understand what G, PG, 12, 15, 18 and RE ratings mean for Nigerian audiences.",
    url: "https://nfvcb.gov.ng/classifications",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const symbols = [
  {
    src: "/classification_symbols/symbol_G.jpg",
    label: "G",
    title: "General",
    description:
      "Suitable for all audiences. Content contains nothing that would harm or disturb any age group, including young children.",
  },
  {
    src: "/classification_symbols/symbol_PG.jpg",
    label: "PG",
    title: "Parental Guidance",
    description:
      "General viewing, but some scenes may be unsuitable for young children. Parents are advised to watch with younger children.",
  },
  {
    src: "/classification_symbols/symbol_12.jpg",
    label: "12",
    title: "12 Years and Above",
    description:
      "Suitable only for persons of 12 years and over. Not to be supplied to any person below that age.",
  },
  {
    src: "/classification_symbols/symbol_12A.png",
    label: "12A",
    title: "12 Years and Above (Accompanied)",
    description:
      "Suitable for 12 years and above, but younger children may watch when accompanied by a responsible adult who has deemed the content appropriate.",
  },
  {
    src: "/classification_symbols/symbol_15.jpg",
    label: "15",
    title: "15 Years and Above",
    description:
      "Suitable only for persons of 15 years and over. Content may include stronger language, themes, or references not appropriate for younger audiences.",
  },
  {
    src: "/classification_symbols/symbol_18.jpg",
    label: "18",
    title: "18 Years and Above",
    description:
      "Suitable only for adults aged 18 and over. Content may include adult themes, strong language, nudity, or violence.",
  },
  {
    src: "/classification_symbols/symbol_RE.jpg",
    label: "RE",
    title: "Restricted Exhibition",
    description:
      "Content is restricted to specific controlled exhibition settings only, such as licensed adult venues. Not for general public distribution.",
  },
];

export default function ClassificationsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Classification Symbols
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            The NFVCB uses these official classification symbols to guide audiences on the
            suitability of film and video content across all age groups in Nigeria.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {symbols.map(({ src, label, title, description }) => (
            <StaggerItem key={label}>
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 h-full hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={src}
                    alt={`${label} classification symbol`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                    {label}
                  </span>
                  <h2 className="text-base font-semibold text-foreground mb-2">{title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
