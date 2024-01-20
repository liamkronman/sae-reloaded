import React from 'react';

const About = () => {
    return (
      <div className="container mx-auto p-6 max-w-3xl bg-white shadow-lg rounded-lg my-6 border border-purple-200">
        <div className="flex flex-col items-start px-6 py-4">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Letter from the President</h1>
          <p className="text-gray-700 text-lg">
            Dear Visitors,
          </p>
          <p className="mt-2 text-gray-600 text-lg">
            Welcome to the MIT chapter of Sigma Alpha Epsilon. As the current President, I am proud to represent a fraternity that stands for true brotherhood, academic excellence, and leadership.
          </p>
          <p className="mt-2 text-gray-600 text-lg">
            Our chapter has a rich history at MIT, contributing to the personal and professional growth of countless young men who have walked through our doors. We believe in building a supportive community that fosters the development of our members not just during their college years, but for life.
          </p>
          <p className="mt-2 text-gray-600 text-lg">
            I invite you to explore our website, learn about our values, and reach out if you're interested in joining our brotherhood or learning more about our activities and philanthropy.
          </p>
          <p className="mt-2 text-gray-600 text-lg">
            Thank you for visiting us, and I hope to see you at one of our events soon.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Warm regards,
          </p>
          <p className="text-gray-700 text-lg font-semibold">
            [President's Name]
          </p>
          <p className="text-gray-600 text-lg">
            President, MIT Sigma Alpha Epsilon
          </p>
        </div>
      </div>
    );
};

export default About;