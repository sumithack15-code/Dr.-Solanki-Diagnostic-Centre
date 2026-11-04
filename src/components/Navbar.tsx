import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CENTRE_INFO } from '../data/diagnosticData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Preparation', href: '#preparation' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-6">
          
          {/* Zone 1: Brand Wordmark with Medical Emblem */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2] rounded-lg p-0.5 min-w-0"
            aria-label="Dr. Solanki's Diagnostic Centre - Home"
          >
            {/* Medical Diagnostic Emblem */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0B2855] to-[#1769D2] flex items-center justify-center text-white shadow-md shadow-[#0B2855]/20 group-hover:scale-105 transition-transform shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#65D5E8]"
                aria-hidden="true"
              >
                <path d="M12 4v16m-8-8h16" />
                <circle cx="12" cy="12" r="3" fill="#0B2855" stroke="#65D5E8" strokeWidth="2" />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col whitespace-nowrap truncate">
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-[#071936] leading-tight">
                Dr. Solanki’s
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#1769D2]">
                Diagnostic Centre
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap hover:text-[#1769D2] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Call for Desktop */}
            <a
              href={CENTRE_INFO.phoneTel}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B2855] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              aria-label={`Call ${CENTRE_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#1769D2]" aria-hidden="true" />
              <span>{CENTRE_INFO.phoneDisplay}</span>
            </a>

            {/* Primary Action Button (Desktop & Tablet) */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1769D2] hover:bg-[#1258b3] active:bg-[#0e4896] rounded-lg shadow-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Call Icon CTA */}
            <a
              href={CENTRE_INFO.phoneTel}
              className="sm:hidden p-2 rounded-lg text-[#1769D2] bg-blue-50 hover:bg-blue-100 transition-colors"
              aria-label={`Call ${CENTRE_INFO.phoneDisplay}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#1769D2] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2]"
              aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#1769D2] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#1769D2] text-sm font-bold text-white shadow-sm hover:bg-[#1258b3] transition-colors"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={CENTRE_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 text-xs font-bold text-[#071936] hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1769D2]" aria-hidden="true" />
              <span>Call Reception: {CENTRE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
