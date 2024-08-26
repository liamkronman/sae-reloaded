import React from 'react';

const Rush: React.FC = () => {
  return (
    <div className="bg-purple-100 min-h-screen p-4">
      <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg my-6">
        {/* <img src="/images/fall-rush-poster.jpeg" alt="Fall Rush 2024" className="w-full h-auto rounded-lg" /> */}
        <h1 className="text-4xl font-bold text-purple-800 text-center my-6">Fall Rush 2024</h1>
        <div className="space-y-6">
          {/* <div className="text-gray-800 text-lg">
            <p>RSVP to any of the events <a href="https://forms.gle/QhL7LUTTpGi94aQ78" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">here</a>.</p>
          </div> */}

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🔥 Grillin', Chillin', & Backyard Tagging at the SAE House 🔥</h2>
            <p className="mt-2">Kick off the weekend with some mouth-watering BBQ, straight off the grill, followed by an afternoon of backyard fun. Get creative with spray paint as we tag a giant wooden sign to commemorate Fall Rush.</p>
            <p className="font-bold">When: Saturday, 1:00 PM to 4:00 PM, 8/31 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🌊 Surf and Turf with SAE 🌊</h2>
            <p className="mt-2">Indulge in a gourmet meal featuring the finest steak and shrimp on campus. Whether you're a steak lover or a seafood fan, this is one meal you won't want to miss.</p>
            <p className="font-bold">When: Saturday, 6:30 PM to 9:00 PM, 8/31 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🍦 Late Night Ice Cream with SAE 🍦</h2>
            <p className="mt-2">Cool down with some ice cream as we transition into the early hours of the morning. It's the perfect way to take a break and enjoy a sweet treat.</p>
            <p className="font-bold">When: Sunday, 12:30 AM to 2:00 AM, 9/1 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🥞 Brunch With SAE 🥞</h2>
            <p className="mt-2">Join us for a relaxing brunch filled with delicious food and great conversation. Start your Sunday off right by hanging out with the brothers of SAE.</p>
            <p className="font-bold">When: Sunday, 10:00 AM to 12:30 PM, 9/1 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">⚽ Bubble Soccer with SAE ⚽</h2>
            <p className="mt-2">Get ready to bump, bounce, and laugh your way through an exciting game of bubble soccer. We'll be taking over Briggs Field for some high-energy fun inside giant inflatable bubbles!</p>
            <p className="font-bold">When: Sunday, 1:00 PM to 3:00 PM, 9/1 | Where: Briggs Field, 250 Vassar St, Cambridge, MA 02139</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🚣 Rafting the Charles 🚣</h2>
            <p className="mt-2">Think you have what it takes to navigate the Charles River? Join us for an afternoon of rafting, where speed and teamwork are key. The fastest team wins a prize!</p>
            <p className="font-bold">When: Sunday, 3:30 PM to 5:30 PM, 9/1 | Where: Charles River, starting from SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🎧 DJ Workshop 🎧</h2>
            <p className="mt-2">Ever wanted to DJ? Now’s your chance to learn the basics and take the stage at an SAE party. Our in-house DJ will guide you through the essentials.</p>
            <p className="font-bold">When: Sunday, 9:00 PM to 10:00 PM, 9/1 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🎉 Semester Kickoff Party 🎉</h2>
            <p className="mt-2">It’s time to celebrate the start of a new semester! Join us for a night of dancing, music, and unforgettable memories at the SAE house. Don't miss the biggest party of the season!</p>
            <p className="font-bold">When: Sunday, 10:00 PM, 9/1 to 1:00 AM, Monday, 9/2 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🍣 All You Can Eat Sushi 🍣</h2>
            <p className="mt-2">Love sushi? Join us at Yamato's for an all-you-can-eat sushi experience like no other. Indulge in endless rolls and discover new favorites.</p>
            <p className="font-bold">When: Monday, 12:30 PM to 3:00 PM, 9/2 | Where: Yamato's, 545 Boylston St, Boston, MA 02116</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🏖️ Beach Day with SAE 🏖️</h2>
            <p className="mt-2">Escape the city and join us for a relaxing day at Walden Pond. We'll be playing spikeball, frisbee, and enjoying the great outdoors. Don't forget your swimsuit!</p>
            <p className="font-bold">When: Monday, 3:30 PM to 6:30 PM, 9/2 | Where: Walden Pond, Concord, MA</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🥓 Breakfast With SAE 🥓</h2>
            <p className="mt-2">Join us for a laid-back breakfast and some great conversation. Whether you're an early riser or just looking for a late breakfast, come by anytime!</p>
            <p className="font-bold">When: Tuesday, 8:00 AM to 11:00 AM, 9/3 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🎯 Skeet Shootin' with SAE 🎯</h2>
            <p className="mt-2">Take aim and fire! Join us for an exciting afternoon of skeet shooting at the Minute Man Sportsman's Club. Whether you're a seasoned shooter or a first-timer, all skill levels are welcome.</p>
            <p className="font-bold">When: Tuesday, 2:00 PM to 4:00 PM, 9/3 | Where: Minute Man Sportsman's Club, 56R Francis Wyman Rd, Burlington, MA 01803</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🔫 Laser Tag @ SAE 🔫</h2>
            <p className="mt-2">Suit up and join either the Red or Blue team for a thrilling laser tag battle through our five-floor brownstone. With plenty of obstacles and a ton of pizza, it's going to be an epic night!</p>
            <p className="font-bold">When: Wednesday, 7:00 PM to 10:00 PM, 9/4 | Where: SAE House, 155 Bay State Rd, Boston, MA, 02215</p>
          </div>

          <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
            <h2 className="text-2xl font-bold text-purple-700">🏀 Trampoline Dodgeball 🏀</h2>
            <p className="mt-2">Get ready to jump into action at Sky Zone! We're bringing the fun to new heights with a trampoline dodgeball showdown. Don't miss out on the bouncy battleground!</p>
            <p className="font-bold">When: Thursday, 5:00 PM to 7:00 PM, 9/5 | Where: Sky Zone, 69 Norman St, Everett, MA 02149</p>
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
