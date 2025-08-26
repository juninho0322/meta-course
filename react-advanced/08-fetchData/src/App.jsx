import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const resultsPerPage = 5;

  const fetchData = (pageNum) => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${pageNum}&results=${resultsPerPage}&seed=abc`)
      .then(response => response.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(page);
    }, 2000);

    return () => clearTimeout(timer);
  }, [page]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollToTop
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop
  };

  const haveKeys = Object.keys(user).length > 0;

  return loading || !haveKeys ? (
    <h1> Fetching data... </h1>
  ) : (
    <div>
      {user.results.map((currentItem) => (
        <div key={currentItem.login.uuid}>
          {console.log(currentItem)}
          <h1>Data returned</h1>
          <h2>First Name: {currentItem.name.first}</h2>
          <h2>Last Name: {currentItem.name.last}</h2>
          <h2>Email: {currentItem.email}</h2>
          <h2>Country: {currentItem.location.country}</h2>
          <h2>City: {currentItem.location.city}</h2>
          <img src={currentItem.picture.large} alt="" /> 
          <hr />
        </div>
      ))}

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
