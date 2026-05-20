import { NextRequest, NextResponse } from "next/server";

export interface CreatePaymentRequest {
  amount: number;
  billReference: string;
  payerName: string;
  payerEmail: string;
  payerPhone: string;
  description: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  widget?: string;
  paymentUrl?: string;
  data?: unknown;
  message?: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<CreatePaymentResponse>> {
  try {
    const body: CreatePaymentRequest = await req.json();
    const { amount, billReference, payerName, payerEmail, payerPhone, description } = body;

    const token = process.env.REVOP_TOKEN;
    const baseUrl = process.env.REVOP_BASE_URL ?? "https://core.softpay.ng";

    if (!token) {
      return NextResponse.json({ success: false, message: "Payment service not configured" }, { status: 500 });
    }

    const callbackUrl = `${req.nextUrl.origin}/payment-guide/callback`;

    const nameParts = payerName.trim().split(/\s+/);
    const first_name = nameParts[0] ?? payerName;
    const last_name = nameParts.slice(1).join(" ") || first_name;

    const payload = {
      amount,
      currency: "NGN",
      billersNumber: billReference,
      first_name,
      last_name,
      email: payerEmail,
      phone: payerPhone,
      narration: description,
      callback_url: callbackUrl,
      redirect_url: callbackUrl,
    };

    const response = await fetch(`${baseUrl}/api/v1/payment-link/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message ?? `RevOp error: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      widget: result?.data?.widget ?? result?.widget,
      paymentUrl: result?.data?.payment_url ?? result?.data?.link ?? result?.payment_url ?? result?.link,
      data: result,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create payment";
    console.error("[revop/create-payment]", message);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
