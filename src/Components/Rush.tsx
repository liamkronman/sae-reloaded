import React from 'react';

const Rush: React.FC = () => {
  return (
    <div className="bg-purple-100 min-h-screen p-4">
      <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg my-6">
        <img src="/images/spring-rush-poster.jpeg" alt="Spring Rush 2024" className="w-full h-auto rounded-lg" />
        <h1 className="text-4xl font-bold text-purple-800 text-center my-6">Spring Rush 2024</h1>
        <div className="space-y-6">
          <div className="text-gray-800 text-lg">
            <p>RSVP to any of the events <a href="https://forms.gle/QhL7LUTTpGi94aQ78" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">here</a>.</p>
          </div>
          
          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🎲 On-Campus Game Night 🎲</h2>
            <p className="mt-2">Dive into a night filled with your favorite games—poker, Smash, and more! Food will be provided.</p>
            <p className="font-bold">When: 6:30 PM, 2/9 | Where: Lobby 7</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🏓 Paddles and Patties: SAE Ping Pong and BBQ Bash 🏓</h2>
            <p className="mt-2">Showcase your ping pong prowess and enjoy the finest BBQ on campus.</p>
            <p className="font-bold">When: 6:30 PM, 2/10 | Where: 155 Bay State Rd</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">❄️ Winter Warfare: Snow Catapult Crafting on Killian Court ❄️</h2>
            <p className="mt-2">Engineer the ultimate snowball slinger and win frosty prizes.</p>
            <p className="font-bold">When: 2:00 PM, 2/11 | Where: Killian Court</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🔥 LASER TAG BATTLE @ HOUSE + GAME TRUCK EXTRAVAGANZA 🔥</h2>
            <p className="mt-2">Navigate our 5-floor brownstone in a thrilling game of laser tag. A game truck awaits outside with the latest consoles and games.</p>
            <p className="font-bold">When: 6:30 PM to 8:30 PM, 2/11 | Where: 155 Bay State Rd</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🎧 DJ Workshop 🎧</h2>
            <p className="mt-2">Learn the art of DJing and get a chance to showcase your skills at an SAE party.</p>
            <p className="font-bold">When: 8:00 PM to 1:00 AM, 2/16 | Where: 155 Bay State Rd</p>
          </div>
        </div>

        <div className="mt-6">
          <p>The SAE house is just a minute's walk from the Silber Way stop on the Boston East SafeRide!</p>
          <p>SAE Rush Chairs, Liam Kronman (lkronman) & Nathaniel Felleke (nfelleke)</p>
        </div>
      </div>
    </div>
  );
};

export default Rush;
