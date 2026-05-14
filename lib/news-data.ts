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
    slug: "nfvcb-classifies-304-films-2026",
    title: "NFVCB Classifies 304 Films in First Four Months of 2026, Records Growth Over 2025",
    excerpt:
      "The National Film and Video Censors Board has approved and classified a total of 304 films between January and April 2026, reflecting sustained growth in Nigeria's film industry — up from 267 films classified in the same period in 2025.",
    content: `<p>The National Film and Video Censors Board (NFVCB) has approved and classified a total of 304 films between January and April 2026, reflecting sustained growth in Nigeria's film industry and reaffirming the Board's commitment to effective regulation of the sector.</p>
    <p>The figure represents an increase over the 267 films classified within the corresponding period in 2025. In the first four months of 2025, the Board classified 25 films in January, 58 in February, 114 in March and 70 in April. According to the 2026 classification statistics, January recorded the highest number of approved films with 102 classifications, followed by 83 in February, 77 in March and 42 in April.</p>
    <p>The language distribution of the 304 films classified during the review period shows English language productions leading with 201 films, followed by Igbo with 44 films, Yoruba with 42, Hindi with 9, Hausa with 5 and Bini with 3. Further analysis of the classification categories indicates that the majority of the films fell within the "15" and "18" age ratings, reflecting prevailing themes and creative trends in contemporary film productions. The classification distribution is as follows: G: 10 films, PG: 16 films, 12/12A: 18 films, 15: 157 films, and 18: 103 films.</p>
    <p>Commenting on the performance, the Director, Film Censorship and Classification, Deborah Malgwi, reaffirmed commitment of the Board to promoting responsible storytelling, professionalism and the continued growth of the Nigerian film industry in line with national values and international best practices. She further noted that the increase in film classification activities underscores the resilience and expanding capacity of Nigeria's creative industry, particularly in local content production and distribution.</p>
    <p>Malgwi further reminded filmmakers that film classification remains a critical regulatory mechanism designed to protect children and vulnerable audiences from unsuitable content while also providing necessary viewing guidance to parents, guardians and the general public.</p>
    <p>She also commended filmmakers, producers and stakeholders across the value chain for their continued cooperation and compliance with the Board's regulatory framework.</p>
    <p><em>Signed:<br/>Ogbonna Onwumere,<br/>Director, Corporate Affairs.<br/>National Film and Video Censors Board<br/>Abuja.</em></p>`,
    date: "2026-05-14",
    category: "press-release",
    author: "Corporate Affairs",
  },

  {
    slug: "nfvcb-boss-mtf-arise-fly-shine",
    title: "NFVCB Boss to MultiChoice Talent Factory Graduands: \"Arise, Fly and Shine\"",
    excerpt:
      "NFVCB Executive Director Dr. Shaibu Husseini delivered the keynote at the MTF Class of 2026 Graduation Ceremony, urging graduating filmmakers to embrace their role as cultural influencers and nation builders.",
    content: `<p>The Executive Director/Chief Executive Officer of the National Film and Video Censors Board (NFVCB), Shaibu Husseini, Ph.D., has called on graduating filmmakers of the MultiChoice Talent Factory (MTF) to embrace their responsibility as cultural influencers and nation builders.</p>
    <p>Delivering the keynote address at the MTF Class of 2026 Graduation Ceremony, Dr. Husseini urged the graduates—referred to as "Luminaries"—to "Arise, Fly and Shine" as they transition from training into professional practice within the film industry.</p>
    <p>Dr. Husseini commended MultiChoice for sustaining the Talent Factory initiative, describing it as a strategic investment in the future of African storytelling.</p>
    <p>"The MultiChoice Talent Factory has consistently demonstrated a strong commitment to developing the next generation of African storytellers—equipping them with skills, discipline, exposure, and industry relevance," he said.</p>
    <p>He noted that the programme continues to raise standards across the continent by nurturing creative talent capable of competing globally.</p>
    <p>Addressing the graduates, Dr. Husseini emphasized that their certification represents more than academic achievement—it is a mandate to influence society through storytelling.</p>
    <p>"Film is not just entertainment; it is influence. Content is not just expression; it has the power to shape lives and society," he stated.</p>
    <p>He highlighted the global rise of Nollywood, citing successful productions such as <em>Black Book</em>, <em>King of Boys</em>, <em>Anikulapo</em>, and <em>To Kill a Monkey</em> as evidence of the industry's evolution into a global cultural force.</p>
    <p>Dr. Husseini urged the graduates to maintain discipline and professionalism as they enter the industry, stressing the importance of joining relevant guilds and professional bodies.</p>
    <p>"Training gives you wings; discipline determines how far you fly. To sustain growth in Nollywood, we need organised creatives committed to professional standards," he said.</p>
    <p>He also reminded filmmakers of their obligation to submit completed works to the NFVCB for classification, reinforcing the role of regulation in maintaining industry integrity.</p>
    <p>In his closing remarks, Dr. Husseini encouraged the graduates to remain ambassadors of excellence and to contribute meaningfully to the creative ecosystem.</p>
    <p>"Wherever you go, let your work reflect integrity, professionalism, and excellence. Let your stories elevate Africa's voice on the global stage and contribute to national development," he added.</p>
    <p>He further called on the graduates to sustain the MTF vision by collaborating, mentoring emerging talents, and strengthening the network of African creatives.</p>
    <p>The graduation ceremony was attended by the CEO of MultiChoice Kemi Omotosho, Academic Director of MTF Akaoma Onyeonoru, Dean of the School of Communication at Pan Atlantic University Dr. Ike Obianya, Head of Content Channel MultiChoice Atinuke Babatunde, Moses Babatope of Nile Cinema, President of the Directors Guild of Nigeria Uche Agbo, and President of the Association of Movie Producers Queen Blessing Ebigieson. Highlights of the ceremony included the presentation of certificates and awards to graduands and their induction into the Directors Guild of Nigeria and the Association of Movie Producers.</p>`,
    date: "2026-05-03",
    category: "press-release",
    image: "/shaibu.jpeg",
    author: "Corporate Affairs",
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
    image: "",
    author: "Corporate Affairs Department",
  },
  {
    slug: "nfvcb-kaduna-stakeholders-engagement",
    title: "NFVCB Signals Strong Commitment to Growing Kaduna's Film Industry",
    excerpt:
      "The National Film and Video Censors Board hosted a high-level stakeholders' engagement in Kaduna, announcing plans to bring the grand finale of the Nigerian Indigenous Film Showcase to the state.",
    content: `<p>In a significant move to strengthen Nigeria's film industry beyond the traditional hubs, the National Film and Video Censors Board (NFVCB) has signaled strong commitment to growing the creative sector in Kaduna State, with plans to host the grand finale of the Nigerian Indigenous Film Showcase in the state.</p>
    <p>The announcement came during a high-level stakeholders' engagement hosted by NFVCB Executive Director/CEO, Dr. Shaibu Husseini, at the Federal Secretariat Conference Hall in Kaduna recently.</p>
    <p>The interactive session brought together representatives from various film associations, guilds and representatives of the Kaduna State Ministry of Business and Innovation, providing a platform for open dialogue on industry practices, regulatory compliance, and strategies for sustainable development. Stakeholders arrived with pressing questions and concerns, many of which Dr. Husseini addressed proactively in his presentation, offering clear guidance on the road ahead.</p>
    <p>Dr. Husseini emphasized the Board's vision of leveraging the creative industry to add tangible value to Kaduna State and other parts of the country. He reiterated plans to bring the grand finale of the Nigerian Indigenous Film Showcase to Kaduna, a move expected to boost local production, talent development, and economic activity in the region's emerging film ecosystem.</p>
    <p>He also reaffirmed the Board's dedication to capacity building, announcing upcoming training programmes designed to equip practitioners with modern skills needed to compete and thrive in a rapidly evolving industry.</p>
    <p>On regulation, Dr. Husseini issued a firm warning that unapproved releases on YouTube and other platforms will no longer be tolerated. He urged filmmakers to strictly adhere to established guidelines to uphold professionalism and maintain high industry standards.</p>
    <p>In her remarks, Mrs. Rhoda Dandura, Acting Director of the Licensing and Documentation Department, called on stakeholders to exercise greater responsibility in content creation. She stressed the need for conscious, value-driven storytelling, particularly to protect younger audiences who represent the nation's future leaders.</p>
    <p>In his closing remarks, Dr. Husseini assured participants of the Board's continued commitment to regular engagements and sector-wide development. He promised to return to Kaduna in the near future to build on the momentum generated by the meeting.</p>
    <p>The stakeholders described the session as productive and insightful, underscoring the NFVCB's resolve to balance effective regulation with deliberate efforts to nurture growth, especially in emerging film centers like Kaduna. They left with renewed optimism about the Board's supportive role in fostering a more professional, inclusive, and economically viable Nigerian film industry. The representative of the Ministry of Business and Innovation, Mr. Zwahu Yanwaidi pledged the support of the Ministry in facilitating the hosting of the showcase and in the planned training programme for creatives across the state.</p>`,
    date: "2026-04-29",
    category: "news",
    author: "Corporate Affairs Department",
  },
  {
    slug: "nfvcb-coal-city-film-festival-2026",
    title: "NFVCB Boss Urges Stronger Distribution Channels as Coal City Film Festival 2026 Opens in Enugu",
    excerpt:
      "NFVCB Executive Director Dr. Shaibu Husseini delivered the keynote at the Coal City Film Festival 2026, calling for stronger distribution frameworks to give locally produced Nigerian films global visibility.",
    content: `<p>The Executive Director/Chief Executive Officer of the National Film and Video Censors Board (NFVCB), Dr. Shaibu Husseini, has called for stronger distribution frameworks within Nigeria's film industry to ensure that locally produced content achieves global visibility.</p>
    <p>Dr. Husseini made this call while delivering the keynote address at the opening ceremony of the 2026 edition of the Coal City Film Festival, held in Enugu.</p>
    <p>Welcoming participants to the festival, Dr. Husseini expressed personal delight at hosting the event in Enugu, his birth state, noting the city's rich cultural heritage and longstanding contribution to Nigeria's creative landscape.</p>
    <p>He commended the festival organisers, particularly the Festival Director, Uche Agbo, for their resilience and commitment in sustaining the initiative. According to him, the Coal City Film Festival has grown into a significant cultural platform and a must-attend cinematic event in South East Nigeria.</p>
    <p>Speaking on the festival's theme, "Local Stories, Global Screens," Dr. Husseini emphasised the importance of authenticity in storytelling. He noted that films rooted in local realities, languages, and cultural truth often resonate more strongly with global audiences.</p>
    <p>He cited notable Nigerian productions such as "King of Boys" by Kemi Adetiba, "The Wedding Party" by Mo Abudu, "Anikulapo" by Kunle Afolayan, "Black Book" by Editi Effiong, and "Lionheart" by Genevieve Nnaji as examples of culturally grounded stories that have gained international recognition on platforms such as Netflix and at global film festivals.</p>
    <p>While acknowledging the growth in film production across Nigeria, the NFVCB boss identified distribution as a major bottleneck in the industry. He observed that many high-quality films struggle to reach audiences both locally and internationally due to limited distribution channels.</p>
    <p>Dr. Husseini therefore urged film festivals across the country to evolve beyond networking platforms into active marketplaces where filmmakers can secure distribution deals. He stressed that festivals must attract distributors, exhibitors, streaming platforms, and marketers to create tangible opportunities for filmmakers.</p>
    <p>"Film festivals must become gateways to distribution where filmmakers leave not just with applause, but with real opportunities," he said.</p>
    <p>Reaffirming the Board's commitment to industry development, Dr. Husseini stated that the NFVCB has continued to reposition itself as a partner in progress by engaging stakeholders, improving classification processes, and promoting a balance between creative freedom and social responsibility.</p>
    <p>However, he raised concerns over increasing non-compliance with regulatory requirements, noting that some filmmakers bypass the Board by releasing unclassified films or operating without proper licensing.</p>
    <p>He reiterated that all films and video works must be submitted to the NFVCB for classification and registration before being released on any platform, including digital platforms such as YouTube.</p>
    <p>"This is a legal obligation, and the Board will not hesitate to take decisive action against defaulters," he warned, adding that regulation is essential for protecting the industry, audiences, and national values.</p>
    <p>Looking ahead, Dr. Husseini assured stakeholders of the Board's continued collaboration with filmmakers and festival organisers to build a structured, sustainable, and globally competitive Nigerian film industry.</p>
    <p>He concluded by commending the organisers of the Coal City Film Festival for their vision and contribution to Nigeria's cultural economy, urging filmmakers to continue telling authentic stories that can resonate across global screens.</p>`,
    date: "2026-04-28",
    category: "press-release",
    author: "Corporate Affairs",
  },
  {
    slug: "nfvcb-ncc-partnership-digital-piracy",
    title: "NFVCB, NCC to Partner Against Digital Piracy and Unlicensed Streaming",
    excerpt:
      "The NFVCB has opened talks with the Nigerian Communications Commission to tackle digital piracy and unlicensed streaming platforms, with both agencies set to sign a Memorandum of Understanding.",
    content: `<p>The National Film and Video Censors Board (NFVCB) has opened talks with the Nigerian Communications Commission (NCC) to tackle the rising menace of digital piracy and the operation of unlicensed streaming platforms in Nigeria.</p>
    <p>Speaking during a courtesy visit to the NCC headquarters in Abuja, the Executive Director/CEO of NFVCB, Dr. Shaibu Husseini, commended the Commission for its regulatory achievements in Nigeria's communications sector and stressed the urgent need for stronger collaboration between the two agencies.</p>
    <p>He noted that while the NFVCB regulates films and video works through censorship, classification, and licensing, the rapid expansion of digital platforms has created new threats to Nigeria's creative economy.</p>
    <p>"One of the most disturbing trends today is the piracy of Nigerian films on encrypted platforms such as Telegram. This criminal activity robs our stakeholders of their earnings, discourages quality content creation, and undermines national security," Dr. Husseini said.</p>
    <p>The NFVCB boss also expressed concern that some telecommunication operators now operate streaming services without securing the required licenses for exhibition and distribution of films from the NFVCB. He stressed that such practices expose Nigerians to unclassified and unregulated content with cultural and security risks.</p>
    <p>To address these issues, Dr. Husseini urged the NCC to collaborate with the Nigerian Copyright Commission and the NFVCB to combat piracy on encrypted platforms. He also sought the assistance of the commission to require telecom operators to obtain NFVCB distribution and exhibition licenses before streaming films, and to set up a joint technical committee to harmonise regulatory oversight.</p>
    <p>Responding on behalf of the NCC, the Executive Commissioner for Stakeholder Management, Barr. Rimini Makama, who represented the Executive Vice Chairman, welcomed the NFVCB delegation and assured them of NCC's commitment to partnership. She revealed that both agencies would soon sign a Memorandum of Understanding (MoU) to fast-track interventions when infractions occur.</p>
    <p>Makama further briefed the delegation about NCC's existing framework on Child Online Protection and pledged to investigate reports of unlicensed streaming by telecommunications companies and piracy on Telegram, describing the latter as "a form of cybercrime."</p>
    <p>Dr. Husseini emphasized that Nigeria's film industry is both a cultural treasure and an economic driver. "Protecting it is in our collective national interest," he said, adding that the NFVCB-NCC partnership would ensure a safer digital ecosystem and a fair marketplace for creative talents.</p>`,
    date: "2026-04-25",
    category: "press-release",
    author: "Corporate Affairs",
  },
  {
    slug: "nfvcb-ceo-advocates-indigenous-language-films",
    title: '"I Can Still Dance!" – NFVCB CEO Dr. Shaibu Advocates for Indigenous Language Films',
    excerpt:
      "NFVCB CEO Dr. Shaibu Husseini appeared on NTA's Weekend Deal to promote the Nigerian Indigenous Language Film Showcase, urging filmmakers to produce content in Nigeria's lesser-spoken languages.",
    content: `<p>Dr. Shaibu Husseini, Executive Director/CEO of the National Film and Video Censors Board (NFVCB), made a lively declaration during an appearance on Nigerian Television Authority's (NTA) Weekend Deal in Lagos. Responding to a playful question from the hosts, he affirmed, "I can still dance!"—a skill honed during his time with the National Troupe of Nigeria—though he admitted his current role has limited his dancefloor appearances.</p>
    <p>Dr. Shaibu was on the show to promote the NFVCB's latest initiative, the Nigerian Indigenous Language Film Showcase (NILFS), designed to encourage filmmaking in Nigeria's lesser-spoken languages. He expressed concern over the dominance of Igbo, Yoruba, and Hausa films, warning that other indigenous languages risk extinction without deliberate efforts.</p>
    <p>"I want to see films made in Wawa instead of Igbo, Egwun rather than Yoruba, and Nupe, Tiv, or Igala instead of Hausa," he asserted.</p>
    <p>To support this vision, the NFVCB has partnered with NTA to provide a global platform for filmmakers working in these languages. Incentives include reduced classification fees, awards for outstanding submissions, and potential broadcast opportunities on NTA. Selected filmmakers may also receive film equipment as empowerment grants.</p>
    <p>Reflecting on Nigeria's cinematic history, Dr. Shaibu recalled UNESCO's recognition of the country as the second-largest film producer due to its diverse language films. He believes reviving this tradition could even pave Nigeria's way to winning an Oscar.</p>
    <p>Additionally, he emphasized the need to formalize the film sector to accurately capture its contributions to the GDP, urging stakeholders to embrace structure for sustainable growth.</p>`,
    date: "2026-04-22",
    category: "news",
    author: "Corporate Affairs",
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
