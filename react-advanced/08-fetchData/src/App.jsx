import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const resultsPerPage = 5;

  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=${resultsPerPage}&seed=abc`)
      .then(response => response.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }

  useEffect(fetchData,[page]);
      

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setPage(nextPage => nextPage + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage(prevPage => {
      scrollToTop();
      const value = prevPage - 1;
      if (value < 1) {
        return 1;
      } 
      return value;
    }) 
  };

  const haveKeys = Object.keys(user).length > 0;

  return loading || !haveKeys ? (
    <h1> Fetching data... </h1>
  ) : (
    <div>
      <h2>Page: {page}</h2> 
      {user.results.map((currentItem,index) => {
        const number = ( page -1 ) * resultsPerPage + index + 1;
        return (
          <div key={currentItem.login.uuid}>
            {console.log(currentItem)}
            <h3>Data returned {number}</h3>
            <h4>First Name: {currentItem.name.first}</h4>
            <h4>Last Name: {currentItem.name.last}</h4>
            <h4>Email: {currentItem.email}</h4>
            <h4>Country: {currentItem.location.country}</h4>
            <h4>City: {currentItem.location.city}</h4>
            <img src={currentItem.picture.large} alt="" /> 
            <hr />
          </div>
        )
      }
      )}
      
      <div>
        <button onClick={handlePrevPage} disabled={page === 1 || loading}>
          Previous Page
        </button>
        <span> Page {page} </span>
        <button onClick={handleNextPage} disabled={loading}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default App
