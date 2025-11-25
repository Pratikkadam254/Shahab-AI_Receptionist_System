/**
 * @fileoverview Maintenance section component displaying support plan details
 * @module features/proposal/components/MaintenanceSection
 */

import React, { ReactElement } from 'react';
import { MAINTENANCE_PLAN } from '../../../shared/constants';
import { IconServer, IconCheck } from '../../../shared/components/ui/Icons';

/**
 * Maintenance section component that displays the ongoing support plan.
 *
 * Shows the monthly maintenance cost and all included features
 * with clear visual hierarchy and iconography.
 *
 * @component
 * @example
 * ```tsx
 * <MaintenanceSection />
 * ```
 */
const MaintenanceSection = (): ReactElement => {
  return (
    <div className="mt-16 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <IconServer className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Ongoing Maintenance & Support</h3>
            <p className="text-sm text-slate-500">Optional for Offer 1, Recommended for Offers 2</p>
          </div>
        </div>
        <div className="text-xl font-bold text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
          {MAINTENANCE_PLAN.cost} <span className="text-sm text-slate-400 font-normal"></span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MAINTENANCE_PLAN.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <IconCheck className="w-4 h-4 text-blue-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSection;
