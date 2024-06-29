import React from 'react';
import './Quote.css';

interface QuoteProps {
    text: string;
}

const Quote: React.FC<QuoteProps> = ({ text }) => {
    return <div className="quote">{text}</div>;
};

export default Quote;
