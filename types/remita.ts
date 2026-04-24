// types/remita.ts

export interface NFVCBService {
  label: string;
  description: string;
  amount: number;
}

export const NFVCB_SERVICES: NFVCBService[] = [
  {
    label: "Censorship – Nigerian Film (Local, 0–15 mins)",
    description: "Censorship and Classification",
    amount: 10500,
  },
  {
    label: "Censorship – Nigerian Film (English, 0–15 mins)",
    description: "Censorship and Classification",
    amount: 20000,
  },
  {
    label: "Censorship – Foreign Film (0–15 mins)",
    description: "Censorship and Classification",
    amount: 25000,
  },
  {
    label: "Censorship – Nigerian Film (Local, 16–30 mins)",
    description: "Censorship and Classification",
    amount: 20000,
  },
  {
    label: "Censorship – Nigerian Film (English, 16–30 mins)",
    description: "Censorship and Classification",
    amount: 30000,
  },
  {
    label: "Censorship – Foreign Film (16–30 mins)",
    description: "Censorship and Classification",
    amount: 40000,
  },
  {
    label: "Censorship – Nigerian Film (Local, 31–60 mins)",
    description: "Censorship and Classification",
    amount: 30000,
  },
  {
    label: "Censorship – Nigerian Film (English, 31–60 mins)",
    description: "Censorship and Classification",
    amount: 40000,
  },
  {
    label: "Censorship – Foreign Film (31–60 mins)",
    description: "Censorship and Classification",
    amount: 50000,
  },
  {
    label: "Censorship – Nigerian Film (Local, 61–90 mins)",
    description: "Censorship and Classification",
    amount: 40000,
  },
  {
    label: "Censorship – Nigerian Film (English, 61–90 mins)",
    description: "Censorship and Classification",
    amount: 50000,
  },
  {
    label: "Censorship – Foreign Film (61–90 mins)",
    description: "Censorship and Classification",
    amount: 60000,
  },
  {
    label: "Fast Track Add-on",
    description: "Fast Track Processing Fee",
    amount: 50000,
  },
  {
    label: "YouTube Classification (11–40 mins)",
    description: "Online Classification Fee",
    amount: 30000,
  },
  {
    label: "YouTube Classification (41–90 mins)",
    description: "Online Classification Fee",
    amount: 50000,
  },
  {
    label: "YouTube Express (11–40 mins)",
    description: "Online Classification Express Fee",
    amount: 60000,
  },
  {
    label: "Trailer – Local Language",
    description: "Trailer Classification",
    amount: 5000,
  },
  {
    label: "Trailer – English/Foreign",
    description: "Trailer Classification",
    amount: 7500,
  },
  {
    label: "Music Video – Local",
    description: "Musical Video Classification",
    amount: 2000,
  },
  {
    label: "Music Video – Foreign",
    description: "Musical Video Classification",
    amount: 2500,
  },
  {
    label: "Distribution Licence – Digital (Application Fee)",
    description: "Distribution Licence Application",
    amount: 50000,
  },
  {
    label: "Exhibitor's Licence – National (Application Fee)",
    description: "Exhibitor Licence Application",
    amount: 50000,
  },
  {
    label: "Exhibition Premises – Major Hall (201+ seats)",
    description: "Exhibition Premises Licence",
    amount: 350000,
  },
  {
    label: "Exhibition Premises – Medium Hall (101–200 seats)",
    description: "Exhibition Premises Licence",
    amount: 300000,
  },
  {
    label: "Exhibition Premises – Small Hall (1–100 seats)",
    description: "Exhibition Premises Licence",
    amount: 250000,
  },
  {
    label: "Permit – Category A (Mobile Van/Truck)",
    description: "Permit Fee",
    amount: 10000,
  },
  {
    label: "Permit – Category B (Wheelbarrow)",
    description: "Permit Fee",
    amount: 1000,
  },
  {
    label: "Permit – Category C (Street Hawker)",
    description: "Permit Fee",
    amount: 1000,
  },
];

export interface GenerateRRRRequest {
  payerName: string;
  payerEmail: string;
  payerPhone: string;
  amount: string;
  orderId: string;
  description: string;
}

export interface RemitaRRRPayload {
  serviceTypeId: string;
  orderId: string;
  amount: string;
  payerName: string;
  payerEmail: string;
  payerPhone: string;
  description: string;
}

// Remita returns JSON (not JSONP) from the demo endpoint
export interface RemitaRRRResponse {
  RRR: string;
  statuscode: string;
  status: string;
  transactionId?: string;
}

export interface GenerateRRRApiResponse {
  success: boolean;
  data?: RemitaRRRResponse;
  message?: string;
}

export interface RemitaStatusResponse {
  status: string;
  RRR: string;
  amount: string;
  transactiontime?: string;
  message?: string;
}

export interface CheckStatusApiResponse {
  success: boolean;
  data?: RemitaStatusResponse;
  message?: string;
}

export interface RemitaWebhookPayment {
  rrr: string;
  orderRef: string;
  amount: string;
  paymentDate: string;
  paymentChannel: string;
  currency: string;
}

export interface RemitaPaymentEngineConfig {
  key: string;
  transactionId: number;
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  narration: string;
  onSuccess: (response: RemitaSuccessResponse) => void;
  onError: (response: RemitaErrorResponse) => void;
  onClose: () => void;
}

export interface RemitaSuccessResponse {
  paymentReference: string;
  processorId: string;
  transactionId: string;
  message: string;
  amount: string;
}

export interface RemitaErrorResponse {
  message: string;
  code: string;
}

export interface RemitaPaymentEngine {
  showPaymentWidget: () => void; // ← correct method name
}

export interface RmPaymentEngineStatic {
  init: (config: RemitaPaymentEngineConfig) => RemitaPaymentEngine;
}

export interface PaymentFormState {
  payerName: string;
  payerEmail: string;
  payerPhone: string;
  selectedService: NFVCBService | null;
}
