import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  serviceId = ''
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close appointment enquiry modal"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Embedded Form */}
        <div className="pt-2">
          <EnquiryForm
            variant="modal"
            initialServiceId={serviceId}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
