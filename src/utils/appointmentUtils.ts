import { EnquiryFormData } from '../types';
import { SERVICES, CENTRE_INFO } from '../data/diagnosticData';

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryFormData, string>>;
}

/**
 * Sanitizes phone numbers by stripping spaces, hyphens, and standard country code prefixes.
 */
export function sanitizeIndianPhoneNumber(rawPhone: string): string {
  if (!rawPhone) return '';
  // Remove non-digit characters
  const digitsOnly = rawPhone.replace(/\D/g, '');
  
  // If 12 digits starting with 91 (e.g. 919876543210), strip 91
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return digitsOnly.slice(2);
  }
  // If 11 digits starting with 0 (e.g. 09876543210), strip 0
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return digitsOnly.slice(1);
  }
  return digitsOnly;
}

/**
 * Validates appointment enquiry form fields.
 */
export function validateEnquiryForm(formData: EnquiryFormData): ValidationResult {
  const errors: Partial<Record<keyof EnquiryFormData, string>> = {};

  // Name validation
  const trimmedName = formData.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter patient name';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Patient name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
    errors.fullName = 'Name should contain letters only';
  }

  // Phone validation
  const cleanPhone = sanitizeIndianPhoneNumber(formData.phoneNumber);
  if (!cleanPhone) {
    errors.phoneNumber = 'Please enter a contact phone number';
  } else if (cleanPhone.length !== 10) {
    errors.phoneNumber = 'Please enter a valid 10-digit mobile number';
  } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    errors.phoneNumber = 'Phone number should start with 6, 7, 8, or 9';
  }

  // Service validation
  if (!formData.serviceId) {
    errors.serviceId = 'Please select a diagnostic service';
  } else {
    const serviceExists = SERVICES.some((s) => s.id === formData.serviceId);
    if (!serviceExists && formData.serviceId !== 'general-enquiry') {
      errors.serviceId = 'Please select a valid service from the list';
    }
  }

  // Preferred Date validation
  if (!formData.preferredDate) {
    errors.preferredDate = 'Please select a preferred date';
  } else {
    const selectedDate = new Date(formData.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Check if invalid date
    if (isNaN(selectedDate.getTime())) {
      errors.preferredDate = 'Please choose a valid date';
    } else {
      const selectedDay = new Date(selectedDate);
      selectedDay.setHours(0, 0, 0, 0);
      if (selectedDay < today) {
        errors.preferredDate = 'Date cannot be in the past';
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Builds a direct WhatsApp message URL with pre-filled enquiry text.
 */
export function buildWhatsAppEnquiryUrl(formData: EnquiryFormData): string {
  const service = SERVICES.find((s) => s.id === formData.serviceId);
  const serviceName = service ? service.name : 'General Diagnostic Enquiry';

  const lines = [
    `*Appointment Enquiry - Dr. Solanki's Diagnostic Centre*`,
    ``,
    `*Patient Name:* ${formData.fullName.trim()}`,
    `*Phone:* ${formData.phoneNumber.trim()}`,
    `*Test / Service:* ${serviceName}`,
    `*Preferred Date:* ${formData.preferredDate}`
  ];

  if (formData.preferredTimeWindow) {
    lines.push(`*Preferred Time:* ${formData.preferredTimeWindow}`);
  }

  if (formData.message && formData.message.trim()) {
    lines.push(`*Notes / Symptoms:* ${formData.message.trim()}`);
  }

  lines.push(``);
  lines.push(`Kindly confirm availability and pre-test instructions. Thank you.`);

  const messageText = lines.join('\n');
  const encodedText = encodeURIComponent(messageText);

  return `https://wa.me/${CENTRE_INFO.rawPhone}?text=${encodedText}`;
}

/**
 * Format Indian phone number for display (e.g. +91 96540 02800)
 */
export function formatDisplayPhone(rawPhone: string): string {
  const digits = sanitizeIndianPhoneNumber(rawPhone);
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return rawPhone;
}
