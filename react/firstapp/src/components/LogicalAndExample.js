function LogicalAndExample(){
    const val = prompt("Anything but a 0");
    return (
        <div>
            <h1>Please do not type in a zero</h1>
            {val && <h2>Thank you for not typing in a zero</h2>}
        </div>
    )
}

export default LogicalAndExample;