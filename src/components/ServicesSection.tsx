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
  Compass
} from 'lucide-react';
import { 
  FLEET_ITEMS, 
  TOUR_PACKAGES, 
  CAMERA_GEAR, 
  MEDIA_SERVICES, 
  COMPANY_INFO 
} from '../data/mockData';
import { FleetItem, TourPackage, CameraGear, MediaService } from '../types';

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
    { id: 'paket-wisata', label: 'Paket Ziarah & Tour', icon: Compass, count: '5 Paket' },
    { id: 'elf', label: 'Sewa Elf (Microbus)', icon: Car, count: '2 Pilihan' },
    { id: 'mobil', label: 'Sewa Mobil & Driver', icon: UserCheck, count: '3 Pilihan' },
    { id: 'kamera', label: 'Rental Kamera', icon: Camera, count: '4 Unit' },
    { id: 'cinematic', label: 'Jasa Fotografer & Cinematic', icon: Video, count: '3 Layanan' },
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
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'
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
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg backdrop-blur-md">
                    Rp {bus.pricePerDay.toLocaleString('id-ID')} / hari
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
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 text-white p-2.5 rounded-xl backdrop-blur-md">
                    <span className="text-[10px] text-slate-300 block">Mulai dari</span>
                    <span className="font-extrabold text-sm text-emerald-400">
                      Rp {pkg.priceStartFrom.toLocaleString('id-ID')} / pax
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
                    <span className="font-extrabold text-sm text-slate-900">
                      Rp {elf.pricePerDay.toLocaleString('id-ID')} / hari
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
                    <span className="font-extrabold text-sm text-emerald-600">
                      Rp {car.pricePerDay.toLocaleString('id-ID')} / hari
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
                  <div className="text-xs font-bold text-slate-900 mb-3">
                    Sewa: <span className="text-emerald-600">Rp {cam.pricePerDay.toLocaleString('id-ID')}</span> / 24 jam
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

        {/* 6. JASA FOTOGRAFER & CINEMATIC */}
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
                  <div className="text-xs text-slate-500 mb-3">
                    Mulai dari <strong className="text-sm font-extrabold text-slate-900">Rp {media.priceStartFrom.toLocaleString('id-ID')}</strong>
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
