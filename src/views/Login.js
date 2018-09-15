import React, { Component } from 'react';
import './login.css';
import { authenticateUser } from '../data/data-service.js';
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
    const id = authenticateUser(this.state.email,this.state.password);
    if (id) return this.props.history.push(`/home/${id}`);
    console.log('failed to log in');

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