import { useRef } from 'react'
import './App.css'



function App() {

  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  }
  

  return (
    <>
    <h1>Using useRef to access underlying DOM</h1>
    <input ref={formInputRef} type="text" />
    <button onClick={focusInput}> focus input </button>
   
    </>
  )
}

export default App
