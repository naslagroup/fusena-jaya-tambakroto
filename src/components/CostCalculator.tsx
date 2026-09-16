import React, { useState } from 'react';
import { Calendar, Check, ArrowRight, MessageCircle, Sliders, ShieldCheck } from 'lucide-react';
import { FLEET_ITEMS, COMPANY_INFO } from '../data/mockData';

interface CostCalculatorProps {
  onOpenBookingWithDetails: (details: {
    category: string;
    itemId: string;
    title: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenBookingWithDetails }) => {
  const [selectedFleetId, setSelectedFleetId] = useState('bus-big');
  const [days, setDays] = useState(2);
  const [includePhotographer, setIncludePhotographer] = useState(false);
  const [includeCinematic, setIncludeCinematic] = useState(false);
  const [includeDrone, setIncludeDrone] = useState(false);

  const selectedFleet = FLEET_ITEMS.find((f) => f.id === selectedFleetId) || FLEET_ITEMS[0];

  const handleConsultation = () => {
    const text = `*KONSULTASI KEBUTUHAN SEWA ARMADA - CV. FUSENA JAYA*
----------------------------------------
*Armada Pilihan:* ${selectedFleet.name} (${selectedFleet.capacity})
*Durasi Sewa:* ${days} Hari
*Layanan Tambahan:*
${includePhotographer ? `- Jasa Fotografer: Ya\n` : ''}${includeCinematic ? `- Video Cinematic: Ya\n` : ''}${includeDrone ? `- Drone Footage 4K: Ya\n` : ''}
----------------------------------------
Mohon informasi ketersediaan unit dan kirimkan penawaran harga terbaik untuk jadwal kami. Terima kasih!`;

    window.open(`https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kalkulator" className="py-20 bg-slate-100 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#00A859] text-xs font-bold uppercase mb-3 border border-emerald-200">
            <Sliders className="w-3.5 h-3.5 text-[#00A859]" />
            Perencanaan Cepat &amp; Praktis
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B2540]">
            Simulasi Kebutuhan Sewa Armada &amp; Acara
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Rencanakan sendiri kebutuhan armada bus pariwisata, Hiace, Elf, maupun rental mobil beserta opsi paket dokumentasi untuk mendapatkan penawaran harga terbaik.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Inputs Column */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                1. Pilih Jenis Armada
              </label>
              <select
                value={selectedFleetId}
                onChange={(e) => setSelectedFleetId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500"
              >
                {FLEET_ITEMS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} ({f.capacity})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                2. Durasi Perjalanan (Hari)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-[#00A859] h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <span className="bg-[#0B2540] text-amber-300 font-black text-sm px-3.5 py-1.5 rounded-lg min-w-[75px] text-center shadow-sm">
                  {days} Hari
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                3. Tambahan Paket Dokumentasi Media (Opsional)
              </label>

              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includePhotographer}
                      onChange={(e) => setIncludePhotographer(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Jasa Fotografer Tour Full-Day
                  </span>
                  <span className="text-xs font-bold text-[#00A859] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Kru Profesional</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeCinematic}
                      onChange={(e) => setIncludeCinematic(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Video Cinematic Reels &amp; Aftermovie HD
                  </span>
                  <span className="text-xs font-bold text-[#00A859] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Format 4K &amp; Reels</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Drone Aerial Footage 4K
                  </span>
                  <span className="text-xs font-bold text-[#00A859] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Pilot Berlisensi</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Breakdown Column */}
          <div className="md:col-span-5 bg-[#0B2540] text-white p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-sky-800/50">
            <div className="space-y-4">
              <h3 className="font-extrabold text-base text-amber-300 border-b border-sky-800/80 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00A859]" />
                Rincian Kebutuhan Terpilih
              </h3>

              <div className="text-xs space-y-2.5 text-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-300">Unit Armada:</span>
                  <span className="font-bold text-white text-right">{selectedFleet.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Kapasitas Kursi:</span>
                  <span className="font-bold text-sky-200">{selectedFleet.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Durasi Perjalanan:</span>
                  <span className="font-bold text-amber-300">{days} Hari</span>
                </div>
                {includePhotographer && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Fotografer Tour:</span>
                    <span className="font-semibold">Termasuk ({days} Hari)</span>
                  </div>
                )}
                {includeCinematic && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Video Cinematic:</span>
                    <span className="font-semibold">Termasuk ({days} Hari)</span>
                  </div>
                )}
                {includeDrone && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Drone Aerial 4K:</span>
                    <span className="font-semibold">Termasuk</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-sky-800/80 mt-4 bg-sky-950/50 p-4 rounded-xl border border-sky-700/40">
                <span className="text-[10px] text-amber-300 block uppercase font-bold tracking-wider">
                  Penawaran Harga Resmi:
                </span>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Tarif Khusus &amp; Nego Ramah
                </div>
                <p className="text-[11px] text-sky-200 mt-1 leading-relaxed">
                  *Dapatkan harga diskon rombongan dan paket hemat langsung dari CS kami.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={handleConsultation}
                className="w-full bg-[#00A859] hover:bg-emerald-600 text-white font-black text-xs py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Minta Penawaran Harga via WA</span>
              </button>

              <button
                onClick={() =>
                  onOpenBookingWithDetails({
                    category: selectedFleet.category,
                    itemId: selectedFleet.id,
                    title: `${selectedFleet.name} (${days} Hari)`,
                  })
                }
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Lanjutkan ke Form Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
