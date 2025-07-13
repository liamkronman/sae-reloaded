import React from "react";
import { Link } from "react-router-dom";
import crest from "../Assets/SAE_coat_of_arms.png";
import bgBrothers from "../Assets/brothers.jpg";
import formal from "../Assets/formal.jpg";
import { motion } from "framer-motion";

const Section: React.FC<
  React.PropsWithChildren<{ bg?: string; id?: string }>
> = ({ children, bg = "", id }) => (
  <section id={id} className={`${bg} py-16 md:py-24 px-6`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 1.6, delay }},
});
  
const Hero: React.FC = () => (
    <section className="relative flex min-h-[100dvh] items-center justify-center text-center">

      <img
        src={bgBrothers}
        alt="Sigma Alpha Epsilon brothers"
        className="absolute inset-0 h-full w-full object-cover"
      />
  
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0027]/50 to-[#170044]/60 mix-blend-multiply" />
  
      <motion.div initial="hidden" animate="show" className="relative z-10 px-6">

        <motion.img
          variants={fadeUp(0.2)}
          src={crest}
          alt="ΣAE crest"
          className="mx-auto w-40 md:w-56 drop-shadow-lg"
        />
  
        <motion.p
          variants={fadeUp(0.5)}
          className="mt-6 text-lg md:text-2xl tracking-wider text-gray-100 drop-shadow"
        >
          Mass Iota Tau Chapter
        </motion.p>
  
        <motion.div variants={fadeUp(0.8)}>
          <Link
            to="/brothers"
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            Meet the Brothers
          </Link>
        </motion.div>
      </motion.div>
    </section>
);

const About: React.FC = () => (
  <div className="grid gap-10 md:grid-cols-2 md:items-center">
    <div>
      <h2 className="mb-4 text-3xl font-bold text-purple-800">
        About Us
      </h2>
      <p className="leading-relaxed text-gray-700">
      Established at MIT in  1892, the Mass Iota Tau Chapter of Sigma Alpha Epsilon 
      unites over 20 undergraduates who balance rigorous academics with a 
      strong sense of purpose. From our home at 155 Bay State Road, brothers pursue research, 
      athletics, startups, and campus leadership while upholding SAE’s “True Gentleman” ideal.

      We invest in the community through philanthropy, dedicate regular study sessions 
      for academic excellence, and maintain an alumni network that opens doors to internships 
      and mentoring across industry and academia. If you’re seeking a tight-knit, driven community, 
      visit the house and learn how SAE helps MIT students grow as scholars and leaders.
      </p>
    </div>
    <div className="flex justify-center">
    <img
  src={formal}
  alt="SAE brothers at formal"
  className="h-64 w-80 rounded-2xl object-cover shadow-inner md:h-80 md:w-[28rem]"
/>
</div>
  </div>
);

type Card = {
  title: string;
  text: string;
  link: string;
};

/* Need more content before running this tbh also chatgpt made this part anyway */

/*

const cards: Card[] = [
  {
    title: "Rush",
    text: "Interested in joining our brotherhood? Check out some of our rush events!",
    link: "/rush",
  },
  {
    title: "Philanthropy",
    text: "From Operation Smile to local Boston charities, service is at our core.",
    link: "/philanthropy",
  },
  {
    title: "Brotherhood Life",
    text: "Academic support, lifelong friendships—and a bit of legendary fun.",
    link: "/life",
  },
];

const Pillars: React.FC = () => (
  <div className="grid gap-8 md:grid-cols-3">
    {cards.map(({ title, text, link }) => (
      <Link
        key={title}
        to={link}
        className="group rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
      >
        <h3 className="mb-2 text-lg font-bold text-violet-700">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-violet-700 group-hover:underline">
          Learn more →
        </span>
      </Link>
    ))}
  </div>
);

*/

/* ---------- MAIN PAGE ---------- */
const Home: React.FC = () => (
  <>
    <Hero />

    <Section id="about">
      <About />
    </Section>
  </>
);



export default Home;
