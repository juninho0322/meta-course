
import "./App.css";
import "./Nav.css";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import ModeToggler from "./components/ModeToggler";
import Header from "./components/Header";
import {Routes, Route, Link} from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import CurrentMessage from "./components/CurrentMessage";


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

        <nav className="nav">
          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/about" className="nav-item">About Me</Link>
        </nav>
        <Homepage/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>

        
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
        <CurrentMessage />
          


        
        
      </div>
    </>
  );
}

export default App;
