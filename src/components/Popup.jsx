import React from 'react';
import instagramLogo from '../logo/instagram.png';

const Popup = ({ handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Follow Me on Instagram!</h2>
        <p className="mb-4">Stay updated with my latest work.</p>
        <div className="mb-4">
          <p className="font-bold">Sushil Khichar</p>
          <p>A passionate photographer capturing the beauty of the world.</p>
          <p>Explore my portfolio and get in touch for collaborations.</p>
        </div>
        <a
          href="https://www.instagram.com/buntynamberdar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <img src={instagramLogo} alt="Instagram" className="w-6 h-6 mr-2" />
          Follow @buntynamberdar
        </a>
        <button
          onClick={handleClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
