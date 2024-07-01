
import React, { useEffect, useState } from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header: React.FC = () => {
    const [showHearts, setShowHearts] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHearts(false);
        }, 3000); // Hide hearts after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className="header">
            <div className="header-content">
                <h1>Happy 2-Year Anniversary!</h1>
                <p>Thanks baby mere saath rehne ke liye</p>
                <p>
                    <a href="https://samanvay-loves-you.github.io/SlovesS/" target="_blank" rel="noopener noreferrer">
                        Play the love percentage game here
                    </a>
                </p>
            </div>
            {showHearts && (
                <div className="hearts">
                    <div className="heart heart1"></div>
                    <div className="heart heart2"></div>
                </div>
            )}
        </header>
    );
};

export default Header;

