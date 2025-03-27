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
    { id: 1, category: 'journey', title: 'First Date', link: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/11/virat-kohli-anushka-sharma-1-1638104800.jpg' },
    { id: 2, category: 'journey', title: 'Vacation in Paris', link: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/16/full/1676546881-8054.jpeg?im=FeatureCrop,size=(826,465)' },
    { id: 3, category: 'moments', title: 'Wedding Vows', link: 'https://i.dawn.com/primary/2017/12/5a2edbf9e0352.jpg' },
    { id: 4, category: 'moments', title: 'Haldi Ceremony', link: 'https://metromatinee.com/wp-content/uploads/2017/11/ViratKohli_AnushkaSharma_latest_photos-5.jpg' },
    { id: 5, category: 'prewedding', title: 'Engagement Ceremony', link: 'https://qph.cf2.quoracdn.net/main-qimg-92ada9a72988bb0f5e9e38a722bab3cd-lq' },
    { id: 6, category: 'prewedding', title: 'Mehendi Function', link: 'https://www.filmibeat.com/img/2017/12/10-1512892358-virat-anushka-wedding-16.jpg' },
    { id: 7, category: 'journey', title: 'Honeymoon in Finland', link: 'https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/22/virat-anushka-honeymoon-903617-1603355764.jpg' },
    { id: 8, category: 'moments', title: 'Reception in Delhi', link: 'https://im.rediff.com/movies/2017/dec/22virat-anushka-reception5.jpg' },
    { id: 9, category: 'wedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 10, category: 'wedding', title: 'Varmala', link: 'https://img.etimg.com/thumb/msid-62032008,width-480,height-360,imgsize-115527,resizemode-75/under-the-tuscan-sun.jpg' },
    { id: 11, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 12, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 13, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 14, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 15, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 16, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 17, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 18, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 19, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 20, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' },
    { id: 21, category: 'prewedding', title: 'Family Gathering Before Wedding', link: 'https://www.india.com/wp-content/uploads/2017/12/virat-anushka-family.jpg' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-6">Our Gallery</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A glimpse into our journey of love and moments we've shared together.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
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
                <img
                  src={item.link}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(event) => {
                    const target = event.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300'; // Fallback image
                  }}
                />
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
