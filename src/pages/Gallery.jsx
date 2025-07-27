import React, { useState } from 'react';

// Dynamically import all images from src/byme
const bymeImages = require.context('../byme', false, /\.(jpe?g)$/);
const bymeImageList = bymeImages.keys().map(bymeImages);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'mountains', name: 'Mountains', icon: '🏔️' },
    { id: 'forests', name: 'Forests', icon: '🌲' },
    { id: 'oceans', name: 'Oceans', icon: '🌊' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦁' },
  ];

  const photos = [
    {
      id: 1,
      title: 'Mountain Peak at Dawn',
      category: 'mountains',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A breathtaking view of snow-capped peaks at sunrise'
    },
    {
      id: 2,
      title: 'Dense Forest Canopy',
      category: 'forests',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Lush green forest with sunlight filtering through the trees'
    },
    {
      id: 3,
      title: 'Ocean Waves',
      category: 'oceans',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Crystal clear ocean waves crashing on pristine beaches'
    },
    {
      id: 4,
      title: 'Lion Portrait',
      category: 'wildlife',
      url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Majestic lion in its natural habitat'
    },
    {
      id: 5,
      title: 'Alpine Meadow',
      category: 'mountains',
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Colorful wildflowers in a high-altitude meadow'
    },
    {
      id: 6,
      title: 'Ancient Redwoods',
      category: 'forests',
      url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Towering redwood trees reaching for the sky'
    },
    {
      id: 7,
      title: 'Coral Reef',
      category: 'oceans',
      url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vibrant coral reef teeming with marine life'
    },
    {
      id: 8,
      title: 'Eagle in Flight',
      category: 'wildlife',
      url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Bald eagle soaring through clear blue skies'
    },
    {
      id: 9,
      title: 'Rocky Mountain Range',
      category: 'mountains',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dramatic mountain range with jagged peaks'
    },
    {
      id: 10,
      title: 'Misty Forest',
      category: 'forests',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Enchanting forest shrouded in morning mist'
    },
    {
      id: 11,
      title: 'Tropical Beach',
      category: 'oceans',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Pristine tropical beach with turquoise waters'
    },
    {
      id: 12,
      title: 'Wolf Pack',
      category: 'wildlife',
      url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Wolf pack in their natural wilderness habitat'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Nature by Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 dark:text-green-300 text-center">Nature by Me</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bymeImageList.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage({ url: src })}>
                <img src={src} alt={`Nature by Me ${idx+1}`} className="w-full h-56 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Nature Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning nature photography, from majestic mountains to serene oceans, 
            each image tells a unique story of our planet's beauty.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{photo.title}</h3>
                    <p className="text-sm text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              No photos found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try selecting a different category or check back later for new additions.
            </p>
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-200 z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.url || selectedImage}
              alt={selectedImage.title || 'Nature by Me'}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            {(selectedImage.title || selectedImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 