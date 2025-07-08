import { useState } from "react";

function Counter() {
  const [count, counter] = useState(0);

  return (
    <>
    <h2>Counter Component</h2>
      <p>Counter: {count}</p>
      <button onClick={() => counter(count + 1)}>Increment</button>
      <button onClick={() => counter(count - 1)}>Decrement</button>
      <button onClick={() => counter(0)}>Reset</button>
    </>
  )

}

export default Counter;