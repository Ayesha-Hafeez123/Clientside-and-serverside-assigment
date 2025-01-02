
import React from 'react';
import { FaLinkedin, FaHeart } from 'react-icons/fa'; // Added a heart icon for uniqueness

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 p-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <p className="inline text-red-400 animate-pulse font-semibold text-lg">
            &copy; {new Date().getFullYear()} Ayesha Mughal | Crafted with{" "}
            <FaHeart /> by Ayesha
          </p>
          <p className="text-sm italic">"Bringing Ideas to Life, One Project at a Time"</p>
        </div>

        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/ayesha-abdul-hafeez-mughal-10b6b92b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin />
            <span className="text-xl text-base sm:text-lg hidden sm:inline">Connect on LinkedIn</span>
          </a>
        </div>

        <div className="mt-6 text-sm">
          <p>If you have any questions, feel free to reach out:</p>
          <p>
            <a
              href="mailto:ayeshamughal765@gmail.com"
              className="text-yellow-300 hover:text-yellow-100 transition"
            >
              ayeshamughal765@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-6 text-xs text-gray-200">
          <p>
            Designed and developed by Ayesha Mughal. Empowering the world with creativity and code!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
