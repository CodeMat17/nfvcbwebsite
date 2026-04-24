// app/api/remita/check-status/route.ts

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import type {
  CheckStatusApiResponse,
  RemitaStatusResponse,
} from "@/types/remita";

export async function GET(
  req: NextRequest,
): Promise<NextResponse<CheckStatusApiResponse>> {
  try {
    const { searchParams } = new URL(req.url);
    const rrr = searchParams.get("rrr");

    if (!rrr) {
      return NextResponse.json(
        { success: false, message: "RRR is required" },
        { status: 400 },
      );
    }

    const merchantId = process.env.REMITA_MERCHANT_ID as string;
    const apiKey = process.env.REMITA_API_KEY as string;
    const baseUrl = process.env.REMITA_BASE_URL as string;

    // Status check hash: rrr + apiKey + merchantId  (different order!)
    const hash = crypto
      .createHash("sha512")
      .update(rrr + apiKey + merchantId)
      .digest("hex");

    const response = await fetch(
      `${baseUrl}/echannelsvc/${merchantId}/${rrr}/${hash}/status.reg`,
      {
        method: "GET",
        headers: {
          Authorization: `remitaConsumerKey=${merchantId},remitaConsumerToken=${hash}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Remita status check failed: ${response.status}`);
    }

    const data: RemitaStatusResponse = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Status check failed";
    console.error("[check-status]", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
