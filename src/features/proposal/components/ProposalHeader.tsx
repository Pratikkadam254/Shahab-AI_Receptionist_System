/**
 * @fileoverview Proposal header component with client and project information
 * @module features/proposal/components/ProposalHeader
 */

import React, { ReactElement } from 'react';
import { PROPOSAL_META } from '../../../shared/constants';
import { IconDatabase } from '../../../shared/components/ui/Icons';

/**
 * Proposal header component displaying project title and client details.
 *
 * Features a modern design with gradient background and
 * responsive layout for desktop and mobile viewports.
 *
 * @component
 * @example
 * ```tsx
 * <ProposalHeader />
 * ```
 */
const ProposalHeader = (): ReactElement => {
  return (
    <header className="bg-slate-900 text-white pt-16 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30 mb-4">
              <IconDatabase className="w-3 h-3" />
              System Architecture Proposal
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">{PROPOSAL_META.title}</h1>
            <p className="text-slate-400 text-lg">{PROPOSAL_META.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400 uppercase tracking-widest text-xs font-semibold mb-1">Prepared For</p>
            <p className="text-xl font-bold">{PROPOSAL_META.clientName}</p>
            <div className="mt-4 flex flex-col md:items-end">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Prepared By</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">P</div>
                <span className="text-sm">{PROPOSAL_META.preparedBy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProposalHeader;
