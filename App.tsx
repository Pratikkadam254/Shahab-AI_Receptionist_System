import React, { useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { OFFERS, PROPOSAL_META } from './constants';
import OfferCard from './components/OfferCard';
import MaintenanceSection from './components/MaintenanceSection';
import { IconDatabase } from './components/Icons';

function App() {
  const [isDetailedView, setIsDetailedView] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="min-h-screen pb-20 font-sans">
      
      {/* Header / Hero */}
      <header className="bg-slate-900 text-white pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30 mb-4">
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
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">P</div>
                  <span className="text-sm">{PROPOSAL_META.preparedBy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        
        {/* Toggle UI */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-xl shadow-lg border border-slate-200 inline-flex items-center">
            <button
              onClick={() => setIsDetailedView(false)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !isDetailedView ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Essentials View
            </button>
            <button
              onClick={() => setIsDetailedView(true)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isDetailedView ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Full Technical Scope
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} isDetailedView={isDetailedView} />
          ))}
        </div>

        {/* Maintenance Section */}
        <MaintenanceSection />

        {/* Final CTA */}
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

      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {PROPOSAL_META.preparedBy}. Confidential Proposal.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;