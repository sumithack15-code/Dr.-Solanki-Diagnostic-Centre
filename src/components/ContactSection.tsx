import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';
import { EnquiryForm } from './EnquiryForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2">
            Location &amp; Appointments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071936] tracking-tight">
            Visit Our Diagnostic Centre
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Conveniently situated in Pocket G, Sarita Vihar, New Delhi. Walk-ins and appointments are welcome with physician prescription.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Contact Cards & Google Maps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Details Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B2855]/5 border border-[#1769D2]/20 flex items-center justify-center text-[#1769D2] mb-3">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#071936] mb-1">
                    Centre Address
                  </h3>
                  <address className="not-italic text-xs text-slate-600 leading-relaxed">
                    <strong>Dr. Solanki’s Diagnostic Centre</strong><br />
                    G-56, Pocket G, Sarita Vihar,<br />
                    New Delhi, Delhi 110076, India
                  </address>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={CENTRE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] hover:text-[#0B2855] transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Phone & Timings Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B2855]/5 border border-[#1769D2]/20 flex items-center justify-center text-[#1769D2] mb-3">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#071936] mb-1">
                    Phone &amp; Enquiries
                  </h3>
                  <div className="space-y-1">
                    <a
                      href={CENTRE_INFO.phoneTel}
                      className="block text-base font-extrabold text-[#1769D2] hover:underline"
                    >
                      {CENTRE_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500 block">
                      Direct line for ultrasound &amp; pathology
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-1.5 text-xs text-slate-600 leading-tight">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{CENTRE_INFO.timingsNote}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded Google Maps with Get Directions bar */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#071936] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#1769D2]" aria-hidden="true" />
                  Google Maps Location: Pocket G, Sarita Vihar
                </span>
                <a
                  href={CENTRE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1769D2] hover:bg-[#1258b3] transition-colors inline-flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-72 sm:h-80 relative bg-slate-100">
                <iframe
                  title="Dr. Solanki's Diagnostic Centre Location Map"
                  src="https://maps.google.com/maps?q=G-56,%20Pocket%20G,%20Sarita%20Vihar,%20New%20Delhi,%20Delhi%20110076&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Appointment Enquiry Form */}
          <div className="lg:col-span-5">
            <EnquiryForm variant="inline" />
          </div>

        </div>

      </div>
    </section>
  );
};
