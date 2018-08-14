import React, { Component } from 'react'
import './App.css'
import product from './images/shoes.jpg'
import suggestion1 from './images/shoes1.png'
import suggestion2 from './images/shoes2.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <h1 className="title">Sole Destroying Shoes, Ltd.</h1>
        </header>
        <div className="body">
          <div className="product-container">
            <img src={product} />
            <div className="text">
              <h2>Terrible Shoes</h2>
              rrp: £1,050
              <span>now only £500!</span>
              <div className="button">
              <span>Add to cart</span>
              </div>
            </div>
          </div>
          <div className="suggestions-container">
            <h2>You may also like...</h2>
          <div className="suggestion">
            <img src={suggestion1} />
            <h3>Hairbrush Fluff on a shoe</h3>
            <div className="button">
            <span>See more</span>
            </div>
          </div>

          <div className="suggestion">
            <img src={suggestion2} />
          <h3>Croc of Shit</h3>
            <div className="button">
            <span>See more</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
