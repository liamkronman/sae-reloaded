import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState('');

    const messages = [
        "Calculating the optimal prank trajectory...",
        "Compiling the latest hack code...",
        "Engineering some fun...",
        "Decrypting the secrets of brotherhood...",
        "Loading... Please MITigate your impatience!",
        "Assembling the components of legendary hacks...",
        "Buffering the Infinite Corridor run...",
        "Initiating the Infinite Loop of fun...",
        "Fetching the Brass Rat design...",
        "Rendering the next big hack...",
    ];

    useEffect(() => {
        // Select a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setLoadingMessage(randomMessage);
    }, []); // This ensures the effect only runs once when the component mounts

    return (
        <div className="relative w-full h-[85vh]">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
                    <p className="text-purple-700 font-semibold">{loadingMessage}</p> {/* Display the loading message */}
                </div>
            )}
            <iframe
                src="https://my.spline.design/untitled-71a80eea789eac636e1c9d1ebdc22ca8/"
                title="SAE 3D"
                className={`w-full h-full ${isLoading ? 'invisible' : 'visible'}`}
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
    );
};

export default Home;
