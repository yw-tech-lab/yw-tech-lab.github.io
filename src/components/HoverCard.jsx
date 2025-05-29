import React from 'react';
import { Link } from 'react-router-dom';

const HoverCard = ({ id, title, children, imageUrl, url, color, fit = 'contain' }) => {
  function getImageOrTitle() {
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full transition-transform duration-700 group-hover:scale-110"
          style={{ objectFit: fit ? fit : 'cover' }}
        />
      );
    } else {
      return (
        <h2 className="text-4xl font-abril text-center duration-700 group-hover:scale-110">
          {title}
        </h2>
      );
    }
  }
  return (
    <Link to={url}>
      <div className="group relative overflow-hidden transition-all duration-500">
        {/* Image container with hover zoom effect */}
        <div
          className="hover-card"
          style={color ? { backgroundColor: color, padding: '20px' } : {}}
        >
          {getImageOrTitle()}
        </div>

        {/* Content container */}
        <div className="pt-6">
          {children}

          {/* Hover arrow indicator */}
          <div className="mt-4 flex items-center">
            <span className="mr-2 transition-all duration-300 group-hover:mr-2">Learn more</span>

            <svg
              className="h-5 w-5 inline-block transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoverCard;
