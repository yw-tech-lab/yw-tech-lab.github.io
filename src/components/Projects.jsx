import React from 'react';
import HoverCard from './HoverCard';
import GridContainer from './GridContainer';
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
    imageUrl: './images/the-aux/the-aux.jpg',
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

const Projects = ({ className = 'panel', includeTitle = true, numColumns = 3 }) => {
  return (
    <div className={className}>
      {includeTitle && <h2 className="mb-12">Projects</h2>}
      <GridContainer numColumns={numColumns}>
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
      </GridContainer>
    </div>
  );
};

export default Projects;
