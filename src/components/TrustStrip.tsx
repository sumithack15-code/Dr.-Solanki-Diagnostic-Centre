import React from 'react';
import { Scan, FlaskConical, Stethoscope, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      title: 'Radiology Services',
      subtitle: 'Ultrasound, Color Doppler & X-Ray',
      icon: Scan
    },
    {
      title: 'Pathology Investigations',
      subtitle: 'Comprehensive diagnostic blood & lab tests',
      icon: FlaskConical
    },
    {
      title: 'Experienced Consultants',
      subtitle: 'Senior MD Radiologist & MD Pathologist',
      icon: Stethoscope
    },
    {
      title: 'Convenient Location',
      subtitle: 'Pocket G, Sarita Vihar, New Delhi',
      icon: MapPin
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-[#F5F8FC]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2855]/5 border border-[#1769D2]/20 flex items-center justify-center text-[#1769D2] shrink-0">
                  <Icon className="w-6 h-6 text-[#1769D2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#071936] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
