import React, { Component } from 'react'
import './App.css'
// import product from './images/shoes.jpg'
// import suggestion1 from './images/shoes1.png'
// import suggestion2 from './images/shoes2.png'
import Solution1 from './Solution1'
import Solution2 from './Solution2'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
     <ul>
       <li>
         <Link to="/solution1">Solution 1</Link>
       </li>
       <li>
         <Link to="/solution2">Solution 2</Link>
       </li>
     </ul>

     <hr />

    <Route path="/solution1" component={Solution1} />
    <Route path="/solution2" component={Solution2} />
   </div>
 </Router>

      </div>
    );
  }
}

export default App;
