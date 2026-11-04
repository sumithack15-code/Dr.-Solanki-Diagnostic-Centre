import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CENTRE_INFO, SERVICES, DOCTORS } from '../data/diagnosticData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071936] text-slate-300 pt-16 pb-12 border-t border-[#0B2855]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0B2855]">
          
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2855] to-[#1769D2] flex items-center justify-center text-white shadow-sm shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#65D5E8]"
                  aria-hidden="true"
                >
                  <path d="M12 4v16m-8-8h16" />
                  <circle cx="12" cy="12" r="3" fill="#0B2855" stroke="#65D5E8" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">
                  Dr. Solanki’s
                </span>
                <span className="text-xs font-semibold text-[#65D5E8] tracking-wider uppercase">
                  Diagnostic Centre
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Radiology and Pathology Centre in Sarita Vihar, New Delhi. Delivering accurate ultrasound imaging, color Doppler, digital X-ray, ECG, 2D Echo, and clinical laboratory investigations.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>
                <strong className="text-white">Consultants:</strong> Dr. Priyanka Rana (MD Radiodiagnosis) &amp; Dr. Vikrant Solanki (MD Pathology)
              </div>
              <div className="text-slate-400 italic">
                {CENTRE_INFO.timingsNote}
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Diagnostic Services</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a>
              </li>
              <li>
                <a href="#preparation" className="hover:text-white transition-colors">Test Preparation Guide</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Diagnostic Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Diagnostic Tests
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Centre Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65D5E8] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  G-56, Pocket G, Sarita Vihar,<br />
                  New Delhi, Delhi 110076, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#65D5E8] shrink-0" aria-hidden="true" />
                <a href={CENTRE_INFO.phoneTel} className="text-white font-semibold hover:text-[#65D5E8]">
                  {CENTRE_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CENTRE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#65D5E8] hover:text-white"
                >
                  <span>Google Maps Directions</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Dr. Solanki’s Diagnostic Centre. All rights reserved. Sarita Vihar, New Delhi.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Radiology &amp; Pathology Excellence</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
