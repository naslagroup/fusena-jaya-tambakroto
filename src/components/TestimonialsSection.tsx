import React, { useState } from 'react';
import { Star, MessageSquare, PlusCircle, CheckCircle2, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    rating: 5,
    text: '',
    serviceUsed: 'Paket Ziarah Wali Songo',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) {
      alert('Mohon isi nama dan ulasan Anda.');
      return;
    }

    const created: Testimonial = {
      id: `testi-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Pelanggan CV. Fusena Jaya',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      rating: newReview.rating,
      text: newReview.text,
      date: 'Baru Saja',
      serviceUsed: newReview.serviceUsed,
    };

    setReviews([created, ...reviews]);
    setShowReviewModal(false);
    setNewReview({ name: '', role: '', rating: 5, text: '', serviceUsed: 'Paket Ziarah Wali Songo' });
    alert('Terima kasih atas ulasan positif Anda untuk CV. FUSENA JAYA!');
  };

  return (
    <section id="testimoni" className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase mb-2">
              <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              Kepuasan Pelanggan
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Ulasan & Pengalaman Jamaah & Klien
            </h2>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <PlusCircle className="w-4 h-4 text-emerald-400" />
            <span>Tulis Ulasan Anda</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{testi.name}</h4>
                      <p className="text-xs text-slate-500">{testi.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testi.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200 fill-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                  "{testi.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                  {testi.serviceUsed}
                </span>
                <span>{testi.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Tulis Ulasan Pengalaman</h3>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900"
                    placeholder="Contoh: H. Ahmad Yani"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jabatan / Instansi
                  </label>
                  <input
                    type="text"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900"
                    placeholder="Contoh: Panitia Ziarah / Warga Kudus"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rating (Bintang)
                  </label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-bold"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (Sangat Puas - 5 Bintang)</option>
                    <option value={4}>⭐⭐⭐⭐ (Puas - 4 Bintang)</option>
                    <option value={3}>⭐⭐⭐ (Cukup - 3 Bintang)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ulasan Pengalaman *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900"
                    placeholder="Tuliskan pengalaman perjalanan Anda..."
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2.5 rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl"
                  >
                    Kirim Ulasan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
