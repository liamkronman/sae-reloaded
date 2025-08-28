import React from "react";

type Brother = {
  name: string;
  hometown: string;
  img: string; // FILENAME ONLY
  year: number;
  clubs: string[];
  interests: string[];
  ig: string; // FULL URL
};

const brothers: Brother[] = [
  {
    name: "Abe Schechinger",
    hometown: "Oakland, IA",
    img: "abe.jpg",
    year: 2028,
    clubs: ["Design Build Fly", "Intermural Soccer"],
    interests: ["Soccer", "Saxophone", "Hiking"],
    ig: "https://instagram.com/abe_schech",
  },
  {
    name: "Hubert Jiang",
    hometown: "Rochester, NY",
    img: "hubert.jpg",
    year: 2028,
    clubs: ["Poker Club"],
    interests: ["Poker", "Gaming (League, TFT, Minecraft)"
      , "Esports", "Reels"
    ],
    ig: "https://instagram.com/hubert_jiang",
  },
  {
    name: "Regan Song",
    hometown: "Diamond Bar, CA",
    img: "regan.jpeg",
    year: 2028,
    clubs: ["YCombinator", "Media Lab", "Motorsports"],
    interests: ["Photography", "Guitar", "Running", "Gym", "Thrifting", "Startups"],
    ig: "https://instagram.com/reggo.song",
  },
  {
    name: "Eddy Calel",
    hometown: "Portland, OR",
    img: "eddy.jpeg",
    year: 2026,
    clubs: ["Mechanical Engineering", "Stuff"],
    interests: ["Music", "Hiking with family", "Breathing in the smell of nature"],
    ig: "https://instagram.com/3ddyc4lel",
  },
  {
    name: "Spencer Sindhusen",
    hometown: "Bangkok, Thailand",
    img: "spencer.jpeg",
    year: 2027,
    clubs: ["MIT Varsity Rifle", "MIT Science Policy Initiative"],
    interests: ["Travel", "Colognes", "Golf", "Muay Thai", "Mixology", "Shooting Sports", "Event Derivative Trading", "Indoor Climbing", "Kantian Philosophy"],
    ig: "https://instagram.com/ssspencess",
  },
  {
    name: "Thomas Larsen",
    hometown: "Staten Island, NY",
    img: "thomasL.jpeg",
    year: 2026,
    clubs: ["MIT LIVE", "Biomechatronics Group", "GEL2"],
    interests: ["Saxophone", "Film Photography", "Gaming", "Traveling", "Music", "Doomscrolling", "Food"],
    ig: "https://instagram.com/t.h.larsen",
  },
  {
    name: "Lance Berkey",
    hometown: "Wilbur, WA",
    img: "lance.jpg",
    year: 2026,
    clubs: ["Intramural Basketball", "Volleyball", "Soccer"],
    interests: ["Reading", "Learning Languages"],
    ig: "https://instagram.com/lanceberkey",
  },
  {
    name: "Minh Vu",
    hometown: "Leominster, MA",
    img: "minh.jpeg",
    year: 2027,
    clubs: ["Vietnamese Student Association", "BCSS", "Dorm Gov", "AA", "OL"],
    interests: ["Neurobiology", "LeBron", "Celtics", "Vietnamese Culture"],
    ig: "https://www.instagram.com/sae.mit/",
  },
  {
    name: "Aleks Garbuz",
    hometown: "Manalapan, NJ",
    img: "aleks.jpeg",
    year: 2028,
    clubs: ["Aerospace research", "Satellite Club", "Side projects"],
    interests: ["Cello", "Reading", "Music", "Startups"],
    ig: "https://www.instagram.com/aleksander_garbuz",
  },
  {
    name: "Rishi Shiv",
    hometown: "Houston, TX",
    img: "rishi.jpeg",
    year: 2028,
    clubs: ["MIT Varsity Fencing", "MIT HTIC"],
    interests: ["Fencing", "Hiking", "(Watching) Soccer", "Sci-Fi Books"],
    ig: "https://www.instagram.com/rishishiv83",
  },
  {
    name: "Nathaniel Felleke",
    hometown: "San Diego, CA",
    img: "natty.jpeg",
    year: 2026,
    clubs: ["VR/AR @ MIT"],
    interests: ["Running", "FPV Drones", "Film Photography"],
    ig: "https://www.instagram.com/nathanielfelleke",
  },
  {
    name: "Jacob Janzen",
    hometown: "Jamestown, ND",
    img: "jacob.jpeg",
    year: 2028,
    clubs: ["MIT Hillel"],
    interests: ["Piano", "Guitar", "Percussion", "Lifting"],
    ig: "https://www.instagram.com/jjanzen",
  },
  {
    name: "Michael Voigt",
    hometown: "Belmont, MA",
    img: "michael.png",
    year: 2028,
    clubs: ["Science Olympiad, Sport Taekwondo"],
    interests: ["Violin", "Poker", "Cats"],
    ig: "https://www.instagram.com/michael_voigt_",
  },
  {
    name: "Thomas Cong",
    hometown: "Ossining, NY",
    img: "tcong.jpeg",
    year: 2028,
    clubs: ["Technique", "UROP"],
    interests: ["Photography", "Embroidering", "Brawlhalla"],
    ig: "https://www.instagram.com/thomascong13",
  },
];

const Card: React.FC<Brother> = ({
  name,
  hometown,
  img,
  clubs,
  interests,
  ig,
}) => (
  <div className="relative group rounded-2xl shadow hover:shadow-lg transition">
    {/* front face */}
    <figure className="flex flex-col items-center rounded-2xl bg-white p-8">
      <img
        src={`/images/${img}`}
        alt={name}
        className="mb-4 h-28 w-28 rounded-full object-cover ring-2 ring-purple-700/60"
      />
      <figcaption className="text-center">
        <p className="text-lg font-medium text-purple-800">{name}</p>
        <p className="text-sm text-slate-700">{hometown}</p>
      </figcaption>
    </figure>

    {/* hover overlay */}
    <div
      className="
        absolute inset-0 flex flex-col rounded-2xl bg-white/95 px-6 py-4
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      "
    >
      <p className="text-sm font-semibold text-purple-800">Clubs</p>
      <p className="text-base text-slate-700 leading-snug">
        {clubs.join(", ")}
      </p>

      <p className="mt-3 text-sm font-semibold text-purple-800">Interests</p>
      <p className="text-base text-slate-700 leading-snug">
        {interests.join(", ")}
      </p>

      <a
        href={ig}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-block rounded bg-purple-700 px-3 py-1 text-sm font-semibold text-white hover:bg-purple-800"
      >
        Check out {name.split(" ")[0]}'s Instagram! →
      </a>
    </div>
  </div>
);

export default function Brothers() {
  const byYear: Record<number, Brother[]> = {};
  brothers.forEach((b) => (byYear[b.year] ??= []).push(b));

  return (
    <main className="min-h-screen animate-bgShift px-6 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold text-purple-800">
        The Brothers
      </h1>

      {Object.keys(byYear)
        .sort((a, b) => Number(a) - Number(b))
        .map((year) => (
          <section key={year} className="mb-20">
            <h2 className="mb-10 text-center text-2xl font-semibold text-purple-700">
              Class&nbsp;of&nbsp;{year}
            </h2>

            <div className="mx-auto grid max-w-6xl gap-10 grid-cols-1 sm:grid-cols-3">
              {byYear[+year].map((bro) => (
                <Card key={bro.name} {...bro} />
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}
