import React, { useState } from 'react';
import { Users, Briefcase, Wind, Fuel, ShieldCheck, Check, MessageCircle, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO } from '../data/fleetData';
import { Car } from '../types';
import { openWhatsAppChat, generateWhatsAppMessage } from '../utils/bookingHelper';

interface FleetSectionProps {
  onSelectCar: (carId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [acToggleErtiga, setAcToggleErtiga] = useState<'AC' | 'Non-AC'>('AC');

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV / MUV'];

  const filteredFleet = FLEET_DATA.filter((car) => {
    if (selectedCategory === 'All') return true;
    return car.category === selectedCategory;
  });

  const handleDirectWhatsAppCar = (car: Car) => {
    const msg = generateWhatsAppMessage(
      {
        fullName: 'Customer',
        pickupLocation: 'Ambernath East',
        dropLocation: 'Outstation / Local',
        selectedCarId: car.name,
        acPreference: car.id === 'ertiga' ? acToggleErtiga : 'AC',
      },
      car
    );
    openWhatsAppChat('917021751532', msg);
  };

  return (
    <section id="cars" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Verified Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Available Cars & Cabs (24/7)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From budget-friendly Maruti WagonR VXI (Plate No: MH 05 5229) to premium 7-seater family SUVs like Innova Crysta and Ertiga. All vehicles are in clean white, equipped with commercial yellow number plates, sanitized, and driver-equipped.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-fleet-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-amber-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFleet.map((car) => {
            const isErtiga = car.id === 'ertiga';

            return (
              <div
                key={car.id}
                id={`car-card-${car.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges Container */}
                <div className="relative h-52 sm:h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                  {/* Top Left Tag / Count */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {car.countBadge ? (
                      <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-extrabold shadow-md">
                        {car.countBadge}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-sm">
                        {car.category}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md bg-yellow-400 text-slate-950 text-[10px] font-black tracking-wider uppercase shadow-sm border border-yellow-500">
                      🚖 Yellow No. Plate
                    </span>
                    {car.popular && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-bold shadow-sm">
                        Most Booked
                      </span>
                    )}
                  </div>

                  {/* Pricing Overview on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-xs text-slate-300 font-medium">Starting from</p>
                      <p className="text-xl font-bold text-amber-400 font-['Outfit',sans-serif]">
                        ₹{car.baseRatePerKm} <span className="text-xs font-normal text-slate-200">/ km</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-slate-900/80 px-2 py-1 rounded text-slate-200 border border-slate-700">
                        Airport ~ ₹{car.airportDropAmbernath}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                        {car.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {car.description}
                    </p>

                    {/* Special AC / Non-AC Switch for Ertiga */}
                    {isErtiga && (
                      <div className="mt-3 p-2.5 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-900">AC Preference:</span>
                        <div className="inline-flex rounded-lg bg-white p-0.5 border border-amber-300 text-xs font-semibold">
                          <button
                            type="button"
                            onClick={() => setAcToggleErtiga('AC')}
                            className={`px-2.5 py-1 rounded-md transition-all ${
                              acToggleErtiga === 'AC'
                                ? 'bg-amber-500 text-slate-950 font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Full AC
                          </button>
                          <button
                            type="button"
                            onClick={() => setAcToggleErtiga('Non-AC')}
                            className={`px-2.5 py-1 rounded-md transition-all ${
                              acToggleErtiga === 'Non-AC'
                                ? 'bg-amber-500 text-slate-950 font-bold'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Non-AC (Budget)
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                        <Users className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="truncate font-medium">{car.seats}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                        <Wind className="w-4 h-4 text-sky-600 shrink-0" />
                        <span className="truncate font-medium">
                          {isErtiga ? `${acToggleErtiga} Available` : car.acType}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                        <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="truncate font-medium">{car.luggage}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                        <Fuel className="w-4 h-4 text-purple-600 shrink-0" />
                        <span className="truncate font-medium">{car.fuelType}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-3 space-y-1">
                      {car.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`book-car-modal-btn-${car.id}`}
                        onClick={() => onSelectCar(car.id)}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1"
                      >
                        <span>Book Car</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>

                      <button
                        id={`whatsapp-car-btn-${car.id}`}
                        onClick={() => handleDirectWhatsAppCar(car)}
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-500">
                      💡 Ideal for: <span className="font-medium text-slate-700">{car.bestFor}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24/7 Booking Assurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-2xl p-6 sm:p-8 text-slate-950 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider bg-slate-950 text-amber-400 px-3 py-1 rounded-full">
              24 Hours Available Across Maharashtra
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-['Outfit',sans-serif]">
              Need a cab right now in Ambernath or nearby?
            </h3>
            <p className="text-sm font-medium text-slate-900">
              Call Suraj Sarvade or Shailendra Sarvade for immediate cab allocation and zero wait times.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="fleet-banner-call-suraj"
              href="tel:7021751532"
              className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Suraj: 7021751532</span>
            </a>
            <a
              id="fleet-banner-call-shailendra"
              href="tel:9307877653"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Shailendra: 9307877653</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
