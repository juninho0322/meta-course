import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data));
  }

   useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
   

  return Object.keys(user).length > 0 ? (
    <>
    <h1>Data returned</h1>
    <h2>First Name: {user.results[0].name.first}</h2>
    <h2>Last Name: {user.results[0].name.last}</h2>
    <img src={user.results[0].picture.large} alt="" /> 
    </>
  ) : (
    <h1> Fetching data... </h1>
  );
  
}

export default App
