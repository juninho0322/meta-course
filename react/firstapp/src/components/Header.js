

function Header(props) {
  

    return (
      <>
        <h1 className="Myh1">{props.title}</h1>
        <h2>{props.title2}</h2>
        {props.children}
      </>
    );
    
  }

  export default Header;