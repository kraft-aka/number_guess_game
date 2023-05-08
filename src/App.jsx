import { useState } from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <>
      <h1>number guess game between 0 and 10</h1>
      <Game />
    </>
  );
}

export default App;
