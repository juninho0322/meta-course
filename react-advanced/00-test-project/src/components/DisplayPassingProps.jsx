import PassingProps from './PassingProps';

const people = [
  { id:0, name: "John Doe", age: 30, country: "USA" },
  { id:1,name: "Jane Smith", age: 25, country: "Canada" },
  { id:2, name: "Alice Johnson", age: 28, country: "UK" },
  { id:3,name: "Bob Brown", age: 35, country: "Australia" }

]


function DisplayPassingProps() {
  return (
    <>
    <h1>People Table</h1>
      <table border="1" cellPadding="8" cellSpacing="0" className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <PassingProps key={index} id={person.id} name={person.name} age={person.age} country={person.country} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayPassingProps;


