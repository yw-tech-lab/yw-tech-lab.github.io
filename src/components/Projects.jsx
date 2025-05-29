import React from 'react';
import HoverCard from './HoverCard';

const projects = [
  {
    id: 'cne',
    title: 'Childcare Network of Evanston',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageUrl: './images/cne/cne-removebg-preview.png',
    color: '#54b2dd',
    url: '/case-studies/cne/',
  },
  {
    id: 'aux',
    title: 'The AUX',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    imageUrl: './images/aux/aux.jpg',
    fit: 'cover',
    url: '/case-studies/aux/',
  },
  {
    id: 'eyc',
    title: 'Embrace Your Crown',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    fit: 'cover',
    color: '#f1ce71',
    url: '/case-studies/eyc/',
  },
];

const Projects = () => {
  return (
    <div className="panel">
      <h2 className="mb-12">Projects</h2>
      <div className="projects-grid">
        {projects.map((card, index) => (
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
