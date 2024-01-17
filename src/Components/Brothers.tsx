import React from 'react';
import { motion } from 'framer-motion';

interface Brother {
    name: string;
    hometown: string;
    instagram: string;
    interests: string[];
    photoUrl: string;
  }

interface ClassYearGroup {
    [year: string]: Brother[];
  }

const classYears: ClassYearGroup = {
    '2024': [
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
    ],
    '2025': [
      {
        name: "Liam Kronman",
        hometown: "New York, NY",
        instagram: "liamkronman",
        interests: ["Soccer", "Golf", "Music"],
        photoUrl: "https://i.imgur.com/5Z3Z5ZM.jpg",
      },
      {
        name: "Oliver Martinez",
        hometown: "Miami, FL",
        instagram: "olivermtz",
        interests: ["Cooking", "Travel", "Languages"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
    ],
    '2026': [
      {
        name: "William Johnson",
        hometown: "Austin, TX",
        instagram: "willjohnson",
        interests: ["Gaming", "Skateboarding", "Vlogging"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "James Davis",
        hometown: "Seattle, WA",
        instagram: "jamesdavis",
        interests: ["Robotics", "Snowboarding", "Painting"],
        photoUrl: "https://i.imgur.com/5Z3Z5ZM.jpg",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
    ],
    '2027': [
      {
        name: "Benjamin Lee",
        hometown: "Denver, CO",
        instagram: "benlee",
        interests: ["Martial Arts", "Astronomy", "Guitar"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Lucas Hernandez",
        hometown: "San Francisco, CA",
        instagram: "lucashernandez",
        interests: ["Surfing", "Startups", "Blogging"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
      {
        name: "Ethan Walker",
        hometown: "Los Angeles, CA",
        instagram: "ethanwalker",
        interests: ["Photography", "Technology", "Hiking"],
        photoUrl: "https://i.imgur.com/LpaY82x.png",
      },
      {
        name: "Noah Smith",
        hometown: "Chicago, IL",
        instagram: "noahsmith",
        interests: ["Basketball", "Reading", "Coding"],
        photoUrl: "https://i.imgur.com/DlK5hz6.png",
      },
    ],
};


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