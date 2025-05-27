import { useState } from "react";
import LoggedInIcon from "../assets/user-interface.png";
import LoggedOutIcon from "../assets/logout.png";
import "../Buttons.css";
import HomePage from "../HomePage";

function LoginButton({ login }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleClick() {
        setIsLoggedIn(!isLoggedIn);
        login?.onClick && login.onClick(); // safe optional chaining
    }

    // Renders view when user is logged OUT
    const renderLoggedOutView = () => (
        <div className="buttons">
            <img src={LoggedInIcon} alt="Logged out icon" />
            <button className="login-button" onClick={handleClick}>
                Log In
            </button>
        </div>
    );

    // Renders view when user is logged IN
    const renderLoggedInView = () => (
        <div className="login-container">
            <div className="home-page">
                <HomePage />
            </div>
            <div className="buttons">
                <img src={LoggedOutIcon} alt="Logged in icon" />
                <button className="login-button" onClick={handleClick}>
                    Log Out
                </button>
            </div>
        </div>
    );

    return isLoggedIn ? renderLoggedInView() : renderLoggedOutView();
}
export default LoginButton;
