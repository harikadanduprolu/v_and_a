
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    { title: "The First Meeting", category: "Our Journey" },
    { title: "Travel Adventures", category: "Memories" },
    { title: "Special Moments", category: "Celebrations" },
    { title: "Pre-Wedding Shoot", category: "Recent" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-4">Gallery</h2>
        <div className="floral-divider">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
            <path d="M20 0C20 0 22 2 25 2C28 2 30 0 30 0C30 0 28 4 28 10C28 16 30 20 30 20C30 20 28 18 25 18C22 18 20 20 20 20C20 20 18 18 15 18C12 18 10 20 10 20C10 20 12 16 12 10C12 4 10 0 10 0C10 0 12 2 15 2C18 2 20 0 20 0Z" fill="#FDA4AF"/>
          </svg>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.title}
              className="relative rounded-lg overflow-hidden shadow-md aspect-[4/3] group cursor-pointer opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-full bg-rose-200 flex items-center justify-center">
                <p className="font-serif italic text-rose-500">Gallery Image</p>
              </div>
              <div 
                className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-sm font-medium mb-1">{item.category}</p>
                <h3 className="text-white text-xl font-serif mb-3">{item.title}</h3>
                <div className="w-12 h-px bg-white mb-3"></div>
                <p className="text-white text-sm italic">View Photos</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-2 button-secondary">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
