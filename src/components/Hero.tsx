import React, { useState } from 'react';
import { 
  Bus, 
  MapPin, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Camera, 
  Video,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onSearchSubmit: (searchParams: {
    category: string;
    passengers: number;
    pickup: string;
    date: string;
  }) => void;
  onOpenBooking: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('bus');
  const [passengerCount, setPassengerCount] = useState(30);
  const [pickupCity, setPickupCity] = useState('Kudus / Demak / Semarang');
  const [departureDate, setDepartureDate] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      category: selectedCategory,
      passengers: passengerCount,
      pickup: pickupCity,
      date: departureDate,
    });
  };

  return (
    <section id="beranda" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#0B2540] text-white overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
          alt="Bus Pariwisata CV. Fusena Jaya"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2540]/90 via-[#072036]/90 to-[#0B2540]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.25)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge & Official Logo */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 animate-fade-in">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Official Travel &amp; Fleet Management</span>
            </div>
            <span className="hidden sm:inline-block text-sky-400/60">•</span>
            <span className="text-sky-100 text-xs sm:text-sm font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00A859]" />
              Legalitas Resmi CV. FUSENA JAYA
            </span>
          </div>

          {/* Official Logo Pill */}
          <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md">
            <img
              src="/fusena-emblem.svg"
              alt="Logo Resmi CV. FUSENA JAYA"
              className="w-7 h-7 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-bold text-white tracking-wide">CV. FUSENA JAYA</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7 space-y-6">
            {/* Slogan from flyer */}
            <p className="font-script text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide drop-shadow-sm">
              &ldquo;Jadikan Setiap Perjalanan dan Momen Anda Lebih Berkesan&rdquo;
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Biro Perjalanan Wisata <br />
              <span className="font-script text-4xl sm:text-6xl font-bold text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
                &amp; Event Organizer
              </span> <br />
              <span className="text-sky-100 text-2xl sm:text-4xl font-extrabold tracking-normal">CV. FUSENA JAYA</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 max-w-2xl font-normal leading-relaxed">
              Melayani Jasa Sewa Rental Mobil, Toyota HiAce, Isuzu Elf, Bus Pariwisata, Paket Wisata Domestik &amp; Mancanegara, Religi / Ziarah, serta Layanan Event Organizer &amp; Dokumentasi Profesional (Wedding, Ulang Tahun, Dinas, Seminar, Reuni).
            </p>

            {/* List Services Highlights mirroring flyer */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                'Sewa Rental Mobil',
                'Sewa Hiace & Elf',
                'Sewa Bus Pariwisata',
                'Wisata Domestik & LN',
                'Paket Wisata Religi',
                'Event Organizer & EO',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#00A859] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-booking-btn"
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 bg-[#00A859] hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Form Booking Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-wa-consult-btn"
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20ingin%20tanya%20mengenai%20sewa%20armada%20atau%20paket%20wisata%20CV.%20Fusena%20Jaya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm px-5 py-3.5 rounded-xl backdrop-blur-md transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Konsultasi WA: {COMPANY_INFO.waNumberClean}</span>
              </a>
            </div>
          </div>

          {/* Feature Showcase Card on Right */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl text-slate-900 border-2 border-sky-200">
              <div className="absolute -top-3 -right-3 bg-[#00A859] text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md">
                Layanan Terlengkap Sesuai Flyer
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0B2540]">Armada Bus &amp; Microbus Terbaru</h4>
                    <p className="text-xs text-slate-600">Rental Mobil, Hiace, Elf &amp; Bus Pariwisata resmi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0B2540]">Paket Wisata &amp; Tour Religi</h4>
                    <p className="text-xs text-slate-600">Domestik, Mancanegara, Custom Tour &amp; Gathering</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00A859] flex items-center justify-center font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0B2540]">Dokumentasi &amp; Event Organizer</h4>
                    <p className="text-xs text-slate-600">Wedding, Ulang Tahun, Dinas, Seminar &amp; Reuni</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00A859]" /> Respon Cepat Naasyith Dzaky
                </span>
                <span className="text-[#00A859] font-bold">100% Berizin Resmi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search & Booking Panel Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl text-slate-800 border-2 border-sky-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <h3 className="text-sm sm:text-base font-bold text-[#0B2540] flex items-center gap-2">
              <Bus className="w-5 h-5 text-[#00A859]" />
              <span>Cari &amp; Estimasi Layanan Cepat</span>
            </h3>
            <span className="text-xs text-[#00A859] font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Pilihan Lengkap Sesuai Flyer
            </span>
          </div>

          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Category Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Kategori Layanan
              </label>
              <select
                id="hero-quick-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#00A859] focus:border-[#00A859] font-medium outline-none"
              >
                <option value="bus">Sewa Bus Pariwisata</option>
                <option value="hiace">Sewa Toyota HiAce</option>
                <option value="elf">Sewa Microbus Elf</option>
                <option value="mobil">Sewa Rental Mobil &amp; Driver</option>
                <option value="paket-wisata">Paket Wisata &amp; Religi</option>
                <option value="event-organizer">Event Organizer &amp; Acara</option>
                <option value="kamera">Rental Kamera &amp; Lens</option>
                <option value="cinematic">Dokumentasi Cinematic</option>
              </select>
            </div>

            {/* Passengers / Participant */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                Jumlah Peserta (Pax)
              </label>
              <input
                id="hero-quick-passengers"
                type="number"
                min={1}
                max={500}
                value={passengerCount}
                onChange={(e) => setPassengerCount(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#00A859] focus:border-[#00A859] font-medium outline-none"
                placeholder="cth: 30 orang"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Lokasi Jemput
              </label>
              <input
                id="hero-quick-pickup"
                type="text"
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#00A859] focus:border-[#00A859] font-medium outline-none"
                placeholder="Semarang / Demak / Kudus"
              />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Rencana Tanggal
              </label>
              <input
                id="hero-quick-date"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#00A859] focus:border-[#00A859] font-medium outline-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                id="hero-search-submit-btn"
                type="submit"
                className="w-full bg-[#00A859] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <span>Lihat Pilihan Unit</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
