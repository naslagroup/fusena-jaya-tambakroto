import React, { useState } from 'react';
import { 
  Bus, 
  Car, 
  MapPin, 
  Users, 
  Calendar, 
  Check, 
  Camera, 
  Video, 
  Sparkles, 
  UserCheck, 
  DollarSign, 
  ChevronRight,
  Info,
  ShieldAlert,
  Compass,
  PartyPopper,
  Briefcase
} from 'lucide-react';
import { 
  FLEET_ITEMS, 
  TOUR_PACKAGES, 
  CAMERA_GEAR, 
  MEDIA_SERVICES, 
  EVENT_ORGANIZER_SERVICES,
  COMPANY_INFO 
} from '../data/mockData';
import { FleetItem, TourPackage, CameraGear, MediaService, EventOrganizerService } from '../types';

interface ServicesSectionProps {
  onSelectBookingItem: (item: {
    id: string;
    title: string;
    category: string;
  }) => void;
  selectedFilterFromHero?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectBookingItem,
  selectedFilterFromHero = 'all'
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedFilterFromHero !== 'all' ? selectedFilterFromHero : 'bus');

  const tabs = [
    { id: 'bus', label: 'Sewa Bus Pariwisata', icon: Bus, count: '3 Pilihan' },
    { id: 'hiace', label: 'Sewa HiAce Premio', icon: Car, count: 'Executive' },
    { id: 'elf', label: 'Sewa Elf Long & Short', icon: Car, count: '2 Pilihan' },
    { id: 'mobil', label: 'Sewa Rental Mobil', icon: UserCheck, count: '3 Pilihan' },
    { id: 'paket-wisata', label: 'Paket Wisata', icon: Compass, count: '8 Paket' },
    { id: 'event-organizer', label: 'Event Organizer', icon: PartyPopper, count: '6 Layanan' },
    { id: 'cinematic', label: 'Dokumentasi & Kamera', icon: Video, count: 'Lengkap' },
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Layanan Resmi CV. FUSENA JAYA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Solusi Perjalanan, Armada, & Dokumentasi Terlengkap
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih layanan sesuai kebutuhan acara Anda: dari sewa bus pariwisata berfasilitas mewah, paket ziarah berkah Wali Songo, hingga jasa tim videografer cinematic.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-[#0B2540] text-white shadow-lg shadow-sky-900/20 scale-[1.02] ring-2 ring-amber-400'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-[#00A859] text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}

        {/* 1. SEWA BUS PARIWISATA */}
        {activeTab === 'bus' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_ITEMS.filter(item => item.category === 'bus').map((bus) => (
              <div 
                key={bus.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={bus.image}
                    alt={bus.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {bus.tag && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                      {bus.tag}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 bg-[#00A859] text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md">
                    Tanya Tarif Terbaik
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {bus.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {bus.description}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3 mb-4 text-xs space-y-2 border border-slate-100">
                      <div className="flex items-center justify-between text-slate-700 font-medium">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Users className="w-3.5 h-3.5 text-emerald-600" /> Kapasitas:
                        </span>
                        <span className="font-bold text-slate-900">{bus.capacity}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        <strong className="text-slate-700">Cocok Untuk:</strong> {bus.recommendedFor}
                      </div>
                    </div>

                    {/* Facilities List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Fasilitas Bus:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {bus.facilities.map((fac, i) => (
                          <span 
                            key={i} 
                            className="text-[11px] bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-emerald-600" />
                            {fac}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectBookingItem({
                        id: bus.id,
                        title: bus.name,
                        category: 'bus',
                      })}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Booking Unit Ini</span>
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20tertarik%20sewa%20${encodeURIComponent(bus.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 px-3 rounded-xl transition-all"
                    >
                      Tanya WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. PAKET WISATA & ZIARAH */}
        {activeTab === 'paket-wisata' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOUR_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
              >
                <div className="relative md:w-2/5 h-60 md:h-auto overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0B2540]/95 text-white p-2.5 rounded-xl backdrop-blur-md flex items-center justify-between">
                    <span className="text-[10px] text-slate-300 block">Paket Wisata</span>
                    <span className="font-extrabold text-xs text-amber-300">
                      Konsultasi Jadwal &amp; Rute
                    </span>
                  </div>
                </div>

                <div className="p-6 md:w-3/5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
                      <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {pkg.duration}
                      </span>
                      <span>• Min. {pkg.minPersons} Peserta</span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-700 uppercase mb-1">
                          Destinasi Kunjungan:
                        </h4>
                        <ul className="text-[11px] text-slate-600 space-y-1">
                          {pkg.destinations.slice(0, 4).map((dest, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <MapPin className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span>{dest}</span>
                            </li>
                          ))}
                          {pkg.destinations.length > 4 && (
                            <li className="text-[10px] text-emerald-600 font-semibold pl-4">
                              + {pkg.destinations.length - 4} destinasi lainnya
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold text-slate-700 uppercase mb-1">
                          Fasilitas Paket Sudah Termasuk:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {pkg.includes.slice(0, 4).map((inc, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                              ✓ {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectBookingItem({
                        id: pkg.id,
                        title: pkg.title,
                        category: 'paket-wisata',
                      })}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Pesan Paket Tour Ini</span>
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20minta%20brosur%20dan%20penawaran%20${encodeURIComponent(pkg.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 px-3 rounded-xl transition-all"
                    >
                      Brosur WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. SEWA HIACE (EXECUTIVE) */}
        {activeTab === 'hiace' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FLEET_ITEMS.filter(item => item.category === 'hiace').map((hiace) => (
              <div key={hiace.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between">
                <div>
                  <div className="h-52 rounded-xl overflow-hidden mb-4 bg-slate-900 relative">
                    <img src={hiace.image} alt={hiace.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 left-3 bg-sky-600 text-white font-bold text-[11px] px-3 py-1 rounded-full shadow-md">
                      Executive Class
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      {hiace.capacity}
                    </span>
                    <span className="font-bold text-xs text-[#00A859] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Tarif Terbaik • Nego Ramah
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{hiace.name}</h3>
                  <p className="text-xs text-slate-600 mb-4">{hiace.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Keunggulan &amp; Fasilitas:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hiace.facilities.map((f, idx) => (
                        <span key={idx} className="text-[11px] bg-sky-50 text-sky-800 px-2.5 py-0.5 rounded border border-sky-100">
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onSelectBookingItem({
                      id: hiace.id,
                      title: hiace.name,
                      category: 'hiace',
                    })}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/20"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Booking Sewa HiAce Ini</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. SEWA ELF (MICROBUS) */}
        {activeTab === 'elf' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FLEET_ITEMS.filter(item => item.category === 'elf').map((elf) => (
              <div key={elf.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between">
                <div>
                  <div className="h-48 rounded-xl overflow-hidden mb-4 bg-slate-900">
                    <img src={elf.image} alt={elf.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {elf.capacity}
                    </span>
                    <span className="font-bold text-xs text-[#00A859] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Tarif Terbaik • Nego Ramah
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{elf.name}</h3>
                  <p className="text-xs text-slate-600 mb-4">{elf.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Fasilitas Microbus:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {elf.facilities.map((f, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectBookingItem({
                    id: elf.id,
                    title: elf.name,
                    category: 'elf',
                  })}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 mt-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Sewa Elf Ini</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 4. SEWA MOBIL PRIBADI & JASA SOPIR */}
        {activeTab === 'mobil' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET_ITEMS.filter(item => item.category === 'mobil').map((car) => (
              <div key={car.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all p-5 flex flex-col justify-between">
                <div>
                  <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                      {car.capacity}
                    </span>
                    <span className="font-bold text-xs text-[#00A859] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Tarif Kompetitif
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">{car.name}</h3>
                  <p className="text-xs text-slate-600 mb-3">{car.description}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectBookingItem({
                      id: car.id,
                      title: `${car.name} (+ Driver Professional)`,
                      category: 'mobil',
                    })}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition-all"
                  >
                    Carter + Sopir Pribadi
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. RENTAL KAMERA & EQUIPMENT */}
        {activeTab === 'kamera' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMERA_GEAR.map((cam) => (
              <div key={cam.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-xl overflow-hidden mb-3 bg-slate-900">
                    <img src={cam.image} alt={cam.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded mb-2 inline-block">
                    {cam.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{cam.name}</h3>
                  <p className="text-[11px] text-slate-500 mb-3 line-clamp-2">{cam.specs}</p>
                  
                  <div className="bg-slate-50 p-2.5 rounded-lg text-[11px] mb-4 border border-slate-100">
                    <span className="font-semibold text-slate-700 block mb-1">Sudah Termasuk Kelengkapan:</span>
                    <ul className="text-[10px] text-slate-600 space-y-0.5">
                      {cam.includes.map((inc, i) => (
                        <li key={i}>• {inc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-700 mb-3">
                    Status: <span className="text-[#00A859] font-extrabold">Kondisi Prima &amp; Lengkap</span>
                  </div>
                  <button
                    onClick={() => onSelectBookingItem({
                      id: cam.id,
                      title: cam.name,
                      category: 'kamera',
                    })}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded-xl transition-all"
                  >
                    Rental Kamera Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 6. EVENT ORGANIZER & ACARA */}
        {activeTab === 'event-organizer' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_ORGANIZER_SERVICES.map((eo) => (
              <div key={eo.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-48 rounded-xl overflow-hidden mb-4 bg-slate-900 relative">
                    <img src={eo.image} alt={eo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                      {eo.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase border border-emerald-200 mb-2 inline-block">
                    Event Service
                  </span>

                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {eo.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {eo.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Termasuk Layanan &amp; Output:</h4>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      {eo.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-3 font-semibold">
                    Penawaran: <span className="text-xs font-extrabold text-[#00A859] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Menyesuaikan Kebutuhan Acara</span>
                  </div>
                  <button
                    onClick={() => onSelectBookingItem({
                      id: eo.id,
                      title: eo.title,
                      category: 'event-organizer',
                    })}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Konsultasi &amp; Booking Acara</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 7. JASA FOTOGRAFER & CINEMATIC */}
        {activeTab === 'cinematic' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEDIA_SERVICES.map((media) => (
              <div key={media.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="h-48 rounded-xl overflow-hidden mb-4 bg-slate-900">
                    <img src={media.image} alt={media.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full uppercase border border-cyan-200 mb-2 inline-block">
                    {media.type}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{media.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{media.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Hasil Output yang Diterima:</h4>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      {media.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-3 font-semibold">
                    Paket: <span className="text-xs font-extrabold text-[#00A859] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Konsultasi Konsep &amp; Rute</span>
                  </div>
                  <button
                    onClick={() => onSelectBookingItem({
                      id: media.id,
                      title: media.title,
                      category: 'cinematic',
                    })}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                  >
                    Pesan Jasa Media Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
