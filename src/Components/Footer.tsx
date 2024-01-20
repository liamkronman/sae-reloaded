import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-purple-900 text-white p-6 relative">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Follow</h3>
                        <a href="https://www.instagram.com/sae.mit/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                            Instagram - @sae.mit
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Contact</h3>
                        <a href="mailto:sae@mit.edu" className="hover:text-gray-300 transition-colors duration-200">
                            sae@mit.edu
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                        <p>155 Bay State Rd Boston, MA</p>
                    </div>
                </div>
                <div className="text-center text-xs mt-4">
                    MIT Sigma Alpha Epsilon © 2024 - All rights reserved
                </div>
            </footer>
            <a href="https://accessibility.mit.edu" target="_blank" rel="noopener noreferrer" className="font-bold underline fixed bottom-0 right-0 bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 m-4 rounded transition-colors duration-300">
                Accessibility
            </a>
        </>
    );
};

export default Footer;
