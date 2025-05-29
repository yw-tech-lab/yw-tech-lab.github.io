import React from 'react';
import HoverCard from './HoverCard';
import data from './data';

const Projects = () => {
  return (
    <div className="panel">
      <h1 className="mb-12">Projects</h1>
      <div className="projects-grid">
        {data.map((card, index) => (
          <div key={index}>
            <HoverCard
              id={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              color={card.color}
              url={card.url}
              fit={card.fit}
              index={index}
            >
              <>
                <h3 className="font-comfortaa mb-2 text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {card.description}
                </p>
              </>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
