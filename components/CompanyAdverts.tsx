import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function CompanyAdverts() {
  return (
    <div className="flex flex-col border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sponsored</span>
        <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">Advertisement</span>
      </div>

      {/* Ad slot */}
      <div className="p-3">
        <div
          className="flex flex-col gap-2 rounded-xl p-5 justify-center"
          style={{ background: "#fea60012", border: "1px solid #fea60030" }}
        >
          <div className="w-1 h-5 rounded-full bg-nfvcb-gold" aria-hidden />
          <p className="text-sm font-black text-foreground leading-snug">Your Ad Here</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Connect with Nigeria&apos;s growing film and video industry. Contact us to advertise on this page.
          </p>
          <Link
            href="mailto:dgoffice@nfvcb.gov.ng"
            className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-nfvcb-gold"
          >
            Learn more <ExternalLink className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-border">
        <Link
          href="mailto:dgoffice@nfvcb.gov.ng"
          className="text-[11px] font-bold text-primary hover:underline"
        >
          Advertise with us
        </Link>
      </div>
    </div>
  );
}
