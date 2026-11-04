import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

interface HeroSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative bg-[#071936] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#0B2855]"
    >
      {/* Subtle ambient lighting gradients */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769D2]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#65D5E8]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-[#65D5E8] font-semibold tracking-wide uppercase">
                Radiology &amp; Pathology Centre
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#65D5E8]" aria-hidden="true" />
                Pocket G, Sarita Vihar
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-300">New Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Clarity in Diagnosis. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#65D5E8]">
                Confidence in Care.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Comprehensive diagnostic services with a patient-first approach.
              From advanced ultrasound imaging to pathology investigations, we’re
              here to support your healthcare journey.
            </p>

            {/* Doctors Quick Summary */}
            <div className="py-2.5 px-4 rounded-xl bg-[#0B2855]/70 border border-[#1769D2]/30 max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#65D5E8] mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#65D5E8]" aria-hidden="true" />
                <span>Senior Consultant Directed</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <strong className="text-white block font-semibold">Dr. Priyanka Rana</strong>
                  <span className="text-slate-300 text-xs">MBBS, MD (Radiodiagnosis)</span>
                </div>
                <div>
                  <strong className="text-white block font-semibold">Dr. Vikrant Solanki</strong>
                  <span className="text-slate-300 text-xs">MBBS, MD (Pathology)</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#1769D2] hover:bg-[#1258b3] shadow-lg shadow-[#1769D2]/25 hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D5E8]"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-[#0B2855] hover:bg-[#0f346d] hover:text-white border border-[#1769D2]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D5E8]"
              >
                <span>Explore Our Services</span>
              </a>

              <a
                href={CENTRE_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-sm font-semibold text-[#65D5E8] hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D5E8]"
                aria-label={`Call ${CENTRE_INFO.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{CENTRE_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Timings transparency notice */}
            <p className="text-xs text-slate-400 italic pt-1">
              {CENTRE_INFO.timingsNote}
            </p>

          </div>

          {/* Right Column: High-Impact Clinical Photographic Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#0B2855] bg-[#0B2855]/40 shadow-2xl group">
              <img
                src="/src/assets/images/hero_diagnostic_ultrasound_1793704560156.jpg"
                alt="State of the art ultrasound diagnostics suite at Dr. Solanki's Diagnostic Centre"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071936] via-[#071936]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Inset Credential Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071936]/90 backdrop-blur-md border border-[#1769D2]/40 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#65D5E8]" aria-hidden="true" />
                    Radiology &amp; Ultrasound Diagnostics
                  </span>
                  <span className="text-[#65D5E8] font-mono text-[11px]">Sarita Vihar</span>
                </div>
                <p className="text-slate-300 leading-snug">
                  Precision imaging overseen by qualified MD Radiologist &amp; MD Pathologist.
                </p>
              </div>
            </div>

            {/* Quick floating pill */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -right-2 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl border border-slate-200">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <div className="text-xs">
                <span className="font-bold block text-slate-900">Appointment Assistance</span>
                <span className="text-slate-500 font-medium">Quick telephone enquiry</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
