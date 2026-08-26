import React, { useState } from 'react';
import { Compass, MapPin, Clock, ArrowRight, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { POPULAR_PACKAGES } from '../data/packagesData';
import { TourPackage } from '../types';
import { openWhatsAppChat } from '../utils/bookingHelper';

interface TourPackagesSectionProps {
  onOpenBookingModal: (carId?: string) => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pilgrimage', 'Hill Station', 'Airport', 'Beach'];

  const filteredPackages = POPULAR_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    return pkg.category === selectedCategory;
  });

  const handlePackageWhatsApp = (pkg: TourPackage) => {
    const text = `*🚕 TOUR PACKAGE INQUIRY - Samartha Tours & Travels*\n----------------------------------------\n*📦 Package:* ${pkg.title}\n*⏳ Duration:* ${pkg.duration}\n*📍 Origin:* Ambernath East, Maharashtra\n*🚗 Recommended Car:* ${pkg.recommendedCar}\n*💰 Starting Price:* From ₹${pkg.startingPrice}\n----------------------------------------\n_Please send me customized tour itinerary and best group rate._`;
    openWhatsAppChat('917021751532', text);
  };

  return (
    <section id="packages" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Maharashtra Tour Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Popular Outstation & Pilgrimage Tours
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Customized round trips from Ambernath, Kalyan & Mumbai. Experienced highway drivers who know all temple schedules, ghat roads, and scenic stopovers.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-pkg-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-amber-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`pkg-card-${pkg.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold shadow-sm">
                    {pkg.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-300 block">From Ambernath</span>
                    <span className="text-lg font-bold text-amber-400 font-['Outfit',sans-serif]">
                      ₹{pkg.startingPrice}+
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif] group-hover:text-amber-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mt-0.5">{pkg.tagline}</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {pkg.distanceApprox}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Tour Highlights:
                    </p>
                    {pkg.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 p-2 bg-slate-50 rounded-lg text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Recommended Cab: </span>
                    <span className="text-amber-700 font-medium">{pkg.recommendedCar}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    id={`book-pkg-btn-${pkg.id}`}
                    onClick={() => onOpenBookingModal()}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all text-center"
                  >
                    Custom Itinerary
                  </button>

                  <button
                    id={`whatsapp-pkg-btn-${pkg.id}`}
                    onClick={() => handlePackageWhatsApp(pkg)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
