import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AiConsultantSection } from './components/AiConsultantSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CostCalculator } from './components/CostCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingBtn } from './components/WhatsAppFloatingBtn';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<{
    id: string;
    title: string;
    category: string;
  } | null>(null);

  const [heroFilterCategory, setHeroFilterCategory] = useState('all');

  const handleOpenBooking = (initialCategory?: string) => {
    if (initialCategory) {
      setSelectedBookingItem({
        id: 'custom-booking',
        title: `Layanan ${initialCategory.toUpperCase()}`,
        category: initialCategory,
      });
    } else {
      setSelectedBookingItem(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectBookingItem = (item: {
    id: string;
    title: string;
    category: string;
  }) => {
    setSelectedBookingItem(item);
    setIsBookingModalOpen(true);
  };

  const handleHeroSearch = (searchParams: {
    category: string;
    passengers: number;
    pickup: string;
    date: string;
  }) => {
    setHeroFilterCategory(searchParams.category);
    // Smooth scroll down to Services
    const el = document.getElementById('layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection="beranda"
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner with Quick Search */}
        <Hero
          onSearchSubmit={handleHeroSearch}
          onOpenBooking={handleOpenBooking}
        />

        {/* Services & Fleet Catalog */}
        <ServicesSection
          onSelectBookingItem={handleSelectBookingItem}
          selectedFilterFromHero={heroFilterCategory}
        />

        {/* Gemini AI Travel Consultant */}
        <AiConsultantSection />

        {/* Portfolio & Gallery Showcase */}
        <PortfolioSection />

        {/* Rental Cost Calculator */}
        <CostCalculator
          onOpenBookingWithDetails={handleSelectBookingItem}
        />

        {/* Reviews & Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact & Map Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Chat */}
      <WhatsAppFloatingBtn />

      {/* Online Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedItem={selectedBookingItem}
      />
    </div>
  );
}
