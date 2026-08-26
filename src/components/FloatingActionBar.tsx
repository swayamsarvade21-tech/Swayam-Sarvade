import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface FloatingActionBarProps {
  onOpenBookingModal: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Suraj */}
        <a
          id="floating-call-suraj"
          href="tel:7021751532"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white text-[11px] font-bold shadow-sm"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="truncate">Call Suraj</span>
        </a>

        {/* Call Shailendra */}
        <a
          id="floating-call-shailendra"
          href="tel:9307877653"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-white text-[11px] font-bold shadow-sm"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="truncate">Call Shailendra</span>
        </a>

        {/* WhatsApp Booking */}
        <a
          id="floating-whatsapp"
          href="https://wa.me/917021751532?text=Hello%20Samartha%20Tours%20%26%20Travels,%20I%20need%20a%20cab."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-[11px] font-bold shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
