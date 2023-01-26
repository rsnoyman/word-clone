import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((letter) => (
        <span key={`letter-${letter}`} className="cell">
          {guess && guess[letter]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
