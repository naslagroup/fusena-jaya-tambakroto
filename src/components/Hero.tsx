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
  Compass
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
    <section id="beranda" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-slate-950 text-white overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
          alt="Bus Pariwisata CV. Fusena Jaya"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Official Travel & Fleet Management</span>
          </div>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="text-slate-300 text-xs sm:text-sm font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Legalitas Resmi CV. FUSENA JAYA
          </span>
        </div>

        {/* Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Biro Perjalanan <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Ziarah & Wisata
              </span> <br />
              CV. FUSENA JAYA
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Melayani Sewa Bus Pariwisata (Big Bus/Medium/Sleeper), Paket Ziarah Wali Songo, Study Tour & KKL, Sewa Elf & Mobil Pribadi + Driver Professional, serta Rental Kamera & Jasa Cinematic.
            </p>

            {/* List Services Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                'Sewa Bus Pariwisata',
                'Paket Ziarah Wali',
                'Study Tour & KKL',
                'Sewa Elf & Car',
                'Sopir Professional',
                'Kamera & Cinematic',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-booking-btn"
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Form Booking Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-wa-consult-btn"
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20ingin%20tanya%20mengenai%20sewa%20armada%20atau%20paket%20wisata.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500/50 font-semibold text-sm px-5 py-3.5 rounded-xl backdrop-blur-md transition-all"
              >
                <span>Konsultasi WhatsApp 24 Jam</span>
              </a>
            </div>
          </div>

          {/* Feature Showcase Card on Right */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                Layanan Terlengkap
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Armada Bus & Microbus Terbaru</h4>
                    <p className="text-xs text-slate-400">Unit terawat, AC dingin, full audio & karaoke</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Paket Ziarah & Tour Terstruktur</h4>
                    <p className="text-xs text-slate-400">Pendampingan ustadz & tour guide ramah</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Bonus Footage Cinematic & Drone</h4>
                    <p className="text-xs text-slate-400">Hasil video Reels & HD memukau untuk kenangan</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Respon Cepat 5 Menit
                </span>
                <span className="text-emerald-400 font-semibold">100% Kepuasan Pelanggan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search & Booking Panel Bar */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl text-slate-800 border border-slate-200/80">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <Bus className="w-5 h-5 text-emerald-600" />
              <span>Cari & Estimasi Layanan Cepat</span>
            </h3>
            <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Pilihan Lengkap Armada & Paket
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium outline-none"
              >
                <option value="bus">Sewa Bus Pariwisata</option>
                <option value="paket-wisata">Paket Ziarah & Study Tour</option>
                <option value="elf">Sewa Microbus Elf</option>
                <option value="mobil">Sewa Mobil Pribadi & Driver</option>
                <option value="kamera">Rental Kamera & Lens</option>
                <option value="cinematic">Jasa Fotografer & Cinematic</option>
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium outline-none"
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium outline-none"
                placeholder="Kota/Kecamatan"
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-medium outline-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                id="hero-search-submit-btn"
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 hover:shadow-lg"
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
