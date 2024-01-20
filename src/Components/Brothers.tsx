import React from 'react';
import { motion } from 'framer-motion';
import classYears from './people';
import BrotherCard from './BrotherCard';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Brothers = () => {
    return (
        <div className="container mx-auto p-4">
            <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold text-center text-purple-800 mt-8"
            >
                The Brothers
            </motion.h1>
            {Object.keys(classYears).map(year => (
                <motion.div key={year} variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h2 variants={childVariants} className="text-2xl font-bold text-purple-700 my-8 text-center">
                        Class of {year}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {classYears[year].map((brother, index) => (
                            <BrotherCard key={index} brother={brother} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Brothers;