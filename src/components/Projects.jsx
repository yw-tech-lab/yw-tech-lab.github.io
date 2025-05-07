import React from 'react';
import HoverCard from './HoverCard';
import data from './data';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Projects = () => {
  return (
    <div className="max-w-6xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedText text="Our Work" className="text-6xl font-abril mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        {data.map((card, index) => (
          <div key={index} className={`${index % 2 === 0 ? 'md:mt-12 lg:mt-24' : ''}`}>
            <motion.div
              initial={{ opacity: 1, y: 80 + 100 * index }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HoverCard
                id={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                color={card.color}
                fit={card.fit}
                index={index}
              >
                <>
                  <h3 className="font-comfortaa mb-2 text-xl font-bold text-gray-900 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {card.description}
                  </p>
                </>
              </HoverCard>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
