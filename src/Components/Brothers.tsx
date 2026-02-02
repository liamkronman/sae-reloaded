import React from "react";

type Brother = {
  name: string;
  hometown: string;
  img: string;
  year: number;
  clubs: string[];
  interests: string[];
  ig: string; // URL
  showClubs?: boolean; // defaults to true
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
    interests: ["Poker", "Gaming (League, TFT, Minecraft)", "Esports", "Reels"],
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
    interests: [
      "Travel",
      "Colognes",
      "Golf",
      "Muay Thai",
      "Mixology",
      "Shooting Sports",
      "Event Derivative Trading",
      "Indoor Climbing",
      "Kantian Philosophy",
    ],
    ig: "https://instagram.com/ssspencess",
  },
  {
    name: "Thomas Larsen",
    hometown: "Staten Island, NY",
    img: "thomasL.jpeg",
    year: 2026,
    clubs: ["MIT LIVE", "Biomechatronics Group", "GEL2"],
    interests: [
      "Saxophone",
      "Film Photography",
      "Gaming",
      "Traveling",
      "Music",
      "Doomscrolling",
      "Food",
    ],
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
    clubs: [],
    interests: ["Michael Voight"],
    ig: "https://www.instagram.com/zezz_tee",
    showClubs: false,
  },
  {
    name: "Michael Voigt",
    hometown: "Belmont, MA",
    img: "michael.png",
    year: 2028,
    clubs: ["Science Olympiad, Sport Taekwondo"],
    interests: ["Violin", "Tennis", "Poker", "Cats"],
    ig: "https://www.instagram.com/michael_voigt_",
  },
  {
    name: "Addison Spiegel",
    hometown: "Houston, TX",
    img: "addison.png",
    year: 2027,
    clubs: ["Muay Thai", "Running", "Weightlifting", "Shareholder Value Creation"],
    interests: ["Positive externalities"],
    ig: "https://www.instagram.com/addisonspiegel",
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
  {
    name: "Jonathan Zhao",
    hometown: "Queens, NY",
    img: "joezhao.jpeg",
    year: 2026,
    clubs: ["Biology UROP"],
    interests: ["Motorsport", "Westerns and Thrillers (movies)", "Philosophy"],
    ig: "https://www.instagram.com/saloushe12",
  },
  {
    name: "Jhanny Jiminez",
    hometown: "Queens, NY",
    img: "jhanny.png",
    year: 2026,
    clubs: ["Squash"],
    interests: ["Fantasy Media", "Music", "Bass"],
    ig: "https://www.instagram.com/jhanny_jz",
  },
];

// ES5 + strict safe: sort once for a clean directory feel
const displayBrothers: Brother[] = [...brothers].sort((a: Brother, b: Brother) =>
  a.name.localeCompare(b.name)
);

const BrotherCard: React.FC<Brother> = ({
  name,
  hometown,
  img,
  year,
  clubs,
  interests,
  ig,
  showClubs = true,
}) => {
  const firstName = name.split(" ")[0];
  const hasClubs = showClubs && clubs.length > 0;
  const hasInterests = interests.length > 0;

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl border border-slate-200 bg-white
        shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md
      "
    >
      {/* Base view */}
      <div className="flex flex-col items-center p-7 text-center">
        <img
          src={`/images/${img}`}
          alt={`${name} headshot`}
          loading="lazy"
          className="h-24 w-24 rounded-full object-cover ring-2 ring-purple-700/30"
        />

        <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{hometown}</p>
        <p className="mt-1 text-xs font-medium text-slate-500">Class of {year}</p>
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 flex flex-col gap-3 bg-white/95 p-6
          opacity-0 transition-opacity duration-200
          group-hover:opacity-100 group-focus-within:opacity-100
        "
      >
        {hasClubs && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              Activities
            </p>
            <p className="mt-1 text-sm text-slate-700">{clubs.join(", ")}</p>
          </div>
        )}

        {hasInterests && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              Interests
            </p>
            <p className="mt-1 text-sm text-slate-700">{interests.join(", ")}</p>
          </div>
        )}

        <a
          href={ig}
          target="_blank"
          rel="noreferrer"
          className="
            mt-auto inline-flex items-center justify-center rounded-lg bg-purple-700 px-3 py-2
            text-sm font-semibold text-white transition-colors hover:bg-purple-800
            focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
          "
          aria-label={`Open ${name}'s Instagram`}
        >
          View {firstName}&apos;s Instagram →
        </a>
      </div>
    </article>
  );
};

export default function Brothers() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <header className="mx-auto mb-12 max-w-6xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Brotherhood
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Meet the brothers and learn about what they’re involved in on campus.
        </p>
      </header>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayBrothers.map((bro: Brother) => (
            <BrotherCard key={bro.name} {...bro} />
          ))}
        </div>
      </div>
    </main>
  );
}
