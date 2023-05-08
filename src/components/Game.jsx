import React, { useState } from "react";

export default function Game() {
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(getRandomNumber(10));
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);

  function checkGuess() {
    setMsg(getMessage(guess, randomNumber));
    setCount((count) => count + 1);
  }

  function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }

  function getMessage(guess, randomNumber) {
    const guessNo = Number(guess);
    if (guessNo < randomNumber) return "Your guess is too low";
    if (guessNo > randomNumber) return "Your guess is too high";
    if (guessNo === randomNumber) return "You got it!";
  }

  function start() {
    setGuess('')
    setRandomNumber(getRandomNumber(10));
    setCount(0);
    setMsg("");
  }
console.log(randomNumber)
  return (
    <form action="">
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      {msg !== "You got it!" ? (
        <button type="button" onClick={checkGuess}>
          Guess
        </button>
      ) : (
        <button type="button" onClick={start}>
          Play Again!
        </button>
      )}
      <div>{msg}</div>
      <div>Number of guesses {count}</div>
    </form>
  );
}
