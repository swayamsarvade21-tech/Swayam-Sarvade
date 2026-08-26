import React, { useState } from 'react';
import { Calculator, MapPin, Navigation, Car, MessageCircle, Phone, ArrowRight, Info, ShieldCheck } from 'lucide-react';
import { FLEET_DATA } from '../data/fleetData';
import { POPULAR_ROUTES_ESTIMATES } from '../data/packagesData';
import { formatINR, openWhatsAppChat, generateWhatsAppMessage } from '../utils/bookingHelper';

interface BookingCalculatorProps {
  onOpenBookingModal: (carId?: string) => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ onOpenBookingModal }) => {
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number>(0);
  const [customDistance, setCustomDistance] = useState<number>(100);
  const [useCustomKm, setUseCustomKm] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState<string>('ertiga');
  const [tripDirection, setTripDirection] = useState<'one-way' | 'round-trip'>('round-trip');

  const selectedCar = FLEET_DATA.find((c) => c.id === selectedCarId) || FLEET_DATA[0];
  const activeRoute = POPULAR_ROUTES_ESTIMATES[selectedRouteIndex];

  // Calculate distance
  const routeKm = parseInt(activeRoute.distance.replace(/[^0-9]/g, ''), 10) || 100;
  const effectiveDistance = useCustomKm
    ? customDistance * (tripDirection === 'round-trip' ? 2 : 1)
    : routeKm * (tripDirection === 'round-trip' ? 2 : 1);

  // Minimum daily charge calculation for outstation
  const calculatedDistance = Math.max(effectiveDistance, selectedCar.minKmPerDay);
  const baseFare = calculatedDistance * selectedCar.baseRatePerKm;
  const driverAllowance = tripDirection === 'round-trip' ? 400 : 300;
  const totalEstimated = baseFare + driverAllowance;

  const handleWhatsAppBooking = () => {
    const routeName = useCustomKm
      ? `Custom Trip (${customDistance} km ${tripDirection})`
      : `${activeRoute.from} to ${activeRoute.to} (${activeRoute.distance} ${tripDirection})`;

    const msg = generateWhatsAppMessage(
      {
        fullName: 'Website Inquirer',
        pickupLocation: 'Ambernath East',
        dropLocation: useCustomKm ? `Custom Distance: ${customDistance} km` : activeRoute.to,
        tripType: tripDirection,
        selectedCarId: selectedCar.name,
        acPreference: 'AC',
        specialRequests: `Quote generated on website: ~${formatINR(totalEstimated)} for ${effectiveDistance} km.`,
      },
      selectedCar,
      totalEstimated
    );
    openWhatsAppChat('917021751532', msg);
  };

  return (
    <section id="fare-calculator" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Trip Fare Estimator & Rate Chart
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            No hidden costs or surprise surges. Calculate the estimated fare from Ambernath to popular Maharashtra destinations or enter custom kilometers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {/* Route Selection Tabs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Select Travel Route or Custom KM:
                </label>
                <button
                  type="button"
                  onClick={() => setUseCustomKm(!useCustomKm)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 underline"
                >
                  {useCustomKm ? 'Switch to Popular Routes' : 'Enter Custom Distance (KM)'}
                </button>
              </div>

              {!useCustomKm ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {POPULAR_ROUTES_ESTIMATES.map((route, idx) => (
                    <button
                      key={idx}
                      id={`calc-route-btn-${idx}`}
                      type="button"
                      onClick={() => setSelectedRouteIndex(idx)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                        selectedRouteIndex === idx
                          ? 'bg-amber-500/10 border-amber-500 text-slate-950 font-bold ring-1 ring-amber-500'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{route.to}</span>
                        <span className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                          {route.distance}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1">
                        Approx {route.approxDuration} drive from Ambernath
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span>Distance (One Way):</span>
                    <span className="text-sm font-bold text-amber-600">{customDistance} KM</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="600"
                    step="10"
                    value={customDistance}
                    onChange={(e) => setCustomDistance(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>20 km</span>
                    <span>150 km</span>
                    <span>300 km</span>
                    <span>600 km</span>
                  </div>
                </div>
              )}
            </div>

            {/* Trip Direction */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Trip Type:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="calc-trip-round"
                  onClick={() => setTripDirection('round-trip')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    tripDirection === 'round-trip'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Round Trip (Recommended)
                </button>
                <button
                  type="button"
                  id="calc-trip-oneway"
                  onClick={() => setTripDirection('one-way')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    tripDirection === 'one-way'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  One Way Drop
                </button>
              </div>
            </div>

            {/* Car Model Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Choose Vehicle:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {FLEET_DATA.map((car) => (
                  <button
                    key={car.id}
                    id={`calc-select-car-${car.id}`}
                    type="button"
                    onClick={() => setSelectedCarId(car.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedCarId === car.id
                        ? 'bg-amber-500/10 border-amber-500 text-slate-950 font-bold ring-1 ring-amber-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 truncate">{car.name}</div>
                    <div className="text-[11px] text-amber-600 font-semibold mt-0.5">
                      ₹{car.baseRatePerKm}/km
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Fare Summary & Instant Quote Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                Estimated Trip Breakdown
              </span>
              <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white mt-1">
                {useCustomKm ? `Custom ${customDistance} KM Trip` : `Ambernath ➔ ${activeRoute.to}`}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Vehicle: <strong className="text-amber-300">{selectedCar.name}</strong> ({selectedCar.seats})
              </p>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span>Total Travel Distance:</span>
                <span className="font-semibold text-white font-mono">{effectiveDistance} KM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span>Base Rate:</span>
                <span className="font-semibold text-white">₹{selectedCar.baseRatePerKm} / km</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span>Fuel & Vehicle Base Cost:</span>
                <span className="font-semibold text-white font-mono">{formatINR(baseFare)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span>Driver Day Allowance:</span>
                <span className="font-semibold text-white font-mono">₹{driverAllowance}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800 text-[11px] text-slate-400">
                <span>Tolls & Parking:</span>
                <span className="italic">On actual fastag / parking receipt</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-xs text-slate-400 font-medium">Estimated Trip Fare</p>
              <div className="text-3xl font-extrabold text-amber-400 font-['Outfit',sans-serif] mt-1">
                {formatINR(totalEstimated)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                *Approximate quotation. Contact for confirmed best price.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                id="calc-whatsapp-quote-btn"
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get This Quote on WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  id="calc-call-suraj-btn"
                  href="tel:7021751532"
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Suraj</span>
                </a>
                <a
                  id="calc-call-shailendra-btn"
                  href="tel:9307877653"
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Shailendra</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
