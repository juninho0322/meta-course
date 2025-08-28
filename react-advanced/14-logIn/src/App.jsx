
import './App.css'

const Button = ({ type, children, ...buttonProps }) => {
  const className = type ==="primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({children, ...buttonProps}) => {
  return (
    <Button
    type ="secondary"
    {...buttonProps}
    onClick={() => {alert("Logging in!");
    }}
    >
     {children}   
     </Button>
  );
};

function App() {
  

  return (
    <div className='App'>
      <header className='Header'>Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      {/* displays logging in because LoginButton passes type and onClick to Button and the spread is before the onclick event, if the spread is placed after
       the on click wont affect and displays logging in*/}
      <LoginButton type="secondary" onClick={()=> alert("Signing up!")}>
        Log in
      </LoginButton>
    </div>
  )
}

export default App
