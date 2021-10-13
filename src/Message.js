let Message = (props) => {
    console.log("********* props From message ", props)
    return(
        <div style={{display: "flex", flexDirection: "column", fontFamily: 'monospace'}}>
            <h1>Hey, I have a message for you.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nostrum earum dignissimos, excepturi incidunt omnis, porro ut alias sapiente voluptatum eum libero quae perspiciatis quaerat exercitationem illo voluptas non vel.</p>
                <p>{props.match.params.id}</p>
                <button onClick={() => props.history.push("/")}>HOME</button>
             </div>
    )
}

export default Message
