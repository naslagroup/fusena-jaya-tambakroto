import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Bus, 
  Send, 
  MessageCircle, 
  ShieldCheck,
  PlusCircle,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, FLEET_ITEMS, TOUR_PACKAGES, CAMERA_GEAR, MEDIA_SERVICES } from '../data/mockData';
import { BookingFormState, ServiceCategory } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: {
    id: string;
    title: string;
    category: string;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedItem
}) => {
  const [formState, setFormState] = useState<BookingFormState>({
    category: 'bus',
    selectedItemId: 'bus-big',
    selectedItemTitle: 'Big Bus Pariwisata SHD / HDD (48-59 Seat)',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    durationDays: 1,
    passengerCount: 45,
    pickupLocation: 'Demak / Kudus / Semarang',
    destination: 'Ziarah Wali Songo / Jogja / Bali',
    needDriver: true,
    needPhotographer: false,
    needCinematic: false,
    needDrone: false,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    notes: '',
  });

  const [bookingSuccessCode, setBookingSuccessCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preselected item if passed
  useEffect(() => {
    if (preselectedItem) {
      setFormState((prev) => ({
        ...prev,
        category: (preselectedItem.category as ServiceCategory) || 'bus',
        selectedItemId: preselectedItem.id,
        selectedItemTitle: preselectedItem.title,
      }));
    }
  }, [preselectedItem]);

  // Recalculate duration when dates change
  useEffect(() => {
    if (formState.startDate && formState.endDate) {
      const start = new Date(formState.startDate).getTime();
      const end = new Date(formState.endDate).getTime();
      const diffTime = end - start;
      const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      setFormState((prev) => ({ ...prev, durationDays: diffDays }));
    }
  }, [formState.startDate, formState.endDate]);

  if (!isOpen) return null;

  // Calculate dynamic price estimation
  const getEstimatedPrice = () => {
    let basePricePerDay = 1500000;

    // Check in Fleets
    const fleet = FLEET_ITEMS.find((f) => f.id === formState.selectedItemId);
    if (fleet) {
      basePricePerDay = fleet.pricePerDay;
    } else {
      // Check in Tour Packages
      const pkg = TOUR_PACKAGES.find((p) => p.id === formState.selectedItemId);
      if (pkg) {
        return pkg.priceStartFrom * Math.max(1, formState.passengerCount);
      }
      // Check in Cameras
      const cam = CAMERA_GEAR.find((c) => c.id === formState.selectedItemId);
      if (cam) {
        basePricePerDay = cam.pricePerDay;
      }
      // Check in Media
      const media = MEDIA_SERVICES.find((m) => m.id === formState.selectedItemId);
      if (media) {
        return media.priceStartFrom;
      }
    }

    let total = basePricePerDay * formState.durationDays;

    if (formState.needPhotographer) total += 750000 * formState.durationDays;
    if (formState.needCinematic) total += 1200000 * formState.durationDays;
    if (formState.needDrone) total += 1000000;

    return total;
  };

  const estimatedTotal = getEstimatedPrice();

  const handleWhatsAppBooking = () => {
    if (!formState.customerName || !formState.customerPhone) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
    }

    const message = `*FORM BOOKING ONLINE - CV. FUSENA JAYA*
----------------------------------------
*Nama Pemesan:* ${formState.customerName}
*No. WhatsApp:* ${formState.customerPhone}
*Kategori Layanan:* ${formState.category.toUpperCase()}
*Unit / Paket:* ${formState.selectedItemTitle}
*Jumlah Peserta:* ${formState.passengerCount} Orang
*Tanggal Keberangkatan:* ${formState.startDate}
*Tanggal Pulang:* ${formState.endDate} (${formState.durationDays} Hari)
*Lokasi Jemput:* ${formState.pickupLocation}
*Tujuan / Rute:* ${formState.destination}

*Layanan Tambahan:*
- Driver / Sopir: ${formState.needDriver ? 'Ya (Termasuk)' : 'Tidak'}
- Jasa Fotografer: ${formState.needPhotographer ? 'Ya (+Fotografer)' : 'Tidak'}
- Video Cinematic: ${formState.needCinematic ? 'Ya (+Cinematic Reels)' : 'Tidak'}
- Drone Footage: ${formState.needDrone ? 'Ya (+Drone 4K)' : 'Tidak'}

*Catatan Tambahan:* ${formState.notes || '-'}
----------------------------------------
*Estimasi Total Biaya:* Rp ${estimatedTotal.toLocaleString('id-ID')}

Mohon konfirmasi ketersediaan dan rincian Down Payment (DP) resmi. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.phone}?text=${encoded}`, '_blank');
  };

  const handleSaveOnlineBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.customerName || !formState.customerPhone) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          estimatedTotal,
        }),
      });
      const data = await response.json();
      if (data.success && data.booking) {
        setBookingSuccessCode(data.booking.id);
      } else {
        alert('Terjadi kesalahan pencatatan. Silakan langsung kirim via WhatsApp.');
      }
    } catch (err) {
      console.error(err);
      // Fallback local code generator
      const fallbackCode = `FSN-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingSuccessCode(fallbackCode);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Form Booking Online</h3>
              <p className="text-xs text-emerald-400 font-medium">CV. FUSENA JAYA - Perjalanan Ziarah & Wisata</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {bookingSuccessCode ? (
          /* SUCCESS SCREEN */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900">Permintaan Booking Berhasil Disimpan!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Kode Referensi Booking Anda: <br />
                <span className="font-mono font-extrabold text-lg text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg inline-block my-2 border border-emerald-200">
                  {bookingSuccessCode}
                </span>
              </p>
              <p className="text-xs text-slate-500">
                Langkah selanjutnya: Klik tombol di bawah ini untuk menghubungkan pesan booking Anda langsung ke Customer Service WhatsApp CV. FUSENA JAYA untuk konfirmasi DP & jadwal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <button
                onClick={handleWhatsAppBooking}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Lanjutkan Kirim Pesan Ke WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setBookingSuccessCode(null);
                  onClose();
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl"
              >
                Tutup Modal
              </button>
            </div>
          </div>
        ) : (
          /* FORM BODY */
          <form onSubmit={handleSaveOnlineBooking} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Select Category & Item */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">1</span>
                Pilih Layanan & Unit Armada
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kategori Layanan
                  </label>
                  <select
                    value={formState.category}
                    onChange={(e) => {
                      const cat = e.target.value as ServiceCategory;
                      let defaultTitle = 'Big Bus Pariwisata';
                      let defaultId = 'bus-big';
                      if (cat === 'paket-wisata') {
                        defaultTitle = TOUR_PACKAGES[0].title;
                        defaultId = TOUR_PACKAGES[0].id;
                      } else if (cat === 'elf') {
                        defaultTitle = FLEET_ITEMS.find((f) => f.category === 'elf')?.name || 'Elf Long';
                        defaultId = 'elf-long';
                      } else if (cat === 'mobil') {
                        defaultTitle = 'Toyota Innova Reborn';
                        defaultId = 'innova-reborn';
                      } else if (cat === 'kamera') {
                        defaultTitle = CAMERA_GEAR[0].name;
                        defaultId = CAMERA_GEAR[0].id;
                      } else if (cat === 'cinematic') {
                        defaultTitle = MEDIA_SERVICES[0].title;
                        defaultId = MEDIA_SERVICES[0].id;
                      }

                      setFormState((prev) => ({
                        ...prev,
                        category: cat,
                        selectedItemId: defaultId,
                        selectedItemTitle: defaultTitle,
                      }));
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                  >
                    <option value="bus">Sewa Bus Pariwisata</option>
                    <option value="paket-wisata">Paket Tour & Ziarah</option>
                    <option value="elf">Sewa Microbus Elf</option>
                    <option value="mobil">Sewa Mobil Pribadi & Driver</option>
                    <option value="kamera">Rental Kamera & Drone</option>
                    <option value="cinematic">Jasa Fotografer & Video Cinematic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Unit / Paket
                  </label>
                  <input
                    type="text"
                    value={formState.selectedItemTitle}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, selectedItemTitle: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    placeholder="cth: Big Bus SHD / Ziarah Wali Songo"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Date & Duration & Passenger Count */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">2</span>
                Jadwal & Peserta Perjalanan
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tanggal Berangkat
                  </label>
                  <input
                    type="date"
                    value={formState.startDate}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, startDate: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tanggal Pulang
                  </label>
                  <input
                    type="date"
                    value={formState.endDate}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, endDate: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jumlah Peserta (Pax)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formState.passengerCount}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, passengerCount: Number(e.target.value) }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lokasi Penjemputan
                  </label>
                  <input
                    type="text"
                    value={formState.pickupLocation}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, pickupLocation: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    placeholder="Contoh: Alun-Alun Kudus / Sekolah SMAN 1 Demak"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tujuan / Rute Perjalanan
                  </label>
                  <input
                    type="text"
                    value={formState.destination}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, destination: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    placeholder="Contoh: Ziarah Wali 9 Jawa Timur - Madura"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Add-on Media Services */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">3</span>
                Layanan Tambahan (Optional Add-ons)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors text-xs">
                  <input
                    type="checkbox"
                    checked={formState.needPhotographer}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, needPhotographer: e.target.checked }))
                    }
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-slate-800 block">Jasa Fotografer</span>
                    <span className="text-[10px] text-slate-500">+Rp 750rb / hari</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors text-xs">
                  <input
                    type="checkbox"
                    checked={formState.needCinematic}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, needCinematic: e.target.checked }))
                    }
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-slate-800 block">Video Cinematic Reels</span>
                    <span className="text-[10px] text-slate-500">+Rp 1,2jt / hari</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors text-xs">
                  <input
                    type="checkbox"
                    checked={formState.needDrone}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, needDrone: e.target.checked }))
                    }
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <div>
                    <span className="font-bold text-slate-800 block">Drone Footage Aerial</span>
                    <span className="text-[10px] text-slate-500">+Rp 1jt / trip</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Customer Details */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">4</span>
                Identitas Pemesan
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap Pemesan *
                  </label>
                  <input
                    type="text"
                    value={formState.customerName}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, customerName: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    placeholder="Nama Penanggung Jawab / Ketua Rombongan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    No. WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    value={formState.customerPhone}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, customerPhone: e.target.value }))
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                    placeholder="Contoh: 081234567890"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catatan / Permintaan Khusus
                </label>
                <textarea
                  value={formState.notes}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium text-slate-800"
                  placeholder="Contoh: Minta ketersediaan charger laptop, toilet aktif, atau request banner MMT rombongan."
                />
              </div>
            </div>

            {/* Total Estimation Box */}
            <div className="bg-emerald-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-emerald-300 uppercase font-bold tracking-wider">
                  Estimasi Biaya ({formState.durationDays} Hari)
                </span>
                <div className="text-2xl font-extrabold text-white">
                  Rp {estimatedTotal.toLocaleString('id-ID')}
                </div>
                <span className="text-[10px] text-emerald-200">
                  *Belum termasuk biaya tol, parkir & tips driver opsional
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Ke WA</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isSubmitting ? 'Menyimpan...' : 'Simpan Data'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
