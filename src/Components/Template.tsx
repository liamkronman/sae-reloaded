import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SAECoatOfArms from '../Assets/SAE_coat_of_arms.png';

// this is the template for all pages
interface TemplateProps {
    child: React.ReactNode;
    title: string;
    description: string;
}

const Template:React.FC<TemplateProps> = (
    { child, title, description }
) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationLinks = [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/brothers', text: 'Brothers' },
        { path: '/rush', text: 'Rush' },
        { path: '/house', text: 'House' },
        { path: '/events', text: 'Events' },
        { path: '/contact', text: 'Contact' },
        { path: '/alumni', text: 'Alumni' },
    ];

    const handleNavigate = (path: string) => {
        setIsMenuOpen(false); // Close the menu on selection (for mobile view)
        navigate(path);
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
            <header className="bg-purple-800 text-white">
                <nav className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        <img src={SAECoatOfArms} alt="SAE Logo" className="h-20 w-18" />
                        {/* <span className="font-semibold text-xl tracking-tight">MIT Sigma Alpha Epsilon</span> */}
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full block flex-grow md:flex md:items-center md:w-auto`}>
                        <div className="text-sm md:flex-grow">
                            {navigationLinks.map(link => (
                                <span
                                    key={link.text}
                                    onClick={() => handleNavigate(link.path)}
                                    className="block mt-4 md:inline-block md:mt-0 md:text-left text-center mr-4 cursor-pointer font-bold hover:bg-purple-600 p-2 rounded transition-colors duration-300"
                                >
                                    {link.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
            {child}
        </>
    );
};

export default Template;