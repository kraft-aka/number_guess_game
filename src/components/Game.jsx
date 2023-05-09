import React, { useState, useEffect } from "react";

export default function Game(props) {
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(props.inputNumber)
  );
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);

  console.log(props.inputNumber);
  function checkGuess() {
    setMsg(getMessage(guess, randomNumber));
    setCount((count) => count + 1);
  }

  useEffect(() => {
    setRandomNumber(getRandomNumber(props.inputNumber));
  }, [props.inputNumber]);

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
    setGuess("");
    props.setInputNumber(10);
    setCount(0);
    setMsg("");
  }
  console.log(randomNumber);
  return (
    <form action="">
      <input
        type="number"
        value={props.inputNumber}
        onChange={(e) => props.setInputNumber(e.target.value)}
      />
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
      {msg === "You got it!" ? (
        <h2>The number was: {randomNumber}</h2>
      ) : (
        <h2>The number is ...</h2>
      )}
    </form>
  );
}
