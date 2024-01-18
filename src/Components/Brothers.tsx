import React from 'react';
import classYears from './people';
import BrotherCard from './BrotherCard';

const Brothers = () => {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-purple-800 mt-8">The Brothers</h1>
        {Object.keys(classYears).map(year => (
            <div key={year}>
            <h2 className="text-2xl font-bold text-purple-700 my-4">Class of {year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classYears[year].map((brother, index) => (
                <BrotherCard key={index} brother={brother} />
                ))}
            </div>
            </div>
        ))}
        </div>
    );
};

export default Brothers;