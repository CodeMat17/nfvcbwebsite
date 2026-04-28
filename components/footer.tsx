import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Share2, MessageCircle, Video, Camera } from "lucide-react";

const footerLinks = {
  "About NFVCB": [
    { label: "Our History", href: "/about#history" },
    { label: "Vision & Goals", href: "/about#vision" },
    { label: "Philosophy", href: "/about#philosophy" },
    { label: "Management Team", href: "/management" },
    { label: "Departments", href: "/departments" },
  ],
  "Services": [
    { label: "Industry Information", href: "/industry" },
    { label: "Licensing", href: "/industry/licensing" },
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
                href="https://maps.google.com/?q=Room+B913+Federal+Secretariat+Complex+Phase+II+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-nfvcb-green" />
                <span>Room B913, Federal Secretariat Complex Phase II, Abuja FCT</span>
              </a>
              <a
                href="https://wa.me/2347082767572"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 fill-nfvcb-green"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>+234 708 276 7572</span>
              </a>
              <a
                href="mailto:info@nfvcb.gov.ng"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-nfvcb-green" />
                <span>info@nfvcb.gov.ng</span>
              </a>
              <a
                href="mailto:dgoffice@nfvcb.gov.ng"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-nfvcb-green" />
                <span>dgoffice@nfvcb.gov.ng</span>
              </a>
              <a
                href="mailto:complaint@nfvcb.gov.ng"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-nfvcb-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-nfvcb-green" />
                <span>complaint@nfvcb.gov.ng</span>
              </a>
            </div>
            {/* <div className="flex gap-3 mt-6">
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
            </div> */}
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
                  <Link key={label} href="/classification/#symbols" title={`${label} Classification`}>
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
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
