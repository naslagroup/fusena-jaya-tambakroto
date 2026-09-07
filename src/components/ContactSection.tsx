import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ShieldCheck, Bus, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact & Office Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Hubungi CV. FUSENA JAYA
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Kantor & Pelayanan 24 Jam
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Silakan datang langsung ke kantor garasi kami atau hubungi tim pemasaran untuk survei fisik unit bus & ketersediaan armada.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <span>Alamat Kantor & Garasi Armada</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{COMPANY_INFO.address}</p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold hover:text-emerald-300 pt-1 underline"
                  >
                    <span>Buka Rute Pin Peta Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Customer Service & Hotline (WhatsApp)</h4>
                  <p className="text-xs text-slate-300 font-semibold">{COMPANY_INFO.displayPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Email Resmi & Surat Penawaran</h4>
                  <p className="text-xs text-slate-300">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Jam Operasional Layanan</h4>
                  <p className="text-xs text-slate-300">{COMPANY_INFO.operatingHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20ingin%20konsultasi%20langsung.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat Customer Service via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Card & Directions */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                <Bus className="w-5 h-5 text-emerald-400" />
                <span>Lokasi Strategis Garasi Armada</span>
              </h3>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Buka Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 relative">
              {/* Responsive Maps Embed / Visual Frame */}
              <iframe
                title="Lokasi CV Fusena Jaya"
                src="https://maps.google.com/maps?q=Unnamed+Road%2C+Pentalan%2C+Tambakroto%2C+Kec.+Sayung%2C+Kabupaten+Demak%2C+Jawa+Tengah+59563&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 opacity-90"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
              <div className="text-emerald-400 font-bold">Rute & Jalur Penjemputan Utama:</div>
              <p className="text-slate-300 leading-relaxed">
                Melayani penjemputan gratis seluruh wilayah Demak, Kudus, Jepara, Pati, Semarang, Grobogan, hingga luar kota / seluruh Jawa & Bali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
