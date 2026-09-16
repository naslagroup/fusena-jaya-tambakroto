import React, { useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  Play, 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Eye, 
  Share2, 
  Bookmark, 
  Sparkles, 
  Film, 
  Camera, 
  Music2, 
  X,
  CheckCircle2,
  Users,
  Video
} from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'instagram-photo' | 'instagram-reel' | 'youtube-video';
  title: string;
  caption: string;
  thumbnail: string;
  videoUrl?: string;
  mediaUrl: string;
  viewsOrLikes: string;
  commentsCount?: string;
  date: string;
  aspectRatio?: 'square' | 'vertical' | 'video';
  audioTitle?: string;
  duration?: string;
  tagBadge: string;
}

const SOCIAL_ITEMS: MediaItem[] = [
  // 1. YouTube Video 1
  {
    id: 'yt-1',
    type: 'youtube-video',
    title: 'AFTERMOVIE RESMI: Study Tour Bali 4D3N Bersama CV. FUSENA JAYA TOUR & TRAVEL',
    caption: 'Dokumentasi lengkap study tour ke Bali mengunjungi Tanah Lot, Pantai Pandawa, Kintamani, dan Bedugul bersama armada Big Bus Pariwisata Fusena Jaya. Layanan ramah, perjalanan aman dan berkesan!',
    thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    mediaUrl: 'https://www.youtube.com/@fusenajayatourtravel6939',
    viewsOrLikes: '12.8K x ditonton',
    date: '1 minggu lalu',
    aspectRatio: 'video',
    duration: '08:45',
    tagBadge: 'Study Tour Bali'
  },
  // 2. Instagram Reel 1
  {
    id: 'ig-reel-1',
    type: 'instagram-reel',
    title: 'Spill Fasilitas Big Bus SHD Pariwisata Fusena Jaya 🚌✨',
    caption: 'Full fasilitas bikin perjalanan ziarah dan tour makin nyaman: Full AC dingin, audio karaoke jedag-jedug, TV LED, bantal selimut wangi & dispenser on board! Siap temani rute Anda.',
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '18.4K Views',
    commentsCount: '86 Komentar',
    date: '3 hari lalu',
    aspectRatio: 'vertical',
    audioTitle: 'Suara Asli - Fusena Jaya Musik Official',
    tagBadge: 'Reels Bus Pariwisata'
  },
  // 3. Instagram Photo 1
  {
    id: 'ig-photo-1',
    type: 'instagram-photo',
    title: 'Pemberangkatan Rombongan Ziarah Wali Songo',
    caption: 'Bismillah pemberangkatan rombongan ziarah Wali Songo Jawa - Madura. Mengutamakan kenyamanan ibadah, keselamatan di jalan, dan kekeluargaan antar jamaah. Semoga mabrur & berkah selalu! 🙏✨ #fusenajaya #ziarahwalisongo #sewabussemarang #sewabusdemak',
    thumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '542 Suka',
    commentsCount: '48 Komentar',
    date: '4 hari lalu',
    aspectRatio: 'square',
    tagBadge: 'Ziarah Religi'
  },
  // 4. Instagram Reel 2
  {
    id: 'ig-reel-2',
    type: 'instagram-reel',
    title: 'Snacktime Seru Piknik Jogja Bareng Fusena Jaya 🥪🍱',
    caption: 'Snacktime #shorts #snacktime #piknikjogja! Keseruan di dalam bus menuju candi Prambanan dan Malioboro. Senyum bahagia penumpang adalah kepuasan terbesar kami.',
    thumbnail: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=800',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '14.2K Views',
    commentsCount: '62 Komentar',
    date: '6 hari lalu',
    aspectRatio: 'vertical',
    audioTitle: 'Piknik Asik - Trend Sound Jogja',
    tagBadge: 'Reels Piknik Jogja'
  },
  // 5. YouTube Video 2
  {
    id: 'yt-2',
    type: 'youtube-video',
    title: 'DOKUMENTASI ZIARAH WALI SONGO JAWA - MADURA | CV. FUSENA JAYA BIRO PERJALANAN',
    caption: 'Perjalanan spiritual ke makam para aulia dan ulama karismatik Nusantara. Dilengkapi dengan pemandu ziarah berpengalaman dan armada bus dengan suspensi udara super empuk.',
    thumbnail: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1200',
    mediaUrl: 'https://www.youtube.com/@fusenajayatourtravel6939',
    viewsOrLikes: '19.5K x ditonton',
    date: '2 minggu lalu',
    aspectRatio: 'video',
    duration: '14:20',
    tagBadge: 'Video Ziarah Akbar'
  },
  // 6. Instagram Photo 2
  {
    id: 'ig-photo-2',
    type: 'instagram-photo',
    title: 'Armada HiAce Premio Executive Carter Tamu VIP',
    caption: 'Unit HiAce Premio Luxury siap melayani penjemputan bandara, kunjungan dinas instansi, dan liburan keluarga privat. Kabin kedap suara, reclining seat, dan driver beretika ramah. #hiacepremio #sewahiace #fusenajaya',
    thumbnail: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '488 Suka',
    commentsCount: '32 Komentar',
    date: '1 minggu lalu',
    aspectRatio: 'square',
    tagBadge: 'Armada HiAce'
  },
  // 7. Instagram Reel 3
  {
    id: 'ig-reel-3',
    type: 'instagram-reel',
    title: 'Iring-iringan Bus Fusena Jaya Melintasi Tol Trans Jawa 🛣️🚌',
    caption: 'Drone shoot konvoi 4 unit Big Bus SHD Pariwisata Fusena Jaya. Rombongan KKL Universitas berjalan tertib, aman, dan tepat waktu sampai lokasi tujuan.',
    thumbnail: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&q=80&w=800',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '31.7K Views',
    commentsCount: '142 Komentar',
    date: '1 minggu lalu',
    aspectRatio: 'vertical',
    audioTitle: 'Cinematic Trans Jawa Road Trip',
    tagBadge: 'Reels Drone Shot'
  },
  // 8. YouTube Video 3
  {
    id: 'yt-3',
    type: 'youtube-video',
    title: 'HIGHLIGHT OUTBOUND & FAMILY GATHERING - TIM EVENT ORGANIZER CV. FUSENA JAYA',
    caption: 'Keseruan acara team building, fun games pantai, live acoustic, dan malam keakraban yang dikemas rapi oleh divisi Event Organizer CV. Fusena Jaya. Sukses dan meriah!',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    mediaUrl: 'https://www.youtube.com/@fusenajayatourtravel6939',
    viewsOrLikes: '7.9K x ditonton',
    date: '3 minggu lalu',
    aspectRatio: 'video',
    duration: '06:12',
    tagBadge: 'Event Organizer'
  },
  // 9. Instagram Photo 3
  {
    id: 'ig-photo-3',
    type: 'instagram-photo',
    title: 'Sunset Indah di Bromo Bersama Sahabat Tour Fusena',
    caption: 'Menikmati megahnya Gunung Bromo dan lautan pasir berbisik bersama armada Elf Long 4WD dan tim dokumentasi profesional kami. Abadikan momen terbaik hidup Anda! #wisatabromo #paketwisata #fusenajaya',
    thumbnail: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1000',
    mediaUrl: 'https://www.instagram.com/fusenajaya_/',
    viewsOrLikes: '675 Suka',
    commentsCount: '54 Komentar',
    date: '2 minggu lalu',
    aspectRatio: 'square',
    tagBadge: 'Bromo Adventure'
  }
];

export const SocialMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'instagram-photo' | 'instagram-reel' | 'youtube-video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? SOCIAL_ITEMS 
    : SOCIAL_ITEMS.filter(item => item.type === activeTab);

  return (
    <section id="sosial-media" className="py-20 bg-gradient-to-b from-slate-900 via-[#0B2540] to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A859]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-red-500/20 to-amber-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Galeri &amp; Feed Sosial Media Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Dokumentasi Seru di <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">Instagram</span> &amp; <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">YouTube</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Ikuti perjalanan nyata kami bersama ribuan rombongan ziarah, study tour sekolah, carter armada eksekutif, dan dokumentasi event spesial langsung dari akun resmi <strong>CV. FUSENA JAYA</strong>.
          </p>
        </div>

        {/* Dual Official Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Instagram Official Card */}
          <div className="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/15 to-[#FCB045]/15 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-pink-400/50 transition-all shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-pink-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <h3 className="font-extrabold text-lg text-white">@fusenajaya_</h3>
                  <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Biro Perjalanan Wisata &amp; Event Organizer • Foto &amp; Reels Update
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-pink-200 font-semibold justify-center sm:justify-start">
                  <span>📸 Foto Perjalanan</span>
                  <span>•</span>
                  <span>🎥 Reels Wisata</span>
                  <span>•</span>
                  <span>⭐ Ulasan Real</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/fusenajaya_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white font-black text-xs px-5 py-3 rounded-xl shadow-lg shadow-pink-900/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow di Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* YouTube Official Card */}
          <div className="bg-gradient-to-br from-red-600/20 via-red-900/15 to-slate-900 border border-red-500/30 rounded-2xl p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-red-400/50 transition-all shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-red-600 p-0.5 shadow-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <h3 className="font-extrabold text-lg text-white">Fusena Jaya Tour Travel</h3>
                  <CheckCircle2 className="w-4 h-4 text-red-400 fill-red-400/20" />
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  @fusenajayatourtravel6939 • Video Tour &amp; Aftermovie HD
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-red-200 font-semibold justify-center sm:justify-start">
                  <span>🎬 Aftermovie 4K</span>
                  <span>•</span>
                  <span>🚌 Review Armada</span>
                  <span>•</span>
                  <span>📹 Ziarah Vlog</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@fusenajayatourtravel6939"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs px-5 py-3 rounded-xl shadow-lg shadow-red-900/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Media Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#00A859] text-white shadow-lg shadow-emerald-900/30 ring-2 ring-emerald-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Semua Media ({SOCIAL_ITEMS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram-photo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'instagram-photo'
                ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white shadow-lg shadow-pink-900/30 ring-2 ring-pink-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Foto Instagram ({SOCIAL_ITEMS.filter(i => i.type === 'instagram-photo').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram-reel')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'instagram-reel'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-rose-900/30 ring-2 ring-rose-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Instagram Reels ({SOCIAL_ITEMS.filter(i => i.type === 'instagram-reel').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('youtube-video')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'youtube-video'
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/30 ring-2 ring-red-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <Youtube className="w-4 h-4" />
            <span>Video YouTube ({SOCIAL_ITEMS.filter(i => i.type === 'youtube-video').length})</span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isReel = item.type === 'instagram-reel';
            const isYoutube = item.type === 'youtube-video';
            const isPhoto = item.type === 'instagram-photo';

            return (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col group hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Media Image / Preview Container */}
                <div 
                  className={`relative overflow-hidden cursor-pointer ${
                    isReel ? 'h-96' : isYoutube ? 'h-52' : 'h-64'
                  } bg-slate-950`}
                  onClick={() => setSelectedMedia(item)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-slate-950/80 backdrop-blur-md text-white font-bold text-[11px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                      {isYoutube && <Youtube className="w-3.5 h-3.5 text-red-500" />}
                      {isReel && <Film className="w-3.5 h-3.5 text-pink-400" />}
                      {isPhoto && <Instagram className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{item.tagBadge}</span>
                    </span>

                    {item.duration && (
                      <span className="bg-black/80 backdrop-blur-md text-amber-300 font-black text-[11px] px-2.5 py-1 rounded-lg">
                        {item.duration}
                      </span>
                    )}
                  </div>

                  {/* Center Play Button for Video & Reels */}
                  {(isReel || isYoutube) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 ${
                        isYoutube 
                          ? 'bg-red-600 text-white shadow-red-600/40' 
                          : 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-pink-600/40'
                      }`}>
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Audio badge for Instagram Reels */}
                  {isReel && item.audioTitle && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-slate-200 text-[10px] px-2.5 py-1 rounded-full border border-white/10 truncate">
                        <Music2 className="w-3 h-3 text-pink-400 animate-pulse flex-shrink-0" />
                        <span className="truncate">{item.audioTitle}</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Stats Overlay */}
                  {!isReel && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                        {isYoutube ? <Eye className="w-3.5 h-3.5 text-sky-400" /> : <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/20" />}
                        {item.viewsOrLikes}
                      </span>
                      <span className="text-[11px] text-slate-400 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg">
                        {item.date}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Author Link */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        {isYoutube ? (
                          <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                            <Youtube className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center flex-shrink-0">
                            <Instagram className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <span className="text-xs font-bold text-slate-300 truncate">
                          {isYoutube ? '@fusenajayatourtravel6939' : '@fusenajaya_'}
                        </span>
                      </div>

                      {isReel && (
                        <span className="text-[11px] font-bold text-pink-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {item.viewsOrLikes}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {item.caption}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedMedia(item)}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Lihat Detail</span>
                    </button>

                    <a
                      href={item.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                        isYoutube
                          ? 'bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600 hover:text-white'
                          : 'bg-pink-600/20 text-pink-300 border border-pink-500/30 hover:bg-pink-600 hover:text-white'
                      }`}
                    >
                      <span>Buka di {isYoutube ? 'YouTube' : 'Instagram'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2540] via-slate-900 to-[#072036] p-8 rounded-3xl border border-sky-600/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A859]/20 text-[#00A859] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Update Setiap Hari &amp; Konsultasi 24 Jam
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ingin Lihat Momen Wisata Rombongan Lainnya?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kunjungi dan follow Instagram <strong>@fusenajaya_</strong> serta subscribe YouTube <strong>@fusenajayatourtravel6939</strong> untuk info ketersediaan armada, promo liburan murah, tips ziarah, dan dokumentasi video sinematik!
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/fusenajaya_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Kunjungi Instagram @fusenajaya_</span>
              </a>

              <a
                href="https://www.youtube.com/@fusenajayatourtravel6939"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg shadow-red-900/40 transition-all hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
                <span>Buka Kanal YouTube Fusena Jaya</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal Preview */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center gap-2.5">
                {selectedMedia.type === 'youtube-video' ? (
                  <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                )}
                <div>
                  <h4 className="font-extrabold text-sm text-white">
                    {selectedMedia.type === 'youtube-video' ? 'YouTube @fusenajayatourtravel6939' : 'Instagram @fusenajaya_'}
                  </h4>
                  <span className="text-[11px] text-slate-400 block">{selectedMedia.tagBadge} • {selectedMedia.date}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Tutup preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-5 space-y-4 flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center group">
                <img
                  src={selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <a
                  href={selectedMedia.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 hover:bg-black/20 flex flex-col items-center justify-center gap-3 transition-colors text-white"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl ${
                    selectedMedia.type === 'youtube-video' ? 'bg-red-600 text-white' : 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white'
                  }`}>
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                  <span className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">
                    Buka &amp; Tonton di {selectedMedia.type === 'youtube-video' ? 'YouTube' : 'Instagram'}
                  </span>
                </a>
              </div>

              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-white mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedMedia.caption}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Eye className="w-4 h-4" />
                  {selectedMedia.viewsOrLikes}
                </span>
                {selectedMedia.commentsCount && (
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MessageCircle className="w-4 h-4" />
                    {selectedMedia.commentsCount}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedMedia(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                Tutup
              </button>

              <a
                href={selectedMedia.mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-extrabold px-5 py-2.5 rounded-xl text-white shadow-lg transition-all hover:scale-105 ${
                  selectedMedia.type === 'youtube-video'
                    ? 'bg-red-600 hover:bg-red-500'
                    : 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]'
                }`}
              >
                <span>Buka Link Asli</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
