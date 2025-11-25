import { Offer, MaintenancePlan } from './types';

export const PROPOSAL_META = {
  clientName: "Shahab",
  preparedBy: "Pratik",
  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  title: "AI Receptionist System",
  subtitle: "Full Proposal (3-Offer Package)"
};

export const MAINTENANCE_PLAN: MaintenancePlan = {
  cost: "$147/month",
  features: [
    "System Monitoring & Uptime Checks",
    "Bug Fixes & Critical Patches",
    "Workflow Stabilization",
    "Minor Updates (2 small changes/month)",
    "Error Prevention & Logs Analysis",
    "Monthly Health Report",
    "Priority Support Channel"
  ]
};

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    tierName: "OFFER 1",
    title: "Starter Pack",
    subtitle: "Pre-Built Version",
    priceDisplay: "FREE",
    priceSubtext: "Zero cost. Zero commitment.",
    timeline: "4–7 days",
    ownership: "Inside your infrastructure",
    bestFor: "Testing capabilities, instant start, live demo",
    description: "Get a fully working AI receptionist immediately to test the waters with zero risk.",
    highlight: false,
    buttonText: "Start for Free",
    coreFeatures: [
      { text: "WhatsApp AI receptionist (Text + Voice Notes)" },
      { text: "Basic Booking + Rescheduling" },
      { text: "Multi-staff Calendar Logic" },
      { text: "Knowledge Base Responses" },
      { text: "Message Reminders (Confirmations, Cancellations)" },
      { text: "Logs, Transcripts, Admin Access" },
      { text: "Pre-consultation Basic Workflow" },
      { text: "Non-exclusive Resell Rights" }
    ],
    benefits: [
      "Zero upfront risk",
      "Experience system instantly",
      "Excellent for client demos"
    ]
  },
  {
    id: 'offer-2',
    tierName: "OFFER 2",
    title: "Full Implementation",
    subtitle: "Complete PRD Build",
    priceDisplay: "$4,800",
    priceSubtext: "One-time payment",
    timeline: "4–6 weeks",
    ownership: "100% Yours + Full Resell Rights",
    bestFor: "Production use, revenue generation",
    description: "A production-grade, custom-built AI system tailored to your specific operational needs.",
    highlight: true,
    buttonText: "Select Implementation",
    coreFeatures: [
      { text: "All Starter Features included" },
      { text: "Full Pre-consultation Workflow" },
      { text: "Booking & Rebooking Engine" },
      { text: "Stylist Post-appointment Workflow" },
      { text: "Human Escalation Logic" }
    ],
    advancedFeatures: [
      {
        title: "Multimodal AI",
        items: [
          { text: "Voice Note Transcription" },
          { text: "Emotional + Sentiment Detection" },
          { text: "Multi-language Support" },
          { text: "Photo Analysis (Regrowth, Hair Condition)" },
          { text: "Personalized Responses" }
        ]
      },
      {
        title: "Technical Delivery",
        items: [
          { text: "Built in your environment" },
          { text: "Google Sheets Backup Sync" },
          { text: "Full Documentation & Handover Videos" },
          { text: "Cloudmesoft.com Client Profile Integration" },
          { text: "Real-time Alerts & Monitoring" }
        ]
      }
    ],
    benefits: [
      "Unlimited resale potential ($5k–$10k per salon)",
      "Zero dependency on developers",
      "Predictable delivery timeline"
    ],
    guarantee: {
      title: "Delivery Guarantee",
      text: "If scope isn’t delivered in 6 weeks, you get 1 free month of maintenance."
    },
    secondaryGuarantee: {
      title: "Performance Guarantee",
      text: "If automation doesn’t hit 60% in 14 days, we fix it free until it does."
    }
  },
  {
    id: 'offer-3',
    tierName: "OFFER 3",
    title: "SalonOS Platform",
    subtitle: "Multi-Tenant SaaS",
    priceDisplay: "$7,500",
    priceSubtext: "+ $197/month",
    timeline: "5–7 weeks",
    ownership: "100% Yours + Lifetime Resell Rights",
    bestFor: "Building a SaaS business, scaling",
    description: "Your own SaaS platform. Host unlimited salons with white-label capabilities.",
    highlight: false,
    buttonText: "Build My Platform",
    coreFeatures: [
      { text: "Everything in Offer 2 included" },
      { text: "Multi-Tenant Architecture" },
      { text: "Host Unlimited Salons" },
      { text: "Independent AI Configs per Salon" },
      { text: "Data Separation" }
    ],
    advancedFeatures: [
      {
        title: "Admin Super Dashboard",
        items: [
          { text: "View/Manage All Salons" },
          { text: "Global Settings & Activity Logs" },
          { text: "Feature Toggles per Tenant" },
          { text: "Error & Escalation Monitoring" }
        ]
      },
      {
        title: "White-Labeling & Reseller Kit",
        items: [
          { text: "Full Rebranding (Custom Logo/URLs)" },
          { text: "Sales Deck & Pricing Calculator" },
          { text: "48-hour Onboarding SOP" },
          { text: "Marketing Scripts & Demo Env" }
        ]
      }
    ],
    benefits: [
      "Become a SaaS owner instantly",
      "Charge $299–$499/month per salon",
      "Zero vendor lock-in",
      "High-ticket + recurring revenue engine"
    ],
    guarantee: {
      title: "Delivery Guarantee",
      text: "If scope isn’t delivered in 7 weeks, you get 1 free month of maintenance."
    }
  }
];