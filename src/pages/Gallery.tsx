
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'journey', name: 'Our Journey' },
    { id: 'moments', name: 'Special Moments' },
    { id: 'prewedding', name: 'Pre-Wedding' },
  ];

  const galleryItems = [
    { id: 1, category: 'journey', title: 'First Date' },
    { id: 2, category: 'journey', title: 'Vacation in Paris' },
    { id: 3, category: 'moments', title: 'Award Ceremony' },
    { id: 4, category: 'moments', title: 'Birthday Celebration' },
    { id: 5, category: 'prewedding', title: 'Engagement Shoot' },
    { id: 6, category: 'prewedding', title: 'Pre-Wedding Ritual' },
    { id: 7, category: 'journey', title: 'Cricket Match' },
    { id: 8, category: 'moments', title: 'Film Premiere' },
    { id: 9, category: 'prewedding', title: 'Family Gathering' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-6">Our Gallery</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A glimpse into our journey of love and moments we've shared together.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-rose-400 text-white shadow-md'
                  : 'bg-rose-100 text-gray-700 hover:bg-rose-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md aspect-square group cursor-pointer opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full bg-rose-200 flex items-center justify-center">
                  <p className="font-serif italic text-rose-500">Gallery Image</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <h3 className="text-white text-lg font-serif opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
