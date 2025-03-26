
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rose-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="font-serif text-3xl text-rose-600 mb-6">Virat & Anushka</div>
          
          <div className="max-w-md mx-auto mb-8">
            <p className="text-gray-600">
              Thank you for being part of our special day. We look forward to celebrating with you!
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="/" className="text-gray-600 hover:text-rose-600 transition-colors">Home</a>
            <a href="/details" className="text-gray-600 hover:text-rose-600 transition-colors">Details</a>
            <a href="/gallery" className="text-gray-600 hover:text-rose-600 transition-colors">Gallery</a>
          </div>
          
          <div className="flex justify-center items-center text-rose-400">
            <Heart className="h-4 w-4 mr-2 animate-pulse-soft" />
            <p className="text-sm">December 11, 2023 • Udaipur, India</p>
            <Heart className="h-4 w-4 ml-2 animate-pulse-soft" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
