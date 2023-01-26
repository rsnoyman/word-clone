import React from "react";
// import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ key, guess }) => (
        <p key={key} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

// {range(6).map((row) => (
//   <p key={`row-${row}`} className="guess">
//     {range(5).map((cell) => (
//       <span key={`cell-${cell}`} className="cell">
//         {""}
//       </span>
//     ))}
//   </p>
// ))}
