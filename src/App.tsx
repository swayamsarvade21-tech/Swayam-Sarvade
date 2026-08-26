import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FleetSection } from './components/FleetSection';
import { BookingCalculator } from './components/BookingCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalCarId, setModalCarId] = useState<string>('wagonr');

  const handleOpenBookingModal = (carId?: string) => {
    if (carId) {
      setModalCarId(carId);
    }
    setModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header Navigation */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero with Instant Estimator */}
        <Hero
          onSelectCarAndBook={handleOpenBookingModal}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Available Cars Section (2x WagonR MH 05 5229, Swift, Dzire, Ertiga AC/Non-AC, Innova Crysta) */}
        <FleetSection onSelectCar={handleOpenBookingModal} />

        {/* Fare Estimator & Rate Chart */}
        <BookingCalculator onOpenBookingModal={handleOpenBookingModal} />

        {/* Why Choose Us & Trust Pillars */}
        <WhyChooseUs />

        {/* Real Customer Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact, Location & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBookingModal={handleOpenBookingModal} />

      {/* Sticky Bottom Actions on Mobile Devices */}
      <FloatingActionBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Pop-up Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBookingModal}
        initialCarId={modalCarId}
      />
    </div>
  );
}
