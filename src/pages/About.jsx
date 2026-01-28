import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            About 99flash.fun
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passion project dedicated to showcasing the incredible beauty of our natural world 
            through the art of photography.
          </p>
        </div>

        {/* Purpose Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At 99flash.fun, we believe that nature photography has the power to inspire, 
                educate, and connect people with the natural world. Our mission is to capture 
                and share the breathtaking moments that make our planet so extraordinary.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Through our lens, we document the raw beauty of landscapes, the majesty of wildlife, 
                and the delicate balance of ecosystems. Each photograph tells a story of wonder, 
                resilience, and the incredible diversity of life on Earth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We hope that our images inspire you to appreciate, protect, and explore the natural 
                world around you.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nature photography"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Photographer Bio */}
        <section className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Alex Chen"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Meet Alex Chen
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                A passionate nature photographer with over 15 years of experience capturing the world's 
                most stunning landscapes and wildlife. Alex's journey began in the mountains of Colorado, 
                where a chance encounter with a golden eagle sparked a lifelong love for nature photography.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                With a background in environmental science, Alex combines technical expertise with artistic 
                vision to create images that not only showcase nature's beauty but also tell compelling 
                stories about conservation and the importance of protecting our planet.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When not behind the camera, Alex leads photography workshops, contributes to conservation 
                efforts, and shares knowledge with aspiring photographers around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌍</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Environmental Stewardship
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in responsible photography that respects and protects the natural world.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Artistic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for technical perfection while maintaining artistic integrity and creativity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📖</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Education & Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to sharing knowledge and inspiring others to explore nature photography.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We foster a supportive community of nature lovers and photography enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Start your journey into the world of nature photography today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="btn-primary">
              Browse Gallery
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 