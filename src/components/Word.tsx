const correctGuesses: (number | null)[] = Array(5).fill("A");
const correctWord: string[] = ["S", "T", "A", "T", "E"];

export default function Word() {
  return <div>{correctGuesses.map((l) => l ?? "_")}</div>;
}
