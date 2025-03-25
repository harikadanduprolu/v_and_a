
import React, { useEffect } from 'react';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';

const Details = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-6">Wedding Details</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our wedding celebrations.
        </p>
      </div>
      <EventDetails />
      <Footer />
    </div>
  );
};

export default Details;
