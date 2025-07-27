import React from 'react';
import { Link } from 'react-router-dom';
// Dynamically import all images from src/byme
const bymeImages = require.context('../byme', false, /\.(jpe?g)$/);
const bymeImageList = bymeImages.keys().map(bymeImages);

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="gradient-overlay"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            99flash.fun
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
            Capturing the breathtaking beauty of nature through the lens of passion and creativity
          </p>
          <Link 
            to="/gallery" 
            className="btn-primary text-lg px-8 py-3 inline-block animate-bounce-slow"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Welcome to Nature's Canvas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Step into a world where every photograph tells a story of nature's magnificence. 
            From towering mountains to serene forests, from majestic wildlife to tranquil oceans, 
            each image captures a moment of pure wonder and beauty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Landscapes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Breathtaking vistas that showcase the raw power and beauty of our planet
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4">🦁</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Wildlife</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intimate portraits of animals in their natural habitats
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Oceans</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The mysterious depths and serene surfaces of our world's waters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Meet Your AI Photography Guide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get personalized photography tips, learn about techniques, and discover the stories behind each image
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    ChatGPT Assistant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your personal AI guide for all things photography. Ask questions, get tips, and learn from the best.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    Smart Recommendations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get personalized suggestions for camera settings, composition techniques, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    Educational Content
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn photography fundamentals, advanced techniques, and creative approaches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Ready to Chat?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Start a conversation with your AI photography assistant and unlock the secrets of great photography.
              </p>
              <Link 
                to="/assistant" 
                className="btn-primary w-full text-center block"
              >
                Start Chatting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nature by Me Preview Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-300">Nature by Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              A glimpse of my own nature photography. See more in the gallery!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {bymeImageList.slice(0, 4).map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={`Nature by Me Preview ${idx+1}`} className="w-full h-48 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="btn-primary inline-block">View Full Collection</Link>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Social Feed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow us on Instagram for daily inspiration and behind-the-scenes moments!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Example posts, replace with your own or real API later */}
            <a href="https://instagram.com/unsplash" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instagram post 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-3 flex items-center gap-2">
                <span className="text-pink-500 text-xl">&#64;</span>
                <span className="font-semibold text-gray-800 dark:text-white">unsplash</span>
              </div>
            </a>
            <a href="https://instagram.com/natgeo" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instagram post 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-3 flex items-center gap-2">
                <span className="text-pink-500 text-xl">&#64;</span>
                <span className="font-semibold text-gray-800 dark:text-white">natgeo</span>
              </div>
            </a>
            <a href="https://instagram.com/nature" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instagram post 3" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-3 flex items-center gap-2">
                <span className="text-pink-500 text-xl">&#64;</span>
                <span className="font-semibold text-gray-800 dark:text-white">nature</span>
              </div>
            </a>
            <a href="https://instagram.com/earthpix" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:shadow-xl transition">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instagram post 4" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-3 flex items-center gap-2">
                <span className="text-pink-500 text-xl">&#64;</span>
                <span className="font-semibold text-gray-800 dark:text-white">earthpix</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Dive into our extensive collection of nature photography and discover the world's beauty through our lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="btn-primary">
              Browse Gallery
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 