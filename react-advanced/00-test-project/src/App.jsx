import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import DisplayPassingProps from './components/DisplayPassingProps';
import Counter from './components/Counter';

function App() {

  return (
    <>
      <DisplayPassingProps />
      <Counter />
    </>
  )
}

export default App
