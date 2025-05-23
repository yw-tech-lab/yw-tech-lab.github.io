import React from 'react';

const Panel = ({ children, bgColor = 'transparent', gridCols = 'grid-cols-12' }) => {
  return (
    <div className={`${bgColor} py-12`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className={`grid ${gridCols} gap-12 justify-center items-center`}>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Panel;
