import { useEffect, useState } from "react";
import "./App.css";
import HangMan from "./components/HangMan";

function App() {
  const [input, setInput] = useState("");
  useEffect(() => {}, [input]);
  return (
    <>
      <header>
        <h1>HANGMAN</h1>
      </header>
      <label>
        Enter Word:{" "}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="password"
          name="word"
        />
      </label>
      <HangMan word={input.toUpperCase()} />
    </>
  );
}

export default App;
