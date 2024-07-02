import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import InfiniteScroll from './components/InfiniteScroll';
import Footer from './components/Footer';
import Wordle from './components/Wordle';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/wordle" element={<Wordle />} />
                        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
                        <Route path="/" element={<InfiniteScroll />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
