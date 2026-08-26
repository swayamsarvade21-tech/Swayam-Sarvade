import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, Car, Shield, Sparkles, ArrowRight, CheckCircle2, Award, Star } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO } from '../data/fleetData';
import { openWhatsAppChat, generateWhatsAppMessage } from '../utils/bookingHelper';
import heroAdImg from '../assets/images/hero_wagonr_5229_plate_pro_1787756407346.jpg';

interface HeroProps {
  onSelectCarAndBook: (carId: string) => void;
  onOpenBookingModal: (carId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCarAndBook, onOpenBookingModal }) => {
  const [pickup, setPickup] = useState('Ambernath East');
  const [destination, setDestination] = useState('Mumbai Airport / Pune');
  const [selectedCar, setSelectedCar] = useState('wagonr');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'airport-transfer' | 'local-rental'>('one-way');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleHeroQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const carObj = FLEET_DATA.find((c) => c.id === selectedCar);
    const msg = generateWhatsAppMessage(
      {
        fullName: 'Website Visitor',
        pickupLocation: pickup,
        dropLocation: destination,
        pickupDate: date,
        tripType: tripType,
        selectedCarId: carObj?.name || 'Selected Car',
        acPreference: 'AC',
      },
      carObj
    );
    openWhatsAppChat('917021751532', msg);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-6 pb-16 lg:py-16">
      {/* Subtle Background Pattern & Glows */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Front Page Featured Advertisement Banner */}
        <div className="mb-10 relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content inside Banner */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-4 text-left z-10">
              <div className="inline-flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-slate-950" />
                  Official 24/7 Cab Service
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-black text-xs shadow-sm border border-yellow-500">
                  🚖 WagonR Plate: MH 05 5229
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] tracking-tight text-white leading-tight">
                Samartha <span className="text-amber-400">Tours & Travels</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Experience safe, comfortable, and sanitized outstation and local travel from <strong>Ambernath East</strong> across Maharashtra. Featuring our clean white <strong>Maruti Suzuki WagonR VXI (Plate: MH 05 5229)</strong>, Dzire sedan, Ertiga (AC/Non-AC), and Innova Crysta — all 100% white with commercial yellow number plates.
              </p>

              {/* Advertisement Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="bg-slate-800/90 border border-amber-500/50 p-2.5 rounded-xl">
                  <p className="text-amber-400 font-bold">2 × WagonR VXI</p>
                  <p className="text-[11px] text-yellow-300 font-semibold">Plate: MH 05 5229</p>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl">
                  <p className="text-amber-400 font-bold">Ertiga & Innova</p>
                  <p className="text-[11px] text-slate-300">6 & 7 Seater Luxury</p>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                  <p className="text-emerald-400 font-bold">24x7 Ready Pickup</p>
                  <p className="text-[11px] text-slate-300">Direct Local Drivers</p>
                </div>
              </div>

              {/* Instant Call CTA inside Banner */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  id="hero-banner-call-suraj"
                  href="tel:7021751532"
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Suraj: 7021751532</span>
                </a>
                <a
                  id="hero-banner-call-shailendra"
                  href="tel:9307877653"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-600 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Shailendra: 9307877653</span>
                </a>
              </div>
            </div>

            {/* Right Advertisement Visual (WagonR VXI MH 05 5229 + Smiling Model Photo) */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px] overflow-hidden">
              <img
                src={heroAdImg}
                alt="Samartha Tours & Travels - White Maruti Suzuki WagonR VXI taxi No MH 05 5229 with executive professional corporate model"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-amber-500/60 p-3 rounded-2xl shadow-xl text-left">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <p className="text-xs font-bold text-amber-400">Maruti WagonR VXI</p>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="bg-yellow-400 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded border border-yellow-500">
                    MH 05 5229
                  </span>
                  <span className="text-[11px] text-slate-200">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Fleet Quick Tags & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fleet Overview & Driver Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Fleet badges */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Our 100% White Car Fleet (Yellow Commercial Plates)
                </h3>
                <span className="text-xs text-slate-400 font-medium">Ambernath Base</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/50 hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-300">2x WagonR VXI</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">₹11/km</span>
                  </div>
                  <p className="text-[11px] text-yellow-300 font-medium mt-1">Plate: MH 05 5229</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-400/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">Maruti Dzire</span>
                    <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">₹13/km</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Spacious Boot Sedan</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/40 hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-300">Ertiga (AC/Non-AC)</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">₹15/km</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">6+1 Family MUV</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-400/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">Innova Crysta</span>
                    <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">₹18/km</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">7+1 Luxury SUV</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards (Suraj & Shailendra) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Suraj Sarvade */}
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 hover:border-amber-500/40 transition-all text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Driver / Manager</span>
                    <h4 className="font-bold text-base text-white">Suraj Sarvade</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <a
                    id="hero-call-suraj-1"
                    href="tel:7021751532"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    📞 7021751532
                  </a>
                  <a
                    id="hero-call-suraj-2"
                    href="tel:9226996694"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    📞 9226996694
                  </a>
                </div>
              </div>

              {/* Shailendra Sarvade */}
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 hover:border-amber-500/40 transition-all text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Driver / Dispatch</span>
                    <h4 className="font-bold text-base text-white">Shailendra Sarvade</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <a
                    id="hero-call-shailendra-1"
                    href="tel:9307877653"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    📞 9307877653
                  </a>
                  <a
                    id="hero-call-shailendra-2"
                    href="tel:7045102679"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    📞 7045102679
                  </a>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                24x7 Doorstep Pickup
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Sanitized AC White Cabs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Cancellation Fee
              </span>
            </div>
          </div>

          {/* Right Column: Instant Booking Estimator & WhatsApp Dispatch */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                    Quick Cab Booking
                  </h3>
                  <p className="text-xs text-slate-500">Get Instant WhatsApp Quote & Confirmation</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  24/7 Ready
                </div>
              </div>

              {/* Trip Type Selector */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-xl mt-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTripType('one-way')}
                  className={`py-2 rounded-lg transition-all ${
                    tripType === 'one-way'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One Way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('round-trip')}
                  className={`py-2 rounded-lg transition-all ${
                    tripType === 'round-trip'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Round Trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('airport-transfer')}
                  className={`py-2 rounded-lg transition-all ${
                    tripType === 'airport-transfer'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Airport Drop
                </button>
              </div>

              {/* Quick Booking Inputs */}
              <form onSubmit={handleHeroQuickWhatsApp} className="space-y-3.5 mt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Ambernath East / Station"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination / Drop:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Mumbai Airport / Pune / Shirdi"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Choose Car:
                    </label>
                    <select
                      value={selectedCar}
                      onChange={(e) => setSelectedCar(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    >
                      <option value="wagonr">White WagonR VXI (MH-05-5229)</option>
                      <option value="dzire">White Maruti Dzire</option>
                      <option value="ertiga">White Ertiga (AC/Non-AC)</option>
                      <option value="innova">White Innova Crysta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Date of Travel:
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  id="hero-quick-whatsapp-submit"
                  type="submit"
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Book Instantly on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Alternative: Open Full Booking Form */}
                <button
                  id="hero-open-full-booking"
                  type="button"
                  onClick={() => onOpenBookingModal(selectedCar)}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-amber-600 text-center transition-colors block"
                >
                  Or fill detailed travel inquiry form →
                </button>
              </form>

              {/* 24/7 Phone Support Banner inside form */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  Instant Call (24 Hours):
                </span>
                <a
                  href="tel:7021751532"
                  className="font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  7021751532
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

