/**
 * @fileoverview Shared TypeScript types for the application
 * @module shared/types
 */

export interface FeatureItem {
  text: string;
  isPremium?: boolean;
}

export interface Section {
  title: string;
  items: FeatureItem[];
}

export interface Guarantee {
  title: string;
  text: string;
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
  guarantee?: Guarantee;
  secondaryGuarantee?: Guarantee;
  buttonText: string;
}

export interface MaintenancePlan {
  cost: string;
  features: string[];
}

export interface ProposalMeta {
  clientName: string;
  preparedBy: string;
  date: string;
  title: string;
  subtitle: string;
}
