"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function categoryLabel(cat: string | undefined) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Notice";
  return "News";
}
function categoryColor(cat: string | undefined) {
  if (cat === "press-release") return "bg-[#009f3b] text-white";
  if (cat === "announcement") return "bg-[#fea600] text-black";
  return "bg-blue-600 text-white";
}
function fmtRelative(d: string | number) {
  const diff = Math.floor((Date.now() - new Date(d).getTime()) / 60000);
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / 1440)}d ago`;
}

export function AsideNewsStack() {
  const items = useQuery(api.news.list);
  const top4 = items?.slice(0, 4) ?? [];

  return (
    <div className="flex flex-col border border-border rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#fea600]" />
          <span className="text-xs font-black uppercase tracking-widest text-foreground">Top Stories</span>
        </div>
      </div>

      <div className="flex flex-col">
        {top4.map((item, i) => (
          <Link
            key={item._id}
            href={`/news/${item.slug}`}
            className={`group flex flex-col gap-1 px-4 py-3 hover:bg-muted/50 transition-colors ${i < 3 ? "border-b border-border" : ""}`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-[11px] px-1.5 py-0.5 rounded ${categoryColor(item.category)}`}>
                {categoryLabel(item.category)}
              </span>
              <span className="text-[11px] text-muted-foreground">
                NFVCB · {fmtRelative(item.publishedAt ?? item._creationTime)}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end px-4 py-2.5 border-t border-border">
        <Link href="/news" className="text-[12px] font-bold text-primary hover:underline">
          See more
        </Link>
      </div>
    </div>
  );
}
