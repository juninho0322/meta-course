
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
  

  const handleSubmit = (event)=> {
    // Prevent the default form submission behavior
    event.preventDefault();
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
  const handleFeebackSubmit = (e) => {
    setScore(e.target.value);
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
        <form action="">
          <fieldset>
            <h2>Feedback Form</h2>
              <div className='Field'>
                <label htmlFor="">Score: {score}</label>
                <input 
                type="range" 
                min="0" 
                max="10" 
                value={score}
                onChange={handleFeebackSubmit}
                />
              </div> 
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>      
    </div>
  );
 }

export default App;
