function Btn() {
  const clickHandler = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
}

export default Btn;
