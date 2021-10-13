//React Hook method import
import {useState} from 'react'

let Restuarant = (props) => {
    // THIS IS NEW REACT HOOKS - Disregard for this for junior phase but use as a reference
    let [menu, setMenu] = useState("");
    
    return(
        <div style={{display: "flex", flexDirection: "column", fontFamily: 'monospace'}}>
            <h1>Welcome to Cornies Restaurant</h1>
            <button onClick={() => setMenu(!menu.length ? "Corn  - $500.00" : "")}>Click for a menu</button>
            <p>{menu}</p>
            </div>
    )
}

export default Restuarant
