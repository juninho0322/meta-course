import { useReducer } from 'react'

import './App.css'

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return {money: state.money -10};
  if (action.type === "sell_a_meal") return {money: state.money +10}
  if (action.type === "tip") return {money: state.money +50}
  
}

function App() {

  const initalState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initalState)



  return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
        <div>
          <button onClick={()=> dispatch({type: "buy_ingredients"})}>Shooping for veggies</button>
          <button onClick={()=> dispatch({type: "sell_a_meal"})}>Serve a meal to the customer</button>
          <button onClick={()=> dispatch({type: "tip"})}>customer gives a tip</button>
        </div>

    </div>

  
  )
}

export default App
