import React, { Component } from 'react';
import './App.css';
import Ideas from './components/Ideas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>BrainStorm</h1>
        </div>
        <Ideas />
      </div>
    )
  }
}

export default App;
