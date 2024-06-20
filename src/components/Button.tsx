type ButtonProps = {
  letter: string;
  buttonHandler: any;
};

//const [clicked, setClicked] = useState(false);

export default function Button({ letter, buttonHandler }: ButtonProps) {
  return (
    <button onClick={buttonHandler(letter)} className="letter-button">
      {letter}
    </button>
  );
}
