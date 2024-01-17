const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white text-center p-4">
            <div className="mb-2">
                <p>MIT Sigma Alpha Epsilon © 2024 - All rights reserved</p>
            </div>
            <div className="mb-2">
                <a href="https://www.instagram.com/sae.mit/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    Follow us on Instagram
                </a>
            </div>
            <div className="mb-2">
                <a href="mailto:sae@mit.edu" className="hover:text-gray-300">
                    Contact: sae@mit.edu
                </a>
            </div>
            <div>
                <address>155 Bay State Rd Boston, MA</address>
            </div>
        </footer>
    );
};

export default Footer;