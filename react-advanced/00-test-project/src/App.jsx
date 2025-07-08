import './App.css'
import { PassingProps, Counter } from './components/PassingProps';

function App() {

  const people = [
    { name: "John Doe", age: 30, country: "USA" },
    { name: "Jane Smith", age: 25, country: "Canada" },
    { name: "Alice Johnson", age: 28, country: "UK" },
    { name: "Bob Brown", age: 35, country: "Australia" }
    
  ]


  return (
    <>
       <div className="person">
      <h1>People Table</h1>
      <table border="1" cellPadding="8" cellSpacing="0" className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <PassingProps key={index} name={person.name} age={person.age} country={person.country} />
          ))}
        </tbody>
      </table>
    </div>
      <h2>Counter Component</h2>
      <Counter />
    </>
  )
}

export default App
