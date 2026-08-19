"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  CheckCircle,
  Globe,
  Building2,
  MapPin,
  Users,
  Monitor,
  Truck,
  Clapperboard,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LicenceEntry = {
  icon: LucideIcon;
  title: string;
  processingFee: string;
  licenceFee: string;
  renewalBefore?: string;
  renewalAfter?: string;
  shareCapital?: string;
  seating?: string;
  desc: string;
  requirements: string[];
};

/* ─── EXHIBITOR LICENCES ─────────────────────────────────────────────────── */
const exhibitorLicences: LicenceEntry[] = [
  {
    icon: Building2,
    title: "National Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦5,000,000",
    renewalBefore: "₦1,000,000",
    renewalAfter: "₦2,500,000",
    shareCapital: "₦5,000,000",
    desc: "For companies seeking to conduct film exhibition activities across multiple States within Nigeria.",
    requirements: [
      "Duly completed and signed National Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (film/movie exhibition as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer (or formal relationship with a law firm) — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed areas of operation, operational structure",
      "Identifiable and verifiable physical office within Nigeria",
      "List of number and proposed locations of intended exhibition sites per State",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols and ratings prominently",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦5,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: MapPin,
    title: "Regional Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦3,500,000",
    renewalBefore: "₦700,000",
    renewalAfter: "₦1,750,000",
    shareCapital: "₦3,000,000",
    desc: "For companies seeking to conduct film exhibition within a single State or defined region of Nigeria.",
    requirements: [
      "Duly completed and signed Regional Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦3,000,000",
      "CTC of Memorandum & Articles of Association (film/movie exhibition as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed areas within licensed region, operational structure",
      "Identifiable physical office within the State or region of intended operation",
      "Number and addresses of intended exhibition locations within the State or region",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols prominently",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦3,500,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Users,
    title: "Suburban / State Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦2,500,000",
    renewalBefore: "₦500,000",
    renewalAfter: "₦1,250,000",
    desc: "For companies seeking to exhibit films in suburban, semi-urban, and peri-urban areas, promoting regulated film access in developing communities.",
    requirements: [
      "Duly completed and signed Suburban Exhibitor License Application Form",
      "Certificate of Incorporation",
      "CTC of Memorandum & Articles of Association (film/movie exhibition as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed area(s) of operation",
      "Identifiable physical office within the suburban area of intended operation",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦2,500,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Users,
    title: "Community / LGA Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦1,000,000",
    renewalBefore: "₦200,000",
    renewalAfter: "₦500,000",
    shareCapital: "₦1,000,000",
    desc: "For duly registered companies seeking to conduct film exhibition within a specific community or Local Government Area.",
    requirements: [
      "Duly completed and signed Community Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦1,000,000",
      "CTC of Memorandum & Articles of Association (film/movie exhibition or cinema operation as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed area(s) of operation",
      "Identifiable physical office within the LGA of intended operation",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦1,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
];

/* ─── EXHIBITION PREMISES LICENCES ──────────────────────────────────────── */
const premisesLicences: LicenceEntry[] = [
  {
    icon: Users,
    title: "Community Exhibition Premises",
    processingFee: "₦10,000",
    licenceFee: "₦150,000",
    seating: "Up to 100 seats",
    desc: "For licensed exhibitors establishing and operating a Community Cinema within a rural community under NFVCB oversight.",
    requirements: [
      "Duly completed and signed Community Exhibition Premises License Application Form, including evidence of valid Licensed Exhibitor status issued by the NFVCB (prerequisite)",
      "Premises must be located within a rural community and operate only within the approved Local Government Area (LGA)",
      "Premises must be located at a minimum distance of 3–4 kilometers from any major or traditional cinema",
      "Programming undertaking: primarily premiere and promote Nigerian and local film content, educational and community-based events",
      "Exhibit only films duly classified by the NFVCB; prominently display NFVCB classification symbols and ratings on promotional materials and on-screen prior to exhibition",
      "Observe a minimum of four (4) weeks' theatrical release in traditional cinemas before exhibition in a Community Cinema",
      "Comply with all NFVCB content regulations, advisories, and directives",
      "Seating capacity must not exceed 100 seats",
      "Projection system: minimum HD 1080p; acceptable aspect ratios 1.85:1 or 2.39:1; LED systems permitted at minimum quality; DCI/SMPTE standards with encryption key capability for anti-piracy where DCPs are used",
      "Audio system: minimum basic stereo or surround sound suitable for the approved seating capacity",
      "Evidence of integration with ComScore or any NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate certifying the premises is fit for cinema operation",
      "Compliance with all health, safety, emergency access, and building control standards",
      "Evidence of RevOP payment (₦150,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Building2,
    title: "Major Hall",
    processingFee: "₦10,000",
    licenceFee: "₦250,000",
    seating: "201 seats and above",
    desc: "Located in cosmopolitan areas with a high level of public infrastructure and accessibility.",
    requirements: [
      "Duly completed and signed Exhibition Premises License Application Form",
      "Premises in a cosmopolitan area with high public infrastructure and accessibility",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols and ratings on all promotional materials and on-screen prior to exhibition",
      "Projection system: minimum HD 1080p; acceptable aspect ratios 1.85:1 or 2.39:1; LED systems permitted at minimum quality; DCI/SMPTE standards with encryption key for anti-piracy where DCPs are used",
      "Audio system: minimum basic stereo or surround sound, professionally installed and calibrated",
      "Evidence of integration with ComScore or NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate certifying premises is fit for cinema operation",
      "Compliance with health, safety, emergency access, and building control standards",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Evidence of RevOP payment (₦250,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Building2,
    title: "Medium Hall",
    processingFee: "₦10,000",
    licenceFee: "₦200,000",
    seating: "101 – 200 seats",
    desc: "Located in urban areas with a medium level of public infrastructure.",
    requirements: [
      "Duly completed and signed Exhibition Premises License Application Form",
      "Premises in an urban area with a medium level of public infrastructure",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols and ratings prominently",
      "Projection system: minimum HD 1080p; acceptable aspect ratios 1.85:1 or 2.39:1; DCI/SMPTE standards with encryption key for DCPs",
      "Audio system: minimum basic stereo or surround sound, professionally installed and calibrated",
      "Evidence of integration with ComScore or NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate",
      "Compliance with health, safety, emergency access, and building control standards",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Evidence of RevOP payment (₦200,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: MapPin,
    title: "Small Hall",
    processingFee: "₦10,000",
    licenceFee: "₦150,000",
    seating: "1 – 100 seats",
    desc: "Located in suburban areas with a relatively lower level of public infrastructure.",
    requirements: [
      "Duly completed and signed Exhibition Premises License Application Form",
      "Premises in a suburban area",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols and ratings prominently",
      "Projection system: minimum HD 1080p; acceptable aspect ratios 1.85:1 or 2.39:1",
      "Audio system: minimum basic stereo or surround sound",
      "Evidence of integration with ComScore or NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate",
      "Compliance with health, safety, emergency access, and building control standards",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Evidence of RevOP payment (₦150,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },

  {
    icon: Truck,
    title: "Drive-In Cinema",
    processingFee: "₦10,000",
    licenceFee: "₦350,000",
    seating: "Subject to NFVCB approval",
    desc: "Located in designated open spaces including rural, sub-urban, or semi-urban communities, suitable for vehicular-based exhibition.",
    requirements: [
      "Duly completed and signed Exhibition Premises License Application Form",
      "Premises in a designated open space suitable for vehicular exhibition",
      "Vehicular capacity as approved by the NFVCB",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols prominently",
      "Projection and audio systems meeting minimum NFVCB standards for outdoor exhibition",
      "Evidence of integration with ComScore or NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate",
      "Compliance with health, safety, and emergency access standards",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Evidence of RevOP payment (₦350,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Truck,
    title: "Mobile Cinema (Premises)",
    processingFee: "₦10,000",
    licenceFee: "₦350,000",
    seating: "Subject to NFVCB approval",
    desc: "A movable or temporary exhibition structure designed for flexible operation across approved locations.",
    requirements: [
      "Duly completed and signed Exhibition Premises License Application Form",
      "Details of the movable or temporary exhibition structure",
      "All approved locations listed and subject to NFVCB inspection",
      "Seating capacity subject to NFVCB approval",
      "Undertaking to exhibit only NFVCB-classified films and display classification symbols prominently",
      "Projection and audio systems meeting minimum NFVCB standards",
      "Evidence of integration with ComScore or NFVCB-approved box office data reporting platform",
      "Valid Federal or State Fire Service Certificate for each operating location",
      "Compliance with health, safety, and emergency access standards at each premises",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Evidence of RevOP payment (₦350,000 licence fee + ₦10,000 processing fee) and NFVCB official receipt",
    ],
  },
];

/* ─── MOBILE EXHIBITION LICENCES ─────────────────────────────────────────── */
const mobileLicences: LicenceEntry[] = [
  {
    icon: Truck,
    title: "Mobile Exhibition (Per Hall)",
    processingFee: "₦10,000 per hall",
    licenceFee: "₦350,000 per hall",
    desc: "For licensed exhibitors conducting mobile film exhibition at approved venues. Licensed per hall or premises on a quarterly basis.",
    requirements: [
      "Duly completed and signed Mobile Exhibition Application Form",
      "Valid exhibitor status under the NFVCB regulatory framework (prerequisite)",
      "Comprehensive list of films intended for exhibition (submitted quarterly)",
      "Approval and classification details of listed films",
      "Exhibition dates and times (submitted quarterly)",
      "Detailed list of all locations and premises across the country",
      "Each premises subject to inspection and approval by the NFVCB prior to use",
      "Premises must not be a static facility established solely for cinema purposes",
      "All films exhibited must be duly classified by the NFVCB; classification symbols displayed on all promotional materials and on-screen",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "Seating capacity: not to exceed 300 persons per hall or premises",
      "Valid Federal or State Fire Service Certificate for each premises",
      "Evidence of RevOP payment (₦350,000 per hall + ₦10,000 processing per hall) and NFVCB official receipt",
    ],
  },
  {
    icon: MapPin,
    title: "Regional Mobile Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦5,000,000",
    shareCapital: "₦3,000,000",
    desc: "For incorporated companies conducting mobile film exhibition within a single State or defined region of Nigeria.",
    requirements: [
      "Duly completed and signed Regional Mobile Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦3,000,000",
      "CTC of Memorandum & Articles of Association (film exhibition or audiovisual activities as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed area(s) within licensed region, operational structure for mobile exhibition",
      "Identifiable physical office within the State or region of intended operation",
      "Number of intended exhibition locations within the licensed State(s)",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "All films duly classified by the NFVCB; classification symbols prominently displayed",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦5,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Building2,
    title: "National Mobile Exhibitor",
    processingFee: "₦50,000",
    licenceFee: "₦10,000,000",
    shareCapital: "₦5,000,000",
    desc: "For incorporated companies conducting mobile film exhibition across multiple States within Nigeria.",
    requirements: [
      "Duly completed and signed National Mobile Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (film exhibition or audiovisual activities as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed areas across the Federation, national mobile exhibition operational structure",
      "Identifiable physical office in any State within the region of intended operation",
      "Number of intended exhibition locations per State of operation",
      "Evidence of affiliation with a recognized and registered cinema exhibition body in Nigeria",
      "All films duly classified by the NFVCB; classification symbols prominently displayed",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦10,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
];

/* ─── ONLINE EXHIBITION LICENCES ─────────────────────────────────────────── */
const onlineLicences: LicenceEntry[] = [
  {
    icon: Globe,
    title: "Multi-National Operator",
    processingFee: "₦50,000",
    licenceFee: "₦200,000,000",
    shareCapital: "₦5,000,000",
    desc: "Large international streaming platforms operating across multiple jurisdictions and engaging Nigerian audiences online.",
    requirements: [
      "Duly completed and signed Online Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (online film exhibition, digital streaming, or OTT services as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer, Technical Officer (responsible for digital platform, cybersecurity, content control) — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, platform description, operational model (subscription/pay-per-view/ad-supported/hybrid), target audience and geographic coverage, content acquisition and distribution framework",
      "Platform details: domain name(s), mobile application(s), hosting infrastructure",
      "Evidence of cybersecurity safeguards and Digital Rights Management (DRM) to prevent piracy",
      "Mechanisms for age-verification and parental control features",
      "Clear content moderation and takedown procedures",
      "Identifiable and verifiable physical office within Nigeria",
      "Evidence of affiliation with a recognized audiovisual, broadcasting, or digital content body (where applicable)",
      "Stream only NFVCB-classified content; display classification symbols and ratings prominently; implement digital filters for age-inappropriate content",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦200,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Monitor,
    title: "Medium Operator / Aggregator",
    processingFee: "₦50,000",
    licenceFee: "₦25,000,000",
    renewalBefore: "₦5,000,000",
    renewalAfter: "₦7,500,000",
    shareCapital: "₦5,000,000",
    desc: "Aggregators and smaller value-added service providers distributing digital film content online in Nigeria.",
    requirements: [
      "Duly completed and signed Online Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (online exhibition, digital streaming, or OTT services as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer, Technical Officer — articulated in Company Profile",
      "Company Profile: overview, platform description, operational model, target audience, content acquisition framework",
      "Platform details: domain, apps, hosting, DRM, cybersecurity safeguards",
      "Age-verification and parental control features",
      "Content moderation and takedown procedures",
      "Identifiable and verifiable physical office within Nigeria",
      "Stream only NFVCB-classified content; display classification symbols; implement age filters",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦25,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Radio,
    title: "Small Platform / Start-up",
    processingFee: "₦50,000",
    licenceFee: "₦5,000,000",
    renewalBefore: "₦1,000,000",
    renewalAfter: "₦1,500,000",
    shareCapital: "₦5,000,000",
    desc: "Small online platforms and start-ups seeking to legally exhibit or stream film content to Nigerian audiences.",
    requirements: [
      "Duly completed and signed Online Exhibitor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (online exhibition or digital streaming as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer, Technical Officer — articulated in Company Profile",
      "Company Profile: overview, platform description, operational model, target audience",
      "Platform details: domain, apps or streaming service, DRM safeguards",
      "Age-verification and content moderation mechanisms",
      "Identifiable and verifiable physical office within Nigeria",
      "Stream only NFVCB-classified content; display classification symbols and ratings",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦5,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Clapperboard,
    title: "YouTube Operator",
    processingFee: "₦50,000",
    licenceFee: "₦1,000,000",
    desc: "Operators distributing film and video content primarily via YouTube to Nigerian audiences.",
    requirements: [
      "Duly completed and signed Online Exhibitor License Application Form",
      "Certificate of Incorporation or evidence of registered business entity",
      "CTC of Memorandum & Articles of Association or business documents (digital content distribution as an objective)",
      "Particulars of Directors or proprietors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, YouTube channel details, content categories, target audience",
      "Evidence of active, verified YouTube channel(s) used for film/video distribution",
      "Stream only NFVCB-classified content; display classification symbols in video descriptions and on-screen",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦1,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
];

/* ─── DISTRIBUTOR LICENCES ───────────────────────────────────────────────── */
const distributorLicences: LicenceEntry[] = [
  {
    icon: Building2,
    title: "National Distributor",
    processingFee: "₦50,000",
    licenceFee: "₦5,000,000",
    renewalBefore: "₦1,000,000",
    renewalAfter: "₦2,500,000",
    shareCapital: "₦5,000,000",
    desc: "Licensed to distribute and market films and video works across the entire country through physical and digital channels.",
    requirements: [
      "Duly completed and signed National Distributor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦5,000,000",
      "CTC of Memorandum & Articles of Association (film/movie distribution as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, distribution plan, proposed areas of operation",
      "Identifiable and verifiable physical office within Nigeria",
      "Proposed distribution locations across multiple States",
      "Evidence of affiliation with a recognized body for film distribution in Nigeria",
      "Undertaking to distribute only NFVCB-classified films",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦5,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: MapPin,
    title: "Regional Distributor",
    processingFee: "₦50,000",
    licenceFee: "₦3,500,000",
    renewalBefore: "₦700,000",
    renewalAfter: "₦1,750,000",
    shareCapital: "₦3,000,000",
    desc: "Licensed to distribute and market films and video works within a single State or defined geo-political zone.",
    requirements: [
      "Duly completed and signed Regional Distributor License Application Form",
      "Certificate of Incorporation — minimum authorised share capital of ₦3,000,000",
      "CTC of Memorandum & Articles of Association (film/movie distribution as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, distribution plan, area of operation",
      "Identifiable physical office in the State or zone of intended operation",
      "Proposed distribution locations within the region",
      "Evidence of affiliation with a recognized body for film distribution in Nigeria",
      "Undertaking to distribute only NFVCB-classified films",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦3,500,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Users,
    title: "Suburban / State Distributor",
    processingFee: "₦50,000",
    licenceFee: "₦2,500,000",
    renewalBefore: "₦500,000",
    renewalAfter: "₦1,250,000",
    desc: "Licensed to distribute and market films and video works in suburban and state-level markets.",
    requirements: [
      "Duly completed and signed Suburban/State Distributor License Application Form",
      "Certificate of Incorporation",
      "CTC of Memorandum & Articles of Association (film/movie distribution as an objective)",
      "CTC of Particulars of Directors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, directors' profiles, mandatory officers' profiles, proposed area(s) of distribution",
      "Identifiable physical office in the suburban area of intended operation",
      "Undertaking to distribute only NFVCB-classified films",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦2,500,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Users,
    title: "Community / LGA Distributor",
    processingFee: "₦50,000",
    licenceFee: "₦1,000,000",
    renewalBefore: "₦200,000",
    renewalAfter: "₦500,000",
    desc: "Licensed to distribute and market films and video works within a specific community or Local Government Area.",
    requirements: [
      "Duly completed and signed Community/LGA Distributor License Application Form",
      "Certificate of Incorporation, registration of business name, or any other substitute as prescribed by the Board",
      "CTC of Memorandum & Articles of Association or relevant business documents",
      "Particulars of Directors or proprietors",
      "Company Profile including description of intended distribution operations within the LGA",
      "Identifiable office within the LGA of intended operation",
      "Undertaking to distribute only NFVCB-classified films",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦1,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
  {
    icon: Clapperboard,
    title: "Online Distributor (YouTube)",
    processingFee: "₦50,000",
    licenceFee: "₦1,000,000",
    renewalBefore: "₦200,000",
    renewalAfter: "₦500,000",
    desc: "Licensed to distribute and market films and video works via YouTube and related online platforms.",
    requirements: [
      "Duly completed and signed Online Distributor License Application Form",
      "Certificate of Incorporation or registered business documents",
      "CTC of Memorandum & Articles of Association (online/digital distribution as an objective)",
      "Particulars of Directors or proprietors",
      "Mandatory Officers: CEO, Accountant, Legal Officer — articulated in Company Profile",
      "Company Profile: overview, YouTube channel details, content categories, distribution plan",
      "Evidence of active, verified YouTube channel(s) used for film distribution",
      "A functional website or channel is required",
      "Undertaking to distribute only NFVCB-classified films; classification symbols displayed in video descriptions and on-screen",
      "Valid Tax Identification Number (TIN) from FIRS",
      "Evidence of RevOP payment (₦1,000,000 licence fee + ₦50,000 processing fee) and NFVCB official receipt",
    ],
  },
];

/* ─── SECTIONS CONFIG ────────────────────────────────────────────────────── */
const SECTIONS = [
  { id: "distributors", label: "Distributors Licence",          licences: distributorLicences },
  { id: "exhibitors",   label: "Exhibitors Licence",            licences: exhibitorLicences },
  { id: "premises",     label: "Exhibitors Premises Licence",   licences: premisesLicences },
  { id: "mobile",       label: "Mobile Exhibition Licence",     licences: mobileLicences },
  { id: "online",       label: "Online Exhibition Licence",     licences: onlineLicences },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
export function LicenceCards() {
  const [selected, setSelected] = useState<LicenceEntry | null>(null);

  return (
    <>
      <div className="space-y-(--space-section)">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <div className="mb-(--space-block) border-b border-border pb-4">
              <h3 id={`${section.id}-heading`} className="text-h3 font-black text-foreground">
                {section.label}
              </h3>
              <p className="mt-1 text-caption text-muted-foreground">
                {section.licences.length} licence
                {section.licences.length !== 1 ? "s" : ""} in this category
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.licences.map((licence) => {
                const {
                  title, processingFee, licenceFee, seating, shareCapital,
                  icon: Icon, desc,
                } = licence;

                return (
                  <Card
                    key={title}
                    className="group relative flex flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-3"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                      aria-hidden
                    />

                    <div className="p-5 pb-4">
                      <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" aria-hidden />
                      </div>
                      <h4 className="text-h4 font-bold leading-snug text-foreground">{title}</h4>
                      <p className="mt-2 line-clamp-3 text-caption leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>

                    {/* The licence fee is the figure people compare across cards,
                        so it leads rather than sitting last in a flat list of
                        equally-weighted rows. */}
                    <div className="mx-5 mb-4 overflow-hidden rounded-lg border border-border">
                      <div className="bg-primary/10 px-3 py-2.5">
                        <p className="text-overline uppercase text-muted-foreground">Licence Fee</p>
                        <p className="text-h3 font-black text-primary">{licenceFee}</p>
                      </div>
                      <dl className="divide-y divide-border bg-muted/40">
                        {shareCapital && (
                          <div className="flex items-center justify-between gap-2 px-3 py-2">
                            <dt className="text-caption text-muted-foreground">Min. Share Capital</dt>
                            <dd className="text-caption font-semibold text-foreground">{shareCapital}</dd>
                          </div>
                        )}
                        {seating && (
                          <div className="flex items-center justify-between gap-2 px-3 py-2">
                            <dt className="text-caption text-muted-foreground">Seating</dt>
                            <dd className="text-caption font-semibold text-foreground">{seating}</dd>
                          </div>
                        )}
                        <div className="flex items-center justify-between gap-2 px-3 py-2">
                          <dt className="text-caption text-muted-foreground">Processing Fee</dt>
                          <dd className="text-caption font-semibold text-foreground">{processingFee}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-auto px-5 pb-5">
                      <Button
                        className="tap w-full text-caption font-semibold"
                        onClick={() => setSelected(licence)}
                      >
                        View Requirements
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Detail sheet */}
      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto sm:w-[500px] md:w-[580px] lg:w-[640px]"
        >
          {selected && (
            <>
              <SheetHeader className="mb-6">
                <div className="mb-2 flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10">
                    <selected.icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <Badge className="mb-1 border-primary/25 bg-primary/10 text-overline text-primary">
                      NFVCB Licence
                    </Badge>
                    <SheetTitle className="text-h3 leading-tight">{selected.title}</SheetTitle>
                  </div>
                </div>
                <SheetDescription className="text-caption leading-relaxed">
                  {selected.desc}
                </SheetDescription>
              </SheetHeader>

              {/* Fees summary */}
              <div className="mb-6 grid grid-cols-2 gap-2 px-4 sm:grid-cols-3">
                {[
                  { label: "Licence Fee", val: selected.licenceFee },
                  { label: "Processing Fee", val: selected.processingFee },
                  ...(selected.shareCapital ? [{ label: "Min. Share Capital", val: selected.shareCapital }] : []),
                  ...(selected.seating ? [{ label: "Seating Capacity", val: selected.seating }] : []),
                  ...(selected.renewalBefore ? [{ label: "Renewal (before expiry)", val: selected.renewalBefore }] : []),
                  ...(selected.renewalAfter ? [{ label: "Renewal (after expiry)", val: selected.renewalAfter }] : []),
                ].map(({ label, val }) => (
                  <div key={label} className="rounded-lg border border-border bg-muted/40 px-3 py-2.5">
                    <p className="mb-0.5 text-overline uppercase text-muted-foreground">{label}</p>
                    <p className="text-caption font-bold text-primary">{val}</p>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="px-4 pb-4">
                <h4 className="mb-3 text-h4 font-bold text-foreground">
                  Application Requirements
                  <span className="ml-2 text-caption font-normal text-muted-foreground">
                    ({selected.requirements.length})
                  </span>
                </h4>
                <ul className="space-y-3">
                  {selected.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <p className="text-caption leading-relaxed text-muted-foreground">{req}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border p-4 text-caption text-muted-foreground">
                For enquiries:{" "}
                <a
                  href="mailto:nfvcb_ldd@nfvcb.gov.ng"
                  className="font-semibold text-primary hover:underline"
                >
                  nfvcb_ldd@nfvcb.gov.ng
                </a>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
