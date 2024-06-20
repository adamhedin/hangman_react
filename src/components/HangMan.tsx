import { useEffect, useState } from "react";

const alphabet: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const hangmanArray = [
  [" ", " ", "+", "-", "-", "-", "+"],
  [" ", " ", "|", " ", " ", " ", "|"],
  [" ", " ", " ", " ", " ", " ", "|"],
  [" ", " ", " ", " ", " ", " ", "|"],
  [" ", " ", " ", " ", " ", " ", "|"],
  [" ", " ", " ", " ", " ", " ", "|"],
  ["=", "=", "=", "=", "=", "=", "="],
];

type part = {
  x: number;
  y: number;
  i: string;
};

const addedParts: part[] = [
  { x: 2, y: 2, i: "O" },
  { x: 3, y: 2, i: "|" },
  { x: 3, y: 1, i: "/" },
  { x: 3, y: 3, i: "\\" },
  { x: 4, y: 1, i: "/" },
  { x: 4, y: 3, i: "\\" },
];

type HangManProps = {
  word: string;
};

function useGameEnded(gameEnded = false) {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const endGame = (way: string) => {
    setGameWon(way == "won");
    setGameLost(way == "lost");
  };
  return [gameWon || gameLost, endGame];
}

export default function HangMan({ word }: HangManProps) {
  const correctWord: string[] = Array.from(word);
  const [correctGuesses, setCorrectGuesses] = useState(
    Array(word.length).fill(null)
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    setCorrectGuesses(Array(word.length).fill(null));
  }, [word]);

  function letterHandler(letter: string) {
    const index = correctWord.findIndex((l) => l == letter);

    if (index > -1) {
      const newGuess = correctGuesses.splice(0);
      newGuess[index] = letter;
      setCorrectGuesses(newGuess);
      setGameWon(newGuess.join("") == word);
    } else {
      if (addedParts[wrongGuesses]) {
        const addPart: part = addedParts[wrongGuesses];
        hangmanArray[addPart.x][addPart.y] = addPart.i;
        setWrongGuesses(wrongGuesses + 1);
      } else {
        setGameLost(true);
      }
    }
    setGuesses([letter].concat(guesses));
  }

  return (
    <pre>
      {gameLost ? (
        <>
          <div className="dead">HANGED</div>
          <h2>the correct word was: {word}</h2>
        </>
      ) : gameWon ? (
        <h2>You won, the correct word was: {word}</h2>
      ) : (
        <p></p>
      )}
      <div className="hang-board">
        {hangmanArray.map((row) => (
          <div>{row.join("")}</div>
        ))}
      </div>
      <h2>{correctGuesses.map((l) => (l ?? "_") + " ")}</h2>
      <br />
      <br />
      <div className="button-board">
        {alphabet.map((char) => (
          <button
            onClick={() => letterHandler(char)}
            disabled={guesses.includes(char)}
            className="letter-button"
          >
            {char}
          </button>
        ))}
      </div>
    </pre>
  );
}
