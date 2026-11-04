import React, { useState } from 'react';
import {
  Scan,
  Baby,
  Layers,
  Activity,
  FileText,
  HeartPulse,
  Heart,
  Microscope,
  Phone,
  Info,
  Calendar,
  Check
} from 'lucide-react';
import { SERVICES, CENTRE_INFO } from '../data/diagnosticData';
import { DiagnosticService } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectServiceModal: (service: DiagnosticService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onSelectServiceModal
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Radiology' | 'Cardiology' | 'Pathology'>('All');

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scan':
        return Scan;
      case 'Baby':
        return Baby;
      case 'Layers':
        return Layers;
      case 'Activity':
        return Activity;
      case 'FileText':
        return FileText;
      case 'HeartPulse':
        return HeartPulse;
      case 'Heart':
        return Heart;
      case 'Microscope':
        return Microscope;
      default:
        return Scan;
    }
  };

  const filteredServices = activeTab === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2] mb-2">
            Clinical Diagnostic Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071936] tracking-tight">
            Comprehensive Diagnostic Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Delivering accurate, consultant-supervised clinical imaging and laboratory investigations with patient comfort and clinical clarity.
          </p>

          {/* Interactive Category Filter (Functional Buttons with Active States) */}
          <div className="inline-flex items-center gap-1.5 p-1.5 mt-8 bg-slate-100/90 rounded-xl border border-slate-200/70">
            {(['All', 'Radiology', 'Cardiology', 'Pathology'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2] ${
                  activeTab === tab
                    ? 'bg-white text-[#0B2855] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-[#0B2855] hover:bg-white/50'
                }`}
              >
                {tab === 'All' ? 'All Services' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769D2]/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Service Image Container */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={`${service.name} diagnostic investigation at Dr. Solanki's Diagnostic Centre`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#071936] to-[#0B2855] flex items-center justify-center">
                        <Icon className="w-12 h-12 text-[#65D5E8]/60" aria-hidden="true" />
                      </div>
                    )}
                    
                    {/* Contrast Gradient Scrim */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#071936]/80 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold text-white bg-[#071936]/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    {/* Icon Emblem Badge */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-[#071936]/90 backdrop-blur-xs border border-white/20 flex items-center justify-center text-[#65D5E8] shadow-sm">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 pb-0">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#071936] group-hover:text-[#1769D2] transition-colors leading-snug">
                      {service.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Actions & Enquiry Links */}
                <div className="p-5 pt-4">
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectServiceModal(service)}
                        className="text-xs font-semibold text-[#1769D2] hover:text-[#0B2855] inline-flex items-center gap-1 py-1 focus-visible:outline-none focus-visible:underline"
                      >
                        <Info className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Prep &amp; Details</span>
                      </button>

                      <a
                        href={CENTRE_INFO.phoneTel}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0B2855] inline-flex items-center gap-1 py-1"
                        aria-label={`Call to enquire about ${service.name}`}
                      >
                        <Phone className="w-3.5 h-3.5 text-[#1769D2]" aria-hidden="true" />
                        <span>Call to Enquire</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.id)}
                      className="w-full mt-1 py-2 px-3 text-xs font-semibold text-[#0B2855] bg-slate-50 hover:bg-[#1769D2] hover:text-white rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2]"
                    >
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Book this Test</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note at bottom */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Note: Diagnostic investigations are carried out upon physician advice and clinical indication. {CENTRE_INFO.timingsNote}
          </p>
        </div>

      </div>
    </section>
  );
};
