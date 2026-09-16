import React, { useState } from 'react';
import { 
  MapPin, 
  Camera, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Tag, 
  HeartHandshake, 
  Send, 
  ArrowRight,
  Sparkles,
  Bus,
  Car,
  Users,
  Compass,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, FLEET_ITEMS, TOUR_PACKAGES, EVENT_ORGANIZER_SERVICES } from '../data/mockData';

interface FlyerShowcaseProps {
  onSelectBookingItem: (item: {
    id: string;
    title: string;
    category: string;
  }) => void;
}

export const FlyerShowcase: React.FC<FlyerShowcaseProps> = ({ onSelectBookingItem }) => {
  const [selectedFleetTab, setSelectedFleetTab] = useState<'mobil' | 'hiace' | 'elf' | 'bus'>('bus');

  // Fleet data mapping for the 4 pillars shown in the flyer
  const fleetCategories = [
    {
      id: 'mobil' as const,
      label: 'Sewa Rental Mobil',
      unitName: 'Innova Reborn / Zenix / Veloz',
      capacity: '6 - 7 Seats',
      desc: 'Carter pribadi, kunjungan dinas keluarga, & antar jemput bandara dengan driver profesional.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      rateNote: 'Tarif Kompetitif • Hubungi Kami',
      badge: 'Carter Harian & Dinas',
    },
    {
      id: 'hiace' as const,
      label: 'Sewa Hiace',
      unitName: 'Toyota HiAce Premio & Commuter',
      capacity: '12 - 14 Seats',
      desc: 'Kenyamanan kelas eksekutif, suspensi lembut, kabin senyap, sangat diminati instansi & dinas.',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
      rateNote: 'Tarif Kompetitif • Hubungi Kami',
      badge: 'Favorit Eksekutif & VIP',
    },
    {
      id: 'elf' as const,
      label: 'Sewa Elf',
      unitName: 'Isuzu Elf Long Giga Executive',
      capacity: '19 - 21 Seats',
      desc: 'Microbus bertenaga, kabin luas AC ducting perkepala, ideal untuk rombongan keluarga besar & ziarah.',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
      rateNote: 'Tarif Kompetitif • Hubungi Kami',
      badge: 'Rombongan Efisien',
    },
    {
      id: 'bus' as const,
      label: 'Sewa Bus Pariwisata',
      unitName: 'Big Bus SHD / HDD & Medium Bus',
      capacity: '31 - 59 Seats',
      desc: 'Armada pariwisata modern sasis Mercedes/Hino, full AC, audio karaoke, TV LED, bantal & selimut.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      rateNote: 'Tarif Kompetitif • Hubungi Kami',
      badge: 'Ziarah & Study Tour Utama',
    },
  ];

  const currentFleet = fleetCategories.find(f => f.id === selectedFleetTab) || fleetCategories[3];

  return (
    <section id="flyer-overview" className="relative py-12 sm:py-16 bg-gradient-to-b from-sky-600 via-sky-500 to-sky-700 text-white overflow-hidden border-y border-sky-400/30">
      {/* Background Decor: Tropical sky, subtle sea waves, island glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* TOP BANNER: Slogan, Plane trail & Big Brush Title matching the flyer */}
        {/* ============================================================ */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/20">
            {/* Top Right Slogan from Flyer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="font-script text-xl sm:text-2xl text-amber-200 tracking-wide font-bold drop-shadow-sm">
                &ldquo;Jadikan Setiap Perjalanan dan Momen Anda Lebih Berkesan&rdquo;
              </span>
            </div>

            {/* Airplane with Dotted Loop Trail */}
            <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
              <span className="font-script text-lg text-amber-200 font-bold">Travel &amp; Make It Happen</span>
              <svg className="w-16 h-6 text-white" viewBox="0 0 100 30" fill="none">
                <path d="M5 25 Q 40 -5, 80 15" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
                <polygon points="85,15 75,10 77,18" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Big Headline mirroring flyer script / brush style with Official Logo */}
          <div className="text-center mt-6 flex flex-col items-center">
            <div className="mb-4 p-3 bg-white rounded-2xl shadow-xl border border-sky-100 transform hover:scale-105 transition-transform">
              <img
                src="/fusena-logo.svg"
                alt="Logo Resmi CV. FUSENA JAYA"
                className="h-24 sm:h-32 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Biro Perjalanan Wisata <br />
              <span className="font-script text-4xl sm:text-6xl lg:text-7xl font-bold text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
                &amp; Event Organizer
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-sky-50 max-w-2xl mx-auto font-medium drop-shadow-xs">
              Layanan Terpadu Transportasi Pariwisata, Paket Tour Lengkap, dan Penyelenggara Acara Profesional di Jawa Tengah &amp; Seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: MELAYANI JASA (4 Core Vehicles Lineup) */}
        {/* ============================================================ */}
        <div id="melayani-jasa" className="mb-12 bg-white/95 rounded-3xl border border-sky-200 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-slate-900 relative overflow-hidden">
          {/* Green Ribbon Badge matching flyer */}
          <div className="inline-block mb-6">
            <div className="bg-[#00A859] text-white font-script text-2xl sm:text-3xl px-6 py-2 rounded-2xl shadow-lg shadow-emerald-700/30 border border-emerald-300/40 flex items-center gap-2.5 font-bold tracking-wide">
              <Bus className="w-6 h-6 text-white" />
              <span>Melayani Jasa</span>
            </div>
          </div>

          {/* 4 Interactive Vehicle Badges from Flyer in Deep Navy Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {fleetCategories.map((cat) => {
              const isSelected = selectedFleetTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFleetTab(cat.id)}
                  className={`relative p-4 rounded-2xl text-center font-bold text-xs sm:text-sm transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#0B2540] text-white border-amber-400 shadow-xl shadow-sky-900/30 scale-[1.03] ring-2 ring-amber-400'
                      : 'bg-slate-100 hover:bg-[#0B2540] text-slate-800 hover:text-white border-slate-200 hover:border-[#0B2540]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <span className="block text-xs sm:text-base font-extrabold tracking-tight">
                      {cat.label}
                    </span>
                    <span className={`text-[11px] font-medium ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                      {cat.capacity}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-amber-400 clip-triangle" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Vehicle Detail Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-br from-sky-50 to-emerald-50/50 rounded-2xl p-5 sm:p-6 border border-sky-200">
            <div className="lg:col-span-5 h-56 sm:h-64 rounded-xl overflow-hidden relative group shadow-md">
              <img
                src={currentFleet.image}
                alt={currentFleet.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#00A859] text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                {currentFleet.badge}
              </div>
              <div className="absolute bottom-3 right-3 bg-[#0B2540] text-amber-300 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md">
                {currentFleet.rateNote}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2540]">
                  {currentFleet.unitName}
                </h3>
                <span className="text-xs bg-sky-100 text-sky-800 px-3 py-1 rounded-full border border-sky-300 font-bold">
                  Kapasitas: {currentFleet.capacity}
                </span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                {currentFleet.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Full AC Dingin
                </span>
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Driver Berpengalaman
                </span>
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Unit Bersih &amp; Wangi
                </span>
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Audio &amp; Karaoke
                </span>
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Charger HP / USB
                </span>
                <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0" /> Dalam &amp; Luar Kota
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectBookingItem({
                    id: currentFleet.id,
                    title: currentFleet.unitName,
                    category: currentFleet.id === 'bus' ? 'bus' : currentFleet.id === 'elf' ? 'elf' : currentFleet.id === 'hiace' ? 'hiace' : 'mobil',
                  })}
                  className="bg-[#00A859] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Pesan / Booking {currentFleet.label}</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20tertarik%20sewa%20${encodeURIComponent(currentFleet.unitName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#00A859]" />
                  <span>Tanya WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: DUA PILAR KEMBAR: PAKET WISATA & EVENT ORGANIZER */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* CARD A: PAKET WISATA (Blue Ribbon Theme - Crisp White Card) */}
          <div id="paket" className="bg-white rounded-3xl border-2 border-sky-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-slate-900 relative overflow-hidden group hover:border-sky-400 transition-all">
            <div>
              {/* Header Ribbon with MapPin Icon matching flyer */}
              <div className="inline-flex items-center gap-2.5 bg-[#0284C7] text-white font-extrabold text-lg sm:text-xl px-5 py-2 rounded-2xl shadow-md border border-sky-400/40 mb-5">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span>Paket Wisata</span>
              </div>

              {/* 5 Bullet Items from Flyer with Yellow Checkmarks */}
              <ul className="space-y-3.5 mb-6">
                {[
                  { title: 'Wisata Domestik & Mancanegara', note: 'Bali, Lombok, Bromo, Jogja, Singapore, Malaysia, Thailand' },
                  { title: 'Paket Tour Custom', note: 'Rute, destinasi, armada & budget bebas request sesuai kebutuhan' },
                  { title: 'City Tour', note: 'Jelajah destinasi Semarang, Demak, Kudus, Solo, Yogyakarta' },
                  { title: 'Paket Wisata Religi', note: 'Ziarah Wali Songo, Makam Habib & Ulama Karismatik Nusantara' },
                  { title: 'Outbound & Gathering', note: 'Fun games, team building, capacity building sekolah & instansi' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 fill-amber-100" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm sm:text-base text-slate-900 block">{item.title}</span>
                      <span className="text-xs text-slate-600">{item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Slogan Italic Brush Style from Flyer */}
              <div className="bg-sky-50 rounded-2xl p-4 border border-sky-200 text-center mb-6">
                <p className="font-script text-xl sm:text-2xl text-[#0284C7] font-bold">
                  &ldquo;{COMPANY_INFO.sloganTravel}&rdquo;
                </p>
              </div>

              {/* Visual Collage Thumbnails matching flyer (Borobudur, Bromo, Beach) */}
              <div className="grid grid-cols-3 gap-2.5 rounded-xl overflow-hidden mb-6">
                <div className="relative h-24 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=400"
                    alt="Candi Borobudur"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[10px] text-white px-1.5 py-0.5 rounded backdrop-blur-xs font-semibold">
                    Borobudur
                  </span>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=400"
                    alt="Gunung Bromo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[10px] text-white px-1.5 py-0.5 rounded backdrop-blur-xs font-semibold">
                    Bromo
                  </span>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
                    alt="Pantai Eksotis"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[10px] text-white px-1.5 py-0.5 rounded backdrop-blur-xs font-semibold">
                    Pantai Tropis
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onSelectBookingItem({
                id: 'paket-wisata-custom',
                title: 'Paket Wisata & Tour (Custom / Religi / Domestik)',
                category: 'paket-wisata',
              })}
              className="w-full bg-[#0284C7] hover:bg-sky-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Jelajahi &amp; Reservasi Paket Wisata</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD B: EVENT ORGANIZER (Green Ribbon Theme - Crisp White Card) */}
          <div id="event-organizer" className="bg-white rounded-3xl border-2 border-emerald-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-slate-900 relative overflow-hidden group hover:border-emerald-400 transition-all">
            <div>
              {/* Header Ribbon with Camera Icon matching flyer */}
              <div className="inline-flex items-center gap-2.5 bg-[#00A859] text-white font-extrabold text-lg sm:text-xl px-5 py-2 rounded-2xl shadow-md border border-emerald-400/40 mb-5">
                <Camera className="w-5 h-5 text-emerald-100" />
                <span>Event Organizer</span>
              </div>

              {/* 6 Bullet Items from Flyer with Emerald Checkmarks */}
              <ul className="space-y-3.5 mb-6">
                {[
                  { title: 'Dokumentasi Wedding', note: 'Foto & video cinematic akad, resepsi, drone & album kolase' },
                  { title: 'Ulang Tahun', note: 'Dekorasi manis, MC meriah, kue ultah, & video reels kenangan' },
                  { title: 'Acara Dinas', note: 'Protokoler, sound system, backdrop panggung kedinasan resmi' },
                  { title: 'Seminar & Workshop', note: 'Live streaming, LED display, seminar kit, & sound engineer' },
                  { title: 'Reuni', note: 'Temu kangen alumni, fun games, photobooth, & video aftermovie' },
                  { title: 'Dll', note: 'Khitanan, launching produk, gathering keluarga, komunitas & pameran' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#00A859] flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00A859] fill-emerald-100" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm sm:text-base text-slate-900 block">{item.title}</span>
                      <span className="text-xs text-slate-600">{item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Slogan Italic Brush Style from Flyer */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-center mb-6">
                <p className="font-script text-xl sm:text-2xl text-[#00A859] font-bold">
                  &ldquo;{COMPANY_INFO.sloganEO}&rdquo;
                </p>
              </div>

              {/* Visual Collage Thumbnails matching flyer (Wedding, Birthday, Seminar, Camera) */}
              <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden mb-6">
                <div className="relative h-20 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=300"
                    alt="Wedding"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[9px] text-white px-1 py-0.5 rounded font-semibold">
                    Wedding
                  </span>
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=300"
                    alt="Birthday"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[9px] text-white px-1 py-0.5 rounded font-semibold">
                    Ultah
                  </span>
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=300"
                    alt="Seminar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[9px] text-white px-1 py-0.5 rounded font-semibold">
                    Seminar
                  </span>
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden group shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300"
                    alt="Camera Gear"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 bg-[#0B2540]/80 text-[9px] text-white px-1 py-0.5 rounded font-semibold">
                    Kamera
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onSelectBookingItem({
                id: 'eo-custom-event',
                title: 'Event Organizer & Dokumentasi Spesial',
                category: 'event-organizer',
              })}
              className="w-full bg-[#00A859] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Camera className="w-4 h-4" />
              <span>Konsultasi Event Organizer &amp; Dokumentasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 3: PROMINENT WHATSAPP CALLOUT BOX (As on flyer!) */}
        {/* ============================================================ */}
        <div className="mb-12 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border-2 border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle palm tree backdrop & waves */}
          <div className="absolute -right-6 -bottom-6 w-48 h-48 opacity-20 pointer-events-none text-emerald-800">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 100 Q 45 60, 60 20 Q 70 60, 55 100 Z" />
              <path d="M60 20 Q 30 10, 15 30 Q 40 25, 60 20" />
              <path d="M60 20 Q 50 0, 40 5 Q 52 15, 60 20" />
              <path d="M60 20 Q 75 0, 85 8 Q 72 15, 60 20" />
              <path d="M60 20 Q 90 20, 95 35 Q 78 28, 60 20" />
            </svg>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 z-10">
            {/* Big WhatsApp Icon in bright emerald circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-700/30 flex-shrink-0 animate-bounce" style={{ animationDuration: '3s' }}>
              <MessageCircle className="w-9 h-9 sm:w-11 sm:h-11" fill="currentColor" />
            </div>

            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 block mb-0.5">
                Informasi Lebih Lanjut
              </span>
              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20ingin%20konsultasi%20layanan%20CV.%20Fusena%20Jaya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2540] hover:text-[#00A859] transition-colors tracking-tight block"
              >
                WA. {COMPANY_INFO.waNumberClean}
              </a>
              <p className="text-sm sm:text-base font-extrabold text-[#0B2540] mt-0.5">
                ({COMPANY_INFO.contactPerson})
              </p>
            </div>
          </div>

          {/* Direct Chat Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20ingin%20konsultasi%20booking%20dan%20info%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#00A859] hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-xl shadow-emerald-800/30 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 4: TRUST BAR (4 Pillars at bottom of flyer) */}
        {/* ============================================================ */}
        <div className="bg-[#072036] rounded-2xl border border-sky-400/30 p-5 sm:p-6 backdrop-blur-md shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-sky-800/60 text-white">
            <div className="flex items-center gap-3 pt-3 lg:pt-0">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Aman &amp; Terpercaya</h4>
                <p className="text-[11px] text-sky-200">Legalitas CV resmi &amp; bergaransi</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Pelayanan Terbaik</h4>
                <p className="text-[11px] text-sky-200">Driver ramah &amp; CS 24 jam</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Harga Kompetitif</h4>
                <p className="text-[11px] text-sky-200">Tarif bersahabat tanpa hidden fee</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Solusi Perjalanan &amp; Acara</h4>
                <p className="text-[11px] text-sky-200">One-stop tour, fleet &amp; event</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
