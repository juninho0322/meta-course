import { useState } from "react";

function ModeToggler() {
  const [mode, setMode] = useState("dark");

  function handleClick() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <h1>{mode === "dark" ? "darkMode_ON" : "lightMode_ON"}</h1>
      <button onClick={handleClick}>Toggle Mode</button>
    </div>
  );
}

export default ModeToggler;
