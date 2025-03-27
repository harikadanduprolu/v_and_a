
import React from 'react';

const WeddingStory = () => {
  return (
    <section id="story" className="section-padding bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-4">Our Wedding</h2>
          <div className="floral-divider">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
              <path d="M20 0C20 0 22 2 25 2C28 2 30 0 30 0C30 0 28 4 28 10C28 16 30 20 30 20C30 20 28 18 25 18C22 18 20 20 20 20C20 20 18 18 15 18C12 18 10 20 10 20C10 20 12 16 12 10C12 4 10 0 10 0C10 0 12 2 15 2C18 2 20 0 20 0Z" fill="#FDA4AF"/>
            </svg>
          </div>

          <div className="mt-16 glass-card opacity-0 animate-fade-in animate-delay-700">

<div className="aspect-[16/9] rounded-lg overflow-hidden bg-rose-100 mb-6">
  <div className="w-full h-full flex items-center justify-center">
    <p className="font-serif italic text-rose-500"><iframe width="853" height="480" src="https://www.youtube.com/embed/JNKZN8uq1H8" title="Anushka &amp; Virat&#39;s Wedding Video | The Wedding Filmer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></p>
  </div>
</div>
<div className="text-center mt-16 opacity-0 animate-fade-in animate-delay-400">
            <p className="font-serif italic text-xl text-rose-600">
              "Together with love, we begin our forever."
            </p>
          </div>
</div>

         
        </div>
      </div>
    </section>
  );
};

export default WeddingStory;

