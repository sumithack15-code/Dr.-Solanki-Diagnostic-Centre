import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#071936] text-slate-200 border-b border-[#0B2855] text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
        {/* Left: Centre Specialization & Location */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-[#65D5E8] shrink-0" aria-hidden="true" />
          <span className="font-semibold text-white tracking-wide">
            Radiology &amp; Pathology Centre
          </span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-slate-300">Sarita Vihar, New Delhi</span>
        </div>

        {/* Right: Appointment Contact */}
        <div className="flex items-center gap-4">
          <span className="text-slate-400 hidden md:inline">
            Appointments &amp; Test Enquiries:
          </span>
          <a
            href={CENTRE_INFO.phoneTel}
            className="inline-flex items-center gap-1.5 font-semibold text-[#65D5E8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D5E8] rounded px-1"
            aria-label={`Call appointment desk at ${CENTRE_INFO.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="tracking-wider">{CENTRE_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
