
import React from 'react';

const CoupleStory = () => {
  return (
    <section  className="section-padding bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-4">Our Love Story</h2>
          <div className="floral-divider">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
              <path d="M20 0C20 0 22 2 25 2C28 2 30 0 30 0C30 0 28 4 28 10C28 16 30 20 30 20C30 20 28 18 25 18C22 18 20 20 20 20C20 20 18 18 15 18C12 18 10 20 10 20C10 20 12 16 12 10C12 4 10 0 10 0C10 0 12 2 15 2C18 2 20 0 20 0Z" fill="#FDA4AF"/>
            </svg>
          </div>

          <div className="space-y-12 mt-16">
            {/* First Meeting */}
            <div className="flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-in">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full bg-rose-200 flex items-center justify-center">
                      <p className="font-serif italic text-rose-500">First Meeting</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-800">2013</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl text-gray-800 mb-3">When Our Eyes Met</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began during a commercial shoot in 2013. The chemistry was instant, but we kept it professional.
                  Little did we know that this chance meeting would mark the beginning of our forever. The shoot ended, 
                  but our story was just getting started.
                </p>
              </div>
            </div>

            {/* Dating */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 opacity-0 animate-fade-in animate-delay-200">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full bg-rose-200 flex items-center justify-center">
                      <p className="font-serif italic text-rose-500">Dating</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-800">2016</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl text-gray-800 mb-3">Growing Together</h3>
                <p className="text-gray-600 leading-relaxed">
                  After months of friendship, our connection deepened. Through busy schedules, international travel, 
                  and public attention, we found solace in each other. Our relationship became a beautiful blend of 
                  mutual respect, understanding, and love that only grew stronger with each passing day.
                </p>
              </div>
            </div>

            {/* Proposal */}
            <div className="flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-in animate-delay-300">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full bg-rose-200 flex items-center justify-center">
                      <p className="font-serif italic text-rose-500">Proposal</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-800">2017</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl text-gray-800 mb-3">The Perfect Moment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Under the Northern Lights in a romantic winter setting, Virat got down on one knee. With a ring as 
                  beautiful as our journey together, he asked Anushka to be his forever. And without a moment's 
                  hesitation, she said yes. It was a moment of pure magic, frozen in time.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 opacity-0 animate-fade-in animate-delay-400">
            <p className="font-serif italic text-xl text-rose-600">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
