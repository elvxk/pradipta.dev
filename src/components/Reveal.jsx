import { RandomReveal } from "react-random-reveal";

const Reveal = (play) => {
  return (
    <RandomReveal
      isPlaying={play}
      duration={1.5}
      characters={["H", "i", " ", "the", "re"]}
      characterSet={["안", "녕", "하", "세", "요"]}
    />
  );
};
export default Reveal;
