import React from 'react';
import HoverCard from './HoverCard';
import data  from './data';
const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-abril text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        {data.map((card, index) => (
          <div key={index} className={`${index % 2 === 0 ? 'md:mt-12 lg:mt-24' : ''}`}>
            <HoverCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
