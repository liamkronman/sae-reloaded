import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import SAECoatOfArms from "../Assets/SAE_coat_of_arms.png";
import Footer from "./Footer";

interface TemplateProps {
  child: React.ReactNode;
  title: string;
  description: string;
}

const Template: React.FC<TemplateProps> = ({
  child,
  title,
  description,
}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { path: "/", text: "Home" },
    { path: "/brothers", text: "Brothers" },
    { path: "/rush", text: "Rush" },
    { path: "/contact", text: "Contact" },
  ];

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#6b21a8" />
        <style>
          {`
            .nav-link:hover { background-color: #fbbf24; }
            .nav-link:hover::after { transform: scaleX(1); }
            .nav-link::after {
              content: '';
              position: absolute;
              left: 0; right: 0; bottom: -2px;
              height: 2px;
              background-color: #6b21a8;
              transform: scaleX(0);
              transition: transform .3s ease;
            }
          `}
        </style>
      </Helmet>

      <div className="min-h-screen flex flex-col">

        <header
          style={{ backgroundColor: "#FFFFFF" }}
          className="sticky top-0 z-50 shadow-sm"
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* Logo */}
            <button
              onClick={() => handleNavigate("/")}
              className="flex items-center space-x-3"
            >
              <img
                src={SAECoatOfArms}
                alt="Sigma Alpha Epsilon crest"
                className="h-12 w-auto"
              />
              <span className="hidden text-lg font-semibold text-slate-800 md:inline">
                Sigma&nbsp;Alpha&nbsp;Epsilon
              </span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-purple-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Nav links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
              <ul className="mt-4 flex flex-col items-center space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-10 text-sm font-semibold tracking-wide">
                {navigationLinks.map(({ path, text }) => (
                  <li key={text}>
                    <span
                      onClick={() => handleNavigate(path)}
                      className={`
                        nav-link relative cursor-pointer rounded py-2 px-3 transition-colors
                        ${window.location.pathname === path
                          ? "text-purple-700 border-b-2 border-purple-600"
                          : "text-gray-700 hover:text-purple-600"}
                      `}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{child}</main>

        <Footer />
      </div>
    </>
  );
};

export default Template;
