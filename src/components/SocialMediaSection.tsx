import React, { useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  Play, 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Film, 
  Camera, 
  X,
  CheckCircle2,
  Calendar,
  MapPin,
  Tv,
  Layers,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export interface SocialMediaPost {
  id: string;
  type: 'instagram-photo' | 'instagram-reel' | 'youtube-video';
  shortcode?: string;
  youtubeId?: string;
  title: string;
  caption: string;
  thumbnail: string;
  embedUrl: string;
  permalink: string;
  viewsOrLikes: string;
  commentsCount?: string;
  date: string;
  location: string;
  tagBadge: string;
  aspectRatio: 'square' | 'vertical' | 'video';
  categoryLabel: string;
}

export const AUDITED_SOCIAL_MEDIA: SocialMediaPost[] = [
  // --- FOTO INSTAGRAM (3 POSTS) ---
  {
    id: 'ig-photo-1',
    type: 'instagram-photo',
    shortcode: 'C4GDGpAy_wJ',
    title: '✨DOKUMENTASI✨ Karang Taruna Garuda Pratama Goes To Jogja & Gunungkidul',
    caption: 'Dokumentasi perjalanan seru Karang Taruna Garuda Pratama Goes To Jogja & Gunungkidul bersama Biro Perjalanan & Event Organizer CV. FUSENA JAYA. Pengalaman wisata penuh keceriaan, kebersamaan, dan kenyamanan sepanjang rute Jawa Tengah - DIY.',
    thumbnail: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=1000',
    embedUrl: 'https://www.instagram.com/p/C4GDGpAy_wJ/embed/captioned/',
    permalink: 'https://www.instagram.com/p/C4GDGpAy_wJ/',
    viewsOrLikes: '18 Suka',
    commentsCount: '2 Komentar',
    date: '4 Maret 2024',
    location: 'Gunungkidul & Jogja',
    tagBadge: 'Foto Dokumentasi',
    aspectRatio: 'square',
    categoryLabel: 'Foto Instagram'
  },
  {
    id: 'ig-photo-2',
    type: 'instagram-photo',
    shortcode: 'C4AelWey84w',
    title: '✨DOKUMENTASI✨ Sertifikasi Swasta Kecamatan Sayung Demak Goes To Tawangmangu',
    caption: 'Dokumentasi kegiatan resmi "Sertifikasi Swasta Kecamatan Sayung Kabupaten Demak Goes To Tawangmangu (The Lawu Park)" didampingi oleh tim Biro Perjalanan & Event Organizer CV. FUSENA JAYA. Berjalan tertib, sejuk, dan berkesan.',
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000',
    embedUrl: 'https://www.instagram.com/p/C4AelWey84w/embed/captioned/',
    permalink: 'https://www.instagram.com/p/C4AelWey84w/',
    viewsOrLikes: '4 Suka',
    date: '2 Maret 2024',
    location: 'The Lawu Park, Tawangmangu',
    tagBadge: 'Instansi & Dinas',
    aspectRatio: 'square',
    categoryLabel: 'Foto Instagram'
  },
  {
    id: 'ig-photo-3',
    type: 'instagram-photo',
    shortcode: 'C1dLcYCyoSJ',
    title: '✨DOKUMENTASI✨ Nirwana Drumband Goes to Gunungkidul Yogyakarta',
    caption: 'Keseruan rombongan Nirwana Drumband Goes to Gunungkidul Yogyakarta mengunjungi Pantai Sadranan dan Malioboro bersama armada dan tim dokumentasi CV. FUSENA JAYA. Liburan akhir tahun penuh tawa dan kehangatan.',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    embedUrl: 'https://www.instagram.com/p/C1dLcYCyoSJ/embed/captioned/',
    permalink: 'https://www.instagram.com/p/C1dLcYCyoSJ/',
    viewsOrLikes: '17 Suka',
    date: '29 Desember 2023',
    location: 'Pantai Sadranan & Malioboro',
    tagBadge: 'Drumband & Komunitas',
    aspectRatio: 'square',
    categoryLabel: 'Foto Instagram'
  },

  // --- REEL INSTAGRAM (3 REELS) ---
  {
    id: 'ig-reel-1',
    type: 'instagram-reel',
    shortcode: 'C6X6n1SrFT5',
    title: '✨MOVIE STORY✨ HMJB ON VACATION Goes to Pacitan - Jogja',
    caption: 'Video Cinematic HMJB ON VACATION Goes to Pacitan & Jogja (Pantai Klayar, Puncak Becici). Abadikan keindahan deburan ombak pantai Klayar dan panorama senja pegunungan bersama armada wisata CV. Fusena Jaya.',
    thumbnail: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&q=80&w=800',
    embedUrl: 'https://www.instagram.com/reel/C6X6n1SrFT5/embed/captioned/',
    permalink: 'https://www.instagram.com/reel/C6X6n1SrFT5/',
    viewsOrLikes: '20 Suka',
    date: '29 April 2024',
    location: 'Pantai Klayar & Puncak Becici',
    tagBadge: 'Reels Pacitan - Jogja',
    aspectRatio: 'vertical',
    categoryLabel: 'Instagram Reels'
  },
  {
    id: 'ig-reel-2',
    type: 'instagram-reel',
    shortcode: 'C4E3i1xyCNw',
    title: '✨MOVIE STORY✨ Zarkasi Jawa-Madura Ponpes Usmanniyyah Mranggen Demak',
    caption: 'Ziarah & Rekreasi (Zarkasi) Jawa-Madura Ponpes Putra & Putri Usmanniyyah Mranggen Demak. Meneladani karamah Sunan Kalijaga, Sunan Bonang Tuban, hingga Sunan Ampel Surabaya dengan armada Big Bus pariwisata yang nyaman dan berkah.',
    thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
    embedUrl: 'https://www.instagram.com/reel/C4E3i1xyCNw/embed/captioned/',
    permalink: 'https://www.instagram.com/reel/C4E3i1xyCNw/',
    viewsOrLikes: '62 Suka',
    commentsCount: '1 Komentar',
    date: '3 Maret 2024',
    location: 'Jawa - Madura (Ziarah Wali)',
    tagBadge: 'Reels Ziarah Akbar',
    aspectRatio: 'vertical',
    categoryLabel: 'Instagram Reels'
  },
  {
    id: 'ig-reel-3',
    type: 'instagram-reel',
    shortcode: 'C1ty8AGr6n-',
    title: '✨MOVIE STORY✨ Senam Tambakroto Goes to Gunungkidul',
    caption: 'Keseruan grup Senam Tambakroto Sayung Demak berwisata ke Gunungkidul (HeHa Sky View). Senam sehat, jalan-jalan santai, dan foto bersama dengan pemandangan perbukitan Jogja yang memukau.',
    thumbnail: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800',
    embedUrl: 'https://www.instagram.com/reel/C1ty8AGr6n-/embed/captioned/',
    permalink: 'https://www.instagram.com/reel/C1ty8AGr6n-/',
    viewsOrLikes: '15 Suka',
    commentsCount: '9 Komentar',
    date: '5 Januari 2024',
    location: 'HeHa Sky View, Gunungkidul',
    tagBadge: 'Reels Senam & Rekreasi',
    aspectRatio: 'vertical',
    categoryLabel: 'Instagram Reels'
  },

  // --- VIDEO YOUTUBE (3 VIDEOS) ---
  {
    id: 'yt-video-1',
    type: 'youtube-video',
    youtubeId: 'J7LDSS754dQ',
    title: 'Cinematic After Movie | Study Tour MTS Al-Anwar Mranggen-Demak | Goes To Jogja & Gunungkidul',
    caption: 'Aftermovie resmi berdurasi penuh dokumentasi Study Tour siswa-siswi MTS Al-Anwar Mranggen Kabupaten Demak menuju destinasi wisata Yogyakarta & Gunungkidul. Kualitas video cinematic 4K, drone shot, dan momen keakraban berkesan bersama CV. Fusena Jaya.',
    thumbnail: 'https://i.ytimg.com/vi/J7LDSS754dQ/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/J7LDSS754dQ?si=UDmiQNRcJ-ZaMVFp',
    permalink: 'https://www.youtube.com/watch?v=J7LDSS754dQ',
    viewsOrLikes: 'Video Resmi HD',
    date: 'Resmi YouTube Channel',
    location: 'Yogyakarta & Gunungkidul',
    tagBadge: 'Study Tour MTS Al-Anwar',
    aspectRatio: 'video',
    categoryLabel: 'Video YouTube'
  },
  {
    id: 'yt-video-2',
    type: 'youtube-video',
    youtubeId: '6eO_2Qq-YrY',
    title: 'HUT HIMPAUDI Kabupaten Demak Ke-21 Tahun 2026 | Semangat Bersama Memajukan PAUD',
    caption: 'Dokumentasi perayaan HUT HIMPAUDI Kabupaten Demak Ke-21 yang diselenggarakan meriah dan tertata profesional oleh divisi Event Organizer CV. FUSENA JAYA. Bukti kapabilitas kami sebagai partner EO terpercaya untuk instansi dan organisasi besar.',
    thumbnail: 'https://i.ytimg.com/vi/6eO_2Qq-YrY/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/6eO_2Qq-YrY?si=-M13lHo2NAexFDtH',
    permalink: 'https://www.youtube.com/watch?v=6eO_2Qq-YrY',
    viewsOrLikes: 'Liputan Event Resmi',
    date: 'Resmi YouTube Channel',
    location: 'Kabupaten Demak',
    tagBadge: 'Event Organizer HIMPAUDI',
    aspectRatio: 'video',
    categoryLabel: 'Video YouTube'
  },
  {
    id: 'yt-video-3',
    type: 'youtube-video',
    youtubeId: 'wBEO0-4LORI',
    title: 'Cinematic Wedding Ratna & Shofin | Event Organizer Fusena Jaya',
    caption: 'Karya sinematik hari bahagia pernikahan Ratna & Shofin yang diproduksi oleh tim videografi dan dokumentasi CV. FUSENA JAYA. Pengambilan gambar estetis, audio jernih, dan penyusunan cerita yang menyentuh hati.',
    thumbnail: 'https://i.ytimg.com/vi/wBEO0-4LORI/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/wBEO0-4LORI?si=JL3sB0XAsxfar_Ca',
    permalink: 'https://www.youtube.com/watch?v=wBEO0-4LORI',
    viewsOrLikes: 'Cinematic Wedding 4K',
    date: 'Resmi YouTube Channel',
    location: 'Jawa Tengah',
    tagBadge: 'Wedding & Dokumentasi',
    aspectRatio: 'video',
    categoryLabel: 'Video YouTube'
  }
];

export const SocialMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'instagram-photo' | 'instagram-reel' | 'youtube-video'>('all');
  const [viewMode, setViewMode] = useState<'card' | 'embed'>('card');
  const [selectedMedia, setSelectedMedia] = useState<SocialMediaPost | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filteredItems = activeTab === 'all' 
    ? AUDITED_SOCIAL_MEDIA 
    : AUDITED_SOCIAL_MEDIA.filter(item => item.type === activeTab);

  const photoCount = AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'instagram-photo').length;
  const reelCount = AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'instagram-reel').length;
  const youtubeCount = AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'youtube-video').length;

  return (
    <section id="sosial-media" className="py-20 bg-gradient-to-b from-slate-900 via-[#0B2540] to-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0284C7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A859]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title with Audit Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-red-500/20 to-amber-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Audit Media Sosial Resmi &bull; Terverifikasi 100% Asli</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Dokumentasi Seru di <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">Instagram</span> &amp; <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">YouTube</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Semua foto, reels wisata, dan video sinematik di bawah ini bersumber langsung dari postingan resmi <strong>CV. FUSENA JAYA</strong> di akun Instagram <strong className="text-pink-400">@fusenajaya_</strong> dan channel YouTube <strong className="text-red-400">@fusenajayatourtravel6939</strong>.
          </p>
        </div>

        {/* Dual Official Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                  <h3 className="font-extrabold text-lg text-white">{COMPANY_INFO.instagram}</h3>
                  <ShieldCheck className="w-4 h-4 text-pink-400" />
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Akun Resmi Instagram • Update Foto Wisata &amp; Reels Perjalanan
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-pink-200 font-semibold justify-center sm:justify-start">
                  <span>📸 3 Foto Dokumentasi</span>
                  <span>&bull;</span>
                  <span>🎥 3 Video Reels</span>
                  <span>&bull;</span>
                  <span>⭐ Terverifikasi</span>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white font-black text-xs px-5 py-3 rounded-xl shadow-lg shadow-pink-900/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @fusenajaya_</span>
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
                  <h3 className="font-extrabold text-lg text-white">Fusena Jaya Tour &amp; Travel</h3>
                  <ShieldCheck className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {COMPANY_INFO.youtube} &bull; Saluran YouTube Resmi CV. Fusena Jaya
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-red-200 font-semibold justify-center sm:justify-start">
                  <span>🎬 3 Video Pilihan</span>
                  <span>&bull;</span>
                  <span>🚌 Study Tour &amp; EO</span>
                  <span>&bull;</span>
                  <span>📹 Aftermovie 4K</span>
                </div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.youtubeUrl}
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

        {/* Filter Navigation Bar & Mode Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-slate-950/70 p-3 rounded-2xl border border-slate-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start w-full lg:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00A859] text-white shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Semua ({AUDITED_SOCIAL_MEDIA.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('instagram-photo')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'instagram-photo'
                  ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white shadow-lg shadow-pink-900/40 ring-2 ring-pink-400'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Camera className="w-4 h-4 text-white" />
              <span>Foto IG ({photoCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('instagram-reel')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'instagram-reel'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-rose-900/40 ring-2 ring-rose-400'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Film className="w-4 h-4 text-white" />
              <span>Reels IG ({reelCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('youtube-video')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'youtube-video'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 ring-2 ring-red-400'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <Youtube className="w-4 h-4 text-white" />
              <span>YouTube Video ({youtubeCount})</span>
            </button>
          </div>

          {/* Mode Switcher: Galeri Interaktif vs Embed Asli */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-700/80">
            <button
              onClick={() => setViewMode('card')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'card'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Mode Kartu Visual</span>
            </button>

            <button
              onClick={() => setViewMode('embed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'embed'
                  ? 'bg-[#00A859] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Mode Live Embed</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: VISUAL INTERACTIVE CARDS */}
        {viewMode === 'card' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isReel = item.type === 'instagram-reel';
              const isYoutube = item.type === 'youtube-video';
              const isPhoto = item.type === 'instagram-photo';
              const isCurrentlyPlaying = playingVideoId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Media Container: Either inline YouTube player or Image Thumbnail */}
                  <div 
                    className={`relative overflow-hidden ${
                      isReel ? 'h-96' : isYoutube ? 'h-56' : 'h-64'
                    } bg-slate-950`}
                  >
                    {isYoutube && isCurrentlyPlaying ? (
                      <iframe
                        src={`${item.embedUrl}&autoplay=1`}
                        title={item.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        className="w-full h-full cursor-pointer relative"
                        onClick={() => setSelectedMedia(item)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="bg-slate-950/85 backdrop-blur-md text-white font-bold text-[11px] px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-md">
                            {isYoutube && <Youtube className="w-3.5 h-3.5 text-red-500" />}
                            {isReel && <Film className="w-3.5 h-3.5 text-pink-400" />}
                            {isPhoto && <Camera className="w-3.5 h-3.5 text-amber-400" />}
                            <span>{item.tagBadge}</span>
                          </span>

                          <span className="bg-black/80 backdrop-blur-md text-slate-300 font-medium text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-400" />
                            <span className="truncate max-w-[120px]">{item.location}</span>
                          </span>
                        </div>

                        {/* Center Play Button for YouTube and Reels */}
                        {(isReel || isYoutube) && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 ${
                              isYoutube 
                                ? 'bg-red-600 text-white shadow-red-600/50' 
                                : 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-pink-600/50'
                            }`}>
                              <Play className="w-6 h-6 fill-white ml-0.5" />
                            </div>
                          </div>
                        )}

                        {/* Bottom Stats Overlay */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                          <span className="font-semibold flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg">
                            {isYoutube ? (
                              <Eye className="w-3.5 h-3.5 text-red-400" />
                            ) : (
                              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/30" />
                            )}
                            <span>{item.viewsOrLikes}</span>
                          </span>

                          <span className="text-[11px] text-slate-300 font-medium bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-amber-400" />
                            <span>{item.date}</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Channel Identity */}
                      <div className="flex items-center justify-between gap-2 mb-2">
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

                        {item.commentsCount && (
                          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                            <MessageCircle className="w-3 h-3 text-sky-400" />
                            {item.commentsCount}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 
                        onClick={() => setSelectedMedia(item)}
                        className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2 cursor-pointer"
                      >
                        {item.title}
                      </h4>

                      {/* Caption */}
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {item.caption}
                      </p>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                      {isYoutube ? (
                        <button
                          type="button"
                          onClick={() => setPlayingVideoId(isCurrentlyPlaying ? null : item.id)}
                          className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-red-400" />
                          <span>{isCurrentlyPlaying ? 'Tutup Video' : 'Putar Langsung'}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedMedia(item)}
                          className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Lihat Embed</span>
                        </button>
                      )}

                      <a
                        href={item.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                          isYoutube
                            ? 'bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600 hover:text-white'
                            : 'bg-pink-600/20 text-pink-300 border border-pink-500/30 hover:bg-pink-600 hover:text-white'
                        }`}
                      >
                        <span>Buka {isYoutube ? 'YouTube' : 'Instagram'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: LIVE EMBED HUB (Real Instagram & YouTube iframe embeds) */}
        {viewMode === 'embed' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* 1. YouTube Live Embeds Section */}
            {(activeTab === 'all' || activeTab === 'youtube-video') && (
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-red-500/30 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Player Video YouTube Resmi</h3>
                    <p className="text-xs text-slate-400">Putar langsung video dokumentasi tour, event, dan wedding dari kanal Fusena Jaya Tour &amp; Travel</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'youtube-video').map((yt) => (
                    <div key={yt.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                      <div className="aspect-video w-full bg-black">
                        <iframe
                          src={yt.embedUrl}
                          title={yt.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40 mb-2 inline-block">
                            {yt.tagBadge}
                          </span>
                          <h4 className="font-bold text-sm text-white line-clamp-2 mb-1.5">{yt.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-2">{yt.caption}</p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-400" />
                            {yt.location}
                          </span>
                          <a
                            href={yt.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                          >
                            <span>Buka YouTube</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Instagram Reels Live Embed Section */}
            {(activeTab === 'all' || activeTab === 'instagram-reel') && (
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-pink-500/30 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-600 to-rose-600 flex items-center justify-center">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Embed Instagram Reels (@fusenajaya_)</h3>
                    <p className="text-xs text-slate-400">Cuplikan video sinematik Pacitan, Zarkasi Ziarah Wali Songo, dan Senam Tambakroto</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'instagram-reel').map((reel) => (
                    <div key={reel.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                      <div className="w-full bg-slate-950 p-2 flex justify-center">
                        <iframe
                          src={reel.embedUrl}
                          title={reel.title}
                          className="w-full h-[480px] rounded-xl border-0 bg-white"
                          scrolling="no"
                        />
                      </div>
                      <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-pink-400 block truncate max-w-[200px]">{reel.tagBadge}</span>
                          <span className="text-[10px] text-slate-400">{reel.location}</span>
                        </div>
                        <a
                          href={reel.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:opacity-90 flex items-center gap-1"
                        >
                          <span>Buka Reel</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Instagram Photos Live Embed Section */}
            {(activeTab === 'all' || activeTab === 'instagram-photo') && (
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-amber-500/30 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Embed Foto Dokumentasi Instagram</h3>
                    <p className="text-xs text-slate-400">Postingan foto Karang Taruna Garuda Pratama, Sertifikasi Sayung di Tawangmangu, dan Nirwana Drumband</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {AUDITED_SOCIAL_MEDIA.filter(i => i.type === 'instagram-photo').map((photo) => (
                    <div key={photo.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                      <div className="w-full bg-slate-950 p-2 flex justify-center">
                        <iframe
                          src={photo.embedUrl}
                          title={photo.title}
                          className="w-full h-[480px] rounded-xl border-0 bg-white"
                          scrolling="no"
                        />
                      </div>
                      <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-amber-300 block truncate max-w-[200px]">{photo.tagBadge}</span>
                          <span className="text-[10px] text-slate-400">{photo.location}</span>
                        </div>
                        <a
                          href={photo.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white hover:opacity-90 flex items-center gap-1"
                        >
                          <span>Buka Foto</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Audit Certification Box */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2540] via-slate-900 to-[#072036] p-8 rounded-3xl border border-sky-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A859]/20 text-[#00A859] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Audit Sosial Media Resmi Selesai
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Siap Menjadi Bagian dari Dokumentasi Selanjutnya?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Percayakan sewa bus pariwisata, rental mobil, paket tour ziarah, study tour sekolah, hingga dokumentasi video cinematic pernikahan dan gathering Anda bersama <strong>CV. FUSENA JAYA</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Kunjungi Instagram @fusenajaya_</span>
              </a>

              <a
                href={COMPANY_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg shadow-red-900/40 transition-all hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
                <span>Kanal YouTube Fusena Jaya</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20tertarik%20dengan%20layanan%20CV.%20Fusena%20Jaya%20setelah%20melihat%20audit%20dokumentasi%20di%20Instagram%20dan%20YouTube.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00A859] hover:bg-emerald-600 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WA</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal Player for Detail & Embed */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/85">
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
                  <span className="text-[11px] text-slate-400 block">{selectedMedia.tagBadge} &bull; {selectedMedia.date}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Tutup preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with responsive embed player */}
            <div className="overflow-y-auto p-4 sm:p-5 space-y-4 flex-1">
              {selectedMedia.type === 'youtube-video' ? (
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-inner">
                  <iframe
                    src={`${selectedMedia.embedUrl}&autoplay=1`}
                    title={selectedMedia.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden bg-slate-950 flex justify-center p-2 border border-slate-800">
                  <iframe
                    src={selectedMedia.embedUrl}
                    title={selectedMedia.title}
                    className="w-full max-w-[480px] h-[480px] rounded-xl border-0 bg-white"
                    scrolling="no"
                  />
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-1 text-xs text-sky-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedMedia.location}</span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-white mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedMedia.caption}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Heart className="w-4 h-4 fill-amber-300/30" />
                  {selectedMedia.viewsOrLikes}
                </span>
                {selectedMedia.commentsCount && (
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MessageCircle className="w-4 h-4 text-sky-400" />
                    {selectedMedia.commentsCount}
                  </span>
                )}
                <span className="text-[11px] text-slate-400 ml-auto flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {selectedMedia.date}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/85 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedMedia(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Tutup
              </button>

              <a
                href={selectedMedia.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-extrabold px-5 py-2.5 rounded-xl text-white shadow-lg transition-all hover:scale-105 cursor-pointer ${
                  selectedMedia.type === 'youtube-video'
                    ? 'bg-red-600 hover:bg-red-500'
                    : 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]'
                }`}
              >
                <span>Buka Link Asli di {selectedMedia.type === 'youtube-video' ? 'YouTube' : 'Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
