import { useState } from "react";
import LoggedIn from "../assets/user-interface.png";
import Loggedout from "../assets/logout.png";
import "../Buttons.css"
import HomePage from "../HomePage";

function LoginButton({login}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //arrow function to handle the click event
    //this function will toggle the isLoggedIn state
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
        login.onClick();
    };

    //arow function to render the button when the user is logged in
    const buttonLoggedIn = () => {
        return(
            <div className="buttons">
                <img src={LoggedIn} alt=""  />    
                <button className="login-button" onClick={handleClick}>
                Log In
                    
                </button>
            </div>
        )
    }

    //function expression to render the button when the user is logged out
    const buttonLoggedOut = function (){
        return(
            <div className="login-container">
                <div className="home-page">
                    <HomePage/>
                </div>
                <div className="buttons">
                    <img src={Loggedout} alt="" />
                    <button className="login-button" onClick={handleClick}>
                        Log out
                    </button>
                    
                </div>
            </div>
        );
    }

    return (
        <div className="buttons">
            {!isLoggedIn ? buttonLoggedIn() : buttonLoggedOut()}
        </div>
        
        
    );
}
export default LoginButton;