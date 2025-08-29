import { useState, useEffect } from 'react'
import './App.css'

const DataFetcher = ({ render, url}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "pudding", "brownie", "cookies"]);
    } else {
      setData(["water", "soda", "juice", "tea", "coffee", "beer"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render = {(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksList = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render = {(data) => <h3>{data.length} drinks</h3>}
    />
  );
};  


function App() {


  return (
    <div className="App">
      <h1>Data Fetcher with Render Props</h1>
      <DessertsCount />
      <DrinksList />
    </div>

  )
}

export default App
