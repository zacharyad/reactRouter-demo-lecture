
let Greeting = (props) => {
    console.log("Props - ", props)
    return (
        <>
        <h1>Welcome to the App!</h1>
        <h2>Now with new and improved smaller headers!</h2>
        <p>{props.someData}</p>
        </>
    )
}

export default Greeting