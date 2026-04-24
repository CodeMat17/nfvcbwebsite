export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "press-release" | "news" | "announcement";
  /** Real cover photo. When absent the logo watermark is used instead. */
  image?: string;
  author: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "nfvcb-launches-digital-classification-portal",
    title: "NFVCB Launches Digital Classification Portal for Filmmakers",
    excerpt:
      "The National Film and Video Censors Board has unveiled a new online portal that allows filmmakers to submit works for classification electronically, reducing turnaround time significantly.",
    content: `<p>The National Film and Video Censors Board (NFVCB) has officially launched its Digital Classification Portal, a transformative step in the Board's commitment to modernising film regulation in Nigeria.</p>
    <p>The portal, accessible via the NFVCB website, enables producers, marketers and distributors to submit films, music videos, skits, and video games for classification without physical visits to any of the Board's offices.</p>
    <p>Speaking at the launch, Director-General Dr. Shaibu Husseini described the development as a milestone: "We are determined to reduce bureaucracy and embrace technology. This portal will cut processing time from weeks to days and make our services accessible to every stakeholder across Nigeria."</p>
    <p>Key features of the portal include real-time application tracking, digital certificate download, payment integration via Remita, and a feedback mechanism for applicants. The Board plans to expand the system to include mobile applications in subsequent phases.</p>`,
    date: "2026-03-15",
    category: "press-release",
    image: "https://picsum.photos/seed/nfvcb-portal/800/500",
    author: "Corporate Affairs Department",
  },
  {
    slug: "nfvcb-cracks-down-on-uncensored-films",
    title: "NFVCB Operations Department Reports 200+ Arrests in Q1 2026",
    excerpt:
      "Field operations conducted across all six geopolitical zones led to over 200 arrests for distribution and exhibition of unapproved films and video works.",
    content: `<p>The NFVCB Operations Department has recorded significant success in its first quarter enforcement drive, making over 200 arrests across the country's six geopolitical zones.</p>
    <p>The crackdown targeted distribution and exhibition of unapproved (uncensored/unclassified) films and video works, unlicensed distribution, and the forging of the Board's classification symbols and certificates.</p>
    <p>Zonal coordinators from South West, South East, South South, North Central, North West, and North East all reported seizures of pirated content and unclassified materials from markets, cinemas, and roadside vendors.</p>
    <p>The Director-General warned that the Board would continue to strengthen its enforcement activities: "Compliance with the NFVCB Act is not optional. We will continue to protect the integrity of the classification system and the Nigerian viewing public."</p>`,
    date: "2026-04-01",
    category: "news",
    author: "Operations Department",
  },
  {
    slug: "nollywood-classification-guidelines-review",
    title: "NFVCB Invites Public Input on Revised Classification Guidelines",
    excerpt:
      "In line with biennial review requirements, the Board is inviting stakeholders, industry professionals, and the public to submit inputs toward revising the national film classification guidelines.",
    content: `<p>The National Film and Video Censors Board has commenced its biennial review of the national film classification guidelines and is inviting public submissions from stakeholders, industry players, and members of the public.</p>
    <p>The review, which is a statutory requirement, aims to ensure that the classification framework remains current, reflective of evolving community standards, and aligned with global best practices.</p>
    <p>Areas under review include classification categories, age ratings, content thresholds for violence, language, and sexual content, as well as new guidelines for digital content, streaming, and social media video works.</p>
    <p>Submissions can be made via email to guidelines@nfvcb.gov.ng or through the Board's head office at No. 20 Alexandria Crescent, Wuse II, Abuja. The consultation period runs for 60 days.</p>`,
    date: "2026-04-10",
    category: "announcement",
    image: "https://picsum.photos/seed/nfvcb-guidelines/800/500",
    author: "Planning, Research & Statistics Department",
  },
  {
    slug: "director-general-oxford-programme",
    title: "DG Shaibu Husseini Graduates from Oxford's Blavatnik School Programme",
    excerpt:
      "NFVCB Director-General Dr. Shaibu Husseini has successfully completed the AIG-Public Leaders Programme at the Blavatnik School of Governance, University of Oxford.",
    content: `<p>Dr. Shaibu Husseini, Director-General of the National Film and Video Censors Board, has returned from the United Kingdom after successfully completing the prestigious AIG-Public Leaders Programme at the Blavatnik School of Governance, University of Oxford.</p>
    <p>The programme, funded by the Aig-Imoukhuede Foundation, brings together senior public servants from across Africa to build leadership capacity and expose them to global governance best practices.</p>
    <p>Dr. Husseini, who holds a First Class BSc and PhD in Mass Communication from the University of Lagos, is expected to apply the learnings from the programme to advance the NFVCB's institutional transformation agenda.</p>
    <p>"This experience has deepened my conviction that Nigeria's film regulatory framework can rank among the best in the world. We have the talent, the legislation, and now the strategy," Dr. Husseini said on his return.</p>`,
    date: "2026-02-20",
    category: "news",
    author: "Corporate Affairs Department",
  },
  {
    slug: "nfvcb-amaa-selection-committee",
    title: "NFVCB Affirms Commitment to Africa Movie Academy Awards Excellence",
    excerpt:
      "The Board reaffirms its role in supporting Africa's premier film award, the Africa Movie Academy Awards (AMAA), as DG Husseini chairs the selection committee for the 16th consecutive year.",
    content: `<p>The National Film and Video Censors Board has reaffirmed its institutional commitment to promoting excellence in African cinema through continued engagement with the Africa Movie Academy Awards (AMAA).</p>
    <p>Director-General Dr. Shaibu Husseini continues to chair the AMAA Selection Committee for the 16th year running — a testament to the Board's central role in shaping Africa's film landscape.</p>
    <p>The AMAA, widely regarded as the continent's premier film award, recognises outstanding achievement in African filmmaking across categories including best film, best director, best screenplay, and best actress and actor.</p>
    <p>Dr. Husseini noted that the NFVCB's involvement in AMAA is consistent with the Board's mandate to promote quality content and support the growth of the Nigerian and African film industries.</p>`,
    date: "2026-01-30",
    category: "press-release",
    image: "https://picsum.photos/seed/nfvcb-amaa/800/500",
    author: "Corporate Affairs Department",
  },
  {
    slug: "nfvcb-school-outreach-programme",
    title: "NFVCB Launches Nationwide School Outreach on Film Classification Awareness",
    excerpt:
      "The Licensing and Documenting Department has commenced a nationwide school outreach programme to educate students, teachers, and parents on the importance of film classification.",
    content: `<p>The NFVCB's Licensing and Documenting Department has launched a nationwide school outreach programme targeting secondary schools across all six geopolitical zones of Nigeria.</p>
    <p>The programme aims to educate students, teachers, and parents about the NFVCB classification system, age ratings, and the importance of monitoring media consumption among young people.</p>
    <p>During school visits, NFVCB officers distribute educational materials, conduct interactive sessions, and screen examples of classification markers used on films and video works to help parents and guardians make informed choices.</p>
    <p>The outreach is part of the Board's broader strategy to enhance community understanding of the classification system and empower parents to exercise greater responsibility over their children's media diet.</p>`,
    date: "2026-03-05",
    category: "announcement",
    author: "Licensing & Documenting Department",
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getNewsByCategory(category: NewsItem["category"]): NewsItem[] {
  return newsItems.filter((item) => item.category === category);
}
