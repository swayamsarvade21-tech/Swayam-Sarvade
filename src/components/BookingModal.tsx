import React, { useState, useEffect } from 'react';
import { X, Check, Phone, MessageCircle, MapPin, Calendar, Clock, Car as CarIcon, AlertCircle, Printer } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO } from '../data/fleetData';
import { BookingFormState, Car } from '../types';
import { formatINR, generateWhatsAppMessage, openWhatsAppChat } from '../utils/bookingHelper';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialCarId = 'wagonr',
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    pickupLocation: 'Ambernath East',
    dropLocation: '',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '06:00',
    tripType: 'one-way',
    selectedCarId: initialCarId,
    specialRequests: '',
    acPreference: 'AC',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (initialCarId) {
      setFormData((prev) => ({ ...prev, selectedCarId: initialCarId }));
    }
  }, [initialCarId]);

  if (!isOpen) return null;

  const selectedCar = FLEET_DATA.find((c) => c.id === formData.selectedCarId) || FLEET_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage(formData, selectedCar);
    openWhatsAppChat('917021751532', msg);
    setBookingConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        id="booking-modal-container"
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <CarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif]">
                Book 24 Hours Cab
              </h3>
              <p className="text-xs text-amber-400 font-medium">
                Samartha Tours & Travels • Ambernath East
              </p>
            </div>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {!bookingConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Car Highlight */}
              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedCar.imageUrl}
                    alt={selectedCar.name}
                    className="w-14 h-14 rounded-xl object-cover border border-amber-300 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-slate-900">{selectedCar.name}</h4>
                      <span className="text-[10px] bg-yellow-400 text-slate-950 font-black px-1.5 py-0.2 rounded border border-yellow-500">
                        Yellow Plate
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {selectedCar.seats} • Base: ₹{selectedCar.baseRatePerKm}/km
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                    {selectedCar.category}
                  </span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="Pickup address in Ambernath / nearby"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Drop Location / Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dropLocation}
                    onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                    placeholder="Drop address / city"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.selectedCarId}
                    onChange={(e) => setFormData({ ...formData, selectedCarId: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    {FLEET_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
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
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="one-way">One-Way</option>
                    <option value="round-trip">Round Trip</option>
                    <option value="airport-transfer">Airport Drop/Pickup</option>
                    <option value="local-rental">Local Rental</option>
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
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  >
                    <option value="AC">Full AC</option>
                    <option value="Non-AC">Non-AC (Budget)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
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
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Flight info, landmark, luggage count..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  id="modal-submit-whatsapp"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Booking Request on WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:7021751532"
                    className="py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    Call Suraj: 7021751532
                  </a>
                  <a
                    href="tel:9307877653"
                    className="py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    Call Shailendra: 9307877653
                  </a>
                </div>
              </div>
            </form>
          ) : (
            /* Booking Confirmation & Voucher View */
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  Booking Details Prepared!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Your WhatsApp message has been generated. Our driver / fleet manager will confirm the cab allocation immediately.
                </p>
              </div>

              {/* Summary Voucher */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Passenger:</span>
                  <span className="font-bold text-slate-900">{formData.fullName || 'Valued Customer'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Pickup:</span>
                  <span className="font-semibold text-slate-900">{formData.pickupLocation}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-semibold text-slate-900">{formData.dropLocation}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Vehicle Assigned:</span>
                  <span className="font-bold text-amber-700">{selectedCar.name} ({formData.acPreference})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-900">{formData.pickupDate} at {formData.pickupTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const msg = generateWhatsAppMessage(formData, selectedCar);
                    openWhatsAppChat('917021751532', msg);
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Re-Open WhatsApp Chat
                </button>

                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-semibold text-xs"
                >
                  Edit Details
                </button>

                <button
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
