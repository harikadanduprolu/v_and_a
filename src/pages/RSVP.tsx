
import React, { useEffect } from 'react';
import RSVPForm from '../components/RSVPForm';
import Footer from '../components/Footer';

const RSVP = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-6">Join Our Celebration</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          We would be honored to have you join us as we celebrate our love and begin our new life together.
        </p>
      </div>
      <RSVPForm />
      <Footer />
    </div>
  );
};

export default RSVP;
