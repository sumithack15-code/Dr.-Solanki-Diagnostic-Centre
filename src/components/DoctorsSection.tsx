import React from 'react';
import { Stethoscope, Award, Phone, Calendar, UserCheck } from 'lucide-react';
import { DOCTORS, CENTRE_INFO } from '../data/diagnosticData';

interface DoctorsSectionProps {
  onOpenBooking: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-[#F5F8FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071936] tracking-tight">
            Meet Our Expert Consultants
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our diagnostic centre is directed by senior postgraduate medical specialists committed to clinical precision, thorough reporting, and patient dignity.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => {
            const isRadio = doctor.department.includes('Radiology');
            return (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Card Top / Monogram & Dept */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Professional Doctor Badge Emblem */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2855] to-[#1769D2] flex items-center justify-center text-white shadow-md shrink-0">
                      <Stethoscope className="w-8 h-8 text-[#65D5E8]" aria-hidden="true" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
                        {doctor.role}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#071936] mt-0.5">
                        {doctor.name}
                      </h3>
                      {/* Qualifications Badge */}
                      <div className="inline-block mt-1 font-mono text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        {doctor.degrees}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {doctor.summary}
                  </p>

                  {/* Clinical Focus Areas */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Key Clinical Focus
                    </span>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                      {doctor.focusAreas.map((focus, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" aria-hidden="true" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={CENTRE_INFO.phoneTel}
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#0B2855] hover:text-[#1769D2] py-2 px-3 rounded-lg bg-slate-50 border border-slate-200"
                    aria-label={`Consultation enquiry for ${doctor.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1769D2]" aria-hidden="true" />
                    <span>Call Centre</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#1769D2] hover:bg-[#1258b3] py-2.5 px-4 rounded-lg shadow-xs transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Enquire Appointment</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Timings and Availability Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 max-w-2xl mx-auto text-center text-xs text-slate-600 shadow-xs">
          <p className="font-medium text-[#071936]">
            Specialist Consultation &amp; Investigation Availability
          </p>
          <p className="mt-1">
            {CENTRE_INFO.timingsNote} Please call{' '}
            <a href={CENTRE_INFO.phoneTel} className="font-bold text-[#1769D2] hover:underline">
              {CENTRE_INFO.phoneDisplay}
            </a>{' '}
            prior to your visit for timely assistance.
          </p>
        </div>

      </div>
    </section>
  );
};
