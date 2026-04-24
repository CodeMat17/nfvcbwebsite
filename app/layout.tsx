import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  preload: true,
});

const BASE_URL = "https://nfvcb.gov.ng";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#009f3b" },
    { media: "(prefers-color-scheme: dark)", color: "#001506" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NFVCB — National Film and Video Censors Board of Nigeria",
    template: "%s | NFVCB Nigeria",
  },
  description:
    "The National Film and Video Censors Board (NFVCB) is Nigeria's official film regulatory authority, established by Act No. 85 of 1993. We classify, censor and regulate films, video works and video games across Nigeria — protecting audiences while promoting the Nollywood industry.",
  keywords: [
    "NFVCB",
    "National Film and Video Censors Board",
    "Nigeria film regulation",
    "Nollywood",
    "film classification Nigeria",
    "film censorship Nigeria",
    "film licensing Nigeria",
    "Nigerian movies",
    "film rating Nigeria",
    "Nigerian film industry",
    "Nollywood regulation",
    "film distribution licence Nigeria",
    "film exhibitor licence Nigeria",
    "approved movies Nigeria",
    "movie rating board Nigeria",
    "Nigerian film board",
    "Dr Shaibu Husseini",
    "NFVCB director general",
    "film censor Nigeria",
    "video censor Nigeria",
    "Nigerian cinema regulation",
    "film submission Nigeria",
    "film classification fee Nigeria",
    "NFVCB online portal",
    "Nigerian film law",
    "G-rated films Nigeria",
    "PG films Nigeria",
    "film censorship board Nigeria",
    "video games rating Nigeria",
    "music video classification Nigeria",
    "Nollywood governance",
    "film regulatory body Nigeria",
    "NFVCB zonal offices",
    "Lagos film censors",
    "Abuja film censors",
  ],
  authors: [{ name: "NFVCB Nigeria", url: BASE_URL }],
  creator: "National Film and Video Censors Board",
  publisher: "NFVCB Nigeria",
  category: "Government",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "NFVCB — National Film and Video Censors Board",
    title: "NFVCB — National Film and Video Censors Board of Nigeria",
    description:
      "Nigeria's official film regulatory authority since 1993. Film classification, licensing, enforcement and Nollywood industry development.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "NFVCB — National Film and Video Censors Board of Nigeria",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NFVCBNigeria",
    creator: "@NFVCBNigeria",
    title: "NFVCB — National Film and Video Censors Board of Nigeria",
    description:
      "Nigeria's official film regulatory authority since 1993. Film classification, licensing and Nollywood industry development.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "nfvcb-google-site-verification",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NFVCB Nigeria",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "@id": `${BASE_URL}/#organization`,
  name: "National Film and Video Censors Board",
  alternateName: "NFVCB",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.webp`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/opengraph-image.png`,
  description:
    "Nigeria's official film regulatory authority established by Act No. 85 of 1993. Responsible for the classification, censorship and regulation of films, video works and video games in Nigeria.",
  foundingDate: "1993",
  foundingLocation: {
    "@type": "Place",
    name: "Nigeria",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressLocality: "Abuja",
    addressRegion: "FCT",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: ["English", "Yoruba", "Hausa", "Igbo"],
    },
  ],
  sameAs: [
    "https://twitter.com/NFVCBNigeria",
    "https://facebook.com/NFVCBNigeria",
  ],
  memberOf: {
    "@type": "GovernmentOrganization",
    name: "Federal Government of Nigeria",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "NFVCB — National Film and Video Censors Board of Nigeria",
  description:
    "Nigeria's official film regulatory authority. Film classification, licensing, enforcement and Nollywood industry development.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/news?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NG"
      className={`${nunito.variable} h-full antialiased`}
      suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-nunito)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-nfvcb-green focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}>
          <Navbar />
          <main id="main-content" className="flex-1 pt-22">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
