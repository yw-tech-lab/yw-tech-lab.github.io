import React from 'react';

const Banner = ({ className = 'bg-background-50' }) => {
  return (
    <div className={className}>
      <div className="panel">
        <h1 className="text-center">Your Name</h1>
        <p className="body-text-large max-w-2xl mx-auto text-center">
          Some tagline (e.g., "I bridge design and code to create intuitive digital products").
        </p>
      </div>
    </div>
  );
};

export default Banner;
