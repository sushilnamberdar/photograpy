import React from 'react';
import { Link } from 'react-router-dom';
import instagramLogo from '../logo/instagram.png';

const Contact = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a question about my work, a project proposal, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                You can find me on Instagram, or send me a message directly using the contact form.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/buntynamberdar" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
                  <span className="text-lg font-medium">buntynamberdar</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Your message..."
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Explore My Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Browse my gallery to see my latest photography.
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

export default Contact;