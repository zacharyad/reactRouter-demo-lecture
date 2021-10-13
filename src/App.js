import './App.css';
import Counter from './Counter.js'
import Message from './Message'
import Restaurant from './Restaurant'
import Greeting from './Greeting'
import {Route, Link} from 'react-router-dom'

function App() {
  let somedata = "Candle"
  return (
    <div className="App">
      <header className="App-header">
        <nav>
             {/* <a href="http://www.google.com"></a> */}
             <Link to="/">Home</Link>
            <Link to="/message/3">Messages</Link>
            <Link to="/counter">Counter</Link>
        </nav>
      </header>

      <Route  exact path="/" render={() => <Greeting someData={somedata} />} />
      <Route  exact path="/message" component={Message} />
      <Route  exact path="/message/:id" component={Message} />
      <Route  path="/counter" component={Counter} />
      <Route  path="/restaurant" component={Restaurant} />


    </div>
  );
}

export default App;
