import React, { useEffect } from 'react';
import { X, Clock, AlertCircle, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { DiagnosticService } from '../types';
import { CENTRE_INFO } from '../data/diagnosticData';

interface ServiceDetailModalProps {
  service: DiagnosticService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#071936] shrink-0">
          {service.imageUrl && (
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071936] via-[#071936]/60 to-black/30 pointer-events-none" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#071936]/80 text-slate-200 hover:text-white hover:bg-[#071936] transition-colors"
            aria-label="Close service details dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#65D5E8]">
              {service.category} Diagnostic Service
            </span>
            <h3 id="modal-service-title" className="text-xl sm:text-2xl font-bold mt-1">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Clinical Overview
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {service.detailedOverview}
            </p>
          </div>

          {/* Quick Parameters */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">Fasting Advice:</span>
              <span className="font-semibold text-slate-900">
                {service.fastingRequired ? 'Required (See notes)' : 'No strict fasting required'}
              </span>
            </div>
            {service.typicalDuration && (
              <div>
                <span className="text-slate-500 block">Estimated Time:</span>
                <span className="font-semibold text-slate-900">{service.typicalDuration}</span>
              </div>
            )}
          </div>

          {/* Pre-Test Preparation Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1769D2]" aria-hidden="true" />
              <span>Pre-Investigation Preparation Instructions</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 bg-[#F5F8FC] p-4 rounded-xl border border-slate-200">
              {service.preparationNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#1769D2] font-bold mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[11px] text-slate-500 italic bg-amber-50/60 p-3 rounded-lg border border-amber-200/50">
            {CENTRE_INFO.timingsNote} Always bring your doctor's clinical prescription slip.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={CENTRE_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B2855] bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#1769D2]" aria-hidden="true" />
            <span>Call Reception</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold text-white bg-[#1769D2] hover:bg-[#1258b3] transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Request Appointment for this Test</span>
          </button>
        </div>

      </div>
    </div>
  );
};
