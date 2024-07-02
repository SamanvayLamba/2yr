import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [showHearts, setShowHearts] = useState(true);
    const location = useLocation();

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
                <nav className="nav-buttons">
                    <Link to="/wordle" className={`nav-button ${location.pathname === '/wordle' ? 'active' : ''}`}>
                        Wordle
                    </Link>
                    <Link to="/infinite-scroll" className={`nav-button ${location.pathname === '/infinite-scroll' ? 'active' : ''}`}>
                        Poem
                    </Link>
                </nav>
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
