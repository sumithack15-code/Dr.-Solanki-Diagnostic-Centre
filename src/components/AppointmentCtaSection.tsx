import React from 'react';
import { Phone, Calendar, MessageCircle, Clock } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentCtaSection: React.FC<AppointmentCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-gradient-to-br from-[#071936] via-[#0B2855] to-[#1769D2] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#65D5E8]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1769D2]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#65D5E8] bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
          <span>Sarita Vihar, New Delhi</span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span>Radiology &amp; Pathology</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
          Looking for a Diagnostic Test?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Get in touch with our centre for appointment availability, test preparation instructions, and diagnostic service enquiries.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Mandatory Call Button */}
          <a
            href="tel:+919654002800"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-[#071936] bg-[#65D5E8] hover:bg-[#83e0f0] transition-all shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Call Now: +91 9654002800"
          >
            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Call Now: +91 9654002800</span>
          </a>

          {/* Book Online / Enquiry Modal */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D5E8]"
          >
            <Calendar className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Enquire Online</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={CENTRE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Timings Reminder */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-300">
          <Clock className="w-3.5 h-3.5 text-[#65D5E8]" aria-hidden="true" />
          <span>{CENTRE_INFO.timingsNote}</span>
        </div>
      </div>
    </section>
  );
};
