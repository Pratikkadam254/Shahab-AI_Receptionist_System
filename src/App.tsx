/**
 * @fileoverview Main application component for the proposal system
 * @module App
 */

import React, { useState, useEffect, ReactElement } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { OFFERS } from './shared/constants';
import {
  ProposalHeader,
  ViewToggle,
  OfferCard,
  MaintenanceSection,
  CTASection,
  ProposalFooter
} from './features/proposal/components';

/**
 * Main application component.
 *
 * Manages the proposal view state and initializes the Cal.com
 * calendar booking integration. Orchestrates all proposal sections.
 *
 * @component
 */
const App = (): ReactElement => {
  const [isDetailedView, setIsDetailedView] = useState(false);

  useEffect(() => {
    (async function (): Promise<void> {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen pb-20 font-sans">
      <ProposalHeader />

      <main className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <ViewToggle isDetailedView={isDetailedView} onToggle={setIsDetailedView} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} isDetailedView={isDetailedView} />
          ))}
        </div>

        <MaintenanceSection />
        <CTASection />
      </main>

      <ProposalFooter />
    </div>
  );
};

export default App;
