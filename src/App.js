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
      <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/home/:id' component={Home}/>
          <Route path='/adduser' component={AddUser}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
