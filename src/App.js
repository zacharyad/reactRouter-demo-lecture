import './App.css';
import Counter from './Counter.js'
import Restuarant from './Restaurant';
import {Route, NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="" />
        <nav>
          <NavLink to="/restaurant">Restaurant</NavLink>
          <NavLink to="./counter/1" activeClassName="active">Counter</NavLink>
        </nav>
      </header>
        <p>Howdy from App Component</p>

        <Route  exact path="/restaurant" render={() => <Restuarant menu={""} />} />
        <Route  exact path="/counter" component={Counter} />
        <Route   path="/counter/:amount" component={Counter} />
      
      
    </div>
  );
}

export default App;
