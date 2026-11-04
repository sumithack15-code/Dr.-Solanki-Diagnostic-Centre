import React from 'react';
import { CheckCircle2, Building2, UserCheck, Stethoscope, Clock } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'Radiology & pathology under one roof',
      desc: 'Eliminates travelling between different centers for imaging and laboratory tests.'
    },
    {
      title: 'Consultant-led diagnostic services',
      desc: 'Supervised and reported directly by MD Radiologist and MD Pathologist.'
    },
    {
      title: 'Multiple imaging and investigation options',
      desc: 'From high-definition ultrasound & color Doppler to digital X-ray, ECG & routine blood panels.'
    },
    {
      title: 'Convenient appointment assistance',
      desc: 'Direct telephone and WhatsApp scheduling to ensure minimal waiting time.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F5F8FC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/pathology_lab_microscope_1793704561599.jpg"
                alt="Pathology laboratory workstation at Dr. Solanki's Diagnostic Centre"
                className="w-full h-[320px] sm:h-[360px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071936]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-[#65D5E8] font-bold">
                  Laboratory Diagnostic Care
                </span>
                <p className="text-sm text-slate-100 font-medium">
                  Precision pathology, biochemistry &amp; clinical microscopy.
                </p>
              </div>
            </div>

            {/* Secondary Image & Quick Stats Tile */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200/80 relative">
                <img
                  src="/src/assets/images/digital_radiology_suite_1793704560355.jpg"
                  alt="Radiology and X-Ray examination suite"
                  className="w-full h-32 sm:h-36 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-[#071936]/85 backdrop-blur-xs text-[11px] text-white px-2 py-0.5 rounded font-medium">
                  Digital Radiography
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#1769D2] font-bold text-sm mb-1">
                  <Building2 className="w-4 h-4 text-[#1769D2]" aria-hidden="true" />
                  <span>Sarita Vihar, Delhi</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Located at G-56, Pocket G with easy accessibility and neighborhood convenience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2">
                About The Diagnostic Centre
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071936] tracking-tight text-balance">
                Advanced Diagnostics. A Patient-First Approach.
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              {CENTRE_INFO.aboutText}
            </p>

            {/* Highlights List */}
            <div className="space-y-3.5 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1769D2] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#071936]">
                      {h.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timings Note Banner */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#1769D2] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-[#071936]">Timings &amp; Consultations:</span>{' '}
                <span>{CENTRE_INFO.timingsNote}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
