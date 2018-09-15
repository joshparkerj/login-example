import React, { Component } from 'react';
import './login.css';
//import { authenticateUser } from '../data/data-service.js';
import axios from 'axios';
import {authenticateUser} from '../data/api.js';

class Login extends Component {
  state = {
    email: '',
    password: '',
    authenticated: false
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/health`)
      .then( res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]:value});
  }

  handleClick = () => {
    authenticateUser(this.state.email,this.state.password)
      .then( userId => {
        return this.props.history.push(`/home/${userId}`);
      })
      .catch(err => {
        alert(`not authenticated: ${err}`);
      })
  }

  render() {
    return (
      <div className="login">
        <div className="logo-container"></div>
        <input name="email"
               value={this.state.email}
               onChange={this.handleChange}
               placeholder="Email" />
        <input name="password"
               value={this.state.password}
               onChange={this.handleChange}
               placeholder="Password"
               />
        <div className="login-submit" onClick={this.handleClick}>Sign In</div>
      </div>
    )
  }
}

export default Login;