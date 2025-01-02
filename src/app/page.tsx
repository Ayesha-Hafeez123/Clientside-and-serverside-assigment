"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaServer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6 sm:p-10">
     
      <p className="text-xl font-semibold sm:text-2xl text-gray-700 mb-12 text-center">
        Client-side and Server-side Data Fetching
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-8 gap-8 mb-10 w-full sm:w-auto">
        <Link href="/clientside">
          <button className="text-2xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 bg-white text-gray-800 font-medium rounded-lg border-2 border-gray-600 shadow-md transform transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center space-x-3 w-full sm:w-auto">
            <FaArrowRight />
            <span className="text-base sm:text-lg">Client-side Data Fetching</span>
          </button>
        </Link>
        <Link href="/serverside">
          <button className="text-2xl sm:text-3xl px-8 py-4 sm:px-12 sm:py-6 bg-white text-gray-800 font-medium rounded-lg border-2 border-gray-600 shadow-md transform transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center space-x-3 w-full sm:w-auto">
            <FaServer />
            <span className="text-base sm:text-lg">Server-side Data Fetching</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

