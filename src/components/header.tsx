import React from 'react';
import './Header.css';  // Import the CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Happy 2-Year Anniversary!</h1>
                <p>Welcome to our special anniversary page</p>
            </div>
        </header>
    );
};

export default Header;
