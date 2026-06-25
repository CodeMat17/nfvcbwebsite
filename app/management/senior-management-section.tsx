"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

export function SeniorManagementSection() {
  const staff = useQuery(api.managementStaff.list);

  if (staff === undefined) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-96 rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  if (staff.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">No senior management staff listed yet.</p>
    );
  }

  return (
    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {staff.map(({ _id, name, designation, imageUrl }) => (
        <StaggerItem key={_id}>
          <Card className="overflow-hidden border-primary/20 py-0 hover:shadow-md transition-all hover:border-primary/40 hover:-translate-y-0.5">
            <div className="relative h-96 bg-gradient-to-br from-[#001506] to-[#009f3b]/40 overflow-hidden">
              {imageUrl ? (
                <Image src={imageUrl} alt={name} fill className="object-cover object-top" />
              ) : (
                <Image src="/logo.webp" alt="" fill className="object-contain object-center opacity-20 p-6" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 z-10">
                <p className="font-bold text-white leading-tight">{name}</p>
                <p className="text-white/70 text-sm mt-0.5 leading-snug">{designation}</p>
              </div>
            </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
