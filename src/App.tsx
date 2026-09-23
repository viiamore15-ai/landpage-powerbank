import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('combo-duplo');

  const handleOpenOrderModal = (planId: string = 'combo-duplo') => {
    setSelectedPlanId(planId);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#FDC500] selection:text-[#00296B] overflow-x-hidden font-montserrat">
      {/* Header */}
      <Header onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* Comparison Section ("Por que escolher a Kapbom?") */}
        <Comparison onOpenOrderModal={handleOpenOrderModal} />

        {/* Features / Highlights */}
        <Features />

        {/* Pricing / Combos Section */}
        <Pricing onOpenOrderModal={handleOpenOrderModal} />

        {/* Testimonials */}
        <Testimonials onOpenOrderModal={handleOpenOrderModal} />

        {/* Location (Mooca - São Paulo) with Google Maps */}
        <Location />

        {/* Final Urgency Call to Action */}
        <FinalCTA onOpenOrderModal={handleOpenOrderModal} />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        initialPlanId={selectedPlanId}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
