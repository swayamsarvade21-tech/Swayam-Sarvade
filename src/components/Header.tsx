import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, Car, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/fleetData';

interface HeaderProps {
  onOpenBookingModal: (carId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-semibold px-2.5 py-0.5 rounded-full border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24 Hours Available
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Ambernath East, Maharashtra & Outstation
            </span>
          </div>

          {/* Quick Phone Access */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              id="header-call-suraj"
              href="tel:7021751532"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Suraj: <strong>7021751532</strong></span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              id="header-call-shailendra"
              href="tel:9307877653"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Shailendra: <strong>9307877653</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-none font-['Outfit',sans-serif]">
                  Samartha Tours & Travels
                </span>
              </div>
              <p className="text-xs text-amber-600 font-semibold tracking-wide uppercase mt-0.5">
                24 Hours Car & Cab Service
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#cars" className="hover:text-amber-600 transition-colors">
              Available Cars
            </a>
            <a href="#fare-calculator" className="hover:text-amber-600 transition-colors">
              Fare Estimator
            </a>
            <a href="#why-us" className="hover:text-amber-600 transition-colors">
              Why Choose Us
            </a>
            <a href="#reviews" className="hover:text-amber-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/917021751532?text=Hello%20Samartha%20Tours%20%26%20Travels,%20I%20want%20to%20inquire%20about%20cab%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <button
              id="header-book-btn"
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all hover:shadow"
            >
              <Clock className="w-4 h-4" />
              <span>Book Cab 24x7</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="header-mobile-book-btn"
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Book 24/7
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
              <a
                href="#cars"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                🚘 Available Cars (WagonR 5229, Dzire, Ertiga, Innova)
              </a>
              <a
                href="#fare-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                🧮 Fare & Rate Estimator
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                ⭐ Why Choose Us
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                💬 Customer Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                📍 Contact & Location
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-xs text-amber-900 font-semibold mb-2">Direct Booking Hotlines:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:7021751532"
                    className="flex items-center justify-center gap-1 py-2 px-2.5 bg-white rounded-lg font-bold text-slate-900 shadow-sm border border-slate-200"
                  >
                    <Phone className="w-3 h-3 text-amber-600" />
                    Suraj: 7021751532
                  </a>
                  <a
                    href="tel:9307877653"
                    className="flex items-center justify-center gap-1 py-2 px-2.5 bg-white rounded-lg font-bold text-slate-900 shadow-sm border border-slate-200"
                  >
                    <Phone className="w-3 h-3 text-amber-600" />
                    Shailendra: 9307877653
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://wa.me/917021751532?text=Hello%20Samartha%20Tours%20%26%20Travels,%20I%20want%20to%20inquire%20about%20cab%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="py-2.5 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
