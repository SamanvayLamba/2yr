import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import InfiniteScroll from './components/InfiniteScroll';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <InfiniteScroll />
            </main>
            <Footer />
        </div>
    );
};

export default App;
