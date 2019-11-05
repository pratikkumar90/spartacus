export enum CheckoutStepType {
  SHIPPING_ADDRESS = 'shippingAddress',
  DELIVERY_MODE = 'deliveryMode',
  TAX_INVOICE = 'taxInvoice',
  PAYMENT_DETAILS = 'paymentDetails',
  REVIEW_ORDER = 'reviewOrder',
}

export interface CheckoutStep {
  id: string;
  name: string;
  routeName: string;
  type: Array<CheckoutStepType>;
}
