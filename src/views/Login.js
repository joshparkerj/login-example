import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({[key]:value});
  }

  handleClick = () => {
    // fake authentication here.
    this.props.history.push('/home');

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