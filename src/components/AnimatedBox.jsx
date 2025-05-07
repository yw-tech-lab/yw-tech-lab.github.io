import { motion } from 'framer-motion';

const AnimatedBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-4 bg-pink-500 rounded-xl"
  >
    Hello Animation!
  </motion.div>
);

export default AnimatedBox;
