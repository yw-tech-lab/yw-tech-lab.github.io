import React from 'react';
import { motion } from 'framer-motion';
const EFFECTS = {
  grow: 'grow',
  moveUp: 'moveUp',
};
const growBefore = {
  opacity: 0,
  scale: 1.4,
  y: 0,
  transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
};

const hoverEffect = {
  opacity: 1,
  scale: 1.2,
  y: 0,
  transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
};

const growAfter = {
  opacity: 1,
  scale: 1,
  //   color: '#4F46E5',
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 10,
  },
};

const normal = {
  opacity: 1,
  scale: 1,
  y: 0,
  transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
};

const below = {
  opacity: 0,
  y: 80,
  transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
};

const AnimatedText = ({ text, className, effect = 'grow' }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  function getChild() {
    if (effect === EFFECTS.grow) {
      return {
        visible: growAfter,
        hidden: growBefore,
      };
    }

    if (effect === EFFECTS.moveUp) {
      return {
        visible: normal,
        hidden: below,
      };
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={getChild()}
          className="inline-block cursor-pointer"
          whileHover={hoverEffect}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
