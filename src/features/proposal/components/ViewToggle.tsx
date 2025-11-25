/**
 * @fileoverview Toggle component for switching between view modes
 * @module features/proposal/components/ViewToggle
 */

import React, { ReactElement } from 'react';

interface ViewToggleProps {
  /** Current detailed view state */
  isDetailedView: boolean;
  /** Callback function when view mode changes */
  onToggle: (isDetailed: boolean) => void;
}

/**
 * View toggle component for switching between essentials and detailed views.
 *
 * Provides a segmented control with clear visual feedback
 * for the current selection state.
 *
 * @component
 * @example
 * ```tsx
 * <ViewToggle
 *   isDetailedView={showDetails}
 *   onToggle={setShowDetails}
 * />
 * ```
 */
const ViewToggle: React.FC<ViewToggleProps> = ({ isDetailedView, onToggle }): ReactElement => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white p-1.5 rounded-xl shadow-lg border border-slate-200 inline-flex items-center">
        <button
          onClick={() => onToggle(false)}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            !isDetailedView ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          Essentials View
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            isDetailedView ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          Full Technical Scope
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
