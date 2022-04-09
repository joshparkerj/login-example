import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import AddUser from './views/AddUser';

const App = function App() {
  return (
    <div className="app">
      <h1>LOGIN EXAMPLE</h1>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/home">Home</a></li>
        <li><a href="/adduser">Add User</a></li>
      </ul>
      <Router>
        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/" element={<h2>WELCOME TRAVELER, TO THE LOGIN EXAMPLE!</h2>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
