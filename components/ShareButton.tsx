"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const absoluteUrl = url.startsWith("http") ? url : `https://nfvcb.gov.ng${url}`;

  async function handleShare() {
    try {
      await navigator.share({ title, url: absoluteUrl });
    } catch {
      // user cancelled or browser doesn't support — no-op
    }
  }

  return (
    <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  );
}
