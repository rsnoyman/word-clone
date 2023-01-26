import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import GameOverBanner from "../GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
  };

  const isGameWon = guesses[guesses.length - 1] === answer;
  const isGameOver = isGameWon || guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} isGameOver={isGameOver} />
      {isGameOver && (
        <GameOverBanner
          isGameWon={isGameWon}
          numGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
