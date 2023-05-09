import { useState } from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [inputNumber, setInputNumber] = useState(10);
  return (
    <>
      <h1>number guess game between 0 and {inputNumber}</h1>
      <Game inputNumber={inputNumber} setInputNumber={setInputNumber}/>
    </>
  );
}

export default App;
