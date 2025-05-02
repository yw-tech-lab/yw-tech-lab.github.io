import React from 'react';

const Banner = () => {
  return (
    <div className="bg-background-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-abril mb-6">Tech Lab Collective</h1>
          <p className="text-xl font-comfortaa mb-8 max-w-2xl mx-auto">
            We partner with businesses and nonprofits to craft powerful identities, build beautiful
            websites, and rally support for bold missions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
