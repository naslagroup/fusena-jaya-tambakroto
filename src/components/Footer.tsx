import React from 'react';
import { Bus, MapPin, Phone, Mail, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">CV. FUSENA JAYA</span>
                <span className="text-emerald-400 text-[11px] font-medium">Biro Perjalanan Ziarah & Wisata</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Biro perjalanan wisata dan sewa armada bus pariwisata terpercaya. Menawarkan kenyamanan, keamanan armada, sopir berpengalaman, serta hasil dokumentasi video cinematic HD.
            </p>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-900">
              Motto: <strong className="text-slate-300">"Berkah Perjalanan, Kenyamanan Ibadah & Wisata Anda"</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Layanan Utama</h4>
            <ul className="space-y-2">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sewa Bus Pariwisata</a></li>
              <li><a href="#paket" className="hover:text-emerald-400 transition-colors">Paket Ziarah Wali Songo</a></li>
              <li><a href="#paket" className="hover:text-emerald-400 transition-colors">Study Tour & KKL</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Sewa Elf Long & Short</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Carter Mobil & Driver</a></li>
            </ul>
          </div>

          {/* Media & Camera */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Media & Rental</h4>
            <ul className="space-y-2">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Rental Kamera Mirrorless</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Rental Drone DJI</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Jasa Fotografer Tour</a></li>
              <li><a href="#galeri" className="hover:text-emerald-400 transition-colors">Video Cinematic Reels</a></li>
              <li><a href="#kalkulator" className="hover:text-emerald-400 transition-colors">Kalkulator Biaya Sewa</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Kontak Resmi</h4>
            <p className="text-slate-400 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <div className="text-emerald-400 font-bold text-sm">
              WhatsApp: {COMPANY_INFO.displayPhone}
            </div>
            <p className="text-[11px] text-slate-500">
              Email: {COMPANY_INFO.email}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} CV. FUSENA JAYA. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Dirancang dengan dedikasi untuk perjalanan terpercaya Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
