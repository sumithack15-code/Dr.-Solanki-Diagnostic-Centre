import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, CENTRE_INFO } from '../data/diagnosticData';
import { EnquiryFormData } from '../types';
import { validateEnquiryForm, buildWhatsAppEnquiryUrl } from '../utils/appointmentUtils';

interface EnquiryFormProps {
  initialServiceId?: string;
  onSuccess?: () => void;
  variant?: 'inline' | 'modal';
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialServiceId = '',
  onSuccess,
  variant = 'inline'
}) => {
  // Tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    serviceId: initialServiceId,
    preferredDate: minDateStr,
    preferredTimeWindow: 'Morning (09:00 AM - 01:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmittedData(formData);
    if (onSuccess) {
      // Optional callback
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      serviceId: '',
      preferredDate: minDateStr,
      preferredTimeWindow: 'Morning (09:00 AM - 01:00 PM)',
      message: ''
    });
  };

  if (submittedData) {
    const whatsAppUrl = buildWhatsAppEnquiryUrl(submittedData);
    const selectedService = SERVICES.find((s) => s.id === submittedData.serviceId);

    return (
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
        </div>

        <h3 className="text-xl font-bold text-[#071936]">
          Enquiry Details Ready
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-800">{submittedData.fullName}</strong>. To complete your booking and receive immediate confirmation &amp; pre-test preparation instructions, choose your preferred method:
        </p>

        <div className="p-3.5 bg-slate-50 rounded-xl text-left text-xs space-y-1.5 border border-slate-200">
          <div><span className="text-slate-500">Service:</span> <strong>{selectedService?.name || 'Diagnostic Investigation'}</strong></div>
          <div><span className="text-slate-500">Contact:</span> <strong>{submittedData.phoneNumber}</strong></div>
          <div><span className="text-slate-500">Preferred Date:</span> <strong>{submittedData.preferredDate}</strong></div>
          {submittedData.preferredTimeWindow && (
            <div><span className="text-slate-500">Slot:</span> <strong>{submittedData.preferredTimeWindow}</strong></div>
          )}
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Send via WhatsApp</span>
          </a>

          <a
            href={CENTRE_INFO.phoneTel}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1769D2] hover:bg-[#1258b3] shadow transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call Reception Directly</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-800 underline mt-2"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 ${
        variant === 'modal' ? 'p-4 sm:p-6' : ''
      }`}
      noValidate
    >
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#071936]">
          Request an Appointment Enquiry
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Fill in your details below. Our reception will assist you with scheduling and pre-test advice.
        </p>
      </div>

      {/* Patient Name */}
      <div>
        <label htmlFor={`fullName-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
          Patient Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          id={`fullName-${variant}`}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Amit Kumar"
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
            errors.fullName
              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
              : 'border-slate-300 focus:border-[#1769D2] focus:ring-[#1769D2]/20'
          }`}
          required
        />
        {errors.fullName && (
          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor={`phoneNumber-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
          Contact Phone Number (Mobile) <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            id={`phoneNumber-${variant}`}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="10-digit mobile number, e.g. 9876543210"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
              errors.phoneNumber
                ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                : 'border-slate-300 focus:border-[#1769D2] focus:ring-[#1769D2]/20'
            }`}
            required
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{errors.phoneNumber}</span>
          </p>
        )}
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor={`serviceId-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
          Required Diagnostic Test / Service <span className="text-rose-500">*</span>
        </label>
        <select
          id={`serviceId-${variant}`}
          name="serviceId"
          value={formData.serviceId}
          onChange={handleChange}
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors ${
            errors.serviceId
              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
              : 'border-slate-300 focus:border-[#1769D2] focus:ring-[#1769D2]/20'
          }`}
          required
        >
          <option value="">-- Please select a service --</option>
          <optgroup label="Radiology &amp; Ultrasound">
            <option value="whole-body-ultrasound">Whole Body Ultrasound</option>
            <option value="obgy-ultrasound">OBGY Ultrasound</option>
            <option value="3d-4d-5d-scans">3D, 4D and 5D Scans</option>
            <option value="color-doppler">Color Doppler</option>
            <option value="digital-x-ray">Digital X-Ray</option>
          </optgroup>
          <optgroup label="Cardiac Diagnostics">
            <option value="ecg">ECG</option>
            <option value="2d-echo">2D Echo</option>
          </optgroup>
          <optgroup label="Laboratory Medicine">
            <option value="all-pathology-services">All Pathology Services / Blood Tests</option>
          </optgroup>
          <option value="general-enquiry">General Consultation / Other Enquiry</option>
        </select>
        {errors.serviceId && (
          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>{errors.serviceId}</span>
          </p>
        )}
      </div>

      {/* Date & Time Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`preferredDate-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Date <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            id={`preferredDate-${variant}`}
            name="preferredDate"
            min={minDateStr}
            value={formData.preferredDate}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors ${
              errors.preferredDate
                ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                : 'border-slate-300 focus:border-[#1769D2] focus:ring-[#1769D2]/20'
            }`}
            required
          />
          {errors.preferredDate && (
            <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`preferredTimeWindow-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Slot
          </label>
          <select
            id={`preferredTimeWindow-${variant}`}
            name="preferredTimeWindow"
            value={formData.preferredTimeWindow}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20"
          >
            <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM - 01:00 PM)</option>
            <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
            <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
          </select>
        </div>
      </div>

      {/* Optional Note */}
      <div>
        <label htmlFor={`message-${variant}`} className="block text-xs font-semibold text-slate-700 mb-1">
          Doctor's Advice or Special Notes <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id={`message-${variant}`}
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention prescribing doctor name or any specific test parameters..."
          className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1769D2] focus:ring-2 focus:ring-[#1769D2]/20"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#1769D2] hover:bg-[#1258b3] active:bg-[#0e4896] shadow-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2]"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          <span>Proceed with Appointment Enquiry</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-500 text-center leading-normal">
        Your enquiry will be handled directly by our Sarita Vihar centre reception. No sensitive medical records are stored online.
      </p>
    </form>
  );
};
