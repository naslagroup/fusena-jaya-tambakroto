import React, { useState } from 'react';
import { Camera, Video, Play, MapPin, Calendar, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMediaModal, setActiveMediaModal] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Dokumentasi' },
    { id: 'ziarah', label: 'Kegiatan Ziarah' },
    { id: 'tour', label: 'Study Tour & KKL' },
    { id: 'armada', label: 'Showcase Armada' },
    { id: 'cinematic', label: 'Video Cinematic' },
    { id: 'fotografi', label: 'Hasil Fotografi' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            Portofolio Perjalanan & Dokumentasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Galeri Momen Ziarah & Wisata Bersama Fusena
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Momen nyata kebersamaan rombongan ziarah Wali Songo, keceriaan siswa study tour, serta jepretan foto & video cinematic berkuaIitas dari tim CV. FUSENA JAYA.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMediaModal(item)}
              className="group relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {item.isCinematic && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border border-emerald-500/30">
                  {item.category}
                </div>
              </div>

              <div className="p-5 relative z-10 space-y-2">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {item.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal Lightbox / Player */}
        {activeMediaModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-3xl max-w-3xl w-full border border-slate-800 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <h4 className="font-bold text-sm text-white">{activeMediaModal.title}</h4>
                <button
                  onClick={() => setActiveMediaModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {activeMediaModal.videoUrl ? (
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                      src={activeMediaModal.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="max-h-[70vh] rounded-xl overflow-hidden bg-black">
                    <img
                      src={activeMediaModal.image}
                      alt={activeMediaModal.title}
                      className="w-full h-full object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-4 text-emerald-400 font-medium">
                    <span>Lokasi: {activeMediaModal.location}</span>
                    <span>•</span>
                    <span>Tanggal: {activeMediaModal.date}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {activeMediaModal.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
