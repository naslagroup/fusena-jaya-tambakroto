import React, { useState, useEffect } from 'react';
import { 
  Bus, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  Camera, 
  Calendar,
  MessageCircle,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenBooking: (initialCategory?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Melayani Jasa', href: '#melayani-jasa' },
    { name: 'Paket Wisata', href: '#paket' },
    { name: 'Event Organizer', href: '#event-organizer' },
    { name: 'Katalog Detail', href: '#layanan' },
    { name: 'Simulasi Sewa', href: '#kalkulator' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar Contact Info */}
      <div className="bg-[#072036] text-slate-200 text-xs py-2 px-4 border-b border-sky-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-200">
              <MapPin className="w-3.5 h-3.5 text-[#00A859]" />
              {COMPANY_INFO.address}
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20Mas%20${encodeURIComponent(COMPANY_INFO.contactPerson)},%20saya%20ingin%20tanya%20layanan%20CV.%20Fusena%20Jaya.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A859]" />
              WA: {COMPANY_INFO.displayPhone} ({COMPANY_INFO.contactPerson})
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-300 font-script text-base font-bold tracking-wide">
              &ldquo;{COMPANY_INFO.motto}&rdquo;
            </span>
            <span className="text-sky-700">|</span>
            <span className="text-emerald-300 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></span>
              Layanan Wisata &amp; EO 24 Jam
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        id="main-nav-bar"
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 text-slate-900' 
            : 'bg-[#0B2540]/95 backdrop-blur-md py-3.5 text-white border-b border-sky-500/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo with tropical sun/mountain emblem */}
          <a href="#beranda" className="group">
            <BrandLogo
              variant={isScrolled ? 'dark' : 'light'}
              size="md"
              showSubtitle={true}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-emerald-600 hover:bg-slate-100'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-consult-ai-btn"
              onClick={() => {
                const el = document.getElementById('ai-consultant');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                isScrolled
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                  : 'bg-white/10 text-emerald-300 border border-emerald-500/30 hover:bg-white/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin" style={{ animationDuration: '4s' }} />
              Tanya AI Fusena
            </button>

            <button
              id="nav-online-booking-btn"
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-[#00A859] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-800/30 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Booking Online</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 text-white border-b border-slate-800 backdrop-blur-xl px-4 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                id="mobile-ai-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const el = document.getElementById('ai-consultant');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs rounded-xl border border-emerald-500/30"
              >
                <Sparkles className="w-4 h-4" />
                Konsultan Perjalanan AI
              </button>

              <button
                id="mobile-booking-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30"
              >
                <Calendar className="w-4 h-4" />
                Form Booking Online
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.phone}?text=Halo%20CV.%20Fusena%20Jaya,%20saya%20ingin%20konsultasi%20mengenai%20sewa%20armada%20/%20paket%20wisata.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600/20 text-emerald-400 font-semibold text-xs rounded-xl border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp Langsung
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
