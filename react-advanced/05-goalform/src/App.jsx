import { useState } from 'react'
import './App.css'
import { Input } from './Input.jsx'

function GoalForm(props){
  
  const [formData, setFormData] = useState({
    goal: '',
    by: '',
  });

  function changeHandler(e){
    //setFormData({...formData, [e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value);
  };


  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData)
    setFormData({
      goal: '',
      by: '',
    });
  }

  

  return (
    <>
     <h1>My goals</h1>
     <form onSubmit={submitHandler}>
      <Input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
      <input type="text" name='by' placeholder='By'  onChange={changeHandler}  />
      <button type='submit'>Add Goal</button>
     </form>
    </>
  )
}


function ListOfGoals(props){
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goals is {g.goal}, by {g.by}</span>
        </li>  
      )
      )}
    </ul>
  );
}

function App() {

  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {updateAllGoals([...allGoals, goal]);}
  

  return (
    <>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  )
}

export default App
