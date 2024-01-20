import React from 'react';
import { motion } from 'framer-motion';
import { Brother } from './types';

const BrotherCard: React.FC<{ brother: Brother }> = ({ brother }) => {
    return (
        <div className="group relative cursor-pointer rounded-lg overflow-hidden">
            <a href={`https://instagram.com/${brother.instagram}`} target="_blank" rel="noopener noreferrer">
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg shadow-xl flex flex-col items-center text-center border border-purple-300 hover:shadow-2xl"
                >
                    <div className="w-28 h-28 overflow-hidden rounded-full mt-4 shadow-lg">
                        <img src={brother.photoUrl} alt={brother.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold mt-2">{brother.name}</h3>
                    <p className="text-sm text-gray-600">{brother.hometown}</p>
                    {brother.interests.length > 0 && <p className="text-sm text-left w-full text-gray-800 mt-2"><span className="font-semibold">Interests:</span> {brother.interests.join(', ')}</p>}
                    {/* Clubs/Activities Section */}
                    {brother.clubs.length > 0 && (
                        <p className="text-sm text-gray-800 mt-2 text-left w-full"><span className="font-semibold">Clubs/Activities:</span> {brother.clubs.join(', ')}</p>
                    )}
                    {brother.quote && (
                        <p className="text-sm italic text-gray-600 mt-2 text-left w-full">"{brother.quote}"</p>
                    )}
                </motion.div>
                <div className="absolute inset-0 bg-purple-800 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-lg font-bold text-white underline">
                    Check out {brother.name.split(' ')[0]}'s Instagram 😍
                </div>
            </a>
        </div>
    );
};

export default BrotherCard;
