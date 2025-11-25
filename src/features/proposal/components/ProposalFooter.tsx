/**
 * @fileoverview Proposal footer component with copyright information
 * @module features/proposal/components/ProposalFooter
 */

import React, { ReactElement } from 'react';
import { PROPOSAL_META } from '../../../shared/constants';

/**
 * Footer component displaying copyright and confidentiality notice.
 *
 * @component
 * @example
 * ```tsx
 * <ProposalFooter />
 * ```
 */
const ProposalFooter = (): ReactElement => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {PROPOSAL_META.preparedBy}. Confidential Proposal.</p>
      </div>
    </footer>
  );
};

export default ProposalFooter;
