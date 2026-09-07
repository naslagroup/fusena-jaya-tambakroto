import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppFloatingBtn: React.FC = () => {
  const [showBadge, setShowBadge] = useState(true);

  const waLink = `https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20ingin%20konsultasi%20sewa%20armada%20atau%20paket%20wisata%20ziarah.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Floating Popup Badge */}
      {showBadge && (
        <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-700 max-w-xs animate-bounce flex items-start justify-between gap-3 relative">
          <button
            onClick={() => setShowBadge(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-800 text-slate-400 hover:text-white rounded-full flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div>
            <div className="font-bold text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Layanan CS Fast Response
            </div>
            <p className="text-[11px] text-slate-300 mt-1">
              Ada pertanyaan sewa bus, ziarah, atau rental kamera? Chat WA kami sekarang!
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat WhatsApp CV Fusena Jaya"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
};
