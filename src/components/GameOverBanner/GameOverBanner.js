import React from "react";

function WinnerBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function LoserBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function GameOverBanner({ isGameWon, numGuesses, answer }) {
  return isGameWon ? (
    <WinnerBanner numGuesses={numGuesses} />
  ) : (
    <LoserBanner answer={answer} />
  );
}

export default GameOverBanner;
