import React, { useState, useEffect, useRef, useCallback } from 'react';
import Quote from './Quote';

const InfiniteScroll: React.FC = () => {
    const [quotes, setQuotes] = useState<string[]>([]);
    const loader = useRef<HTMLDivElement>(null);

    const loadMoreQuotes = useCallback(() => {
        const newQuotes = [
            "Tu hai meri pot",
            "Jo hai bohot hi hot",
            "kabhi mujhse door na jaana",
            "agar jaaye to jaldi aana laut",
            "Tu hai meri sapno ki rani",
            "Jo hai kabhi bholi aur kabhi shyani",
            "Tere se door main to aisa",
            "jaise hoti hai machhli bina pani",
            "Tu hai meri sapno ki rani",
            "Jo hai kabhi bholi aur kabhi shyani",
            "Tere se door main to aisa",
            "jaise hoti hai machhli bina pani",
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
