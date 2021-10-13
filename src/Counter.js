import {increment, decrement} from './store/store'
import {connect} from 'react-redux'

// If this was a class based comp you need props in constructor and super
// constructor(props){
//     super(props)
// }

let Counter = (props) => {
    console.log("props: ",props)
    return(
        <div style={{display: "flex", alignItems: 'center', flexDirection: "column", fontFamily: 'monospace'}}>
            <h1>Counter is {props.pizza}</h1>
            <button onClick={() => props.counterOneIncrement(Number(props.match.params.amount))} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Increment</button>
            <button onClick={() => props.potato(Number(props.match.params.amount))} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Decrement</button>
            <button onClick={() => props.history.push("/")}>Home</button>
        </div>
    )
}

// connect this component below it - best practice

let mapStateToProps = (cat) => {
    return {
        pizza: cat.count,
        nameOfUser: cat.name
    }
}

// props.name-in-the obj
let mapDispatchToProps = (dispatch) => {
    return {
        counterOneIncrement: (amount) => dispatch(increment(amount)),
        potato: (amount) => dispatch(decrement(amount))
    }
}


let connectCounter = connect(mapStateToProps, mapDispatchToProps)(Counter) // mapStateToProps(reduxState)

export default connectCounter