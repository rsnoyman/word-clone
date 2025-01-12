import React, { useState } from "react";

function GuessInput({ handleGuess, isGameOver }) {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) {
          window.alert("Your guess must be 5 letters");
          return;
        }
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={isGameOver}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
