import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, User, Car, Calendar, Navigation, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, FLEET_DATA } from '../data/fleetData';
import { BookingFormState } from '../types';
import { openWhatsAppChat, generateWhatsAppMessage } from '../utils/bookingHelper';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    pickupLocation: 'Ambernath East',
    dropLocation: '',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '06:00',
    tripType: 'one-way',
    selectedCarId: 'wagonr',
    specialRequests: '',
    acPreference: 'AC',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const carObj = FLEET_DATA.find((c) => c.id === formData.selectedCarId);
    const msg = generateWhatsAppMessage(formData, carObj);
    openWhatsAppChat('917021751532', msg);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            24 Hours Contact & Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Get in Touch with Samartha Tours & Travels
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Call directly for instant booking or submit your inquiry to receive a customized WhatsApp quote within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Person 1: Suraj Sarvade */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Owner & Fleet Manager
                  </span>
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white mt-1">
                    Suraj Sarvade
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    24/7 Car Allocation & Outstation Bookings
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>7021751532</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      id="contact-call-suraj-1"
                      href="tel:7021751532"
                      className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
                    >
                      Call
                    </a>
                    <a
                      id="contact-wa-suraj-1"
                      href="https://wa.me/917021751532?text=Hello%20Suraj%20bhai,%20I%20need%20a%20cab%20from%20Samartha%20Tours%20%26%20Travels."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>9226996694</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      id="contact-call-suraj-2"
                      href="tel:9226996694"
                      className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Contact Person 2: Shailendra Sarvade */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Co-Owner & Dispatch Lead
                  </span>
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white mt-1">
                    Shailendra Sarvade
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Doorstep Pickup Coordination & Airport Transfers
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>9307877653</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      id="contact-call-shailendra-1"
                      href="tel:9307877653"
                      className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
                    >
                      Call
                    </a>
                    <a
                      id="contact-wa-shailendra-1"
                      href="https://wa.me/919307877653?text=Hello%20Shailendra%20bhai,%20I%20need%20a%20cab%20from%20Samartha%20Tours%20%26%20Travels."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>7045102679</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      id="contact-call-shailendra-2"
                      href="tel:7045102679"
                      className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Coverage Card */}
            <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 text-slate-900 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base font-['Outfit',sans-serif]">
                    Primary Base Location
                  </h4>
                  <p className="text-xs text-amber-900 font-semibold">
                    📍 Ambernath East, Maharashtra - 421501
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-200/60 text-xs text-slate-700 space-y-1.5">
                <p className="font-semibold text-slate-900">
                  🚗 Service Coverage Areas:
                </p>
                <p className="leading-relaxed text-slate-600">
                  Ambernath (East/West), Badlapur, Ulhasnagar, Kalyan, Dombivli, Diva, Thane, Navi Mumbai, Mumbai Chhatrapati Shivaji Airport (T1/T2), Pune, Shirdi, Nashik & All Maharashtra.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-emerald-800">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Operating Hours: 24 Hours / 365 Days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Online Inquiry Form
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-1">
                Book a Cab / Request Rate Quote
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill this quick form and get an immediate confirmation & quote directly on WhatsApp!
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you! Your booking details have been prepared for WhatsApp dispatch. We will confirm your cab right away.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Deshmukh"
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location in Ambernath / Nearby *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Ambernath East near Station / Shiv Mandir"
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Drop Destination / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dropLocation}
                    onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                    placeholder="e.g. Mumbai Airport T2 / Shirdi / Pune"
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Car Model
                  </label>
                  <select
                    value={formData.selectedCarId}
                    onChange={(e) => setFormData({ ...formData, selectedCarId: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    {FLEET_DATA.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name} ({car.seats})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Trip Type
                  </label>
                  <select
                    value={formData.tripType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tripType: e.target.value as BookingFormState['tripType'],
                      })
                    }
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="one-way">One-Way Drop</option>
                    <option value="round-trip">Round Trip</option>
                    <option value="airport-transfer">Airport Drop / Pickup</option>
                    <option value="local-rental">Local Day Rental (8hr/80km)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    AC Preference
                  </label>
                  <select
                    value={formData.acPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acPreference: e.target.value as 'AC' | 'Non-AC',
                      })
                    }
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="AC">Full AC</option>
                    <option value="Non-AC">Non-AC (Budget)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Notes / Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Need baby seat, multiple pickup points, flight number for airport drop..."
                  className="w-full px-3.5 py-2 text-sm bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  id="contact-form-whatsapp-submit"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Booking Details via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  ⚡ Instant Response Guarantee. We confirm vehicle availability within 5 minutes.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
