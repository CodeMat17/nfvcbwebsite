"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const absoluteUrl = url.startsWith("http") ? url : `https://nfvcb.gov.ng${url}`;

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: absoluteUrl });
        return;
      } catch {
        // user cancelled — don't fall through to copy
        return;
      }
    }
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard also unavailable — nothing to do
    }
  }

  return (
    <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4" />}
      {copied ? "Copied!" : "Share"}
    </Button>
  );
}
