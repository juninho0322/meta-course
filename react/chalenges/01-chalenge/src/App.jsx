import React, {useState} from "react";
import GetNames from "./GetNames";
import FruitsCounter from "./FruitsCounter";

function App() {

       const [fruits] = useState([
        {name: 'apple', id: 1},
        {name: 'orange', id: 2},
        {name: 'watermelon', id: 3},
        {name: 'mango', id: 4},
        {name: 'banana', id: 5},
        {name: 'tomato', id: 6},
    ]);
      const [names] = useState([
        {name: 'John', id: 1},
        {name: 'Jane', id: 2},
        {name: 'Doe', id: 3},
    ]);

  return (
    <>
    <div className="App">
      <h1>Where should the state go?</h1>
      <GetNames namesData = {fruits}/>
      <FruitsCounter counterProps = {fruits}/>
    </div>
    <div className="App">
      <h1>Where should the state go?</h1>
      <GetNames namesData = {names}/>
      <FruitsCounter counterProps = {names}/>
    </div>
    </>
  );
};

export default App;
