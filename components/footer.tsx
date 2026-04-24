import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, MessageCircle, Video, Camera } from "lucide-react";

const footerLinks = {
  "About NFVCB": [
    { label: "Our History", href: "/about#history" },
    { label: "Vision & Goals", href: "/about#vision" },
    { label: "Philosophy", href: "/about#philosophy" },
    { label: "Management Team", href: "/management" },
    { label: "Departments & Units", href: "/departments" },
  ],
  "Services": [
    { label: "Industry Information", href: "/industry" },
    { label: "Distributor Licensing", href: "/industry/licensing" },
    { label: "Film Classification", href: "/industry#classification" },
    { label: "Service Charter", href: "/service-charter" },
    { label: "8-Point Action Plan", href: "/action-plan" },
  ],
  "Regulation": [
    { label: "Our Policy", href: "/policy" },
    { label: "Law Enforcement", href: "/law-enforcement" },
    { label: "Classification Categories", href: "/policy#categories" },
    { label: "Zones & Centres", href: "/zones" },
    { label: "News & Press Releases", href: "/news" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-nfvcb-dark text-white">
      {/* Film strip decoration */}
      <div className="flex overflow-hidden h-6 bg-black/40">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="shrink-0 w-8 h-6 border-r border-nfvcb-green/30 flex items-center justify-center">
            <div className="w-4 h-3 rounded-sm bg-nfvcb-green/10" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/logo.webp" alt="NFVCB Logo" width={56} height={56} className="rounded" />
              <div>
                <div className="text-xl font-bold text-nfvcb-green">NFVCB</div>
                <div className="text-xs text-white/60 leading-tight">
                  National Film &amp; Video<br />Censors Board
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Regulatory body established by Act No.85 of 1993 to regulate the films and video
              industry in Nigeria — preserving culture, protecting children, empowering creativity.
            </p>
            <div className="space-y-2">
              <a
                href="https://maps.google.com/?q=20+Alexandria+Crescent+Wuse+II+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-nfvcb-green" />
                <span>No. 20 Alexandria Crescent, Wuse II, Abuja, Nigeria</span>
              </a>
              <a
                href="tel:+2340000000000"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-nfvcb-green" />
                <span>+234 (0) 000 000 0000</span>
              </a>
              <a
                href="mailto:info@nfvcb.gov.ng"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-nfvcb-green" />
                <span>info@nfvcb.gov.ng</span>
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Share2, label: "Facebook" },
                { icon: MessageCircle, label: "Twitter" },
                { icon: Video, label: "YouTube" },
                { icon: Camera, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-nfvcb-green hover:text-nfvcb-green transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-nfvcb-gold uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Classification symbols */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/40 mb-2 font-medium uppercase tracking-wider">
                Film Classification Ratings
              </p>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "G", src: "/classification_symbols/symbol_G.jpg" },
                  { label: "PG", src: "/classification_symbols/symbol_PG.jpg" },
                  { label: "12", src: "/classification_symbols/symbol_12.jpg" },
                  { label: "12A", src: "/classification_symbols/symbol_12A.png" },
                  { label: "15", src: "/classification_symbols/symbol_15.jpg" },
                  { label: "18", src: "/classification_symbols/symbol_18.jpg" },
                  { label: "RE", src: "/classification_symbols/symbol_RE.jpg" },
                ].map(({ label, src }) => (
                  <Link key={label} href="/classifications" title={`${label} Classification`}>
                    <div className="relative w-9 h-9 rounded overflow-hidden border border-white/20 hover:border-white/50 transition-colors">
                      <Image src={src} alt={`${label} classification`} fill className="object-contain" sizes="36px" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} National Film and Video Censors Board
              </p>
              <p className="text-xs text-white/30 mt-1">
                Federal Republic of Nigeria — All Rights Reserved
              </p>
              <div className="flex gap-3 mt-2 justify-end">
                <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Use</Link>
                <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/60 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
