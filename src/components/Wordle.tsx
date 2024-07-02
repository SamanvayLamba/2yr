import React, { useState } from 'react';
import './Wordle.css';

const WORD_LENGTH = 8;
const MAX_ATTEMPTS = 10;
const ANSWERS = ['iloveyou']; // Example set of possible answers

const getRandomAnswer = () => ANSWERS[Math.floor(Math.random() * ANSWERS.length)];

const Wordle: React.FC = () => {
  const [answer, setAnswer] = useState(getRandomAnswer);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= WORD_LENGTH) {
      setCurrentGuess(e.target.value.toLowerCase());
    }
  };

  const handleGuessSubmit = () => {
    if (currentGuess.length === WORD_LENGTH) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
      if (currentGuess === answer) {
        setGameOver(true);
      }
    }
  };

  const getTileColor = (letter: string, index: number) => {
    if (answer[index] === letter) return 'green';
    if (answer.includes(letter)) return 'yellow';
    return 'grey';
  };

  return (
    <div className="wordle-container">
      <h1>Wordle Game For meri Bachi</h1>
      <div className="guesses-container">
        {guesses.map((guess, i) => (
          <div key={i} className="guess-row">
            {guess.split('').map((letter, index) => (
              <div
                key={index}
                className="tile"
                style={{ backgroundColor: getTileColor(letter, index) }}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
        {!gameOver && guesses.length < MAX_ATTEMPTS && (
          <div className="guess-row">
            {currentGuess.split('').map((letter, index) => (
              <div key={index} className="tile">
                {letter}
              </div>
            ))}
            {Array.from({ length: WORD_LENGTH - currentGuess.length }).map((_, index) => (
              <div key={index + currentGuess.length} className="tile empty"></div>
            ))}
          </div>
        )}
      </div>
      <input
        type="text"
        value={currentGuess}
        onChange={handleInputChange}
        maxLength={WORD_LENGTH}
        disabled={gameOver || guesses.length >= MAX_ATTEMPTS}
      />
            {gameOver && <div className="banner">Because you are the best LAADO</div>}

      <button onClick={handleGuessSubmit} disabled={gameOver || guesses.length >= MAX_ATTEMPTS}>
        Guess
      </button>
    </div>
  );
};

export default Wordle;
