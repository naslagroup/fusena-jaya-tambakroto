import React, { useState } from 'react';
import { Calculator, Bus, Calendar, Check, ArrowRight, MessageCircle, DollarSign } from 'lucide-react';
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

  const fleetCost = selectedFleet.pricePerDay * days;
  const photoCost = includePhotographer ? 750000 * days : 0;
  const cinematicCost = includeCinematic ? 1200000 * days : 0;
  const droneCost = includeDrone ? 1000000 : 0;

  const totalEstimatedCost = fleetCost + photoCost + cinematicCost + droneCost;

  const handleConsultation = () => {
    const text = `*ESTIMASI BIAYA KALKULATOR - CV. FUSENA JAYA*
----------------------------------------
*Armada Pilihan:* ${selectedFleet.name}
*Durasi Sewa:* ${days} Hari
*Estimasi Sewa Armada:* Rp ${fleetCost.toLocaleString('id-ID')}
${includePhotographer ? `- Jasa Fotografer: Rp ${photoCost.toLocaleString('id-ID')}\n` : ''}${includeCinematic ? `- Video Cinematic: Rp ${cinematicCost.toLocaleString('id-ID')}\n` : ''}${includeDrone ? `- Drone Footage 4K: Rp ${droneCost.toLocaleString('id-ID')}\n` : ''}
----------------------------------------
*TOTAL ESTIMASI:* Rp ${totalEstimatedCost.toLocaleString('id-ID')}

Mohon informasi ketersediaan unit untuk tanggal jadwal kami.`;

    window.open(`https://wa.me/${COMPANY_INFO.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kalkulator" className="py-20 bg-slate-100 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-xs font-bold uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Estimasi Transparan & Cepat
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Kalkulator Simulasi Biaya Sewa Armada
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Hitung sendiri perkiraan biaya sewa bus pariwisata, Elf, maupun mobil pribadi lengkap dengan opsi paket dokumentasi media.
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
                    {f.name} ({f.capacity}) - Rp {f.pricePerDay.toLocaleString('id-ID')}/hr
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
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <span className="bg-slate-900 text-white font-extrabold text-sm px-3.5 py-1.5 rounded-lg min-w-[70px] text-center">
                  {days} Hari
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                3. Tambahan Paket Dokumentasi Media (Opsional)
              </label>

              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includePhotographer}
                      onChange={(e) => setIncludePhotographer(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Jasa Fotografer Tour Full-Day
                  </span>
                  <span className="text-xs font-bold text-emerald-700">+Rp 750rb / hr</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeCinematic}
                      onChange={(e) => setIncludeCinematic(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Video Cinematic Reels & Aftermovie HD
                  </span>
                  <span className="text-xs font-bold text-emerald-700">+Rp 1,2jt / hr</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    Drone Aerial Footage 4K
                  </span>
                  <span className="text-xs font-bold text-emerald-700">+Rp 1jt / trip</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Breakdown Column */}
          <div className="md:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-extrabold text-base text-emerald-400 border-b border-slate-800 pb-3">
                Rincian Estimasi Biaya
              </h3>

              <div className="text-xs space-y-2.5 text-slate-300">
                <div className="flex justify-between">
                  <span>Unit Armada ({selectedFleet.name}):</span>
                  <span className="font-bold text-white">Rp {fleetCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Durasi:</span>
                  <span>{days} Hari</span>
                </div>
                {includePhotographer && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Fotografer ({days} hr):</span>
                    <span>Rp {photoCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
                {includeCinematic && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Video Cinematic ({days} hr):</span>
                    <span>Rp {cinematicCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
                {includeDrone && (
                  <div className="flex justify-between text-emerald-300">
                    <span>Drone Footage 4K:</span>
                    <span>Rp {droneCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4">
                <span className="text-[11px] text-slate-400 block uppercase">Total Perkiraan Biaya:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  Rp {totalEstimatedCost.toLocaleString('id-ID')}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  *Sudah termasuk Driver & BBM standar rute. Biaya tol/parkir disesuaikan.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={() =>
                  onOpenBookingWithDetails({
                    category: selectedFleet.category,
                    itemId: selectedFleet.id,
                    title: `${selectedFleet.name} (${days} Hari)`,
                  })
                }
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <span>Lanjutkan Form Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleConsultation}
                className="w-full bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs py-3 rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Estimasi Ke WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
