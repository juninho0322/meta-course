
import "./App.css";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import ModeToggler from "./components/ModeToggler";
import Header from "./components/Header";

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
const result = <p>{fullName("John", "Doe")}</p>;

//example how to use props and props.children

const data = {
  promo: "20% off",
  title: "All must to go",
};

function Promo() {
  return (
    <div>
      <h1>{data.promo}</h1>
      <p>{data.title}</p>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
      <Promo />
    </div>
  );
}



// props.children is used to pass data between components
function App() {
  return (
    <>
      <div className="App">
        <Header title="This is my h1" title2="h2 tag" p="test">
            {/* props.children*/}
          <h3>This is my h3</h3>
          </Header>
        <p>This is my first paragraph</p>
        {result}
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ul>
        <Card h2="This is h2 CARD 1" h3="This is h3 CARD 1" />
        <Card h2="This is h2 CARD 2" h3="This is h3 CARD 2" />
        <Card h2="This is h2 CARD 3" h3="This is h3 CARD 3" />
        <Btn />
        <Counter />
        <ModeToggler />
        
      </div>
    </>
  );
}

export default App;
