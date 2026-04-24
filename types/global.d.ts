import type { RmPaymentEngineStatic } from "./remita";

declare global {
  interface Window {
    RmPaymentEngine?: RmPaymentEngineStatic;
  }
}
