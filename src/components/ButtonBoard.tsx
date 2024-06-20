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

export default function ButtonBoard(buttonBoardHandler) {
  return (
    <div className="button-board">
      {alphabet.map((char) => (
        <button
          onClick={() => buttonBoardHandler(char)}
          className="letter-button"
        >
          {char}
        </button>
      ))}
    </div>
  );
}
