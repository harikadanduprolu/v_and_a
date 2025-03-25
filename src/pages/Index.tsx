
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CoupleStory from '../components/CoupleStory';
import EventDetails from '../components/EventDetails';
import GalleryPreview from '../components/GalleryPreview';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <CoupleStory />
      <EventDetails />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Index;
