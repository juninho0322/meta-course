
// destructuring props to get title and title2
// is the same that doing props.title and props.title2
function Header({title, title2, children}) {
  

    return (
      <>
        <h1 className="Myh1">{title}</h1>
        <h2>{title2}</h2>
        {children}
      </>
    );
    
  }

  export default Header;