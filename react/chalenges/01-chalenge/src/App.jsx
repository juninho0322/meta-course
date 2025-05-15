import React, {useState} from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {

       const [fruits] = useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'orange', id: 2},
        {fruitName: 'watermelon', id: 3},
        {fruitName: 'mango', id: 4},
        {fruitName: 'banana', id: 5},
        {fruitName: 'tomato', id: 6},
    ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruitsProps = {fruits}/>
      <FruitsCounter counterProps = {fruits}/>
    </div>
  );
};

export default App;
