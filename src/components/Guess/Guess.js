import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const check = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((letter) => (
        <span
          key={`letter-${letter}`}
          className={`cell ${check && check[letter].status}`}
        >
          {guess && guess[letter]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
