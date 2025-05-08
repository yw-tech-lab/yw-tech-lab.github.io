import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

const Banner = () => {
  return (
    <div className="bg-background-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* <h1 className="text-4xl sm:text-6xl font-abril mb-6">Community Tech Collective</h1> */}
          <AnimatedText
            text="Your Name"
            className="text-5xl sm:text-6xl font-abril mb-6"
            effect="grow"
          />

          {/* <p className="text-xl font-comfortaa mb-8 max-w-2xl mx-auto">
            We partner with businesses and nonprofits to build beautiful, functional websites that
            support bold missions.
          </p> */}
          <p className="text-xl font-comfortaa mb-8 max-w-2xl mx-auto">
            I bridge design and code to create intuitive digital products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
