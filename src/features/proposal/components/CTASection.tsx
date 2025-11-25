/**
 * @fileoverview Call-to-action section with contact options
 * @module features/proposal/components/CTASection
 */

import React, { ReactElement } from 'react';

/**
 * CTA section component displaying action buttons for client engagement.
 *
 * Includes calendar booking integration and email contact option
 * with responsive button layout.
 *
 * @component
 * @example
 * ```tsx
 * <CTASection />
 * ```
 */
const CTASection = (): ReactElement => {
  return (
    <div className="mt-16 mb-12 text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Lets Start Building?</h2>
      <p className="text-slate-600 mb-8">
        Here are three options. Choose whichever works best for you. We can start immediately once you confirm.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
         <button
           data-cal-namespace="30min"
           data-cal-link="pratik-kadam/30min"
           data-cal-config='{"layout":"month_view","theme":"light"}'
           className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg"
         >
           Schedule Kickoff Call
         </button>
         <a
           href="mailto:pratik@dyotaai.com"
           className="px-8 py-3 bg-white text-slate-900 border border-slate-300 rounded-lg font-bold hover:bg-slate-50 transition-colors inline-block"
         >
           Ask a Question
         </a>
      </div>
    </div>
  );
};

export default CTASection;
