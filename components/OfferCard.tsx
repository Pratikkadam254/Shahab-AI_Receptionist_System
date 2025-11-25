import React, { useState } from 'react';
import { Offer } from '../types';
import { IconCheck, IconClock, IconShield, IconUsers, IconZap, IconChevronDown, IconChevronUp } from './Icons';

interface OfferCardProps {
  offer: Offer;
  isDetailedView: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, isDetailedView }) => {
  const isPaid = offer.priceDisplay !== "FREE";
  const [expandedMobile, setExpandedMobile] = useState(false);

  return (
    <div 
      className={`relative flex flex-col h-full rounded-2xl border transition-all duration-300 ${
        offer.highlight 
          ? 'border-indigo-600 bg-white shadow-xl scale-[1.02] z-10' 
          : 'border-slate-200 bg-white shadow-md hover:shadow-lg'
      }`}
    >
      {offer.highlight && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Recommended
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className={`p-6 ${offer.highlight ? 'bg-indigo-50/50' : ''} rounded-t-2xl`}>
        <div className="text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">{offer.tierName}</div>
        <h3 className="text-xl font-bold text-slate-900">{offer.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{offer.subtitle}</p>
        
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-extrabold text-slate-900">{offer.priceDisplay}</span>
            {offer.priceSubtext && <span className="ml-2 text-sm text-slate-500 font-medium">{offer.priceSubtext}</span>}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
          <IconClock className="w-4 h-4 text-indigo-500" />
          <span>{offer.timeline}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <IconUsers className="w-4 h-4 text-indigo-500" />
          <span className="truncate">{offer.ownership}</span>
        </div>

        <p className="text-sm text-slate-600 italic border-l-2 border-indigo-200 pl-3 mb-6">
          "{offer.description}"
        </p>

        <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
          offer.highlight 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200' 
            : isPaid 
              ? 'bg-slate-800 text-white hover:bg-slate-900'
              : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'
        }`}>
          {offer.buttonText}
        </button>
      </div>

      {/* Mobile Toggle Button (Visible only on small screens) */}
      <div className="md:hidden px-6 pb-2">
         <button 
           onClick={() => setExpandedMobile(!expandedMobile)}
           className="flex items-center justify-center w-full text-sm text-indigo-600 font-medium py-2"
         >
           {expandedMobile ? 'Hide Details' : 'Show Details'}
           {expandedMobile ? <IconChevronUp className="w-4 h-4 ml-1"/> : <IconChevronDown className="w-4 h-4 ml-1"/>}
         </button>
      </div>

      {/* Content Section - Responsive Visibility */}
      <div className={`flex-1 p-6 space-y-6 ${expandedMobile ? 'block' : 'hidden md:block'}`}>
        
        {/* Core Features */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Features</h4>
          <ul className="space-y-3">
            {offer.coreFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-700">
                <IconCheck className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed View Sections */}
        {isDetailedView && offer.advancedFeatures && (
          <div className="pt-4 border-t border-slate-100 animate-fadeIn">
            {offer.advancedFeatures.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <IconZap className="w-3 h-3" /> {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 mr-2 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        <div className={`pt-4 border-t border-slate-100 ${isDetailedView ? '' : 'hidden'}`}>
           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Benefits</h4>
           <ul className="space-y-2">
             {offer.benefits.map((benefit, idx) => (
               <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                 <span className="text-indigo-500 mr-2">★</span>
                 {benefit}
               </li>
             ))}
           </ul>
        </div>

        {/* Guarantees */}
        {(offer.guarantee || offer.secondaryGuarantee) && (
          <div className="mt-auto pt-6 border-t border-slate-100">
             {offer.guarantee && (
               <div className="bg-green-50 rounded-lg p-3 mb-2 border border-green-100">
                 <div className="flex items-center gap-2 mb-1 text-green-800 font-bold text-xs uppercase">
                   <IconShield className="w-4 h-4" /> {offer.guarantee.title}
                 </div>
                 <p className="text-xs text-green-700 leading-relaxed">{offer.guarantee.text}</p>
               </div>
             )}
             {offer.secondaryGuarantee && (
               <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                 <div className="flex items-center gap-2 mb-1 text-blue-800 font-bold text-xs uppercase">
                   <IconShield className="w-4 h-4" /> {offer.secondaryGuarantee.title}
                 </div>
                 <p className="text-xs text-blue-700 leading-relaxed">{offer.secondaryGuarantee.text}</p>
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;