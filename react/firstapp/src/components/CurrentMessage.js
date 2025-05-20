import Workdays from "./Workdays";
import Weekends from "./Weekends";

function Error(){
    return (
        <div className="error">
            <h1>Invalid input</h1>
            <p>Please enter a number between 1 and 7.</p>
        </div>
    )
}

function CurrentMessage(){
    const day = prompt("Enter a number between 1 and 7");

    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);

    let message;

    if(weekday){
        message =  <Workdays/>
    } else if(weekend){
        message = <Weekends/>
    }else {
        message = Error();
    }
    return (
        <div className="message">
            {message}
        </div>
    )

}

export default CurrentMessage;