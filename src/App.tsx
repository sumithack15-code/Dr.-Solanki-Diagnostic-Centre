/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientPreparationSection } from './components/PatientPreparationSection';
import { AppointmentCtaSection } from './components/AppointmentCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DiagnosticService } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);
  const [activeDetailService, setActiveDetailService] = useState<DiagnosticService | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingServiceId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-slate-800">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Premium Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 4. Trust / Highlight Strip */}
        <TrustStrip />

        {/* 5. About the Diagnostic Centre */}
        <AboutSection />

        {/* 6. Comprehensive Services Section */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
          onSelectServiceModal={(service) => setActiveDetailService(service)}
        />

        {/* 7. Our Doctors Section */}
        <DoctorsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Preparation Guide */}
        <PatientPreparationSection />

        {/* 8. Appointment CTA Banner */}
        <AppointmentCtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating Quick Action Buttons (WhatsApp & Call) */}
      <FloatingActions />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        serviceId={selectedBookingServiceId}
      />

      {/* Service Detail / Clinical Preparation Guidance Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBookService={(serviceId) => handleOpenBooking(serviceId)}
      />
    </div>
  );
}
