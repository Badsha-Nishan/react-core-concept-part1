import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const reduceCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
