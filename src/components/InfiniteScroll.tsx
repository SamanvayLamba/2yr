import React, { useState, useEffect, useRef, useCallback } from 'react';
import Quote from './Quote';

const InfiniteScroll: React.FC = () => {
    const [quotes, setQuotes] = useState<string[]>([]);
    const loader = useRef<HTMLDivElement>(null);

    const loadMoreQuotes = useCallback(() => {
        const newQuotes = [
            "Roses are red, violets are blue...",
            "The sun sets, but my love for you...",
            "In your eyes, I see my future...",
            "You are my moon, my stars...",
            // Add more quotes here
        ];
        setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreQuotes();
                }
            },
            { threshold: 1.0 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [loadMoreQuotes]);

    return (
        <div>
        <div>
            {quotes.map((quote, index) => (
                <Quote key={index} text={quote} />
            ))}
            <div ref={loader} style={{ height: '100px', margin: '10px 0' }}></div>
        </div>
                <div>
                {quotes.map((quote, index) => (
                    <Quote key={index} text={quote} />
                ))}
                <div ref={loader} style={{ height: '100px', margin: '10px 0' }}></div>
            </div></div>


    );
};

export default InfiniteScroll;
