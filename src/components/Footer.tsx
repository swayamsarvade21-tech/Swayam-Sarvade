import React from 'react';
import { Car, Phone, MessageCircle, MapPin, Clock, Heart, ShieldCheck, Mail } from 'lucide-react';
import { CONTACT_INFO, FLEET_DATA } from '../data/fleetData';

interface FooterProps {
  onOpenBookingModal: (carId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <Car className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
                  Samartha Tours & Travels
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  24 Hours Car & Cab Service
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your premier 24-hour car hire and taxi service based in Ambernath East, Maharashtra. Serving local commutes, airport transfers (CSMI T1/T2 & Navi Mumbai), and Maharashtra-wide outstation pilgrimage and holiday tours.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available 24/7 for Immediate Cab Booking</span>
            </div>
          </div>

          {/* Column 2: Available Cars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit',sans-serif] uppercase tracking-wider text-amber-400">
              🚘 Available Cars
            </h4>
            <ul className="space-y-2 text-xs">
              {FLEET_DATA.map((car) => (
                <li key={car.id}>
                  <button
                    onClick={() => onOpenBookingModal(car.id)}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between w-full text-left py-0.5"
                  >
                    <span>{car.name}</span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      {car.countBadge || car.category}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Outstation Routes */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit',sans-serif] uppercase tracking-wider text-amber-400">
              🗺️ Top Routes
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Mumbai Airport T1/T2</a></li>
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Shirdi & Shani Shingnapur</a></li>
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Pune & Hinjewadi IT</a></li>
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Ashtavinayak Yatra</a></li>
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Mahabaleshwar & Lonavala</a></li>
              <li><a href="#fare-calculator" className="hover:text-amber-400 transition-colors">Nashik & Trimbakeshwar</a></li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit',sans-serif] uppercase tracking-wider text-amber-400">
              📞 Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                <p className="font-bold text-white">Suraj Sarvade</p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  <a href="tel:7021751532" className="text-amber-400 hover:underline">7021751532</a>
                  <span className="text-slate-600">/</span>
                  <a href="tel:9226996694" className="text-amber-400 hover:underline">9226996694</a>
                </div>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
                <p className="font-bold text-white">Shailendra Sarvade</p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  <a href="tel:9307877653" className="text-amber-400 hover:underline">9307877653</a>
                  <span className="text-slate-600">/</span>
                  <a href="tel:7045102679" className="text-amber-400 hover:underline">7045102679</a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Ambernath East, Maharashtra - 421501</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Samartha Tours & Travels. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>24 Hours Reliable Cabs & Outstation Tours in Maharashtra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
