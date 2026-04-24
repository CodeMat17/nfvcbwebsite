// app/api/remita/webhook/route.ts

import { NextRequest } from "next/server";
import type { RemitaWebhookPayment } from "@/types/remita";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const webhookData: RemitaWebhookPayment[] = await req.json();

    for (const payment of webhookData) {
      const { rrr, orderRef, amount } = payment;
      // TODO: update your database — mark transaction as PAID
      console.log(
        `[webhook] RRR: ${rrr} | Ref: ${orderRef} | Amount: ₦${amount}`,
      );
    }

    return new Response("Ok", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Webhook error";
    console.error("[webhook]", message);
    return new Response("Not Ok", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
