import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home.js';
import Login from './views/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Working!
        </p>
        <Home />
        <Login />
      </div>
    );
  }
}

export default App;
