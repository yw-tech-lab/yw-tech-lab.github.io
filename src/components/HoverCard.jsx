import React from 'react';

const HoverCard = ({ title, description, imageUrl, color }) => {
  return (
    <div className="group relative overflow-hidden transition-all duration-500">
      {/* Image container with hover zoom effect */}
      <div
        className="relative h-80 overflow-hidden"
        style={color ? { backgroundColor: color, padding: '10px' } : {}}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
      </div>

      {/* Content container */}
      <div className="pt-6">
        <h3 className="font-comfortaa mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
          {description}
        </p>

        {/* Hover arrow indicator */}
        <div className="mt-4 flex items-center">
          <span className="text-primary-600 transition-all duration-300 group-hover:mr-2">
            Learn more
          </span>
          <svg
            className="h-5 w-5 text-primary-600 transition-transform duration-300 group-hover:translate-x-1"
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
  );
};

export default HoverCard;
