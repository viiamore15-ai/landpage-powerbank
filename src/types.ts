export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  featured?: boolean;
  badge?: string;
  savings?: string;
  items: string[];
  units: number;
  freeShipping?: boolean;
  whatsappMessage: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DeviceCharge {
  name: string;
  batteryCapacity: number; // in mAh
  chargesEstimate: number;
  icon: string;
}
