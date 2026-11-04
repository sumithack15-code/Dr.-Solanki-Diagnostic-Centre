import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5"
      aria-label="Direct Quick Contact Options"
    >
      {/* WhatsApp Button */}
      <a
        href={CENTRE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
        aria-label="Enquire via WhatsApp at +91 9654002800"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap pr-1">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={CENTRE_INFO.phoneTel}
        className="group flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#1769D2] hover:bg-[#1258b3] text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1769D2]"
        aria-label="Call Centre directly at +91 9654002800"
      >
        <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap pr-1">
          Call Centre
        </span>
      </a>
    </aside>
  );
};
