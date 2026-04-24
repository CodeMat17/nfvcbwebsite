import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { MapPin, Phone, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Zonal Offices & State Centres — Find NFVCB Near You",
  description:
    "Locate NFVCB zonal offices and state centres across all six geopolitical zones of Nigeria — North-West, North-East, North-Central, South-West, South-East and South-South. Contact details and addresses for all offices.",
  keywords: [
    "NFVCB zonal offices",
    "NFVCB state centres",
    "NFVCB Lagos office",
    "NFVCB Abuja office",
    "NFVCB Kano office",
    "NFVCB offices Nigeria",
    "film censors board near me",
    "NFVCB contact",
    "Nigeria film board offices",
  ],
  alternates: { canonical: "https://nfvcb.gov.ng/zones" },
  openGraph: {
    title: "Zonal Offices & State Centres — Find NFVCB Near You",
    description:
      "Locate NFVCB offices across all six geopolitical zones of Nigeria — addresses and contact details.",
    url: "https://nfvcb.gov.ng/zones",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const zones = [
  {
    name: "Head Office",
    location: "Abuja (FCT)",
    color: "border-[#009f3b]",
    badge: "bg-[#009f3b]/10 text-[#009f3b]",
    offices: [
      {
        name: "Head Office",
        coordinator: "",
        phone: "",
        address: "No. 20 Alexandria Crescent, Wuse II, Abuja",
        state: "Abuja",
      },
      {
        name: "AMAC Office",
        coordinator: "Monkom Mary",
        phone: "08033113827",
        address: "Room 215 AMAC Secretariat FCT",
        state: "Abuja",
      },
    ],
  },
  {
    name: "North Central Zonal Office",
    location: "Jos, Plateau State",
    color: "border-blue-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    offices: [
      {
        name: "NC Zonal Office",
        coordinator: "Oluwole Margarita",
        phone: "07080550605",
        address: "3 Ahmadu Bello Way, Ministry of Works Yard, Jos, Plateau State",
        state: "Jos",
      },
      {
        name: "Ilorin Centre",
        coordinator: "Yusuf Abdullahi",
        phone: "08033940278",
        address: "2nd Floor, Arts and Culture Building Complex, Geri-Alimi, Ilorin, Kwara State",
        state: "Ilorin",
      },
      {
        name: "Kogi State Centre",
        coordinator: "Jack Okoko",
        phone: "08035047972",
        address: "c/o Ministry of Information, Ganaja Road after Meme Bridge, Opp Tipper Garage, Lokoja",
        state: "Lokoja",
      },
      {
        name: "Niger State Centre",
        coordinator: "Binga Nyagarga Jankina",
        phone: "08066699930",
        address: "Old Secretariat Complex, Revenue House, Keteren Gwari, Minna",
        state: "Minna",
      },
      {
        name: "Nasarawa State Centre",
        coordinator: "Fanto Namo",
        phone: "08060296929",
        address: "Suite 38 Kaura Plaza, Opp PDP Secretariat Jos Road, Lafia, Nasarawa State",
        state: "Lafia",
      },
      {
        name: "Benue State Centre",
        coordinator: "Onum Gabriel",
        phone: "08063871169",
        address: "B Wing, Ground Floor, Federal Secretariat Complex, Makurdi, Benue State",
        state: "Makurdi",
      },
    ],
  },
  {
    name: "Northwest Zonal Office",
    location: "Kano State",
    color: "border-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    offices: [
      {
        name: "NW Zonal Office",
        coordinator: "Aliyu Sani",
        phone: "08069546374",
        address: "Floor 7th Room 733-739, Federal Government Secretariat, Murtala Muhammad Way, Katsina Road, Kano",
        state: "Kano",
      },
      {
        name: "Sokoto Centre",
        coordinator: "Maryam Danladi Bako",
        phone: "08030954841",
        address: "Block 12, Room 302 Shehu Kangiwa Secretariat (Five Star) Byepass, Sokoto",
        state: "Sokoto",
      },
      {
        name: "Kaduna Centre",
        coordinator: "Akwash Blessing",
        phone: "08036549503",
        address: "Federal Government Secretariat Complex, Kawo, Kaduna",
        state: "Kaduna",
      },
      {
        name: "Katsina Centre",
        coordinator: "Aliyu Dahiru",
        phone: "08065348448",
        address: "3rd Floor Federal Secretariat, Dandagoro, Katsina",
        state: "Katsina",
      },
      {
        name: "Jigawa Centre",
        coordinator: "Nasir Abdulmalik",
        phone: "08062065917",
        address: "No 4, Ground Floor, Old Block, New State Secretariat Complex, Dutse",
        state: "Dutse",
      },
    ],
  },
  {
    name: "Northeast Zonal Office",
    location: "Bauchi State",
    color: "border-red-500",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
    offices: [
      {
        name: "NE Zonal Office",
        coordinator: "Rabi Sangari",
        phone: "07031108867",
        address: "Federal Secretariat Complex, 3rd Floor, Room 82/83, Bauchi State",
        state: "Bauchi",
      },
      {
        name: "Jalingo Centre",
        coordinator: "Ruth Isa Simon",
        phone: "08133833129",
        address: "Taraba State Broadcasting Service Complex, Jalingo, Taraba State",
        state: "Jalingo",
      },
      {
        name: "Yola Centre",
        coordinator: "Bodinga Abraham Umar",
        phone: "08033343285",
        address: "Federal Ministry of Information beside Federal College of Education, Yola, Adamawa State",
        state: "Yola",
      },
      {
        name: "Gombe Centre",
        coordinator: "Daniel Maiton",
        phone: "08061593630",
        address: "Federal Secretariat Complex, 3rd Floor, Gombe State",
        state: "Gombe",
      },
      {
        name: "Maiduguri Centre",
        coordinator: "Shehu Umar Halima",
        phone: "08037493122",
        address: "Federal Secretariat Complex Behind University of Maiduguri Staff Clinic, Kano Road, Borno State",
        state: "Maiduguri",
      },
    ],
  },
  {
    name: "Southeast Zonal Office",
    location: "Onitsha, Anambra State",
    color: "border-green-500",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400",
    offices: [
      {
        name: "SE Zonal Office",
        coordinator: "Hubert Odeh",
        phone: "08036009530",
        address: "26, Kenan Crescent, Federal Housing Estate, 33G. R.A, Onitsha, Anambra State",
        state: "Onitsha",
      },
      {
        name: "Aba Centre",
        coordinator: "Nkeiru Onyenakazi",
        phone: "08037143817",
        address: "Rooms 36 & 37, Aba Main Town Hall, Aba South LGA, Aba, Abia State",
        state: "Aba",
      },
      {
        name: "Owerri Centre",
        coordinator: "Blessing Amadi",
        phone: "08037639790",
        address: "Federal Secretariat Complex, Port Harcourt Road, New Owerri, Imo State",
        state: "Owerri",
      },
      {
        name: "Enugu Centre",
        coordinator: "Ozoana William",
        phone: "08033506470",
        address: "Rooms 23/24 Federal Secretariat Complex, Independence Layout, Enugu State",
        state: "Enugu",
      },
      {
        name: "Abakaliki Centre",
        coordinator: "Ejike Nwodo",
        phone: "08056304024",
        address: "Old Office Of The Head Of Service, New Secretariat Complex, Nnorom Street, P.M.B 100, Abakaliki, Ebonyi State",
        state: "Abakaliki",
      },
    ],
  },
  {
    name: "South-South Zonal Office",
    location: "Port Harcourt, Rivers State",
    color: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    offices: [
      {
        name: "SS Zonal Office",
        coordinator: "Francis Oseloka",
        phone: "08030832045",
        address: "Federal Secretariat Complex, Aba/PH Road, Opposite Presidential Hotel, 2nd Floor, Right Wing, RM 209, Port Harcourt, Rivers State",
        state: "Port Harcourt",
      },
      {
        name: "Warri Centre",
        coordinator: "Anwadike Paul",
        phone: "08055284788",
        address: "Uvwie Town Hall, No. 200 P.T.I road, Opp PTI School, Effurun, Warri, Delta State",
        state: "Warri",
      },
      {
        name: "Benin Centre",
        coordinator: "Eniye Asomba",
        phone: "08034009119",
        address: "First Floor, Federal Secretariat Complex, Aduwawa Road, Benin City, Edo State",
        state: "Benin City",
      },
      {
        name: "Uyo Centre",
        coordinator: "Manuell Domingo Umanah",
        phone: "",
        address: "Room 210, Federal Secretariat, Abak Road, Uyo, Akwa Ibom State",
        state: "Uyo",
      },
      {
        name: "Calabar Centre",
        coordinator: "Ezenne Ikechukwu Edwin",
        phone: "08055171003",
        address: "Rooms B18-20, Federal Secretariat Complex, Murtala Mohammed Highway, Calabar",
        state: "Calabar",
      },
    ],
  },
  {
    name: "Southwest Zonal Office",
    location: "Lagos State",
    color: "border-purple-500",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    offices: [
      {
        name: "SW Zonal Office",
        coordinator: "Uju Emagha",
        phone: "08050580804",
        address: "Beside Federal Secretariat by Alagbon Close, Ikoyi, Lagos",
        state: "Lagos",
      },
      {
        name: "Ikorodu Centre",
        coordinator: "Taiwo Ogunsami",
        phone: "08137834749",
        address: "Local Government Secretariat Ikorodu, 50 Beach Road, Opp General Hospital, Ikorodu",
        state: "Ikorodu",
      },
      {
        name: "Oshogbo Centre",
        coordinator: "Olusegun Francis",
        phone: "08066383217",
        address: "I/c Ministry of Commerce and Industries, Osun State Secretariat, Abeere, Osogbo, Osun State",
        state: "Oshogbo",
      },
      {
        name: "Ibadan Central Office",
        coordinator: "Osaretin Niyi",
        phone: "08029619756",
        address: "Federal Secretariat Complex, Ikolaba, G.R.A, Agodi, Ibadan",
        state: "Ibadan",
      },
      {
        name: "Ibadan South Office",
        coordinator: "Umoelin Kelvin",
        phone: "0803370477",
        address: "Federal Secretariat Complex, Ikolaba, G.R.A, Agodi, Ibadan",
        state: "Ibadan",
      },
      {
        name: "Akure Centre",
        coordinator: "Abdulwahab Shaibu",
        phone: "08064888418",
        address: "Federal Secretariat, Igbatoro Road, Alagbaka GRA, Akure, Ondo State",
        state: "Akure",
      },
      {
        name: "Abeokuta Centre",
        coordinator: "Patrick-Ukpe Adenike",
        phone: "08037134405",
        address: "Federal Secretariat Complex, Oke Mosan, Abeokuta",
        state: "Abeokuta",
      },
    ],
  },
];

export default function ZonesPage() {
  return (
    <>
      <section className="relative py-24 bg-[#001506] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
          <Image src="/logo.webp" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#009f3b]/20 text-[#009f3b] border-[#009f3b]/30">
              Nationwide Presence
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Zones &amp; Centres
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              NFVCB maintains a nationwide presence with 6 zonal offices and over 30 state centres
              across Nigeria&apos;s six geopolitical zones, bringing regulation to every community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Zone stats */}
        <AnimatedSection>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
            {["North West", "North East", "North Central", "South West", "South East", "South South"].map((zone) => (
              <div key={zone} className="text-center p-3 rounded-xl bg-muted/40 border border-border">
                <div className="text-[#009f3b] text-xl font-bold mb-1">●</div>
                <p className="text-xs text-muted-foreground leading-snug">{zone}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {zones.map((zone) => (
          <AnimatedSection key={zone.name}>
            <div className={`border-l-4 ${zone.color} pl-4 mb-4`}>
              <Badge className={`${zone.badge} border-0 text-xs mb-1`}>Zonal Office</Badge>
              <h2 className="text-xl font-bold text-foreground">{zone.name}</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {zone.location}
              </p>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {zone.offices.map(({ name, coordinator, phone, address, state }) => (
                <StaggerItem key={name}>
                  <Card className="h-full hover:shadow-md transition-all hover:border-primary/30 hover:-translate-y-0.5">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary shrink-0" />
                        <CardTitle className="text-sm">{name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs text-muted-foreground">
                      {coordinator && (
                        <p className="font-medium text-foreground">{coordinator}</p>
                      )}
                      {phone && (
                        <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          {phone}
                        </a>
                      )}
                      <div className="flex items-start gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                        <span className="leading-snug">{address}</span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
