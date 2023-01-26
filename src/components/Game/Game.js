import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const handleGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses.push({ guess, key: crypto.randomUUID() });
    setGuesses(newGuesses);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
