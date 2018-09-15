import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home.js';
import Login from './views/Login.js';
import AddUser from './views/AddUser.js';

class App extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <div className="app">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/adduser">Add User</a></li>
        </ul>
        <Router>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home/:id' component={Home}/>
            <Route path='/adduser' component={AddUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
