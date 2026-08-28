import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ChatInterface } from '../components/ChatInterface';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { HowItWorks } from '../components/HowItWorks';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ChatInterface />
        <FeaturedProducts />
        <HowItWorks />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}
