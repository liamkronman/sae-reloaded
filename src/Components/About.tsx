import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.6
            }
        }
    };

    return (
      <motion.div
        className="container mx-auto p-6 max-w-3xl bg-white shadow-lg rounded-lg my-6 border border-purple-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-start px-6 py-4">
          <motion.h1
            className="text-4xl font-bold text-purple-800 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A Note from the Prez!
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hey there, Friends!
          </motion.p>
          <motion.p
            className="mt-2 text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            As the head honcho here at SAE, I'm jazzed to welcome you to our little corner of MIT. It's a place where the coffee's strong, the ideas are wild, and the brotherhood's even stronger.
          </motion.p>
          <motion.p
            className="mt-2 text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            From wacky science experiments to late-night philosophy debates, we're all about living the college dream, with a sprinkle of chaos and a whole lot of camaraderie.
          </motion.p>
          <motion.p
            className="mt-2 text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Surf through our site, catch the wave of our ethos, and if you feel like riding the SAE tide, drop us a line. We've got the scoop on all the cool shindigs and brainy bashes.
          </motion.p>
          <motion.p
            className="mt-2 text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Can't wait to meet ya at our next gig. It's gonna be epic!
          </motion.p>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Stay groovy,
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            [President's Name]
          </motion.p>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            El Presidente, MIT Sigma Alpha Epsilon
          </motion.p>
        </div>
      </motion.div>
    );
};

export default About;
