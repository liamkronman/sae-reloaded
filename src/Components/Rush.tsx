import React from 'react';

const Rush: React.FC = () => {
  return (
    <div className="bg-purple-100 min-h-screen p-4">
      <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg my-6">
        <h1 className="text-4xl font-bold text-purple-800 text-center my-6">
          Spring Rush 2026
        </h1>

        <div className="space-y-6">

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">♠️ Poker Tournament ♠️</h2>
            <p className="mt-2">
              Kick off rush with a casual poker tournament. No experience required—just come play.
            </p>
            <p className="font-bold">
              When: Monday, 8:00 PM, 2/2 | Where: 1-134
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🔥 Grillin’ and Chillin’ 🔥</h2>
            <p className="mt-2">
              Burgers, hot dogs, and hanging out with the brothers at the house.
            </p>
            <p className="font-bold">
              When: Tuesday, 7:30 PM, 2/3 | Where: SAE House, 155 Bay State Rd
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🍵 Matcha and Jazz 🍵</h2>
            <p className="mt-2">
              A relaxed evening with matcha, live jazz, and good conversation.
            </p>
            <p className="font-bold">
              When: Wednesday, 7:30 PM, 2/4 | Where: BC B4 Lounge
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">
              🥩 Steak Night (Invite Only) 🥩
            </h2>
            <p className="mt-2">
              Enjoy a steak dinner with the brothers in a more intimate setting.
            </p>
            <p className="font-bold">
              When: Thursday, 7:30 PM, 2/5 | Where: SAE House, 155 Bay State Rd
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">
              🎳 Bowling with SAE (Invite Only) 🎳
            </h2>
            <p className="mt-2">
              Join us for a night of bowling and hanging out with the brothers.
            </p>
            <p className="font-bold">
              When: Friday, 8:00 PM, 2/6 | Where: 155 Bay State Rd
            </p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">
              🍽️ Bid Dinner (Invite Only) 🍽️
            </h2>
            <p className="mt-2">
              Celebrate the end of rush with brothers and new members.
            </p>
            <p className="font-bold">
              When: Saturday, 7:00 PM, 2/7 | Where: Location TBA
            </p>
          </div>

        </div>

        <div className="mt-6 text-sm text-gray-700">
          <p>
            The SAE house is a minute’s walk from the Silber Way stop on the Boston East SafeRide.
          </p>
          <p>
            Contact the Rush Chairs: James Ball (jfball) and Regan Song (reggo)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rush;
