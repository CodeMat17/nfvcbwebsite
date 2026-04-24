"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  User,
  Mail,
  Phone,
  CheckCircle2,
  XCircle,
  Loader2,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type {
  PaymentFormState,
  NFVCBService,
  RemitaSuccessResponse,
  RemitaErrorResponse,
} from "@/types/remita";
import { NFVCB_SERVICES } from "@/types/remita";

const initialFormState: PaymentFormState = {
  payerName: "",
  payerEmail: "",
  payerPhone: "",
  selectedService: null,
};

type Status = "idle" | "loading" | "success" | "error";

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function NFVCBPaymentPage() {
  const [form, setForm] = useState<PaymentFormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [rrr, setRrr] = useState<string>("");
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (window.RmPaymentEngine) {
        setSdkReady(true);
        clearInterval(id);
      }
    }, 300);
    return () => clearInterval(id);
  }, []);

  const handleServiceChange = (svc: NFVCBService) => {
    setForm((prev) => ({ ...prev, selectedService: svc }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid =
    form.payerName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.payerEmail) &&
    form.payerPhone.trim().length >= 7 &&
    form.selectedService !== null;

  const handlePayment = () => {
    if (!isFormValid || !form.selectedService) return;
    setStatus("loading");
    setStatusMessage("");
    setRrr("");

    const { payerName, payerEmail, selectedService } = form;
    const nameParts = payerName.trim().split(" ");

    try {
      if (!window.RmPaymentEngine) {
        setStatus("error");
        setStatusMessage("Payment gateway is not ready yet. Please refresh the page and try again.");
        return;
      }

      const paymentEngine = window.RmPaymentEngine.init({
        key: process.env.NEXT_PUBLIC_REMITA_PUBLIC_KEY as string,
        transactionId: Math.floor(Math.random() * 1101233),
        customerId: payerEmail,
        firstName: nameParts[0] ?? "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: payerEmail,
        amount: selectedService.amount,
        narration: selectedService.description,
        onSuccess: (response: RemitaSuccessResponse) => {
          setStatus("success");
          setStatusMessage(
            `Payment of ${formatNaira(selectedService.amount)} received successfully. Reference: ${response.paymentReference}`,
          );
          setForm(initialFormState);
          setRrr("");
        },
        onError: (response: RemitaErrorResponse) => {
          setStatus("error");
          setStatusMessage(response.message ?? "Payment could not be completed");
        },
        onClose: () => {
          setStatus("idle");
          setStatusMessage("Payment window closed.");
        },
      });

      paymentEngine.showPaymentWidget();
    } catch (error: unknown) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Payment initiation failed",
      );
    }
  };

  return (
    <>
    <Script
      src="https://remitademo.net/payment/v1/remita-pay-inline.bundle.js"
      strategy="afterInteractive"
      onLoad={() => setSdkReady(true)}
    />
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative nfvcb-gradient overflow-hidden">
        <div className="absolute inset-0 film-grain" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-[#fea600]" />
              Secured by Remita — Federal Government Payment Gateway
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              NFVCB Payment Portal
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
              Pay for licensing, classification, and regulatory fees securely
              through the National Film and Video Censors Board.
            </p>
          </motion.div>
        </div>
        {/* Decorative arc */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[50%]" />
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pb-20 -mt-2">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Service selector */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm sticky top-28">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Select Service
              </h2>
              <ul className="space-y-1 max-h-80 overflow-y-auto pr-1">
                {NFVCB_SERVICES.map((svc: NFVCBService) => {
                  const active = form.selectedService?.label === svc.label;
                  return (
                    <li key={svc.label}>
                      <button
                        onClick={() => handleServiceChange(svc)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 group ${
                          active
                            ? "bg-primary/10 border-primary text-primary"
                            : "border-transparent hover:border-border hover:bg-muted text-foreground"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className={`font-semibold text-sm ${active ? "text-primary" : ""}`}>
                              {svc.label}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {formatNaira(svc.amount)}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              active ? "text-primary translate-x-0.5" : "text-muted-foreground/40"
                            }`}
                          />
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Info card */}
              <div className="mt-4 flex gap-2.5 bg-[#fea600]/10 border border-[#fea600]/30 rounded-xl p-3.5">
                <Info className="w-4 h-4 text-[#fea600] shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {form.selectedService
                    ? form.selectedService.description
                    : "Select a service above to see its description."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Payment form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground">
                    Payment Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {form.selectedService?.label ?? "No service selected"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Full name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="payerName"
                      placeholder="e.g. Amaka Okonkwo"
                      type="text"
                      value={form.payerName}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="payerEmail"
                      placeholder="you@example.com"
                      type="email"
                      value={form.payerEmail}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="payerPhone"
                      placeholder="08012345678"
                      type="tel"
                      value={form.payerPhone}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Amount (read-only, derived from selected service) */}
                {form.selectedService && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Amount (₦)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-sm">
                        ₦
                      </span>
                      <Input
                        value={form.selectedService.amount.toLocaleString()}
                        readOnly
                        className="pl-8 bg-muted text-muted-foreground cursor-not-allowed"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fixed fee for {form.selectedService.label}
                    </p>
                  </div>
                )}
              </div>

              {/* RRR display */}
              <AnimatePresence>
                {rrr && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800"
                  >
                    <p className="font-semibold mb-0.5">Your RRR:</p>
                    <p className="text-lg font-black tracking-widest">{rrr}</p>
                    <p className="text-xs mt-1 text-amber-700">
                      Save this code — you can use it to pay at any bank or ATM.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status message */}
              <AnimatePresence mode="wait">
                {statusMessage && (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`mt-5 flex gap-3 p-4 rounded-xl border text-sm font-medium ${
                      status === "success"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : status === "error"
                          ? "bg-destructive/10 border-destructive/30 text-destructive"
                          : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pay button */}
              <Button
                onClick={handlePayment}
                disabled={!isFormValid || status === "loading" || !sdkReady}
                className="w-full mt-6 h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Pay{" "}
                    {form.selectedService
                      ? formatNaira(form.selectedService.amount)
                      : "via Remita"}
                  </span>
                )}
              </Button>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  256-bit SSL encrypted
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Federal Government payment gateway
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  PCI DSS compliant
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
