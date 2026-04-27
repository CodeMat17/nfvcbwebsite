"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "About the Board",
    items: [
      {
        q: "Why do we need a Film Censorship Board?",
        a: "Like all countries, Nigeria seeks to protect its young from unsuitable content and as a multi-ethnic developing society, the country also needs to preserve ethnic, racial and religious harmony. It must take into account the sensitivities of all the different groups and cultures who make up the population. With the impact and influence of both Nigerian movies and the influx of foreign cultural imports, censorship will continue to play an important role in fostering a morally wholesome and socially cohesive society, and safeguarding core community values such as the importance of family, respect for one's elders and moral integrity.\n\nOf course, censorship alone is not sufficient to maintain the moral tone of our society — the industry, artists and the community at large must all play a significant role in determining what society considers to be acceptable standards for media content. It is therefore a shared responsibility among the various stakeholders, with censorship complemented by public education for greater media awareness.",
      },
      {
        q: "Who sets the censorship guidelines?",
        a: "The Board's censorship guidelines are generally based on the legal instrument establishing the Board, as well as set through an established mechanism that involves all stakeholders in deciding on issues.",
      },
      {
        q: "How is the membership of the Censors Board composed or constituted?",
        a: "In view of the nation-wide nature of the Board's assignment, it draws its membership from all over the Federation. The Board also has an Advisory Council made up of representatives from each state of the Federation and the FCT. The Advisory Council also includes representatives from important stakeholders such as religious organisations, parents, teacher's bodies, the Nigerian Copyright Commission, and the National Broadcasting Commission.",
      },
      {
        q: "How far has the Board taken care of the diverse interests in Nigeria?",
        a: "The composition of membership of the Board is a clear indication that the interests of diverse groups in Nigeria have been adequately taken care of.",
      },
      {
        q: "Can an active filmmaker or video producer be a member of the Censors Board?",
        a: "No. The implication would be for such a member to be regarded as representing other producers who submit their works to the Board — it would be like being a judge of your own product or being the defender of producers on the Board. However, an active filmmaker can sit on the NFVCB Advisory Council.",
      },
      {
        q: "What is the Film & Video Consultative Panel?",
        a: "The Film Consultative Panel was set up to reflect the community's standards in censorship decisions. The panel consists of members from all 36 states and the FCT, film and video industry guilds, as well as other entertainment stakeholders including government bodies such as the Nigeria Copyrights Commission, the Nigeria Customs Service, Immigration, and the Police.",
      },
      {
        q: "Who are the clients of the Censors Board?",
        a: "The clients of the Censors Board include: film and video producers, professional exhibitors, film and video importers and exporters, distributors, retailers, video clubs, owners of cinema halls and video viewing premises, video production studios, and other operators in the film and video industry in Nigeria.",
      },
      {
        q: "Apart from film and video censorship, what are the other functions of the Censors Board?",
        a: "The law requires the Censors Board to:\n\n• License persons to exhibit, distribute and/or market films and video works\n• License premises for the purposes of exhibiting films and video works\n• Regulate and prescribe safety precautions to be observed in licensed premises\n• Regulate and control cinematographic exhibitions\n• Register films and video works\n• Register licensed exhibition premises, video production studios, etc.\n• Register film and video distribution companies, exporters and importers\n• Register video clubs, shops and centres\n• Register professional exhibitors\n• Keep records on video producers in Nigeria",
      },
      {
        q: "Who is empowered by the NFVCB Act to enter film or video exhibition premises for inspection?",
        a: "Those empowered by the NFVCB Act No. 85 of 1993 include an authorised member of the police force, staff and Board members of the Censors Board, and the Fire Service. They may enter premises to ensure the provisions of the Act have been complied with and must present a Censors Board identity card at the assignment site.",
      },
    ],
  },
  {
    category: "Censorship & Classification",
    items: [
      {
        q: "What is film and video censorship?",
        a: "Film and video censorship refers to a process whereby any film or video work, either produced locally or imported, is submitted to the Censors Board for registration, previewing and examination prior to its categorisation for public supply, distribution or exhibition. Censorship entails the examination of the contents of a film or video work to determine the age group of the target audience, based on the film's possible or inherent psychological, sociological and moral impact, among other factors.",
      },
      {
        q: "What criteria are used in censoring a film or video work?",
        a: "The Committee will ensure that the film or video work:\n\n• Has educational or entertainment value, and promotes Nigerian culture, unity or interest\n• Does not undermine national security\n• Does not induce or reinforce corruption of private or public morality\n• Does not encourage or glorify violence\n• Does not expose people of African heritage to ridicule or contempt\n• Does not encourage illegal or criminal acts\n• Does not encourage racial, religious or ethnic discrimination or conflict\n• Does not promote blasphemy, obscenity, or content likely to incite public disorder or crime",
      },
      {
        q: "Does the Board classify censored films?",
        a: "Yes. The Censors Board issues a Certificate of Censorship on all films and video works censored by its Committee. The classification is indicated in the certificate:\n\n• G — General exhibition\n• PG — Parental guidance recommended\n• 12 — Not recommended for children under 12\n• 12A — No one under 12 may enter a cinema unless accompanied by an adult\n• 15 — Not recommended for persons under 15\n• 18 — For mature audiences only\n• RE — Restricted exhibition",
      },
      {
        q: "How is censorship carried out?",
        a: "Censorship is carried out through censorship committees at all six zonal offices as well as the headquarters in Abuja. The NFVCB Act provides that the Federation be divided into operational zones for the purpose of censorship. Each operational zone has a Censorship Committee made up of at least a representative from each of the states covered by the zone, plus additional persons appointed by the NFVCB.",
      },
      {
        q: "If a film has been censored in Kano, Aba or Abeokuta, can it be exhibited in Lagos without further review?",
        a: "Yes. The Censors Board has national coverage. Once a film or video work has been passed by any of its zonal committees, it can be exhibited in any part of the Federation.",
      },
      {
        q: "What is the duration of the censorship process?",
        a: "With the submission of a duly completed application meeting all the Board's requirements, the censorship can be completed in no later than 14 days. You will normally be notified of the Board's decision within 3 full working days after the screening date, in the form of a classification certificate. When the application is closed, the decision will appear on the NFVCB public database.",
      },
      {
        q: "What if a version of my film has already been censored?",
        a: "Before submitting an application, please refer to previous classification records via the classification database. If you wish to distribute a revised version of a previously classified film — such as a director's cut containing extra scenes or a shortened edit — you must submit it for classification. A different schedule of fees applies for classifying a revised version.",
      },
      {
        q: "If a film has been approved for exhibition, can the exhibitor or producer add or subtract from the content?",
        a: "No. A film or video work to which any matter has been added or subtracted after approval for exhibition must be resubmitted for censorship, and its previous approval shall be deemed null and void.",
      },
    ],
  },
  {
    category: "Applications & Compliance",
    items: [
      {
        q: "Is it an offence to buy uncensored films?",
        a: "Under the NFVCB Act, all videos must bear a classification symbol issued by the Board, except for exempted categories of videos that carry an exemption number. The distribution and possession of uncertified videos are offences under the Act. Those found dealing with obscene materials face stiff penalties and can be jailed for up to two years.",
      },
      {
        q: "What do I have to do to apply for censorship?",
        a: "To apply for censorship and classification of your film, you need to supply:\n\n• A completed application form\n• An adequate synopsis of the film\n• A copy of the film\n• The censorship fee receipt with the bank teller attached\n\nYour application will not be processed until all of the required elements have been received.",
      },
      {
        q: "What must a producer, exhibitor, distributor or supplier do before releasing a film to the public?",
        a: "As from the commencement of the NFVCB Act No. 85 of 1993, no person is allowed to exhibit, distribute or supply an unexempted film or video recording without a Censorship Certificate issued by the Censors Board. All feature films and video works produced in Nigeria or imported must first be submitted to the Censors Board for registration, censorship and classification before exhibition, distribution or supply to members of the public.",
      },
      {
        q: "Can an applicant appeal against the decision of the Censors Committee?",
        a: "Yes. You can ask the Censors Board Verification Officer for a copy of the reasons for the Board's decision. If you are dissatisfied, you may appeal to the Board through the Director General using the prescribed form, along with a statement of grounds and payment of a prescribed fee.\n\nOn receipt of the appeal, the Censors Board shall within 60 days constitute a Review Committee consisting of the Board Chairman and other members who were not on the original Censors Committee. The Review Committee membership shall exceed the original Committee by three members, and its decision shall be by majority vote, subject to confirmation by the full Board.",
      },
      {
        q: "How can you prove that a film has been registered by the Censors Board?",
        a: "One can prove registration by producing: (1) the Certificate of Registration issued by the Board, and (2) a copy of the entry in the register relating to the film or video work, certified as true by the Secretary of the Board.",
      },
    ],
  },
  {
    category: "Exhibition & Advertising",
    items: [
      {
        q: "How can one know if a film has been certified before buying or watching it?",
        a: "An exhibitor must display an approved poster indicating the film's classification. Any addition or subtraction to the approved poster constitutes an offence and requires resubmission. Adverts and promotional materials must also indicate the film's classification. The Censors Board sells classification tags to be pasted on cassettes and containers sold as home videos. Members of the public can also visit www.nfvcb.gov.ng to check for details of licensed cinemas, viewing centres and classified films.",
      },
      {
        q: "What is consumer advice?",
        a: "Consumer advice refers to the advisory label issued to a film by the Board to inform consumers about the principal elements that contributed to the rating given. All films and video works classified by the Board, especially those with legally restrictive categories such as horror, are required to carry consumer advice. This helps the public — particularly parents — make informed choices for themselves and their children.",
      },
      {
        q: "Where can we get consumer advice?",
        a: "It is mandatory that all movies, including trailers and promotional materials, carry consumer advice messages prominently at all times. Consumer advice will be displayed at electronic banners or screens at cinema lobbies, ticketing counters, movie posters, TV commercials, and newspaper or magazine advertisements. The public can also check the NFVCB website and websites of film distributors and exhibitors. For indigenous language films, consumer advice will be provided in the respective language of the film.",
      },
      {
        q: "What major information should be included in film adverts and promotional materials?",
        a: "All adverts and promotional materials must state the classification given to the film by the Censors Board, either in full or using the approved symbol:\n\n• G — General exhibition\n• PG — Intended particularly for children\n• 12 — Not suitable for persons under 12\n• 12A — May contain scenes unsuitable for under-12s; parental guidance required\n• 15 — Not suitable for persons under 15\n• 18 — For mature audiences\n• RE — Restricted exhibition",
      },
      {
        q: "How is the categorisation of films enforced?",
        a: "A film in a restricted classification can only be distributed or exhibited as such. If an exhibitor or a police officer suspects on reasonable grounds that a member of the audience is underage, they may ask such persons to leave. For home video recordings, each cassette and its cover must carry the appropriate classification label. The Board works with law enforcement to ensure compliance.",
      },
    ],
  },
  {
    category: "Exemptions & Special Cases",
    items: [
      {
        q: "Are there films and video works exempted from censorship?",
        a: "Yes. The following categories are exempted under the law:\n\n• Video works for exhibition in premises not open to the public (non-commercial)\n• Documentary films or imported video documentaries produced by federal or state government\n• Materials produced by diplomatic representatives of Commonwealth or foreign countries, the UN or its organs\n• Films produced by educational, scientific or cultural bodies including broadcasting organisations\n• Instructional materials for schools or training programmes\n• Films concerned with sports\n• Video games",
      },
      {
        q: "Are there limitations to the exemption classification?",
        a: "Yes. A film or video work shall not be classified as exempted if it to any significant extent depicts explicit sexual activities or associated acts of force, mutilation or torture of humans or animals, human genital organs or urinary/excretory functions, is designed to encourage such acts, or is religious content that promotes ethnic prejudice by words or action.",
      },
      {
        q: "Would an individual or corporate body contravene the law by exhibiting an exempted film without reference to the Board?",
        a: "The NFVCB Act requires that: a notice of importation of an exempted film or video be given to the Censors Board; and an application for exemption from censorship and approval for exhibition be made to the Board. The Censors Board may verify any information in the application or arrange a viewing of the film.",
      },
      {
        q: "Is it an offence to buy VCDs/DVDs released in other countries and brought into Nigeria?",
        a: "All videos sold outside Nigeria are considered uncensored when brought into the country. The Board works closely with Customs and Immigration Services to check travellers who bring in uncensored and obscene videos at airports and borders. The Board adopts a rational approach to persons who bring in VCDs and DVDs for personal consumption, especially where those materials fall within exempted categories. All videos brought into Nigeria should be declared and submitted to the Board for classification.",
      },
      {
        q: "How does the Board help combat video piracy?",
        a: "The Board has a joint regulatory task force which includes the Copyright Commission to help check video piracy. Under the NFVCB Act, all distributors and importers of video films are expected to show evidence of copyright assignment prior to censorship classification. The same applies to the registration and licensing of video club operators.",
      },
      {
        q: "What factors does the Board use to determine that a film is Nigerian before registration?",
        a: "According to the NFVCB Act, a film or video work is regarded and registered as a Nigerian film if the producer was, throughout the time during which the work was being made, either a Nigerian citizen or a company registered under the Companies and Allied Matters Decree 1990.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-muted/40 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border bg-muted/20">
              {a.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mt-3 first:mt-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqsPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#009f3b]/10 mb-5">
            <HelpCircle className="h-7 w-7 text-[#009f3b]" aria-hidden />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need to know about film and video censorship, classification,
            licensing, and the role of the National Film and Video Censors Board.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full bg-[#009f3b]" aria-hidden />
                <h2 className="text-base font-black uppercase tracking-wide text-foreground">
                  {section.category}
                </h2>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 rounded-2xl border border-[#009f3b]/25 bg-[#009f3b]/5 px-6 py-5 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The abridged information above has been extracted from the{" "}
            <span className="font-semibold text-foreground">
              National Film and Video Censors Board Act of 1993
            </span>{" "}
            and other regulations. For further information, please visit{" "}
            <a
              href="https://www.nfvcb.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009f3b] font-medium hover:underline"
            >
              www.nfvcb.gov.ng
            </a>
            , call the HQ office, or address your enquiries to the Executive Director.
          </p>
        </div>
      </div>
    </main>
  );
}
