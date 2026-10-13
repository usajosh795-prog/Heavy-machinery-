export type TabId = 'home' | 'products' | 'company' | 'estimator' | 'contact';

export type ProductCategory = 'all' | 'transformers' | 'rebar' | 'weighbridges' | 'structural';

export interface Product {
  id: string;
  name: string;
  code: string;
  category: 'transformers' | 'rebar' | 'weighbridges' | 'structural';
  categoryLabel: string;
  capacity: string;
  primarySpec: string;
  tagline: string;
  description: string;
  image: string;
  basePriceInr: number;
  minWholesaleQty: number;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  compliance: string[];
  leadTime: string;
  cadAvailable: boolean;
}

export interface EstimatorItem {
  productId: string;
  quantity: number;
}

export interface EstimatorConfig {
  items: EstimatorItem[];
  selectedAddons: string[];
  destinationRegion: string;
  customVoltageClass?: string;
}

export interface Facility {
  id: string;
  name: string;
  location: string;
  specialty: string;
  capacity: string;
  established: number;
  manager: string;
  phone: string;
}

export interface Certification {
  code: string;
  name: string;
  body: string;
  category: string;
  description: string;
}

export interface BusinessSector {
  id: string;
  title: string;
  description: string;
  metric: string;
  clientExample: string;
  iconName: string;
}

/**
 * Format currency in Indian Rupees (INR)
 * Supports full format (₹15,40,00,000) and compact Lakh/Crore format (₹15.40 Cr)
 */
export function formatINR(amount: number, compact = false): string {
  if (compact) {
    if (amount >= 10000000) {
      const cr = amount / 10000000;
      return `₹${cr.toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      const lakh = amount / 100000;
      return `₹${lakh.toFixed(2)} Lakh`;
    }
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
