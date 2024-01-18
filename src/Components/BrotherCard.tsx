import React from 'react';
import { motion } from 'framer-motion';
import { Brother } from './types';

const BrotherCard: React.FC<{ brother: Brother }> = ({ brother }) => {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center border border-purple-300"
      >
        <div className="w-24 h-24 overflow-hidden rounded-full mt-4 shadow">
          <img src={brother.photoUrl} alt={brother.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-bold mt-2">{brother.name}</h3>
        <p className="text-sm text-gray-600">{brother.hometown}</p>
        <div className="flex space-x-2 mt-2 justify-center">
          <a href={`https://instagram.com/${brother.instagram}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
            {/* <FontAwesomeIcon icon={faInstagram} size="lg" /> */}
          </a>
          {/* Add more socials as needed */}
        </div>
        <p className="text-sm text-gray-800 mt-2">{brother.interests.join(', ')}</p>
      </motion.div>
    );
};

export default BrotherCard;