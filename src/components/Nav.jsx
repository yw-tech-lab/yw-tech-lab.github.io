import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ isHome = false }) {
  return (
    <nav
      className={
        isHome ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-white shadow-sm'
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {isHome ? (
                ''
              ) : (
                <Link to="/" className="text-2xl font-abril">
                  Your Name
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/bio/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </Link>
            <Link
              to="/case-studies/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
