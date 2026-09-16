import React from 'react';
import { Bus, MapPin, Phone, Mail, ChevronRight, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072036] text-slate-300 text-xs border-t border-sky-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" showSubtitle={true} />

            <p className="text-slate-300 text-xs leading-relaxed">
              Biro Perjalanan Wisata &amp; Event Organizer terpercaya. Menawarkan kenyamanan sewa rental mobil, HiAce, Elf, bus pariwisata, paket tour domestik/mancanegara, ziarah, serta dokumentasi &amp; penyelenggara acara profesional.
            </p>

            <div className="bg-[#0B2540] p-3.5 rounded-xl border border-sky-800/60 text-[11px] text-slate-200">
              <span className="text-amber-300 font-script text-lg block font-bold">
                &ldquo;{COMPANY_INFO.subtext}&rdquo;
              </span>
              <span className="text-sky-200 block mt-0.5 font-medium">Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">Melayani Jasa</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#melayani-jasa" className="hover:text-amber-300 transition-colors">Sewa Rental Mobil</a></li>
              <li><a href="#melayani-jasa" className="hover:text-amber-300 transition-colors">Sewa Hiace Premio</a></li>
              <li><a href="#melayani-jasa" className="hover:text-amber-300 transition-colors">Sewa Elf Long &amp; Short</a></li>
              <li><a href="#melayani-jasa" className="hover:text-amber-300 transition-colors">Sewa Bus Pariwisata</a></li>
              <li><a href="#paket" className="hover:text-amber-300 transition-colors">Paket Wisata Domestik</a></li>
              <li><a href="#paket" className="hover:text-amber-300 transition-colors">Paket Wisata Religi</a></li>
            </ul>
          </div>

          {/* Event Organizer Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">Event Organizer</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#event-organizer" className="hover:text-amber-300 transition-colors">Dokumentasi Wedding</a></li>
              <li><a href="#event-organizer" className="hover:text-amber-300 transition-colors">Acara Ulang Tahun</a></li>
              <li><a href="#event-organizer" className="hover:text-amber-300 transition-colors">Acara Kedinasan</a></li>
              <li><a href="#event-organizer" className="hover:text-amber-300 transition-colors">Seminar &amp; Workshop</a></li>
              <li><a href="#event-organizer" className="hover:text-amber-300 transition-colors">Reuni &amp; Gathering</a></li>
              <li><a href="#galeri" className="hover:text-amber-300 transition-colors">Video Cinematic HD</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">Informasi Lebih Lanjut</h4>
            <p className="text-slate-300 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-amber-300 font-bold hover:underline"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00A859]" />
              <span>Buka Titik Lokasi di Google Maps</span>
            </a>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20ingin%20konsultasi%20layanan%20CV.%20Fusena%20Jaya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00A859] hover:bg-emerald-600 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WA. {COMPANY_INFO.waNumberClean} ({COMPANY_INFO.contactPerson})</span>
              </a>
            </div>
            <p className="text-[11px] text-sky-300 pt-1">
              Email: {COMPANY_INFO.email}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sky-200 text-[11px]">
          <div>
            © {new Date().getFullYear()} CV. FUSENA JAYA. Biro Perjalanan Wisata &amp; Event Organizer.
          </div>
          <div className="flex items-center gap-1 text-amber-300 font-semibold">
            <span>Aman &amp; Terpercaya • Pelayanan Terbaik • Harga Kompetitif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
