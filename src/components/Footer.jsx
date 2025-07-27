import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Assistant', path: '/assistant' },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 block">
              99flash.fun
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Capturing the beauty of nature through stunning photography. 
              Explore landscapes, wildlife, and breathtaking moments from around the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-2xl hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@99flash.fun</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Nature Photography Studio</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 99flash.fun. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            Made with ❤️ using React & Tailwind CSS | 
            Powered by ChatGPT Assistant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 