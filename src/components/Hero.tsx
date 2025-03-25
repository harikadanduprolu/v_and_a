
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-white"></div>
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z" fill="%23FB7185" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Flower decoration */}
          <div className={`opacity-0 ${isLoaded ? 'animate-fade-in-slow' : ''}`}>
            <svg width="120" height="50" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
              <path d="M60 5C60 5 65 0 70 0C75 0 80 5 80 5C80 5 85 0 90 0C95 0 100 5 100 5C100 5 95 10 95 15C95 20 100 25 100 25C100 25 95 30 90 30C85 30 80 25 80 25C80 25 75 30 70 30C65 30 60 25 60 25C60 25 55 30 50 30C45 30 40 25 40 25C40 25 45 20 45 15C45 10 40 5 40 5C40 5 45 0 50 0C55 0 60 5 60 5Z" fill="#FDA4AF"/>
            </svg>
          </div>

          {/* Save the date */}
          <h3 className={`font-serif italic text-rose-600 mb-3 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-100' : ''}`}>
            Save the Date
          </h3>

          {/* Main heading */}
          <h1 className={`font-serif text-5xl md:text-7xl font-medium text-gray-800 leading-tight mb-6 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-200' : ''}`}>
            Virat <span className="text-rose-500">&</span> Anushka
          </h1>

          {/* Wedding date */}
          <div className={`font-serif text-xl md:text-2xl text-gray-700 mb-10 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-300' : ''}`}>
            <p>are getting married</p>
            <p className="font-medium mt-1">December 11, 2023</p>
          </div>

          {/* Decorative element */}
          <div className={`w-24 h-px bg-rose-300 mx-auto mb-10 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-400' : ''}`}></div>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-500' : ''}`}>
            <a href="/rsvp" className="button-primary">
              RSVP
            </a>
            <a href="#story" className="button-secondary">
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#story" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-rose-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
