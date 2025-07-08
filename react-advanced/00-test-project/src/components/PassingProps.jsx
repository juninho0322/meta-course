import { useState } from "react";

function PassingProps({ name, age, country }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{country}</td>
      </tr>
    </>
  )
}


function Counter() {
  const [count, counter] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => counter(count + 1)}>Increment</button>
      <button onClick={() => counter(count - 1)}>Decrement</button>
      <button onClick={() => counter(0)}>Reset</button>
    </>
  )

}


export { Counter, PassingProps };