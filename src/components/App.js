import React, { Component } from 'react'
import Header from './Header'
import Clock from './Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Clock />
        </main>
      </div>
    );
  }
}

export default App;
