import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);;

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={increase}>Increase </button>
      <p>{count}</p>
      <button onClick={reset}>Reset </button>
    </div>
  );
}

export default Counter;
