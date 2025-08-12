import { useState, useEffect } from 'react'
import './App.css'


//********************************************************************************** */
 //No Dependency Array → Runs after every render
 export function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EXAMPLE 01 - Runs after every render. Current count:", count);

  });

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>; 
}
//********************************************************************************** */

// /Empty Dependency Array [] → Runs only once on mount
export function Example2() {
  useEffect(() => {
    console.log("EXAMPLE 02 - Runs only once when component mounts");
  }, []);

  return <p>Check the console</p>;
}

//********************************************************************************** */
//With State in Dependency Array → Runs when that state changes
export function Example3() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("EXAMPLE 03 - Searching for:", query);
  }, [query]); // Only runs when `query` changes

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Type something..."
    />
  );
}

//********************************************************************************** */
//Multiple Dependencies
export function Example4() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  useEffect(() => {
    console.log("EXAMPLE 04 - Full name changed:", `${first} ${last}`);
  }, [first, last]); // Runs if first OR last changes

  return (
    <>
      <input placeholder="First" onChange={(e) => setFirst(e.target.value)} />
      <input placeholder="Last" onChange={(e) => setLast(e.target.value)} />
    </>
  );
}

  

function App() {

 

  return (
    <>
      {/* No Dependency Array → Runs after every render */}
      <h1>useEffect Example 1</h1>
      <Example1 /> {/* Calling the component here */}

      {/* Empty Dependency Array [] → Runs only once on mount */}
      <h1>useEffect Example 2</h1>
      <Example2 /> {/* Empty Dependency Array [] → Runs only once on mount */}

      {/* With State in Dependency Array → Runs when that state changes */}
      <h1>useEffect Example 3</h1>
      <Example3 /> {/* Only runs when `query` changes */}


      {/* Multiple Dependencies */}
      <h1>useEffect Example 4</h1>
      <Example4 /> {/* Runs if first OR last changes */}
 
    </>
  )
}

export default App
