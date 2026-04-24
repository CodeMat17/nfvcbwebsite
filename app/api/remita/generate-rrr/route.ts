// app/api/remita/generate-rrr/route.ts

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import type {
  GenerateRRRRequest,
  RemitaRRRPayload,
  RemitaRRRResponse,
  GenerateRRRApiResponse,
} from "@/types/remita";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<GenerateRRRApiResponse>> {
  try {
    const body: GenerateRRRRequest = await req.json();
    const { payerName, payerEmail, payerPhone, amount, orderId, description } =
      body;

    const merchantId = process.env.REMITA_MERCHANT_ID as string;
    const serviceTypeId = process.env.REMITA_SERVICE_TYPE_ID as string;
    const apiKey = process.env.REMITA_API_KEY as string;
    const baseUrl = process.env.REMITA_BASE_URL as string;

    // Hash: merchantId + serviceTypeId + orderId + amount + apiKey  (SHA512)
    const hash = crypto
      .createHash("sha512")
      .update(merchantId + serviceTypeId + orderId + amount + apiKey)
      .digest("hex");

    const payload: RemitaRRRPayload = {
      serviceTypeId,
      orderId,
      amount,
      payerName,
      payerEmail,
      payerPhone,
      description,
    };

    const remitaUrl = `${baseUrl}/remita/ecomm/split/init.reg`;
    console.log("[generate-rrr] POST →", remitaUrl);

    let response: Response;
    try {
      response = await fetch(remitaUrl, {
        method: "POST",
        headers: {
          Authorization: `remitaConsumerKey=${merchantId},remitaConsumerToken=${hash}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (compatible; NFVCB-Portal/1.0)",
        },
        body: JSON.stringify(payload),
      });
    } catch (fetchErr: unknown) {
      const cause = fetchErr instanceof Error
        ? `${fetchErr.message} | cause: ${JSON.stringify((fetchErr as NodeJS.ErrnoException).cause ?? (fetchErr as {cause?: unknown}).cause)}`
        : String(fetchErr);
      throw new Error(`Outbound fetch to Remita failed: ${cause}`);
    }

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Remita server error: ${response.status} — ${body}`);
    }

    // The demo endpoint returns plain JSON — parse directly
    const parsed: RemitaRRRResponse = await response.json();

    if (!parsed.RRR) {
      throw new Error(
        `RRR not returned. Remita status: ${parsed.status ?? "unknown"}`,
      );
    }

    return NextResponse.json({ success: true, data: parsed });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to generate RRR";
    console.error("[generate-rrr]", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
