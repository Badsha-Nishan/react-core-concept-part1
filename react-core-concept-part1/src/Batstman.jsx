import { useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
  const [six, setSix] = useState(0);

  const singleRun = () => {
    const newRun = run + 1;
    setRun(newRun);
  };
  const fourRun = () => {
    const newRun = run + 4;
    setRun(newRun);
  };
  const sixRun = () => {
    const newRun = run + 6;
    const sixes = six + 1;
    setSix(sixes);
    setRun(newRun);
  };

  return (
    <div>
      {run > 50 && <p>Your Score: 50+</p>}
      <h2>Score: {run}</h2>
      <h3>Six: {six}</h3>
      <button onClick={singleRun}>Single Run</button>
      <button onClick={fourRun}>Four Run</button>
      <button onClick={sixRun}>Six Run</button>
    </div>
  );
}
