import { useState } from "react";

function ModeToggler() {
  const [mode, setMode] = useState("light");

  function handleClick() {
    
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    
    // Toggle the background color and text color based on the mode
    if(newMode === "light"){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
    else{
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    
  }
  return (
    <div>
      {console.log(mode)}
      <h1>{mode === "light" ? "Light_Mode_ON" : "Dark_Mode_ON"}</h1>
      <button onClick={handleClick}>Toggle Mode</button>

    </div>
    
  );
  
}

export default ModeToggler;
