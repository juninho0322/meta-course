import { useState, useEffect } from 'react'
import './App.css'

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const items = url.includes("desserts") 
    ? ["cake", "ice cream", "pie", "pudding"]
    : url.includes("drinks") 
    ? ["water", "soda", "juice", "tea", "coffee", "beer"]
    : [];
     setData(items);
  }, [url]);
  
    if(!data || data.length === 0){
      return <h3>Loading...</h3>
    } 
  
  
  return render(data);
};



const DessertsCount = () => {
  return (
    console.log("Rendering DessertsCount"),
    <DataFetcher
      url="https://littlelemon/desserts"
      render = {(desserts) => {
        console.log("Desserts array:", desserts);
        return <p>{desserts.length} desserts</p>}

      }
    />
  )
}


const DrinksList = () => {
  return (
    console.log("Rendering DrinksCount"),
    <DataFetcher
      url="https://littlelemon/drinks"
      render = {(drinks) => {
        console.log("Drinks array:", drinks);
        return <h3>{drinks.length} drinks</h3>}
      }
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
