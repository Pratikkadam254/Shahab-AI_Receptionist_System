export interface FeatureItem {
  text: string;
  isPremium?: boolean;
}

export interface Section {
  title: string;
  items: FeatureItem[];
}

export interface Offer {
  id: string;
  tierName: string;
  title: string;
  subtitle: string;
  priceDisplay: string;
  priceSubtext?: string;
  timeline: string;
  ownership: string;
  bestFor: string;
  description: string;
  highlight?: boolean;
  coreFeatures: FeatureItem[];
  advancedFeatures?: Section[];
  benefits: string[];
  guarantee?: {
    title: string;
    text: string;
  };
  secondaryGuarantee?: {
    title: string;
    text: string;
  };
  buttonText: string;
}

export interface MaintenancePlan {
  cost: string;
  features: string[];
}