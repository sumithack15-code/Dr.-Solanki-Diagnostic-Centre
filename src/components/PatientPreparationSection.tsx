import React from 'react';
import { AlertCircle, FileCheck, Droplets, UtensilsCrossed, Sparkles } from 'lucide-react';

export const PatientPreparationSection: React.FC = () => {
  const preparationGuidelines = [
    {
      title: 'Ultrasound Investigations',
      icon: Droplets,
      badge: 'Abdomen / Pelvic',
      points: [
        'Whole Abdomen: 4 to 6 hours of fasting recommended prior to appointment.',
        'Pelvis / KUB / Early Pregnancy: Drink 3-4 glasses of water 45 minutes prior to ensure a comfortably full bladder.',
        'Wear comfortable two-piece clothing for ease of examination.'
      ]
    },
    {
      title: 'Pathology & Blood Tests',
      icon: UtensilsCrossed,
      badge: 'Fasting / Routine',
      points: [
        'Fasting Blood Sugar / Lipid / Thyroid tests: 8-10 hours overnight fasting required (plain water is permitted).',
        'Continue doctor-prescribed regular medications unless specifically advised otherwise.',
        'Early morning sample collection provides optimal diagnostic accuracy.'
      ]
    },
    {
      title: 'Digital X-Ray & ECG',
      icon: Sparkles,
      badge: 'Radiography / Cardiac',
      points: [
        'Digital X-Ray: Remove metal accessories, chains, and belts from the scan region.',
        'Pregnancy Disclosure: Female patients must inform the technical team before any X-ray if pregnancy is suspected.',
        'ECG: Avoid greasy creams or moisturizers on the chest on the morning of testing.'
      ]
    },
    {
      title: 'What to Bring Along',
      icon: FileCheck,
      badge: 'Essential Documents',
      points: [
        'Original doctor prescription or clinical referral note.',
        'Any prior ultrasound, X-ray, or blood investigation reports for clinical comparison.',
        'Valid photo ID and insurance/corporate cashless documentation if applicable.'
      ]
    }
  ];

  return (
    <section id="preparation" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2">
            Patient Support &amp; Instructions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071936] tracking-tight">
            Preparing for Your Diagnostic Test
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Simple preparation ensures accurate results and minimal waiting time during your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preparationGuidelines.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F8FC] rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#1769D2]/20 flex items-center justify-center text-[#1769D2] shadow-xs">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      {guide.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#071936] mb-3">
                    {guide.title}
                  </h3>

                  <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                    {guide.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#1769D2] font-bold shrink-0 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 max-w-2xl mx-auto text-center text-xs text-slate-700 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#1769D2] shrink-0" aria-hidden="true" />
          <span>
            Have questions about a specific test? Call our reception at{' '}
            <strong className="text-[#071936]">+91 9654002800</strong> for personalized guidance.
          </span>
        </div>

      </div>
    </section>
  );
};
