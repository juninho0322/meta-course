
import { useState } from 'react';
import './App.css'

function App() {

  // State to hold the name input and the list of names 
  // This will be a string to hold the current input value
  const [name, setName] = useState('');

  // State to hold the submitted names
  // This will be an array to store multiple names
  const [names, setNames] = useState([]);

  // State to hold the feedback score
  const [score, setScore] = useState("10");

  // State to hold the submitted score
  const [submittedScore, setSubmittedScore] = useState(null);
  

  const handleSubmit = (e)=> {
    // Prevent the default form submission behavior
    e.preventDefault();
    if (!name) {
      alert('Please enter your name');
      return;
    }
    if (name[0] === 'L'){
      alert('Name cannot start with L');
      return;
    }
    
      alert('Form submitted!');
      setNames((prevNames) => [...prevNames, name]);
      setName('');
    
  }
  
  // FEEDBACK FORM
  const handleScoreChange = (e) => {
    // Update the score state with the new value from the range input
    setScore(e.target.value);
  };

  const handleScoreSubmit = (e) => {  
    // Prevent the default form submission behavior
    e.preventDefault();
    setSubmittedScore(score);
    // Display an alert with the submitted score
    alert(`Score submitted: ${score}`);
  }
  
  
  

  return (
    
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='Field'>
            <label htmlFor='name'>Name: </label>
            <input id='name'
            type="text" 
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Disable the submit button if name is empty */}
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
        
        <div>
          <p>Submitted names:</p>

          {/* Map through the names array and display each name */}
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </form>

      <div className='FeedbackForm'>
        <form onSubmit={handleScoreSubmit}>
          <fieldset>
            <h2>Feedback Form</h2>
              <div className='Field'>
                <label htmlFor="">Score: {score}</label>
                <input 
                type="range" 
                min="0" 
                max="10" 
                value={score}
                onChange={handleScoreChange}
                />
              </div> 
            <button type="submit">Submit</button>
            {submittedScore !== null && (
              <p>Score Submitted: {score}</p>
            )}
            
          </fieldset>
        </form>
      </div>      
    </div>
  );
 }

export default App;
