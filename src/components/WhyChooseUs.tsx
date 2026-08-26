import React from 'react';
import { Clock, ShieldCheck, HeartHandshake, Sparkles, MapPin, BadgePercent, CheckCircle, Car } from 'lucide-react';
import { CONTACT_INFO } from '../data/fleetData';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '24 Hours / 7 Days Availability',
      description: 'Need an early 4 AM airport drop or a 2 AM emergency pickup? Our cabs and drivers are ready on standby in Ambernath round the clock.',
      badge: '24x7 Ready',
    },
    {
      icon: Car,
      title: '100% White Fleet with Yellow Plates',
      description: 'From 2 × WagonR (Plate No: MH 05 5229) for economical daily runs to Dzire sedan, Ertiga (AC/Non-AC), and Innova Crysta luxury SUV.',
      badge: 'Well-Maintained',
    },
    {
      icon: ShieldCheck,
      title: 'Verified & Courteous Drivers',
      description: 'Professional, experienced drivers with deep local knowledge of Mumbai traffic, ghat roads (Kasara, Khandala), and pilgrimage routes.',
      badge: 'Safety First',
    },
    {
      icon: BadgePercent,
      title: 'Zero Hidden Charges & Fixed Rates',
      description: 'Honest billing with transparent kilometer tracking. No surge prices or unexpected surcharges after booking confirmation.',
      badge: 'Transparent',
    },
    {
      icon: MapPin,
      title: 'Doorstep Pickup & Drop',
      description: 'Punctual doorstep pickup across Ambernath East & West, Badlapur, Ulhasnagar, Kalyan, Dombivli, and all Mumbai suburbs.',
      badge: 'On-Time',
    },
    {
      icon: Sparkles,
      title: 'Sanitized & Chilled AC Cabs',
      description: 'Clean interiors, fresh fragrance, working air conditioning, and spacious luggage room for peaceful journeys with your family.',
      badge: 'Hygiene Assured',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
            The Samartha Promise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Why Travelers Choose Samartha Tours & Travels
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Trusted by hundreds of families, pilgrims, corporate travelers, and vacationers in Ambernath and Mumbai.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                id={`feature-card-${idx}`}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed by Suraj & Shailendra Sarvade</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
