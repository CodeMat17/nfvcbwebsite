"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CreditCard, Loader2 } from "lucide-react";
import type { CreatePaymentResponse } from "@/app/api/revop/create-payment/route";

interface FormState {
  billReference: string;
  amount: string;
  payerName: string;
  payerEmail: string;
  payerPhone: string;
  description: string;
}

const initial: FormState = {
  billReference: "",
  amount: "",
  payerName: "",
  payerEmail: "",
  payerPhone: "",
  description: "NFVCB Payment",
};

export function RevOpPaymentWidget() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [widget, setWidget] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWidget(null);

    try {
      const res = await fetch("/api/revop/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(form.amount),
          billReference: form.billReference,
          payerName: form.payerName,
          payerEmail: form.payerEmail,
          payerPhone: form.payerPhone,
          description: form.description,
        }),
      });

      const data: CreatePaymentResponse = await res.json();

      if (!data.success) {
        setError(data.message ?? "Payment initialisation failed. Please try again.");
        return;
      }

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }

      if (data.widget) {
        setWidget(data.widget);
        return;
      }

      setError("Unexpected response from payment service. Please try again or visit revop.gov.ng directly.");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (widget) {
    return (
      <div
        className="w-full rounded-xl overflow-hidden border border-border"
        dangerouslySetInnerHTML={{ __html: widget }}
      />
    );
  }

  return (
    <Card className="border-nfvcb-green/30">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-nfvcb-green flex items-center justify-center shrink-0">
            <CreditCard className="h-4 w-4 text-white" />
          </div>
          <div>
            <CardTitle className="text-base">Pay Your Bill Online</CardTitle>
            <p className="text-sm text-muted-foreground mt-0.5">
              Enter your bill details below to pay directly via RevOP.
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Biller's Number"
              name="billReference"
              value={form.billReference}
              onChange={handleChange}
              placeholder="e.g. REV-2024-0012345"
              required
            />
            <Field
              label="Amount (₦)"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              placeholder="e.g. 5000"
              required
              min="1"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Full Name"
              name="payerName"
              value={form.payerName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              required
            />
            <Field
              label="Email Address"
              name="payerEmail"
              type="email"
              value={form.payerEmail}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Phone Number"
              name="payerPhone"
              type="tel"
              value={form.payerPhone}
              onChange={handleChange}
              placeholder="e.g. 08012345678"
              required
            />
            <Field
              label="Description / Narration"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="e.g. Film classification fee"
            />
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-nfvcb-green text-white text-sm font-semibold hover:bg-[#007d2e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Initialising Payment…
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Proceed to Payment
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Powered by RevOP — OAGF official payment platform. Your details are transmitted securely.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nfvcb-green/40 focus:border-nfvcb-green transition-colors"
      />
    </div>
  );
}
