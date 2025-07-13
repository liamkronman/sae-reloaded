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
    clubs: ["AI Research", "Motorsports"],
    interests: ["Photography", "Guitar", "Music", "Running", "Lifting", "Startups"],
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
