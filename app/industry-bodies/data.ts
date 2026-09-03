export type ContactPerson = {
  role: string;
  name: string;
};

export type IndustryBody = {
  abbr: string;
  name: string;
  contactPersons: ContactPerson[];
  addresses: string[];
  emails: string[];
  website?: string;
  additionalPhones?: string[];
};

/** Registered professional associations and guilds recognised by the NFVCB. */
export const industryBodies: IndustryBody[] = [
  {
    abbr: "AGN",
    name: "Actors Guild of Nigeria",
    contactPersons: [
      { role: "National President", name: "Mr. Abubakar Yakubu" },
      { role: "National Secretary", name: "Ifeoma Okeke-Ozzoude" },
    ],
    addresses: [
      "Suite 29, Block 2, N.C.A.C Artistes Village, National Theatre, Iganmu, Lagos.",
    ],
    emails: ["presidentactorsguild@gmail.com", "agnsecretary@gmail.com"],
  },
  {
    abbr: "AMP",
    name: "Association of Movie Producers",
    contactPersons: [
      { role: "National President", name: "Amb. Dr Queen Blessing Ebigieson" },
      { role: "National Secretary", name: "Mr. Anthony Chukwuma" },
    ],
    addresses: [
      "38, Abosede Crescent off Immam Daudu Street off Eric Moore Road, Surulere, Lagos.",
    ],
    emails: ["association.moviesproducers@gmail.com"],
  },
  {
    abbr: "ANMD",
    name: "Association of Nigeria Movie Directors",
    contactPersons: [
      { role: "National President", name: "Kenneth Ibeanusi" },
      { role: "National Secretary", name: "Ezechukwu Dennis" },
    ],
    addresses: ["No. 3 Adebola Street Off CAC Close Idimu Road, Egbeda, Lagos."],
    emails: ["asstnofnigmoviedirectors@gmail.com"],
  },
  {
    abbr: "AMPMAN",
    name: "Active Movie Producers and Marketers Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Chief James Oguejiofor" },
      { role: "National Secretary", name: "Engr. David Akuma" },
    ],
    addresses: ["AMPMAN Office 12B, No. 55 Iweka Road, Onitsha."],
    emails: ["ampmanpresidency@gmail.com"],
  },
  {
    abbr: "AMPRAC",
    name: "Association of Movie Practitioners",
    contactPersons: [
      { role: "National President", name: "Ifeanyi Azodo" },
      { role: "National Secretary", name: "Elder Osondu Odom" },
    ],
    addresses: ["No. 5 Odelola Avenue, Pacific Estate, Ewedogbun, Akesan, Lagos."],
    emails: ["moviestarsacademy@gmail.com"],
  },
  {
    abbr: "AMCOD",
    name: "Association of Movie Content Owners & Producers/Distributors of Nigeria",
    contactPersons: [
      { role: "National President", name: "Alhaji Toyin Uthman" },
      { role: "National Secretary", name: "Alhaji Abdullahi Abdulrasaq" },
    ],
    addresses: ["Army Shopping Arena, Bolade Oshodi, Lagos."],
    emails: ["moviecontentowners@gmail.com"],
  },
  {
    abbr: "ANCOP",
    name: "Association of Nollywood Core Producers",
    contactPersons: [
      { role: "National President", name: "Theophilus Akatugba" },
      { role: "National Secretary", name: "Cardoso Olanrewaju Sulaiman" },
    ],
    addresses: ["1b Adekunle Fajuyi Way, GRA, Ikeja."],
    emails: ["info@ancop.com.ng"],
    website: "www.ancop.com.ng",
    additionalPhones: ["+2348160878665", "+2348032938132"],
  },
  {
    abbr: "ANTP",
    name: "Association of Nigeria Theatre Arts Practitioners",
    contactPersons: [
      { role: "National President", name: "Mr Rasak Baroka Oyadiran" },
      {
        role: "National Secretary General",
        name: "Princess Agunlejika Bukola Adeteju",
      },
    ],
    addresses: ["2, NTA Road, Agodi Gate, Ibadan, Oyo State."],
    emails: ["antpnigeria19@gmail.com"],
  },
  {
    abbr: "CDGN",
    name: "Creative Designers Guilds of Nigeria",
    contactPersons: [
      { role: "National President", name: "Mrs Joy Osawaru Akinyemi" },
      { role: "National Secretary", name: "Pastor Presley Eghosa Orabviere" },
    ],
    addresses: ["18 Eric Moore Off Bode Thomas, Surulere, Lagos."],
    emails: ["hello@cdgn.com.ng"],
  },
  {
    abbr: "CEAN",
    name: "Cinema Exhibitors Association of Nigeria",
    contactPersons: [
      { role: "Head of Operation", name: "Mr. Benjamin Anobi" },
      { role: "National Secretary", name: "Moses Babatope" },
    ],
    addresses: ["Plot 1378D Joseph Namahn Close, Off Karmu Kotun, Victoria Island, Lagos."],
    emails: ["ceaninformation@gmail.com"],
  },
  {
    abbr: "CSN",
    name: "Cinematographers Society of Nigeria",
    contactPersons: [
      { role: "National President", name: "Aduloju John" },
      { role: "National Secretary", name: "Emmanuel Chidiebere Nwosu" },
    ],
    addresses: ["56 Oduduwa Way, Ikeja, GRA, Lagos."],
    emails: ["adulojujohn@gmail.com"],
  },
  {
    abbr: "DGN",
    name: "Directors Guilds of Nigeria",
    contactPersons: [
      { role: "National President", name: "Mr. Uche Agbo" },
      { role: "National Secretary", name: "Perekeme Odon" },
    ],
    addresses: ["15 Simisola Street, Off Olufemi Street, Surulere, Lagos."],
    emails: ["victorokhai@gmail.com", "agbouchennaofficial@gmail.com"],
  },
  {
    abbr: "FCMA",
    name: "Film Creative Minds Association",
    contactPersons: [
      { role: "National President", name: "Muoma Obinna" },
      { role: "National Secretary", name: "Raymond Anyaeji" },
    ],
    addresses: ["1338 Leo Stan Ekeh Way, Garki 1, Abuja."],
    emails: ["obinna@filmcreativeminds.org"],
    website: "filmcreativeminds.org",
  },
  {
    abbr: "FDAN",
    name: "Film Distributors Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Joy Odiete" },
      { role: "National Secretary", name: "Mary Ephraim-Egbas" },
    ],
    addresses: [
      "2nd Floor, Lagos City Mall, Onikan, Lagos.",
      "30 Shakiru Anjorin, Lekki, Phase 1, Lagos.",
    ],
    emails: ["joy@bluepicturesng.com", "m.ephraim@okhma.com"],
  },
  {
    abbr: "FVPMAN",
    name: "Film Video Producers & Marketers Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Hon. Emeka S. Aduah" },
      { role: "National Secretary", name: "Ifeachor Patrick" },
    ],
    addresses: ["No. 1 Maruwa Road, Finaja Satellite Town, Lagos."],
    emails: ["fvpman2010@yahoo.com"],
  },
  {
    abbr: "NACO",
    name: "Nollywood Association of Camera Equipment Owners",
    contactPersons: [
      { role: "National President", name: "David Sorochukwu Akumah" },
      { role: "National Secretary", name: "Uchechukwu Sunset Iheanacho" },
    ],
    addresses: ["No 13 Onwuegbuzie Street, Asaba, Delta State."],
    emails: ["sodafacestv@gmail.com", "sunsetiheanacho@gmail.com"],
  },
  {
    abbr: "MOPPAN",
    name: "Motion Pictures Practitioners Association of Nigeria",
    contactPersons: [
      { role: "A.G. National President", name: "Alh. Shehu Hassan Kano" },
      { role: "National Secretary", name: "Mohammed Ibrahim Gumel" },
    ],
    addresses: ["Plot C-2 Muhammed Buhari Way, Tudun Yola, Kano.", "Plot 7 200 Road, Kano."],
    emails: ["asarari@gmail.com", "info@moppannigeria.com"],
  },
  {
    abbr: "NANTAP",
    name: "National Association of Nigeria Theatre Arts Practitioners",
    contactPersons: [
      { role: "National President", name: "Makinde Adeniran, FTA" },
      { role: "National Secretary", name: "Dr. Abiodun Olayiwola, FTA" },
    ],
    addresses: ["Room 214, National Theatre, Iganmu, Lagos."],
    emails: ["nantapnigsecretiat@gmail.com"],
  },
  {
    abbr: "SWGN",
    name: "Screenwriters Guild of Nigeria",
    contactPersons: [
      { role: "National President", name: "Mrs. Temitope Akinbode" },
      { role: "National Secretary", name: "Mrs. Joy Elumelu" },
    ],
    addresses: ["17 Modupe Johnson Street, Surulere, Lagos."],
    emails: ["officialswgn@gmail.com"],
  },
  {
    abbr: "TGMAN",
    name: "The Golden Movies Ambassadors of Nigeria",
    contactPersons: [
      { role: "National President", name: "Amb. Saidi Balogun" },
      { role: "Secretary", name: "Amb. Prince Adekunle Adeyemi" },
    ],
    addresses: [
      "Oluwalogbon Glass House, Plot A, Obafemi Awolowo Way, Agidingbi, Ikeja, Lagos.",
    ],
    emails: ["tgmanational@gmail.com"],
  },
  {
    abbr: "TAMPAN",
    name: "Theatre Arts and Motion Picture Practitioners Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Amusan Bolaji Latin" },
      { role: "National Secretary", name: "Pastor Sunday Alabi Osibata" },
    ],
    addresses: ["7 Adeyi Avenue, Bodija, Ibadan."],
    emails: ["tampan4all@gmail.com"],
  },
  {
    abbr: "ITPAN",
    name: "Independent Television Producers Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Adeyinka Oduniyi" },
      { role: "National Secretary", name: "Lanre Tyson" },
    ],
    addresses: ["ITPAN Secretariat, 148 Lola Hollowa Omale, Phase Agidingbi, Ikeja, Lagos."],
    emails: [
      "yinka@itpan.com.ng",
      "adeyinkaoduniyi@gmail.com",
      "lanre@itpan.com.ng",
      "lanretyson@gmail.com",
    ],
    additionalPhones: ["08088805000"],
  },
  {
    abbr: "GEMPC",
    name: "Guild of Elite Motion Picture Creators",
    contactPersons: [
      { role: "National President", name: "Daisy Madu-Chikwendu" },
      { role: "National Secretary", name: "Nnabuike Okoro" },
    ],
    addresses: ["6 Rosaya Street, Bogije Bus Stop, Lekki/Epe Expressway."],
    emails: ["gempcinternational@gmail.com"],
    additionalPhones: ["+2348177419292"],
  },
  {
    abbr: "NCMF",
    name: "Nollywood Creative Minds Forum",
    contactPersons: [
      { role: "National President", name: "Ijeoma Richards" },
      { role: "Secretary", name: "Stella-maris Nnaji" },
    ],
    addresses: ["14 Anite Crescent, Okota, Lagos."],
    emails: [
      "nollywoodcreativemindsforum18@gmail.com",
      "ijemrichards@gmail.com",
      "nstellamaris87@gmail.com",
    ],
  },
  {
    abbr: "FEGON",
    name: "Film Educators Guild of Nigeria",
    contactPersons: [
      { role: "National President", name: "Prof. Osakue Omoera" },
      { role: "National Secretary", name: "Dr. Chiemela Ogbonna" },
    ],
    addresses: [
      "Department of Theatre and Film Studies, Federal University, Otuoke, Bayelsa State.",
    ],
    emails: ["fegon@gmail.com", "fegonnigeria@gmail.com"],
  },
  {
    abbr: "NAFMAN",
    name: "New Age Filmmakers Association of Nigeria",
    contactPersons: [
      { role: "National President", name: "Prince Dickson Chukwu" },
      { role: "National Secretary", name: "Isaac Moses" },
    ],
    addresses: ["P&J Hotel Road, Beside Ministry of Information, Asaba, Delta State."],
    emails: [],
  },
];
